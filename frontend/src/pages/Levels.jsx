import { useState, useCallback, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getLessonsByLevel } from '../data/lessons';
import { exercises as EX_DATA } from '../data/exercises';
import { vocabulary as VOCAB_DATA } from '../data/vocabulary';
import { A1_MODULES } from '../data/a1modules';
import { progressService } from '../services/progress';
import ProgressBar from '../components/ProgressBar';
import { useTheme } from '../context/ThemeContext';

/* ─────────────────────────────────────────────
  LEVEL CONFIG — A1 unlocked, A2–C2 locked
───────────────────────────────────────────── */
const ALL_LEVELS = [
  {
    id: 'A1', label: 'A1', name: 'Débutant', nameDe: 'Anfänger',
    desc: 'Niveau A1 — 8 Kapitel : salutations, travail, Munich, nourriture, quotidien, voyages, logement, événements',
    descDe: 'Niveau A1 — 8 Kapitel: Begrüßungen, Arbeit, München, Essen, Alltag, Reisen, Wohnen, Ereignisse',
    accent: '#818cf8', accentBg: 'rgba(129, 141, 248, 0.21)', accentBorder: 'rgba(129,140,248,0.25)',
    unlocked: true, color: 'indigo',
  },
  {
    id: 'A2', label: 'A2', name: 'Élémentaire', nameDe: 'Grundkenntnisse',
    desc: 'Travail, météo, directions, école, santé, grammaire avancée',
    descDe: 'Arbeit, Wetter, Richtungen, Schule, Gesundheit, Grammatik',
    accent: '#13f1db', accentBg: 'rgba(17, 210, 240, 0.17)', accentBorder: 'rgba(167,139,250,0.25)',
    unlocked: false, color: 'violet',
  },
  {
    id: 'B1', label: 'B1', name: 'Intermédiaire', nameDe: 'Mittelstufe',
    desc: 'Opinions, récits, actualités, conversations complexes',
    accent: '#d034d3', accentBg: 'rgba(211, 52, 192, 0.17)', accentBorder: 'rgba(52,211,153,0.22)',
    unlocked: false, color: 'emerald',
  },
  {
    id: 'B2', label: 'B2', name: 'Avancé', nameDe: 'Oberstufe',
    desc: 'Débats, textes littéraires, nuances culturelles',
    accent: '#f59e0b', accentBg: 'rgba(245, 159, 11, 0.19)', accentBorder: 'rgba(245,158,11,0.22)',
    unlocked: false, color: 'amber',
  },
  {
    id: 'C1', label: 'C1', name: 'Supérieur', nameDe: 'Fortgeschritten',
    desc: 'Langue académique, textes spécialisés, maîtrise grammaticale',
    accent: '#3416f9', accentBg: 'rgba(22, 22, 249, 0.2)', accentBorder: 'rgba(249,115,22,0.22)',
    unlocked: false, color: 'orange',
  },
  {
    id: 'C2', label: 'C2', name: 'Maîtrise', nameDe: 'Meisterschaft',
    desc: 'Niveau natif — littérature, humour, expressions idiomatiques',
    accent: '#ff2525', accentBg: 'rgba(254, 10, 10, 0.2)', accentBorder: 'rgba(244,63,94,0.22)',
    unlocked: false, color: 'rose',
  },
];

/* ─────────────────────────────────────────────
   SKILL TABS — 9 learning skills per level
───────────────────────────────────────────── */
const SKILL_TABS = [
  { id: 'lessons',   label: 'Leçons',    labelDe: 'Lektionen',   sym: 'L',  color: '#818cf8' },
  { id: 'grammar',   label: 'Grammaire', labelDe: 'Grammatik',   sym: '∑',  color: '#a78bfa' },
 // { id: 'reading',   label: 'Lesen',     labelDe: 'Lesen',       sym: 'R',  color: '#34d399' },
 // { id: 'exercises', label: 'Exercices', labelDe: 'Übungen',     sym: '✓',  color: '#60a5fa' },
 // { id: 'games',     label: 'Jeux',      labelDe: 'Spiele',      sym: 'G',  color: '#f59e0b' },
 // { id: 'writing',   label: 'Schreiben', labelDe: 'Schreiben',   sym: 'W',  color: '#f472b6' },
 // { id: 'listening', label: 'Hören',     labelDe: 'Hören',       sym: 'H',  color: '#22d3ee' },
// { id: 'speaking',  label: 'Sprechen',  labelDe: 'Sprechen',    sym: 'S',  color: '#fb923c' },
 // { id: 'ai',        label: 'Parler IA', labelDe: 'KI Gespräch', sym: 'AI', color: '#c084fc' },
];

/* ─────────────────────────────────────────────
   SCHREIBEN DATA — writing/translation prompts
───────────────────────────────────────────── */
const SCHREIBEN_DATA = {
  A1: [
    { en: 'My name is Maria.', de: 'Ich heiße Maria.', hint: 'Ich heiße... / Mein Name ist...' },
    { en: 'I come from Germany.', de: 'Ich komme aus Deutschland.', hint: 'Ich komme aus...' },
    { en: 'How old are you?', de: 'Wie alt bist du?', hint: 'Wie alt... bist du?' },
    { en: 'I am 25 years old.', de: 'Ich bin 25 Jahre alt.', hint: 'Ich bin ... Jahre alt.' },
    { en: 'Do you speak German?', de: 'Sprechen Sie Deutsch?', hint: 'Sprechen Sie...?' },
    { en: 'Where is the train station?', de: 'Wo ist der Bahnhof?', hint: 'Wo ist der/die/das...?' },
    { en: 'I would like a coffee, please.', de: 'Ich möchte einen Kaffee, bitte.', hint: 'Ich möchte ... bitte.' },
    { en: 'The book is on the table.', de: 'Das Buch liegt auf dem Tisch.', hint: 'liegt auf dem...' },
    { en: 'Good morning! How are you?', de: 'Guten Morgen! Wie geht es Ihnen?', hint: 'Guten Morgen / Wie geht...' },
    { en: 'I have a brother and a sister.', de: 'Ich habe einen Bruder und eine Schwester.', hint: 'Ich habe einen... und eine...' },
    // Kapitel 4 — Essen und Trinken
    { en: 'I would like a coffee, please.', de: 'Ich möchte einen Kaffee, bitte.', hint: 'Ich möchte einen/eine/ein... bitte.' },
    { en: 'The bread roll is with butter and jam.', de: 'Das Brötchen ist mit Butter und Marmelade.', hint: 'Das Brötchen ist mit...' },
    { en: 'I eat chicken with potato salad.', de: 'Ich esse Hähnchen mit Kartoffelsalat.', hint: 'Ich esse... mit...' },
    { en: 'Can I have the menu, please?', de: 'Kann ich die Speisekarte haben, bitte?', hint: 'Kann ich... haben?' },
    { en: 'I take the Schnitzel with fries.', de: 'Ich nehme das Schnitzel mit Pommes.', hint: 'Ich nehme das/die/den... mit...' },
    { en: 'The bill, please!', de: 'Die Rechnung, bitte!', hint: 'Die Rechnung...' },
    { en: 'The soup is delicious!', de: 'Die Suppe ist lecker!', hint: '... ist lecker!' },
    { en: 'Do you know him? He is the waiter.', de: 'Kennst du ihn? Er ist der Kellner.', hint: 'Kennst du ihn/sie/es?' },
    { en: 'I don\'t eat meat.', de: 'Ich esse kein Fleisch.', hint: 'Ich esse kein/keine...' },
    { en: 'Keep the change!', de: 'Stimmt so!', hint: 'Stimmt...' },
  ],
  A2: [
    { en: 'I have been learning German for two years.', de: 'Ich lerne seit zwei Jahren Deutsch.', hint: 'seit... Jahren' },
    { en: 'I stay home because it is raining.', de: 'Ich bleibe zu Hause, weil es regnet.', hint: 'weil → Verb at END' },
    { en: 'He gives the book to the man.', de: 'Er gibt dem Mann das Buch.', hint: 'gibt + Dativ (dem Mann)' },
    { en: 'Can you help me, please?', de: 'Können Sie mir bitte helfen?', hint: 'Können Sie... helfen?' },
    { en: 'I would like to travel to Berlin.', de: 'Ich möchte nach Berlin fahren.', hint: 'Ich möchte... fahren' },
    { en: 'The restaurant is opposite the town hall.', de: 'Das Restaurant ist gegenüber dem Rathaus.', hint: 'gegenüber + Dativ' },
    { en: 'I believe that he is coming tomorrow.', de: 'Ich glaube, dass er morgen kommt.', hint: 'dass → Verb at END' },
    { en: 'Although it is cold, I go for a walk.', de: 'Obwohl es kalt ist, gehe ich spazieren.', hint: 'Obwohl → Verb at END' },
    { en: 'Do you like Berlin?', de: 'Gefällt dir Berlin?', hint: 'gefallen + Dativ (mir/dir)' },
    { en: 'I am reliable and I learn quickly.', de: 'Ich bin zuverlässig und ich lerne schnell.', hint: 'und = no word order change' },
  ],
};

