const router = require('express').Router();
const Post   = require('../models/Post');

/* ── GET /api/community/feed?page=1&limit=20 ─────────────────────────── */
router.get('/feed', async (req, res, next) => {
  try {
    const page  = Math.max(1, parseInt(req.query.page)  || 1);
    const limit = Math.min(50, parseInt(req.query.limit) || 20);
    const type  = req.query.type || null; // optional filter

    const query = type ? { type } : {};
    const total = await Post.countDocuments(query);
    const posts = await Post.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

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
    });
    res.status(201).json(post);
  } catch (err) { next(err); }
});

/* ── PUT /api/community/posts/:id/like ───────────────────────────────── */
router.put('/posts/:id/like', async (req, res, next) => {
  try {
    const { userId } = req.body;
    if (!userId) return res.status(400).json({ error: 'userId requis' });

    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post introuvable' });

    const idx = post.likes.indexOf(userId);
    if (idx === -1) post.likes.push(userId);
    else post.likes.splice(idx, 1);
    await post.save();
    res.json({ likes: post.likes.length, liked: idx === -1 });
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
      { $push: { comments: { userId, userName: userName || 'Utilisateur', text: text.trim() } } },
      { new: true }
    );
    if (!post) return res.status(404).json({ error: 'Post introuvable' });
    res.json(post.comments[post.comments.length - 1]);
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
