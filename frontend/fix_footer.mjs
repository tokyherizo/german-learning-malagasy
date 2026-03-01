import { writeFileSync } from 'fs';

const code = `import { Link } from 'react-router-dom';

const LEVELS = ['A1', 'A2', 'B1', 'B2'];
const NAV_LINKS = [
  { label: 'Accueil',     to: '/' },
  { label: 'Niveaux',     to: '/levels' },
  { label: 'Leçons',      to: '/lessons/A1' },
  { label: 'Exercices',   to: '/exercises' },
  { label: 'Vocabulaire', to: '/vocabulary' },
];
const STATS = [
  { value: '500+', label: 'Wörter' },
  { value: '40+',  label: 'Lektionen' },
  { value: '4',    label: 'Niveaux' },
  { value: '100%', label: 'Gratis' },
];
const lnk = {
  fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.42)',
  textDecoration: 'none', transition: 'color 0.15s', display: 'block',
  lineHeight: 1, padding: '5px 0',
};

const Footer = () => {
  const y = new Date().getFullYear();
  return (
    <footer style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.07)', position: 'relative', overflow: 'hidden' }}>

      {/* Decorative background word */}
      <div aria-hidden style={{
        position: 'absolute', bottom: '-0.15em', left: '50%', transform: 'translateX(-50%)',
        fontSize: 'clamp(6rem,20vw,13rem)', fontWeight: 900, letterSpacing: '-0.04em',
        color: 'rgba(255,255,255,0.018)', whiteSpace: 'nowrap', lineHeight: 1,
        userSelect: 'none', pointerEvents: 'none',
      }}>DEUTSCH</div>

      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-1 flex flex-col gap-4">
            <Link to="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 11, fontWeight: 900, letterSpacing: '0.08em', padding: '4px 8px', borderRadius: 8, background: '#fff', color: '#0d0d0d' }}>DE</span>
              <span style={{ fontSize: 14, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>DeutschMG</span>
            </Link>
            <p style={{ fontSize: 12, lineHeight: 1.65, color: 'rgba(255,255,255,0.32)', maxWidth: 200 }}>
              Apprenez l&apos;allemand de A1 à B2 — gratuit, pour les Malgaches.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 4 }}>
              {STATS.map(s => (
                <div key={s.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                  <span style={{ fontSize: 16, fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.value}</span>
                  <span style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.10em', color: 'rgba(255,255,255,0.28)' }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <span style={{ fontSize: 10, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.28)' }}>Navigation</span>
            <nav style={{ display: 'flex', flexDirection: 'column' }}>
              {NAV_LINKS.map(l => (
                <Link key={l.to} to={l.to} style={lnk}
                  onMouseEnter={e => { e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.42)'; }}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Niveaux */}
          <div className="flex flex-col gap-3">
            <span style={{ fontSize: 10, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.28)' }}>Niveaux</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {LEVELS.map(lvl => (
                <Link key={lvl} to={\`/lessons/\${lvl}\`}
                  style={{ ...lnk, display: 'inline-flex', alignItems: 'center', gap: 8 }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.42)'; }}>
                  <span style={{ fontSize: 9, fontWeight: 900, padding: '2px 6px', borderRadius: 5,
                    background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.40)',
                    border: '1px solid rgba(255,255,255,0.08)', letterSpacing: '0.05em' }}>
                    {lvl}
                  </span>
                  <span style={{ fontSize: 12, color: 'inherit' }}>
                    {lvl === 'A1' ? 'Débutant' : lvl === 'A2' ? 'Élémentaire' : lvl === 'B1' ? 'Intermédiaire' : 'Avancé'}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-3">
            <span style={{ fontSize: 10, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.28)' }}>Info</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { label: 'Fait pour les Malagasy', note: 'Madagascar' },
                { label: 'Interface multilingue',  note: 'FR · MG · DE' },
                { label: 'Open source',            note: 'GitHub' },
                { label: 'Aucune pub',             note: '100% libre' },
              ].map(item => (
                <div key={item.label} style={{ padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,0.04)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.38)' }}>{item.label}</span>
                  <span style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.22)', whiteSpace: 'nowrap' }}>{item.note}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{ marginTop: 40, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.20)' }}>
            © {y} DeutschMG — Natao ho an&apos;ny Malagasy
          </span>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            {['A1', '→', 'A2', '→', 'B1', '→', 'B2'].map((t, i) => (
              <span key={i} style={{
                fontSize: t === '→' ? 10 : 9, fontWeight: t === '→' ? 400 : 900,
                color: t === '→' ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.22)',
                ...(t !== '→' && { padding: '2px 5px', borderRadius: 4, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }),
              }}>{t}</span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
`;

writeFileSync('./src/components/Footer.jsx', code, 'utf8');
console.log('Footer.jsx written successfully — lines:', code.split('\n').length);
