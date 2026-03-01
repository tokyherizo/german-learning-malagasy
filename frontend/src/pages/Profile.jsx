import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { progressService } from '../services/progress';

/* ── Achievement data ── */
const ALL_ACHIEVEMENTS = [
  { id: 'first_lesson',  badge: '1',    title: 'Lesona Voalohany', titleDe: 'Erste Lektion',  desc: '1 leçon terminée' },
  { id: 'five_lessons',  badge: '5',    title: 'Mpianatra!',        titleDe: 'Fünf Lektionen', desc: '5 leçons terminées' },
  { id: 'first_words',   badge: '10w',  title: 'Mpianatra Teny',    titleDe: 'Wortlerner',     desc: '10 mots appris' },
  { id: 'hundred_xp',   badge: '100',  title: 'XP 100',             titleDe: '100 XP',         desc: '100 XP gagnés' },
  { id: 'streak_3',     badge: '3j',   title: 'Streak 3 Andro',    titleDe: '3 Tage Streak',  desc: '3 jours consécutifs' },
  { id: 'perfect_score',badge: '100%', title: 'Nahazo 100%',       titleDe: 'Perfektion',     desc: '100% bonnes réponses' },
];

/* ── Shared input style ── */
const inputStyle = {
  background: 'rgba(255,255,255,0.04)',
  border: '1.5px solid rgba(255,255,255,0.10)',
  color: '#fff',
  borderRadius: 14,
  padding: '10px 16px',
  fontSize: 14,
  outline: 'none',
  width: '100%',
};

const XP_THRESHOLDS = { A1: 500, A2: 1500, B1: 3000, B2: 6000 };
const LEVEL_ORDER   = ['A1', 'A2', 'B1', 'B2'];

