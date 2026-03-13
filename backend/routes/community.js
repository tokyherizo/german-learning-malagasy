const router = require('express').Router();
const Post   = require('../models/Post');

const REACTION_KEYS = ['like', 'love', 'haha', 'wow', 'sad', 'angry'];

function emptyReactions() {
  return { like: [], love: [], haha: [], wow: [], sad: [], angry: [] };
}

function normalisePost(post) {
  const likes = Array.isArray(post.likes) ? post.likes : [];
  const reactions = { ...emptyReactions(), ...(post.reactions || {}) };
  if ((!reactions.like || reactions.like.length === 0) && likes.length > 0) {
    reactions.like = likes;
  }

  const comments = (post.comments || []).map(c => ({
    ...c,
    reactions: { ...emptyReactions(), ...(c.reactions || {}) },
  }));

  return {
    ...post,
    reactions,
    comments,
    savedBy: Array.isArray(post.savedBy) ? post.savedBy : [],
  };
}

function reactionScore(reactions) {
  const w = { like: 1, love: 3, haha: 1.5, wow: 2, sad: 0.8, angry: 0.8 };
  return Object.entries(w).reduce((sum, [k, weight]) => sum + ((reactions[k] || []).length * weight), 0);
}

function postScore(post) {
  const ageHours = (Date.now() - new Date(post.createdAt).getTime()) / 3600000;
  const freshness = Math.max(0, 72 - ageHours) * 0.2;
  const commentsWeight = (post.comments || []).length * 1.6;
  const savesWeight = (post.savedBy || []).length * 1.2;
  return reactionScore(post.reactions || emptyReactions()) + commentsWeight + savesWeight + freshness;
}

function applyReaction(targetReactions, userId, reactionKey) {
  const current = { ...emptyReactions(), ...(targetReactions || {}) };
  for (const key of REACTION_KEYS) {
    current[key] = (current[key] || []).filter(id => id !== userId);
  }
  if (reactionKey && REACTION_KEYS.includes(reactionKey)) {
    current[reactionKey] = [...(current[reactionKey] || []), userId];
  }
  return current;
}

function getUserReaction(reactions, userId) {
  for (const key of REACTION_KEYS) {
    if ((reactions[key] || []).includes(userId)) return key;
  }
  return null;
}

function totalReactions(reactions) {
  return REACTION_KEYS.reduce((sum, key) => sum + ((reactions[key] || []).length), 0);
}

