import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const NAV_LINKS = [
  { labelKey: 'home',          to: '/' },
  { labelKey: 'levels',        to: '/levels' },
  { labelKey: 'opportunities', to: '/opportunities', badge: '🇩🇪' },
  { labelKey: 'community',     to: '/community',     badge: 'NEW' },
  { labelKey: 'profile',       to: '/profile' },
];

const SKILL_LINKS = [
  { icon: '🎧', label: 'Hören',      to: '/horen' },
  { icon: '📖', label: 'Lesen',      to: '/lesen' },
  { icon: '✍️', label: 'Schreiben',  to: '/schreiben' },
  { icon: '🎤', label: 'Sprechen',   to: '/sprechen' },
  { icon: '🎮', label: 'Mini Games', to: '/minigames' },
  { icon: '🇩🇪', label: 'Kultur',   to: '/kultur' },
];

const LEVELS = [
  { lvl: 'A1' },
  { lvl: 'A2' },
  { lvl: 'B1/B2' },
  { lvl: 'C1/C2' },
];

const col = { display: 'flex', flexDirection: 'column', gap: 4 };

const Footer = () => {
  const y = new Date().getFullYear();
  const EMAIL = 'tokyherizo004@gmail.com';
  const { theme } = useTheme();
  const { t } = useLanguage();
  const il = theme === 'light';

  /* ── couleurs selon le thème ───────────────────────────────── */
  const bg          = il ? '#f5f5f7'                   : '#0a0a0a';
  const border      = il ? 'rgba(0,0,0,0.08)'          : 'rgba(255,255,255,0.07)';
  const borderBot   = il ? 'rgba(0,0,0,0.07)'          : 'rgba(255,255,255,0.06)';
  const titleClr    = il ? 'rgba(0,0,0,0.30)'          : 'rgba(255,255,255,0.25)';
  const lnkClr      = il ? 'rgba(0,0,0,0.50)'          : 'rgba(255,255,255,0.45)';
  const lnkHover    = il ? '#000'                      : '#fff';
  const descClr     = il ? 'rgba(0,0,0,0.42)'          : 'rgba(255,255,255,0.32)';
  const flagClr     = il ? 'rgba(0,0,0,0.28)'          : 'rgba(255,255,255,0.20)';
  const badgeBg     = il ? 'rgba(0,0,0,0.06)'          : 'rgba(255,255,255,0.07)';
  const badgeBorder = il ? 'rgba(0,0,0,0.10)'          : 'rgba(255,255,255,0.09)';
  const badgeClr    = il ? 'rgba(0,0,0,0.45)'          : 'rgba(255,255,255,0.45)';
  const contactClr  = il ? 'rgba(0,0,0,0.50)'          : 'rgba(255,255,255,0.50)';
  const contactHov  = il ? '#000'                      : '#fff';
  const copyClr     = il ? 'rgba(0,0,0,0.28)'          : 'rgba(255,255,255,0.18)';
  const mailBotClr  = il ? 'rgba(0,0,0,0.32)'          : 'rgba(255,255,255,0.22)';
  const mailBotHov  = il ? 'rgba(0,0,0,0.65)'          : 'rgba(255,255,255,0.55)';

  const lnk = {
    fontSize: 13, color: lnkClr, textDecoration: 'none',
    display: 'block', padding: '5px 0', transition: 'color 0.15s',
  };

  const colTitle = {
    fontSize: 10, fontWeight: 800, textTransform: 'uppercase',
    letterSpacing: '0.13em', color: titleClr,
    marginBottom: 8, display: 'block',
  };

  return (
    <footer style={{ background: bg, borderTop: `1px solid ${border}` }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 24px 24px' }}>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem' }}>

          {/* Brand */}
          <div style={{ ...col, gap: 12 }}>
            <Link to="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="28" height="28" rx="8" fill="url(#ftGrad)" />
                <text x="14" y="19.5" textAnchor="middle" fontFamily="system-ui,sans-serif"
                  fontWeight="900" fontSize="10.5" fill="white" letterSpacing="-0.5">DL</text>
                <defs>
                  <linearGradient id="ftGrad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4f46e5" />
                    <stop offset="1" stopColor="#7c3aed" />
                  </linearGradient>
                </defs>
              </svg>
              <span style={{ fontSize: 16, fontWeight: 700, color: il ? '#7124e5' : '#fff', letterSpacing: '-0.02em' }}>DeutschLearn</span>
            </Link>
            <p style={{ fontSize: 12, lineHeight: 1.7, color: descClr, margin: 0, maxWidth: 220 }}>
              {t?.footer?.desc || 'Free German learning platform for everyone — from A1 to C2.'}
            </p>
            <span style={{ fontSize: 12, color: flagClr }}>{t?.footer?.tagline || 'Deutschland 🇩🇪'}</span>
          </div>

          {/* Navigation */}
          <div style={col}>
            <span style={colTitle}>{t?.footer?.nav || 'Navigation'}</span>
            {NAV_LINKS.map(l => (
              <Link key={l.to} to={l.to}
                style={{ ...lnk, display: 'inline-flex', alignItems: 'center', gap: 6 }}
                onMouseEnter={e => { e.currentTarget.style.color = lnkHover; }}
                onMouseLeave={e => { e.currentTarget.style.color = lnkClr; }}>
                {t?.nav?.[l.labelKey] || l.labelKey}
                {l.badge && (
                  <span style={{
                    fontSize: 9, fontWeight: 800,
                    padding: l.badge === 'NEW' ? '1px 5px' : '0',
                    borderRadius: 4,
                    background: l.badge === 'NEW' ? '#8b5cf6' : 'transparent',
                    color: l.badge === 'NEW' ? '#fff' : 'inherit',
                  }}>{l.badge}</span>
                )}
              </Link>
            ))}
          </div>

          {/* Skills */}
          <div style={col}>
            <span style={colTitle}>{t?.footer?.skills || 'Compétences'}</span>
            {SKILL_LINKS.map(s => (
              <Link key={s.to} to={s.to}
                style={{ ...lnk, display: 'inline-flex', alignItems: 'center', gap: 6 }}
                onMouseEnter={e => { e.currentTarget.style.color = lnkHover; }}
                onMouseLeave={e => { e.currentTarget.style.color = lnkClr; }}>
                <span style={{ fontSize: 12 }}>{s.icon}</span>
                {s.label}
              </Link>
            ))}
          </div>

          {/* Niveaux */}
          <div style={col}>
            <span style={colTitle}>{t?.footer?.levels || 'Levels'}</span>
            {LEVELS.map(({ lvl }, i) => (
              <Link key={lvl} to={`/lessons/${lvl}`} style={{ ...lnk, display: 'inline-flex', alignItems: 'center', gap: 8 }}
                onMouseEnter={e => { e.currentTarget.style.color = lnkHover; }}
                onMouseLeave={e => { e.currentTarget.style.color = lnkClr; }}>
                <span style={{
                  fontSize: 9, fontWeight: 900, padding: '2px 6px', borderRadius: 4,
                  background: badgeBg, border: `1px solid ${badgeBorder}`,
                  color: badgeClr, letterSpacing: '0.05em',
                }}>{lvl}</span>
                <span style={{ fontSize: 12 }}>{t?.footer?.levelLabels?.[i] || lvl}</span>
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div style={col}>
            <span style={colTitle}>{t?.footer?.contact || 'Contact'}</span>
            <a href={`mailto:${EMAIL}`} style={{
              fontSize: 12, fontWeight: 600, color: contactClr,
              textDecoration: 'none', wordBreak: 'break-all', transition: 'color 0.15s',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = contactHov; }}
              onMouseLeave={e => { e.currentTarget.style.color = contactClr; }}>
              ✉ {EMAIL}
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{
          marginTop: 36, paddingTop: 16,
          borderTop: `1px solid ${borderBot}`,
          display: 'flex', flexWrap: 'wrap', gap: 8,
          justifyContent: 'space-between', alignItems: 'center',
        }}>
          <span style={{ fontSize: 11, color: copyClr }}>
            {t?.footer?.copy ? t.footer.copy(y) : `© ${y} DeutschLearn`}
          </span>
          <a href={`mailto:${EMAIL}`} style={{
            fontSize: 11, color: mailBotClr, textDecoration: 'none', transition: 'color 0.15s',
          }}
            onMouseEnter={e => { e.currentTarget.style.color = mailBotHov; }}
            onMouseLeave={e => { e.currentTarget.style.color = mailBotClr; }}>
            {EMAIL}
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
