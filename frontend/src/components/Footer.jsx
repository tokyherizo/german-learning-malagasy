import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const NAV_LINKS = [
  { label: 'Home',       to: '/' },
  { label: 'Levels',     to: '/levels' },
  { label: 'Exercises',  to: '/exercises' },
  { label: 'Vocabulary', to: '/vocabulary' },
  { label: 'Profile',    to: '/profile' },
];

const LEVELS = [
  { lvl: 'A1', label: 'Beginner' },
  { lvl: 'A2', label: 'Elementary' },
  { lvl: 'B1/B2', label: 'Intermediate' },
  { lvl: 'C1/C2', label: 'Advanced' },
];

const col = { display: 'flex', flexDirection: 'column', gap: 4 };

const Footer = () => {
  const y = new Date().getFullYear();
  const EMAIL = 'tokyherizo004@gmail.com';
  const { theme } = useTheme();
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
  const brandName   = il ? '#111'                      : '#fff';
  const badgeDEbg   = il ? '#111'                      : '#fff';
  const badgeDEclr  = il ? '#fff'                      : '#0d0d0d';
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
            <Link to="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 7, flexShrink: 0 }}>
                <rect width="30" height="30" rx="9" fill="url(#ftGrad)" />
                <text x="15" y="20" textAnchor="middle" fontFamily="system-ui,sans-serif" fontWeight="900" fontSize="13" fill="white" letterSpacing="-1">G</text>
                <defs><linearGradient id="ftGrad" x1="0" y1="0" x2="30" y2="30" gradientUnits="userSpaceOnUse"><stop stopColor="#6d28d9" /><stop offset="1" stopColor="#a855f7" /></linearGradient></defs>
              </svg>
              <span style={{ fontSize: 16, fontWeight: 900, color: brandName, letterSpacing: '-0.02em' }}>Germify</span>
            </Link>
            <p style={{ fontSize: 12, lineHeight: 1.7, color: descClr, margin: 0, maxWidth: 220 }}>
              Free German learning platform for everyone — from A1 to B2.
            </p>
            <span style={{ fontSize: 12, color: flagClr }}>Madagascar 🇲🇬</span>
          </div>

          {/* Navigation */}
          <div style={col}>
            <span style={colTitle}>Navigation</span>
            {NAV_LINKS.map(l => (
              <Link key={l.to} to={l.to} style={lnk}
                onMouseEnter={e => { e.currentTarget.style.color = lnkHover; }}
                onMouseLeave={e => { e.currentTarget.style.color = lnkClr; }}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Niveaux */}
          <div style={col}>
            <span style={colTitle}>Levels</span>
            {LEVELS.map(({ lvl, label }) => (
              <Link key={lvl} to={`/lessons/${lvl}`} style={{ ...lnk, display: 'inline-flex', alignItems: 'center', gap: 8 }}
                onMouseEnter={e => { e.currentTarget.style.color = lnkHover; }}
                onMouseLeave={e => { e.currentTarget.style.color = lnkClr; }}>
                <span style={{
                  fontSize: 9, fontWeight: 900, padding: '2px 6px', borderRadius: 4,
                  background: badgeBg, border: `1px solid ${badgeBorder}`,
                  color: badgeClr, letterSpacing: '0.05em',
                }}>{lvl}</span>
                <span style={{ fontSize: 12 }}>{label}</span>
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div style={col}>
            <span style={colTitle}>Contact</span>
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
            © {y} Germify — For everyone
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
