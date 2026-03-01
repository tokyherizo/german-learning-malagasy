import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getLessonById } from '../data/lessons';
import { getExercisesByLesson } from '../data/exercises';
import { progressService } from '../services/progress';
import ProgressBar from '../components/ProgressBar';

/* ── Section renderers ── */
const IntroSection = ({ section }) => (
  <div className="glass-card p-6 md:p-8 border-indigo-400/18">
    <h3 className="text-xl font-black text-indigo-400 mb-3">{section.title}</h3>
    <p className="text-white/70 leading-relaxed mb-2">{section.content}</p>
    {section.contentDe && (
      <p className="text-white/35 italic text-sm leading-relaxed border-t border-white/5 pt-3">{section.contentDe}</p>
    )}
  </div>
);

const GrammarSection = ({ section }) => (
  <div className="glass-card p-6 md:p-8 border-violet-400/18">
    <h3 className="text-xl font-black text-violet-400 mb-5">{section.title}</h3>
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/8">
            <th className="text-left py-2 pr-4 text-white/40 font-medium text-xs uppercase tracking-wide">Pronomen</th>
            <th className="text-left py-2 pr-4 text-white/40 font-medium text-xs uppercase tracking-wide">Verb</th>
            <th className="text-left py-2 text-white/40 font-medium text-xs uppercase tracking-wide">Malagasy</th>
          </tr>
        </thead>
        <tbody>
          {section.items?.map((item, i) => (
            <tr key={i} className="border-b border-white/4 hover:bg-white/3 transition-colors">
              <td className="py-2.5 pr-4 font-bold text-indigo-400">{item.pronoun}</td>
              <td className="py-2.5 pr-4 font-bold text-white">{item.verb}</td>
              <td className="py-2.5 text-white/55 italic">{item.meaning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const DialogueSection = ({ section }) => (
  <div className="glass-card p-6 md:p-8 border-indigo-400/18">
    <h3 className="text-xl font-black text-indigo-400 mb-5">{section.title}</h3>
    <div className="flex flex-col gap-3">
      {section.lines?.map((line, i) => (
        <div key={i} className={`flex gap-3 ${i % 2 === 1 ? 'flex-row-reverse' : ''}`}>
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold text-white/60 shrink-0">
            {line.speaker}
          </div>
          <div className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm ${
            i % 2 === 0
              ? 'bg-indigo-500/12 border border-indigo-400/22 rounded-tl-none'
              : 'bg-violet-500/12 border border-violet-400/22 rounded-tr-none'
          }`}>
            <p className="font-semibold text-white mb-0.5">{line.text}</p>
            <p className="text-white/45 italic text-xs">{line.translation}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const VocabSection = ({ section }) => (
  <div className="glass-card p-6 md:p-8 border-indigo-400/18">
    <h3 className="text-xl font-black text-indigo-400 mb-5">{section.title}</h3>
    <div className="grid sm:grid-cols-2 gap-3">
      {section.words?.map((word, i) => (
        <div key={i} className="flex flex-col gap-1 bg-white/3 rounded-xl p-3.5 border border-white/6 hover:border-indigo-400/25 transition-colors">
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-white">{word.german}</span>
            <span className="text-indigo-400 text-xs">→</span>
            <span className="text-violet-400 text-sm font-medium">{word.malagasy}</span>
          </div>
          <p className="text-xs text-white/35 italic">{word.example}</p>
        </div>
      ))}
    </div>
  </div>
);

const NumberTableSection = ({ section }) => (
  <div className="glass-card p-6 md:p-8 border-indigo-400/18">
    <h3 className="text-xl font-black text-indigo-400 mb-5">{section.title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
      {section.numbers?.map((n, i) => (
        <div key={i} className="flex flex-col items-center bg-white/3 rounded-xl p-3 border border-white/6 hover:border-indigo-400/22 transition-colors text-center">
          <span className="text-2xl font-black text-indigo-400">{n.number}</span>
          <span className="text-sm font-bold text-white mt-1">{n.german}</span>
          <span className="text-xs text-white/40 mt-0.5">{n.malagasy}</span>
        </div>
      ))}
    </div>
  </div>
);

const TipSection = ({ section }) => (
  <div className="flex gap-3 rounded-2xl p-5" style={{ background: 'rgba(99,102,241,0.07)', border: '1px solid rgba(99,102,241,0.20)' }}>
    <span className="text-2xl shrink-0">💡</span>
    <div>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--accent-violet)' }}>{section.text}</p>
      {section.textDe && (
        <p className="text-xs italic mt-2 leading-relaxed" style={{ color: 'var(--text-muted)' }}>{section.textDe}</p>
      )}
    </div>
  </div>
);

const renderSection = (section, i) => {
  const map = {
    intro:        <IntroSection key={i} section={section} />,
    grammar:      <GrammarSection key={i} section={section} />,
    dialogue:     <DialogueSection key={i} section={section} />,
    vocabulary:   <VocabSection key={i} section={section} />,
    number_table: <NumberTableSection key={i} section={section} />,
    tip:          <TipSection key={i} section={section} />,
  };
  return map[section.type] || null;
};

/* ── mini Quiz ── */
const MiniQuiz = ({ exercises, onComplete }) => {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);

  const q = exercises[idx];

  const handleAnswer = (i) => {
    if (selected !== null) return;
    setSelected(i);
    const isOk = i === q.correct;
    if (isOk) setCorrect(c => c + 1);
    progressService.completeExercise(q.id, isOk, q.xp || 10);
    setTimeout(() => {
      if (idx < exercises.length - 1) {
        setIdx(i2 => i2 + 1);
        setSelected(null);
      } else {
        setDone(true);
        if (onComplete) onComplete(correct + (isOk ? 1 : 0));
      }
    }, 1200);
  };

  if (done) return (
    <div className="text-center py-8">
      <div className="text-5xl mb-4">{correct === exercises.length ? '🏆' : correct >= exercises.length / 2 ? '👏' : '💪'}</div>
      <div className="text-2xl font-black text-white mb-2">{correct}/{exercises.length} Marina!</div>
      <p className="text-white/45 text-sm">Vita ny fanazaran-tsaina!</p>
    </div>
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <span className="text-sm text-white/40">Fanontaniana {idx + 1}/{exercises.length}</span>
        <span className="text-sm font-bold text-indigo-400">+{q.xp || 10} XP</span>
      </div>
      <ProgressBar value={idx} max={exercises.length} showPercentage={false} color="indigo" size="small" className="mb-6" />
      <h4 className="font-bold text-white text-base mb-5 leading-relaxed">{q.question}</h4>
      <div className="grid gap-2.5">
        {q.options.map((opt, i) => (
          <button key={i} onClick={() => handleAnswer(i)}
            disabled={selected !== null}
            className={`text-left px-4 py-3.5 rounded-xl border text-sm font-medium transition-all duration-200 ${
              selected === null
                ? 'bg-white/3 border-white/10 text-white/70 hover:bg-white/7 hover:border-white/20 hover:text-white'
                : selected === i
                  ? i === q.correct
                    ? 'bg-green-500/15 border-green-400/40 text-green-300'
                    : 'bg-sky-500/12 border-sky-400/30 text-sky-300'
                  : i === q.correct
                    ? 'bg-green-500/10 border-green-400/25 text-green-400/70'
                    : 'bg-white/2 border-white/5 text-white/30'
            }`}>
            <span className="mr-2 text-white/30 font-bold">{String.fromCharCode(65 + i)}.</span>
            {opt}
          </button>
        ))}
      </div>
      {selected !== null && (
        <div className={`mt-4 p-4 rounded-xl text-sm leading-relaxed ${
          selected === q.correct
            ? 'bg-green-500/10 border border-green-400/20 text-green-300'
            : 'bg-sky-500/10 border border-sky-400/22 text-sky-300'
        }`}>
          <span className="font-bold mr-2">{selected === q.correct ? '✅ Marina!' : '❌ Diso!'}</span>
          {q.explanation}
        </div>
      )}
    </div>
  );
};

/* ── Main Lesson page ── */
const Lesson = () => {
  const { id } = useParams();
  const lesson = getLessonById(id);
  const exercises = getExercisesByLesson(id);
  const [progress, setProgress] = useState(() => progressService.getProgress());
  const [tab, setTab] = useState('lesson');
  const [completed, setCompleted] = useState(false);
  const [xpGained, setXpGained] = useState(0);

  if (!lesson) return (
    <div className="min-h-screen pt-[68px] flex items-center justify-center">
      <div className="text-center">
        <div className="text-5xl mb-4">😕</div>
        <p className="text-white/50 mb-4">Lesona tsy hita</p>
        <Link to="/levels" style={{ color: 'var(--accent)' }} className="hover:underline">← Hiverina</Link>
      </div>
    </div>
  );

  const isAlreadyDone = progress.completedLessons.includes(lesson.id);

  const handleComplete = () => {
    const newProgress = progressService.completeLesson(lesson.id, lesson.xp);
    setProgress(newProgress);
    setXpGained(lesson.xp);
    setCompleted(true);
  };

  const colorMap = {
    '#FF6B6B': { badge: 'bg-sky-500/15 border-sky-400/25 text-sky-400',       tab: 'text-sky-400 border-sky-400' },
    '#4ECDC4': { badge: 'bg-indigo-500/15 border-indigo-400/25 text-indigo-400', tab: 'text-indigo-400 border-indigo-400' },
    '#FFE66D': { badge: 'bg-violet-500/15 border-violet-400/25 text-violet-400', tab: 'text-violet-400 border-violet-400' },
    '#A8E6CF': { badge: 'bg-green-500/15 border-green-400/25 text-green-400',   tab: 'text-green-400 border-green-400' },
    '#FF8B94': { badge: 'bg-pink-500/15 border-pink-400/25 text-pink-400',       tab: 'text-pink-400 border-pink-400' },
    '#B8B8FF': { badge: 'bg-violet-500/15 border-violet-400/25 text-violet-400', tab: 'text-violet-400 border-violet-400' },
  };
  const colors = colorMap[lesson.color] || colorMap['#4ECDC4'];

  return (
    <div className="min-h-screen pt-[68px]">
      {/* Header */}
      <div className="border-b" style={{ background: 'var(--bg-surface)', borderColor: 'var(--border-card)' }}>
        <div className="max-w-3xl mx-auto px-6 py-6">
    <Link to="/levels" className="inline-flex items-center gap-1.5 text-sm hover:opacity-80 mb-4 transition-opacity" style={{ color: 'var(--text-muted)' }}>
            ← Hiverina / Zurück
          </Link>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border ${colors.badge}`}>
                {lesson.icon}
              </div>
              <div>
                <div className="text-xs text-white/30 uppercase tracking-widest mb-0.5">
                  {lesson.level} • Lesona {lesson.number}
                </div>
                <h1 className="text-xl md:text-2xl font-black text-white leading-tight">{lesson.title}</h1>
                <p className="text-sm text-white/40 mt-0.5">{lesson.subtitle}</p>
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className={`text-lg font-black ${colors.tab.split(' ')[0]}`}>+{lesson.xp} XP</div>
              <div className="text-xs text-white/30">{lesson.duration}</div>
              {isAlreadyDone && <div className="text-xs text-green-400 mt-1">✅ Vita</div>}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* XP Banner */}
        {completed && (
          <div className="animate-bounce-in mb-6 rounded-2xl p-5 text-center" style={{ background: 'rgba(99,102,241,0.10)', border: '1px solid rgba(99,102,241,0.25)' }}>
            <div className="text-3xl mb-2">🎉</div>
            <div className="text-xl font-black text-indigo-400">+{xpGained} XP Nahazo!</div>
            <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>Vita tsara ny lesona!</p>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-1 mb-8 bg-white/3 border border-white/8 rounded-2xl p-1">
          {[
            { key: 'lesson', label: '📖 Lesona', count: null },
            { key: 'quiz',   label: '✏️ Quiz',   count: exercises.length },
          ].map(t => (
            <button key={t.key} onClick={() => setTab(t.key)}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                tab === t.key
                  ? 'bg-white/8 text-white shadow-sm'
                  : 'text-white/40 hover:text-white/65'
              }`}>
              {t.label}
              {t.count != null && (
                <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                  tab === t.key ? 'bg-indigo-400/22 text-indigo-400' : 'bg-white/8 text-white/30'
                }`}>{t.count}</span>
              )}
            </button>
          ))}
        </div>

        {/* Lesson content */}
        {tab === 'lesson' && (
          <div className="flex flex-col gap-5">
            {lesson.sections?.map((section, i) => renderSection(section, i))}

            {!isAlreadyDone && !completed && (
              <button onClick={handleComplete}
                className="btn-grad w-full py-4 rounded-2xl text-base mt-4">
                Vita Lesona — Hahazo {lesson.xp} XP
              </button>
            )}

            {(isAlreadyDone || completed) && exercises.length > 0 && (
              <button onClick={() => setTab('quiz')}
                className="w-full py-4 bg-white/5 border border-white/15 hover:bg-white/10 text-white font-semibold rounded-2xl text-sm transition-all mt-2">
                ✏️ Manao Quiz ({exercises.length} fanontaniana)
              </button>
            )}
          </div>
        )}

        {/* Quiz */}
        {tab === 'quiz' && (
          <div className="glass-card p-6 md:p-8 border-violet-400/18">
            <h3 className="text-lg font-black text-violet-400 mb-6">
              Quiz — {lesson.title}
            </h3>
            {exercises.length > 0
              ? <MiniQuiz exercises={exercises} onComplete={() => {}} />
              : (
                <div className="text-center py-8 text-white/40">
                  <div className="text-4xl mb-3">📝</div>
                  <p>Tsy misy fanazaran-tsaina amin'ity lesona ity</p>
                </div>
              )
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default Lesson;
