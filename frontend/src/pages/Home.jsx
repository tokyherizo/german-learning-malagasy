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
/* Navigation cards — correspond aux items du navbar               */
const NAV_CARDS = [
  {
    bigWord: 'Niv',
    bigWordColor: 'rgba(99,102,241,0.16)',
    accent: '#7124e5',
    to: '/levels',
    title: 'Niveaux',
    desc: '6 Kapitel A1 + 5 Kapitel A2 — progression complète du débutant.',
    tag: 'Niveaux',
  },
  {
    bigWord: 'Talk',
    bigWordColor: 'rgba(10,178,175,0.16)',
    accent: '#0ab2af',
    to: '/community',
    title: 'Communauté',
    desc: 'Échangez, posez des questions et progressez avec d\'autres apprenants.',
    tag: 'Communauté',
  },
  {
    bigWord: 'Jobs',
    bigWordColor: 'rgba(251,146,60,0.16)',
    accent: '#fb923c',
    to: '/opportunities',
    title: 'Opportunités',
    desc: 'Offres d\'emploi, stages et séjours linguistiques en Allemagne.',
    tag: 'Opportunités · 🇩🇪',
  },
  {
    bigWord: 'Skill',
    bigWordColor: 'rgba(99,102,241,0.14)',
    accent: '#6366f1',
    to: '/horen',
    title: 'Compétences',
    desc: 'Hören, Lesen, Schreiben, Sprechen — les 4 aptitudes langagières.',
    tag: 'Compétences',
  },
  {
    bigWord: 'Kunst',
    bigWordColor: 'rgba(168,85,247,0.16)',
    accent: '#a855f7',
    to: '/kultur',
    title: 'Kultur',
    desc: 'Traditions, cuisine, villes et histoire — la culture allemande.',
    tag: 'Kultur',
  },
];