/* ── Section card ── */
const Section = ({ title, label, children }) => (
  <div style={{ background: '#111', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 24, overflow: 'hidden' }}>
    <div style={{ padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 10 }}>
      <span style={{ fontSize: 10, fontWeight: 900, letterSpacing: '0.08em', padding: '2px 8px', borderRadius: 6,
        background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.40)', border: '1px solid rgba(255,255,255,0.08)', textTransform: 'uppercase' }}>
        {label}
      </span>
      <h2 style={{ fontWeight: 900, fontSize: 13, color: '#fff', letterSpacing: '-0.01em' }}>{title}</h2>
    </div>
    <div style={{ padding: '24px' }}>{children}</div>
  </div>
);

/* ── Stat card ── */
const StatCard = ({ badge, value, label }) => (
  <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 18,
    padding: '18px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, textAlign: 'center' }}>
    <span style={{ fontSize: 9, fontWeight: 900, letterSpacing: '0.08em', padding: '2px 6px', borderRadius: 4,
      background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.30)', border: '1px solid rgba(255,255,255,0.07)', textTransform: 'uppercase' }}>
      {badge}
    </span>
    <span style={{ fontSize: 22, fontWeight: 900, color: '#fff', lineHeight: 1 }}>{value}</span>
    <span style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.10em' }}>{label}</span>
  </div>
);

/* ─────────────────────────────────────────────────────────────── */
export default function Profile() {
  const navigate  = useNavigate();
  const { user, logout, updateProfile, changePassword, error: authError, clearError } = useAuth();
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
  const initial = user?.isGuest ? '?' : (user?.name?.[0] ?? '?').toUpperCase();

  return (
    <div style={{ background: '#0d0d0d', minHeight: '100vh', paddingTop: '52px', color: '#fff' }}>

      {/* ── Hero header ── */}
      <section className="relative overflow-hidden py-14" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        {/* Big decorative word */}
        <div
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-black select-none pointer-events-none"
          style={{ fontSize: 'clamp(5rem,18vw,11rem)', color: 'rgba(255,255,255,0.025)', letterSpacing: '-0.04em', lineHeight: 1 }}
        >
          PROFIL
        </div>

        <div className="relative max-w-3xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">

            {/* Avatar — white square with dark initial */}
            <div className="relative shrink-0">
              <div style={{ width: 88, height: 88, borderRadius: 24, background: '#fff', color: '#0d0d0d',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 32, fontWeight: 900, letterSpacing: '-0.04em' }}>
                {initial}
              </div>
              <span style={{ position: 'absolute', bottom: -6, right: -6, fontSize: 9, fontWeight: 900,
                padding: '2px 6px', borderRadius: 6, background: '#111', color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.15)' }}>
                {user?.provider === 'google' ? 'G' : '@'}
              </span>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-2 flex-1 text-center sm:text-left">
              <h1 style={{ fontSize: 'clamp(1.5rem,4vw,2rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#fff' }}>
                {user?.name}
              </h1>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.40)' }}>{user?.email}</p>

              {/* XP bar */}
              <div style={{ marginTop: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.40)' }}>
                  <span>Niveau <span style={{ color: '#fff' }}>{currentLvl}</span></span>
                  {nextLvl && <span>{progress.xp} / {maxXP} XP → {nextLvl}</span>}
                </div>
                <div style={{ height: 6, borderRadius: 99, background: 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
                  <div style={{ height: '100%', borderRadius: 99, background: '#fff', width: `${xpPct}%`, transition: 'width 0.7s ease' }} />
                </div>
              </div>

              {progress.lastActivity && (
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', marginTop: 4 }}>
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
            <StatCard badge="xp"  value={progress.xp}                              label="XP Total" />
            <StatCard badge="day" value={progress.streak ?? 0}                      label="Streak" />
            <StatCard badge="lsn" value={progress.stats?.lessonsCompleted ?? 0}     label="Lesona" />
            <StatCard badge="exo" value={progress.stats?.exercisesCompleted ?? 0}   label="Exercices" />
            <StatCard badge="wrd" value={progress.stats?.wordsLearned ?? 0}         label="Mots" />
            <StatCard badge="acc" value={`${accuracy}%`}                            label="Précision" />
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
                  background: earned ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)',
                  border: earned ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(255,255,255,0.05)',
                  opacity: earned ? 1 : 0.40 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 10, fontWeight: 900, letterSpacing: '0.04em',
                    background: earned ? '#fff' : 'rgba(255,255,255,0.04)',
                    color: earned ? '#0d0d0d' : 'rgba(255,255,255,0.25)',
                    border: earned ? 'none' : '1px solid rgba(255,255,255,0.08)' }}>
                    {earned ? ach.badge : '—'}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
                    <span style={{ fontWeight: 900, fontSize: 13, color: earned ? '#fff' : 'rgba(255,255,255,0.45)' }}>{ach.title}</span>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.30)', marginTop: 2 }}>
                      {earned ? `Obtenu le ${new Date(earnedData.earnedAt).toLocaleDateString('fr-FR')}` : ach.desc}
                    </span>
                  </div>
                  {earned && <span style={{ fontSize: 11, fontWeight: 900, color: '#fff', marginLeft: 'auto', flexShrink: 0 }}>★</span>}
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
                color: 'rgba(255,255,255,0.35)', display: 'block', marginBottom: 8 }}>
                Nom d&apos;affichage
              </label>
              {editingName ? (
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <input ref={nameRef} autoFocus value={nameInput}
                    onChange={e => setNameInput(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter') handleSaveName(); if (e.key === 'Escape') setEditingName(false); }}
                    style={{ ...inputStyle, flex: '1 1 160px' }}
                    onFocus={e => { e.target.style.border = '1.5px solid rgba(255,255,255,0.35)'; }}
                    onBlur={e => { e.target.style.border = '1.5px solid rgba(255,255,255,0.10)'; }}
                  />
                  <button onClick={handleSaveName} style={{ padding: '10px 18px', borderRadius: 12, fontSize: 13, fontWeight: 900,
                    background: '#fff', color: '#0d0d0d', border: 'none', cursor: 'pointer' }}>
                    Enregistrer
                  </button>
                  <button onClick={() => setEditingName(false)} style={{ padding: '10px 16px', borderRadius: 12, fontSize: 13, fontWeight: 600,
                    background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.10)', cursor: 'pointer' }}>
                    Annuler
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>{user?.name}</span>
                  <button onClick={() => { setEditingName(true); setNameSuccess(''); }}
                    style={{ fontSize: 12, padding: '4px 12px', borderRadius: 8, fontWeight: 700, cursor: 'pointer',
                      background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.10)' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.09)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}>
                    Modifier
                  </button>
                </div>
              )}
              {nameSuccess && <p style={{ fontSize: 12, marginTop: 8, fontWeight: 600, color: 'rgba(255,255,255,0.60)' }}>{nameSuccess} ✓</p>}
              {authError   && <p style={{ fontSize: 12, marginTop: 8, fontWeight: 600, color: 'rgba(248,113,113,0.80)' }}>{authError}</p>}
            </div>

            <div style={{ height: 1, background: 'rgba(255,255,255,0.06)' }} />

            {/* Password */}
            {user?.provider !== 'google' && (
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.10em',
                  color: 'rgba(255,255,255,0.35)', display: 'block', marginBottom: 8 }}>
                  Mot de passe
                </label>
                {!showPwForm ? (
                  <button onClick={() => setShowPwForm(true)}
                    style={{ fontSize: 12, padding: '6px 14px', borderRadius: 10, fontWeight: 700, cursor: 'pointer',
                      background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.10)' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.09)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}>
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
                        <label style={{ fontSize: 11, fontWeight: 600, marginBottom: 4, display: 'block', color: 'rgba(255,255,255,0.35)' }}>{label}</label>
                        <input type="password" value={pwForm[key]} placeholder={placeholder}
                          onChange={e => setPwForm(p => ({ ...p, [key]: e.target.value }))}
                          style={inputStyle}
                          onFocus={e => { e.target.style.border = '1.5px solid rgba(255,255,255,0.35)'; }}
                          onBlur={e => { e.target.style.border = '1.5px solid rgba(255,255,255,0.10)'; }} />
                      </div>
                    ))}
                    {pwError   && <p style={{ fontSize: 12, fontWeight: 600, color: 'rgba(248,113,113,0.80)' }}>{pwError}</p>}
                    {pwSuccess && <p style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.60)' }}>{pwSuccess} ✓</p>}
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button type="submit" style={{ padding: '10px 18px', borderRadius: 12, fontSize: 13, fontWeight: 900,
                        background: '#fff', color: '#0d0d0d', border: 'none', cursor: 'pointer' }}>Confirmer</button>
                      <button type="button" onClick={() => { setShowPwForm(false); setPwError(''); }}
                        style={{ padding: '10px 16px', borderRadius: 12, fontSize: 13, fontWeight: 600,
                          background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.50)', border: '1px solid rgba(255,255,255,0.10)', cursor: 'pointer' }}>
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
              <div style={{ padding: 16, borderRadius: 18, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <p style={{ fontWeight: 700, fontSize: 13, color: 'rgba(255,255,255,0.70)', marginBottom: 4 }}>Réinitialiser la progression</p>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.30)', marginBottom: 12 }}>Remet à zéro l&apos;XP, les leçons et les statistiques.</p>
                <button onClick={() => setResetConfirm(true)}
                  style={{ fontSize: 12, fontWeight: 700, padding: '7px 16px', borderRadius: 10, cursor: 'pointer',
                    background: 'rgba(251,191,36,0.08)', color: 'rgba(251,191,36,0.80)', border: '1px solid rgba(251,191,36,0.20)' }}>
                  Réinitialiser
                </button>
              </div>
            ) : (
              <div style={{ padding: 16, borderRadius: 18, background: 'rgba(251,191,36,0.04)', border: '1px solid rgba(251,191,36,0.25)' }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: 'rgba(32, 10, 156, 0.85)', marginBottom: 12 }}>
                  Cette action est irréversible. Continuer ?
                </p>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button onClick={handleReset} style={{ padding: '8px 16px', borderRadius: 10, fontSize: 12, fontWeight: 900, cursor: 'pointer',
                    background: 'rgba(251,191,36,0.18)', color: '#480d92', border: '1px solid rgba(251,191,36,0.30)' }}>
                    Oui, réinitialiser
                  </button>
                  <button onClick={() => setResetConfirm(false)} style={{ padding: '8px 14px', borderRadius: 10, fontSize: 12, fontWeight: 600, cursor: 'pointer',
                    background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.45)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    Annuler
                  </button>
                </div>
              </div>
            )}

            <div style={{ height: 1, background: 'rgba(255,255,255,0.05)' }} />

            <div style={{ padding: 16, borderRadius: 18, background: 'rgba(248,113,113,0.04)', border: '1px solid rgba(248,113,113,0.14)' }}>
              <p style={{ fontWeight: 700, fontSize: 13, color: 'rgba(248,113,113,0.80)', marginBottom: 4 }}>Déconnexion</p>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.30)', marginBottom: 12 }}>Vous serez redirigé vers la page de connexion.</p>
              <button onClick={handleLogout}
                style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 900,
                  padding: '10px 20px', borderRadius: 12, cursor: 'pointer',
                  background: 'rgba(248,113,113,0.10)', color: '#f87171', border: '1px solid rgba(248,113,113,0.22)',
                  transition: 'background 0.15s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(248,113,113,0.18)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(248,113,113,0.10)'; }}>
                ↩ Se déconnecter
              </button>
            </div>

          </div>
        </Section>

      </div>
    </div>
  );
}



