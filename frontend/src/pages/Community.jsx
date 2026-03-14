import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

//  SVG icons 
const IcComment  = ({ s=18, c='currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
const IcBookmark = ({ s=18, c='currentColor', filled=false }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={filled ? c : 'none'} stroke={c} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
  </svg>
);
const IcShare    = ({ s=18, c='currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
  </svg>
);
const IcVideo    = ({ s=18, c='currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  </svg>
);
const IcUsers    = ({ s=18, c='currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IcTrending = ({ s=18, c='currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
    <polyline points="15 7 22 7 22 14"/>
  </svg>
);
const IcPlus     = ({ s=16, c='currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={2.5} strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);
const IcQuestion = ({ s=16, c='currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);
const IcBook     = ({ s=16, c='currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);
const IcTrash    = ({ s=15, c='currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/>
    <path d="M9 6V4h6v2"/>
  </svg>
);

//  Reactions (Facebook-style) 
const REACTIONS = [
  { key: 'like',  emoji: '👍', label: "J'aime",  color: '#6366f1' },
  { key: 'love',  emoji: '❤️', label: "J'adore", color: '#ef4444' },
  { key: 'haha',  emoji: '😂', label: 'Haha',    color: '#f59e0b' },
  { key: 'wow',   emoji: '😮', label: 'Waouh',   color: '#f59e0b' },
  { key: 'sad',   emoji: '😢', label: 'Triste',  color: '#06b6d4' },
  { key: 'angry', emoji: '😡', label: 'Grrr',    color: '#f97316' },
];

const emptyReactions = () => ({ like: [], love: [], haha: [], wow: [], sad: [], angry: [] });
const emptyCommentReactions = () => ({ like: [], love: [], haha: [], wow: [], sad: [], angry: [] });

// Count total reactions across all types
function totalReactions(reactions) {
  if (!reactions) return 0;
  return Object.values(reactions).reduce((s, a) => s + (Array.isArray(a) ? a.length : 0), 0);
}

// Get top 3 reaction types (non-empty) for display bubbles
function topReactions(reactions) {
  if (!reactions) return [];
  return REACTIONS
    .filter(r => (reactions[r.key] || []).length > 0)
    .sort((a, b) => (reactions[b.key] || []).length - (reactions[a.key] || []).length)
    .slice(0, 3)
    .map(r => r.emoji);
}

// Get user's current reaction key (or null)
function userReaction(reactions, userId) {
  if (!reactions) return null;
  for (const r of REACTIONS) {
    if ((reactions[r.key] || []).includes(userId)) return r.key;
  }
  return null;
}

//  Constants 
const API        = import.meta.env.VITE_API_URL || 'https://german-learning-malagasy.onrender.com/api';
const CACHE_KEY  = 'deutschmg_community_posts';
const CALLS_KEY  = 'deutschmg_community_calls';

const REACTION_WEIGHTS = {
  like: 1,
  love: 3,
  haha: 1.5,
  wow: 2,
  sad: 0.8,
  angry: 0.8,
};

const LEVEL_COLORS = { A1: '#6366f1', A2: '#8b5cf6', B1: '#06b6d4', B2: '#10b981' };

const TYPE_INFO = {
  text:     { label: 'Texte',    icon: null,       color: '#6366f1' },
  lesson:   { label: 'Leçon',    icon: IcBook,     color: '#06b6d4' },
  video:    { label: 'Vidéo',    icon: IcVideo,    color: '#f59e0b' },
  question: { label: 'Question', icon: IcQuestion, color: '#f97316' },
};

const SEED_POSTS = [
  {
    _id: 'seed1', authorId: 'user_anna', authorName: 'Anna Schmidt', authorLevel: 'B1',
    type: 'lesson',
    content: ' Je viens de terminer la leçon sur les articles définis (der, die, das)  enfin je comprends la logique ! Le genre en allemand suit des patterns, pas que des exceptions. Qui veut que j\'explique ma méthode ?',
    imageUrl: '', videoUrl: '',
    reactions: { like: ['user_1', 'user_2'], love: ['user_3'], haha: [], wow: [], sad: [], angry: [] },
    savedBy: [],
    comments: [
      { _id: 'c1', userId: 'user_leo', userName: 'Léo', text: "Oui s'il te plaît ! J'ai du mal avec ça ", createdAt: new Date(Date.now() - 3600000).toISOString() },
    ],
    createdAt: new Date(Date.now() - 7200000).toISOString(),
  },
  {
    _id: 'seed2', authorId: 'user_marco', authorName: 'Marco Randria', authorLevel: 'A2',
    type: 'question',
    content: ' Question : quelle est la différence entre "weil" et "denn" ? Les deux veulent dire "parce que" mais apparemment ils s\'utilisent différemment ?',
    imageUrl: '', videoUrl: '',
    reactions: { like: ['user_1'], love: [], haha: [], wow: ['user_anna'], sad: [], angry: [] },
    savedBy: ['user_1'],
    comments: [
      { _id: 'c2', userId: 'user_anna', userName: 'Anna', text: 'Avec "weil" le verbe va à la fin, avec "denn" il reste à la deuxième position.', createdAt: new Date(Date.now() - 1800000).toISOString() },
    ],
    createdAt: new Date(Date.now() - 10800000).toISOString(),
  },
  {
    _id: 'seed3', authorId: 'user_sarah', authorName: 'Sarah T.', authorLevel: 'A1',
    type: 'text',
    content: ' Jour 7 de mon apprentissage de l\'allemand ! J\'arrive maintenant à me présenter : "Ich heiße Sarah, ich komme aus Madagaskar und ich lerne Deutsch." Fierté totale ',
    imageUrl: '', videoUrl: '',
    reactions: { like: ['user_1', 'user_2'], love: ['user_3', 'user_4', 'user_marco'], haha: [], wow: [], sad: [], angry: [] },
    savedBy: [],
    comments: [],
    createdAt: new Date(Date.now() - 18000000).toISOString(),
  },
  {
    _id: 'seed4', authorId: 'user_luca', authorName: 'Luca Bernardi', authorLevel: 'B2',
    type: 'video',
    content: ' Conseil : regardez "Tagesschau in 100 Sekunden" sur YouTube  seulement 1min40 par jour mais très efficace pour progresser !',
    imageUrl: '', videoUrl: 'https://www.youtube.com/watch?v=example',
    reactions: { like: ['user_1'], love: [], haha: ['user_sarah'], wow: ['user_marco'], sad: [], angry: [] },
    savedBy: ['user_1', 'user_sarah'],
    comments: [
      { _id: 'c3', userId: 'user_marco', userName: 'Marco', text: "Super conseil, j'ai essayé aujourd'hui !", createdAt: new Date(Date.now() - 900000).toISOString() },
    ],
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
];

const SUGGESTED_USERS = [
  { id: 'u1', name: 'Anna Schmidt',  level: 'B1', followers: 142 },
  { id: 'u2', name: 'Marco Randria', level: 'A2', followers: 38  },
  { id: 'u3', name: 'Luca Bernardi', level: 'B2', followers: 301 },
];
const TRENDING_TOPICS = [
  { tag: '#Grammatik',      count: 42 }, { tag: '#A1Beginner',    count: 31 },
  { tag: '#Vokabeln',       count: 27 }, { tag: '#DeutschLernen', count: 54 },
  { tag: '#B1Prüfung',      count: 18 }, { tag: '#AlltagsDeutsch',count: 23 },
];

const CALL_THEMES = [
  'Conversation libre',
  'Grammaire',
  'Prononciation',
  'Vocabulaire',
  'Preparation examen',
];

const CALL_CATEGORIES = [
  'Jeux de role',
  'Correction orale',
  'Debat',
  'Presentation',
  'Q&A',
];

const CALL_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

function normaliseComment(comment) {
  return {
    ...comment,
    reactions: {
      ...emptyCommentReactions(),
      ...(comment?.reactions || {}),
    },
  };
}

function normalisePost(post) {
  const baseReactions = post?.reactions || emptyReactions();
  const likesFallback = Array.isArray(post?.likes) ? post.likes : [];
  const mergedReactions = {
    ...emptyReactions(),
    ...baseReactions,
    like: (baseReactions.like && baseReactions.like.length > 0) ? baseReactions.like : likesFallback,
  };
  return {
    ...post,
    reactions: mergedReactions,
    savedBy: Array.isArray(post?.savedBy) ? post.savedBy : [],
    comments: Array.isArray(post?.comments) ? post.comments.map(normaliseComment) : [],
  };
}

function reactionScore(reactions) {
  if (!reactions) return 0;
  return Object.entries(REACTION_WEIGHTS).reduce((sum, [k, w]) => {
    const count = Array.isArray(reactions[k]) ? reactions[k].length : 0;
    return sum + count * w;
  }, 0);
}

function commentScore(comment) {
  const ageHours = (Date.now() - new Date(comment.createdAt || Date.now()).getTime()) / 3600000;
  const freshBoost = Math.max(0, 24 - ageHours) * 0.05;
  return reactionScore(comment.reactions) + freshBoost;
}

function postScore(post, me, following) {
  const ageHours = (Date.now() - new Date(post.createdAt || Date.now()).getTime()) / 3600000;
  const freshness = Math.max(0, 72 - ageHours) * 0.2;
  const rxScore = reactionScore(post.reactions);
  const commentsWeight = (post.comments?.length || 0) * 1.6;
  const savesWeight = (post.savedBy?.length || 0) * 1.2;
  const affinity = post.authorId === me ? 1.4 : (following.includes(post.authorId) ? 1.25 : 1);
  return (rxScore + commentsWeight + savesWeight + freshness) * affinity;
}

function slugRoom(value) {
  return (value || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function loadCalls() {
  try {
    const raw = localStorage.getItem(CALLS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCalls(calls) {
  try {
    localStorage.setItem(CALLS_KEY, JSON.stringify(calls));
  } catch {
    /* ignore */
  }
}

//  localStorage helpers 
function loadCached() {
  try { const s = localStorage.getItem(CACHE_KEY); return s ? JSON.parse(s) : null; } catch { return null; }
}
function saveCache(posts) {
  try { localStorage.setItem(CACHE_KEY, JSON.stringify(posts)); } catch { /* ignore */ }
}

//  timeAgo 
function timeAgo(dateStr) {
  const diff = (Date.now() - new Date(dateStr).getTime()) / 1000;
  if (diff < 60)     return "à l'instant";
  if (diff < 3600)   return `${Math.floor(diff / 60)}min`;
  if (diff < 86400)  return `${Math.floor(diff / 3600)}h`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}j`;
  return `${Math.floor(diff / 604800)}sem`;
}

//  Avatar 
function Avatar({ name, level, size = 40 }) {
  const initial = (name || '?')[0].toUpperCase();
  const color   = LEVEL_COLORS[level] || '#6366f1';
  return (
    <div style={{ width: size, height: size, borderRadius: '50%', background: color + '22',
      border: `2px solid ${color}55`, display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: size * 0.38, fontWeight: 800, color, flexShrink: 0 }}>
      {initial}
    </div>
  );
}

//  Badges 
function LevelBadge({ level }) {
  const color = LEVEL_COLORS[level] || '#6366f1';
  return (
    <span style={{ fontSize: 10, fontWeight: 700, color, background: color + '18',
      border: `1px solid ${color}40`, borderRadius: 4, padding: '1px 6px', letterSpacing: '0.04em' }}>
      {level || 'A1'}
    </span>
  );
}
function TypeBadge({ type }) {
  const info = TYPE_INFO[type] || TYPE_INFO.text;
  return (
    <span style={{ fontSize: 10, fontWeight: 600, color: info.color,
      background: info.color + '15', borderRadius: 4, padding: '1px 6px' }}>
      {info.label}
    </span>
  );
}

//  ReactionPicker (Facebook hover) 
function ReactionButton({ reactions, currentUserId, il, onReact }) {
  const [open, setOpen]   = useState(false);
  const timerRef          = useRef(null);
  const myReactionKey     = userReaction(reactions, currentUserId);
  const myReaction        = REACTIONS.find(r => r.key === myReactionKey);
  const total             = totalReactions(reactions);
  const tops              = topReactions(reactions);

  const open_ = () => { clearTimeout(timerRef.current); setOpen(true); };
  const close_ = (delay = 200) => { timerRef.current = setTimeout(() => setOpen(false), delay); };

  const handleClick = () => {
    if (myReactionKey) { onReact(null); } // un-react
    else { onReact('like'); }
  };

  const color = myReaction ? myReaction.color : (il ? 'rgba(15,23,42,0.45)' : 'rgba(255,255,255,0.4)');

  return (
    <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}
      onMouseEnter={open_} onMouseLeave={() => close_(300)}>
      {/* Picker popup */}
      {open && (
        <div onMouseEnter={open_} onMouseLeave={() => close_(100)}
          style={{ position: 'absolute', bottom: '110%', left: 0, display: 'flex', gap: 4,
            background: il ? '#fff' : '#1e1e1e',
            border: `1px solid ${il ? 'rgba(0,0,0,0.10)' : 'rgba(255,255,255,0.12)'}`,
            borderRadius: 50, padding: '6px 10px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.22)',
            zIndex: 100,
            animation: 'rxappear 0.15s ease', whiteSpace: 'nowrap' }}>
          {REACTIONS.map(r => (
            <button key={r.key}
              title={r.label}
              onClick={() => { onReact(myReactionKey === r.key ? null : r.key); setOpen(false); }}
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: 22,
                lineHeight: 1, padding: '2px 3px', borderRadius: '50%', transition: 'transform 0.12s',
                transform: myReactionKey === r.key ? 'scale(1.35)' : 'scale(1)',
                filter: myReactionKey === r.key ? 'drop-shadow(0 0 4px ' + r.color + '88)' : 'none',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.4) translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform = myReactionKey === r.key ? 'scale(1.35)' : 'scale(1)'}
            >
              {r.emoji}
            </button>
          ))}
        </div>
      )}

      {/* Main button */}
      <button onClick={handleClick}
        style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 10px', borderRadius: 8,
          background: myReaction ? myReaction.color + '18' : 'transparent',
          border: 'none', cursor: 'pointer', color, fontSize: 12, fontWeight: myReaction ? 700 : 400,
          transition: 'all 0.15s', userSelect: 'none' }}>
        {/* Stacked reaction bubbles or default icon */}
        {tops.length > 0 ? (
          <span style={{ display: 'flex', gap: -2 }}>
            {tops.map((em, i) => (
              <span key={i} style={{ fontSize: 15, lineHeight: 1, marginLeft: i > 0 ? -4 : 0 }}>{em}</span>
            ))}
          </span>
        ) : (
          <span style={{ fontSize: 15 }}>👍</span>
        )}
        {myReaction && (
          <span style={{ color: myReaction.color, fontWeight: 700 }}>{myReaction.label}</span>
        )}
        {!myReaction && <span>Reagir</span>}
        {total > 0 && <span style={{ color: il ? 'rgba(15,23,42,0.55)' : 'rgba(255,255,255,0.5)', fontWeight: 400 }}>{total}</span>}
      </button>
    </div>
  );
}

//  ActionBtn 
function ActionBtn({ icon, label, active, activeColor, il, onClick }) {
  const [hov, setHov] = useState(false);
  const hovBg = activeColor ? activeColor + '18' : (il ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)');
  const color = active ? activeColor : (il ? 'rgba(15,23,42,0.45)' : 'rgba(255,255,255,0.4)');
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '5px 10px', borderRadius: 8,
        background: (active || hov) ? hovBg : 'transparent', border: 'none', cursor: 'pointer',
        color, fontSize: 12, fontWeight: 600, transition: 'all 0.15s' }}>
      {icon}
      {label !== '' && label != null && <span>{label}</span>}
    </button>
  );
}

function CommentReactionBar({ comment, currentUserId, il, onReact }) {
  const reactions = comment.reactions || emptyCommentReactions();
  const mine = userReaction(reactions, currentUserId);
  const total = totalReactions(reactions);
  const tops = topReactions(reactions);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
      <div style={{ display: 'flex', gap: 4 }}>
        {REACTIONS.map(r => {
          const active = mine === r.key;
          return (
            <button
              key={r.key}
              title={r.label}
              onClick={() => onReact(active ? null : r.key)}
              style={{
                border: active ? `1px solid ${r.color}66` : `1px solid ${il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.12)'}`,
                background: active ? `${r.color}20` : 'transparent',
                borderRadius: 999,
                padding: '1px 5px',
                fontSize: 12,
                cursor: 'pointer',
                lineHeight: 1.4,
              }}
            >
              {r.emoji}
            </button>
          );
        })}
      </div>
      <span style={{ fontSize: 11, color: il ? 'rgba(15,23,42,0.50)' : 'rgba(255,255,255,0.55)' }}>
        {tops.join(' ')} {total > 0 ? total : ''}
      </span>
    </div>
  );
}

//  PostCard 
function PostCard({ post, currentUserId, il, onReact, onSave, onComment, onCommentReact, onDelete }) {
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText]   = useState('');
  const [submitting, setSubmitting]     = useState(false);

  const bg      = il ? '#ffffff' : '#111111';
  const border  = il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.07)';
  const txt     = il ? '#0f172a' : '#f1f5f9';
  const txts    = il ? 'rgba(15,23,42,0.5)' : 'rgba(255,255,255,0.45)';
  const inputBg = il ? '#f8fafc' : '#1a1a1a';

  const saved  = (post.savedBy || []).includes(currentUserId);
  const isOwn  = post.authorId === currentUserId;
  const rxns   = post.reactions || emptyReactions();
  const sortedComments = useMemo(
    () => [...(post.comments || [])].sort((a, b) => commentScore(b) - commentScore(a)),
    [post.comments]
  );

  const handleComment = async () => {
    if (!commentText.trim() || submitting) return;
    setSubmitting(true);
    await onComment(post._id, commentText.trim());
    setCommentText('');
    setSubmitting(false);
  };

  return (
    <article style={{ background: bg, border: `1px solid ${border}`, borderRadius: 16, padding: '18px 20px', marginBottom: 12 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 14 }}>
        <Avatar name={post.authorName} level={post.authorLevel} size={40} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 700, fontSize: 14, color: txt }}>{post.authorName}</span>
            <LevelBadge level={post.authorLevel} />
            <TypeBadge type={post.type} />
            <span style={{ fontSize: 11, color: txts, marginLeft: 'auto' }}>{timeAgo(post.createdAt)}</span>
          </div>
        </div>
        {isOwn && (
          <button onClick={() => onDelete(post._id)}
            style={{ color: txts, background: 'transparent', border: 'none', cursor: 'pointer', padding: '2px 4px', borderRadius: 6 }}
            title="Supprimer"
            onMouseEnter={e => e.currentTarget.style.color = '#ef4444'}
            onMouseLeave={e => e.currentTarget.style.color = txts}>
            <IcTrash s={14} c="currentColor" />
          </button>
        )}
      </div>

      {/* Content */}
      <p style={{ fontSize: 14, lineHeight: 1.65, color: txt, marginBottom: 14, whiteSpace: 'pre-wrap' }}>{post.content}</p>

      {/* Video link */}
      {post.videoUrl && (
        <a href={post.videoUrl} target="_blank" rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#f59e0b',
            background: '#f59e0b10', border: '1px solid #f59e0b30', borderRadius: 8,
            padding: '8px 12px', marginBottom: 14, textDecoration: 'none' }}>
          <IcVideo s={14} c="#f59e0b" /> Voir la vidéo
        </a>
      )}

      {/* Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, paddingTop: 12, borderTop: `1px solid ${border}` }}>
        <ReactionButton reactions={rxns} currentUserId={currentUserId} il={il}
          onReact={rKey => onReact(post._id, rKey)} />

        <ActionBtn icon={<IcComment s={16} c="currentColor" />}
          label={post.comments.length > 0 ? post.comments.length : ''} il={il}
          onClick={() => setShowComments(v => !v)} active={showComments} activeColor="#6366f1" />

        <ActionBtn icon={<IcBookmark s={16} c={saved ? '#6366f1' : 'currentColor'} filled={saved} />}
          label={saved ? 'Sauve' : 'Sauver'} active={saved} activeColor="#6366f1" il={il}
          onClick={() => onSave(post._id)} />

        <div style={{ flex: 1 }} />
        <ActionBtn icon={<IcShare s={15} c="currentColor" />} label="Partager" il={il}
          onClick={() => { if (navigator.share) navigator.share({ text: post.content }); else navigator.clipboard?.writeText(post.content); }} />
      </div>

      {/* Comments */}
      {showComments && (
        <div style={{ marginTop: 14 }}>
          {sortedComments.map(c => (
            <div key={c._id} style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
              <Avatar name={c.userName} level="A1" size={28} />
              <div style={{ flex: 1, background: inputBg, borderRadius: 10, padding: '8px 12px' }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: txt }}>{c.userName}</span>
                <span style={{ fontSize: 11, color: txts, marginLeft: 8 }}>{timeAgo(c.createdAt)}</span>
                <p style={{ fontSize: 13, color: txt, margin: '4px 0 0', lineHeight: 1.5 }}>{c.text}</p>
                <CommentReactionBar
                  comment={c}
                  currentUserId={currentUserId}
                  il={il}
                  onReact={(reaction) => onCommentReact(post._id, c._id, reaction)}
                />
              </div>
            </div>
          ))}
          <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
            <Avatar name={currentUserId} level="A1" size={28} />
            <div style={{ flex: 1, display: 'flex', gap: 6 }}>
              <input value={commentText}
                onChange={e => setCommentText(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && !e.shiftKey && handleComment()}
                placeholder="Écrire un commentaire"
                style={{ flex: 1, background: inputBg, border: `1px solid ${border}`, borderRadius: 10,
                  padding: '8px 12px', fontSize: 13, color: txt, outline: 'none' }} />
              <button onClick={handleComment} disabled={!commentText.trim() || submitting}
                style={{ padding: '8px 14px', background: '#6366f1', color: '#fff', border: 'none',
                  borderRadius: 10, fontSize: 12, fontWeight: 700,
                  cursor: commentText.trim() ? 'pointer' : 'not-allowed',
                  opacity: commentText.trim() ? 1 : 0.5 }}>Envoyer</button>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

//  CreatePostModal 
function CreatePostModal({ il, user, onClose, onSubmit }) {
  const [type, setType]         = useState('text');
  const [content, setContent]   = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [saving, setSaving]     = useState(false);
  const textareaRef             = useRef(null);

  useEffect(() => { textareaRef.current?.focus(); }, []);

  const bg      = il ? '#ffffff' : '#111';
  const border  = il ? 'rgba(0,0,0,0.10)' : 'rgba(255,255,255,0.10)';
  const txt     = il ? '#0f172a' : '#f1f5f9';
  const txts    = il ? 'rgba(15,23,42,0.5)' : 'rgba(255,255,255,0.4)';
  const inputBg = il ? '#f8fafc' : '#181818';

  const handleSubmit = async () => {
    if (!content.trim() || saving) return;
    setSaving(true);
    await onSubmit({ type, content: content.trim(), videoUrl: videoUrl.trim() });
    setSaving(false);
    onClose();
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1000,
        background: il ? 'rgba(0,0,0,0.45)' : 'rgba(0,0,0,0.72)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
      onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{ background: bg, border: `1px solid ${border}`, borderRadius: 20, width: '100%',
          maxWidth: 540, padding: 28, boxShadow: '0 24px 80px rgba(0,0,0,0.4)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <span style={{ fontSize: 17, fontWeight: 800, color: txt }}>Nouveau post</span>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: txts, fontSize: 18 }}>×</button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <Avatar name={user?.name} level={user?.germanLevel} size={36} />
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: txt }}>{user?.name || 'Moi'}</div>
            <LevelBadge level={user?.germanLevel || 'A1'} />
          </div>
        </div>
        {/* Type selector */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 16, flexWrap: 'wrap' }}>
          {Object.entries(TYPE_INFO).map(([k, v]) => {
            const active = type === k;
            const Icon = v.icon;
            return (
              <button key={k} onClick={() => setType(k)}
                style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '5px 12px', borderRadius: 8,
                  background: active ? v.color + '22' : (il ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)'),
                  border: `1px solid ${active ? v.color + '60' : (il ? 'rgba(0,0,0,0.10)' : 'rgba(255,255,255,0.10)')}`,
                  color: active ? v.color : txts, fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>
                {Icon && <Icon s={13} c="currentColor" />}
                {v.label}
              </button>
            );
          })}
        </div>
        <textarea ref={textareaRef} value={content} onChange={e => setContent(e.target.value)} rows={4}
          placeholder={
            type === 'question' ? 'Posez votre question à la communauté' :
            type === 'lesson'   ? 'Partagez ce que vous avez appris' :
            type === 'video'    ? 'Décrivez la ressource vidéo' :
            'Quoi de neuf ? Partagez avec la communauté'
          }
          style={{ width: '100%', background: inputBg, border: `1px solid ${border}`, borderRadius: 12,
            padding: '12px 14px', fontSize: 14, color: txt, resize: 'none', outline: 'none',
            lineHeight: 1.6, boxSizing: 'border-box', fontFamily: 'inherit' }} />
        {type === 'video' && (
          <input value={videoUrl} onChange={e => setVideoUrl(e.target.value)}
            placeholder="Lien YouTube ou URL vidéo (optionnel)"
            style={{ width: '100%', background: inputBg, border: `1px solid ${border}`, borderRadius: 10,
              padding: '10px 14px', fontSize: 13, color: txt, outline: 'none', marginTop: 10, boxSizing: 'border-box' }} />
        )}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 18 }}>
          <span style={{ fontSize: 12, color: txts }}>{content.length}/2000</span>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={onClose}
              style={{ padding: '9px 18px', borderRadius: 10, background: 'transparent',
                border: `1px solid ${border}`, color: txts, fontSize: 13, cursor: 'pointer' }}>
              Annuler
            </button>
            <button onClick={handleSubmit} disabled={!content.trim() || saving}
              style={{ padding: '9px 22px', borderRadius: 10,
                background: content.trim() ? '#6366f1' : (il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)'),
                color: content.trim() ? '#fff' : txts, border: 'none', fontSize: 13, fontWeight: 700,
                cursor: content.trim() ? 'pointer' : 'not-allowed', transition: 'all 0.15s' }}>
              {saving ? 'Publication...' : 'Publier'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

//  Main Community Page 
export default function Community() {
  const { theme } = useTheme();
  const { user }  = useAuth();
  const il = theme === 'light';

  // Init: localStorage cache first, fallback to seed
  const [posts, _setPosts]      = useState(() => {
    const source = loadCached() || SEED_POSTS;
    return source.map(normalisePost);
  });
  const [filter, setFilter]     = useState('all');
  const [feedMode, setFeedMode] = useState('smart');
  const [showCreate, setShowCreate] = useState(false);
  const [following, setFollowing]   = useState([]);
  const [roomInput, setRoomInput]   = useState('');
  const [callRooms, setCallRooms]   = useState(() => loadCalls());
  const [roomForm, setRoomForm]     = useState(() => ({
    name: '',
    theme: CALL_THEMES[0],
    level: user?.germanLevel || 'A1',
    category: CALL_CATEGORIES[0],
    mode: 'video',
  }));

  // Helper that updates state + cache atomically
  const setPosts = useCallback((updater) => {
    _setPosts(prev => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      saveCache(next);
      return next;
    });
  }, []);

  // Sync from API on mount (no loading state  cache is shown instantly)
  useEffect(() => {
    fetch(`${API}/community/feed?limit=50`)
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (data?.posts?.length) {
          const normalised = data.posts.map(normalisePost);
          setPosts(normalised);
        }
      })
      .catch(() => { /* keep cache */ });
  }, [setPosts]);

  useEffect(() => {
    saveCalls(callRooms);
  }, [callRooms]);

  const me     = user?.id || user?._id || 'local_user';
  const myName = user?.name || 'Moi';

  const filteredPosts = useMemo(() => {
    const list = filter === 'all' ? [...posts] : posts.filter(p => p.type === filter);
    if (feedMode === 'recent') {
      return list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
    return list.sort((a, b) => postScore(b, me, following) - postScore(a, me, following));
  }, [posts, filter, feedMode, me, following]);

  //  Handlers 
  const handleReact = useCallback((postId, reactionKey) => {
    setPosts(ps => ps.map(p => {
      if (p._id !== postId) return p;
      const rxns = { ...emptyReactions(), ...(p.reactions || {}) };
      // Remove user from all reaction arrays
      const cleared = Object.fromEntries(Object.entries(rxns).map(([k, v]) => [k, v.filter(id => id !== me)]));
      // Add to new reaction (if not un-reacting)
      if (reactionKey) cleared[reactionKey] = [...(cleared[reactionKey] || []), me];
      return { ...p, reactions: cleared };
    }));
    try {
      fetch(`${API}/community/posts/${postId}/react`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: me, reaction: reactionKey }),
      });
    } catch { /* ignore */ }
  }, [me, setPosts]);

  const handleSave = useCallback((postId) => {
    setPosts(ps => ps.map(p => {
      if (p._id !== postId) return p;
      const saved = (p.savedBy || []).includes(me);
      return { ...p, savedBy: saved ? p.savedBy.filter(id => id !== me) : [...(p.savedBy || []), me] };
    }));
    try {
      fetch(`${API}/community/posts/${postId}/save`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId: me }) });
    } catch { /* ignore */ }
  }, [me, setPosts]);

  const handleComment = useCallback(async (postId, text) => {
    const newComment = {
      _id: `c${Date.now()}`,
      userId: me,
      userName: myName,
      text,
      createdAt: new Date().toISOString(),
      reactions: emptyCommentReactions(),
    };
    setPosts(ps => ps.map(p => p._id !== postId ? p : { ...p, comments: [...p.comments, newComment] }));
    try {
      await fetch(`${API}/community/posts/${postId}/comments`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: me, userName: myName, text }),
      });
    } catch { /* ignore */ }
  }, [me, myName, setPosts]);

  const handleCommentReact = useCallback((postId, commentId, reactionKey) => {
    setPosts(ps => ps.map(p => {
      if (p._id !== postId) return p;
      const nextComments = (p.comments || []).map(c => {
        if (c._id !== commentId) return c;
        const current = { ...emptyCommentReactions(), ...(c.reactions || {}) };
        const cleared = Object.fromEntries(
          Object.entries(current).map(([k, arr]) => [k, (arr || []).filter(id => id !== me)])
        );
        if (reactionKey) {
          cleared[reactionKey] = [...(cleared[reactionKey] || []), me];
        }
        return { ...c, reactions: cleared };
      });
      return { ...p, comments: nextComments };
    }));

    try {
      fetch(`${API}/community/posts/${postId}/comments/${commentId}/react`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: me, reaction: reactionKey }),
      });
    } catch {
      /* ignore */
    }
  }, [me, setPosts]);

  const handleDelete = useCallback((postId) => {
    setPosts(ps => ps.filter(p => p._id !== postId));
    try {
      fetch(`${API}/community/posts/${postId}`, {
        method: 'DELETE', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: me }),
      });
    } catch { /* ignore */ }
  }, [me, setPosts]);

  const handleCreatePost = useCallback(async ({ type, content, videoUrl }) => {
    const myLevel = user?.germanLevel || 'A1';
    const newPost = {
      _id: `local_${Date.now()}`, authorId: me, authorName: myName, authorLevel: myLevel,
      type, content, videoUrl, imageUrl: '',
      reactions: emptyReactions(), savedBy: [], comments: [],
      createdAt: new Date().toISOString(),
    };
    setPosts(ps => [newPost, ...ps]);
    try {
      const res = await fetch(`${API}/community/posts`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ authorId: me, authorName: myName, authorLevel: myLevel, type, content, videoUrl }),
      });
      if (res.ok) {
        const saved = await res.json();
        setPosts(ps => ps.map(p => p._id === newPost._id ? { ...saved, reactions: saved.reactions || emptyReactions(), savedBy: saved.savedBy || [] } : p));
      }
    } catch { /* optimistic update kept */ }
  }, [me, myName, user, setPosts]);

  const toggleFollow = (uid) => setFollowing(fs => fs.includes(uid) ? fs.filter(f => f !== uid) : [...fs, uid]);

  const openPracticeCall = useCallback((roomName, audioOnly = false) => {
    const room = slugRoom(roomName) || `deutsch-practice-${Date.now().toString(36)}`;
    const hash = audioOnly
      ? '#config.prejoinPageEnabled=true&config.startAudioOnly=true&config.startWithVideoMuted=true'
      : '#config.prejoinPageEnabled=true&config.startWithAudioMuted=false';
    window.open(`https://meet.jit.si/${room}${hash}`, '_blank', 'noopener,noreferrer');
  }, []);

  const createRoomAndJoin = useCallback(() => {
    const level = roomForm.level || user?.germanLevel || 'A1';
    const roomFromInput = slugRoom(roomForm.name);
    const fallbackRoom = `deutsch-${level.toLowerCase()}-${Date.now().toString(36)}`;
    const room = roomFromInput || fallbackRoom;
    const record = {
      id: `room_${Date.now()}`,
      room,
      host: myName,
      level,
      theme: roomForm.theme,
      category: roomForm.category,
      mode: roomForm.mode,
      createdAt: new Date().toISOString(),
    };
    setCallRooms(prev => [record, ...prev].slice(0, 12));
    setRoomInput(room);
    openPracticeCall(room, roomForm.mode === 'audio');
  }, [myName, openPracticeCall, roomForm, user]);

  const joinTypedRoom = useCallback((audioOnly = false) => {
    if (!roomInput.trim()) return;
    openPracticeCall(roomInput, audioOnly);
  }, [openPracticeCall, roomInput]);

  // Palette
  const bg     = il ? '#f0f2f5' : '#0d0d0d';
  const cardBg = il ? '#ffffff' : '#111111';
  const sideB  = il ? '#ffffff' : '#111111';
  const border = il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.07)';
  const txt    = il ? '#0f172a' : '#f1f5f9';
  const txts   = il ? 'rgba(15,23,42,0.5)' : 'rgba(255,255,255,0.4)';
  const txtm   = il ? 'rgba(15,23,42,0.7)' : 'rgba(255,255,255,0.65)';

  const FILTERS = [
    { key: 'all',      label: 'Tout' },
    { key: 'text',     label: 'Textes' },
    { key: 'lesson',   label: 'Leçons' },
    { key: 'video',    label: 'Vidéos' },
    { key: 'question', label: 'Questions' },
  ];

  const myPostsCount = posts.filter(p => p.authorId === me).length;
  const totalComments = posts.reduce((acc, p) => acc + (p.comments?.length || 0), 0);
  const totalReacts = posts.reduce((acc, p) => acc + totalReactions(p.reactions), 0);

  return (
    <div style={{ background: bg, minHeight: 'calc(100vh - 52px)', paddingTop: 52 }}>
      <div className="comm-layout" style={{ maxWidth: 1080, margin: '0 auto', padding: '28px 16px',
          display: 'grid', gridTemplateColumns: '260px 1fr 240px', gap: 20, alignItems: 'start' }}>

        {/*  LEFT SIDEBAR  */}
        <div style={{ position: 'sticky', top: 72 }}>
          {/* User card */}
          <div style={{ background: sideB, border: `1px solid ${border}`, borderRadius: 16, padding: '18px 16px', marginBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <Avatar name={user?.name} level={user?.germanLevel} size={44} />
              <div>
                <div style={{ fontSize: 14, fontWeight: 800, color: txt }}>{user?.name || 'Invité'}</div>
                <LevelBadge level={user?.germanLevel || 'A1'} />
              </div>
            </div>
            <div style={{ display: 'flex', gap: 16, marginBottom: 14 }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 17, fontWeight: 800, color: txt }}>{myPostsCount}</div>
                <div style={{ fontSize: 11, color: txts }}>Posts</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 17, fontWeight: 800, color: txt }}>{following.length}</div>
                <div style={{ fontSize: 11, color: txts }}>Abonnements</div>
              </div>
            </div>
            <button onClick={() => setShowCreate(true)}
              style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: 6, padding: '10px 0', background: '#6366f1', color: '#fff', border: 'none',
                borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>
              <IcPlus s={15} c="#fff" /> Créer un post
            </button>
          </div>
          {/* Filters */}
          <div style={{ background: sideB, border: `1px solid ${border}`, borderRadius: 16, padding: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 12 }}>
              <IcTrending s={14} c={txts} />
              <span style={{ fontSize: 11, fontWeight: 700, color: txts, textTransform: 'uppercase', letterSpacing: '0.07em' }}>Catégories</span>
            </div>
            {FILTERS.map(f => {
              const FilterIcon = TYPE_INFO[f.key]?.icon || IcUsers;
              const count = f.key === 'all' ? posts.length : posts.filter(p => p.type === f.key).length;
              return (
                <button key={f.key} onClick={() => setFilter(f.key)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 8, padding: '9px 10px',
                    borderRadius: 9, textAlign: 'left', transition: 'all 0.12s', marginBottom: 2,
                    background: filter === f.key ? '#6366f120' : 'transparent',
                    border: filter === f.key ? '1px solid #6366f140' : '1px solid transparent',
                    color: filter === f.key ? '#6366f1' : txtm,
                    fontSize: 13, fontWeight: filter === f.key ? 700 : 400, cursor: 'pointer' }}>
                  <FilterIcon s={14} c="currentColor" />
                  {f.label}
                  <span style={{ marginLeft: 'auto', fontSize: 11, color: txts }}>{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/*  MAIN FEED  */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <h1 style={{ fontSize: 20, fontWeight: 800, color: txt, margin: 0 }}>Communauté</h1>
            <span style={{ fontSize: 12, color: txts }}>{filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''}</span>
          </div>

          <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
            <button
              onClick={() => setFeedMode('smart')}
              style={{
                padding: '6px 12px',
                borderRadius: 999,
                border: `1px solid ${feedMode === 'smart' ? '#6366f150' : border}`,
                background: feedMode === 'smart' ? '#6366f118' : cardBg,
                color: feedMode === 'smart' ? '#6366f1' : txts,
                fontSize: 12,
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Pour toi (algorithme)
            </button>
            <button
              onClick={() => setFeedMode('recent')}
              style={{
                padding: '6px 12px',
                borderRadius: 999,
                border: `1px solid ${feedMode === 'recent' ? '#6366f150' : border}`,
                background: feedMode === 'recent' ? '#6366f118' : cardBg,
                color: feedMode === 'recent' ? '#6366f1' : txts,
                fontSize: 12,
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Plus recents
            </button>
          </div>

          <div style={{
            background: cardBg,
            border: `1px solid ${border}`,
            borderRadius: 14,
            padding: '10px 12px',
            marginBottom: 14,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
            gap: 10,
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: txt }}>{posts.length}</div>
              <div style={{ fontSize: 11, color: txts }}>Posts</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: txt }}>{totalComments}</div>
              <div style={{ fontSize: 11, color: txts }}>Commentaires</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: txt }}>{totalReacts}</div>
              <div style={{ fontSize: 11, color: txts }}>Reactions</div>
            </div>
          </div>

          <div style={{ background: cardBg, border: `1px solid ${border}`, borderRadius: 16, padding: '16px', marginBottom: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <IcVideo s={14} c={txts} />
                <span style={{ fontSize: 12, fontWeight: 800, color: txt }}>Salons de pratique (audio/video)</span>
              </div>
              <span style={{ fontSize: 11, color: txts }}>{callRooms.length} salon{callRooms.length > 1 ? 's' : ''}</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 8, marginBottom: 8 }}>
              <input
                value={roomForm.name}
                onChange={(e) => setRoomForm(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Nom du salon (optionnel)"
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  background: il ? '#f8fafc' : '#181818',
                  border: `1px solid ${border}`,
                  borderRadius: 10,
                  padding: '8px 10px',
                  color: txt,
                  fontSize: 12,
                  outline: 'none',
                }}
              />
              <select
                value={roomForm.level}
                onChange={(e) => setRoomForm(prev => ({ ...prev, level: e.target.value }))}
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  background: il ? '#f8fafc' : '#181818',
                  border: `1px solid ${border}`,
                  borderRadius: 10,
                  padding: '8px 10px',
                  color: txt,
                  fontSize: 12,
                  outline: 'none',
                }}
              >
                {CALL_LEVELS.map(level => <option key={level} value={level}>{level}</option>)}
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 10 }}>
              <select
                value={roomForm.theme}
                onChange={(e) => setRoomForm(prev => ({ ...prev, theme: e.target.value }))}
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  background: il ? '#f8fafc' : '#181818',
                  border: `1px solid ${border}`,
                  borderRadius: 10,
                  padding: '8px 10px',
                  color: txt,
                  fontSize: 12,
                  outline: 'none',
                }}
              >
                {CALL_THEMES.map(theme => <option key={theme} value={theme}>{theme}</option>)}
              </select>
              <select
                value={roomForm.category}
                onChange={(e) => setRoomForm(prev => ({ ...prev, category: e.target.value }))}
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  background: il ? '#f8fafc' : '#181818',
                  border: `1px solid ${border}`,
                  borderRadius: 10,
                  padding: '8px 10px',
                  color: txt,
                  fontSize: 12,
                  outline: 'none',
                }}
              >
                {CALL_CATEGORIES.map(category => <option key={category} value={category}>{category}</option>)}
              </select>
              <select
                value={roomForm.mode}
                onChange={(e) => setRoomForm(prev => ({ ...prev, mode: e.target.value }))}
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  background: il ? '#f8fafc' : '#181818',
                  border: `1px solid ${border}`,
                  borderRadius: 10,
                  padding: '8px 10px',
                  color: txt,
                  fontSize: 12,
                  outline: 'none',
                }}
              >
                <option value="video">Video</option>
                <option value="audio">Audio</option>
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 10 }}>
              <button
                onClick={createRoomAndJoin}
                style={{
                  padding: '8px 10px',
                  borderRadius: 10,
                  border: 'none',
                  background: '#6366f1',
                  color: '#fff',
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Creer et demarrer
              </button>
              <input
                value={roomInput}
                onChange={(e) => setRoomInput(e.target.value)}
                placeholder="Nom du salon a rejoindre"
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  background: il ? '#f8fafc' : '#181818',
                  border: `1px solid ${border}`,
                  borderRadius: 10,
                  padding: '8px 10px',
                  color: txt,
                  fontSize: 12,
                  outline: 'none',
                }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 10 }}>
              <button
                onClick={() => joinTypedRoom(false)}
                style={{
                  padding: '7px 8px',
                  borderRadius: 9,
                  border: `1px solid ${border}`,
                  background: 'transparent',
                  color: txt,
                  fontSize: 11,
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Rejoindre video
              </button>
              <button
                onClick={() => joinTypedRoom(true)}
                style={{
                  padding: '7px 8px',
                  borderRadius: 9,
                  border: `1px solid ${border}`,
                  background: 'transparent',
                  color: txt,
                  fontSize: 11,
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Rejoindre audio
              </button>
            </div>

            {callRooms.length > 0 && (
              <div style={{ borderTop: `1px solid ${border}`, paddingTop: 10 }}>
                {callRooms.slice(0, 6).map(room => (
                  <div key={room.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginBottom: 9 }}>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: txt, overflow: 'hidden', textOverflow: 'ellipsis' }}>{room.room}</div>
                      <div style={{ fontSize: 10, color: txts }}>
                        {(room.level || 'A1')} · {(room.theme || 'Conversation libre')} · {(room.category || 'Q&A')} · {(room.mode || 'video')}
                      </div>
                      <div style={{ fontSize: 10, color: txts }}>hote: {room.host}</div>
                    </div>
                    <button
                      onClick={() => openPracticeCall(room.room, room.mode === 'audio')}
                      style={{
                        padding: '5px 8px',
                        borderRadius: 8,
                        border: 'none',
                        background: '#6366f1',
                        color: '#fff',
                        fontSize: 10,
                        fontWeight: 700,
                        cursor: 'pointer',
                      }}
                    >
                      Join
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Shortcut bar */}
          <div style={{ background: cardBg, border: `1px solid ${border}`, borderRadius: 16, padding: '14px 16px',
              marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}
            onClick={() => setShowCreate(true)}>
            <Avatar name={user?.name} level={user?.germanLevel} size={36} />
            <div style={{ flex: 1, background: il ? '#f8fafc' : '#1a1a1a', border: `1px solid ${border}`,
                borderRadius: 24, padding: '10px 16px', fontSize: 13, color: txts }}>
              Partagez quelque chose avec la communauté
            </div>
          </div>

          {filteredPosts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: txts }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>🗂️</div>
              <div style={{ fontSize: 15, fontWeight: 600 }}>Aucun post pour l'instant</div>
              <div style={{ fontSize: 13, marginTop: 6 }}>Soyez le premier à partager quelque chose !</div>
            </div>
          )}

          {filteredPosts.map(post => (
            <PostCard key={post._id} post={post} currentUserId={me} il={il}
              onReact={handleReact} onSave={handleSave}
              onComment={handleComment}
              onCommentReact={handleCommentReact}
              onDelete={handleDelete} />
          ))}
        </div>

        {/*  RIGHT PANEL  */}
        <div style={{ position: 'sticky', top: 72 }}>
          {/* Suggested users */}
          <div style={{ background: sideB, border: `1px solid ${border}`, borderRadius: 16, padding: '16px', marginBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 14 }}>
              <IcUsers s={14} c={txts} />
              <span style={{ fontSize: 11, fontWeight: 700, color: txts, textTransform: 'uppercase', letterSpacing: '0.07em' }}>Membres actifs</span>
            </div>
            {SUGGESTED_USERS.map(u => {
              const isFollowing = following.includes(u.id);
              return (
                <div key={u.id} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <Avatar name={u.name} level={u.level} size={34} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: txt, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{u.name}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 1 }}>
                      <LevelBadge level={u.level} />
                      <span style={{ fontSize: 10, color: txts }}>{u.followers} abonnés</span>
                    </div>
                  </div>
                  <button onClick={() => toggleFollow(u.id)}
                    style={{ fontSize: 11, fontWeight: 700, padding: '5px 10px', borderRadius: 7, whiteSpace: 'nowrap',
                      background: isFollowing ? (il ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)') : '#6366f1',
                      color: isFollowing ? txts : '#fff', border: 'none', cursor: 'pointer' }}>
                    {isFollowing ? 'Abonné' : 'Suivre'}
                  </button>
                </div>
              );
            })}
          </div>
          {/* Trending */}
          <div style={{ background: sideB, border: `1px solid ${border}`, borderRadius: 16, padding: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 14 }}>
              <IcTrending s={14} c={txts} />
              <span style={{ fontSize: 11, fontWeight: 700, color: txts, textTransform: 'uppercase', letterSpacing: '0.07em' }}>Tendances</span>
            </div>
            {TRENDING_TOPICS.map(({ tag, count }, i) => (
              <div key={tag} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '7px 0', borderBottom: i < TRENDING_TOPICS.length - 1 ? `1px solid ${border}` : 'none' }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#6366f1' }}>{tag}</span>
                <span style={{ fontSize: 11, color: txts }}>{count} posts</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showCreate && (
        <CreatePostModal il={il} user={user} onClose={() => setShowCreate(false)} onSubmit={handleCreatePost} />
      )}

      <style>{`
        @keyframes rxappear {
          from { opacity: 0; transform: scale(0.85) translateY(6px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @media (max-width: 900px) {
          .comm-layout { grid-template-columns: 1fr !important; }
          .comm-layout > div:first-child,
          .comm-layout > div:last-child { position: static !important; display: none; }
        }
        @media (max-width: 1100px) and (min-width: 901px) {
          .comm-layout { grid-template-columns: 220px 1fr !important; }
          .comm-layout > div:last-child { display: none; }
        }
      `}</style>
    </div>
  );
}
