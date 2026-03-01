import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';

/* ─────────────────────────────────────────────────────────────── */
/*  Reusable atoms                                                  */
/* ─────────────────────────────────────────────────────────────── */

const InputField = ({ label, type = 'text', value, onChange, placeholder, autoFocus, suffix, error }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-[11px] font-bold uppercase tracking-[2px]" style={{ color: 'rgba(255,255,255,0.40)' }}>
      {label}
    </label>
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className="w-full rounded-2xl px-4 py-3.5 text-sm outline-none transition-all duration-200 pr-12"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: `1.5px solid ${error ? 'rgba(251,191,36,0.55)' : 'rgba(255,255,255,0.10)'}`,
          color: 'rgba(255,255,255,0.90)',
        }}
        onFocus={e => {
          e.target.style.border = '1.5px solid rgba(255,255,255,0.35)';
          e.target.style.background = 'rgba(255,255,255,0.06)';
        }}
        onBlur={e => {
          e.target.style.border = `1.5px solid ${error ? 'rgba(251,191,36,0.55)' : 'rgba(255,255,255,0.10)'}`;
          e.target.style.background = 'rgba(255,255,255,0.04)';
        }}
      />
      {suffix && (
        <div className="absolute right-3.5 top-1/2 -translate-y-1/2">{suffix}</div>
      )}
    </div>
  </div>
);

const GoogleButton = ({ onClick, loading }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={loading}
    className="w-full flex items-center justify-center gap-3 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-200"
    style={{
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.12)',
      color: 'rgba(255,255,255,0.80)',
    }}
    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.09)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'; }}
    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
  >
    {/* Google logo SVG */}
    <svg width="18" height="18" viewBox="0 0 48 48">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.36-8.16 2.36-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
      <path fill="none" d="M0 0h48v48H0z"/>
    </svg>
    {loading ? 'Miandry...' : 'Hiditra amin\'ny Google'}
  </button>
);

const Divider = ({ label = 'na' }) => (
  <div className="flex items-center gap-3 my-1">
    <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
    <span className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: 'rgba(180,190,230,0.35)' }}>{label}</span>
    <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
  </div>
);

const SubmitBtn = ({ loading, label, loadingLabel = 'Miandry...' }) => (
  <button
    type="submit"
    disabled={loading}
    className="w-full py-4 rounded-2xl text-sm font-black transition-all duration-200 relative overflow-hidden tracking-wide"
    style={{
      background: loading ? 'rgba(255,255,255,0.10)' : '#fff',
      color: loading ? 'rgba(255,255,255,0.50)' : '#0d0d0d',
    }}
    onMouseEnter={e => { if (!loading) e.currentTarget.style.opacity = '0.90'; }}
    onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
  >
    {loading
      ? <span className="inline-flex items-center gap-2"><span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin inline-block" />{loadingLabel}</span>
      : label}
  </button>
);

const ErrorBanner = ({ msg }) => msg ? (
  <div className="flex items-start gap-3 rounded-2xl p-3.5 animate-fade-up"
    style={{ background: 'rgba(56,189,248,0.08)', border: '1.5px solid rgba(56,189,248,0.28)' }}>
    <span className="text-sky-400 shrink-0 mt-0.5">⚠</span>
    <p className="text-xs leading-relaxed" style={{ color: 'rgba(125,211,252,0.95)' }}>{msg}</p>
  </div>
) : null;

const PasswordInput = ({ label, value, onChange, placeholder, autoFocus }) => {
  const [show, setShow] = useState(false);
  return (
    <InputField
      label={label}
      type={show ? 'text' : 'password'}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoFocus={autoFocus}
      suffix={
        <button type="button" onClick={() => setShow(p => !p)}
          className="text-lg transition-opacity hover:opacity-60"
          tabIndex={-1}
          style={{ color: 'rgba(180,190,230,0.50)' }}>
          {show ? '🙈' : '👁️'}
        </button>
      }
    />
  );
};

