import { Link } from 'react-router-dom';

const Footer = () => {
  const y = new Date().getFullYear();

  const linkCls =
    'text-sm hover:translate-x-1.5 transition-all duration-200 flex items-center gap-2 group';

  return (
    <footer
      className="relative mt-auto overflow-hidden pt-16"
      style={{
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-card)',
      }}
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.07),transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[300px] h-[150px] bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12"
          style={{ borderBottom: '1px solid var(--border-card)' }}>

          {/* ── Brand ── */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              {/* Gradient badge */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black text-white shrink-0"
                style={{ background: 'var(--gradient-main)' }}
              >
                DE
              </div>
              <div>
                <div className="font-extrabold text-grad text-base leading-none">DeutschMG</div>
                <div
                  className="text-[9px] uppercase tracking-[3px] mt-0.5"
                  style={{ color: 'var(--text-subtle)' }}
                >
                  Alemà • Malagasy
                </div>
              </div>
            </div>
            <p className="text-[0.83rem] leading-relaxed mb-2" style={{ color: 'var(--text-muted)' }}>
              Plateforme maimaim-poana ho an'ny Malagasy mianatra teny Alemà.
            </p>
            <p className="text-[0.75rem] italic leading-relaxed mb-5" style={{ color: 'var(--text-subtle)' }}>
              Die kostenlose Lernplattform für Madagassen.
            </p>
            {/* Language pill */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{
                background: 'var(--accent-soft)',
                border: '1px solid var(--border-card)',
                color: 'var(--accent)',
              }}
            >
              🇲🇬 Malagasy ↔ Alemà 🇩🇪
            </div>
          </div>

          {/* ── Navigation ── */}
          <div>
            <h4
              className="text-[0.7rem] font-bold uppercase tracking-[2.5px] mb-4"
              style={{ color: 'var(--accent)' }}
            >
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { to: '/', label: 'Fandraisana' },
                { to: '/levels', label: 'Ambaratonga' },
                { to: '/vocabulary', label: 'Teny' },
                { to: '/exercises', label: 'Fampiharana' },
              ].map(({ to, label }) => (
                <Link key={to} to={to} className={linkCls} style={{ color: 'var(--text-muted)' }}>
                  <span
                    className="w-1 h-1 rounded-full transition-all duration-200 group-hover:w-3"
                    style={{ background: 'var(--accent-vivid)' }}
                  />
                  <span className="group-hover:text-[var(--accent)] transition-colors">{label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* ── Levels ── */}
          <div>
            <h4
              className="text-[0.7rem] font-bold uppercase tracking-[2.5px] mb-4"
              style={{ color: 'var(--accent-violet)' }}
            >
              Ambaratonga
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                to="/levels"
                className="inline-flex px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all duration-200 w-fit hover:opacity-90"
                style={{
                  background: 'rgba(99,102,241,0.10)',
                  borderColor: 'rgba(99,102,241,0.25)',
                  color: 'var(--accent)',
                }}
              >
                A1 — Fanombohana
              </Link>
              <Link
                to="/levels"
                className="inline-flex px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all duration-200 w-fit hover:opacity-90"
                style={{
                  background: 'rgba(139,92,246,0.10)',
                  borderColor: 'rgba(139,92,246,0.25)',
                  color: 'var(--accent-violet)',
                }}
              >
                A2 — Mioha
              </Link>
              <span
                className="inline-flex px-3.5 py-1.5 rounded-xl text-xs font-bold border w-fit cursor-default opacity-35"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderColor: 'rgba(255,255,255,0.08)',
                  color: 'var(--text-muted)',
                }}
              >
                B1 — Manaraka...
              </span>
            </div>
          </div>

          {/* ── Stats ── */}
          <div>
            <h4
              className="text-[0.7rem] font-bold uppercase tracking-[2.5px] mb-4"
              style={{ color: 'var(--accent-sky)' }}
            >
              Ny Platform
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                ['500+', 'Teny'],
                ['11+', 'Lesona'],
                ['20+', 'Fanazaran'],
                ['100%', 'Maimaim-poan'],
              ].map(([n, l]) => (
                <div
                  key={l}
                  className="flex flex-col items-center rounded-xl p-3 text-center"
                  style={{
                    background: 'var(--accent-soft)',
                    border: '1px solid var(--border-card)',
                  }}
                >
                  <span
                    className="text-lg font-extrabold leading-none text-grad"
                  >
                    {n}
                  </span>
                  <span
                    className="text-[10px] uppercase tracking-wide mt-1"
                    style={{ color: 'var(--text-subtle)' }}
                  >
                    {l}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom ── */}
        <div
          className="flex flex-wrap items-center justify-between gap-3 py-5 text-[0.75rem]"
          style={{ color: 'var(--text-subtle)' }}
        >
          <div className="flex items-center gap-2">
            <span>© {y} DeutschMG Platform</span>
            <span className="opacity-40">•</span>
            <span>Natao ho an'ny Malagasy</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Deutsch ↔ Malagasy</span>
            <span className="opacity-40">•</span>
            <span>A1 → A2 → B1</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
