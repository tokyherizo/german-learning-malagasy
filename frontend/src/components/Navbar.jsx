import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { progressService } from '../services/progress';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const navLinks = [
  { path: '/levels',     label: 'Lesona',      badge: null  },
  { path: '/vocabulary', label: 'Vocabulaire', badge: null  },
  { path: '/exercises',  label: 'Exercices',   badge: 'NEW' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggle } = useTheme();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const isDark = theme === 'dark';

  const progress = progressService.getProgress();
  const xp = progress?.xp ?? 0;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const isActive = (p) => location.pathname === p;

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 transition-all duration-200"
      style={{
        background: scrolled ? 'rgba(13,13,13,0.97)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-[52px] flex items-center justify-between gap-6">

        {/* ── Left: Logo + links ── */}
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-black"
              style={{ background: '#fff', color: '#0d0d0d' }}
            >
              DE
            </div>
            <span className="text-sm font-bold text-white">DeutschMG</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ path, label, badge }) => (
              <Link
                key={path}
                to={path}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm transition-colors duration-150"
                style={{
                  color: isActive(path) ? '#fff' : 'rgba(255,255,255,0.5)',
                  fontWeight: isActive(path) ? 600 : 400,
                  background: isActive(path) ? 'rgba(255,255,255,0.08)' : 'transparent',
                }}
              >
                {label}
                {badge && (
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: '#16a34a', color: '#fff', letterSpacing: '0.04em' }}>
                    {badge}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* ── Right: actions ── */}
        <div className="flex items-center gap-2.5">

          {xp > 0 && (
            <div
              className="hidden md:flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-lg"
              style={{ color: 'rgba(255,255,255,0.55)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}
            >
              ⚡ {xp} XP
            </div>
          )}

          <button
            onClick={toggle}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-colors"
            style={{ color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.06)' }}
            aria-label="Theme"
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          {user && (
            <button
              onClick={() => navigate('/profile')}
              className="hidden md:flex items-center justify-center w-7 h-7 rounded-full text-xs font-black transition-opacity hover:opacity-80"
              style={{ background: '#fff', color: '#0d0d0d' }}
              title={user.name}
            >
              {user.isGuest ? '?' : (user.name?.[0] ?? '?').toUpperCase()}
            </button>
          )}

          <Link
            to="/levels"
            className="hidden md:flex items-center gap-1.5 text-sm font-semibold px-4 py-1.5 rounded-lg transition-opacity hover:opacity-85"
            style={{ background: '#fff', color: '#0d0d0d' }}
          >
            Commencer →
          </Link>

          <button
            onClick={() => setIsOpen(o => !o)}
            className="md:hidden w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-colors"
            style={{ color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.06)' }}
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
          style={{ background: '#111', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '10px 12px 16px' }}
        >
          {navLinks.map(({ path, label, badge }) => (
            <Link
              key={path}
              to={path}
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
              style={{
                color: isActive(path) ? '#fff' : 'rgba(255,255,255,0.5)',
                background: isActive(path) ? 'rgba(255,255,255,0.08)' : 'transparent',
              }}
            >
              {label}
              {badge && (
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: '#16a34a', color: '#fff' }}>{badge}</span>
              )}
            </Link>
          ))}
          <div className="h-px my-2" style={{ background: 'rgba(255,255,255,0.08)' }} />
          <div className="flex items-center justify-between px-3 py-1">
            <Link to="/levels" className="text-sm font-semibold px-3 py-1.5 rounded-lg" style={{ background: '#fff', color: '#0d0d0d' }}>Commencer →</Link>
            {user && (
              <button onClick={logout} className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>Déconnecter</button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
