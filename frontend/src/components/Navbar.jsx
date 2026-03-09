import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(false);
  const [kulturOpen, setKulturOpen] = useState(false);
  const location = useLocation();
  const { theme, toggle } = useTheme();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { lang, changeLang, t } = useLanguage();
  const isDark = theme === 'dark';
  const il = theme === 'light';

  

  const navLinks = [
    { path: '/',             label: t?.nav?.home          || 'Home'          },
    { path: '/levels',       label: t?.nav?.levels        || 'Niveaux'       },
   // { path: '/vocabulary',   label: t?.nav?.vocabulary    || 'Vocabulaire'   },
    { path: '/opportunities',label: t?.nav?.opportunities || 'Opportunités', badge: '🇩🇪', badgeStyle: 'flag' },
    { path: '/community',    label: t?.nav?.community     || 'Communauté',   badge: 'NEW', badgeStyle: 'pill' },
  ];

  const skillLinks = [
    { path: '/horen',    icon: '🎧', label: 'Hören',    desc: 'Compréhension orale' },
    { path: '/lesen',    icon: '📖', label: 'Lesen',    desc: 'Compréhension écrite' },
    { path: '/schreiben',icon: '✍️', label: 'Schreiben',desc: 'Expression écrite'   },
    { path: '/sprechen', icon: '🎤', label: 'Sprechen', desc: 'Expression orale'    },
    { path: '/minigames',icon: '🎮', label: 'Mini Games',desc: 'Jeux d\'apprentissage' },
  ];

  const kulturLinks = [
    { id: 'alltag',      icon: '🏙️', label: 'Alltag',       labelFr: 'Vie quotidienne'    },
    { id: 'traditionen', icon: '🎄', label: 'Traditionen',  labelFr: 'Traditions'          },
    { id: 'essen',       icon: '🥨', label: 'Essen',        labelFr: 'Cuisine & Boissons'  },
    { id: 'feste',       icon: '🎉', label: 'Feste',        labelFr: 'Fêtes & Événements'  },
    { id: 'staedte',     icon: '🗺️', label: 'Städte',       labelFr: 'Villes allemandes'   },
    { id: 'Geschichte',  icon: '📜', label: 'Geschichte',   labelFr: 'Histoire'            },
    { id: 'beruf',       icon: '💼', label: 'Berufsleben',  labelFr: 'Culture du travail'  },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { 
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false); 
  }, [location.pathname]);

  const isActive = (p) => location.pathname === p;

  const LangFlag = { EN: 'EN', DE: '🇩🇪' }; // EN and DE

  const purpleColor = '#8b5cf6';

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 transition-all duration-200"
      style={{
        background: scrolled ? (il ? 'rgba(240,242,245,0.97)' : 'rgba(13,13,13,0.97)') : 'transparent',
        borderBottom: scrolled ? `1px solid ${il ? 'rgba(0,0,0,0.09)' : 'rgba(255,255,255,0.08)'}` : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-[52px] flex items-center justify-between gap-6">

        {/* ── GAUCHE: Logo ── */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            {/* SVG Logo mark */}
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="28" height="28" rx="8" fill="url(#nbGrad)" />
              <text x="14" y="19.5" textAnchor="middle" fontFamily="system-ui,sans-serif"
                fontWeight="900" fontSize="10.5" fill="white" letterSpacing="-0.5">DL</text>
              <defs>
                <linearGradient id="nbGrad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4f46e5" />
                  <stop offset="1" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
            </svg>
            <span className="nav-logo text-sm font-bold" style={{ color: il ? '#7124e5' : '#fff' }}>DeutschLearn</span>
          </Link>
        </div>

        {/* ── CENTRE: Navigation ── */}
        <div className="hidden md:flex items-center gap-0.5 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map(({ path, label, badge, badgeStyle }) => (
            <Link
              key={path}
              to={path}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors duration-150 whitespace-nowrap lg:px-3.5 lg:text-sm lg:gap-1.5"
              style={{
                color: isActive(path) ? (il ? '#0f172a' : '#fff') : (il ? 'rgba(15,23,42,0.55)' : 'rgba(255,255,255,0.5)'),
                fontWeight: isActive(path) ? 600 : 400,
                background: isActive(path) ? purpleColor + '20' : 'transparent',
                border: isActive(path) ? `1px solid ${purpleColor}40` : 'none',
              }}
            >
              {label}
              {badge && badgeStyle === 'flag' && (
                <span style={{ fontSize: 14 }}>{badge}</span>
              )}
              {badge && badgeStyle !== 'flag' && (
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: purpleColor, color: '#fff', letterSpacing: '0.04em' }}>
                  {badge}
                </span>
              )}
            </Link>
          ))}

          {/* ── Skills dropdown ── */}
          <div className="relative" onMouseEnter={() => setSkillsOpen(true)} onMouseLeave={() => setSkillsOpen(false)}>
            <button
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors duration-150 whitespace-nowrap lg:px-3.5 lg:text-sm lg:gap-1.5"
              style={{
                color: skillLinks.some(s => isActive(s.path)) ? (il ? '#0f172a' : '#fff') : (il ? 'rgba(15,23,42,0.55)' : 'rgba(255,255,255,0.5)'),
                fontWeight: skillLinks.some(s => isActive(s.path)) ? 600 : 400,
                background: skillLinks.some(s => isActive(s.path)) ? purpleColor + '20' : skillsOpen ? (il ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.06)') : 'transparent',
                border: skillLinks.some(s => isActive(s.path)) ? `1px solid ${purpleColor}40` : 'none',
              }}>
              Compétences ▾
            </button>
            {skillsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 rounded-2xl overflow-hidden shadow-xl z-50 w-52"
                style={{ background: il ? '#fff' : '#1a1a2e', border: il ? '1px solid rgba(0,0,0,0.10)' : '1px solid rgba(255,255,255,0.10)' }}>
                {skillLinks.map(s => (
                  <Link key={s.path} to={s.path}
                    className="flex items-center gap-3 px-4 py-2.5 transition-colors"
                    style={{
                      background: isActive(s.path) ? purpleColor + '12' : 'transparent',
                      borderLeft: isActive(s.path) ? `2px solid ${purpleColor}` : '2px solid transparent',
                    }}
                    onMouseEnter={e => { if (!isActive(s.path)) e.currentTarget.style.background = il ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.05)'; }}
                    onMouseLeave={e => { if (!isActive(s.path)) e.currentTarget.style.background = 'transparent'; }}>
                    <span className="text-base">{s.icon}</span>
                    <div>
                      <div className="text-xs font-bold" style={{ color: isActive(s.path) ? purpleColor : (il ? '#0f172a' : '#fff') }}>{s.label}</div>
                      <div className="text-[10px]" style={{ color: il ? 'rgba(15,23,42,0.45)' : 'rgba(255,255,255,0.40)' }}>{s.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* ── Kultur dropdown ── */}
          <div className="relative" onMouseEnter={() => setKulturOpen(true)} onMouseLeave={() => setKulturOpen(false)}>
            <button
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors duration-150 whitespace-nowrap lg:px-3.5 lg:text-sm lg:gap-1.5"
              style={{
                color: location.pathname === '/kultur' ? (il ? '#0f172a' : '#fff') : (il ? 'rgba(15,23,42,0.55)' : 'rgba(255,255,255,0.5)'),
                fontWeight: location.pathname === '/kultur' ? 600 : 400,
                background: location.pathname === '/kultur' ? purpleColor + '20' : kulturOpen ? (il ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.06)') : 'transparent',
                border: location.pathname === '/kultur' ? `1px solid ${purpleColor}40` : 'none',
              }}>
              🇩🇪 Kultur ▾
            </button>
            {kulturOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 rounded-2xl overflow-hidden shadow-xl z-50 w-60"
                style={{ background: il ? '#fff' : '#1a1a2e', border: il ? '1px solid rgba(0,0,0,0.10)' : '1px solid rgba(255,255,255,0.10)' }}>
                <div className="px-4 py-2.5"
                  style={{ background: il ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.03)', borderBottom: il ? '1px solid rgba(0,0,0,0.06)' : '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="text-[9px] font-black uppercase tracking-widest" style={{ color: il ? 'rgba(15,23,42,0.40)' : 'rgba(255,255,255,0.30)' }}>
                    Culture allemande
                  </div>
                </div>
                {kulturLinks.map(k => (
                  <Link key={k.id} to={`/kultur#${k.id}`}
                    className="flex items-center gap-3 px-4 py-2.5 transition-colors"
                    style={{ background: 'transparent', borderLeft: '2px solid transparent' }}
                    onMouseEnter={e => { e.currentTarget.style.background = il ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderLeftColor = purpleColor; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderLeftColor = 'transparent'; }}>
                    <span className="text-base">{k.icon}</span>
                    <div>
                      <div className="text-xs font-bold" style={{ color: il ? '#0f172a' : '#fff' }}>{k.label}</div>
                      <div className="text-[10px]" style={{ color: il ? 'rgba(15,23,42,0.45)' : 'rgba(255,255,255,0.40)' }}>{k.labelFr}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── DROITE: Actions (XP, Langue, Thème, Profil) ── */}
        <div className="flex items-center gap-2.5">

          {/* ── Language Switcher (FR/DE seulement) ── */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(o => !o)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-colors"
              style={{
                color: il ? 'rgba(15,23,42,0.65)' : 'rgba(255,255,255,0.70)',
                background: il ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)',
                border: il ? '1px solid rgba(0,0,0,0.12)' : '1px solid rgba(255,255,255,0.12)',
                letterSpacing: '0.04em',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = il ? 'rgba(0,0,0,0.10)' : 'rgba(255,255,255,0.10)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = il ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'; }}
            >
              {LangFlag[lang] || '�🇧'}
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" style={{ opacity: 0.5, marginLeft: 1 }}>
                <path d="M1 2.5l3 3 3-3" stroke={il ? '#0f172a' : 'white'} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {langOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setLangOpen(false)}
                />
                <div
                  className="absolute right-0 mt-2 z-50 rounded-xl overflow-hidden"
                  style={{
                    background: il ? '#ffffff' : '#1a1a1a',
                    border: il ? '1px solid rgba(0,0,0,0.12)' : '1px solid rgba(255,255,255,0.12)',
                    boxShadow: il ? '0 16px 40px rgba(0,0,0,0.12)' : '0 16px 40px rgba(0,0,0,0.6)',
                    minWidth: 100,
                  }}
                >
                  {/* EN and DE only */}
                  <button
                    onClick={() => { changeLang('EN'); setLangOpen(false); }}
                    className="w-full flex items-center gap-2.5 px-3.5 py-2.5 text-left text-xs font-semibold transition-colors"
                    style={{
                      color: 'EN' === lang ? (il ? '#0f172a' : '#fff') : (il ? 'rgba(15,23,42,0.50)' : 'rgba(255,255,255,0.50)'),
                      background: 'EN' === lang ? purpleColor + '20' : 'transparent',
                      borderLeft: 'EN' === lang ? `2px solid ${purpleColor}` : 'none',
                    }}
                    onMouseEnter={e => { if ('EN' !== lang) e.currentTarget.style.background = il ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)'; }}
                    onMouseLeave={e => { if ('EN' !== lang) e.currentTarget.style.background = 'transparent'; }}
                  >
                    <span>{LangFlag.EN}</span>
                    <span>English</span>
                    {'EN' === lang && (
                      <span className="ml-auto" style={{ color: purpleColor, fontSize: 10 }}>✓</span>
                    )}
                  </button>
                  <button
                    onClick={() => { changeLang('DE'); setLangOpen(false); }}
                    className="w-full flex items-center gap-2.5 px-3.5 py-2.5 text-left text-xs font-semibold transition-colors"
                    style={{
                      color: 'DE' === lang ? (il ? '#0f172a' : '#fff') : (il ? 'rgba(15,23,42,0.50)' : 'rgba(255,255,255,0.50)'),
                      background: 'DE' === lang ? purpleColor + '20' : 'transparent',
                      borderLeft: 'DE' === lang ? `2px solid ${purpleColor}` : 'none',
                    }}
                    onMouseEnter={e => { if ('DE' !== lang) e.currentTarget.style.background = il ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)'; }}
                    onMouseLeave={e => { if ('DE' !== lang) e.currentTarget.style.background = 'transparent'; }}
                  >
                    <span>{LangFlag.DE}</span>
                    <span>Deutsch</span>
                    {'DE' === lang && (
                      <span className="ml-auto" style={{ color: purpleColor, fontSize: 10 }}>✓</span>
                    )}
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Bouton thème */}
          <button
            onClick={toggle}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-colors"
            style={{ 
              color: isDark ? '#fbbf24' : purpleColor,
              background: isDark ? 'rgba(255,255,255,0.06)' : purpleColor + '20',
              border: isDark ? (il ? `1px solid rgba(0,0,0,0.10)` : 'none') : `1px solid ${purpleColor}40`,
            }}
            aria-label="Theme"
          >
            {isDark ? '🌙' : '☀️'}
          </button>

          {/* Profil */}
          {user && (
            <button
              onClick={() => navigate('/profile')}
              className="flex items-center justify-center w-7 h-7 rounded-full text-xs font-black transition-opacity hover:opacity-80"
              style={{ 
                background: purpleColor, 
                color: '#fff' 
              }}
              title={user.name}
            >
              {user.isGuest ? '?' : (user.name?.[0] ?? '?').toUpperCase()}
            </button>
          )}

          {/* Menu mobile */}
          <button
            onClick={() => setIsOpen(o => !o)}
            className="md:hidden w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-colors"
            style={{ color: il ? 'rgba(15,23,42,0.65)' : 'rgba(255,255,255,0.7)', background: il ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)' }}
            aria-label="Menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      {isOpen && (
        <div
          className="md:hidden flex flex-col"
          style={{ background: il ? '#ffffff' : '#111', borderTop: il ? '1px solid rgba(0,0,0,0.09)' : '1px solid rgba(255,255,255,0.08)', padding: '10px 12px 16px' }}
        >
          {navLinks.map(({ path, label, badge, badgeStyle }) => (
            <Link
              key={path}
              to={path}
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
              style={{
                color: isActive(path) ? (il ? '#0f172a' : '#fff') : (il ? 'rgba(15,23,42,0.55)' : 'rgba(255,255,255,0.5)'),
                background: isActive(path) ? purpleColor + '20' : 'transparent',
                borderLeft: isActive(path) ? `2px solid ${purpleColor}` : 'none',
              }}
            >
              {label}
              {badge && badgeStyle === 'flag' && (
                <span style={{ fontSize: 13 }}>{badge}</span>
              )}
              {badge && badgeStyle !== 'flag' && (
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: purpleColor, color: '#fff' }}>{badge}</span>
              )}
            </Link>
          ))}

          {/* Mobile skill links */}
          <div className="h-px my-1" style={{ background: il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)' }} />
          <div className="px-3 py-1 text-[10px] font-black uppercase tracking-widest" style={{ color: il ? 'rgba(15,23,42,0.35)' : 'rgba(255,255,255,0.30)' }}>Compétences</div>
          {skillLinks.map(({ path, icon, label }) => (
            <Link key={path} to={path}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              style={{
                color: isActive(path) ? (il ? '#0f172a' : '#fff') : (il ? 'rgba(15,23,42,0.55)' : 'rgba(255,255,255,0.5)'),
                background: isActive(path) ? purpleColor + '20' : 'transparent',
                borderLeft: isActive(path) ? `2px solid ${purpleColor}` : 'none',
              }}>
              <span>{icon}</span>{label}
            </Link>
          ))}

          {/* Mobile Kultur links */}
          <div className="h-px my-1" style={{ background: il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)' }} />
          <div className="px-3 py-1 text-[10px] font-black uppercase tracking-widest" style={{ color: il ? 'rgba(15,23,42,0.35)' : 'rgba(255,255,255,0.30)' }}>🇩🇪 Kultur</div>
          {kulturLinks.map(({ id, icon, label }) => (
            <Link key={id} to={`/kultur#${id}`}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              style={{
                color: il ? 'rgba(15,23,42,0.55)' : 'rgba(255,255,255,0.5)',
                background: 'transparent',
              }}>
              <span>{icon}</span>{label}
            </Link>
          ))}

          {/* Mobile language switcher (EN/DE only) */}
          <div className="h-px my-2" style={{ background: il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)' }} />
          <div className="flex items-center gap-1.5 px-3 py-1 mb-1">
            <button
              onClick={() => changeLang('EN')}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-colors"
              style={{
                background: 'EN' === lang ? purpleColor + '20' : (il ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)'),
                color: 'EN' === lang ? (il ? '#0f172a' : '#fff') : (il ? 'rgba(15,23,42,0.45)' : 'rgba(255,255,255,0.40)'),
                border: `1px solid ${'EN' === lang ? purpleColor + '40' : (il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)')}`
              }}
            >
              {LangFlag.EN} EN
            </button>
            <button
              onClick={() => changeLang('DE')}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-colors"
              style={{
                background: 'DE' === lang ? purpleColor + '20' : (il ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)'),
                color: 'DE' === lang ? (il ? '#0f172a' : '#fff') : (il ? 'rgba(15,23,42,0.45)' : 'rgba(255,255,255,0.40)'),
                border: `1px solid ${'DE' === lang ? purpleColor + '40' : (il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)')}`
              }}
            >
              {LangFlag.DE} DE
            </button>
          </div>

          <div className="h-px my-1" style={{ background: il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)' }} />
          <div className="flex items-center justify-between px-3 py-1">
            <Link 
              to="/levels" 
              className="text-sm font-semibold px-3 py-1.5 rounded-lg" 
              style={{ background: purpleColor, color: '#fff' }}
            >
              {t?.nav?.start || 'Commencer'}
            </Link>
            {user && !user.isGuest && (
              <button onClick={logout} className="text-xs" style={{ color: il ? 'rgba(15,23,42,0.35)' : 'rgba(255,255,255,0.35)' }}>
                {t?.nav?.logout || 'Déconnexion'}
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;