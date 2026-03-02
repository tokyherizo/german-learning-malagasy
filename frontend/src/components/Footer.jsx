import { Link } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Accueil',     to: '/' },
  { label: 'Niveaux',     to: '/levels' },
  { label: 'Exercices',   to: '/exercises' },
  { label: 'Vocabulaire', to: '/vocabulary' },
  { label: 'Profil',      to: '/profile' },
];

const LEVELS = [
  { lvl: 'A1', label: 'Débutant' },
  { lvl: 'A2', label: 'Élémentaire' },
  { lvl: 'B1/B2', label: 'Intermédiaire' },
  { lvl: 'C1/C2', label: 'Avancé' },
];

const lnk = {
  fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none',
  display: 'block', padding: '5px 0', transition: 'color 0.15s',
};

const col = { display: 'flex', flexDirection: 'column', gap: 4 };

const colTitle = {
  fontSize: 10, fontWeight: 800, textTransform: 'uppercase',
  letterSpacing: '0.13em', color: 'rgba(255,255,255,0.25)',
  marginBottom: 8, display: 'block',
};

const Footer = () => {
  const y = new Date().getFullYear();
  const EMAIL = 'tokyherizo004@gmail.com';

  return (
    <footer style={{
      background: '#0a0a0a',
      borderTop: '1px solid rgba(255,255,255,0.07)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 24px 24px' }}>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem' }}>

          {/* Brand */}
          <div style={{ ...col, gap: 12 }}>
            <Link to="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 11, fontWeight: 900, padding: '4px 8px', borderRadius: 6, background: '#fff', color: '#0d0d0d', letterSpacing: '0.06em' }}>DE</span>
              <span style={{ fontSize: 16, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>DeutschMG</span>
            </Link>
            <p style={{ fontSize: 12, lineHeight: 1.7, color: 'rgba(255,255,255,0.32)', margin: 0, maxWidth: 220 }}>
              Plateforme gratuite d&apos;allemand pour les Malgaches — de A1 à B2.
            </p>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.20)' }}>Madagascar 🇲🇬</span>
          </div>

          {/* Navigation */}
          <div style={col}>
            <span style={colTitle}>Navigation</span>
            {NAV_LINKS.map(l => (
              <Link key={l.to} to={l.to} style={lnk}
                onMouseEnter={e => { e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; }}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Niveaux */}
          <div style={col}>
            <span style={colTitle}>Niveaux</span>
            {LEVELS.map(({ lvl, label }) => (
              <Link key={lvl} to={`/lessons/${lvl}`} style={{ ...lnk, display: 'inline-flex', alignItems: 'center', gap: 8 }}
                onMouseEnter={e => { e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; }}>
                <span style={{
                  fontSize: 9, fontWeight: 900, padding: '2px 6px', borderRadius: 4,
                  background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.09)',
                  color: 'rgba(255,255,255,0.45)', letterSpacing: '0.05em',
                }}>{lvl}</span>
                <span style={{ fontSize: 12 }}>{label}</span>
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div style={col}>
            <span style={colTitle}>Contact</span>
            <a href={`mailto:${EMAIL}`} style={{
              fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.50)',
              textDecoration: 'none', wordBreak: 'break-all', transition: 'color 0.15s',
            }}
              onMouseEnter={e => { e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.50)'; }}>
              ✉ {EMAIL}
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{
          marginTop: 36, paddingTop: 16,
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', flexWrap: 'wrap', gap: 8,
          justifyContent: 'space-between', alignItems: 'center',
        }}>
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.18)' }}>
            © {y} DeutschMG — Natao ho an&apos;ny Malagasy
          </span>
          <a href={`mailto:${EMAIL}`} style={{
            fontSize: 11, color: 'rgba(255,255,255,0.22)', textDecoration: 'none', transition: 'color 0.15s',
          }}
            onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.22)'; }}>
            {EMAIL}
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
