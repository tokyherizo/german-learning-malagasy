import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

/* ── Animated mesh background orbs ── */
const Orb = ({ style }) => (
  <div className="absolute rounded-full pointer-events-none" style={style} />
);

/* ── Feature chip displayed on the left panel ── */
const Feature = ({ icon, text, delay }) => (
  <div
    className="flex items-center gap-3 animate-fade-up"
    style={{ animationDelay: delay, animationFillMode: 'both' }}
  >
    <div
      className="w-9 h-9 rounded-xl flex items-center justify-center text-base shrink-0"
      style={{ background: 'rgba(129,140,248,0.15)', border: '1px solid rgba(129,140,248,0.25)' }}
    >
      {icon}
    </div>
    <span className="text-sm font-medium" style={{ color: 'rgba(220,218,255,0.75)' }}>{text}</span>
  </div>
);

/* ── Floating stat badge ── */
const StatBadge = ({ value, label, color, style }) => (
  <div
    className="absolute flex flex-col items-center px-4 py-2.5 rounded-2xl text-center animate-float"
    style={{
      background: 'rgba(13,11,30,0.80)',
      border: `1px solid ${color}30`,
      backdropFilter: 'blur(16px)',
      ...style,
    }}
  >
    <span className="text-xl font-black leading-none" style={{ color }}>{value}</span>
    <span className="text-[10px] font-medium mt-0.5" style={{ color: 'rgba(180,175,230,0.55)' }}>{label}</span>
  </div>
);