/* ─────────────────────────────────────────────────────────────── */
/*  Strength bar                                                    */
/* ─────────────────────────────────────────────────────────────── */
const strengthLabel = ['', 'Kely loatra', 'Averina', 'Tsara', 'Matanjaka'];
const strengthColor = ['', '#f59e0b', '#f59e0b', '#60a5fa', '#34d399'];
const getStrength = (p) => {
  if (!p) return 0;
  let s = 0;
  if (p.length >= 6)  s++;
  if (p.length >= 10) s++;
  if (/[A-Z]/.test(p) && /[0-9]/.test(p)) s++;
  if (/[^a-zA-Z0-9]/.test(p)) s++;
  return Math.min(s, 4);
};
const StrengthBar = ({ password }) => {
  const s = getStrength(password);
  if (!password) return null;
  return (
    <div className="flex flex-col gap-1.5 mt-1">
      <div className="flex gap-1">
        {[1,2,3,4].map(i => (
          <div key={i} className="flex-1 h-1 rounded-full transition-all duration-300"
            style={{ background: i <= s ? strengthColor[s] : 'rgba(255,255,255,0.08)' }} />
        ))}
      </div>
      <span className="text-[10px] font-semibold" style={{ color: strengthColor[s] }}>{strengthLabel[s]}</span>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────── */
/*  View: LOGIN                                                     */
/* ─────────────────────────────────────────────────────────────── */
const LoginView = ({ onForgot, onRegister }) => {
  const { login, loginWithGoogle, error, clearError } = useAuth();
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [loading,  setLoading]  = useState(false);
  const [gLoad,    setGLoad]    = useState(false);

  useEffect(() => { clearError(); }, []); // eslint-disable-line

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    login({ email, password });
    setLoading(false);
  };

  const handleGoogle = () => {
    setGLoad(true);
    setTimeout(() => { loginWithGoogle(); setGLoad(false); }, 900);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="mb-1">
        <h2 className="text-2xl font-black mb-1" style={{ color: 'rgba(235,240,255,0.96)' }}>Tonga soa 👋</h2>
        <p className="text-sm" style={{ color: 'rgba(180,190,230,0.55)' }}>Hiditra amin&apos;ny kaontinao</p>
      </div>

      <GoogleButton onClick={handleGoogle} loading={gLoad} />
      <Divider />

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <ErrorBanner msg={error} />
        <InputField label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)}
          placeholder="demo@deutschmg.mg" autoFocus />
        <div className="flex flex-col gap-1">
          <PasswordInput label="Tenimiafina • Passwort" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" />
          <button type="button" onClick={onForgot}
            className="self-end text-xs font-semibold mt-1 transition-opacity hover:opacity-70"
            style={{ color: 'var(--accent)' }}>
            Tenimiafina voafafa?
          </button>
        </div>
        <SubmitBtn loading={loading} label="Hiditra" />
      </form>

      <p className="text-center text-xs" style={{ color: 'rgba(180,190,230,0.40)' }}>
        Tsy manana kaonty?{' '}
        <button onClick={onRegister} className="font-bold transition-opacity hover:opacity-70" style={{ color: 'var(--accent)' }}>
          Mamorona kaonty
        </button>
      </p>

      <div className="rounded-2xl p-3.5 text-xs leading-relaxed"
        style={{ background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.16)' }}>
        <span className="font-bold" style={{ color: 'var(--accent)' }}>💡 Demo:</span>{' '}
        <span style={{ color: 'rgba(180,190,230,0.60)' }}>demo@deutschmg.mg / deutsch123</span>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────── */
/*  View: REGISTER                                                  */
/* ─────────────────────────────────────────────────────────────── */
const RegisterView = ({ onLogin }) => {
  const { register, loginWithGoogle, error, clearError } = useAuth();
  const [name,     setName]     = useState('');
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [confirm,  setConfirm]  = useState('');
  const [loading,  setLoading]  = useState(false);
  const [gLoad,    setGLoad]    = useState(false);
  const [localErr, setLocalErr] = useState('');

  useEffect(() => { clearError(); setLocalErr(''); }, []); // eslint-disable-line

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm) { setLocalErr('Ny tenimiafina roa tsy mitovy'); return; }
    setLocalErr('');
    setLoading(true);
    register({ name, email, password });
    setLoading(false);
  };

  const handleGoogle = () => {
    setGLoad(true);
    setTimeout(() => { loginWithGoogle(); setGLoad(false); }, 900);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="mb-1">
        <h2 className="text-2xl font-black mb-1" style={{ color: 'rgba(235,240,255,0.96)' }}>Mamorona kaonty ✨</h2>
        <p className="text-sm" style={{ color: 'rgba(180,190,230,0.55)' }}>Maimaim-poana • Aucune carte bancaire</p>
      </div>

      <GoogleButton onClick={handleGoogle} loading={gLoad} />
      <Divider />

      <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
        <ErrorBanner msg={error || localErr} />

        <InputField label="Ny Anaranao • Vollständiger Name" type="text" value={name}
          onChange={e => setName(e.target.value)} placeholder="Ex: Rakoto Andry" autoFocus />
        <InputField label="Email" type="email" value={email}
          onChange={e => setEmail(e.target.value)} placeholder="anarana@mail.com" />

        <div className="flex flex-col gap-1">
          <PasswordInput label="Tenimiafina • Passwort" value={password}
            onChange={e => setPassword(e.target.value)} placeholder="min. 6 karatra" />
          <StrengthBar password={password} />
        </div>

        <PasswordInput label="Averina ny tenimiafina • Wiederholen" value={confirm}
          onChange={e => setConfirm(e.target.value)} placeholder="••••••••"
          error={confirm && confirm !== password} />
        {confirm && confirm !== password && (
          <span className="text-[11px] font-semibold" style={{ color: '#f59e0b' }}>
            ⚠ Tsy mitovy ilay tenimiafina
          </span>
        )}

        <SubmitBtn loading={loading} label="Hamorona ny kaontiko" />
      </form>

      <p className="text-center text-xs" style={{ color: 'rgba(180,190,230,0.40)' }}>
        Manana kaonty sahady?{' '}
        <button onClick={onLogin} className="font-bold transition-opacity hover:opacity-70" style={{ color: 'var(--accent)' }}>
          Hiditra
        </button>
      </p>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────── */
/*  View: FORGOT PASSWORD                                           */
/* ─────────────────────────────────────────────────────────────── */
const ForgotView = ({ onBack }) => {
  const { forgotPassword, error, clearError } = useAuth();
  const [email,   setEmail]   = useState('');
  const [loading, setLoading] = useState(false);
  const [sent,    setSent]    = useState(false);

  useEffect(() => { clearError(); }, []); // eslint-disable-line

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const ok = forgotPassword(email);
    setLoading(false);
    if (ok) setSent(true);
  };

  if (sent) return (
    <div className="flex flex-col items-center gap-6 py-4 text-center">
      <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl animate-bounce-in"
        style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.20), rgba(124,58,237,0.20))', border: '2px solid rgba(96,165,250,0.30)' }}>
        📬
      </div>
      <div>
        <h2 className="text-2xl font-black mb-2" style={{ color: 'rgba(235,240,255,0.96)' }}>Email nalefa! ✅</h2>
        <p className="text-sm leading-relaxed" style={{ color: 'rgba(180,190,230,0.60)' }}>
          Raha misy kaonty mifandray amin&apos;ny <strong style={{ color: 'var(--accent)' }}>{email}</strong>, ho mahazo link fanarenana ianao.
        </p>
        <p className="text-xs mt-2" style={{ color: 'rgba(180,190,230,0.38)' }}>
          Jereo ny spam raha tsy hita.
        </p>
      </div>
      <button onClick={onBack} className="btn-grad px-8 py-3 rounded-2xl text-sm font-black text-white">
        ← Hiverina
      </button>
    </div>
  );

  return (
    <div className="flex flex-col gap-5">
      <div>
        <button onClick={onBack} className="flex items-center gap-1.5 text-xs font-semibold mb-5 transition-opacity hover:opacity-70"
          style={{ color: 'var(--accent)' }}>
          ← Hiverina
        </button>
        <h2 className="text-2xl font-black mb-1" style={{ color: 'rgba(235,240,255,0.96)' }}>Tenimiafina voafafa 🔐</h2>
        <p className="text-sm" style={{ color: 'rgba(180,190,230,0.55)' }}>
          Ampidiro ny emailnao — handefa link fanarenana izahay
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <ErrorBanner msg={error} />
        <InputField label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)}
          placeholder="email-anao@mail.com" autoFocus />
        <SubmitBtn loading={loading} label="Alefa ny reset link" loadingLabel="Miandry..." />
      </form>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────── */
