import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { progressService } from '../services/progress';
import { useTheme } from '../context/ThemeContext';

/* ── Achievement data ── */
const ALL_ACHIEVEMENTS = [
  { id: 'first_lesson',  badge: '1',    icon: '🎯', title: 'Première leçon',   desc: '1 leçon terminée' },
  { id: 'five_lessons',  badge: '5',    icon: '📚', title: 'Cinq leçons',       desc: '5 leçons terminées' },
  { id: 'first_words',   badge: '10w',  icon: '🔤', title: 'Maître des mots',   desc: '10 mots appris' },
  { id: 'hundred_xp',   badge: '100',  icon: '⚡', title: 'Centaine XP',       desc: '100 XP gagnés' },
  { id: 'streak_3',     badge: '3j',   icon: '🔥', title: 'Série de 3 jours',  desc: '3 jours consécutifs' },
  { id: 'perfect_score',badge: '100%', icon: '🏆', title: 'Perfection',        desc: '100% bonnes réponses' },
];

const LEVEL_COLORS = { A1: '#6366f1', A2: '#8b5cf6', B1: '#06b6d4', B2: '#10b981' };

/* ── Section card (theme-aware) ── */
const Section = ({ label, title, children }) => {
  const { theme } = useTheme();
  const il = theme === 'light';
  return (
    <div style={{
      background: il ? '#ffffff' : '#111',
      border: `1px solid ${il ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0.07)'}`,
      borderRadius: 24, overflow: 'hidden',
      boxShadow: il ? '0 2px 16px rgba(0,0,0,0.06)' : 'none',
    }}>
      <div style={{ padding: '16px 24px', borderBottom: `1px solid ${il ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'}`, display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontSize: 10, fontWeight: 900, letterSpacing: '0.08em', padding: '2px 8px', borderRadius: 6, textTransform: 'uppercase',
          background: il ? 'rgba(0,0,0,0.055)' : 'rgba(255,255,255,0.06)',
          color: il ? 'rgba(0,0,0,0.38)' : 'rgba(255,255,255,0.40)',
          border: `1px solid ${il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)'}` }}>
          {label}
        </span>
        <h2 style={{ fontWeight: 900, fontSize: 13, color: il ? '#0d0d0d' : '#fff', letterSpacing: '-0.01em' }}>{title}</h2>
      </div>
      <div style={{ padding: '24px' }}>{children}</div>
    </div>
  );
};

/* ── Stat card (theme-aware) ── */
const StatCard = ({ icon, value, label, accent }) => {
  const { theme } = useTheme();
  const il = theme === 'light';
  return (
    <div style={{
      background: il ? 'rgba(0,0,0,0.025)' : 'rgba(255,255,255,0.03)',
      border: `1px solid ${il ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.07)'}`,
      borderRadius: 20, padding: '20px 14px',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
      textAlign: 'center', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, borderRadius: '20px 20px 0 0',
        background: accent || '#6366f1', opacity: 0.65 }} />
      <span style={{ fontSize: 24, lineHeight: 1 }}>{icon}</span>
      <span style={{ fontSize: 24, fontWeight: 900, color: il ? '#0d0d0d' : '#fff', lineHeight: 1 }}>{value}</span>
      <span style={{ fontSize: 10, fontWeight: 800, color: il ? 'rgba(0,0,0,0.45)' : 'rgba(255,255,255,0.40)', textTransform: 'uppercase', letterSpacing: '0.10em' }}>{label}</span>
    </div>
  );
};

const XP_THRESHOLDS = { A1: 500, A2: 1500, B1: 3000, B2: 6000 };
const LEVEL_ORDER   = ['A1', 'A2', 'B1', 'B2'];

