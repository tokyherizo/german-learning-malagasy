import { useState } from 'react';
import { getAllExercises, getExercisesByLevel } from '../data/exercises';
import { progressService } from '../services/progress';
import ProgressBar from '../components/ProgressBar';

const LEVELS = ['Rehetra', 'A1', 'A2'];

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
    <div className="glass-card p-6 md:p-7 border-purple-400/12">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className={`text-xs px-2.5 py-1 rounded-full font-bold border ${
            exercise.level === 'A1'
              ? 'bg-indigo-500/12 border-indigo-400/28 text-indigo-400'
              : 'bg-violet-500/12 border-violet-400/28 text-violet-400'
          }`}>{exercise.level}</span>
          <span className="text-xs text-white/30 bg-white/4 px-2 py-0.5 rounded-full capitalize">{exercise.type?.replace('_', ' ')}</span>
        </div>
        <span className="text-xs font-bold text-indigo-400">+{exercise.xp || 10} XP</span>
      </div>

      {/* Question */}
      <h3 className="font-bold text-white text-sm md:text-base leading-relaxed mb-5">{exercise.question}</h3>

      {/* Options */}
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

      {/* Explanation */}
      {selected !== null && (
        <div className={`mt-4 p-4 rounded-xl text-sm leading-relaxed animate-fade-up ${
          isCorrect
            ? 'bg-green-500/8 border border-green-400/20 text-green-300/90'
            : 'bg-sky-500/10 border border-sky-400/22 text-sky-300/90'
        }`}>
          <span className="font-bold mr-2">{isCorrect ? '✅ Marina!' : '❌ Diso!'}</span>
          {exercise.explanation}
        </div>
      )}
    </div>
  );
};

const Exercises = () => {
  const [level, setLevel] = useState('Rehetra');
  const [answered, setAnswered] = useState({});
  const [sessionStats, setSessionStats] = useState({ correct: 0, total: 0 });
  const [progress, setProgress] = useState(() => progressService.getProgress());

  const exercises = level === 'Rehetra'
    ? getAllExercises()
    : getExercisesByLevel(level);

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
    <div className="min-h-screen pt-[68px]">
      {/* Header */}
      <section className="relative py-12 border-b border-white/6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.04),transparent_60%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-5xl font-black mb-2">
                <span className="text-white">Fanazaran-tsaina /</span>{' '}
                <span className="text-grad">Übungen</span>
              </h1>
              <p className="text-white/40 text-sm">Valiana ny fanontaniana — manavao ny fahatakaranao</p>
            </div>

            {/* Session stats */}
            {sessionStats.total > 0 && (
              <div className="flex items-center gap-4 bg-white/3 border border-white/8 rounded-2xl px-5 py-3">
                <div className="text-center">
                  <div className="text-xl font-black text-indigo-400">{sessionStats.total}</div>
                  <div className="text-[10px] text-white/35 uppercase tracking-wide">Valiana</div>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="text-center">
                  <div className="text-xl font-black text-green-400">{sessionStats.correct}</div>
                  <div className="text-[10px] text-white/35 uppercase tracking-wide">Marina</div>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="text-center">
                  <div className={`text-xl font-black ${accuracy >= 70 ? 'text-green-400' : accuracy >= 50 ? 'text-violet-400' : 'text-sky-400'}`}>{accuracy}%</div>
                  <div className="text-[10px] text-white/35 uppercase tracking-wide">Fahamarinana</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Overall progress */}
        {progress && (
            <div className="glass-card p-5 mb-8 border-indigo-400/14">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {[
                { label: 'XP Total', value: progress.stats.totalXP, color: 'text-indigo-400' },
                { label: 'Fanazaran', value: progress.stats.exercisesCompleted, color: 'text-violet-400' },
                { label: 'Marina', value: `${progressService.getAccuracyRate()}%`, color: 'text-green-400' },
                { label: 'Streak', value: `🔥 ${progress.streak}`, color: 'text-sky-400' },
              ].map(({ label, value, color }) => (
                <div key={label} className="text-center bg-white/3 rounded-xl p-3">
                  <div className={`text-xl font-black ${color}`}>{value}</div>
                  <div className="text-[10px] text-white/35 uppercase tracking-wide mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Level filter */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {LEVELS.map(l => (
            <button key={l} onClick={() => setLevel(l)}
              className={`px-5 py-2 rounded-xl border text-sm font-semibold transition-all duration-200 ${
                level === l
                  ? l === 'A1'
                    ? 'bg-indigo-500/17 border-indigo-400/32 text-indigo-400'
                      : l === 'A2'
                        ? 'bg-violet-500/17 border-violet-400/32 text-violet-400'
                      : 'bg-white/10 border-white/25 text-white'
                  : 'bg-white/3 border-white/8 text-white/50 hover:bg-white/6 hover:text-white/80'
              }`}>
              {l === 'Rehetra' ? '🌐 ' : l === 'A1' ? '🌱 ' : '🔥 '}{l}
              <span className="ml-1.5 text-xs opacity-60">
                ({l === 'Rehetra' ? getAllExercises().length : getExercisesByLevel(l).length})
              </span>
            </button>
          ))}
        </div>

        {/* Progress bar */}
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
        <div className="grid gap-5">
          {exercises.map(ex => (
            <ExerciseCard
              key={ex.id}
              exercise={ex}
              answered={!!answered[ex.id]}
              onAnswer={(ok) => handleAnswer(ex.id, ok)}
            />
          ))}
        </div>

        {/* All done message */}
        {answeredCount === exercises.length && exercises.length > 0 && (
          <div className="mt-10 glass-card p-8 text-center border-violet-400/22 animate-bounce-in glow-violet">
            <div className="text-5xl mb-4">
              {accuracy === 100 ? '🏆' : accuracy >= 70 ? '🎉' : '💪'}
            </div>
            <div className="text-2xl font-black animate-pulse-grad mb-2" style={{ color: 'var(--accent)' }}>
              {accuracy === 100 ? 'Tonga Lafatra!' : accuracy >= 70 ? 'Tsara Tokoa!' : 'Miezaha Indray!'}
            </div>
            <p className="text-white/50 text-sm mb-6">
              Nahazo {sessionStats.correct}/{sessionStats.total} ({accuracy}%) ianao an'ity fampiharana ity!
            </p>
            <button onClick={() => { setAnswered({}); setSessionStats({ correct: 0, total: 0 }); }}
              className="btn-grad px-8 py-3 rounded-2xl text-sm">
              Manao Indray
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Exercises;