/*  Branding panel (left desktop)                                   */
/* ─────────────────────────────────────────────────────────────── */
const BrandPanel = ({ view }) => {
  const copy = {
    login:    { tag: 'Tonga soa indray',      headline: ['Mianara', 'Alemà', 'miaraka'],  sub: 'Hiditra amin\'ny kaontinao sy' },
    register: { tag: 'Kaonty vaovao',          headline: ['Atombohy', 'ny', 'dianao'],     sub: 'Maimaim-poana — hatramin\'ny' },
    forgot:   { tag: 'Fanarenana kaonty',      headline: ['Mahazo', 'miditra', 'indray'],  sub: 'Ianao dia hamerina' },
  };
  const { tag, headline, sub } = copy[view] || copy.login;

  return (
    <div className="hidden lg:flex flex-col justify-between w-[50%] p-12 xl:p-16 relative">
      {/* Vertical separator */}
      <div className="absolute right-0 top-1/5 bottom-1/5 w-px"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(59,130,246,0.30), transparent)' }} />

      {/* Logo */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-base font-black text-white"
          style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)', boxShadow: '0 8px 32px rgba(37,99,235,0.40)' }}>
          DE
        </div>
        <div>
          <div className="text-xl font-extrabold text-grad">DeutschMG</div>
          <div className="text-[10px] uppercase tracking-[3px] font-medium" style={{ color: 'rgba(140,155,210,0.50)' }}>
            Alemà × Malagasy
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="relative">
        {/* Floating pills */}
        <div className="absolute -top-10 right-10 flex flex-col gap-2.5 animate-float" style={{ animationDelay: '0s' }}>
          {[
            { v: '500+', l: 'Teny',            c: '#60a5fa' },
            { v: '11+',  l: 'Lesona',          c: '#a78bfa' },
            { v: '100%', l: 'Maimaim-poana',   c: '#38bdf8' },
          ].map(({ v, l, c }) => (
            <div key={l} className="flex items-center gap-2.5 px-4 py-2 rounded-2xl"
              style={{ background: 'rgba(8,12,30,0.82)', border: `1px solid ${c}28`, backdropFilter: 'blur(12px)' }}>
              <span className="text-base font-black" style={{ color: c }}>{v}</span>
              <span className="text-[11px] font-medium" style={{ color: 'rgba(180,190,230,0.55)' }}>{l}</span>
            </div>
          ))}
        </div>

        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
          style={{ background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.25)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-[2px]" style={{ color: 'var(--accent)' }}>{tag}</span>
        </div>

        <h1 className="text-5xl xl:text-6xl font-black leading-[1.08] mb-6 transition-all duration-500">
          <span className="text-grad">{headline[0]}</span>
          <br />
          <span style={{ color: 'rgba(235,240,255,0.93)' }}>{headline[1]}</span>
          <br />
          <span style={{ color: 'rgba(180,190,230,0.50)', fontSize: '0.72em' }}>{headline[2]}</span>
        </h1>

        <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(180,190,230,0.55)' }}>
          {sub}
        </p>

        {/* Feature list */}
        <div className="flex flex-col gap-3 mt-8">
          {[
            { icon: '🧠', text: 'Lesona A1/A2 mifanaraka CEFR' },
            { icon: '🃏', text: 'Vocabulaire 500+ miaraka ohatra' },
            { icon: '✏️', text: 'Fanazaran-tsaina interactive' },
            { icon: '🏆', text: 'Système XP & streaks' },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-3 animate-fade-up">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm shrink-0"
                style={{ background: 'rgba(59,130,246,0.14)', border: '1px solid rgba(59,130,246,0.22)' }}>
                {icon}
              </div>
              <span className="text-sm font-medium" style={{ color: 'rgba(220,225,255,0.72)' }}>{text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-xs" style={{ color: 'rgba(140,155,210,0.35)' }}>
        🇲🇬 Natao ho an&apos;ny Malagasy • 🇩🇪 Für Madagassen
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────── */
/*  View indicator dots                                             */
/* ─────────────────────────────────────────────────────────────── */
const ViewDots = ({ view, setView }) => (
  <div className="flex items-center gap-2 justify-center mt-6">
    {['login', 'register'].map(v => (
      <button key={v} onClick={() => setView(v)}
        className="rounded-full transition-all duration-300"
        style={{
          width:  v === view ? '24px' : '7px',
          height: '7px',
          background: v === view ? '#fff' : 'rgba(255,255,255,0.15)',
        }} />
    ))}
  </div>
);

/* ─────────────────────────────────────────────────────────────── */
/*  Main component                                                  */
/* ─────────────────────────────────────────────────────────────── */
const Login = () => {
  const [view,   setView]   = useState('login');   // 'login' | 'register' | 'forgot'
  const [animIn, setAnimIn] = useState(false);
  const prevView = useRef(view);

  useEffect(() => { setTimeout(() => setAnimIn(true), 80); }, []);

  const switchView = (v) => {
    prevView.current = view;
    setView(v);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex" style={{ background: '#0d0d0d' }}>

      {/* Big background decorative word */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ zIndex: 0 }}
      >
        <div
          style={{
            fontSize: 'clamp(6rem,18vw,16rem)',
            fontWeight: 900,
            letterSpacing: '-0.06em',
            color: 'rgba(255,255,255,0.018)',
            lineHeight: 1,
          }}
        >
          {view === 'register' ? 'KONTO' : view === 'forgot' ? 'PASSWORT' : 'LOGIN'}
        </div>
      </div>

      {/* ── Brand Panel ── */}
      <BrandPanel view={view === 'forgot' ? 'forgot' : view} />

      {/* ── Form Panel ── */}
      <div className={`relative z-10 flex-1 flex items-center justify-center p-6 lg:p-12 transition-all duration-700 delay-100 ${
        animIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="w-full max-w-[420px]">

          {/* Card */}
          <div
            className="relative overflow-hidden"
            style={{
              background: '#111',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '2rem',
              padding: '2.25rem 2.25rem 2rem',
            }}
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />

            {/* Mobile logo */}
            <div className="flex lg:hidden items-center gap-3 mb-7">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black" style={{ background: '#fff', color: '#0d0d0d' }}>DE</div>
              <div className="text-lg font-black text-white">DeutschMG</div>
            </div>

            {/* View content with slide transition */}
            <div key={view} className="animate-fade-up">
              {view === 'login'    && <LoginView    onForgot={() => switchView('forgot')}   onRegister={() => switchView('register')} />}
              {view === 'register' && <RegisterView onLogin={() => switchView('login')} />}
              {view === 'forgot'   && <ForgotView   onBack={() => switchView('login')} />}
            </div>

            {/* View dots */}
            {view !== 'forgot' && <ViewDots view={view} setView={switchView} />}
          </div>

          {/* Footer note */}
          <p className="text-center text-[11px] mt-5" style={{ color: 'rgba(255,255,255,0.22)' }}>
            Sécurisé · Maimaim-poana 100% · Tsy misy publicité
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
