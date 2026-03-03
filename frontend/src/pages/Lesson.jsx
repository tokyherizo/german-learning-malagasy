import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getLessonById } from '../data/lessons';
import { getExercisesByLesson } from '../data/exercises';
import { progressService } from '../services/progress';
import ProgressBar from '../components/ProgressBar';
import AudioWord from '../components/AudioWord';

/* ── Section type label badge (replaces emoji icon) ── */
const SectionBadge = ({ accent = '#f1e063', label }) => (
  <div
    className="text-[10px] font-black px-2 py-0.5 rounded-md shrink-0"
    style={{ background: `${accent}20`, color: accent, border: `1px solid ${accent}35` }}
  >
    {label}
  </div>
);

/* ── Card wrapper ── */
const SectionCard = ({ accent = '#6366f1', label, title, children }) => (
  <div
    className="relative overflow-hidden rounded-3xl"
    style={{
      background: '#111',
      border: `1.5px solid ${accent}20`,
    }}
  >
    {/* Left accent strip */}
    <div className="absolute top-0 left-0 bottom-0 w-[3px] rounded-l-3xl" style={{ background: `linear-gradient(to bottom, ${accent}bb, ${accent}18)` }} />

    {/* Header */}
    <div className="flex items-center gap-3 px-6 pt-5 pb-4">
      <SectionBadge accent={accent} label={label} />
      <h3 className="text-base font-black tracking-tight" style={{ color: accent }}>{title}</h3>
    </div>
    <div className="px-6 pb-6">{children}</div>
  </div>
);

const IntroSection = ({ section }) => (
  <SectionCard accent="#60a5fa" label="Intro" title={section.title}>
    <p className="text-white/75 leading-relaxed mb-2">{section.content}</p>
    {section.contentDe && (
      <p className="text-white/35 italic text-sm leading-relaxed border-t border-white/6 pt-3 mt-3">{section.contentDe}</p>
    )}
  </SectionCard>
);

