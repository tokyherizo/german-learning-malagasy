import { useState } from 'react';
import { getAllExercises, getExercisesByLevel } from '../data/exercises';
import { progressService } from '../services/progress';
import ProgressBar from '../components/ProgressBar';

const LEVELS = ['Rehetra', 'A1', 'A2'];

const TYPE_META = {
  multiple_choice: {
    label: 'Choix multiple',
    sub: 'Safidio ny valiny marina',
    symbol: '◉',
    color: '#818cf8',
    bg: 'rgba(129,140,248,0.10)',
    border: 'rgba(129,140,248,0.22)',
  },
  translation: {
    label: 'Traduction',
    sub: 'Adika amin\'ny teny malagasy',
    symbol: '⇌',
    color: '#f472b6',
    bg: 'rgba(244,114,182,0.10)',
    border: 'rgba(244,114,182,0.22)',
  },
  fill_blank: {
    label: 'Compléter la phrase',
    sub: 'Fenoy ny teny tsy hita',
    symbol: '▭',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.10)',
    border: 'rgba(52,211,153,0.22)',
  },
  matching: {
    label: 'Associer mot & image',
    sub: 'Ampifandraiso teny sy sary',
    symbol: '⟷',
    color: '#fb923c',
    bg: 'rgba(251,146,60,0.10)',
    border: 'rgba(251,146,60,0.22)',
  },
  quick_quiz: {
    label: 'Quiz rapide',
    sub: 'Valiana haingana!',
    symbol: '⚡',
    color: '#fbbf24',
    bg: 'rgba(251,191,36,0.10)',
    border: 'rgba(251,191,36,0.22)',
  },
};

/* ── Chip (matches Home design) ── */
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

