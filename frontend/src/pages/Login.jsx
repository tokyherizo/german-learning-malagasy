import { useState, useEffect, useRef } from 'react';
import { useAuth }     from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

/* ─────────────────────────────────────────────────────────────── */
/*  FloatTile  (same as Home hero)                                  */
/* ─────────────────────────────────────────────────────────────── */
const FloatTile = ({ bg, label, style, delay = 0, size = '1rem' }) => (
  <div
    className="absolute rounded-2xl flex items-center justify-center font-black select-none animate-float tracking-tight"
    style={{
      background: bg,
      boxShadow: '0 12px 40px rgba(69,64,60,0.96)',
      animationDelay: `${delay}ms`,
      fontSize: size,
      padding: '14px 20px',
      lineHeight: 1,
      color: 'rgba(255,255,255,0.92)',
      ...style,
    }}
  >
    {label}
  </div>
);

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
const LoginView = ({ onForgot, onRegister, t }) => {
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
        <h2 className="text-2xl font-black mb-1" style={{ color: 'rgba(235,240,255,0.96)' }}>
          {t?.login?.title || 'Connexion'} 👋
        </h2>
        <p className="text-sm" style={{ color: 'rgba(180,190,230,0.55)' }}>
          {t?.login?.subtitle || 'Connectez-vous pour continuer votre apprentissage.'}
        </p>
      </div>

      <GoogleButton onClick={handleGoogle} loading={gLoad} />
      <Divider />

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <ErrorBanner msg={error} />
        <InputField label={t?.login?.emailLabel || 'Email'} type="email" value={email} onChange={e => setEmail(e.target.value)}
          placeholder={t?.login?.emailPH || 'demo@deutschmg.mg'} autoFocus />
        <div className="flex flex-col gap-1">
          <PasswordInput label={t?.login?.passLabel || 'Mot de passe'} value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" />
          <button type="button" onClick={onForgot}
            className="self-end text-xs font-semibold mt-1 transition-opacity hover:opacity-70"
            style={{ color: 'var(--accent)' }}>
            Tenimiafina voafafa?
          </button>
        </div>
        <SubmitBtn loading={loading} label={t?.login?.submitBtn || 'Se connecter'} loadingLabel={t?.login?.loadingBtn || 'Connexion...'} />
      </form>

      <p className="text-center text-xs" style={{ color: 'rgba(180,190,230,0.40)' }}>
        {t?.login?.switchToReg?.split('?')[0] || 'Pas encore de compte ?'}&nbsp;
        <button onClick={onRegister} className="font-bold transition-opacity hover:opacity-70" style={{ color: 'var(--accent)' }}>
          {t?.login?.switchToReg?.split('?').pop()?.trim() || "S'inscrire"}
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
const RegisterView = ({ onLogin, t }) => {
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
        <h2 className="text-2xl font-black mb-1" style={{ color: 'rgba(235,240,255,0.96)' }}>
          {t?.login?.regTitle || 'Creer un compte'} ✨
        </h2>
        <p className="text-sm" style={{ color: 'rgba(180,190,230,0.55)' }}>
          {t?.login?.regSubtitle || 'Rejoignez DeutschMG — gratuit pour toujours.'}
        </p>
      </div>

      <GoogleButton onClick={handleGoogle} loading={gLoad} />
      <Divider />

      <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
        <ErrorBanner msg={error || localErr} />

        <InputField label={t?.login?.nameLabel || 'Nom complet'} type="text" value={name}
          onChange={e => setName(e.target.value)} placeholder={t?.login?.namePH || 'Ex: Rakoto Andry'} autoFocus />
        <InputField label={t?.login?.emailLabel || 'Email'} type="email" value={email}
          onChange={e => setEmail(e.target.value)} placeholder={t?.login?.emailPH || 'votre@email.com'} />

        <div className="flex flex-col gap-1">
          <PasswordInput label={t?.login?.passLabel || 'Mot de passe'} value={password}
            onChange={e => setPassword(e.target.value)} placeholder="min. 6 karatra" />
          <StrengthBar password={password} />
        </div>

        <PasswordInput label={t?.login?.confirmLabel || 'Confirmer le mot de passe'} value={confirm}
          onChange={e => setConfirm(e.target.value)} placeholder="••••••••"
          error={confirm && confirm !== password} />
        {confirm && confirm !== password && (
          <span className="text-[11px] font-semibold" style={{ color: '#f59e0b' }}>
            ⚠ Tsy mitovy ilay tenimiafina
          </span>
        )}

        <SubmitBtn loading={loading} label={t?.login?.regBtn || 'Creer mon compte'} loadingLabel={t?.login?.regLoading || 'Creation...'} />
      </form>

      <p className="text-center text-xs" style={{ color: 'rgba(180,190,230,0.40)' }}>
        {t?.login?.switchToLog?.split('?')[0] || 'Deja un compte ?'}&nbsp;
        <button onClick={onLogin} className="font-bold transition-opacity hover:opacity-70" style={{ color: 'var(--accent)' }}>
          {t?.login?.switchToLog?.split('?').pop()?.trim() || 'Se connecter'}
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
/* ─────────────────────────────────────────────────────────────── */
/*  Left decorative panel  (FloatTile style, like Home hero)       */
/* ─────────────────────────────────────────────────────────────── */
const BrandPanel = ({ view, t }) => {
  const headlines = {
    login:    ['Apprenez', "l'Allemand", 'en Malagasy.'],
    register: ['Rejoignez', 'DeutschMG', 'gratuitement.'],
    forgot:   ['Retrouvez', 'votre', 'acces.'],
  };
  const [a, b, c] = headlines[view] || headlines.login;

  return (
    <div
      className="hidden md:flex flex-col items-center justify-center w-[48%] relative overflow-hidden"
      style={{ background: '#0d0d0d', borderRight: '1px solid rgba(255,255,255,0.07)', minHeight: '100vh' }}
    >
      {/* FloatTiles — left side */}
      <FloatTile bg="#9e10ab" label="der/die/das" size="1.3rem" style={{ left: '6%',  top: '14%' }} delay={0}   />
      <FloatTile bg="#da0909" label="A1"          size="2rem"   style={{ left: '10%', top: '44%' }} delay={400} />
      <FloatTile bg="#0ab2af" label="Dativ"       size="1.4rem" style={{ left: '5%',  top: '72%' }} delay={200} />
      <FloatTile bg="#23c77d" label="B1/B2"       size="0.9rem" style={{ left: '42%', top: '82%' }} delay={800} />

      {/* FloatTiles — right side */}
      <FloatTile bg="#0d0dcb" label="Akkusativ"   size="1.5rem" style={{ right: '6%', top: '16%' }} delay={300} />
      <FloatTile bg="#e9079a" label="A2"          size="2rem"   style={{ right: '9%', top: '44%' }} delay={600} />
      <FloatTile bg="#aa6805" label="C1/C2"       size="1rem"   style={{ right: '5%', top: '63%' }} delay={100} />
      <FloatTile bg="#fb7900" label="Genitiv"     size="1.4rem" style={{ right: '16%', top: '78%' }} delay={500} />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center text-center px-10">

        {/* Badge — white pill with green pulse, same as Home */}
        <div
          className="flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 text-xs font-semibold uppercase tracking-widest"
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          {t?.login?.pageDecor || 'DEUTSCH'}
        </div>

        {/* Headline */}
        <h1 className="text-4xl xl:text-5xl font-black leading-[1.1] mb-5" style={{ letterSpacing: '-0.03em' }}>
          <span style={{ color: 'rgba(255,255,255,0.95)' }}>{a}</span><br />
          <span className="text-grad">{b}</span><br />
          <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.78em' }}>{c}</span>
        </h1>

        {/* Sub */}
        <p className="text-sm max-w-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.32)' }}>
          {t?.home?.subtitle || "La plateforme gratuite pour Malgaches qui apprennent l'allemand."}
        </p>

        {/* Branding */}
        <div className="flex items-center gap-3 mt-10">
          <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-sm font-black text-white"
            style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)', boxShadow: '0 8px 24px rgba(37,99,235,0.40)' }}>
            DE
          </div>
          <div className="text-left">
            <div className="text-base font-extrabold text-grad">DeutschMG</div>
            <div className="text-[10px] uppercase tracking-[3px] font-medium" style={{ color: 'rgba(140,155,210,0.45)' }}>
              Alema x Malagasy
            </div>
          </div>
        </div>
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
  const { t } = useLanguage();
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
            color: 'rgba(255,255,255,0.015)',
            lineHeight: 1,
          }}
        >
          {view === 'register' ? 'KONTO' : view === 'forgot' ? 'PASSWORT' : 'LOGIN'}
        </div>
      </div>

      {/* Left brand panel — FloatTiles like Home */}
      <BrandPanel view={view === 'forgot' ? 'forgot' : view} t={t} />

      {/* Right form panel */}
      <div className={`relative z-10 flex-1 flex items-center justify-center p-6 lg:p-12 transition-all duration-700 delay-100 ${
        animIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="w-full max-w-[420px]">

          {/* ── Mobile-only hero header (badge + tagline) ── */}
          <div className="flex md:hidden flex-col items-center text-center mb-6">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-widest"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.6)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              {t?.login?.pageDecor || 'DEUTSCH'}
            </div>
            {/* Headline */}
            <h1 className="text-2xl font-black leading-tight mb-2" style={{ letterSpacing: '-0.03em' }}>
              <span className="text-white">Apprenez </span>
              <span className="text-grad">l&apos;Allemand</span>
            </h1>
            <p className="text-xs max-w-[260px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
              {t?.home?.subtitle || "La plateforme gratuite pour Malgaches qui apprennent l'allemand."}
            </p>
          </div>

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
            <div className="flex md:hidden items-center gap-3 mb-7">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black" style={{ background: '#fff', color: '#0d0d0d' }}>DE</div>
              <div className="text-lg font-black text-white">DeutschMG</div>
            </div>

            {/* View content with slide transition */}
            <div key={view} className="animate-fade-up">
              {view === 'login'    && <LoginView    onForgot={() => switchView('forgot')}   onRegister={() => switchView('register')} t={t} />}
              {view === 'register' && <RegisterView onLogin={() => switchView('login')} t={t} />}
              {view === 'forgot'   && <ForgotView   onBack={() => switchView('login')} />}
            </div>

            {/* View dots */}
            {view !== 'forgot' && <ViewDots view={view} setView={switchView} />}
          </div>

          {/* Footer note */}
          <p className="text-center text-[11px] mt-5" style={{ color: 'rgba(255,255,255,0.22)' }}>
            Securise &middot; Maimaim-poana 100% &middot; Tsy misy publicite
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