/* ─────────────────────────────────────────────────────────────── */
export default function Profile() {
  const navigate  = useNavigate();
  const { user, logout, updateProfile, changePassword, error: authError, clearError } = useAuth();
  const { theme } = useTheme();
  const il = theme === 'light';
  const progress  = progressService.getProgress();

  const [editingName, setEditingName]   = useState(false);
  const [nameInput,   setNameInput]     = useState(user?.name ?? '');
  const [nameSuccess, setNameSuccess]   = useState('');
  const nameRef = useRef(null);

  const [showPwForm, setShowPwForm]   = useState(false);
  const [pwForm, setPwForm]           = useState({ current: '', next: '', confirm: '' });
  const [pwError, setPwError]         = useState('');
  const [pwSuccess, setPwSuccess]     = useState('');

  const [resetConfirm, setResetConfirm] = useState(false);

  const accuracy   = progressService.getAccuracyRate();
  const currentLvl = progress.level || 'A1';
  const nextLvl    = LEVEL_ORDER[LEVEL_ORDER.indexOf(currentLvl) + 1];
  const maxXP      = XP_THRESHOLDS[currentLvl] ?? 500;
  const xpPct      = Math.min(100, Math.round((progress.xp / maxXP) * 100));
  const earnedIds  = new Set((progress.achievements || []).map(a => a.id));
  const earnedMap  = Object.fromEntries((progress.achievements || []).map(a => [a.id, a]));
  const initial    = user?.isGuest ? '?' : (user?.name?.[0] ?? '?').toUpperCase();
  const lvlColor   = LEVEL_COLORS[currentLvl] || '#6366f1';

  /* ── palette ── */
  const pageBg   = il ? '#f0f2f5'              : '#0d0d0d';
  const cardBg   = il ? '#ffffff'              : '#111';
  const cardBd   = il ? 'rgba(0,0,0,0.07)'    : 'rgba(255,255,255,0.07)';
  const txtMain  = il ? '#0d0d0d'              : '#fff';
  const txtSub   = il ? 'rgba(0,0,0,0.45)'    : 'rgba(255,255,255,0.40)';
  const txtMuted = il ? 'rgba(0,0,0,0.28)'    : 'rgba(255,255,255,0.25)';
  const tagClr   = il ? 'rgba(0,0,0,0.38)'    : 'rgba(255,255,255,0.40)';
  const divClr   = il ? 'rgba(0,0,0,0.06)'    : 'rgba(255,255,255,0.06)';
  const inpBg    = il ? 'rgba(0,0,0,0.04)'    : 'rgba(255,255,255,0.04)';
  const inpBd    = il ? 'rgba(0,0,0,0.12)'    : 'rgba(255,255,255,0.10)';
  const inpBdF   = il ? 'rgba(0,0,0,0.35)'    : 'rgba(255,255,255,0.35)';
  const btnSecBg = il ? 'rgba(0,0,0,0.05)'    : 'rgba(255,255,255,0.05)';
  const btnSecBd = il ? 'rgba(0,0,0,0.10)'    : 'rgba(255,255,255,0.10)';
  const btnSecCl = il ? 'rgba(0,0,0,0.50)'    : 'rgba(255,255,255,0.55)';
  const btnSecHv = il ? 'rgba(0,0,0,0.09)'    : 'rgba(255,255,255,0.09)';
  const lblClr   = il ? 'rgba(0,0,0,0.38)'    : 'rgba(255,255,255,0.35)';
  const achEBg   = il ? 'rgba(0,0,0,0.04)'    : 'rgba(255,255,255,0.05)';
  const achEBd   = il ? 'rgba(0,0,0,0.10)'    : 'rgba(255,255,255,0.15)';
  const achUBg   = il ? 'rgba(0,0,0,0.02)'    : 'rgba(255,255,255,0.02)';
  const achUBd   = il ? 'rgba(0,0,0,0.04)'    : 'rgba(255,255,255,0.05)';
  const avBg     = il ? '#0d0d0d'             : '#fff';
  const avClr    = il ? '#fff'                : '#0d0d0d';
  const heroBd   = il ? 'rgba(0,0,0,0.07)'    : 'rgba(255,255,255,0.07)';
  const xpBarBg  = il ? 'rgba(0,0,0,0.08)'    : 'rgba(255,255,255,0.08)';
  const heroWord = il ? 'rgba(0,0,0,0.025)'   : 'rgba(255,255,255,0.025)';

  const inputStyle = {
    background: inpBg, border: `1.5px solid ${inpBd}`,
    color: txtMain, borderRadius: 14, padding: '10px 16px',
    fontSize: 14, outline: 'none', width: '100%',
  };

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

      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-14" style={{ borderBottom: `1px solid ${heroBd}` }}>
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-black select-none pointer-events-none"
          style={{ fontSize: 'clamp(5rem,18vw,11rem)', color: heroWord, letterSpacing: '-0.04em', lineHeight: 1 }}>
          PROFIL
        </div>

        <div className="relative max-w-3xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">

            {/* Avatar */}
            <div className="relative shrink-0">
              <div style={{ width: 92, height: 92, borderRadius: 26, background: avBg, color: avClr,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 34, fontWeight: 900, letterSpacing: '-0.04em',
                boxShadow: il ? '0 4px 20px rgba(0,0,0,0.15)' : '0 4px 20px rgba(0,0,0,0.60)' }}>
                {initial}
              </div>
              <span style={{ position: 'absolute', bottom: -6, right: -6, fontSize: 9, fontWeight: 900,
                padding: '2px 7px', borderRadius: 6, background: cardBg, color: tagClr, border: `1px solid ${cardBd}` }}>
                {user?.provider === 'google' ? 'G' : '@'}
              </span>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-2 flex-1 text-center sm:text-left">
              <h1 style={{ fontSize: 'clamp(1.5rem,4vw,2rem)', fontWeight: 900, letterSpacing: '-0.03em', color: txtMain }}>
                {user?.name}
              </h1>
              <p style={{ fontSize: 13, color: txtSub }}>{user?.email}</p>

              {/* Level badge + XP */}
              <div style={{ marginTop: 6 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 800, padding: '3px 10px', borderRadius: 8,
                    background: lvlColor + '22', color: lvlColor, border: `1px solid ${lvlColor}44`, letterSpacing: '0.06em' }}>
                    Niveau {currentLvl}
                  </span>
                  {nextLvl && (
                    <span style={{ fontSize: 11, fontWeight: 700, color: txtMuted }}>
                      {progress.xp} / {maxXP} XP → {nextLvl}
                    </span>
                  )}
                </div>
                <div style={{ height: 7, borderRadius: 99, background: xpBarBg, overflow: 'hidden' }}>
                  <div style={{ height: '100%', borderRadius: 99, background: lvlColor, width: `${xpPct}%`, transition: 'width 0.8s ease' }} />
                </div>
                <div style={{ fontSize: 10, color: txtMuted, marginTop: 5, textAlign: 'right' }}>{xpPct}%</div>
              </div>

              {progress.lastActivity && (
                <p style={{ fontSize: 11, color: txtMuted }}>
                  Dernière activité : {new Date(progress.lastActivity).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
      <div className="max-w-3xl mx-auto px-6 py-10 flex flex-col gap-6">

        {/* Stats */}
        <Section label="Stats" title="Statistiques">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <StatCard icon="⚡" value={progress.xp}                            label="XP Total"  accent="#f59e0b" />
            <StatCard icon="🔥" value={progress.streak ?? 0}                    label="Streak"    accent="#ef4444" />
            <StatCard icon="📖" value={progress.stats?.lessonsCompleted ?? 0}   label="Leçons"    accent="#6366f1" />
            <StatCard icon="✏️" value={progress.stats?.exercisesCompleted ?? 0} label="Exercices" accent="#8b5cf6" />
            <StatCard icon="🔤" value={progress.stats?.wordsLearned ?? 0}       label="Mots"      accent="#06b6d4" />
            <StatCard icon="🎯" value={`${accuracy}%`}                          label="Précision" accent="#10b981" />
          </div>
        </Section>

        {/* Achievements */}
        <Section label="Trophées" title="Succès">
          <div className="grid sm:grid-cols-2 gap-3">
            {ALL_ACHIEVEMENTS.map(ach => {
              const earned = earnedIds.has(ach.id);
              const earnedData = earnedMap[ach.id];
              return (
                <div key={ach.id} style={{ display: 'flex', alignItems: 'center', gap: 14, borderRadius: 18, padding: '14px 16px',
                  background: earned ? achEBg : achUBg,
                  border: `1px solid ${earned ? achEBd : achUBd}`,
                  opacity: earned ? 1 : 0.45, transition: 'opacity 0.2s' }}>
                  <div style={{ width: 46, height: 46, borderRadius: 14, flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22,
                    background: earned ? (il ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.07)') : (il ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.03)'),
                    border: `1px solid ${earned ? achEBd : achUBd}` }}>
                    {earned ? ach.icon : '—'}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
                    <span style={{ fontWeight: 900, fontSize: 13, color: earned ? txtMain : txtSub }}>{ach.title}</span>
                    <span style={{ fontSize: 11, color: txtMuted, marginTop: 2 }}>
                      {earned ? `Obtenu le ${new Date(earnedData.earnedAt).toLocaleDateString('fr-FR')}` : ach.desc}
                    </span>
                  </div>
                  {earned && <span style={{ fontSize: 14, marginLeft: 'auto', flexShrink: 0 }}>⭐</span>}
                </div>
              );
            })}
          </div>
        </Section>

        {/* Account settings */}
        <Section label="Compte" title="Paramètres">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

            {/* Name */}
            <div>
              <label style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.10em',
                color: lblClr, display: 'block', marginBottom: 8 }}>
                Nom d&apos;affichage
              </label>
              {editingName ? (
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <input ref={nameRef} autoFocus value={nameInput}
                    onChange={e => setNameInput(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter') handleSaveName(); if (e.key === 'Escape') setEditingName(false); }}
                    style={{ ...inputStyle, flex: '1 1 160px' }}
                    onFocus={e => { e.target.style.border = `1.5px solid ${inpBdF}`; }}
                    onBlur={e => { e.target.style.border = `1.5px solid ${inpBd}`; }}
                  />
                  <button onClick={handleSaveName} style={{ padding: '10px 18px', borderRadius: 12, fontSize: 13, fontWeight: 900,
                    background: avBg, color: avClr, border: 'none', cursor: 'pointer' }}>
                    Enregistrer
                  </button>
                  <button onClick={() => setEditingName(false)} style={{ padding: '10px 16px', borderRadius: 12, fontSize: 13, fontWeight: 600,
                    background: btnSecBg, color: btnSecCl, border: `1px solid ${btnSecBd}`, cursor: 'pointer' }}>
                    Annuler
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: txtMain }}>{user?.name}</span>
                  <button onClick={() => { setEditingName(true); setNameSuccess(''); }}
                    style={{ fontSize: 12, padding: '4px 12px', borderRadius: 8, fontWeight: 700, cursor: 'pointer',
                      background: btnSecBg, color: btnSecCl, border: `1px solid ${btnSecBd}` }}
                    onMouseEnter={e => e.currentTarget.style.background = btnSecHv}
                    onMouseLeave={e => e.currentTarget.style.background = btnSecBg}>
                    Modifier
                  </button>
                </div>
              )}
              {nameSuccess && <p style={{ fontSize: 12, marginTop: 8, fontWeight: 600, color: il ? '#16a34a' : 'rgba(255,255,255,0.60)' }}>{nameSuccess} ✓</p>}
              {authError   && <p style={{ fontSize: 12, marginTop: 8, fontWeight: 600, color: il ? '#dc2626' : 'rgba(248,113,113,0.80)' }}>{authError}</p>}
            </div>

            <div style={{ height: 1, background: divClr }} />

            {/* Password */}
            {user?.provider !== 'google' && (
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.10em',
                  color: lblClr, display: 'block', marginBottom: 8 }}>
                  Mot de passe
                </label>
                {!showPwForm ? (
                  <button onClick={() => setShowPwForm(true)}
                    style={{ fontSize: 12, padding: '6px 14px', borderRadius: 10, fontWeight: 700, cursor: 'pointer',
                      background: btnSecBg, color: btnSecCl, border: `1px solid ${btnSecBd}` }}
                    onMouseEnter={e => e.currentTarget.style.background = btnSecHv}
                    onMouseLeave={e => e.currentTarget.style.background = btnSecBg}>
                    Changer le mot de passe
                  </button>
                ) : (
                  <form onSubmit={handleChangePassword} style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360 }}>
                    {[
                      { label: 'Mot de passe actuel', key: 'current', placeholder: '••••••••' },
                      { label: 'Nouveau mot de passe', key: 'next',    placeholder: 'min. 6 caractères' },
                      { label: 'Confirmer',            key: 'confirm', placeholder: 'Répéter le nouveau' },
                    ].map(({ label, key, placeholder }) => (
                      <div key={key}>
                        <label style={{ fontSize: 11, fontWeight: 600, marginBottom: 4, display: 'block', color: lblClr }}>{label}</label>
                        <input type="password" value={pwForm[key]} placeholder={placeholder}
                          onChange={e => setPwForm(p => ({ ...p, [key]: e.target.value }))}
                          style={inputStyle}
                          onFocus={e => { e.target.style.border = `1.5px solid ${inpBdF}`; }}
                          onBlur={e => { e.target.style.border = `1.5px solid ${inpBd}`; }} />
                      </div>
                    ))}
                    {pwError   && <p style={{ fontSize: 12, fontWeight: 600, color: il ? '#dc2626' : 'rgba(248,113,113,0.80)' }}>{pwError}</p>}
                    {pwSuccess && <p style={{ fontSize: 12, fontWeight: 600, color: il ? '#16a34a' : 'rgba(255,255,255,0.60)' }}>{pwSuccess} ✓</p>}
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button type="submit" style={{ padding: '10px 18px', borderRadius: 12, fontSize: 13, fontWeight: 900,
                        background: avBg, color: avClr, border: 'none', cursor: 'pointer' }}>Confirmer</button>
                      <button type="button" onClick={() => { setShowPwForm(false); setPwError(''); }}
                        style={{ padding: '10px 16px', borderRadius: 12, fontSize: 13, fontWeight: 600,
                          background: btnSecBg, color: btnSecCl, border: `1px solid ${btnSecBd}`, cursor: 'pointer' }}>
                        Annuler
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>
        </Section>

        {/* Danger zone */}
        <Section label="Danger" title="Zone de danger">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            {!resetConfirm ? (
              <div style={{ padding: 18, borderRadius: 18,
                background: il ? 'rgba(245,158,11,0.06)' : 'rgba(255,255,255,0.02)',
                border: `1px solid ${il ? 'rgba(245,158,11,0.20)' : 'rgba(255,255,255,0.07)'}` }}>
                <p style={{ fontWeight: 700, fontSize: 13, color: il ? '#92400e' : 'rgba(255,255,255,0.70)', marginBottom: 4 }}>
                  Réinitialiser la progression
                </p>
                <p style={{ fontSize: 11, color: txtSub, marginBottom: 12 }}>
                  Remet à zéro l&apos;XP, les leçons et les statistiques.
                </p>
                <button onClick={() => setResetConfirm(true)}
                  style={{ fontSize: 12, fontWeight: 700, padding: '7px 16px', borderRadius: 10, cursor: 'pointer',
                    background: 'rgba(251,191,36,0.12)', color: il ? '#92400e' : 'rgba(251,191,36,0.85)',
                    border: '1px solid rgba(251,191,36,0.30)' }}>
                  Réinitialiser
                </button>
              </div>
            ) : (
              <div style={{ padding: 18, borderRadius: 18,
                background: 'rgba(251,191,36,0.06)', border: '1px solid rgba(251,191,36,0.30)' }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: il ? '#92400e' : 'rgba(251,191,36,0.90)', marginBottom: 12 }}>
                  ⚠️ Cette action est irréversible. Continuer ?
                </p>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button onClick={handleReset} style={{ padding: '8px 16px', borderRadius: 10, fontSize: 12, fontWeight: 900, cursor: 'pointer',
                    background: 'rgba(251,191,36,0.20)', color: il ? '#78350f' : '#fbbf24',
                    border: '1px solid rgba(251,191,36,0.35)' }}>
                    Oui, réinitialiser
                  </button>
                  <button onClick={() => setResetConfirm(false)} style={{ padding: '8px 14px', borderRadius: 10, fontSize: 12, fontWeight: 600, cursor: 'pointer',
                    background: btnSecBg, color: btnSecCl, border: `1px solid ${btnSecBd}` }}>
                    Annuler
                  </button>
                </div>
              </div>
            )}

            <div style={{ height: 1, background: divClr }} />

            <div style={{ padding: 18, borderRadius: 18,
              background: il ? 'rgba(220,38,38,0.05)' : 'rgba(248,113,113,0.04)',
              border: `1px solid ${il ? 'rgba(220,38,38,0.18)' : 'rgba(248,113,113,0.14)'}` }}>
              <p style={{ fontWeight: 700, fontSize: 13, color: il ? '#dc2626' : 'rgba(248,113,113,0.85)', marginBottom: 4 }}>
                Déconnexion
              </p>
              <p style={{ fontSize: 11, color: txtSub, marginBottom: 12 }}>
                Vous serez redirigé vers la page de connexion.
              </p>
              <button onClick={handleLogout}
                style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 900,
                  padding: '10px 20px', borderRadius: 12, cursor: 'pointer',
                  background: il ? 'rgba(220,38,38,0.10)' : 'rgba(248,113,113,0.10)',
                  color: il ? '#dc2626' : '#f87171',
                  border: `1px solid ${il ? 'rgba(220,38,38,0.25)' : 'rgba(248,113,113,0.22)'}`,
                  transition: 'background 0.15s' }}
                onMouseEnter={e => { e.currentTarget.style.background = il ? 'rgba(220,38,38,0.17)' : 'rgba(248,113,113,0.18)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = il ? 'rgba(220,38,38,0.10)' : 'rgba(248,113,113,0.10)'; }}>
                ↩ Se déconnecter
              </button>
            </div>

          </div>
        </Section>

      </div>
    </div>
  );
}



