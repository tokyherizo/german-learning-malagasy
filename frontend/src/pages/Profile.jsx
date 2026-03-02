import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { progressService } from '../services/progress';
import { useTheme } from '../context/ThemeContext';

/* ── SVG Icons ── */
const IcoZap    = ({ s = 20, c = 'currentColor' }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const IcoFlame  = ({ s = 20, c = 'currentColor' }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 3z"/></svg>;
const IcoBook   = ({ s = 20, c = 'currentColor' }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>;
const IcoPencil = ({ s = 20, c = 'currentColor' }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 114 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>;
const IcoType   = ({ s = 20, c = 'currentColor' }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>;
const IcoTarget = ({ s = 20, c = 'currentColor' }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const IcoFlag   = ({ s = 20, c = 'currentColor' }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>;
const IcoStack  = ({ s = 20, c = 'currentColor' }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
const IcoClock  = ({ s = 20, c = 'currentColor' }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const IcoTrophy = ({ s = 20, c = 'currentColor' }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 010-5H6"/><path d="M18 9h1.5a2.5 2.5 0 000-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0012 0V2z"/></svg>;
const IcoStar   = ({ s = 20, c = 'currentColor' }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
const IcoUser   = ({ s = 20, c = 'currentColor' }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const IcoShield = ({ s = 20, c = 'currentColor' }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const IcoLogout = ({ s = 20, c = 'currentColor' }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>;
const IcoReset  = ({ s = 20, c = 'currentColor' }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 109-9 9.75 9.75 0 00-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>;

/* ── Circular XP ring ── */
const XPRing = ({ pct, color, size = 110 }) => {
  const r = 44;
  const circ = 2 * Math.PI * r;
  const dash = circ * (pct / 100);
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
      <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(128,128,128,0.12)" strokeWidth="8" />
      <circle cx="50" cy="50" r={r} fill="none" stroke={color} strokeWidth="8"
        strokeDasharray={`${dash} ${circ}`} strokeLinecap="round"
        style={{ transition: 'stroke-dasharray 1.2s cubic-bezier(.4,0,.2,1)', filter: `drop-shadow(0 0 6px ${color}88)` }} />
    </svg>
  );
};

/* ── Achievement data ── */
const ALL_ACHIEVEMENTS = [
  { id: 'first_lesson',   Icon: IcoFlag,   title: 'Première leçon',   desc: '1 leçon terminée',      accent: '#6366f1' },
  { id: 'five_lessons',   Icon: IcoStack,  title: 'Cinq leçons',       desc: '5 leçons terminées',    accent: '#8b5cf6' },
  { id: 'first_words',    Icon: IcoType,   title: 'Maître des mots',   desc: '10 mots appris',        accent: '#06b6d4' },
  { id: 'hundred_xp',    Icon: IcoZap,    title: 'Centaine XP',       desc: '100 XP gagnés',         accent: '#f59e0b' },
  { id: 'streak_3',      Icon: IcoClock,  title: 'Série de 3 jours',  desc: '3 jours consécutifs',   accent: '#ef4444' },
  { id: 'perfect_score', Icon: IcoTrophy, title: 'Perfection',        desc: '100% bonnes réponses',  accent: '#10b981' },
];

const LEVEL_COLORS  = { A1: '#6366f1', A2: '#8b5cf6', B1: '#06b6d4', B2: '#10b981' };
const XP_THRESHOLDS = { A1: 500, A2: 1500, B1: 3000, B2: 6000 };
const LEVEL_ORDER   = ['A1', 'A2', 'B1', 'B2'];

const TABS = [
  { id: 'overview',     label: 'Aperçu',  Icon: IcoZap    },
  { id: 'achievements', label: 'Succès',  Icon: IcoTrophy },
  { id: 'account',      label: 'Compte',  Icon: IcoUser   },
  { id: 'danger',       label: 'Danger',  Icon: IcoShield },
];

/* ── Chip ── */
function Chip({ label, icon, color, il }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 20,
      background: color + (il ? '14' : '18'), color, border: `1px solid ${color}28`,
    }}>
      {icon}{label}
    </span>
  );
}

/* ── BentoCard ── */
function BentoCard({ Icon, value, label, accent, cardBg, cardBd, txtMain, txtSub, il }) {
  return (
    <div style={{
      background: cardBg, border: `1px solid ${cardBd}`,
      borderRadius: 20, padding: '18px 16px',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
      textAlign: 'center', position: 'relative', overflow: 'hidden',
      boxShadow: il ? '0 2px 12px rgba(0,0,0,0.05)' : 'none',
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: `linear-gradient(90deg, ${accent}00, ${accent}, ${accent}00)`, opacity: 0.9 }} />
      <div style={{ width: 40, height: 40, borderRadius: 12,
        background: accent + '18', border: `1px solid ${accent}28`,
        display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon s={20} c={accent} />
      </div>
      <span style={{ fontSize: 26, fontWeight: 900, color: txtMain, lineHeight: 1, letterSpacing: '-0.02em' }}>{value}</span>
      <span style={{ fontSize: 10, fontWeight: 800, color: txtSub, textTransform: 'uppercase', letterSpacing: '0.09em' }}>{label}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────── */
export default function Profile() {
  const navigate  = useNavigate();
  const { user, logout, updateProfile, changePassword, error: authError, clearError } = useAuth();
  const { theme } = useTheme();
  const il = theme === 'light';
  const progress  = progressService.getProgress();

  const [activeTab,     setActiveTab]     = useState('overview');
  const [editingName,   setEditingName]   = useState(false);
  const [nameInput,     setNameInput]     = useState(user?.name ?? '');
  const [nameSuccess,   setNameSuccess]   = useState('');
  const nameRef = useRef(null);

  const [showPwForm, setShowPwForm] = useState(false);
  const [pwForm,     setPwForm]     = useState({ current: '', next: '', confirm: '' });
  const [pwError,    setPwError]    = useState('');
  const [pwSuccess,  setPwSuccess]  = useState('');
  const [resetConfirm, setResetConfirm] = useState(false);

  const accuracy    = progressService.getAccuracyRate();
  const currentLvl  = progress.level || 'A1';
  const nextLvl     = LEVEL_ORDER[LEVEL_ORDER.indexOf(currentLvl) + 1];
  const maxXP       = XP_THRESHOLDS[currentLvl] ?? 500;
  const xpPct       = Math.min(100, Math.round((progress.xp / maxXP) * 100));
  const earnedIds   = new Set((progress.achievements || []).map(a => a.id));
  const earnedMap   = Object.fromEntries((progress.achievements || []).map(a => [a.id, a]));
  const earnedCount = earnedIds.size;
  const initial     = user?.isGuest ? '?' : (user?.name?.[0] ?? '?').toUpperCase();
  const lvlColor    = LEVEL_COLORS[currentLvl] || '#6366f1';

  /* ── palette ── */
  const pageBg   = il ? '#f4f4f8'           : '#0a0a0f';
  const cardBg   = il ? '#ffffff'           : '#13131a';
  const cardBd   = il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.07)';
  const txtMain  = il ? '#0d0d0d'           : '#f0f0f0';
  const txtSub   = il ? 'rgba(0,0,0,0.48)' : 'rgba(255,255,255,0.45)';
  const txtMuted = il ? 'rgba(0,0,0,0.28)' : 'rgba(255,255,255,0.28)';
  const divClr   = il ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)';
  const inpBg    = il ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)';
  const inpBd    = il ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.10)';
  const btnSecBg = il ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)';
  const btnSecBd = il ? 'rgba(0,0,0,0.10)' : 'rgba(255,255,255,0.10)';
  const btnSecCl = il ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.55)';

  const inputStyle = {
    background: inpBg, border: `1.5px solid ${inpBd}`,
    color: txtMain, borderRadius: 12, padding: '11px 16px',
    fontSize: 14, outline: 'none', width: '100%', transition: 'border-color 0.15s',
  };

  const STATS = [
    { Icon: IcoZap,    value: progress.xp,                             label: 'XP Total',   accent: '#f59e0b' },
    { Icon: IcoFlame,  value: progress.streak ?? 0,                     label: 'Jours série', accent: '#ef4444' },
    { Icon: IcoBook,   value: progress.stats?.lessonsCompleted ?? 0,    label: 'Leçons',     accent: '#6366f1' },
    { Icon: IcoPencil, value: progress.stats?.exercisesCompleted ?? 0,  label: 'Exercices',  accent: '#8b5cf6' },
    { Icon: IcoType,   value: progress.stats?.wordsLearned ?? 0,        label: 'Mots',       accent: '#06b6d4' },
    { Icon: IcoTarget, value: `${accuracy}%`,                           label: 'Précision',  accent: '#10b981' },
  ];

  const handleSaveName = async () => {
    clearError?.();
    setNameSuccess('');
    const ok = await updateProfile({ name: nameInput.trim() });
    if (ok) { setNameSuccess('Nom mis à jour'); setEditingName(false); }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setPwError(''); setPwSuccess('');
    if (pwForm.next.length < 6) { setPwError('Mot de passe trop court (min. 6 caractères)'); return; }
    if (pwForm.next !== pwForm.confirm) { setPwError('Les mots de passe ne correspondent pas'); return; }
    const ok = await changePassword({ current: pwForm.current, newPass: pwForm.next });
    if (ok) { setPwSuccess('Mot de passe changé'); setPwForm({ current: '', next: '', confirm: '' }); setShowPwForm(false); }
    else    { setPwError('Mot de passe actuel incorrect'); }
  };

  const handleReset  = () => { progressService.resetProgress(); setResetConfirm(false); navigate('/'); };
  const handleLogout = () => { logout(); navigate('/login'); };

  return (
    <div style={{ background: pageBg, minHeight: '100vh', paddingTop: 52, color: txtMain }}>

      {/* ══ COVER BANNER ══ */}
      <div style={{
        position: 'relative', height: 155, overflow: 'hidden',
        background: `linear-gradient(130deg, ${lvlColor}bb 0%, ${lvlColor}44 55%, transparent 100%)`,
      }}>
        <div style={{ position: 'absolute', top: -50, right: -50, width: 240, height: 240, borderRadius: '50%',
          background: lvlColor, opacity: il ? 0.10 : 0.15, filter: 'blur(55px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -40, left: '25%', width: 180, height: 180, borderRadius: '50%',
          background: lvlColor, opacity: il ? 0.07 : 0.10, filter: 'blur(45px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 28, bottom: 10, fontWeight: 900,
          fontSize: 'clamp(3.5rem,12vw,7rem)', letterSpacing: '-0.05em', lineHeight: 1,
          color: lvlColor, opacity: 0.13, userSelect: 'none', pointerEvents: 'none' }}>
          {currentLvl}
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 18px' }}>

        {/* ══ PROFILE CARD ══ */}
        <div style={{
          marginTop: -58,
          background: cardBg, border: `1px solid ${cardBd}`,
          borderRadius: 28, padding: '20px 24px 22px',
          boxShadow: il ? '0 8px 40px rgba(0,0,0,0.10)' : '0 8px 40px rgba(0,0,0,0.50)',
          display: 'flex', alignItems: 'flex-start', gap: 22, flexWrap: 'wrap',
        }}>
          {/* XP Ring + Avatar */}
          <div style={{ position: 'relative', flexShrink: 0, width: 108, height: 108 }}>
            <div style={{ position: 'absolute', inset: 0 }}>
              <XPRing pct={xpPct} color={lvlColor} size={108} />
            </div>
            <div style={{
              position: 'absolute', inset: 9, borderRadius: '50%',
              background: il ? '#0d0d0d' : '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 30, fontWeight: 900, color: il ? '#fff' : '#0d0d0d',
            }}>{initial}</div>
            <span style={{
              position: 'absolute', bottom: 2, right: 2,
              width: 22, height: 22, borderRadius: 8,
              background: cardBg, border: `1px solid ${cardBd}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 9, fontWeight: 900, color: txtSub,
            }}>{user?.provider === 'google' ? 'G' : '@'}</span>
          </div>

          {/* Info */}
          <div style={{ flex: 1, minWidth: 180, display: 'flex', flexDirection: 'column', gap: 7 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              <h1 style={{ fontSize: 'clamp(1.25rem,4vw,1.65rem)', fontWeight: 900, letterSpacing: '-0.03em', color: txtMain, lineHeight: 1, margin: 0 }}>
                {user?.name}
              </h1>
              <span style={{ fontSize: 10, fontWeight: 800, padding: '3px 10px', borderRadius: 20,
                background: lvlColor + '20', color: lvlColor, border: `1px solid ${lvlColor}40`, letterSpacing: '0.06em' }}>
                Niveau {currentLvl}
              </span>
            </div>
            <p style={{ fontSize: 13, color: txtSub, margin: 0 }}>{user?.email}</p>

            {/* XP bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ flex: 1, height: 5, borderRadius: 99, background: il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
                <div style={{ height: '100%', borderRadius: 99, background: lvlColor, width: `${xpPct}%`, transition: 'width 1s ease' }} />
              </div>
              <span style={{ fontSize: 11, fontWeight: 700, color: txtMuted, whiteSpace: 'nowrap' }}>
                {progress.xp} / {maxXP} XP{nextLvl ? ` → ${nextLvl}` : ''}
              </span>
            </div>

            {/* Chips */}
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              <Chip label={`${progress.streak ?? 0} jours`}                      icon={<IcoFlame s={11} c="#ef4444"/>}  color="#ef4444" il={il}/>
              <Chip label={`${earnedCount} succès`}                               icon={<IcoTrophy s={11} c="#f59e0b"/>} color="#f59e0b" il={il}/>
              <Chip label={`${progress.stats?.wordsLearned ?? 0} mots`}          icon={<IcoType s={11} c="#06b6d4"/>}  color="#06b6d4" il={il}/>
            </div>
          </div>
        </div>

        {/* ══ TABS ══ */}
        <div style={{
          marginTop: 14, display: 'flex', gap: 5,
          background: cardBg, border: `1px solid ${cardBd}`,
          borderRadius: 20, padding: 5,
          boxShadow: il ? '0 2px 12px rgba(0,0,0,0.06)' : 'none',
        }}>
          {TABS.map(tab => {
            const active = activeTab === tab.id;
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                style={{
                  flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                  padding: '9px 6px', borderRadius: 15, border: 'none', cursor: 'pointer',
                  fontSize: 12, fontWeight: active ? 800 : 600,
                  background: active ? lvlColor : 'transparent',
                  color: active ? '#fff' : txtSub,
                  transition: 'all 0.22s cubic-bezier(.4,0,.2,1)',
                  boxShadow: active ? `0 4px 14px ${lvlColor}50` : 'none',
                }}>
                <tab.Icon s={14} c={active ? '#fff' : txtSub} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ══ TAB CONTENT ══ */}
        <div style={{ marginTop: 14, paddingBottom: 56 }}>

          {/* ── Tab: Aperçu ── */}
          {activeTab === 'overview' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {/* Bento grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>

                {/* XP — big card, 2 cols */}
                <div style={{
                  gridColumn: 'span 2',
                  background: cardBg, border: `1px solid ${cardBd}`,
                  borderRadius: 22, padding: '22px 24px',
                  display: 'flex', alignItems: 'center', gap: 20,
                  position: 'relative', overflow: 'hidden',
                  boxShadow: il ? '0 2px 16px rgba(0,0,0,0.06)' : 'none',
                }}>
                  <div style={{ position: 'absolute', right: -15, top: -15, width: 110, height: 110,
                    borderRadius: '50%', background: '#f59e0b', opacity: 0.07, filter: 'blur(22px)', pointerEvents: 'none' }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 4, borderRadius: '22px 0 0 22px',
                    background: `linear-gradient(180deg, #f59e0b, #f59e0b88)` }} />
                  <div style={{ width: 54, height: 54, borderRadius: 16, flexShrink: 0,
                    background: '#f59e0b18', border: '1px solid #f59e0b28',
                    display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IcoZap s={28} c="#f59e0b" />
                  </div>
                  <div>
                    <div style={{ fontSize: 38, fontWeight: 900, color: txtMain, lineHeight: 1, letterSpacing: '-0.04em' }}>
                      {STATS[0].value}
                    </div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: txtSub, textTransform: 'uppercase', letterSpacing: '0.09em', marginTop: 5 }}>
                      XP Total
                    </div>
                  </div>
                </div>

                {/* Streak — 1 col */}
                <BentoCard Icon={STATS[1].Icon} value={STATS[1].value} label={STATS[1].label} accent={STATS[1].accent}
                  cardBg={cardBg} cardBd={cardBd} txtMain={txtMain} txtSub={txtSub} il={il} />

                {/* 4 remaining */}
                {STATS.slice(2).map((s, i) => (
                  <BentoCard key={i} Icon={s.Icon} value={s.value} label={s.label} accent={s.accent}
                    cardBg={cardBg} cardBd={cardBd} txtMain={txtMain} txtSub={txtSub} il={il} />
                ))}
              </div>

              {/* Last activity */}
              {progress.lastActivity && (
                <div style={{
                  background: cardBg, border: `1px solid ${cardBd}`,
                  borderRadius: 18, padding: '14px 20px',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  boxShadow: il ? '0 2px 12px rgba(0,0,0,0.04)' : 'none',
                }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: txtSub }}>Dernière activité</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: txtMain }}>
                    {new Date(progress.lastActivity).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* ── Tab: Succès ── */}
          {activeTab === 'achievements' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 13, color: txtSub, fontWeight: 600 }}>
                  {earnedCount} / {ALL_ACHIEVEMENTS.length} débloqués
                </span>
                <div style={{ height: 5, width: 110, borderRadius: 99, background: il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
                  <div style={{ height: '100%', borderRadius: 99, background: lvlColor, width: `${Math.round((earnedCount / ALL_ACHIEVEMENTS.length) * 100)}%`, transition: 'width 1s ease' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: 10 }}>
                {ALL_ACHIEVEMENTS.map(ach => {
                  const earned = earnedIds.has(ach.id);
                  const earnedData = earnedMap[ach.id];
                  const ic = earned ? ach.accent : (il ? 'rgba(0,0,0,0.20)' : 'rgba(255,255,255,0.20)');
                  return (
                    <div key={ach.id} style={{
                      display: 'flex', alignItems: 'center', gap: 14,
                      borderRadius: 20, padding: '16px 18px',
                      background: earned
                        ? (il ? `${ach.accent}0d` : `${ach.accent}12`)
                        : (il ? 'rgba(0,0,0,0.02)' : 'rgba(255,255,255,0.02)'),
                      border: `1px solid ${earned ? ach.accent + '28' : (il ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)')}`,
                      opacity: earned ? 1 : 0.48,
                      boxShadow: earned && !il ? `0 0 0 1px ${ach.accent}15` : 'none',
                    }}>
                      <div style={{
                        width: 48, height: 48, borderRadius: 15, flexShrink: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: earned ? ach.accent + '1a' : (il ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)'),
                        border: `1px solid ${earned ? ach.accent + '30' : (il ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)')}`,
                        boxShadow: earned ? `0 4px 14px ${ach.accent}28` : 'none',
                      }}>
                        <ach.Icon s={22} c={ic} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontWeight: 800, fontSize: 14, color: earned ? txtMain : txtSub }}>{ach.title}</div>
                        <div style={{ fontSize: 11, color: txtMuted, marginTop: 2 }}>
                          {earned && earnedData
                            ? `Obtenu le ${new Date(earnedData.earnedAt).toLocaleDateString('fr-FR')}`
                            : ach.desc}
                        </div>
                      </div>
                      {earned && <IcoStar s={16} c={ach.accent} />}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── Tab: Compte ── */}
          {activeTab === 'account' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

              {/* Name */}
              <div style={{ background: cardBg, border: `1px solid ${cardBd}`, borderRadius: 22, padding: '22px 24px',
                boxShadow: il ? '0 2px 16px rgba(0,0,0,0.06)' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                  <IcoUser s={15} c={lvlColor} />
                  <span style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.09em', color: txtSub }}>
                    Nom d&apos;affichage
                  </span>
                </div>
                {editingName ? (
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <input ref={nameRef} autoFocus value={nameInput}
                      onChange={e => setNameInput(e.target.value)}
                      onKeyDown={e => { if (e.key === 'Enter') handleSaveName(); if (e.key === 'Escape') setEditingName(false); }}
                      style={{ ...inputStyle, flex: '1 1 160px' }}
                      onFocus={e => { e.target.style.borderColor = lvlColor; }}
                      onBlur={e => { e.target.style.borderColor = inpBd; }} />
                    <button onClick={handleSaveName}
                      style={{ padding: '11px 20px', borderRadius: 12, fontSize: 13, fontWeight: 800, cursor: 'pointer',
                        background: lvlColor, color: '#fff', border: 'none' }}>
                      Enregistrer
                    </button>
                    <button onClick={() => setEditingName(false)}
                      style={{ padding: '11px 16px', borderRadius: 12, fontSize: 13, fontWeight: 600, cursor: 'pointer',
                        background: btnSecBg, color: btnSecCl, border: `1px solid ${btnSecBd}` }}>
                      Annuler
                    </button>
                  </div>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                    <span style={{ fontSize: 16, fontWeight: 700, color: txtMain }}>{user?.name}</span>
                    <button onClick={() => { setEditingName(true); setNameSuccess(''); }}
                      style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, padding: '7px 14px',
                        borderRadius: 10, fontWeight: 700, cursor: 'pointer',
                        background: btnSecBg, color: btnSecCl, border: `1px solid ${btnSecBd}` }}>
                      <IcoPencil s={13} c={btnSecCl} /> Modifier
                    </button>
                  </div>
                )}
                {nameSuccess && <p style={{ fontSize: 12, marginTop: 10, fontWeight: 600, color: '#16a34a' }}>{nameSuccess} ✓</p>}
                {authError   && <p style={{ fontSize: 12, marginTop: 10, fontWeight: 600, color: '#dc2626' }}>{authError}</p>}
              </div>

              {/* Email */}
              <div style={{ background: cardBg, border: `1px solid ${cardBd}`, borderRadius: 22, padding: '18px 24px',
                boxShadow: il ? '0 2px 16px rgba(0,0,0,0.06)' : 'none',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.09em', color: txtSub, marginBottom: 6 }}>
                    Adresse e-mail
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: txtMain }}>{user?.email}</div>
                </div>
                <span style={{ fontSize: 11, padding: '4px 10px', borderRadius: 8,
                  background: lvlColor + '18', color: lvlColor, border: `1px solid ${lvlColor}30`, fontWeight: 700 }}>
                  {user?.provider === 'google' ? 'Google' : 'Email'}
                </span>
              </div>

              {/* Password */}
              {user?.provider !== 'google' && (
                <div style={{ background: cardBg, border: `1px solid ${cardBd}`, borderRadius: 22, padding: '22px 24px',
                  boxShadow: il ? '0 2px 16px rgba(0,0,0,0.06)' : 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                    <IcoShield s={15} c={lvlColor} />
                    <span style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.09em', color: txtSub }}>
                      Mot de passe
                    </span>
                  </div>
                  {!showPwForm ? (
                    <button onClick={() => setShowPwForm(true)}
                      style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, padding: '9px 18px',
                        borderRadius: 12, fontWeight: 700, cursor: 'pointer',
                        background: btnSecBg, color: btnSecCl, border: `1px solid ${btnSecBd}` }}>
                      <IcoShield s={14} c={btnSecCl} /> Changer le mot de passe
                    </button>
                  ) : (
                    <form onSubmit={handleChangePassword} style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 380 }}>
                      {[
                        { label: 'Mot de passe actuel', key: 'current', placeholder: '••••••••' },
                        { label: 'Nouveau mot de passe', key: 'next',    placeholder: 'min. 6 caractères' },
                        { label: 'Confirmer',            key: 'confirm', placeholder: 'Répéter le nouveau' },
                      ].map(({ label, key, placeholder }) => (
                        <div key={key}>
                          <label style={{ fontSize: 11, fontWeight: 700, marginBottom: 6, display: 'block', color: txtSub }}>{label}</label>
                          <input type="password" value={pwForm[key]} placeholder={placeholder}
                            onChange={e => setPwForm(p => ({ ...p, [key]: e.target.value }))}
                            style={inputStyle}
                            onFocus={e => { e.target.style.borderColor = lvlColor; }}
                            onBlur={e => { e.target.style.borderColor = inpBd; }} />
                        </div>
                      ))}
                      {pwError   && <p style={{ fontSize: 12, fontWeight: 600, color: '#dc2626' }}>{pwError}</p>}
                      {pwSuccess && <p style={{ fontSize: 12, fontWeight: 600, color: '#16a34a' }}>{pwSuccess} ✓</p>}
                      <div style={{ display: 'flex', gap: 8 }}>
                        <button type="submit"
                          style={{ padding: '11px 20px', borderRadius: 12, fontSize: 13, fontWeight: 800, cursor: 'pointer',
                            background: lvlColor, color: '#fff', border: 'none' }}>Confirmer</button>
                        <button type="button" onClick={() => { setShowPwForm(false); setPwError(''); }}
                          style={{ padding: '11px 16px', borderRadius: 12, fontSize: 13, fontWeight: 600, cursor: 'pointer',
                            background: btnSecBg, color: btnSecCl, border: `1px solid ${btnSecBd}` }}>
                          Annuler
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </div>
          )}

          {/* ── Tab: Danger ── */}
          {activeTab === 'danger' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

              {/* Reset */}
              <div style={{
                background: cardBg,
                border: `1px solid ${il ? 'rgba(245,158,11,0.22)' : 'rgba(245,158,11,0.16)'}`,
                borderRadius: 22, padding: '22px 24px',
                boxShadow: il ? '0 2px 16px rgba(0,0,0,0.06)' : 'none',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <IcoReset s={16} c="#f59e0b" />
                  <span style={{ fontSize: 14, fontWeight: 800, color: il ? '#92400e' : '#fbbf24' }}>
                    Réinitialiser la progression
                  </span>
                </div>
                <p style={{ fontSize: 12, color: txtSub, marginBottom: 16, lineHeight: 1.6, margin: '0 0 16px' }}>
                  Remet à zéro l&apos;XP, les leçons et toutes les statistiques. Cette action est irréversible.
                </p>
                {!resetConfirm ? (
                  <button onClick={() => setResetConfirm(true)}
                    style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 700, padding: '9px 18px',
                      borderRadius: 12, cursor: 'pointer',
                      background: 'rgba(245,158,11,0.12)', color: il ? '#92400e' : '#fbbf24',
                      border: '1px solid rgba(245,158,11,0.30)' }}>
                    <IcoReset s={14} c={il ? '#92400e' : '#fbbf24'} /> Réinitialiser
                  </button>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, padding: '12px 16px', borderRadius: 14,
                      background: 'rgba(245,158,11,0.10)', border: '1px solid rgba(245,158,11,0.25)',
                      color: il ? '#92400e' : '#fbbf24', lineHeight: 1.5 }}>
                      Cette action est irréversible. Continuer ?
                    </div>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button onClick={handleReset}
                        style={{ padding: '9px 18px', borderRadius: 12, fontSize: 13, fontWeight: 800, cursor: 'pointer',
                          background: 'rgba(245,158,11,0.20)', color: il ? '#78350f' : '#fbbf24',
                          border: '1px solid rgba(245,158,11,0.35)' }}>
                        Oui, réinitialiser
                      </button>
                      <button onClick={() => setResetConfirm(false)}
                        style={{ padding: '9px 16px', borderRadius: 12, fontSize: 13, fontWeight: 600, cursor: 'pointer',
                          background: btnSecBg, color: btnSecCl, border: `1px solid ${btnSecBd}` }}>
                        Annuler
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Logout */}
              <div style={{
                background: cardBg,
                border: `1px solid ${il ? 'rgba(220,38,38,0.18)' : 'rgba(248,113,113,0.14)'}`,
                borderRadius: 22, padding: '22px 24px',
                boxShadow: il ? '0 2px 16px rgba(0,0,0,0.06)' : 'none',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <IcoLogout s={16} c={il ? '#dc2626' : '#f87171'} />
                  <span style={{ fontSize: 14, fontWeight: 800, color: il ? '#dc2626' : '#f87171' }}>Déconnexion</span>
                </div>
                <p style={{ fontSize: 12, color: txtSub, margin: '0 0 16px', lineHeight: 1.6 }}>
                  Vous serez redirigé vers la page de connexion.
                </p>
                <button onClick={handleLogout}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    fontSize: 13, fontWeight: 800, padding: '10px 20px', borderRadius: 12, cursor: 'pointer',
                    background: il ? 'rgba(220,38,38,0.10)' : 'rgba(248,113,113,0.10)',
                    color: il ? '#dc2626' : '#f87171',
                    border: `1px solid ${il ? 'rgba(220,38,38,0.25)' : 'rgba(248,113,113,0.22)'}`,
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = il ? 'rgba(220,38,38,0.18)' : 'rgba(248,113,113,0.18)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = il ? 'rgba(220,38,38,0.10)' : 'rgba(248,113,113,0.10)'; }}>
                  <IcoLogout s={16} c={il ? '#dc2626' : '#f87171'} /> Se déconnecter
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