const ExerciseCard = ({ exercise, onAnswer, answered }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (i) => {
    if (selected !== null || answered) return;
    setSelected(i);
    const ok = i === exercise.correct;
    progressService.completeExercise(exercise.id, ok, exercise.xp || 10);
    onAnswer(ok);
  };

  const isCorrect = selected === exercise.correct;

  return (
    <div
      style={{
        background: '#111',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 16,
        padding: '24px 28px',
        transition: 'border-color 0.15s',
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span
            className="text-xs px-2.5 py-1 rounded-full font-bold"
            style={{
              background: exercise.level === 'A1' ? 'rgba(129,140,248,0.12)' : 'rgba(167,139,250,0.12)',
              color: exercise.level === 'A1' ? '#818cf8' : '#a78bfa',
              border: `1px solid ${exercise.level === 'A1' ? 'rgba(129,140,248,0.25)' : 'rgba(167,139,250,0.25)'}`,
            }}
          >
            {exercise.level}
          </span>
          <span
            className="text-xs capitalize"
            style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.30)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 999, padding: '2px 8px' }}
          >
            {exercise.type?.replace('_', ' ')}
          </span>
        </div>
        <span className="text-xs font-bold" style={{ color: '#818cf8' }}>+{exercise.xp || 10} XP</span>
      </div>

      {/* Question */}
      <h3 className="font-bold text-white text-sm md:text-base leading-relaxed mb-5">{exercise.question}</h3>

      {/* Options — multiple choice / fill_blank / translation */}
      {exercise.type !== 'matching' && Array.isArray(exercise.options) && (
        <div className="grid gap-2.5">
          {exercise.options.map((opt, i) => (
            <button key={i} onClick={() => handleSelect(i)}
              disabled={selected !== null}
              className={`text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 ${
                selected === null
                  ? 'bg-white/3 border-white/8 text-white/70 hover:bg-white/7 hover:border-white/18 hover:text-white'
                  : selected === i
                    ? i === exercise.correct
                      ? 'bg-green-500/15 border-green-400/40 text-green-300'
                      : 'bg-sky-500/12 border-sky-400/30 text-sky-300'
                    : i === exercise.correct && selected !== null
                      ? 'bg-green-500/8 border-green-400/20 text-green-400/60'
                      : 'bg-white/2 border-white/5 text-white/25'
              }`}>
              <span className="mr-2.5 text-white/25 font-bold text-xs">{String.fromCharCode(65 + i)}.</span>
              {opt}
            </button>
          ))}
        </div>
      )}

      {/* Matching pairs */}
      {exercise.type === 'matching' && Array.isArray(exercise.pairs) && (
        <div>
          <div className="grid grid-cols-2 gap-2.5 mb-3">
            {exercise.pairs.map((pair, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl text-xs"
                style={{ background: 'rgba(251,146,60,0.07)', border: '1px solid rgba(251,146,60,0.18)' }}
              >
                <span className="font-bold" style={{ color: '#fb923c' }}>{pair.german}</span>
                <span style={{ color: 'rgba(255,255,255,0.28)' }}>⟷</span>
                <span style={{ color: 'rgba(255,255,255,0.70)' }}>{pair.malagasy}</span>
              </div>
            ))}
          </div>
          {selected === null && (
            <button
              onClick={() => { setSelected(0); progressService.completeExercise(exercise.id, true, exercise.xp || 20); onAnswer(true); }}
              className="w-full py-2.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ background: 'rgba(251,146,60,0.12)', border: '1px solid rgba(251,146,60,0.30)', color: '#fb923c' }}
            >
              Vita ny fampifandraisana ✓
            </button>
          )}
          {selected !== null && (
            <div
              className="mt-2 px-4 py-3 rounded-xl text-sm"
              style={{ background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.20)', color: 'rgba(134,239,172,0.90)' }}
            >
              <span className="font-bold mr-2">Marina!</span>Tsara kokoa ny fahatakaranao ny teny!
            </div>
          )}
        </div>
      )}

      {/* Explanation */}
      {selected !== null && exercise.type !== 'matching' && (
        <div
          className="mt-4 p-4 rounded-xl text-sm leading-relaxed"
          style={{
            background: isCorrect ? 'rgba(74,222,128,0.06)' : 'rgba(56,189,248,0.07)',
            border: `1px solid ${isCorrect ? 'rgba(74,222,128,0.20)' : 'rgba(56,189,248,0.22)'}`,
            color: isCorrect ? 'rgba(134,239,172,0.90)' : 'rgba(125,211,252,0.90)',
          }}
        >
          <span className="font-bold mr-2">{isCorrect ? 'Marina!' : 'Diso!'}</span>
          {exercise.explanation}
        </div>
      )}
    </div>
  );
};

