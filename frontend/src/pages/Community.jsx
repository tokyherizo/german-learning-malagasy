import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

// ─────────────── Inline SVG icons ────────────────────────────────────────────
const IcHeart    = ({ s=18, c='currentColor', filled=false }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={filled ? c : 'none'} stroke={c} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);
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
const IcImage    = ({ s=18, c='currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    <circle cx="8.5" cy="8.5" r="1.5"/>
    <polyline points="21 15 16 10 5 21"/>
  </svg>
);
const IcVideo    = ({ s=18, c='currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  </svg>
);
const IcChevron  = ({ s=16, c='currentColor', dir='down' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
    style={{ transform: dir === 'up' ? 'rotate(180deg)' : dir === 'left' ? 'rotate(90deg)' : dir === 'right' ? 'rotate(-90deg)' : 'none' }}>
    <polyline points="6 9 12 15 18 9"/>
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

// ─────────────── Constants ────────────────────────────────────────────────────
const API = 'https://german-learning-malagasy.onrender.com/api';

const LEVEL_COLORS = { A1: '#6366f1', A2: '#8b5cf6', B1: '#06b6d4', B2: '#10b981' };

const TYPE_INFO = {
  text:     { label: 'Texte',   icon: null,      color: '#6366f1' },
  lesson:   { label: 'Leçon',   icon: IcBook,    color: '#06b6d4' },
  video:    { label: 'Vidéo',   icon: IcVideo,   color: '#f59e0b' },
  question: { label: 'Question',icon: IcQuestion,color: '#f97316' },
};

const SEED_POSTS = [
  {
    _id: 'seed1',
    authorId: 'user_anna',
    authorName: 'Anna Schmidt',
    authorLevel: 'B1',
    type: 'lesson',
    content: '📚 Je viens de terminer la leçon sur les articles définis (der, die, das) — enfin je comprends la logique ! Le genre en allemand suit des patterns, pas que des exceptions. Qui veut que j\'explique ma méthode ?',
    imageUrl: '',
    videoUrl: '',
    likes: ['user_1', 'user_2', 'user_3'],
    savedBy: [],
    comments: [
      { _id: 'c1', userId: 'user_leo', userName: 'Léo', text: 'Oui s\'il te plaît ! J\'ai du mal avec ça 😅', createdAt: new Date(Date.now() - 3600000).toISOString() },
    ],
    createdAt: new Date(Date.now() - 7200000).toISOString(),
  },
  {
    _id: 'seed2',
    authorId: 'user_marco',
    authorName: 'Marco Randria',
    authorLevel: 'A2',
    type: 'question',
    content: '❓ Question : quelle est la différence entre "weil" et "denn" ? Les deux veulent dire "parce que" mais apparemment ils s\'utilisent différemment ?',
    imageUrl: '',
    videoUrl: '',
    likes: ['user_1'],
    savedBy: ['user_1'],
    comments: [
      { _id: 'c2', userId: 'user_anna', userName: 'Anna', text: 'Avec "weil" le verbe va à la fin, avec "denn" il reste à la deuxième position. Ex: "Ich lerne, weil es Spaß macht." vs "Ich lerne, denn es macht Spaß."', createdAt: new Date(Date.now() - 1800000).toISOString() },
    ],
    createdAt: new Date(Date.now() - 10800000).toISOString(),
  },
  {
    _id: 'seed3',
    authorId: 'user_sarah',
    authorName: 'Sarah T.',
    authorLevel: 'A1',
    type: 'text',
    content: '🇩🇪 Jour 7 de mon apprentissage de l\'allemand ! J\'arrive maintenant à me présenter : "Ich heiße Sarah, ich komme aus Madagaskar und ich lerne Deutsch." Fierté totale 🎉',
    imageUrl: '',
    videoUrl: '',
    likes: ['user_1', 'user_2', 'user_3', 'user_4', 'user_marco'],
    savedBy: [],
    comments: [],
    createdAt: new Date(Date.now() - 18000000).toISOString(),
  },
  {
    _id: 'seed4',
    authorId: 'user_luca',
    authorName: 'Luca Bernardi',
    authorLevel: 'B2',
    type: 'video',
    content: '🎬 Conseil pour progresser rapidement : regardez les actualités allemandes avec sous-titres. Je recommande "Tagesschau in 100 Sekunden" sur YouTube — seulement 1min40 par jour mais très efficace !',
    imageUrl: '',
    videoUrl: 'https://www.youtube.com/watch?v=example',
    likes: ['user_1', 'user_sarah', 'user_marco'],
    savedBy: ['user_1', 'user_sarah'],
    comments: [
      { _id: 'c3', userId: 'user_marco', userName: 'Marco', text: 'Super conseil, j\'ai essayé aujourd\'hui !', createdAt: new Date(Date.now() - 900000).toISOString() },
      { _id: 'c4', userId: 'user_sarah', userName: 'Sarah', text: 'Merci ! J\'y vais tout de suite 😍', createdAt: new Date(Date.now() - 600000).toISOString() },
    ],
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
];

const SUGGESTED_USERS = [
  { id: 'u1', name: 'Anna Schmidt',   level: 'B1', bio: 'Berlin → Madagascar', followers: 142 },
  { id: 'u2', name: 'Marco Randria',  level: 'A2', bio: 'Apprenant passionné',  followers: 38  },
  { id: 'u3', name: 'Luca Bernardi',  level: 'B2', bio: 'Professeur de DE',     followers: 301 },
];

const TRENDING_TOPICS = [
  { tag: '#Grammatik',       count: 42 },
  { tag: '#A1Beginner',      count: 31 },
  { tag: '#Vokabeln',        count: 27 },
  { tag: '#DeutschLernen',   count: 54 },
  { tag: '#B1Prüfung',       count: 18 },
  { tag: '#AlltagsDeutsch',  count: 23 },
];

// ─────────────── Helper: time ago ────────────────────────────────────────────
function timeAgo(dateStr) {
  const diff = (Date.now() - new Date(dateStr).getTime()) / 1000;
  if (diff < 60) return 'à l\'instant';
  if (diff < 3600) return `${Math.floor(diff / 60)}min`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}j`;
  return `${Math.floor(diff / 604800)}sem`;
}

// ─────────────── Avatar initial ──────────────────────────────────────────────
function Avatar({ name, level, size = 40 }) {
  const initial = (name || '?')[0].toUpperCase();
  const color   = LEVEL_COLORS[level] || '#6366f1';
  return (
    <div
      style={{
        width: size, height: size, borderRadius: '50%',
        background: color + '22', border: `2px solid ${color}55`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: size * 0.38, fontWeight: 800, color,
        flexShrink: 0,
      }}
    >
      {initial}
    </div>
  );
}

// ─────────────── Level badge ─────────────────────────────────────────────────
function LevelBadge({ level }) {
  const color = LEVEL_COLORS[level] || '#6366f1';
  return (
    <span style={{ fontSize: 10, fontWeight: 700, color, background: color + '18', border: `1px solid ${color}40`,
      borderRadius: 4, padding: '1px 6px', letterSpacing: '0.04em' }}>
      {level || 'A1'}
    </span>
  );
}

// ─────────────── Type badge ───────────────────────────────────────────────────
function TypeBadge({ type }) {
  const info = TYPE_INFO[type] || TYPE_INFO.text;
  return (
    <span style={{ fontSize: 10, fontWeight: 600, color: info.color, background: info.color + '15',
      borderRadius: 4, padding: '1px 6px' }}>
      {info.label}
    </span>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// Post Card
// ═══════════════════════════════════════════════════════════════════════════════
function PostCard({ post, currentUserId, il, onLike, onSave, onComment, onDelete }) {
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText]   = useState('');
  const [submitting, setSubmitting]     = useState(false);

  const bg     = il ? '#ffffff' : '#111111';
  const border = il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.07)';
  const txt    = il ? '#0f172a' : '#f1f5f9';
  const txts   = il ? 'rgba(15,23,42,0.5)' : 'rgba(255,255,255,0.45)';
  const inputBg= il ? '#f8fafc' : '#1a1a1a';

  const liked  = post.likes.includes(currentUserId);
  const saved  = post.savedBy.includes(currentUserId);
  const isOwn  = post.authorId === currentUserId;

  const handleComment = async () => {
    if (!commentText.trim() || submitting) return;
    setSubmitting(true);
    await onComment(post._id, commentText.trim());
    setCommentText('');
    setSubmitting(false);
  };

  return (
    <div style={{ background: bg, border: `1px solid ${border}`, borderRadius: 16, padding: '18px 20px', marginBottom: 12 }}>
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
          <button onClick={() => onDelete(post._id)} style={{ color: txts, background: 'transparent', border: 'none', cursor: 'pointer', padding: '2px 4px', borderRadius: 6 }}
            title="Supprimer" onMouseEnter={e => e.currentTarget.style.color = '#ef4444'} onMouseLeave={e => e.currentTarget.style.color = txts}>
            <IcTrash s={14} c="currentColor" />
          </button>
        )}
      </div>

      {/* Content */}
      <p style={{ fontSize: 14, lineHeight: 1.65, color: txt, marginBottom: 14, whiteSpace: 'pre-wrap' }}>{post.content}</p>

      {/* Video link */}
      {post.videoUrl && (
        <a href={post.videoUrl} target="_blank" rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#f59e0b', background: '#f59e0b10', border: '1px solid #f59e0b30', borderRadius: 8, padding: '8px 12px', marginBottom: 14, textDecoration: 'none' }}>
          <IcVideo s={14} c="#f59e0b" />
          Voir la vidéo
        </a>
      )}

      {/* Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, paddingTop: 12, borderTop: `1px solid ${border}` }}>
        <ActionBtn icon={<IcHeart s={16} c={liked ? '#ef4444' : 'currentColor'} filled={liked} />}
          label={post.likes.length} active={liked} activeColor="#ef4444" il={il}
          onClick={() => onLike(post._id)} />
        <ActionBtn icon={<IcComment s={16} c="currentColor" />}
          label={post.comments.length} il={il}
          onClick={() => setShowComments(v => !v)} active={showComments} activeColor="#6366f1" />
        <ActionBtn icon={<IcBookmark s={16} c={saved ? '#6366f1' : 'currentColor'} filled={saved} />}
          label="" active={saved} activeColor="#6366f1" il={il}
          onClick={() => onSave(post._id)} />
        <div style={{ flex: 1 }} />
        <ActionBtn icon={<IcShare s={15} c="currentColor" />} label="" il={il} onClick={() => {
          if (navigator.share) navigator.share({ text: post.content });
          else navigator.clipboard?.writeText(post.content);
        }} />
      </div>

      {/* Comments section */}
      {showComments && (
        <div style={{ marginTop: 14 }}>
          {post.comments.map(c => (
            <div key={c._id} style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
              <Avatar name={c.userName} level="A1" size={28} />
              <div style={{ flex: 1, background: inputBg, borderRadius: 10, padding: '8px 12px' }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: txt }}>{c.userName}</span>
                <span style={{ fontSize: 11, color: txts, marginLeft: 8 }}>{timeAgo(c.createdAt)}</span>
                <p style={{ fontSize: 13, color: txt, margin: '4px 0 0', lineHeight: 1.5 }}>{c.text}</p>
              </div>
            </div>
          ))}
          <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
            <Avatar name={currentUserId} level="A1" size={28} />
            <div style={{ flex: 1, display: 'flex', gap: 6 }}>
              <input
                value={commentText}
                onChange={e => setCommentText(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && !e.shiftKey && handleComment()}
                placeholder="Écrire un commentaire…"
                style={{ flex: 1, background: inputBg, border: `1px solid ${border}`, borderRadius: 10, padding: '8px 12px', fontSize: 13, color: txt, outline: 'none' }}
              />
              <button onClick={handleComment} disabled={!commentText.trim() || submitting}
                style={{ padding: '8px 14px', background: '#6366f1', color: '#fff', border: 'none', borderRadius: 10, fontSize: 12, fontWeight: 700, cursor: commentText.trim() ? 'pointer' : 'not-allowed', opacity: commentText.trim() ? 1 : 0.5 }}>
                ↩
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ActionBtn({ icon, label, active, activeColor, il, onClick }) {
  const [hov, setHov] = useState(false);
  const base  = il ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)';
  const hovBg = activeColor ? activeColor + '18' : base;
  const color = active ? activeColor : (il ? 'rgba(15,23,42,0.45)' : 'rgba(255,255,255,0.4)');
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '5px 10px', borderRadius: 8,
        background: (active || hov) ? hovBg : 'transparent', border: 'none', cursor: 'pointer',
        color, fontSize: 12, fontWeight: 600, transition: 'all 0.15s' }}>
      {icon}
      {label !== '' && <span>{label}</span>}
    </button>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// Create Post Modal
// ═══════════════════════════════════════════════════════════════════════════════
function CreatePostModal({ il, user, onClose, onSubmit }) {
  const [type, setType]       = useState('text');
  const [content, setContent] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [saving, setSaving]   = useState(false);
  const textareaRef           = useRef(null);

  useEffect(() => { textareaRef.current?.focus(); }, []);

  const overlayColor = il ? 'rgba(0,0,0,0.45)' : 'rgba(0,0,0,0.72)';
  const bg   = il ? '#ffffff' : '#111';
  const border = il ? 'rgba(0,0,0,0.10)' : 'rgba(255,255,255,0.10)';
  const txt  = il ? '#0f172a' : '#f1f5f9';
  const txts = il ? 'rgba(15,23,42,0.5)' : 'rgba(255,255,255,0.4)';
  const inputBg = il ? '#f8fafc' : '#181818';

  const handleSubmit = async () => {
    if (!content.trim() || saving) return;
    setSaving(true);
    await onSubmit({ type, content: content.trim(), videoUrl: videoUrl.trim() });
    setSaving(false);
    onClose();
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, background: overlayColor, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
      onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{ background: bg, border: `1px solid ${border}`, borderRadius: 20, width: '100%', maxWidth: 540, padding: 28, boxShadow: '0 24px 80px rgba(0,0,0,0.4)' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <span style={{ fontSize: 17, fontWeight: 800, color: txt }}>Nouveau post</span>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: txts, fontSize: 18 }}>✕</button>
        </div>

        {/* Author */}
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
            return (
              <button key={k} onClick={() => setType(k)}
                style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '5px 12px', borderRadius: 8,
                  background: active ? v.color + '22' : (il ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)'),
                  border: `1px solid ${active ? v.color + '60' : (il ? 'rgba(0,0,0,0.10)' : 'rgba(255,255,255,0.10)')}`,
                  color: active ? v.color : txts, fontSize: 12, fontWeight: 600, cursor: 'pointer',
                }}>
                {v.icon && <v.icon s={13} c="currentColor" />}
                {v.label}
              </button>
            );
          })}
        </div>

        {/* Textarea */}
        <textarea
          ref={textareaRef}
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder={
            type === 'question' ? 'Posez votre question à la communauté…' :
            type === 'lesson'   ? 'Partagez ce que vous avez appris…' :
            type === 'video'    ? 'Décrivez la ressource vidéo que vous partagez…' :
            'Qu\'avez-vous à partager avec la communauté ?'
          }
          rows={4}
          style={{ width: '100%', background: inputBg, border: `1px solid ${border}`, borderRadius: 12, padding: '12px 14px',
            fontSize: 14, color: txt, resize: 'none', outline: 'none', lineHeight: 1.6, boxSizing: 'border-box', fontFamily: 'inherit' }}
        />

        {/* Video URL */}
        {type === 'video' && (
          <input value={videoUrl} onChange={e => setVideoUrl(e.target.value)}
            placeholder="Lien YouTube ou URL de la vidéo (optionnel)"
            style={{ width: '100%', background: inputBg, border: `1px solid ${border}`, borderRadius: 10, padding: '10px 14px',
              fontSize: 13, color: txt, outline: 'none', marginTop: 10, boxSizing: 'border-box' }} />
        )}

        {/* Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 18 }}>
          <span style={{ fontSize: 12, color: txts }}>{content.length}/2000</span>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={onClose}
              style={{ padding: '9px 18px', borderRadius: 10, background: 'transparent', border: `1px solid ${border}`, color: txts, fontSize: 13, cursor: 'pointer' }}>
              Annuler
            </button>
            <button onClick={handleSubmit} disabled={!content.trim() || saving}
              style={{ padding: '9px 22px', borderRadius: 10, background: content.trim() ? '#6366f1' : (il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)'),
                color: content.trim() ? '#fff' : txts, border: 'none', fontSize: 13, fontWeight: 700, cursor: content.trim() ? 'pointer' : 'not-allowed', transition: 'all 0.15s' }}>
              {saving ? 'Publication…' : 'Publier'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// Main Community Page
// ═══════════════════════════════════════════════════════════════════════════════
export default function Community() {
  const { theme } = useTheme();
  const { user }  = useAuth();
  const il = theme === 'light';

  const [posts, setPosts]           = useState(SEED_POSTS);
  const [filter, setFilter]         = useState('all');
  const [showCreate, setShowCreate] = useState(false);
  const [following, setFollowing]   = useState([]);
  const [apiLoaded, setApiLoaded]   = useState(false);

  // Palette
  const bg     = il ? '#f0f2f5' : '#0d0d0d';
  const cardBg = il ? '#ffffff' : '#111111';
  const sideB  = il ? '#ffffff' : '#111111';
  const border = il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.07)';
  const txt    = il ? '#0f172a' : '#f1f5f9';
  const txts   = il ? 'rgba(15,23,42,0.5)' : 'rgba(255,255,255,0.4)';
  const txtm   = il ? 'rgba(15,23,42,0.7)' : 'rgba(255,255,255,0.65)';

  // Fetch posts from API (gracefully falls back to seed data)
  useEffect(() => {
    fetch(`${API}/community/feed?limit=30`)
      .then(r => r.ok ? r.json() : null)
      .then(data => { if (data?.posts?.length) { setPosts(data.posts); setApiLoaded(true); } })
      .catch(() => {});
  }, []);

  const filteredPosts = filter === 'all' ? posts : posts.filter(p => p.type === filter);

  // ── Handlers ──────────────────────────────────────────────────────────────
  const handleLike = async (postId) => {
    const me = user?.id || user?._id || 'local_user';
    setPosts(ps => ps.map(p => {
      if (p._id !== postId) return p;
      const liked = p.likes.includes(me);
      return { ...p, likes: liked ? p.likes.filter(id => id !== me) : [...p.likes, me] };
    }));
    try {
      await fetch(`${API}/community/posts/${postId}/like`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId: me }) });
    } catch { /* ignore: optimistic update already applied */ }
  };

  const handleSave = async (postId) => {
    const me = user?.id || user?._id || 'local_user';
    setPosts(ps => ps.map(p => {
      if (p._id !== postId) return p;
      const saved = p.savedBy.includes(me);
      return { ...p, savedBy: saved ? p.savedBy.filter(id => id !== me) : [...p.savedBy, me] };
    }));
    try {
      await fetch(`${API}/community/posts/${postId}/save`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId: me }) });
    } catch { /* ignore: optimistic update already applied */ }
  };

  const handleComment = async (postId, text) => {
    const me     = user?.id || user?._id || 'local_user';
    const myName = user?.name || 'Moi';
    const newComment = { _id: `c${Date.now()}`, userId: me, userName: myName, text, createdAt: new Date().toISOString() };
    setPosts(ps => ps.map(p => p._id !== postId ? p : { ...p, comments: [...p.comments, newComment] }));
    try {
      await fetch(`${API}/community/posts/${postId}/comments`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId: me, userName: myName, text }) });
    } catch { /* ignore: optimistic update already applied */ }
  };

  const handleDelete = async (postId) => {
    const me = user?.id || user?._id || 'local_user';
    setPosts(ps => ps.filter(p => p._id !== postId));
    try {
      await fetch(`${API}/community/posts/${postId}`, { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId: me }) });
    } catch { /* ignore: optimistic update already applied */ }
  };

  const handleCreatePost = async ({ type, content, videoUrl }) => {
    const me     = user?.id || user?._id || `local_${Date.now()}`;
    const myName = user?.name || 'Moi';
    const myLevel= user?.germanLevel || 'A1';
    const newPost = {
      _id: `local_${Date.now()}`, authorId: me, authorName: myName, authorLevel: myLevel,
      type, content, videoUrl, imageUrl: '', likes: [], savedBy: [], comments: [],
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
        setPosts(ps => ps.map(p => p._id === newPost._id ? saved : p));
      }
    } catch { /* ignore: optimistic update already applied */ }
  };

  const toggleFollow = (uid) => {
    setFollowing(fs => fs.includes(uid) ? fs.filter(f => f !== uid) : [...fs, uid]);
  };

  const FILTERS = [
    { key: 'all',      label: 'Tout' },
    { key: 'text',     label: 'Textes' },
    { key: 'lesson',   label: 'Leçons' },
    { key: 'video',    label: 'Vidéos' },
    { key: 'question', label: 'Questions' },
  ];

  return (
    <div style={{ background: bg, minHeight: 'calc(100vh - 52px)', paddingTop: 52 }}>
      <div className="comm-layout" style={{ maxWidth: 1080, margin: '0 auto', padding: '28px 16px', display: 'grid', gridTemplateColumns: '260px 1fr 240px', gap: 20, alignItems: 'start' }}>

        {/* ─── LEFT SIDEBAR ─────────────────────────────────────────────── */}
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
                <div style={{ fontSize: 17, fontWeight: 800, color: txt }}>{posts.filter(p => p.authorId === (user?.id || user?._id)).length}</div>
                <div style={{ fontSize: 11, color: txts }}>Posts</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 17, fontWeight: 800, color: txt }}>{following.length}</div>
                <div style={{ fontSize: 11, color: txts }}>Abonnements</div>
              </div>
            </div>
            <button onClick={() => setShowCreate(true)}
              style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                padding: '10px 0', background: '#6366f1', color: '#fff', border: 'none', borderRadius: 10,
                fontSize: 13, fontWeight: 700, cursor: 'pointer', letterSpacing: '0.01em' }}>
              <IcPlus s={15} c="#fff" />
              Créer un post
            </button>
          </div>

          {/* Categories */}
          <div style={{ background: sideB, border: `1px solid ${border}`, borderRadius: 16, padding: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 12 }}>
              <IcTrending s={14} c={txts} />
              <span style={{ fontSize: 11, fontWeight: 700, color: txts, textTransform: 'uppercase', letterSpacing: '0.07em' }}>Catégories</span>
            </div>
            {FILTERS.map(f => {
              const FilterIcon = TYPE_INFO[f.key]?.icon || IcUsers;
              return (
                <button key={f.key} onClick={() => setFilter(f.key)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 8, padding: '9px 10px', borderRadius: 9,
                    background: filter === f.key ? '#6366f120' : 'transparent', border: filter === f.key ? '1px solid #6366f140' : '1px solid transparent',
                    color: filter === f.key ? '#6366f1' : txtm, fontSize: 13, fontWeight: filter === f.key ? 700 : 400, cursor: 'pointer',
                    textAlign: 'left', transition: 'all 0.12s', marginBottom: 2 }}>
                  <FilterIcon s={14} c="currentColor" />
                  {f.label}
                  <span style={{ marginLeft: 'auto', fontSize: 11, color: txts }}>
                    {f.key === 'all' ? posts.length : posts.filter(p => p.type === f.key).length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ─── MAIN FEED ────────────────────────────────────────────────── */}
        <div>
          {/* Feed header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <h1 style={{ fontSize: 20, fontWeight: 800, color: txt, margin: 0 }}>Communauté</h1>
            <span style={{ fontSize: 12, color: txts }}>{filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''}</span>
          </div>

          {/* Create post shortcut */}
          <div style={{ background: cardBg, border: `1px solid ${border}`, borderRadius: 16, padding: '14px 16px', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}
            onClick={() => setShowCreate(true)}>
            <Avatar name={user?.name} level={user?.germanLevel} size={36} />
            <div style={{ flex: 1, background: il ? '#f8fafc' : '#1a1a1a', border: `1px solid ${border}`, borderRadius: 24, padding: '10px 16px', fontSize: 13, color: txts }}>
              Partagez quelque chose avec la communauté…
            </div>
          </div>

          {/* Loading */}
          {!apiLoaded && posts === SEED_POSTS && (
            <div style={{ textAlign: 'center', padding: '8px 0 16px', color: txts, fontSize: 12, opacity: 0.7 }}>Synchronisation avec le serveur…</div>
          )}

          {/* Posts */}
          {filteredPosts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: txts }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>💬</div>
              <div style={{ fontSize: 15, fontWeight: 600 }}>Aucun post pour l'instant</div>
              <div style={{ fontSize: 13, marginTop: 6 }}>Soyez le premier à partager quelque chose !</div>
            </div>
          )}

          {filteredPosts.map(post => (
            <PostCard
              key={post._id}
              post={post}
              currentUserId={user?.id || user?._id || 'local_user'}
              il={il}
              onLike={handleLike}
              onSave={handleSave}
              onComment={handleComment}
              onDelete={handleDelete}
            />
          ))}
        </div>

        {/* ─── RIGHT PANEL ──────────────────────────────────────────────── */}
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
                    <div style={{ fontSize: 12, fontWeight: 700, color: txt, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{u.name}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 1 }}>
                      <LevelBadge level={u.level} />
                      <span style={{ fontSize: 10, color: txts }}>{u.followers} abonnés</span>
                    </div>
                  </div>
                  <button onClick={() => toggleFollow(u.id)}
                    style={{ fontSize: 11, fontWeight: 700, padding: '5px 10px', borderRadius: 7,
                      background: isFollowing ? (il ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)') : '#6366f1',
                      color: isFollowing ? txts : '#fff', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                    {isFollowing ? 'Abonné' : 'Suivre'}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Trending topics */}
          <div style={{ background: sideB, border: `1px solid ${border}`, borderRadius: 16, padding: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 14 }}>
              <IcTrending s={14} c={txts} />
              <span style={{ fontSize: 11, fontWeight: 700, color: txts, textTransform: 'uppercase', letterSpacing: '0.07em' }}>Tendances</span>
            </div>
            {TRENDING_TOPICS.map(({ tag, count }, i) => (
              <div key={tag} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '7px 0', borderBottom: i < TRENDING_TOPICS.length - 1 ? `1px solid ${border}` : 'none', cursor: 'pointer' }}
                onClick={() => {}}>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#6366f1' }}>{tag}</span>
                <span style={{ fontSize: 11, color: txts }}>{count} posts</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Create Post Modal */}
      {showCreate && (
        <CreatePostModal il={il} user={user} onClose={() => setShowCreate(false)} onSubmit={handleCreatePost} />
      )}

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .comm-layout {
            grid-template-columns: 1fr !important;
          }
          .comm-layout > div:first-child,
          .comm-layout > div:last-child {
            position: static !important;
            display: none;
          }
        }
        @media (max-width: 1100px) and (min-width: 901px) {
          .comm-layout {
            grid-template-columns: 220px 1fr !important;
          }
          .comm-layout > div:last-child {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