const Login = () => {
  const { login, error, clearError } = useAuth();

  const [tab, setTab]           = useState('guest');   // 'guest' | 'account'
  const [name, setName]         = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading]   = useState(false);
  const [shake, setShake]       = useState(false);
  const [animIn, setAnimIn]     = useState(false);

  useEffect(() => { setTimeout(() => setAnimIn(true), 80); }, []);
  useEffect(() => { clearError(); }, [tab, clearError]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const ok = login(
      tab === 'guest'
        ? { isGuest: true, name }
        : { isGuest: false, email, password }
    );
    if (!ok) {
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
    setLoading(false);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex">

      {/* ══════════════════════════════════════
          Animated gradient background
      ═══════════════════════════════════════ */}
      {/* Deep gradient base */}
      <div className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #04040e 0%, #0a0720 40%, #0d0828 70%, #07040f 100%)',
        }}
      />

      {/* Animated orbs */}
      <Orb style={{
        width: 700, height: 700, top: '-180px', left: '-180px',
        background: 'radial-gradient(circle, rgba(79,70,229,0.18) 0%, rgba(99,102,241,0.10) 40%, transparent 70%)',
        filter: 'blur(40px)',
        animation: 'float 8s ease-in-out infinite',
      }} />
      <Orb style={{
        width: 600, height: 600, bottom: '-120px', right: '-120px',
        background: 'radial-gradient(circle, rgba(124,58,237,0.20) 0%, rgba(167,139,250,0.10) 40%, transparent 70%)',
        filter: 'blur(50px)',
        animation: 'float 10s ease-in-out infinite reverse',
      }} />
      <Orb style={{
        width: 400, height: 400, top: '40%', left: '30%',
        background: 'radial-gradient(circle, rgba(56,189,248,0.10) 0%, rgba(14,165,233,0.05) 50%, transparent 70%)',
        filter: 'blur(60px)',
        animation: 'float 12s ease-in-out infinite 2s',
      }} />
      <Orb style={{
        width: 300, height: 300, top: '20%', right: '20%',
        background: 'radial-gradient(circle, rgba(129,140,248,0.12) 0%, transparent 70%)',
        filter: 'blur(40px)',
        animation: 'float 7s ease-in-out infinite 1s',
      }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(129,140,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(129,140,248,1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* ══════════════════════════════════════
          Left panel — branding
      ═══════════════════════════════════════ */}
      <div
        className={`hidden lg:flex flex-col justify-between w-[52%] p-14 relative transition-all duration-700 ${
          animIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`}
      >
        {/* Vertical left border glow */}
        <div className="absolute right-0 top-1/6 bottom-1/6 w-px"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(99,102,241,0.35), transparent)' }}
        />

        {/* Logo */}
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-base font-black text-white"
            style={{ background: 'var(--gradient-main)', boxShadow: '0 8px 32px rgba(99,102,241,0.35)' }}
          >
            DE
          </div>
          <div>
            <div className="text-xl font-extrabold text-grad">DeutschMG</div>
            <div className="text-[10px] uppercase tracking-[3px] font-medium"
              style={{ color: 'rgba(140,130,200,0.50)' }}>
              Alemà × Malagasy
            </div>
          </div>
        </div>

        {/* Hero copy */}
        <div className="relative">
          {/* Floating stat badges */}
          <StatBadge value="500+" label="Teny" color="#818cf8" style={{ top: -50, right: 80, animationDelay: '0s' }} />
          <StatBadge value="11+"  label="Lesona" color="#a78bfa" style={{ top: 60, right: -20, animationDelay: '1.2s' }} />
          <StatBadge value="100%" label="Maimaim-poana" color="#38bdf8" style={{ bottom: 10, right: 60, animationDelay: '0.6s' }} />

          <h1 className="text-5xl xl:text-6xl font-black leading-[1.07] mb-6">
            <span className="text-grad">Mianara</span>
            <br />
            <span style={{ color: 'rgba(235,233,255,0.92)' }}>Alemà</span>
            <br />
            <span style={{ color: 'rgba(180,175,230,0.55)' }} className="text-3xl xl:text-4xl font-bold">
              amin&apos;ny Malagasy
            </span>
          </h1>

          <p className="text-[0.92rem] leading-relaxed mb-10 max-w-sm"
            style={{ color: 'rgba(180,175,230,0.55)' }}>
            Plateforme maimaim-poana ho an&apos;ny Malagasy — lesona, vocabulaire, fanazaran-tsaina miaraka amin&apos;ny système XP.
          </p>

          <div className="flex flex-col gap-3.5">
            <Feature icon="📚" text="Lesona A1/A2 mifanaraka amin'ny CEFR" delay="0.2s" />
            <Feature icon="🃏" text="Karatra teny 500+ miaraka amin'ny ohatra" delay="0.35s" />
            <Feature icon="✏️" text="Fanazaran-tsaina interactive maro karazana" delay="0.5s" />
            <Feature icon="🏆" text="Système XP sy streak ho an'ny fandrosoana" delay="0.65s" />
          </div>
        </div>

        {/* Bottom credit */}
        <div className="text-xs" style={{ color: 'rgba(140,130,200,0.35)' }}>
          🇲🇬 Natao ho an&apos;ny Malagasy • 🇩🇪 Für Madagassen
        </div>
      </div>

      {/* ══════════════════════════════════════
          Right panel — login form
      ═══════════════════════════════════════ */}
      <div className={`flex-1 flex items-center justify-center p-6 lg:p-14 transition-all duration-700 delay-100 ${
          animIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div
          className="w-full max-w-md"
          style={{
            background: 'rgba(13,11,30,0.70)',
            border: '1px solid rgba(139,92,246,0.20)',
            borderRadius: '1.75rem',
            backdropFilter: 'blur(32px)',
            WebkitBackdropFilter: 'blur(32px)',
            boxShadow: '0 32px 80px rgba(4,4,14,0.60), 0 0 0 1px rgba(99,102,241,0.08)',
            padding: '2.5rem',
          }}
        >
          {/* Mobile logo */}
          <div className="flex lg:hidden items-center gap-3 mb-8">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black text-white"
              style={{ background: 'var(--gradient-main)' }}
            >DE</div>
            <div className="text-lg font-extrabold text-grad">DeutschMG</div>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-2xl font-black mb-1.5" style={{ color: 'rgba(235,233,255,0.95)' }}>
              Tonga soa! 👋
            </h2>
            <p className="text-sm" style={{ color: 'rgba(180,175,230,0.55)' }}>
              Hiditra amin&apos;ny kaonty na andeha mivantana
            </p>
          </div>

          {/* Tab toggle */}
          <div
            className="flex gap-1 p-1 rounded-2xl mb-7"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(139,92,246,0.12)' }}
          >
            {[
              { key: 'guest',   label: '🚀 Mpitsidika',    sub: 'Andeha mivantana' },
              { key: 'account', label: '🔑 Kaonty',        sub: 'Hiditra amin\'ny kaonty' },
            ].map(t => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className="flex-1 flex flex-col items-center py-2.5 rounded-xl text-xs font-bold transition-all duration-200"
                style={{
                  background: tab === t.key ? 'var(--gradient-main)' : 'transparent',
                  color: tab === t.key ? '#fff' : 'rgba(180,175,230,0.50)',
                  boxShadow: tab === t.key ? '0 4px 20px rgba(99,102,241,0.30)' : 'none',
                }}
              >
                <span className="text-sm">{t.label}</span>
                <span className="opacity-70 font-normal" style={{ fontSize: '0.65rem' }}>{t.sub}</span>
              </button>
            ))}
          </div>

          {/* Error banner */}
          {error && (
            <div
              className="flex items-start gap-3 rounded-xl p-3.5 mb-5 animate-fade-up"
              style={{ background: 'rgba(56,189,248,0.10)', border: '1px solid rgba(56,189,248,0.28)' }}
            >
              <span className="text-base shrink-0">⚠️</span>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(125,211,252,0.95)' }}>{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className={shake ? 'animate-bounce-in' : ''}>

            {tab === 'guest' ? (
              /* ── Guest tab ── */
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-2 uppercase tracking-wider"
                    style={{ color: 'rgba(180,175,230,0.55)' }}>
                    Ny Anaranao / Dein Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Ex: Rakoto, Maria…"
                    autoFocus
                    className="w-full rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-200"
                    style={{
                      background: 'rgba(99,102,241,0.07)',
                      border: `1px solid ${name ? 'rgba(129,140,248,0.40)' : 'rgba(139,92,246,0.18)'}`,
                      color: 'rgba(235,233,255,0.90)',
                    }}
                    onFocus={e => { e.target.style.border = '1px solid rgba(129,140,248,0.55)'; e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.12)'; }}
                    onBlur={e =>  { e.target.style.border = `1px solid ${name ? 'rgba(129,140,248,0.40)' : 'rgba(139,92,246,0.18)'}`; e.target.style.boxShadow = 'none'; }}
                  />
                </div>

                {/* Demo hint */}
                <div className="rounded-xl p-3.5 text-xs leading-relaxed"
                  style={{ background: 'rgba(129,140,248,0.07)', border: '1px solid rgba(129,140,248,0.14)' }}>
                  <span className="font-bold" style={{ color: 'var(--accent)' }}>💡 Kaonty demo:</span>
                  <br />
                  <span style={{ color: 'rgba(180,175,230,0.60)' }}>Email: demo@deutschmg.mg</span>
                  <br />
                  <span style={{ color: 'rgba(180,175,230,0.60)' }}>Tenimiafina: deutsch123</span>
                </div>
              </div>

            ) : (
              /* ── Account tab ── */
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-2 uppercase tracking-wider"
                    style={{ color: 'rgba(180,175,230,0.55)' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="demo@deutschmg.mg"
                    autoFocus
                    className="w-full rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-200"
                    style={{
                      background: 'rgba(99,102,241,0.07)',
                      border: '1px solid rgba(139,92,246,0.18)',
                      color: 'rgba(235,233,255,0.90)',
                    }}
                    onFocus={e => { e.target.style.border = '1px solid rgba(129,140,248,0.55)'; e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.12)'; }}
                    onBlur={e =>  { e.target.style.border = '1px solid rgba(139,92,246,0.18)';  e.target.style.boxShadow = 'none'; }}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-2 uppercase tracking-wider"
                    style={{ color: 'rgba(180,175,230,0.55)' }}>
                    Tenimiafina / Passwort
                  </label>
                  <div className="relative">
                    <input
                      type={showPass ? 'text' : 'password'}
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-200 pr-12"
                      style={{
                        background: 'rgba(99,102,241,0.07)',
                        border: '1px solid rgba(139,92,246,0.18)',
                        color: 'rgba(235,233,255,0.90)',
                      }}
                      onFocus={e => { e.target.style.border = '1px solid rgba(129,140,248,0.55)'; e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.12)'; }}
                      onBlur={e =>  { e.target.style.border = '1px solid rgba(139,92,246,0.18)';  e.target.style.boxShadow = 'none'; }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass(p => !p)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-base transition-opacity hover:opacity-70"
                      tabIndex={-1}
                    >
                      {showPass ? '🙈' : '👁️'}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-6 py-3.5 rounded-2xl text-sm font-bold text-white transition-all duration-200 relative overflow-hidden"
              style={{
                background: loading ? 'rgba(99,102,241,0.40)' : 'var(--gradient-main)',
                boxShadow: loading ? 'none' : '0 8px 32px rgba(99,102,241,0.35)',
                transform: loading ? 'none' : undefined,
              }}
              onMouseEnter={e => { if (!loading) e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin inline-block" />
                  Miandry...
                </span>
              ) : tab === 'guest' ? (
                '🚀 Hiditra Mivantana'
              ) : (
                '🔑 Hiditra'
              )}
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-xs mt-6" style={{ color: 'rgba(140,130,200,0.35)' }}>
            Plateforme maimaim-poana 100% • Tsy misy fandoavam-bola
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