const Home = () => {
  const [progress] = useState(() => progressService.getProgress());
  const [animIn, setAnimIn] = useState(false);
  const { t } = useLanguage();
  const { theme } = useTheme();
  const il = theme === 'light';

  useEffect(() => { setTimeout(() => setAnimIn(true), 80); }, []);

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

      {/* ══════════════════════════════════════════
           NOTRE MISSION — editorial split
         ══════════════════════════════════════════ */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: il ? '#ffffff' : '#000000',
          borderTop: il ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(255,255,255,0.07)',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

            {/* ══ COLONNE GAUCHE ══ */}
            <div className="flex flex-col">

              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-10 w-fit"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(113,36,229,0.35)',
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#a855f7', display: 'inline-block' }} />
                <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: '#8b5cf6' }}>Notre Mission</span>
              </div>

              {/* Titre editorial */}
              <h2
                className="font-black leading-[1.05] tracking-tight mb-8"
                style={{ color: il ? '#0f172a' : '#ffffff', fontSize: 'clamp(1.8rem, 4.5vw, 3rem)' }}
              >
                La langue allemande,{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #7124e5 0%, #a855f7 55%, #812bea 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  à votre portée.
                </span>
              </h2>

              {/* Paragraphe intro */}
              <p
                className="text-base leading-relaxed mb-12"
                style={{ color: il ? 'rgba(15,23,42,0.55)' : 'rgba(255,255,255,0.45)', maxWidth: 440 }}
              >
                Maîtriser l'allemand ouvre des portes professionnelles, académiques et culturelles.
                DeutschLearn vous accompagne du premier mot jusqu'au niveau A2 — structuré, clair, gratuit.
              </p>

              {/* Valeurs — style liste editorial (pas de cards) */}
              <div className="flex flex-col">
                {[
                  { num: '01', label: 'Progression guidée',   desc: 'Du A1 au A2, étape par étape, sans sauter les bases.' },
                  { num: '02', label: 'Pratique constante',    desc: 'Exercices variés à chaque leçon pour ancrer les acquis.' },
                  { num: '03', label: 'Immersion culturelle',  desc: 'Langue et culture, indissociablement liées.' },
                  { num: '04', label: 'Clarté & structure',    desc: 'Contenu simple, bien organisé, accessible à tous.' },
                ].map(({ num, label, desc }, i, arr) => (
                  <div
                    key={label}
                    className="flex items-start gap-5 py-4"
                    style={{
                      borderBottom: i < arr.length - 1
                        ? il ? '1px solid rgba(0,0,0,0.07)' : '1px solid rgba(255,255,255,0.06)'
                        : 'none',
                    }}
                  >
                    <span
                      className="text-[11px] font-black shrink-0 mt-0.5"
                      style={{ color: '#7124e5', fontVariantNumeric: 'tabular-nums', minWidth: 24 }}
                    >
                      {num}
                    </span>
                    <div>
                      <div className="text-[13px] font-black mb-0.5" style={{ color: il ? '#0f172a' : '#fff' }}>{label}</div>
                      <div className="text-[12px] leading-relaxed" style={{ color: il ? 'rgba(15,23,42,0.48)' : 'rgba(255,255,255,0.38)' }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Vision — inline subtle */}
              <div
                className="mt-10 pt-8 flex gap-4 items-start"
                style={{ borderTop: il ? '1px solid rgba(0,0,0,0.07)' : '1px solid rgba(255,255,255,0.07)' }}
              >
                <span className="text-2xl shrink-0">🌍</span>
                <div>
                  <p className="text-sm font-black leading-snug mb-1" style={{ color: il ? '#0f172a' : '#fff' }}>
                    "Rendre l'allemand accessible à tous."
                  </p>
                  <p className="text-[12px] leading-relaxed" style={{ color: il ? 'rgba(15,23,42,0.45)' : 'rgba(255,255,255,0.35)' }}>
                    Une communauté mondiale et bienveillante pour apprendre ensemble.
                  </p>
                </div>
              </div>
            </div>

            {/* ══ COLONNE DROITE ══ */}
            <div className="flex flex-col gap-5 lg:pt-16">

              {/* Feature principale — grande, sobre */}
              <div
                className="rounded-2xl p-8"
                style={{
                  background: il
                    ? 'linear-gradient(145deg, #faf5ff 0%, #f0f9ff 100%)'
                    : 'linear-gradient(145deg, rgba(113,36,229,0.10) 0%, rgba(10,178,175,0.06) 100%)',
                  border: il ? '1px solid rgba(113,36,229,0.13)' : '1px solid rgba(113,36,229,0.22)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Accent orb */}
                <div style={{ position: 'absolute', width: 180, height: 180, borderRadius: '50%', background: 'radial-gradient(circle, rgba(113,36,229,0.08) 0%, transparent 70%)', top: -60, right: -40, pointerEvents: 'none' }} />

                {/* Top row */}
                <div className="flex items-center justify-between mb-7" style={{ position: 'relative' }}>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                      style={{ background: 'rgba(113,36,229,0.12)', border: '1px solid rgba(113,36,229,0.20)' }}
                    >
                      🇩🇪
                    </div>
                    <div>
                      <div className="text-[9px] font-black uppercase tracking-widest" style={{ color: '#8b5cf6' }}>DeutschLearn</div>
                      <div className="text-[11px] font-bold" style={{ color: il ? 'rgba(15,23,42,0.45)' : 'rgba(255,255,255,0.35)' }}>Apprendre · Progresser</div>
                    </div>
                  </div>
                  <div className="text-[10px] font-black px-2.5 py-1 rounded-full" style={{ background: 'rgba(10,178,175,0.10)', color: '#0ab2af', border: '1px solid rgba(10,178,175,0.22)' }}>
                    Gratuit
                  </div>
                </div>

                {/* Headline */}
                <h3
                  className="font-black leading-[1.1] mb-4"
                  style={{ color: il ? '#0f172a' : '#fff', fontSize: 'clamp(1.2rem, 2.2vw, 1.55rem)', position: 'relative' }}
                >
                  Apprendre l'allemand.{' '}
                  <span style={{ background: 'linear-gradient(135deg, #9249ff 0%, #8f4af8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Progresser ensemble.
                  </span>
                </h3>

                <p className="text-[13px] leading-relaxed mb-7" style={{ color: il ? 'rgba(15,23,42,0.52)' : 'rgba(255,255,255,0.42)', position: 'relative' }}>
                  Une plateforme construite pour tous — du A1 débutant au A2 confirmé. Chaque leçon, chaque exercice, chaque mot vous rapproche de la fluidité.
                </p>

                {/* Inline stats row */}
                <div
                  className="flex items-center gap-6 mb-7 pt-5"
                  style={{ borderTop: il ? '1px solid rgba(113,36,229,0.09)' : '1px solid rgba(255,255,255,0.07)', position: 'relative' }}
                >
                  {[
                    { val: 'A1–A2', lbl: 'Niveaux' },
                    { val: '8',     lbl: 'Kapitel'  },
                    { val: '100%',  lbl: 'Gratuit'  },
                  ].map(({ val, lbl }) => (
                    <div key={lbl}>
                      <div className="font-black text-[15px] leading-none mb-0.5" style={{ color: il ? '#0f172a' : '#fff' }}>{val}</div>
                      <div className="text-[10px]" style={{ color: il ? 'rgba(15,23,42,0.42)' : 'rgba(255,255,255,0.35)' }}>{lbl}</div>
                    </div>
                  ))}
                </div>

                {/* CTA link */}
                <Link
                  to="/levels"
                  className="inline-flex items-center gap-2 text-[12px] font-black px-4 py-2 rounded-xl"
                  style={{ background: 'rgba(113,36,229,0.10)', color: '#7124e5', border: '1px solid rgba(113,36,229,0.20)', position: 'relative' }}
                >
                  Commencer le parcours <span>→</span>
                </Link>
              </div>

              {/* 2 cards côte à côte — sobres */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: '🗣️',
                    accent: '#0ab2af',
                    label: 'Pratique réelle',
                    body: "Dialogues et exercices oraux — l'allemand du quotidien.",
                  },
                  {
                    icon: '🇩🇪',
                    accent: '#fb923c',
                    label: 'Kultur',
                    body: 'Traditions, cuisine et villes : la culture au cœur de l\'apprentissage.',
                  },
                ].map(({ icon, accent, label, body }) => (
                  <div
                    key={label}
                    className="rounded-2xl p-5 flex flex-col"
                    style={{
                      background: il ? '#fafafa' : 'rgba(255,255,255,0.03)',
                      border: il ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    <span className="text-2xl mb-4">{icon}</span>
                    <div className="text-[12px] font-black mb-1.5" style={{ color: il ? '#0f172a' : '#fff' }}>{label}</div>
                    <p className="text-[11px] leading-relaxed flex-1" style={{ color: il ? 'rgba(15,23,42,0.50)' : 'rgba(255,255,255,0.40)' }}>{body}</p>
                    <div className="mt-4 text-[11px] font-bold" style={{ color: accent }}>Découvrir →</div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* NAV CARDS */}
      <section style={{ background: il ? '#f0f2f5' : '#0d0d0d', borderTop: il ? '1px solid rgba(0,0,0,0.07)' : '1px solid rgba(255,255,255,0.07)' }}>
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-2">
          <h2
            className="font-black leading-tight tracking-tight mb-1"
            style={{ color: il ? '#0f172a' : '#fff', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}
          >
            Explorer la plateforme
          </h2>
          <p className="text-[13px] mb-8" style={{ color: il ? 'rgba(15,23,42,0.48)' : 'rgba(255,255,255,0.38)' }}>
            Tout ce dont vous avez besoin pour apprendre l'allemand — en un seul endroit.
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-6 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {NAV_CARDS.map((card) => (
              <ResourceCard key={card.title} {...card} openBtn="Ouvrir →" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;