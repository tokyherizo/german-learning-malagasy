import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { progressService } from '../services/progress';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const navLinks = [
  { path: '/',           label: 'Fandraisana' },
  { path: '/levels',     label: 'Ambaratonga' },
  { path: '/vocabulary', label: 'Teny'        },
  { path: '/exercises',  label: 'Fampiharana' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggle } = useTheme();

  const progress = progressService.getProgress();
  const isDark = theme === 'dark';
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const isActive = (p) => location.pathname === p;

  return (
    <nav
      style={{
        background: scrolled
          ? 'var(--bg-nav)'
          : isDark ? 'rgba(6,6,18,0.55)' : 'rgba(244,242,255,0.70)',
        borderBottom: `1px solid var(--border-nav)`,
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        boxShadow: scrolled ? '0 2px 40px rgba(0,0,0,0.25)' : 'none',
        transition: 'background 0.3s, box-shadow 0.3s',
      }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-5 h-[68px] flex items-center justify-between gap-4">

        {/* ── Logo ── */}
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          {/* Geometric badge */}
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-black tracking-tighter transition-transform group-hover:scale-105"
            style={{ background: 'var(--gradient-main)', color: '#fff' }}
          >
            DE
          </div>
          <div className="flex flex-col leading-none">
            <span
              className="text-[1rem] font-extrabold tracking-wide"
              style={{ color: 'var(--accent)' }}
            >
              DeutschMG
            </span>
            <span
              className="text-[8px] uppercase tracking-[3px] font-semibold mt-0.5"
              style={{ color: 'var(--text-subtle)' }}
            >
              Alem&agrave;&nbsp;&times;&nbsp;Malagasy
            </span>
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className="relative px-4 py-2 text-sm rounded-lg transition-all duration-200"
              style={{
                color: isActive(path) ? 'var(--accent)' : 'var(--text-muted)',
                background: isActive(path) ? 'var(--accent-soft)' : 'transparent',
                fontWeight: isActive(path) ? 700 : 500,
              }}
            >
              {label}
              <span
                className="absolute bottom-1 left-4 right-4 h-[1.5px] rounded-full transition-all duration-300"
                style={{
                  background: 'var(--accent)',
                  transform: isActive(path) ? 'scaleX(1)' : 'scaleX(0)',
                  opacity: isActive(path) ? 1 : 0,
                  transformOrigin: 'left',
                }}
              />
            </Link>
          ))}
        </div>

        {/* ── Right controls ── */}
        <div className="flex items-center gap-2 shrink-0">

          {/* XP badge */}
          {progress.xp > 0 && (
            <div
              className="hidden md:flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl text-sm font-bold"
              style={{
                background: 'var(--accent-soft)',
                border: '1px solid var(--border-card)',
                color: 'var(--accent)',
              }}
            >
              <span className="tabular-nums">{progress.xp}&thinsp;XP</span>
              {progress.streak > 0 && (
                <span
                  className="text-orange-400 border-l pl-2 font-semibold tabular-nums"
                  style={{ borderColor: 'var(--text-subtle)' }}
                >
                  {progress.streak}&thinsp;j
                </span>
              )}
            </div>
          )}

          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label="Changer le thème"
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-200"
            style={{
              background: 'var(--accent-soft)',
              border: '1px solid var(--border-card)',
              color: 'var(--text-muted)',
            }}
          >
            {/* Track */}
            <span
              className="relative inline-flex w-8 h-4 rounded-full transition-colors duration-300"
              style={{ background: isDark ? 'rgba(99,102,241,0.30)' : 'rgba(79,70,229,0.22)' }}
            >
              <span
                className="absolute top-0.5 w-3 h-3 rounded-full transition-transform duration-300"
                style={{
                  background: 'var(--accent)',
                  transform: isDark ? 'translateX(0.125rem)' : 'translateX(1.1rem)',
                }}
              />
            </span>
            <span className="hidden sm:inline" style={{ color: 'var(--text-primary)' }}>
              {isDark ? 'Clair' : 'Sombre'}
            </span>
          </button>

          {/* User pill + logout (desktop) */}
          {user && (
            <div className="hidden md:flex items-center gap-1.5 pl-1">
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm font-semibold"
                style={{
                  background: 'var(--accent-soft)',
                  border: '1px solid var(--border-card)',
                  color: 'var(--text-primary)',
                }}
              >
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black"
                  style={{ background: 'var(--gradient-main)', color: '#fff' }}
                >
                  {user.isGuest ? '👤' : (user.name?.[0] ?? '?').toUpperCase()}
                </span>
                <span
                  className="max-w-[100px] truncate hidden lg:block"
                  style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}
                >
                  {user.name}
                </span>
              </div>
              <button
                onClick={logout}
                title="Déconnexion"
                className="w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200 hover:opacity-80"
                style={{ background: 'rgba(56,189,248,0.10)', border: '1px solid rgba(56,189,248,0.22)', color: '#38bdf8' }}
              >
                ↩
              </button>
            </div>
          )}

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2 rounded-xl transition-colors"
            style={{ background: isOpen ? 'var(--accent-soft)' : 'transparent' }}
            aria-label="Menu"
          >
            <span
              className="block w-5 h-0.5 rounded transition-all duration-300 origin-center"
              style={{
                background: 'var(--text-primary)',
                transform: isOpen ? 'translateY(7px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="block w-5 h-0.5 rounded transition-all duration-300"
              style={{
                background: 'var(--text-primary)',
                opacity: isOpen ? 0 : 1,
                transform: isOpen ? 'scaleX(0)' : 'none',
              }}
            />
            <span
              className="block w-5 h-0.5 rounded transition-all duration-300 origin-center"
              style={{
                background: 'var(--text-primary)',
                transform: isOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <div
        className="md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? '360px' : '0',
          background: isDark ? 'rgba(6,6,18,0.98)' : 'rgba(244,242,255,0.98)',
          borderTop: '1px solid var(--border-nav)',
        }}
      >
        <div className="px-5 pt-3 pb-5 flex flex-col gap-1">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className="px-4 py-3 rounded-xl text-[0.95rem] font-medium transition-all"
              style={{
                color: isActive(path) ? 'var(--accent)' : 'var(--text-muted)',
                background: isActive(path) ? 'var(--accent-soft)' : 'transparent',
                fontWeight: isActive(path) ? 700 : 500,
              }}
            >
              {label}
            </Link>
          ))}

          {/* Divider */}
          <div className="h-px my-1" style={{ background: 'var(--border-card)' }} />

          {/* XP + Theme in mobile */}
          <div className="flex items-center justify-between px-4 py-2">
            {progress.xp > 0 ? (
              <span className="text-sm font-bold" style={{ color: 'var(--accent)' }}>
                {progress.xp}&thinsp;XP
                {progress.streak > 0 && (
                  <span className="text-orange-400 ml-3">{progress.streak}&thinsp;j consécutifs</span>
                )}
              </span>
            ) : <span />}
            <button
              onClick={toggle}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-widest"
              style={{
                background: 'var(--accent-soft)',
                border: '1px solid var(--border-card)',
                color: 'var(--text-primary)',
              }}
            >
              {isDark ? '☀ Clair' : '☾ Sombre'}
            </button>
          </div>

          {/* User + logout in mobile */}
          {user && (
            <div className="flex items-center justify-between px-4 py-2">
              <span className="flex items-center gap-2 text-sm font-semibold" style={{ color: 'var(--text-muted)' }}>
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0"
                  style={{ background: 'var(--gradient-main)', color: '#fff' }}
                >
                  {user.isGuest ? '👤' : (user.name?.[0] ?? '?').toUpperCase()}
                </span>
                {user.name}
              </span>
              <button
                onClick={logout}
                className="px-3 py-1.5 rounded-xl text-xs font-bold"
                style={{ background: 'rgba(56,189,248,0.10)', border: '1px solid rgba(56,189,248,0.22)', color: '#38bdf8' }}
              >
                ↩ Hiala
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
