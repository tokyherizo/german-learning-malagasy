import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const { theme, toggle } = useTheme();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { lang, changeLang, t } = useLanguage();
  const isDark = theme === 'dark';
  const il = theme === 'light';

  

  const navLinks = [
    { path: '/', label: t?.nav?.home || 'Accueil' },
    { path: '/levels', label: t?.nav?.lessons || 'Leçons' },
    { path: '/grammar', label: 'Grammaire' },
    { path: '/vocabulary', label: t?.nav?.vocabulary || 'Vocabulaire' },
    { path: '/exercises', label: t?.nav?.exercises || 'Exercices' },
    { path: '/opportunities', label: 'Opportunités', badge: '🇩🇪', badgeStyle: 'flag' },
    { path: '/community',    label: 'Communauté', badge: 'NEW', badgeStyle: 'pill' },
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
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-black"
              style={{ background: '#7124e5', color: '#fff' }}
            >
              DE
            </div>
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