/* ─────────────────────────────────────────────
   LESSON CARD — shared by lessons/grammar/reading tabs
───────────────────────────────────────────── */
const TYPE_META = {
  grammar: { label: 'GRAMMAIRE', bg: 'rgba(167,139,250,0.18)', color: '#a78bfa', sym: '∑' },
  story:   { label: 'LECTURE',   bg: 'rgba(52,211,153,0.15)',  color: '#34d399', sym: 'R' },
};

const LessonCard = ({ lesson, isCompleted, level }) => {
  const tm = lesson.type ? TYPE_META[lesson.type] : null;
  const bbg = isCompleted ? 'rgba(74,222,128,0.10)' : (tm ? tm.bg : level.accentBg);
  const bbd = isCompleted ? 'rgba(74,222,128,0.25)'  : (tm ? 'transparent' : level.accentBorder);
  const bcl = isCompleted ? '#4ade80' : (tm ? tm.color : level.accent);
  return (
    <Link
      to={`/lesson/${lesson.id}`}
      className={`group flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 card-hover ${
        isCompleted
          ? 'bg-white/[0.03] border-green-500/20 hover:border-green-400/30'
          : 'bg-white/[0.02] border-white/6 hover:border-white/[0.15] hover:bg-white/[0.04]'
      }`}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm shrink-0 group-hover:scale-105 transition-transform"
        style={{ background: bbg, border: `1px solid ${bbd}`, color: bcl }}
      >
        {isCompleted ? '✓' : (tm ? tm.sym : lesson.number)}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex gap-2 items-center mb-0.5">
          {tm ? (
            <span className="text-[9px] font-extrabold tracking-widest px-1.5 py-0.5 rounded" style={{ background: tm.bg, color: tm.color }}>{tm.label}</span>
          ) : (
            <span className="text-[10px] font-semibold tracking-widest text-white/30 uppercase">Leçon {lesson.number}</span>
          )}
        </div>
        <h4 className="font-bold text-white text-sm leading-snug">{lesson.title}</h4>
        <p className="text-[11px] text-white/35 mt-0.5">{lesson.subtitle}</p>
      </div>
      <div className="flex flex-col items-end gap-1 shrink-0">
        <span className="text-[11px] font-bold px-2 py-0.5 rounded-full" style={{ color: level.accent, background: level.accentBg }}>+{lesson.xp} XP</span>
        <span className="text-[10px] text-white/25">{lesson.duration}</span>
      </div>
      <span className="text-white/20 group-hover:text-white/50 text-sm transition-colors">→</span>
    </Link>
  );
};

/* ─────────────────────────────────────────────
   TEIL CONFIG
───────────────────────────────────────────── */
const TEIL_CFG = {
  A: { color: '#60a5fa', bg: 'rgba(96,165,250,0.10)',  border: 'rgba(96,165,250,0.22)',  glow: 'rgba(96,165,250,0.06)',  icon: '💬', label: 'Communication'        },
  B: { color: '#34d399', bg: 'rgba(52,211,153,0.10)',  border: 'rgba(52,211,153,0.22)',  glow: 'rgba(52,211,153,0.06)',  icon: '🌍', label: 'Culture & Civilisation' },
  C: { color: '#a78bfa', bg: 'rgba(167,139,250,0.10)', border: 'rgba(167,139,250,0.22)', glow: 'rgba(167,139,250,0.06)', icon: '∑',  label: 'Grammaire'              },
  D: { color: '#f472b6', bg: 'rgba(244,114,182,0.10)', border: 'rgba(244,114,182,0.22)', glow: 'rgba(244,114,182,0.06)', icon: '✦',  label: 'Révision & Test'        },
};