/* ── GET /api/community/feed?page=1&limit=20 ─────────────────────────── */
router.get('/feed', async (req, res, next) => {
  try {
    const page  = Math.max(1, parseInt(req.query.page)  || 1);
    const limit = Math.min(50, parseInt(req.query.limit) || 20);
    const type  = req.query.type || null; // optional filter
    const sort  = (req.query.sort || 'new').toLowerCase(); // new | hot | smart

    const query = type ? { type } : {};
    const rawPosts = await Post.find(query).lean();
    const normalized = rawPosts.map(normalisePost);

    if (sort === 'hot' || sort === 'smart') {
      normalized.sort((a, b) => postScore(b) - postScore(a));
    } else {
      normalized.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    const total = normalized.length;
    const start = (page - 1) * limit;
    const posts = normalized.slice(start, start + limit);

    res.json({ posts, total, page, pages: Math.ceil(total / limit) });
  } catch (err) { next(err); }
});

/* ── POST /api/community/posts ───────────────────────────────────────── */
router.post('/posts', async (req, res, next) => {
  try {
    const { authorId, authorName, authorLevel, type, content, imageUrl, videoUrl, lessonRef } = req.body;
    if (!authorId || !content?.trim())
      return res.status(400).json({ error: 'authorId et content sont requis' });

    const post = await Post.create({
      authorId,
      authorName: authorName || 'Utilisateur',
      authorLevel: authorLevel || 'A1',
      type: type || 'text',
      content: content.trim(),
      imageUrl: imageUrl || '',
      videoUrl: videoUrl || '',
      lessonRef: lessonRef || '',
      reactions: emptyReactions(),
    });
    res.status(201).json(normalisePost(post.toObject()));
  } catch (err) { next(err); }
});

/* ── PUT /api/community/posts/:id/react ─────────────────────────────── */
router.put('/posts/:id/react', async (req, res, next) => {
  try {
    const { userId, reaction } = req.body;
    if (!userId) return res.status(400).json({ error: 'userId requis' });
    if (reaction !== null && reaction !== undefined && !REACTION_KEYS.includes(reaction)) {
      return res.status(400).json({ error: 'reaction invalide' });
    }

    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post introuvable' });

    post.reactions = applyReaction(post.reactions, userId, reaction || null);
    post.likes = [...(post.reactions.like || [])]; // keep legacy field in sync
    await post.save();

    const mine = getUserReaction(post.reactions, userId);
    res.json({
      reactions: post.reactions,
      userReaction: mine,
      total: totalReactions(post.reactions),
    });
  } catch (err) { next(err); }
});

/* ── PUT /api/community/posts/:id/like ───────────────────────────────── */
router.put('/posts/:id/like', async (req, res, next) => {
  try {
    const { userId } = req.body;
    if (!userId) return res.status(400).json({ error: 'userId requis' });

    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post introuvable' });

    const current = { ...emptyReactions(), ...(post.reactions || {}) };
    const liked = (current.like || []).includes(userId) || (post.likes || []).includes(userId);
    post.reactions = applyReaction(current, userId, liked ? null : 'like');
    post.likes = [...(post.reactions.like || [])];
    await post.save();
    res.json({ likes: post.likes.length, liked: !liked, reactions: post.reactions });
  } catch (err) { next(err); }
});

/* ── PUT /api/community/posts/:id/save ───────────────────────────────── */
router.put('/posts/:id/save', async (req, res, next) => {
  try {
    const { userId } = req.body;
    if (!userId) return res.status(400).json({ error: 'userId requis' });

    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post introuvable' });

    const idx = post.savedBy.indexOf(userId);
    if (idx === -1) post.savedBy.push(userId);
    else post.savedBy.splice(idx, 1);
    await post.save();
    res.json({ saved: idx === -1 });
  } catch (err) { next(err); }
});

/* ── POST /api/community/posts/:id/comments ─────────────────────────── */
router.post('/posts/:id/comments', async (req, res, next) => {
  try {
    const { userId, userName, text } = req.body;
    if (!userId || !text?.trim()) return res.status(400).json({ error: 'userId et text requis' });

    const post = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          comments: {
            userId,
            userName: userName || 'Utilisateur',
            text: text.trim(),
            reactions: emptyReactions(),
          },
        },
      },
      { new: true }
    );
    if (!post) return res.status(404).json({ error: 'Post introuvable' });
    const created = post.comments[post.comments.length - 1];
    res.json({ ...created.toObject(), reactions: { ...emptyReactions(), ...(created.reactions || {}) } });
  } catch (err) { next(err); }
});

/* ── PUT /api/community/posts/:postId/comments/:commentId/react ─────── */
router.put('/posts/:postId/comments/:commentId/react', async (req, res, next) => {
  try {
    const { userId, reaction } = req.body;
    if (!userId) return res.status(400).json({ error: 'userId requis' });
    if (reaction !== null && reaction !== undefined && !REACTION_KEYS.includes(reaction)) {
      return res.status(400).json({ error: 'reaction invalide' });
    }

    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).json({ error: 'Post introuvable' });

    const comment = post.comments.id(req.params.commentId);
    if (!comment) return res.status(404).json({ error: 'Commentaire introuvable' });

    comment.reactions = applyReaction(comment.reactions, userId, reaction || null);
    await post.save();

    res.json({
      commentId: comment._id,
      reactions: comment.reactions,
      userReaction: getUserReaction(comment.reactions, userId),
      total: totalReactions(comment.reactions),
    });
  } catch (err) { next(err); }
});

/* ── DELETE /api/community/posts/:id ────────────────────────────────── */
router.delete('/posts/:id', async (req, res, next) => {
  try {
    const { userId } = req.body;
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post introuvable' });
    if (post.authorId !== userId) return res.status(403).json({ error: 'Non autorisé' });
    await post.deleteOne();
    res.json({ ok: true });
  } catch (err) { next(err); }
});

module.exports = router;