const GrammarSection = ({ section }) => (
  <SectionCard accent="#a78bfa" label="Grammaire" title={section.title}>
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr style={{ borderBottom: '1px solid rgba(167,139,250,0.15)' }}>
            <th className="text-left py-2 pr-4 font-bold text-[11px] uppercase tracking-[2px]" style={{ color: 'rgba(167,139,250,0.55)' }}>Pronomen</th>
            <th className="text-left py-2 pr-4 font-bold text-[11px] uppercase tracking-[2px]" style={{ color: 'rgba(167,139,250,0.55)' }}>Verb</th>
            <th className="text-left py-2 font-bold text-[11px] uppercase tracking-[2px]" style={{ color: 'rgba(167,139,250,0.55)' }}>English</th>
          </tr>
        </thead>
        <tbody>
          {section.items?.map((item, i) => (
            <tr key={i} className="group transition-colors hover:bg-white/3" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
              <td className="py-3 pr-4">
                <span className="inline-block px-2.5 py-0.5 rounded-lg text-xs font-black" style={{ background: 'rgba(99,102,241,0.18)', color: '#818cf8' }}>{item.pronoun}</span>
              </td>
              <td className="py-3 pr-4 font-black text-white">{item.verb}</td>
              <td className="py-3 text-sm italic" style={{ color: 'rgba(167,139,250,0.70)' }}>{item.meaning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </SectionCard>
);

const DialogueSection = ({ section }) => (
  <SectionCard accent="#38bdf8" label="Dialogue" title={section.title}>
    <div className="flex flex-col gap-3.5">
      {section.lines?.map((line, i) => (
        <div key={i} className={`flex gap-3 items-end ${i % 2 === 1 ? 'flex-row-reverse' : ''}`}>
          <div
            className="w-9 h-9 rounded-2xl flex items-center justify-center text-xs font-black shrink-0"
            style={{
              background: i % 2 === 0
                ? 'linear-gradient(135deg, rgba(59,130,246,0.40), rgba(99,102,241,0.30))'
                : 'linear-gradient(135deg, rgba(124,58,237,0.40), rgba(167,139,250,0.30))',
              border: i % 2 === 0 ? '1px solid rgba(59,130,246,0.35)' : '1px solid rgba(167,139,250,0.35)',
              color: '#fff',
            }}
          >
            {line.speaker}
          </div>
          <div
            className={`max-w-[75%] px-4 py-3 text-sm ${ i % 2 === 0 ? 'rounded-2xl rounded-bl-sm' : 'rounded-2xl rounded-br-sm' }`}
            style={{
              background: i % 2 === 0
                ? 'linear-gradient(135deg, rgba(59,130,246,0.12), rgba(99,102,241,0.08))'
                : 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(167,139,250,0.08))',
              border: i % 2 === 0 ? '1px solid rgba(59,130,246,0.22)' : '1px solid rgba(167,139,250,0.22)',
            }}
          >
            <p className="font-semibold text-white mb-1">{line.text}</p>
            <p className="text-[11px] italic" style={{ color: 'rgba(180,190,230,0.50)' }}>{line.translation}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionCard>
);

const VocabSection = ({ section }) => (
  <SectionCard accent="#818cf8" label="Vocabulaire" title={section.title}>
    <div className="grid sm:grid-cols-2 gap-3">
      {section.words?.map((word, i) => (
        <div
          key={i}
          className="group relative overflow-hidden flex flex-col gap-1.5 rounded-2xl p-4 transition-all duration-200 cursor-default"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(99,102,241,0.14)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(99,102,241,0.08)'; e.currentTarget.style.borderColor = 'rgba(99,102,241,0.32)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(99,102,241,0.14)'; }}
        >
          <div className="absolute top-0 right-0 w-16 h-16 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.15), transparent 70%)', transform: 'translate(30%, -30%)' }} />
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-black text-white text-sm">{word.german}</span>
            <span className="text-[10px] font-black px-1.5 py-0.5 rounded-md" style={{ background: 'rgba(96,165,250,0.15)', color: '#60a5fa' }}>DE</span>
            <AudioWord word={word.german} />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-px" style={{ background: 'rgba(167,139,250,0.55)' }} />
            <span className="font-semibold text-sm" style={{ color: '#a78bfa' }}>{word.english}</span>
            <span className="text-[10px] font-black px-1.5 py-0.5 rounded-md" style={{ background: 'rgba(167,139,250,0.15)', color: '#a78bfa' }}>EN</span>
          </div>
          {word.example && <p className="text-[11px] italic mt-0.5" style={{ color: 'rgba(180,190,230,0.38)' }}>{word.example}</p>}
        </div>
      ))}
    </div>
  </SectionCard>
);

const NumberTableSection = ({ section }) => (
  <SectionCard accent="#34d399" label="Zahlen" title={section.title}>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
      {section.numbers?.map((n, i) => (
        <div
          key={i}
          className="flex flex-col items-center rounded-2xl p-3.5 text-center transition-all duration-200 cursor-default"
          style={{ background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.16)' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(52,211,153,0.13)'; e.currentTarget.style.borderColor = 'rgba(52,211,153,0.35)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(52,211,153,0.06)'; e.currentTarget.style.borderColor = 'rgba(52,211,153,0.16)'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          <span className="text-2xl font-black" style={{ color: '#34d399' }}>{n.number}</span>
          <span className="text-sm font-bold text-white mt-1">{n.german}</span>
          <span className="text-[11px] mt-0.5" style={{ color: 'rgba(180,190,230,0.45)' }}>{n.english}</span>
        </div>
      ))}
    </div>
  </SectionCard>
);

const StorySection = ({ section }) => {
  const [openIdx, setOpenIdx] = useState(null);
  const toggle = (i) => setOpenIdx(prev => prev === i ? null : i);
  return (
    <SectionCard title={section.title || 'Reading / Lecture'} accent="#34d399" label="Lecture">
      {section.level && (
        <span
          className="inline-block text-[9px] font-extrabold tracking-widest px-2 py-0.5 rounded mb-4"
          style={{ background: 'rgba(52,211,153,0.15)', color: '#34d399', border: '1px solid rgba(52,211,153,0.25)' }}
        >{section.level} — Lesen</span>
      )}

      {/* Story paragraphs */}
      <div className="space-y-4 mb-6">
        {section.paragraphs?.map((para, i) => (
          <div key={i} className="rounded-2xl overflow-hidden border" style={{ borderColor: 'rgba(52,211,153,0.14)' }}>
            <div className="px-5 py-4" style={{ background: 'rgba(52,211,153,0.05)' }}>
              <p className="text-sm leading-relaxed text-white/90">{para.text}</p>
            </div>
            {para.translation && (
              <div>
                <button
                  onClick={() => toggle(i)}
                  className="w-full text-left px-5 py-2 text-[10px] font-bold tracking-widest transition-colors"
                  style={{ color: openIdx === i ? '#34d399' : 'rgba(52,211,153,0.45)', background: 'transparent', border: 'none' }}
                >
                  {openIdx === i ? '▲ HIDE TRANSLATION' : '▼ SHOW TRANSLATION'}
                </button>
                {openIdx === i && (
                  <div className="px-5 pb-4 text-xs italic" style={{ color: 'rgba(52,211,153,0.70)' }}>
                    {para.translation}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Vocabulary from story */}
      {section.vocabulary?.length > 0 && (
        <div>
          <div className="text-[10px] font-extrabold tracking-widest uppercase mb-3" style={{ color: '#34d399' }}>Key Vocabulary</div>
          <div className="grid sm:grid-cols-2 gap-2">
            {section.vocabulary.map((w, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl px-4 py-3" style={{ background: 'rgba(52,211,153,0.05)', border: '1px solid rgba(52,211,153,0.12)' }}>
                <div className="shrink-0 mt-0.5">
                  <div className="text-xs font-bold text-white/85">{w.german}</div>
                  <div className="text-[11px] text-white/45">{w.english}</div>
                </div>
                {w.example && (
                  <div className="text-[11px] italic text-white/30 mt-0.5">{w.example}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </SectionCard>
  );
};

const TipSection = ({ section }) => (
  <div
    className="relative overflow-hidden rounded-3xl flex gap-4 p-5"
    style={{ background: 'rgba(251,191,36,0.06)', border: '1.5px solid rgba(251,191,36,0.20)' }}
  >
    {/* Label badge instead of emoji */}
    <div
      className="text-[10px] font-black px-2 py-1 rounded-lg shrink-0 self-start mt-0.5"
      style={{ background: 'rgba(251,191,36,0.18)', color: '#fbbf24', border: '1px solid rgba(251,191,36,0.28)' }}
    >
      Tipp
    </div>
    <div>
      <p className="text-sm font-semibold leading-relaxed" style={{ color: 'rgba(253,230,138,0.88)' }}>{section.text}</p>
      {section.textDe && (
        <p className="text-xs italic mt-2 leading-relaxed" style={{ color: 'rgba(253,230,138,0.45)' }}>{section.textDe}</p>
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
    story_text:   <StorySection key={i} section={section} />,
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
      <div
        className="font-black leading-none mb-3 select-none"
        style={{ fontSize: 'clamp(3rem,10vw,5rem)', color: correct === exercises.length ? 'rgba(74,222,128,0.20)' : 'rgba(129,140,248,0.20)', letterSpacing: '-0.04em' }}
      >
        {correct === exercises.length ? 'TOP!' : correct >= exercises.length / 2 ? 'GUT!' : 'OK!'}
      </div>
      <div className="text-2xl font-black text-white mb-2">{correct}/{exercises.length} Correct !</div>
      <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>Quiz terminé !</p>
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
          <span className="font-bold mr-2">{selected === q.correct ? '✅ Bravo !' : '❌ Incorrect !'}</span>
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
    <div className="min-h-screen flex items-center justify-center" style={{ paddingTop: '52px', background: '#0d0d0d' }}>
      <div className="text-center">
        <div
          className="font-black leading-none mb-4 select-none"
          style={{ fontSize: 'clamp(3rem,10vw,5rem)', color: 'rgba(255,255,255,0.06)', letterSpacing: '-0.04em' }}
        >
          404
        </div>
        <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.50)' }}>Lesson not found</p>
        <Link to="/levels" style={{ color: 'var(--accent)' }} className="hover:underline text-sm">← Back to levels</Link>
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
    <div className="min-h-screen" style={{ background: '#0d0d0d', paddingTop: '52px' }}>

      {/* ── Lesson header ── */}
      <div style={{ background: '#111', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="max-w-3xl mx-auto px-6 py-6">
          <Link
            to="/levels"
            className="inline-flex items-center gap-1.5 text-sm hover:opacity-80 mb-4 transition-opacity"
            style={{ color: 'rgba(255,255,255,0.40)' }}
          >
            ← Back / Zurück
          </Link>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              {/* Text-based level+number badge instead of emoji */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center font-black shrink-0"
                style={{
                  background: colors.badge.includes('indigo') ? 'rgba(129,140,248,0.10)' : colors.badge.includes('violet') ? 'rgba(167,139,250,0.10)' : colors.badge.includes('sky') ? 'rgba(56,189,248,0.10)' : 'rgba(74,222,128,0.10)',
                  border: `1px solid ${colors.badge.includes('indigo') ? 'rgba(129,140,248,0.25)' : colors.badge.includes('violet') ? 'rgba(167,139,250,0.25)' : colors.badge.includes('sky') ? 'rgba(56,189,248,0.25)' : 'rgba(74,222,128,0.25)'}`,
                  color: colors.badge.includes('indigo') ? '#818cf8' : colors.badge.includes('violet') ? '#a78bfa' : colors.badge.includes('sky') ? '#38bdf8' : '#4ade80',
                  fontSize: '1.1rem',
                  lineHeight: 1,
                  textAlign: 'center',
                }}
              >
                {lesson.level}
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest mb-0.5" style={{ color: 'rgba(255,255,255,0.30)' }}>
                  {lesson.level} • Lesson {lesson.number}
                </div>
                <h1 className="text-xl md:text-2xl font-black text-white leading-tight">{lesson.title}</h1>
                <p className="text-sm mt-0.5" style={{ color: 'rgba(255,255,255,0.40)' }}>{lesson.subtitle}</p>
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-lg font-black" style={{ color: colors.badge.includes('indigo') ? '#818cf8' : colors.badge.includes('violet') ? '#a78bfa' : '#38bdf8' }}>
                +{lesson.xp} XP
              </div>
              <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.30)' }}>{lesson.duration}</div>
              {isAlreadyDone && <div className="text-xs text-green-400 mt-1">Done ✓</div>}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* XP Banner — no emoji */}
        {completed && (
          <div
            className="mb-6 rounded-2xl p-5 text-center"
            style={{ background: 'rgba(129,140,248,0.08)', border: '1px solid rgba(129,140,248,0.22)' }}
          >
            <div className="text-xl font-black mb-1" style={{ color: '#818cf8' }}>+{xpGained} XP Earned!</div>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>Lesson complete!</p>
          </div>
        )}

        {/* Tabs — text only, no emoji */}
        <div
          className="flex gap-1 mb-8 rounded-2xl p-1"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          {[
            { key: 'lesson', label: 'Lesson',  count: null },
            { key: 'quiz',   label: 'Quiz',    count: exercises.length },
          ].map(t => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: tab === t.key ? 'rgba(255,255,255,0.08)' : 'transparent',
                color: tab === t.key ? '#fff' : 'rgba(255,255,255,0.40)',
              }}
            >
              {t.label}
              {t.count != null && (
                <span
                  className="text-xs px-1.5 py-0.5 rounded-full font-bold"
                  style={{
                    background: tab === t.key ? 'rgba(129,140,248,0.22)' : 'rgba(255,255,255,0.08)',
                    color: tab === t.key ? '#818cf8' : 'rgba(255,255,255,0.30)',
                  }}
                >{t.count}</span>
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
                Complete Lesson — Earn {lesson.xp} XP
              </button>
            )}

            {(isAlreadyDone || completed) && exercises.length > 0 && (
              <button
                onClick={() => setTab('quiz')}
                className="w-full py-4 font-semibold rounded-2xl text-sm transition-all mt-2"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.10)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
              >
                Quiz ({exercises.length} questions)
              </button>
            )}
          </div>
        )}

        {/* Quiz */}
        {tab === 'quiz' && (
          <div
            className="rounded-3xl p-6 md:p-8"
            style={{ background: '#111', border: '1px solid rgba(167,139,250,0.18)' }}
          >
            <h3 className="text-lg font-black mb-6" style={{ color: '#a78bfa' }}>Quiz — {lesson.title}</h3>
            {exercises.length > 0
              ? <MiniQuiz exercises={exercises} onComplete={() => {}} />
              : (
                <div className="text-center py-8">
                  <div
                    className="font-black leading-none mb-3 select-none"
                    style={{ fontSize: 'clamp(2.5rem,8vw,4rem)', color: 'rgba(255,255,255,0.05)', letterSpacing: '-0.04em' }}
                  >
                    Quiz
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.40)' }}>No exercises for this lesson yet.</p>
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
