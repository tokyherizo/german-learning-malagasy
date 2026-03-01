import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { progressService } from '../services/progress';

/* â”€â”€â”€ Floating word tile â€” big bold German word â”€â”€â”€ */
const FloatTile = ({ bg, label, style, delay = 0, size = '1rem' }) => (
  <div
    className="absolute rounded-2xl flex items-center justify-center font-black select-none animate-float tracking-tight"
    style={{
      background: bg,
      boxShadow: '0 12px 40px rgba(69, 64, 60, 0.96)',
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

/* â”€â”€â”€ Category chip â”€â”€â”€ */
const Chip = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className="shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-150"
    style={{
      background: active ? '#fff' : 'rgba(255,255,255,0.06)',
      color: active ? '#0d0d0d' : 'rgba(255,255,255,0.55)',
      border: active ? '1px solid #fff' : '1px solid rgba(255,255,255,0.12)',
    }}
  >
    {label}
  </button>
);

/* â”€â”€â”€ Resource card â€” big decorative word + meta â”€â”€â”€ */
const ResourceCard = ({ bigWord, bigWordColor, title, desc, tag, to, accent }) => (
  <Link
    to={to}
    className="group relative flex flex-col justify-end overflow-hidden rounded-2xl transition-all duration-200"
    style={{
      background: '#111',
      border: '1px solid rgba(255,255,255,0.07)',
      minHeight: 200,
    }}
    onMouseEnter={e => {
      e.currentTarget.style.border = '1px solid rgba(255,255,255,0.20)';
      e.currentTarget.style.transform = 'translateY(-3px)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.border = '1px solid rgba(255,255,255,0.07)';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
  >
    {/* Big decorative background word */}
    <div
      className="absolute top-0 left-0 w-full flex items-start px-5 pt-5 pointer-events-none select-none"
      style={{
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
    {/* Bottom content */}
    <div
      className="relative z-10 p-5 pt-0"
      style={{
        background: 'linear-gradient(to top, rgba(125, 125, 125, 0.04) 55%, transparent)',
      }}
    >
      {tag && (
        <div className="mb-2">
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded"
            style={{ background: accent ? accent + '22' : 'rgba(255,255,255,0.08)', color: accent ?? 'rgba(255,255,255,0.38)', border: `1px solid ${accent ? accent + '33' : 'rgba(255,255,255,0.10)'}` }}
          >
            {tag}
          </span>
        </div>
      )}
      <div className="text-sm font-bold text-white mb-1">{title}</div>
      <div className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.38)' }}>{desc}</div>
      <div className="mt-3 text-xs font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: accent ?? '#fff' }}>
        Ouvrir â†’
      </div>
    </div>
  </Link>
);

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const categories = ['Tout', 'A1', 'A2', 'Grammaire', 'Vocabulaire', 'Exercices', 'Listes'];

const allCards = [
  { bigWord: 'A1',       bigWordColor: 'rgba(99,102,241,0.18)',  accent: '#818cf8', title: 'Fanombohana â€” A1',          desc: '6 lesona â€” miarahaba, isa, fianakaviana, loko...',         tag: 'A1 Â· 6 lesona',  cat: 'A1',          to: '/levels'     },
  { bigWord: '500+',     bigWordColor: 'rgba(139,92,246,0.15)',  accent: '#a78bfa', title: 'Vocabulaire Complet',        desc: 'Teny 500+ groupÃ©s par thÃ¨me â€” corps, sakafo, asa...',       tag: '500+ mots',      cat: 'Vocabulaire', to: '/vocabulary' },
  { bigWord: 'Quiz',     bigWordColor: 'rgba(234,179,8,0.12)',   accent: '#fbbf24', title: 'Exercices Interactifs',      desc: 'Multiple choice, fenoy banga â€” mampianatra amin\'ny fomba mahafinaritra.', tag: 'Interactif', cat: 'Exercices',   to: '/exercises'  },
  { bigWord: 'A2',       bigWordColor: 'rgba(168,85,247,0.18)',  accent: '#c084fc', title: 'Mioha â€” A2',                 desc: '5 lesona â€” asa, tanÃ na, toetr\'andro, fahasalamana...',    tag: 'A2 Â· 5 lesona',  cat: 'A2',          to: '/levels'     },
  { bigWord: 'der',      bigWordColor: 'rgba(56,189,248,0.12)',  accent: '#38bdf8', title: 'Grammaire Allemande',         desc: 'der / die / das â€” articles, conjugaison, cas expliquÃ©s simplement.', tag: 'Grammaire',   cat: 'Grammaire',   to: '/levels'     },
  { bigWord: 'Wort',     bigWordColor: 'rgba(52,211,153,0.12)',  accent: '#34d399', title: 'Listes ThÃ©matiques',          desc: 'Familles, couleurs, mÃ©tiers, corps humain â€” teny 500+.',   tag: 'Listes',         cat: 'Listes',      to: '/vocabulary' },
  { bigWord: 'XP',       bigWordColor: 'rgba(251,146,60,0.12)',  accent: '#fb923c', title: 'SystÃ¨me de Progression',     desc: 'Gagne des XP Ã  chaque leÃ§on, monte de niveau.',            tag: 'Gamification',   cat: 'Tout',        to: '/levels'     },
  { bigWord: 'Hallo',    bigWordColor: 'rgba(244,63,94,0.12)',   accent: '#fb7185', title: 'DÃ©buter en Allemand',        desc: 'Premiers mots, salutations, chiffres â€” parfait pour dÃ©marrer.', tag: 'A1 Â· DÃ©butant', cat: 'A1',        to: '/levels'     },
];

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const Home = () => {
  const [progress] = useState(() => progressService.getProgress());
  const [activeChip, setActiveChip] = useState('Tout');
  const [animIn, setAnimIn] = useState(false);

  useEffect(() => { setTimeout(() => setAnimIn(true), 80); }, []);

  const filtered = activeChip === 'Tout'
    ? allCards
    : allCards.filter(c => c.cat === activeChip);

  return (
    <div style={{ paddingTop: '52px' }}>

      {/* â•â•â• HERO â•â•â• */}
      <section
        className="relative overflow-hidden flex flex-col items-center justify-center text-center"
        style={{ minHeight: '88vh', background: '#0d0d0d' }}
      >
        {/* â”€â”€ Floating word tiles LEFT â”€â”€ */}
        <div className="hidden lg:block">
          <FloatTile bg="#9e10ab" label="der/die/das" size="1.4rem" style={{ left: '7%',  top: '18%' }} delay={0}   />
          <FloatTile bg="#da0909" label="A1"         size="2.2rem" style={{ left: '12%',  top: '46%' }} delay={400} />
          
         
          <FloatTile bg="#0ab2af" label="Dativ" size="1.5rem" style={{ left: '16%', top: '80%' }} delay={200} />
        <FloatTile bg="#23c77d" label="B1/B2" size="1rem" style={{ left: '7%',  top: '65%' }} delay={800} />
        </div>

        {/* â”€â”€ Floating word tiles RIGHT â”€â”€ */}
        <div className="hidden lg:block">
          <FloatTile bg="#0d0dcb" label="Akkusativ"    size="1.6rem" style={{ right: '7%',  top: '18%' }} delay={300} />
          <FloatTile bg="#e9079a" label="A2"          size="2.2rem" style={{ right: '12%',  top: '46%' }} delay={600} />
          <FloatTile bg="#aa6805" label="C1/C2"  size="1.1rem" style={{ right: '6%',  top: '65%' }} delay={100} />
          <FloatTile bg="#fb7900" label="Genitiv"        size="1.5rem" style={{ right: '17%', top: '80%' }} delay={500} />
        </div>

        {/* â”€â”€ Centered content â”€â”€ */}
        <div
          className={`relative z-10 flex flex-col items-center px-6 max-w-2xl mx-auto transition-all duration-700 ${animIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Badge pill */}
          <div
            className="flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 text-xs font-semibold uppercase tracking-widest"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.6)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Plateforme d'apprentissage de l'allemand pour les Malagasy
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-[3.6rem] font-black text-white leading-[1.1] mb-5" style={{ letterSpacing: '-0.03em' }}>
            Apprenez l'Allemand<br />en Malagasy.
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg mb-2" style={{ color: 'rgba(255,255,255,0.45)', maxWidth: 480, lineHeight: 1.65 }}>
            La plateforme gratuite pour Malgaches qui apprennent l'allemand â€” leÃ§ons, vocabulaire et exercices.
          </p>
          <p className="text-sm italic mb-10" style={{ color: 'rgba(255,255,255,0.2)' }}>
            Die kostenlose Lernplattform fÃ¼r Madagassen.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/levels"
              className="flex items-center gap-2 text-sm font-semibold px-6 py-2.5 rounded-lg transition-opacity hover:opacity-85"
              style={{ background: '#7124e5', color: '#ffffff' }}
            >
              Commencer maintenant 
            </Link>
            <Link
              to="/vocabulary"
              className="flex items-center gap-2 text-sm font-medium px-6 py-2.5 rounded-lg transition-colors"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.14)', color: 'rgba(255,255,255,0.7)' }}
            >
              Voir le vocabulaire
            </Link>
          </div>

          {/* Social proof */}
          {progress && progress.stats?.totalXP > 0 && (
            <div
              className="mt-8 flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)', color: 'rgba(255,255,255,0.5)' }}
            >
              <span>âš¡</span>
              <span><strong style={{ color: '#fff' }}>{progress.stats.totalXP} XP</strong> gagnes a niveau {progress.level}</span>
            </div>
          )}
        </div>
      </section>

      {/* â•â•â• FILTER + CARDS â•â•â• */}
      <section style={{ background: '#0d0d0d', borderTop: '1px solid rgba(255,255,255,0.07)' }}>

        {/* â”€â”€ Sticky chip bar â”€â”€ */}
        <div
          className="sticky top-[52px] z-40 flex items-center gap-2 overflow-x-auto px-6 py-3 no-scrollbar"
          style={{ background: 'rgba(13,13,13,0.96)', borderBottom: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(10px)' }}
        >
          {categories.map(cat => (
            <Chip
              key={cat}
              label={cat}
              active={activeChip === cat}
              onClick={() => setActiveChip(cat)}
            />
          ))}
        </div>

        {/* â”€â”€ Card grid â”€â”€ */}
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((card) => (
              <ResourceCard key={card.title} {...card} />
            ))}

          </div>
        </div>

        {/* â”€â”€ Footer strip â”€â”€ */}
        <div
          className="max-w-6xl mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-black" style={{ background: '#fff', color: '#0d0d0d' }}>DE</div>
            <span className="text-sm font-semibold text-white">DeutschMG</span>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>â€” Malagasy Ã— AlemÃ ðŸ‡²ðŸ‡¬ ðŸ‡©ðŸ‡ª</span>
          </div>
          <div className="flex items-center gap-4 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            <Link to="/levels" className="hover:text-white transition-colors">Lesona</Link>
            <Link to="/vocabulary" className="hover:text-white transition-colors">Vocabulaire</Link>
            <Link to="/exercises" className="hover:text-white transition-colors">Exercices</Link>
            <Link to="/profile" className="hover:text-white transition-colors">Profil</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

