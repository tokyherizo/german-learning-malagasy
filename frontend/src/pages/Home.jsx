import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { progressService } from '../services/progress';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

/* --- Floating word tile */
const FloatTile = ({ bg, label, style, delay = 0, size = '1rem' }) => (
  <div
    className="absolute rounded-2xl flex items-center justify-center font-black select-none animate-float tracking-tight"
    style={{
      background: bg,
      boxShadow: '0 12px 40px rgba(0, 0, 0, 0)',
      animationDelay: `${delay}ms`,
      fontSize: size,
      padding: '15px 20px',
      lineHeight: 1,
      color: 'rgba(255,255,255,0.92)',
      ...style,
    }}
  >
    {label}
  </div>
);

/* --- Category chip */
const Chip = ({ label, active, onClick }) => {
  const { theme } = useTheme();
  const il = theme === 'light';
  return (
    <button
      onClick={onClick}
      className="shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-150"
      style={{
        background: active ? (il ? '#0f172a' : '#fff') : (il ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'),
        color: active ? '#fff' : (il ? 'rgba(15,23,42,0.55)' : 'rgba(255,255,255,0.55)'),
        border: active
          ? `1px solid ${il ? '#0f172a' : '#fff'}`
          : `1px solid ${il ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.12)'}`,
      }}
    >
      {label}
    </button>
  );
};

/* --- Resource card */
const ResourceCard = ({ bigWord, bigWordColor, title, desc, tag, to, accent, openBtn }) => {
  const { theme } = useTheme();
  const il = theme === 'light';
  const cardBg = il ? '#ffffff' : '#111';
  const cardBorder = il ? 'rgba(242, 14, 14, 0.09)' : 'rgba(255,255,255,0.07)';
  const cardBorderHover = il ? 'rgba(0,0,0,0.22)' : 'rgba(255,255,255,0.20)';
  return (
    <Link
      to={to}
      className="group relative flex flex-col justify-end overflow-hidden rounded-2xl transition-all duration-200"
      style={{ background: cardBg, border: `1px solid ${cardBorder}`, minHeight: 200 }}
      onMouseEnter={e => {
        e.currentTarget.style.border = `1px solid ${cardBorderHover}`;
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.border = `1px solid ${cardBorder}`;
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div
        className="card-bigword absolute top-0 left-0 w-full flex items-start px-5 pt-5 pointer-events-none select-none"
        style={{
          '--bigword-c': bigWordColor ?? 'rgba(255,255,255,0.06)',
          fontSize: 'clamp(3.5rem, 8vw, 5.5rem)',
          fontWeight: 900,
          letterSpacing: '-0.04em',
          lineHeight: 1,
          color: bigWordColor ?? 'rgba(255,255,255,0.06)',
          userSelect: 'none',
        }}
      >
        {bigWord}
      </div>
      <div
        className="relative z-10 p-5 pt-0"
        style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0) 55%, transparent)' }}
      >
        {tag && (
          <div className="mb-2">
            <span
              className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded"
              style={{
                background: accent ? accent + '22' : (il ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0.08)'),
                color: accent ?? (il ? 'rgba(15,23,42,0.45)' : 'rgba(255,255,255,0.38)'),
                border: `1px solid ${accent ? accent + '33' : (il ? 'rgba(0,0,0,0.10)' : 'rgba(255,255,255,0.10)')}`,
              }}
            >
              {tag}
            </span>
          </div>
        )}
        <div className="text-sm font-bold mb-1" style={{ color: il ? '#0f172a' : '#fff' }}>{title}</div>
        <div className="text-xs leading-relaxed" style={{ color: il ? 'rgba(15,23,42,0.50)' : 'rgba(255,255,255,0.38)' }}>{desc}</div>
        <div
          className="mt-3 text-xs font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ color: accent ?? (il ? '#0f172a' : '#fff') }}
        >
          {openBtn}
        </div>
      </div>
    </Link>
  );
};

/* ================================================================ */
/* Card visual metadata (fixed — only layout/accent info)           */
const CARD_META = [
  { bigWord: 'A1',    bigWordColor: 'rgba(99,102,241,0.18)',  accent: '#7124e5', cat: 'A1',          to: '/levels'     },
  { bigWord: '500+',  bigWordColor: 'rgba(139,92,246,0.15)',  accent: '#7124e5', cat: 'Vocabulaire', to: '/vocabulary' },
  { bigWord: 'Quiz',  bigWordColor: 'rgba(234,179,8,0.12)',   accent: '#7124e5', cat: 'Exercices',   to: '/exercises'  },
  { bigWord: 'A2',    bigWordColor: 'rgba(168,85,247,0.18)',  accent: '#7124e5', cat: 'A2',          to: '/levels'     },
  { bigWord: 'der',   bigWordColor: 'rgba(56,189,248,0.12)',  accent: '#7124e5', cat: 'Grammaire',    to: '/grammar'    },
  { bigWord: 'Wort',  bigWordColor: 'rgba(52,211,153,0.12)',  accent: '#7124e5', cat: 'Listes',      to: '/vocabulary' },
  { bigWord: 'XP',    bigWordColor: 'rgba(251,146,60,0.12)',  accent: '#7124e5', cat: 'Tout',        to: '/levels'     },
  { bigWord: 'Hallo', bigWordColor: 'rgba(244,63,94,0.12)',   accent: '#7124e5', cat: 'conversations',          to: '/sprechen'   },
];

/* Internal category keys (FR-indexed) used for filtering */
const CAT_INTERNAL = ['Tout', 'A1', 'A2', 'Grammaire', 'Vocabulaire', 'Exercices', 'Listes'];

const Home = () => {
  const [progress] = useState(() => progressService.getProgress());
  const [activeIdx, setActiveIdx] = useState(0);
  const [animIn, setAnimIn] = useState(false);
  const { t } = useLanguage();
  const { theme } = useTheme();
  const il = theme === 'light';

  useEffect(() => { setTimeout(() => setAnimIn(true), 80); }, []);

  const cats = t?.home?.categories || [
    'Tout', 'A1', 'A2', 'Grammaire', 'Vocabulaire', 'Exercices', 'Listes'
  ];

  const allCards = CARD_META.map((m, i) => ({
    ...m,
    title: t?.home?.cards?.[i]?.title || 
      ['Fanombohana — A1', 'Vocabulaire', 'Exercices Interactifs', 'Mioha — A2', 
       'Grammaire Allemande', 'Listes Thématiques', 'Système de Progression', 'Débuter en Allemand'][i],
    desc: t?.home?.cards?.[i]?.desc ||
      ['6 leçons — salutations, nombres, famille...', '500+ mots par thème', 'Multiple choice, exercices', 
       '5 leçons — travail, ville, météo...', 'Articles, conjugaison, cas', 'Familles, couleurs, métiers',
       'Gagne des XP à chaque leçon', 'Premiers mots, salutations'][i],
    tag: t?.home?.cards?.[i]?.tag ||
      ['A1 · 6 leçons', '500+ mots', 'Interactif', 'A2 · 5 leçons', 
       'Grammaire', 'Listes', 'Gamification', 'A1 · Débutant'][i],
  }));

  const filtered = activeIdx === 0
    ? allCards
    : allCards.filter(c => c.cat === CAT_INTERNAL[activeIdx]);

  return (
    <div style={{ paddingTop: '52px', background: il ? '#f0f2f5' : '#0d0d0d', minHeight: '100vh' }}>

      {/* HERO */}
      <section
        className="relative overflow-hidden flex flex-col items-center justify-center text-center"
        style={{ minHeight: '88vh', background: il ? '#f0f2f5' : '#000000' }}
      >
        {/* LEFT floating tiles */}
        <div className="hidden lg:block">
          <FloatTile bg="#9e10ab" label="Nominativ" size="1.4rem" style={{ left: '7%',  top: '18%' }} delay={0}   />
          <FloatTile bg="#da0909" label="A1"          size="2.2rem" style={{ left: '12%', top: '46%' }} delay={400} />
          <FloatTile bg="#0ab2af" label="Dativ"       size="1.5rem" style={{ left: '16%', top: '80%' }} delay={200} />
          <FloatTile bg="#23c77d" label="B1/B2"       size="1rem"   style={{ left: '7%',  top: '65%' }} delay={800} />
        </div>

        {/* RIGHT floating tiles */}
        <div className="hidden lg:block">
          <FloatTile bg="#0d0dcb" label="Akkusativ"   size="1.6rem" style={{ right: '7%',  top: '18%' }} delay={300} />
          <FloatTile bg="#e9079a" label="A2"          size="2.2rem" style={{ right: '12%', top: '46%' }} delay={600} />
          <FloatTile bg="#aa6805" label="der/die/das"       size="1.1rem" style={{ right: '6%',  top: '65%' }} delay={100} />
          <FloatTile bg="#fb7900" label="Genitiv"     size="1.5rem" style={{ right: '17%', top: '80%' }} delay={500} />
        </div>

        {/* Centered content */}
        <div
          className={`relative z-10 flex flex-col items-center px-6 max-w-2xl mx-auto transition-all duration-700 ${
            animIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Badge pill */}
          <div
            className="flex items-center gap-2 rounded-full px-3 py-1 mb-8 text-[10px] md:px-4 md:py-1.5 md:text-xs font-semibold uppercase tracking-widest"
            style={{
              background: il ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0.08)',
              border: il ? '1px solid rgba(0,0,0,0.13)' : '1px solid rgba(255,255,255,0.15)',
              color: il ? 'rgba(15,23,42,0.60)' : 'rgba(255,255,255,0.6)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shrink-0" />
            <span className="block md:hidden">DEUTSCH · FREE FOR EVERYONE</span>
            <span className="hidden md:block">{t?.home?.badge || 'Learn German — free for everyone'}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-[3.6rem] font-black leading-[1.1] mb-5" style={{ letterSpacing: '-0.03em', color: il ? '#0f172a' : '#fff' }}>
            {t?.home?.h1a || 'Learn German'}<br />
            {t?.home?.h1b || 'free for everyone.'}
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg mb-2" style={{ color: il ? 'rgba(15,23,42,0.55)' : 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.65 }}>
            {t?.home?.subtitle || 'The free platform to learn German — lessons, vocabulary and exercises for all.'}
          </p>
          <p className="text-sm italic mb-10" style={{ color: il ? 'rgba(15,23,42,0.30)' : 'rgba(255,255,255,0.2)' }}>
            {t?.home?.subtitleDe || 'Die kostenlose Deutschlernplattform für alle.'}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/levels"
              className="flex items-center gap-2 text-sm font-semibold px-6 py-2.5 rounded-lg transition-opacity hover:opacity-85"
              style={{ background: '#7124e5', color: '#ffffff' }}
            >
              {t?.home?.cta1 || 'Commencer maintenant'}
            </Link>
            <Link
              to="/vocabulary"
              className="flex items-center gap-2 text-sm font-medium px-6 py-2.5 rounded-lg transition-colors"
              style={{
                background: il ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0.07)',
                border: il ? '1px solid rgba(0,0,0,0.13)' : '1px solid rgba(255,255,255,0.14)',
                color: il ? 'rgba(15,23,42,0.70)' : 'rgba(255,255,255,0.7)',
              }}
            >
              {t?.home?.cta2 || 'Voir le vocabulaire'}
            </Link>
          </div>

          {/* XP display */}
          {progress && progress.stats?.totalXP > 0 && (
            <div
              className="mt-8 flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm"
              style={{
                background: il ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)',
                border: il ? '1px solid rgba(0,0,0,0.10)' : '1px solid rgba(255,255,255,0.10)',
                color: il ? 'rgba(15,23,42,0.55)' : 'rgba(255,255,255,0.5)',
              }}
            >
              <span>⚡</span>
              <span>
                <strong style={{ color: il ? '#0f172a' : '#fff' }}>{progress.stats.totalXP} XP</strong> gagnés au niveau {progress.level || 1}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* ── NOTRE MISSION ── */}
      <section
        style={{
          background: il ? '#ffffff' : '#0a0a0f',
          borderTop: il ? '1px solid rgba(0,0,0,0.07)' : '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="max-w-5xl mx-auto px-6 py-20">

          {/* Section label */}
          <div className="flex justify-center mb-4">
            <span
              className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full"
              style={{
                background: il ? 'rgba(113,36,229,0.08)' : 'rgba(113,36,229,0.15)',
                color: '#7124e5',
                border: '1px solid rgba(113,36,229,0.25)',
              }}
            >
              Notre Mission
            </span>
          </div>

          {/* Main title */}
          <h2
            className="text-3xl sm:text-4xl font-black text-center leading-tight mb-5"
            style={{ color: il ? '#0f172a' : '#ffffff', letterSpacing: '-0.02em' }}
          >
            Apprendre l'allemand,{' '}
            <span style={{ color: '#7124e5' }}>simplement et efficacement.</span>
          </h2>

          {/* Intro paragraph */}
          <p
            className="text-base text-center leading-relaxed max-w-2xl mx-auto mb-14"
            style={{ color: il ? 'rgba(15,23,42,0.55)' : 'rgba(255,255,255,0.45)' }}
          >
            DeutschLearn est né d'une conviction simple : apprendre une langue ne doit pas être compliqué.
            Dans un monde de plus en plus connecté à l'Europe, maîtriser l'allemand ouvre des portes —
            professionnelles, académiques et culturelles. Notre plateforme accompagne chaque apprenant,
            du premier mot jusqu'au niveau A2, avec des contenus clairs, structurés et motivants.
          </p>

          {/* Three objective cards */}
          <div className="grid sm:grid-cols-3 gap-6 mb-14">
            {[
              {
                icon: '🎯',
                color: '#7124e5',
                title: 'Objectifs clairs',
                body: 'Chaque leçon suit une progression pédagogique inspirée des méthodes modernes — du vocabulaire de base aux structures grammaticales du niveau A1–A2.',
              },
              {
                icon: '🗣️',
                color: '#0ab2af',
                title: 'Pratique réelle',
                body: 'Dialogues, exercices d\'écoute, expression écrite et orale : vous pratiquez l\'allemand tel qu\'il est vraiment parlé au quotidien en Allemagne.',
              },
              {
                icon: '🇩🇪',
                color: '#fb923c',
                title: 'Immersion culturelle',
                body: 'Comprendre une langue, c\'est aussi comprendre sa culture. Traditions, cuisine, villes, histoire — la section Kultur enrichit votre apprentissage.',
              },
            ].map(({ icon, color, title, body }) => (
              <div
                key={title}
                className="rounded-2xl p-6"
                style={{
                  background: il ? '#f8fafc' : 'rgba(255,255,255,0.03)',
                  border: il ? '1px solid rgba(0,0,0,0.07)' : '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                >
                  {icon}
                </div>
                <h3
                  className="font-black text-sm mb-2"
                  style={{ color: il ? '#0f172a' : '#fff' }}
                >
                  {title}
                </h3>
                <p
                  className="text-[13px] leading-relaxed"
                  style={{ color: il ? 'rgba(15,23,42,0.55)' : 'rgba(255,255,255,0.45)' }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>

          {/* Values row */}
          <div
            className="rounded-2xl px-8 py-7 mb-14"
            style={{
              background: il ? 'rgba(113,36,229,0.04)' : 'rgba(113,36,229,0.07)',
              border: il ? '1px solid rgba(113,36,229,0.15)' : '1px solid rgba(113,36,229,0.20)',
            }}
          >
            <div
              className="text-[10px] font-black uppercase tracking-widest mb-5"
              style={{ color: '#7124e5' }}
            >
              Nos valeurs
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: '📈', label: 'Progression guidée',  desc: 'Du A1 au A2, étape par étape, sans sauter les bases.' },
                { icon: '💬', label: 'Pratique constante',  desc: 'Exercices variés à chaque leçon pour ancrer les acquis.' },
                { icon: '🌍', label: 'Immersion culturelle', desc: 'La langue et la culture, indissociablement liées.' },
                { icon: '✨', label: 'Clarté & structure',   desc: 'Contenu simple, bien organisé, accessible à tous.' },
              ].map(({ icon, label, desc }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="text-lg shrink-0 mt-0.5">{icon}</span>
                  <div>
                    <div
                      className="text-[12px] font-black mb-0.5"
                      style={{ color: il ? '#0f172a' : '#fff' }}
                    >
                      {label}
                    </div>
                    <div
                      className="text-[11px] leading-relaxed"
                      style={{ color: il ? 'rgba(15,23,42,0.50)' : 'rgba(255,255,255,0.40)' }}
                    >
                      {desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision block */}
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="flex-1">
              <div
                className="text-[10px] font-black uppercase tracking-widest mb-3"
                style={{ color: il ? 'rgba(15,23,42,0.35)' : 'rgba(255,255,255,0.25)' }}
              >
                Notre Vision
              </div>
              <p
                className="text-lg font-black leading-snug mb-3"
                style={{ color: il ? '#0f172a' : '#fff' }}
              >
                "Rendre l'allemand accessible à tous les apprenants du monde."
              </p>
              <p
                className="text-[13px] leading-relaxed"
                style={{ color: il ? 'rgba(15,23,42,0.55)' : 'rgba(255,255,255,0.45)' }}
              >
                Demain, DeutschLearn sera une communauté mondiale d'étudiants
                passionnés par la langue et la culture allemande — un espace interactif,
                vivant et bienveillant, pour apprendre ensemble et progresser plus vite.
              </p>
            </div>
            {/* Stats */}
            <div className="shrink-0 grid grid-cols-2 gap-4">
              {[
                { val: 'A1–A2', label: 'Niveaux couverts' },
                { val: '8',     label: 'Kapitels structurés' },
                { val: '4',     label: 'Compétences (LSRE)' },
                { val: '∞',     label: 'Motivation garantie' },
              ].map(({ val, label }) => (
                <div
                  key={label}
                  className="rounded-2xl px-5 py-4 text-center"
                  style={{
                    background: il ? '#f8fafc' : 'rgba(255,255,255,0.03)',
                    border: il ? '1px solid rgba(0,0,0,0.07)' : '1px solid rgba(255,255,255,0.07)',
                    minWidth: 110,
                  }}
                >
                  <div
                    className="text-2xl font-black mb-1"
                    style={{ color: '#7124e5' }}
                  >
                    {val}
                  </div>
                  <div
                    className="text-[10px] font-medium leading-tight"
                    style={{ color: il ? 'rgba(15,23,42,0.45)' : 'rgba(255,255,255,0.35)' }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* FILTER + CARDS */}
      <section style={{ background: il ? '#f0f2f5' : '#0d0d0d', borderTop: il ? '1px solid rgba(0,0,0,0.07)' : '1px solid rgba(255,255,255,0.07)' }}>

        {/* Sticky chip bar */}
        <div
          className="sticky top-[52px] z-40 flex items-center justify-center gap-2 overflow-x-auto px-6 py-3 no-scrollbar"
          style={{ background: il ? 'rgba(240,242,245,0.97)' : 'rgba(13,13,13,0.96)', borderBottom: il ? '1px solid rgba(0,0,0,0.07)' : '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(10px)' }}
        >
          {cats.map((cat, idx) => (
            <Chip key={cat} label={cat} active={activeIdx === idx} onClick={() => setActiveIdx(idx)} />
          ))}
        </div>

        {/* Card grid */}
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((card) => (
              <ResourceCard key={card.title} {...card} openBtn={t?.home?.openBtn || 'Ouvrir →'} />
            ))}
          </div>
        </div>


      </section>
    </div>
  );
};

export default Home;