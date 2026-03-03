import { useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getLessonsByLevel } from '../data/lessons';
import { exercises as EX_DATA } from '../data/exercises';
import { vocabulary as VOCAB_DATA } from '../data/vocabulary';
import { progressService } from '../services/progress';
import ProgressBar from '../components/ProgressBar';

/* ─────────────────────────────────────────────
   LEVEL CONFIG — A1/A2 unlocked, B1–C2 locked
───────────────────────────────────────────── */
const ALL_LEVELS = [
  {
    id: 'A1', label: 'A1', name: 'Débutant', nameDe: 'Anfänger',
    desc: 'Salutations, chiffres, famille, nourriture, couleurs, heure',
    descDe: 'Begrüßungen, Zahlen, Familie, Essen, Farben, Uhrzeit',
    accent: '#818cf8', accentBg: 'rgba(129,140,248,0.10)', accentBorder: 'rgba(129,140,248,0.25)',
    unlocked: true, color: 'indigo',
  },
  {
    id: 'A2', label: 'A2', name: 'Élémentaire', nameDe: 'Grundkenntnisse',
    desc: 'Travail, météo, directions, école, santé, grammaire avancée',
    descDe: 'Arbeit, Wetter, Richtungen, Schule, Gesundheit, Grammatik',
    accent: '#a78bfa', accentBg: 'rgba(167,139,250,0.10)', accentBorder: 'rgba(167,139,250,0.25)',
    unlocked: true, color: 'violet',
  },
  {
    id: 'B1', label: 'B1', name: 'Intermédiaire', nameDe: 'Mittelstufe',
    desc: 'Opinions, récits, actualités, conversations complexes',
    accent: '#64748b', accentBg: 'rgba(100,116,139,0.06)', accentBorder: 'rgba(100,116,139,0.15)',
    unlocked: false,
  },
  {
    id: 'B2', label: 'B2', name: 'Avancé', nameDe: 'Oberstufe',
    desc: 'Débats, textes littéraires, nuances culturelles',
    accent: '#64748b', accentBg: 'rgba(100,116,139,0.06)', accentBorder: 'rgba(100,116,139,0.15)',
    unlocked: false,
  },
  {
    id: 'C1', label: 'C1', name: 'Supérieur', nameDe: 'Fortgeschritten',
    desc: 'Langue académique, textes spécialisés, maîtrise grammaticale',
    accent: '#64748b', accentBg: 'rgba(100,116,139,0.06)', accentBorder: 'rgba(100,116,139,0.15)',
    unlocked: false,
  },
  {
    id: 'C2', label: 'C2', name: 'Maîtrise', nameDe: 'Meisterschaft',
    desc: 'Niveau natif — littérature, humour, expressions idiomatiques',
    accent: '#64748b', accentBg: 'rgba(100,116,139,0.06)', accentBorder: 'rgba(100,116,139,0.15)',
    unlocked: false,
  },
];

/* ─────────────────────────────────────────────
   SKILL TABS — 9 learning skills per level
───────────────────────────────────────────── */
const SKILL_TABS = [
  { id: 'lessons',   label: 'Leçons',    labelDe: 'Lektionen',   sym: 'L',  color: '#818cf8' },
  { id: 'grammar',   label: 'Grammaire', labelDe: 'Grammatik',   sym: '∑',  color: '#a78bfa' },
  { id: 'reading',   label: 'Lesen',     labelDe: 'Lesen',       sym: 'R',  color: '#34d399' },
  { id: 'exercises', label: 'Exercices', labelDe: 'Übungen',     sym: '✓',  color: '#60a5fa' },
  { id: 'games',     label: 'Jeux',      labelDe: 'Spiele',      sym: 'G',  color: '#f59e0b' },
  { id: 'writing',   label: 'Schreiben', labelDe: 'Schreiben',   sym: 'W',  color: '#f472b6' },
  { id: 'listening', label: 'Hören',     labelDe: 'Hören',       sym: 'H',  color: '#22d3ee' },
  { id: 'speaking',  label: 'Sprechen',  labelDe: 'Sprechen',    sym: 'S',  color: '#fb923c' },
  { id: 'ai',        label: 'Parler IA', labelDe: 'KI Gespräch', sym: 'AI', color: '#c084fc' },
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
   PANE: LEÇONS
───────────────────────────────────────────── */
const LessonsPane = ({ levelId, level, progress }) => {
  const list = getLessonsByLevel(levelId).filter(l => !l.type);
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
          <span className="font-black text-white text-sm">{level.name}</span>
          <span className="text-white/30 text-xs ml-2">/ {level.nameDe}</span>
          <p className="text-[11px] text-white/35 truncate">{level.desc}</p>
        </div>
        <div className="text-right shrink-0 hidden sm:block">
          <div className="text-2xl font-black" style={{ color: level.accent }}>{pct}%</div>
          <div className="text-[10px] text-white/30">{completed.length}/{allLessons.length} leçons</div>
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
  const [selectedLevel, setSelectedLevel] = useState(null);
  const progress = progressService.getProgress();

  if (selectedLevel) {
    const lvl = ALL_LEVELS.find(l => l.id === selectedLevel);
    return (
      <div className="min-h-screen pt-[68px]">
        <LevelDetail level={lvl} onBack={() => setSelectedLevel(null)} />
      </div>
    );
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
              Choisissez votre niveau — A1 et A2 disponibles. Leçons, Grammaire, Exercices, Jeux, Schreiben, Hören, Sprechen et IA dans chaque niveau.
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
                className={`relative flex flex-col p-5 rounded-3xl border text-left transition-all duration-200 ${lvl.unlocked ? 'card-hover cursor-pointer' : 'cursor-not-allowed opacity-40'}`}
                style={{
                  background: lvl.unlocked ? lvl.accentBg : 'rgba(255,255,255,0.02)',
                  borderColor: lvl.unlocked ? lvl.accentBorder : 'rgba(255,255,255,0.06)',
                }}
              >
                {/* Lock / progress badge */}
                <div className="absolute top-3 right-3">
                  {!lvl.unlocked ? (
                    <span className="text-[9px] font-extrabold tracking-widest px-2 py-0.5 rounded-full bg-white/5 text-white/20 border border-white/8">SOON</span>
                  ) : pct > 0 ? (
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full" style={{ background: lvl.accentBg, color: lvl.accent, border: `1px solid ${lvl.accentBorder}` }}>{pct}%</span>
                  ) : null}
                </div>

                {/* Level label */}
                <div className="text-4xl font-black mb-3 leading-none" style={{ color: lvl.unlocked ? lvl.accent : 'rgba(255,255,255,0.18)' }}>
                  {lvl.id}
                </div>

                <div className="font-bold text-sm mb-0.5" style={{ color: lvl.unlocked ? '#fff' : 'rgba(255,255,255,0.28)' }}>{lvl.name}</div>
                <div className="text-[11px] mb-3" style={{ color: lvl.unlocked ? lvl.accent : 'rgba(255,255,255,0.18)' }}>{lvl.nameDe}</div>
                <p className="text-[11px] leading-relaxed flex-1" style={{ color: lvl.unlocked ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.18)' }}>{lvl.desc}</p>

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