/* ─────────────────────────────────────────────
   TOPIC ROW — lesson card or placeholder
───────────────────────────────────────────── */
const TopicRow = ({ topicObj, lesson, isCompleted, tCfg, index }) => {
  const xp       = lesson?.xp       || topicObj.xp;
  const duration = lesson?.duration  || topicObj.duration;
  const title    = lesson?.title     || topicObj.title;
  const desc     = lesson?.subtitle  || topicObj.desc;
  const icon     = topicObj.icon;

  if (lesson) {
    return (
      <Link
        to={`/lesson/${lesson.id}`}
        className="group flex items-start gap-3 px-3.5 py-3 rounded-xl border transition-all duration-200"
        style={{
          background: isCompleted ? 'rgba(74,222,128,0.05)' : tCfg.glow,
          borderColor: isCompleted ? 'rgba(74,222,128,0.20)' : tCfg.border,
        }}
      >
        {/* Index badge */}
        <div className="mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-black shrink-0 transition-transform group-hover:scale-105"
          style={{ background: isCompleted ? 'rgba(74,222,128,0.12)' : tCfg.bg, color: isCompleted ? '#4ade80' : tCfg.color, border: `1px solid ${isCompleted ? 'rgba(74,222,128,0.30)' : tCfg.border}` }}>
          {isCompleted ? '✓' : index + 1}
        </div>
        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            {icon && <span className="text-sm">{icon}</span>}
            <span className="font-semibold text-white/90 text-sm leading-tight group-hover:text-white transition-colors">{title}</span>
          </div>
          {desc && <div className="text-[11px] text-white/40 leading-relaxed mb-1.5">{desc}</div>}
          <div className="flex items-center gap-2">
            {xp       && <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full" style={{ color: tCfg.color, background: tCfg.bg }}>+{xp} XP</span>}
            {duration && <span className="text-[10px] text-white/25">⏱ {duration}</span>}
          </div>
        </div>
        <span className="text-white/20 group-hover:text-white/60 text-xs transition-colors mt-1 shrink-0">→</span>
      </Link>
    );
  }

  return (
    <div className="flex items-start gap-3 px-3.5 py-3 rounded-xl border"
      style={{ background: tCfg.glow, borderColor: 'rgba(255,255,255,0.06)' }}>
      {/* Index badge */}
      <div className="mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-black shrink-0 opacity-35"
        style={{ background: tCfg.bg, color: tCfg.color, border: `1px solid ${tCfg.border}` }}>
        {index + 1}
      </div>
      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 mb-0.5">
          {icon && <span className="text-sm">{icon}</span>}
          <span className="font-semibold text-white/55 text-sm leading-tight">{title}</span>
        </div>
        {desc && <div className="text-[11px] text-white/30 leading-relaxed mb-1.5">{desc}</div>}
        <div className="flex items-center gap-2">
          {xp       && <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full" style={{ color: `${tCfg.color}60`, background: `${tCfg.bg}80` }}>+{xp} XP</span>}
          {duration && <span className="text-[10px] text-white/20">⏱ {duration}</span>}
        </div>
      </div>
      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full shrink-0 mt-1"
        style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.07)' }}>
        Bientôt
      </span>
    </div>
  );
};

/* ─────────────────────────────────────────────
   A1 KAPITEL GRID — cards with click-to-expand
───────────────────────────────────────────── */
const A1KapitelGrid = ({ modules, lessonsById, progress }) => {
  const { theme } = useTheme();
  const il = theme === 'light';
  const [searchParams, setSearchParams] = useSearchParams();

  // Persist open Kapitel IDs in the URL so browser back restores the expanded state
  const openSet = new Set(searchParams.get('kapitel')?.split(',').filter(Boolean) ?? []);

  const toggle = (id) => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      const current = new Set(next.get('kapitel')?.split(',').filter(Boolean) ?? []);
      current.has(id) ? current.delete(id) : current.add(id);
      if (current.size > 0) next.set('kapitel', [...current].join(','));
      else next.delete('kapitel');
      return next;
    }, { replace: true });
  };

  return (
    <div>
      {/* ── Header banner ── */}
      <div className="flex items-center justify-between mb-6 px-4 py-3 rounded-2xl"
        style={{ background: il ? 'rgba(129,140,248,0.10)' : 'rgba(129,140,248,0.07)', border: '1px solid rgba(129,140,248,0.25)' }}>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-base"
            style={{ background: 'rgba(129,140,248,0.15)', color: '#818cf8', border: '1px solid rgba(129,140,248,0.30)' }}>
            A1
          </div>
          <div>
            <div className="font-black text-sm" style={{ color: il ? '#0f172a' : '#fff' }}>Niveau A1</div>
            <div className="text-[11px]" style={{ color: il ? 'rgba(15,23,42,0.45)' : 'rgba(255,255,255,0.35)' }}>{modules.length} Kapitel · Schubert Verlag · Teil A/B/C/D</div>
          </div>
        </div>
        <div className="flex gap-1.5">
          {Object.entries(TEIL_CFG).map(([k, v]) => (
            <div key={k} className="flex flex-col items-center gap-0.5">
              <div className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-black"
                style={{ background: v.bg, color: v.color, border: `1px solid ${v.border}` }}>
                {k}
              </div>
              <span className="text-[8px] text-white/20 hidden sm:block font-medium">{v.label.split(' ')[0]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Kapitel card grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {modules.map((mod) => {
          const completedCount = mod.lessons.filter(id => progress.completedLessons.includes(id)).length;
          const totalCount     = mod.lessons.length;
          const pct            = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
          const isOpen         = openSet.has(mod.id);

          return (
            <div key={mod.id}
              className={`rounded-2xl overflow-hidden flex flex-col transition-all duration-300 ${isOpen ? 'md:col-span-2' : ''}`}
              style={{
                border: `1.5px solid ${isOpen ? mod.color + '55' : mod.color + '30'}`,
                background: il
                  ? (isOpen ? `#ffffff` : `#f8f9ff`)
                  : `linear-gradient(135deg, ${mod.color}0a 0%, rgba(10,10,20,0.97) 100%)`,
                boxShadow: isOpen
                  ? (il ? `0 8px 32px ${mod.color}28` : `0 8px 32px ${mod.color}22`)
                  : (il ? `0 2px 12px ${mod.color}14` : `0 4px 16px ${mod.color}0e`),
              }}>

              {/* ── Colored top accent bar ── */}
              <div className="h-1 w-full shrink-0" style={{ background: `linear-gradient(90deg, ${mod.color}, ${mod.color}40, transparent)` }} />

              {/* ── Clickable card summary ── */}
              <button
                onClick={() => toggle(mod.id)}
                className="w-full text-left flex items-center gap-4 px-5 py-4 transition-colors duration-200"
                style={{ '--hover-bg': il ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.03)' }}
                onMouseEnter={e => e.currentTarget.style.background = il ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.03)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                {/* Big number badge */}
                <div className="shrink-0 flex flex-col items-center justify-center w-14 h-14 rounded-2xl shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${mod.color}28, ${mod.color}10)`,
                    border: `2px solid ${mod.color}${isOpen ? '60' : '45'}`,
                  }}>
                  <span className="text-[9px] font-black tracking-[0.2em] uppercase" style={{ color: `${mod.color}90` }}>Kap.</span>
                  <span className="text-2xl font-black leading-none" style={{ color: mod.color }}>{mod.number}</span>
                </div>

                {/* Title block */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9px] font-black tracking-[0.3em] uppercase px-2 py-0.5 rounded-full"
                      style={{ background: `${mod.color}18`, color: mod.color, border: `1px solid ${mod.color}30` }}>
                      KAPITEL {mod.number}
                    </span>
                    <span className="text-lg">{mod.icon}</span>
                  </div>
                  <h3 className="font-black text-base leading-tight mb-0.5 truncate" style={{ color: il ? '#0f172a' : '#fff' }}>{mod.title}</h3>
                  <p className="text-[11px] italic truncate mb-2" style={{ color: il ? 'rgba(15,23,42,0.45)' : 'rgba(255,255,255,0.35)' }}>{mod.titleFr} — {mod.subtitle}</p>

                  {/* Progress bar */}
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                      <div className="h-1.5 rounded-full transition-all duration-700"
                        style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${mod.color}99, ${mod.color})` }} />
                    </div>
                    <span className="text-[10px] font-bold shrink-0 min-w-[36px] text-right"
                      style={{ color: pct > 0 ? mod.color : 'rgba(255,255,255,0.18)' }}>
                      {completedCount}/{totalCount}
                    </span>
                  </div>
                </div>

                {/* Chevron */}
                <svg className="w-4 h-4 shrink-0 transition-transform duration-300"
                  style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', color: isOpen ? mod.color : 'rgba(255,255,255,0.25)' }}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* ── Summary: objectives (always visible) ── */}
              {mod.objectives.length > 0 && (
                <div className="px-5 pb-4 grid sm:grid-cols-2 gap-1.5" style={{ borderTop: `1px solid ${il ? mod.color + '20' : mod.color + '12'}` }}>
                  {mod.objectives.map((obj, oi) => (
                    <div key={oi} className="flex items-start gap-1.5 text-[11px] pt-3" style={{ color: il ? 'rgba(15,23,42,0.55)' : 'rgba(255,255,255,0.40)' }}>
                      <span className="shrink-0 mt-0.5 text-[9px]" style={{ color: `${mod.color}70` }}>◆</span>
                      {obj}
                    </div>
                  ))}
                </div>
              )}

              {/* ── Expanded: full Teil A→D content ── */}
              {isOpen && (
                <div className="px-4 pb-4 space-y-3" style={{ borderTop: `1px solid ${il ? mod.color + '30' : mod.color + '20'}` }}>
                  <div className="pt-3 space-y-3">
                    {mod.teile.map(teil => {
                      const tc = TEIL_CFG[teil.teil] || TEIL_CFG.A;
                      return (
                        <div key={teil.teil} className="rounded-2xl overflow-hidden"
                          style={{ border: `1px solid ${tc.border}`, background: tc.glow }}>

                          {/* Teil header */}
                          <div className="flex items-center gap-2.5 px-4 py-2.5"
                            style={{ background: tc.bg, borderBottom: `1px solid ${tc.border}` }}>
                            <div className="w-6 h-6 rounded-lg flex items-center justify-center text-[11px] font-black"
                              style={{ background: 'rgba(0,0,0,0.18)', color: tc.color }}>
                              {teil.teil}
                            </div>
                            <span className="text-[10px] font-extrabold tracking-widest" style={{ color: tc.color }}>
                              TEIL {teil.teil}
                            </span>
                            <span className="text-xs" style={{ color: il ? 'rgba(15,23,42,0.30)' : 'rgba(255,255,255,0.40)' }}>—</span>
                            <span className="text-[11px] font-bold" style={{ color: il ? 'rgba(15,23,42,0.60)' : 'rgba(255,255,255,0.70)' }}>{tc.label}</span>
                            <span className="ml-auto text-base">{tc.icon}</span>
                          </div>

                          {/* Topics */}
                          <div className="p-3 space-y-2">
                            {teil.topics.map((topicObj, ti) => {
                              const lesson = topicObj.lessonId ? lessonsById[topicObj.lessonId] : null;
                              const done   = topicObj.lessonId ? progress.completedLessons.includes(topicObj.lessonId) : false;
                              return (
                                <TopicRow
                                  key={ti}
                                  topicObj={topicObj}
                                  lesson={lesson}
                                  isCompleted={done}
                                  tCfg={tc}
                                  index={ti}
                                />
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}

                    {/* Mini-test */}
                    <div className="flex items-center gap-3 px-4 py-3 rounded-2xl"
                      style={{ background: 'rgba(251,146,60,0.06)', border: '1px solid rgba(251,146,60,0.15)' }}>
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm"
                        style={{ background: 'rgba(251,146,60,0.12)', border: '1px solid rgba(251,146,60,0.25)' }}>
                        🏆
                      </div>
                      <div className="flex-1">
                        <div className="text-[10px] font-extrabold tracking-widest text-orange-400">MINI-TEST</div>
                        <div className="text-[11px]" style={{ color: il ? 'rgba(15,23,42,0.45)' : 'rgba(255,255,255,0.35)' }}>Rückblick — test de fin · Kapitel {mod.number}</div>
                      </div>
                      {mod.grammarTopics?.length > 0 && (
                        <div className="hidden sm:flex flex-wrap gap-1 justify-end max-w-[200px]">
                          {mod.grammarTopics.map((gt, gi) => (
                            <span key={gi} className="text-[9px] px-1.5 py-0.5 rounded-full"
                              style={{ background: 'rgba(167,139,250,0.10)', color: '#a78bfa80', border: '1px solid rgba(167,139,250,0.15)' }}>
                              {gt}
                            </span>
                          ))}
                        </div>
                      )}
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full shrink-0"
                        style={{ background: 'rgba(251,146,60,0.10)', color: 'rgba(251,146,60,0.50)', border: '1px solid rgba(251,146,60,0.18)' }}>
                        Bientôt
                      </span>
                    </div>

                    {/* Collapse button */}
                    <button
                      onClick={() => toggle(mod.id)}
                      className="w-full py-2 rounded-xl text-xs font-bold transition-colors duration-200 hover:bg-white/[0.04]"
                      style={{ color: `${mod.color}80`, border: `1px solid ${mod.color}20` }}>
                      ↑ Réduire Kapitel {mod.number}
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   PANE: LEÇONS — full Begegnungen A1 layout
───────────────────────────────────────────── */
const LessonsPane = ({ levelId, level, progress }) => {
  const allLessons = getLessonsByLevel(levelId);

  /* ── A1: accordion Kapitel ── */
  if (levelId === 'A1' && A1_MODULES.length > 0) {
    const lessonsById = {};
    allLessons.forEach(l => { lessonsById[l.id] = l; });

    return <A1KapitelGrid modules={A1_MODULES} lessonsById={lessonsById} progress={progress} />;
  }

  /* ── Default flat list for other levels ── */
  const list = allLessons.filter(l => !l.type);
  return (
    <div className="space-y-3">
      {list.length === 0 && <p className="text-white/35 text-sm py-8 text-center">Aucune leçon disponible.</p>}
      {list.map(l => <LessonCard key={l.id} lesson={l} isCompleted={progress.completedLessons.includes(l.id)} level={level} />)}
    </div>
  );
};

/* ─────────────────────────────────────────────
   PANE: GRAMMAIRE
───────────────────────────────────────────── */
const GrammarPane = ({ levelId, level, progress }) => {
  const list = getLessonsByLevel(levelId).filter(l => l.type === 'grammar');
  return (
    <div>
      <p className="text-xs text-white/40 mb-4">Maîtrisez les règles grammaticales — articles, cas, conjugaison, syntaxe, temps.</p>
      <div className="space-y-3">
        {list.length === 0 && <p className="text-white/35 text-sm py-8 text-center">Grammaire {levelId} — bientôt disponible.</p>}
        {list.map(l => <LessonCard key={l.id} lesson={l} isCompleted={progress.completedLessons.includes(l.id)} level={level} />)}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   PANE: LESEN (reading / stories)
───────────────────────────────────────────── */
const ReadingPane = ({ levelId, level, progress }) => {
  const list = getLessonsByLevel(levelId).filter(l => l.type === 'story');
  return (
    <div>
      <p className="text-xs text-white/40 mb-4">Lisez des textes courts en allemand — histoires, dialogues, situations du quotidien.</p>
      <div className="space-y-3">
        {list.length === 0 && <p className="text-white/35 text-sm py-8 text-center">Textes {levelId} — bientôt disponibles.</p>}
        {list.map(l => <LessonCard key={l.id} lesson={l} isCompleted={progress.completedLessons.includes(l.id)} level={level} />)}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   PANE: EXERCICES (inline mini-quiz)
───────────────────────────────────────────── */
const ExercisesPane = ({ levelId, level }) => {
  const pool = (EX_DATA[levelId] || []).slice(0, 10);
  const [phase, setPhase] = useState('list');
  const [idx, setIdx]     = useState(0);
  const [sel, setSel]     = useState(null);
  const [score, setScore] = useState(0);

  const pick = (i) => {
    if (sel !== null) return;
    setSel(i);
    if (i === pool[idx].correct) setScore(s => s + 1);
    setTimeout(() => {
      if (idx < pool.length - 1) { setIdx(n => n + 1); setSel(null); }
      else setPhase('done');
    }, 1100);
  };

  const restart = () => { setPhase('list'); setIdx(0); setSel(null); setScore(0); };

  if (phase === 'list') return (
    <div>
      <p className="text-xs text-white/40 mb-5">Testez vos connaissances avec {pool.length} questions du niveau {levelId}.</p>
      <div className="grid gap-2 mb-6">
        {pool.map((ex, i) => (
          <div key={ex.id} className="flex items-start gap-3 px-4 py-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <span className="text-[10px] font-black mt-0.5 px-1.5 py-0.5 rounded shrink-0" style={{ background: level.accentBg, color: level.accent }}>{i + 1}</span>
            <p className="text-sm text-white/65">{ex.question}</p>
          </div>
        ))}
      </div>
      <button onClick={() => setPhase('quiz')} className="btn-grad w-full py-3 rounded-xl font-bold text-white text-sm">
        Commencer — {pool.length} questions
      </button>
      <Link to="/exercises" className="block text-center text-xs text-white/30 hover:text-white/55 transition-colors mt-3">
        Voir tous les exercices →
      </Link>
    </div>
  );

  if (phase === 'done') return (
    <div className="text-center py-12">
      <div className="text-5xl font-black mb-2" style={{ color: level.accent }}>{score}/{pool.length}</div>
      <p className="text-white/50 text-sm mb-8">
        {score === pool.length ? 'Perfekt! Tous corrects!' : score >= pool.length * 0.7 ? 'Sehr gut! Continuez!' : 'Üben! La pratique paie!'}
      </p>
      <div className="flex gap-3 justify-center">
        <button onClick={restart} className="px-6 py-2 rounded-xl text-sm font-bold border border-white/15 text-white/60 hover:border-white/30 transition-colors">Recommencer</button>
        <Link to="/exercises" className="btn-grad px-6 py-2 rounded-xl text-sm font-bold text-white">Tous les exercices →</Link>
      </div>
    </div>
  );

  const q = pool[idx];
  return (
    <div>
      <div className="flex justify-between mb-2 text-xs">
        <span className="text-white/35">{idx + 1}/{pool.length}</span>
        <span className="font-bold" style={{ color: level.accent }}>Score: {score}</span>
      </div>
      <div className="w-full h-1 rounded-full mb-5" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <div className="h-1 rounded-full transition-all" style={{ width: `${(idx / pool.length) * 100}%`, background: level.accent }} />
      </div>
      <div className="px-5 py-5 rounded-2xl mb-4" style={{ background: level.accentBg, border: `1.5px solid ${level.accentBorder}` }}>
        <p className="font-semibold text-white text-sm leading-relaxed">{q.question}</p>
      </div>
      <div className="grid gap-2">
        {q.options.map((opt, i) => {
          const isChosen = sel === i, isRight = i === q.correct, shown = sel !== null;
          return (
            <button
              key={i} onClick={() => pick(i)}
              className="w-full text-left px-4 py-3 rounded-xl text-sm transition-all"
              style={{
                background: shown ? (isRight ? 'rgba(74,222,128,0.10)' : isChosen ? 'rgba(248,113,113,0.10)' : 'rgba(255,255,255,0.02)') : 'rgba(255,255,255,0.03)',
                border: `1px solid ${shown ? (isRight ? 'rgba(74,222,128,0.40)' : isChosen ? 'rgba(248,113,113,0.40)' : 'rgba(255,255,255,0.07)') : 'rgba(255,255,255,0.07)'}`,
                color: shown ? (isRight ? '#4ade80' : isChosen ? '#f87171' : 'rgba(255,255,255,0.40)') : 'rgba(255,255,255,0.75)',
                cursor: shown ? 'default' : 'pointer',
              }}
            >{opt}</button>
          );
        })}
      </div>
      {sel !== null && q.explanation && (
        <div className="mt-4 px-4 py-3 rounded-xl text-xs" style={{ background: 'rgba(251,191,36,0.06)', border: '1px solid rgba(251,191,36,0.18)', color: 'rgba(253,230,138,0.80)' }}>
          {q.explanation}
        </div>
      )}
    </div>
  );
};

/* ─────────────────────────────────────────────
   PANE: JEUX — flashcard word game
───────────────────────────────────────────── */
const GamesPane = ({ levelId }) => {
  const allWords = useMemo(() => {
    const cats = VOCAB_DATA[levelId] || {};
    return Object.values(cats).flatMap(c => Array.isArray(c.words) ? c.words : []);
  }, [levelId]);

  const [phase, setPhase]   = useState('menu');
  const [mode, setMode]     = useState('de_to_en');
  const [questions, setQs]  = useState([]);
  const [idx, setIdx]       = useState(0);
  const [sel, setSel]       = useState(null);
  const [score, setScore]   = useState(0);

  const buildGame = useCallback((m) => {
    if (allWords.length < 4) return;
    const shuffled = [...allWords].sort(() => Math.random() - 0.5).slice(0, Math.min(10, allWords.length));
    const qs = shuffled.map(word => {
      const wrong = allWords.filter(w => w !== word).sort(() => Math.random() - 0.5).slice(0, 3);
      const opts = [word, ...wrong].sort(() => Math.random() - 0.5);
      return {
        question: m === 'de_to_en' ? word.german : word.english,
        options:  opts.map(o => m === 'de_to_en' ? o.english : o.german),
        correct:  opts.indexOf(word),
      };
    });
    setQs(qs); setIdx(0); setSel(null); setScore(0); setMode(m); setPhase('playing');
  }, [allWords]);

  const pick = (i) => {
    if (sel !== null) return;
    setSel(i);
    if (i === questions[idx].correct) setScore(s => s + 1);
    setTimeout(() => {
      if (idx < questions.length - 1) { setIdx(n => n + 1); setSel(null); }
      else setPhase('done');
    }, 900);
  };

  if (phase === 'menu') return (
    <div>
      <p className="text-xs text-white/40 mb-6">{allWords.length} mots disponibles in niveau {levelId}. Choisissez un mode de jeu.</p>
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { m: 'de_to_en', title: 'Allemand → Français', sub: 'Lis le mot allemand, trouve la traduction', th: 'MODE 1' },
          { m: 'en_to_de', title: 'Français → Allemand', sub: 'Lis le français, trouve le mot allemand', th: 'MODE 2' },
        ].map(({ m, title, sub, th }) => (
          <div key={m} className="p-5 rounded-2xl" style={{ background: 'rgba(245,158,11,0.07)', border: '1.5px solid rgba(245,158,11,0.18)' }}>
            <div className="text-[10px] font-extrabold tracking-widest text-amber-400 mb-1">{th}</div>
            <div className="font-bold text-white text-sm mb-1">{title}</div>
            <p className="text-xs text-white/40 mb-4">{sub}</p>
            <button onClick={() => buildGame(m)} className="w-full py-2 rounded-xl text-sm font-bold text-amber-300 border border-amber-400/30 hover:bg-amber-400/10 transition-colors">
              Jouer
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  if (phase === 'done') {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="text-center py-12">
        <div className="text-5xl font-black mb-1" style={{ color: '#f59e0b' }}>{score}/{questions.length}</div>
        <div className="text-xl font-bold text-white/50 mb-2">{pct}%</div>
        <p className="text-white/40 text-sm mb-8">
          {pct === 100 ? 'Perfekt! Vocabulaire maîtrisé!' : pct >= 70 ? 'Sehr gut! Continue!' : 'Üben! Pratique encore!'}
        </p>
        <div className="flex gap-3 justify-center">
          <button onClick={() => setPhase('menu')} className="px-5 py-2 rounded-xl text-sm font-bold border border-white/15 text-white/55 hover:border-white/30 transition-colors">Menu</button>
          <button onClick={() => buildGame(mode)} className="btn-grad px-5 py-2 rounded-xl text-sm font-bold text-white">Rejouer</button>
        </div>
      </div>
    );
  }

  const q = questions[idx];
  return (
    <div>
      <div className="flex justify-between mb-2 text-xs">
        <span className="text-white/35">{idx + 1}/{questions.length}</span>
        <span className="font-bold text-amber-400">Score: {score}</span>
      </div>
      <div className="w-full h-1 rounded-full mb-5" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <div className="h-1 rounded-full transition-all" style={{ width: `${(idx / questions.length) * 100}%`, background: '#f59e0b' }} />
      </div>
      <div className="py-10 px-6 rounded-3xl text-center mb-5" style={{ background: 'rgba(245,158,11,0.07)', border: '1.5px solid rgba(245,158,11,0.20)' }}>
        <div className="text-[10px] font-extrabold tracking-widest text-amber-400/60 mb-2">
          {mode === 'de_to_en' ? 'ALLEMAND — Que signifie ce mot ?' : 'FRANÇAIS — Comment dit-on en allemand ?'}
        </div>
        <div className="text-2xl font-black text-white">{q.question}</div>
      </div>
      <div className="grid sm:grid-cols-2 gap-2">
        {q.options.map((opt, i) => {
          const chosen = sel === i, right = i === q.correct, shown = sel !== null;
          return (
            <button key={i} onClick={() => pick(i)}
              className="px-4 py-3 rounded-xl text-sm text-left transition-all"
              style={{
                background: shown ? (right ? 'rgba(74,222,128,0.10)' : chosen ? 'rgba(248,113,113,0.10)' : 'transparent') : 'rgba(255,255,255,0.03)',
                border: `1px solid ${shown ? (right ? 'rgba(74,222,128,0.40)' : chosen ? 'rgba(248,113,113,0.40)' : 'rgba(255,255,255,0.06)') : 'rgba(255,255,255,0.08)'}`,
                color: shown ? (right ? '#4ade80' : chosen ? '#f87171' : 'rgba(255,255,255,0.30)') : 'rgba(255,255,255,0.80)',
                cursor: shown ? 'default' : 'pointer',
              }}
            >{opt}</button>
          );
        })}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   PANE: SCHREIBEN — translation writing
───────────────────────────────────────────── */
const SchreibenPane = ({ levelId }) => {
  const prompts = SCHREIBEN_DATA[levelId] || SCHREIBEN_DATA.A1;
  const [idx, setIdx]         = useState(0);
  const [answer, setAnswer]   = useState('');
  const [revealed, setRevealed] = useState(false);
  const [checked, setChecked] = useState(null);
  const [done, setDone]       = useState(false);
  const cur = prompts[idx];

  const checkAnswer = () => {
    const u = answer.trim().toLowerCase().replace(/[.,!?]/g, '');
    const c = cur.de.toLowerCase().replace(/[.,!?]/g, '');
    setChecked(u === c ? 'ok' : (c.includes(u) || u.length >= c.length * 0.72) ? 'partial' : 'wrong');
    setRevealed(true);
  };

  const next = () => {
    if (idx < prompts.length - 1) { setIdx(i => i + 1); setAnswer(''); setRevealed(false); setChecked(null); }
    else setDone(true);
  };

  const restart = () => { setIdx(0); setAnswer(''); setRevealed(false); setChecked(null); setDone(false); };

  if (done) return (
    <div className="text-center py-12">
      <div className="text-3xl font-black text-pink-400 mb-2">Schreiben abgeschlossen!</div>
      <p className="text-white/45 text-sm mb-6">{prompts.length} exercices d&apos;écriture complétés.</p>
      <button onClick={restart} className="btn-grad px-8 py-2 rounded-xl text-sm font-bold text-white">Recommencer</button>
    </div>
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs text-white/35">{idx + 1}/{prompts.length}</span>
        <span className="text-[9px] font-extrabold tracking-widest px-2 py-0.5 rounded"
          style={{ background: 'rgba(244,114,182,0.14)', color: '#f472b6', border: '1px solid rgba(244,114,182,0.25)' }}>
          SCHREIBEN
        </span>
      </div>
      <div className="px-5 py-5 rounded-2xl mb-4" style={{ background: 'rgba(244,114,182,0.07)', border: '1.5px solid rgba(244,114,182,0.20)' }}>
        <div className="text-[10px] font-extrabold tracking-widest text-pink-400/60 mb-2">TRADUIRE EN ALLEMAND</div>
        <p className="font-semibold text-white text-base">{cur.en}</p>
      </div>
      <textarea
        value={answer}
        onChange={e => { setAnswer(e.target.value); setRevealed(false); setChecked(null); }}
        placeholder="Écris ta traduction allemande ici..."
        rows={3}
        className="w-full px-4 py-3 rounded-xl text-sm bg-white/[0.04] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-pink-400/40 resize-none mb-3"
        onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey && answer.trim()) { e.preventDefault(); if (!revealed) checkAnswer(); } }}
      />
      {!revealed ? (
        <div className="flex gap-3">
          <button onClick={checkAnswer} disabled={!answer.trim()} className="btn-grad flex-1 py-2 rounded-xl text-sm font-bold text-white disabled:opacity-30">
            Vérifier
          </button>
          <button onClick={() => { setRevealed(true); setChecked('revealed'); }} className="px-4 py-2 rounded-xl text-sm border border-white/10 text-white/40 hover:border-white/25 transition-colors">
            Voir réponse
          </button>
        </div>
      ) : (
        <div>
          <div className="px-4 py-3 rounded-xl mb-3"
            style={{
              background: checked === 'ok' ? 'rgba(74,222,128,0.06)' : checked === 'partial' ? 'rgba(251,191,36,0.06)' : 'rgba(248,113,113,0.06)',
              border: `1px solid ${checked === 'ok' ? 'rgba(74,222,128,0.30)' : checked === 'partial' ? 'rgba(251,191,36,0.30)' : 'rgba(248,113,113,0.25)'}`,
            }}
          >
            <div className="text-[10px] font-extrabold tracking-widest mb-1"
              style={{ color: checked === 'ok' ? '#4ade80' : checked === 'partial' ? '#fbbf24' : checked === 'wrong' ? '#f87171' : '#f472b6' }}>
              {checked === 'ok' ? 'RICHTIG!' : checked === 'partial' ? 'FAST RICHTIG' : checked === 'wrong' ? 'FALSCH' : 'RÉPONSE CORRECTE'}
            </div>
            <div className="text-sm font-bold text-white/90">{cur.de}</div>
            <div className="text-xs text-white/35 mt-1 italic">Astuce : {cur.hint}</div>
          </div>
          <button onClick={next} className="btn-grad w-full py-2 rounded-xl text-sm font-bold text-white">
            {idx < prompts.length - 1 ? 'Suivant →' : 'Terminer'}
          </button>
        </div>
      )}
    </div>
  );
};

/* ─────────────────────────────────────────────
   PANE: COMING SOON (Hören / Sprechen / IA)
───────────────────────────────────────────── */
const COMING_DATA = {
  listening: {
    title: 'Hören — Compréhension orale',
    titleDe: 'Hörverständnis',
    sub: 'Entraîne-toi à comprendre l\'allemand parlé — dialogues, podcasts, histoires',
    color: '#22d3ee', bg: 'rgba(34,211,238,0.08)', border: 'rgba(34,211,238,0.22)',
    features: [
      { sym: 'D', t: 'Dialogues audio A1–C2', d: 'Conversations authentiques avec transcription cliquable' },
      { sym: 'P', t: 'Podcasts simplifiés', d: 'Écoute à vitesse réduite avec sous-titres bilingues' },
      { sym: 'T', t: 'Dictée allemande', d: 'Écris ce que tu entends — Schreib was du hörst' },
      { sym: 'Q', t: 'Questions de compréhension', d: 'Répondre aux questions après chaque écoute' },
    ],
  },
  speaking: {
    title: 'Sprechen — Expression orale',
    titleDe: 'Mündlicher Ausdruck',
    sub: 'Parle allemand avec confiance — prononciation, fluidité, intonation',
    color: '#fb923c', bg: 'rgba(251,146,60,0.08)', border: 'rgba(251,146,60,0.22)',
    features: [
      { sym: 'R', t: 'Répétition guidée', d: 'Répète des phrases natives — compare ta prononciation' },
      { sym: 'S', t: 'Shadowing', d: 'Lis à haute voix en synchronisation avec l\'audio natif' },
      { sym: 'M', t: 'Monologues guidés', d: 'Parle 1 min sur un sujet donné — improvisation contrôlée' },
      { sym: 'Ph', t: 'Phonétique', d: 'Maîtrise ä, ö, ü, ch, r, ß — les sons difficiles' },
    ],
  },
  ai: {
    title: 'Parler avec l\'IA',
    titleDe: 'KI-Gesprächspartner',
    sub: 'Un interlocuteur IA 24/7 pour pratiquer l\'allemand — adapté à ton niveau',
    color: '#c084fc', bg: 'rgba(192,132,252,0.08)', border: 'rgba(192,132,252,0.22)',
    features: [
      { sym: 'C', t: 'Conversation libre', d: 'Parle de n\'importe quel sujet — l\'IA s\'adapte à A1/A2/B1' },
      { sym: 'G', t: 'Correction grammaticale', d: 'Erreurs corrigées en temps réel avec explication détaillée' },
      { sym: 'J', t: 'Jeux de rôle', d: 'Au restaurant, àla gare, chez le médecin — simulations réelles' },
      { sym: 'V', t: 'Vocabulaire contextuel', d: 'Apprends les mots dans le contexte de la conversation' },
    ],
  },
};

const ComingSoonPane = ({ tabId }) => {
  const d = COMING_DATA[tabId];
  if (!d) return null;
  return (
    <div>
      <div className="px-6 py-8 rounded-3xl mb-5" style={{ background: d.bg, border: `1.5px solid ${d.border}` }}>
        <div className="inline-block text-[10px] font-extrabold tracking-widest px-2 py-0.5 rounded mb-3" style={{ background: `${d.color}20`, color: d.color }}>
          BIENTÔT DISPONIBLE
        </div>
        <h3 className="text-xl font-black text-white mb-0.5">{d.title}</h3>
        <p className="text-xs text-white/35 italic mb-2">{d.titleDe}</p>
        <p className="text-sm text-white/55">{d.sub}</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {d.features.map((f, i) => (
          <div key={i} className="flex gap-3 p-4 rounded-2xl" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-extrabold shrink-0" style={{ background: d.bg, color: d.color, border: `1px solid ${d.border}` }}>
              {f.sym}
            </div>
            <div>
              <div className="text-sm font-bold text-white/80">{f.t}</div>
              <div className="text-xs text-white/35 mt-0.5">{f.d}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   LEVEL DETAIL — dashboard with 9 skill tabs
───────────────────────────────────────────── */
const LevelDetail = ({ level, onBack }) => {
  const [activeTab, setActiveTab] = useState('lessons');
  const progress = progressService.getProgress();
  const allLessons = getLessonsByLevel(level.id);
  const completed  = allLessons.filter(l => progress.completedLessons.includes(l.id));
  const pct = allLessons.length ? Math.round((completed.length / allLessons.length) * 100) : 0;

  // For A1: count completed Kapitel (a chapter is "done" when all its lesson IDs are completed)
  const a1KapitelInfo = level.id === 'A1' ? (() => {
    const done = A1_MODULES.filter(mod =>
      mod.lessons.length > 0 && mod.lessons.every(id => progress.completedLessons.includes(id))
    ).length;
    return { total: A1_MODULES.length, done };
  })() : null;

  const CONTENT = {
    lessons:   <LessonsPane   levelId={level.id} level={level} progress={progress} />,
    grammar:   <GrammarPane   levelId={level.id} level={level} progress={progress} />,
    reading:   <ReadingPane   levelId={level.id} level={level} progress={progress} />,
    exercises: <ExercisesPane levelId={level.id} level={level} />,
    games:     <GamesPane     levelId={level.id} />,
    writing:   <SchreibenPane levelId={level.id} />,
    listening: <ComingSoonPane tabId="listening" />,
    speaking:  <ComingSoonPane tabId="speaking"  />,
    ai:        <ComingSoonPane tabId="ai"         />,
  };

  return (
    <div className="max-w-6xl mx-auto px-6 pb-16">

      {/* ── TOP BAR ── */}
      <div className="flex items-center gap-3 py-6 mb-2 border-b border-white/6">
        <button onClick={onBack} className="text-xs font-bold text-white/35 hover:text-white/65 transition-colors flex items-center gap-1">
          ← Niveaux
        </button>
        <span className="text-white/15 text-sm">|</span>
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm shrink-0"
          style={{ background: level.accentBg, border: `1.5px solid ${level.accentBorder}`, color: level.accent }}
        >
          {level.id}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-black text-white text-sm">{level.name}</span>
            <span className="text-white/30 text-xs">/ {level.nameDe}</span>
            {a1KapitelInfo && (
              <span className="text-[9px] font-extrabold tracking-widest px-2 py-0.5 rounded"
                style={{ background: 'rgba(129,140,248,0.12)', color: '#fc7a01', border: '1px solid rgba(129,140,248,0.22)' }}>
                A1 · {a1KapitelInfo.total} KAPITEL
              </span>
            )}
          </div>
          <p className="text-[11px] text-white/35 truncate">{level.desc}</p>
        </div>
        <div className="text-right shrink-0 hidden sm:block">
          {a1KapitelInfo ? (
            <>
              <div className="text-2xl font-black" style={{ color: level.accent }}>{a1KapitelInfo.done}/{a1KapitelInfo.total}</div>
              <div className="text-[10px] text-white/30">Kapitel terminés</div>
            </>
          ) : (
            <>
              <div className="text-2xl font-black" style={{ color: level.accent }}>{pct}%</div>
              <div className="text-[10px] text-white/30">{completed.length}/{allLessons.length} leçons</div>
            </>
          )}
        </div>
      </div>

      {/* ── PROGRESS BAR ── */}
      <div className="mb-6">
        <ProgressBar value={completed.length} max={allLessons.length || 1} showPercentage={false} color={level.color || 'indigo'} size="small" animated />
      </div>

      {/* ── SKILL TABS ── */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6" style={{ scrollbarWidth: 'none' }}>
        {SKILL_TABS.map(tab => {
          const isAct = activeTab === tab.id;
          const coming = ['listening', 'speaking', 'ai'].includes(tab.id);
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl whitespace-nowrap text-xs font-bold border transition-all shrink-0 relative"
              style={{
                background: isAct ? `${tab.color}18` : 'rgba(255,255,255,0.03)',
                borderColor: isAct ? `${tab.color}45` : 'rgba(255,255,255,0.08)',
                color: isAct ? tab.color : 'rgba(255,255,255,0.40)',
              }}
            >
              <span
                className="w-4 h-4 rounded flex items-center justify-center text-[9px] font-extrabold"
                style={{ background: isAct ? `${tab.color}25` : 'rgba(255,255,255,0.06)', color: isAct ? tab.color : 'rgba(255,255,255,0.28)' }}
              >
                {tab.sym}
              </span>
              {tab.label}
              {coming && (
                <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-amber-400/70 border border-amber-400/40" />
              )}
            </button>
          );
        })}
      </div>

      {/* ── TAB CONTENT ── */}
      <div className="min-h-[300px]">
        {CONTENT[activeTab]}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   MAIN PAGE — level grid (A1 → C2)
───────────────────────────────────────────── */
const Levels = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedLevel = searchParams.get('level');
  const setSelectedLevel = (id) => id ? setSearchParams({ level: id }) : setSearchParams({});
  const progress = progressService.getProgress();

  if (selectedLevel) {
    const lvl = ALL_LEVELS.find(l => l.id === selectedLevel);
    if (lvl?.unlocked) {
      return (
        <div className="min-h-screen pt-[68px]">
          <LevelDetail level={lvl} onBack={() => setSelectedLevel(null)} />
        </div>
      );
    }
  }

  return (
    <div className="min-h-screen pt-[68px]">

      {/* ── HEADER ── */}
      <section className="py-14 border-b border-white/6 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center relative">
          <div
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 font-black leading-none select-none pointer-events-none"
            style={{ fontSize: 'clamp(4rem,16vw,10rem)', color: 'rgba(255,255,255,0.025)', letterSpacing: '-0.04em', zIndex: 0 }}
          >
            NIVEAUX
          </div>
          <div className="relative z-10">
            <h1 className="text-3xl md:text-5xl font-black mb-3">
              <span className="text-white">Niveaux /</span>{' '}
              <span className="text-grad">Deutsch lernen</span>
            </h1>
            <p className="text-white/45 text-sm max-w-md mx-auto">
              Choisissez votre niveau — A1 disponible. A2 arrive bientot. Lecons, Grammaire, Exercices, Jeux, Schreiben, Horen, Sprechen et IA dans chaque niveau.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* ── LEVEL CARDS GRID ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-14">
          {ALL_LEVELS.map(lvl => {
            const all  = getLessonsByLevel(lvl.id);
            const done = all.filter(l => progress.completedLessons.includes(l.id));
            const pct  = all.length ? Math.round((done.length / all.length) * 100) : 0;
            return (
              <button
                key={lvl.id}
                onClick={() => lvl.unlocked && setSelectedLevel(lvl.id)}
                className={`relative flex flex-col p-5 rounded-3xl border text-left transition-all duration-200 ${lvl.unlocked ? 'card-hover cursor-pointer' : 'cursor-not-allowed'}`}
                style={{
                  background: lvl.accentBg,
                  borderColor: lvl.accentBorder,
                  opacity: lvl.unlocked ? 1 : 0.55,
                }}
              >
                {/* Lock / progress badge */}
                <div className="absolute top-3 right-3">
                  {!lvl.unlocked ? (
                    <span className="text-[9px] font-extrabold tracking-widest px-2 py-0.5 rounded-full border"
                      style={{ background: lvl.accentBg, color: lvl.accent, borderColor: lvl.accentBorder }}>
                      🔒 SOON
                    </span>
                  ) : pct > 0 ? (
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full" style={{ background: lvl.accentBg, color: lvl.accent, border: `1px solid ${lvl.accentBorder}` }}>{pct}%</span>
                  ) : null}
                </div>

                {/* Level label */}
                <div className="text-4xl font-black mb-3 leading-none" style={{ color: lvl.accent }}>
                  {lvl.id}
                </div>

                <div className="font-bold text-sm mb-0.5" style={{ color: lvl.unlocked ? '#fff' : 'rgba(255,255,255,0.80)' }}>{lvl.name}</div>
                <div className="text-[11px] mb-3" style={{ color: lvl.accent }}>{lvl.nameDe}</div>
                <p className="text-[11px] leading-relaxed flex-1" style={{ color: lvl.unlocked ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.45)' }}>{lvl.desc}</p>

                {lvl.unlocked && (
                  <div className="mt-4">
                    {pct > 0 ? (
                      <>
                        <div className="w-full h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                          <div className="h-1 rounded-full" style={{ width: `${pct}%`, background: lvl.accent }} />
                        </div>
                        <div className="text-[10px] mt-1" style={{ color: lvl.accent }}>{done.length}/{all.length} leçons</div>
                      </>
                    ) : (
                      <div className="text-[11px] font-bold" style={{ color: lvl.accent }}>Entrer →</div>
                    )}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* ── SKILL MAP ── */}
        <div className="mb-12">
          <h2 className="text-base font-black text-white mb-1">Ce que vous apprendrez dans chaque niveau</h2>
          <p className="text-white/35 text-xs mb-5">9 compétences pour parler allemand couramment — Fließend Deutsch sprechen.</p>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-9 gap-2">
            {SKILL_TABS.map(tab => (
              <div key={tab.id} className="flex flex-col items-center gap-1.5 p-3 rounded-2xl" style={{ background: `${tab.color}0d`, border: `1px solid ${tab.color}1f` }}>
                <div className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-extrabold" style={{ background: `${tab.color}1a`, color: tab.color }}>
                  {tab.sym}
                </div>
                <div className="text-[10px] font-bold text-center leading-tight" style={{ color: tab.color }}>{tab.label}</div>
                <div className="text-[8px] text-center text-white/22">{tab.labelDe}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── GOAL SECTION ── */}
        <div className="p-6 md:p-8 rounded-3xl" style={{ background: 'rgba(129,140,248,0.06)', border: '1.5px solid rgba(129,140,248,0.18)' }}>
          <div className="text-[10px] font-extrabold tracking-widest text-indigo-400 mb-2">OBJECTIF DE LA PLATEFORME</div>
          <h3 className="text-xl font-black text-white mb-2">Sprechen wie ein Muttersprachler</h3>
          <p className="text-white/50 text-sm mb-6">
            Parler allemand couramment — voilà l'objectif. Chaque section est conçue pour développer une compétence spécifique vers la fluidité orale et écrite.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { n: '01', c: '#818cf8', t: 'Comprendre (Input)', d: 'Lesen + Hören — développer la compréhension avant de produire' },
              { n: '02', c: '#a78bfa', t: 'Construire (Structure)', d: 'Grammatik + Schreiben — maîtriser les structures pour s\'exprimer correctement' },
              { n: '03', c: '#c084fc', t: 'Parler (Output)', d: 'Sprechen + IA — pratiquer jusqu\'à la fluidité naturelle' },
            ].map(({ n, c, t, d }) => (
              <div key={n} className="flex gap-3 p-4 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <span className="text-2xl font-extrabold shrink-0" style={{ color: c }}>{n}</span>
                <div>
                  <div className="text-sm font-bold text-white/80 mb-0.5">{t}</div>
                  <div className="text-xs text-white/35">{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Levels;