const Exercises = () => {
  const [level, setLevel] = useState('Rehetra');
  const [typeFilter, setTypeFilter] = useState(null);
  const [answered, setAnswered] = useState({});
  const [sessionStats, setSessionStats] = useState({ correct: 0, total: 0 });
  const [progress, setProgress] = useState(() => progressService.getProgress());

  const baseExercises = level === 'Rehetra' ? getAllExercises() : getExercisesByLevel(level);
  const exercises = typeFilter
    ? baseExercises.filter(ex => ex.type === typeFilter)
    : baseExercises;

  const countByType = (type) => baseExercises.filter(ex => ex.type === type).length;

  const handleAnswer = (id, ok) => {
    setAnswered(prev => ({ ...prev, [id]: ok }));
    setSessionStats(prev => ({
      correct: prev.correct + (ok ? 1 : 0),
      total: prev.total + 1,
    }));
    setProgress(progressService.getProgress());
  };

  const answeredCount = Object.keys(answered).length;
  const accuracy = sessionStats.total > 0
    ? Math.round((sessionStats.correct / sessionStats.total) * 100)
    : 0;

  return (
    <div style={{ background: '#0d0d0d', minHeight: '100vh', paddingTop: '52px' }}>

      {/* ── Hero header ── */}
      <section
        className="relative py-14 overflow-hidden"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      >
        {/* Big decorative background word */}
        <div
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-black select-none pointer-events-none"
          style={{ fontSize: 'clamp(5rem,18vw,11rem)', color: 'rgba(255,255,255,0.03)', letterSpacing: '-0.04em', lineHeight: 1 }}
        >
          ÜBUNGEN
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-5xl font-black mb-2" style={{ letterSpacing: '-0.03em' }}>
                <span className="text-white">Fanazaran-tsaina /</span>{' '}
                <span className="text-grad">Übungen</span>
              </h1>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.40)' }}>
                Valiana ny fanontaniana — manavao ny fahatakaranao
              </p>
            </div>

            {/* Live session stats */}
            {sessionStats.total > 0 && (
              <div
                className="flex items-center gap-4 px-5 py-3 rounded-2xl"
                style={{ background: '#111', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                {[
                  { label: 'Valiana',      value: sessionStats.total,   color: '#818cf8' },
                  { label: 'Marina',       value: sessionStats.correct, color: '#4ade80' },
                  { label: 'Fahamarinana', value: `${accuracy}%`,       color: accuracy >= 70 ? '#4ade80' : accuracy >= 50 ? '#a78bfa' : '#38bdf8' },
                ].reduce((acc, stat, i) => [
                  ...acc,
                  ...(i > 0 ? [<div key={`d${i}`} className="w-px h-8" style={{ background: 'rgba(255,255,255,0.10)' }} />] : []),
                  <div key={stat.label} className="text-center">
                    <div className="text-xl font-black" style={{ color: stat.color }}>{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-wide" style={{ color: 'rgba(255,255,255,0.35)' }}>{stat.label}</div>
                  </div>,
                ], [])}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Sticky chip filter bar (matches Home) ── */}
      <div
        className="sticky z-40 px-6 py-3 no-scrollbar"
        style={{ top: '52px', background: 'rgba(13,13,13,0.96)', borderBottom: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(10px)' }}
      >
        {/* Level chips */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar mb-2">
          {LEVELS.map(l => {
            const count = l === 'Rehetra' ? getAllExercises().length : getExercisesByLevel(l).length;
            return (
              <Chip
                key={l}
                label={`${l} (${count})`}
                active={level === l}
                onClick={() => { setLevel(l); setTypeFilter(null); }}
              />
            );
          })}
        </div>
        {/* Type chips */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setTypeFilter(null)}
            className="shrink-0 px-3 py-1 rounded-full text-xs font-medium transition-all duration-150"
            style={{
              background: !typeFilter ? 'rgba(255,255,255,0.10)' : 'transparent',
              color: !typeFilter ? 'rgba(255,255,255,0.80)' : 'rgba(255,255,255,0.35)',
              border: !typeFilter ? '1px solid rgba(255,255,255,0.20)' : '1px solid rgba(255,255,255,0.07)',
            }}
          >
            Tous les types
          </button>
          {Object.entries(TYPE_META).map(([key, meta]) => (
            <button
              key={key}
              onClick={() => setTypeFilter(typeFilter === key ? null : key)}
              className="shrink-0 px-3 py-1 rounded-full text-xs font-medium transition-all duration-150"
              style={{
                background: typeFilter === key ? meta.bg : 'transparent',
                color: typeFilter === key ? meta.color : 'rgba(255,255,255,0.40)',
                border: typeFilter === key ? `1px solid ${meta.border}` : '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {meta.symbol} {meta.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Stats overview */}
        {progress && (
          <div
            className="mb-8 p-5 rounded-2xl"
            style={{ background: '#111', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'XP Total',  value: progress?.stats?.totalXP ?? 0,                         color: '#818cf8' },
                { label: 'Fanazaran', value: progress?.stats?.exercisesCompleted ?? 0,               color: '#a78bfa' },
                { label: 'Marina',    value: `${progressService.getAccuracyRate()}%`,                 color: '#4ade80' },
                { label: 'Streak',    value: `${progress?.streak ?? 0}j`,                            color: '#fb923c' },
              ].map(({ label, value, color }) => (
                <div key={label} className="text-center rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <div className="text-xl font-black" style={{ color }}>{value}</div>
                  <div className="text-[10px] uppercase tracking-wide mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Types d'exercices showcase ── */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-black text-white" style={{ letterSpacing: '-0.02em' }}>Types d&apos;exercices</h2>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.30)' }}>{Object.keys(TYPE_META).length} types</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {Object.entries(TYPE_META).map(([key, meta]) => {
              const count = countByType(key);
              const active = typeFilter === key;
              return (
                <button
                  key={key}
                  onClick={() => setTypeFilter(active ? null : key)}
                  className="relative text-left p-4 rounded-2xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: active ? meta.bg : '#111',
                    border: `1px solid ${active ? meta.border : 'rgba(255,255,255,0.07)'}`,
                    boxShadow: active ? `0 0 20px ${meta.bg}` : 'none',
                  }}
                >
                  {/* Symbol */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl font-bold mb-3"
                    style={{ background: meta.bg, color: meta.color, border: `1px solid ${meta.border}` }}
                  >
                    {meta.symbol}
                  </div>
                  {/* Label */}
                  <div className="text-xs font-bold text-white leading-tight mb-1">{meta.label}</div>
                  <div className="text-[10px] leading-snug mb-2" style={{ color: 'rgba(255,255,255,0.35)' }}>{meta.sub}</div>
                  {/* Count badge */}
                  <div
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold"
                    style={{ background: meta.bg, color: meta.color, border: `1px solid ${meta.border}` }}
                  >
                    {count} exercice{count !== 1 ? 's' : ''}
                  </div>
                  {/* Active indicator */}
                  {active && (
                    <div
                      className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full"
                      style={{ background: meta.color }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Session progress bar */}
        {answeredCount > 0 && (
          <div className="mb-6">
            <ProgressBar
              value={answeredCount}
              max={exercises.length}
              label={`${answeredCount}/${exercises.length} Vita`}
              color="purple"
              size="medium"
            />
          </div>
        )}

        {/* Exercise cards */}
        <div className="grid gap-4">
          {exercises.map(ex => (
            <ExerciseCard
              key={ex.id}
              exercise={ex}
              answered={!!answered[ex.id]}
              onAnswer={(ok) => handleAnswer(ex.id, ok)}
            />
          ))}
        </div>

        {/* All done — big bold text instead of emoji */}
        {answeredCount === exercises.length && exercises.length > 0 && (
          <div
            className="mt-10 rounded-3xl p-10 text-center"
            style={{ background: '#111', border: '1px solid rgba(255,255,255,0.10)' }}
          >
            <div
              className="font-black leading-none mb-4 select-none"
              style={{
                fontSize: 'clamp(4rem,14vw,8rem)',
                color: accuracy >= 70 ? 'rgba(74,222,128,0.15)' : 'rgba(56,189,248,0.12)',
                letterSpacing: '-0.04em',
                marginBottom: '0.5rem',
              }}
            >
              {accuracy === 100 ? 'TOP!' : accuracy >= 70 ? 'GUT!' : 'OK!'}
            </div>
            <div className="text-2xl font-black text-white mb-2">
              {accuracy === 100 ? 'Tonga Lafatra!' : accuracy >= 70 ? 'Tsara Tokoa!' : 'Miezaha Indray!'}
            </div>
            <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.50)' }}>
              Nahazo {sessionStats.correct}/{sessionStats.total} ({accuracy}%) ianao an&apos;ity fampiharana ity!
            </p>
            <button
              onClick={() => { setAnswered({}); setSessionStats({ correct: 0, total: 0 }); }}
              className="px-8 py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ background: '#fff', color: '#0d0d0d' }}
            >
              Manao Indray
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Exercises;
