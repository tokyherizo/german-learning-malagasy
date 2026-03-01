import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getLessonsByLevel } from '../data/lessons';
import { progressService } from '../services/progress';
import ProgressBar from '../components/ProgressBar';

const levels = [
  {
    id: 'A1',
    label: 'A1',
    name: 'Fanombohana',
    nameDe: 'Anfänger',
    desc: "Atombohy ny fianarana ny teny Alemà — miarahaba, isa, fianakaviana...",
    descDe: 'Beginnen Sie mit den Grundlagen der deutschen Sprache.',
    color: 'indigo',
    accent: '#818cf8',
    accentBg: 'rgba(129,140,248,0.08)',
    accentBorder: 'rgba(129,140,248,0.22)',
  },
  {
    id: 'A2',
    label: 'A2',
    name: 'Mioha',
    nameDe: 'Grundkenntnisse',
    desc: "Havaozina ny A1 — asa, tanàna, toetr'andro, fahasalamana...",
    descDe: 'Aufbauend auf A1 — Alltag, Arbeit, Gesundheit...',
    color: 'violet',
    accent: '#a78bfa',
    accentBg: 'rgba(167,139,250,0.08)',
    accentBorder: 'rgba(167,139,250,0.22)',
  },
];

const LessonCard = ({ lesson, isCompleted, level }) => (
  <Link
    to={`/lesson/${lesson.id}`}
    className={`group flex items-center gap-4 p-5 rounded-2xl border transition-all duration-200 card-hover ${
      isCompleted
        ? 'bg-white/[0.03] border-green-500/20 hover:border-green-400/35'
        : 'bg-white/[0.02] border-white/6 hover:border-white/15 hover:bg-white/[0.04]'
    }`}
  >
    {/* Number badge — big text, no emoji */}
    <div
      className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm shrink-0 transition-transform group-hover:scale-105"
      style={{
        background: isCompleted ? 'rgba(74,222,128,0.10)' : level.accentBg,
        border: `1px solid ${isCompleted ? 'rgba(74,222,128,0.25)' : level.accentBorder}`,
        color: isCompleted ? '#4ade80' : level.accent,
      }}
    >
      {isCompleted ? '✓' : lesson.number}
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="text-[10px] font-semibold tracking-widest text-white/30 uppercase mb-0.5">
            Lesona {lesson.number}
          </div>
          <h3 className="font-bold text-white text-sm leading-snug">{lesson.title}</h3>
          <p className="text-xs text-white/40 mt-0.5">{lesson.subtitle}</p>
        </div>
        <div className="flex flex-col items-end shrink-0 gap-1">
          <span
            className="text-[11px] font-bold px-2 py-0.5 rounded-full"
            style={{ color: level.accent, background: level.accentBg }}
          >
            +{lesson.xp} XP
          </span>
          <span className="text-[10px] text-white/30">{lesson.duration}</span>
        </div>
      </div>
    </div>
    <span className="text-white/20 group-hover:text-white/50 transition-colors text-sm">→</span>
  </Link>
);

const Levels = () => {
  const [activeLevel, setActiveLevel] = useState('A1');
  const progress = progressService.getProgress();

  const currentLevel = levels.find(l => l.id === activeLevel);
  const lessons = getLessonsByLevel(activeLevel);
  const completedInLevel = lessons.filter(l => progress.completedLessons.includes(l.id));
  const levelPct = lessons.length ? Math.round((completedInLevel.length / lessons.length) * 100) : 0;

  return (
    <div className="min-h-screen pt-[68px]">
      {/* Header — big decorative word behind the title */}
      <section className="py-14 border-b border-white/6 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center relative">
          <div
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 font-black leading-none select-none pointer-events-none text-center"
            style={{ fontSize: 'clamp(5rem,18vw,11rem)', color: 'rgba(255,255,255,0.03)', letterSpacing: '-0.04em', zIndex: 0 }}
          >
            NIVEAUS
          </div>
          <div className="relative" style={{ zIndex: 1 }}>
            <h1 className="text-3xl md:text-5xl font-black mb-3">
              <span className="text-white">Ambaratonga /</span>{' '}
              <span className="text-grad">Niveaus</span>
            </h1>
            <p className="text-white/45 text-sm max-w-lg mx-auto">
              Safidio ny ambaratonga tianao — atombohy amin&apos;ny A1 ary mandroso
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-16">
        {/* Level Tabs */}
        <div className="flex flex-wrap gap-4 mb-10 justify-center pt-2">
          {levels.map(lvl => {
            const isActive = activeLevel === lvl.id;
            const allDone =
              getLessonsByLevel(lvl.id).every(l => progress.completedLessons.includes(l.id)) &&
              getLessonsByLevel(lvl.id).length > 0;
            return (
              <button
                key={lvl.id}
                onClick={() => setActiveLevel(lvl.id)}
                className="group flex items-center gap-4 px-8 py-5 rounded-2xl border transition-all duration-200"
                style={{
                  background: isActive ? lvl.accentBg : 'rgba(255,255,255,0.02)',
                  borderColor: isActive ? lvl.accentBorder : 'rgba(255,255,255,0.07)',
                  boxShadow: isActive ? `0 0 40px ${lvl.accentBg}` : 'none',
                }}
              >
                <div
                  className="text-4xl font-black leading-none transition-transform group-hover:scale-105"
                  style={{ color: isActive ? lvl.accent : 'rgba(255,255,255,0.35)' }}
                >
                  {lvl.label}
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold" style={{ color: isActive ? '#fff' : 'rgba(255,255,255,0.55)' }}>{lvl.name}</div>
                  <div className="text-xs mt-0.5" style={{ color: isActive ? lvl.accent : 'rgba(255,255,255,0.25)' }}>{lvl.nameDe}</div>
                </div>
                {allDone && (
                  <span className="text-xs font-bold text-green-400 border border-green-400/30 rounded-full px-2 py-0.5 ml-2">
                    Vita
                  </span>
                )}
              </button>
            );
          })}

          {/* B1 locked — text only, no emoji */}
          <div
            className="flex items-center gap-4 px-8 py-5 rounded-2xl border opacity-35 cursor-not-allowed"
            style={{ background: 'rgba(255,255,255,0.01)', borderColor: 'rgba(255,255,255,0.05)' }}
          >
            <div className="text-4xl font-black text-white/25 leading-none">B1</div>
            <div className="text-left">
              <div className="text-sm font-bold text-white/30">Bientôt</div>
              <div className="text-xs text-white/20 mt-0.5">Manaraka...</div>
            </div>
            <span className="text-[10px] font-bold text-white/25 border border-white/15 rounded-full px-2 py-0.5 ml-2">
              soon
            </span>
          </div>
        </div>

        {/* Level Info + Progress */}
        {currentLevel && (
          <div
            className="rounded-3xl p-6 md:p-8 mb-8"
            style={{
              background: currentLevel.accentBg,
              border: `1.5px solid ${currentLevel.accentBorder}`,
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              {/* Big text label instead of emoji */}
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-black shrink-0"
                style={{
                  background: 'rgba(0,0,0,0.25)',
                  border: `1.5px solid ${currentLevel.accentBorder}`,
                  color: currentLevel.accent,
                }}
              >
                {currentLevel.label}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h2 className="text-2xl font-black" style={{ color: currentLevel.accent }}>{currentLevel.name}</h2>
                  <span className="text-white/35 text-sm italic">/ {currentLevel.nameDe}</span>
                </div>
                <p className="text-white/55 text-sm mb-1">{currentLevel.desc}</p>
                <p className="text-white/25 text-xs italic">{currentLevel.descDe}</p>
              </div>
              <div className="text-center md:text-right shrink-0">
                <div className="text-4xl font-black" style={{ color: currentLevel.accent }}>{levelPct}%</div>
                <div className="text-xs text-white/35 mt-1">{completedInLevel.length}/{lessons.length} Lesona</div>
              </div>
            </div>
            <div className="mt-6">
              <ProgressBar
                value={completedInLevel.length}
                max={lessons.length || 1}
                showPercentage={false}
                color={currentLevel.color === 'indigo' ? 'indigo' : 'violet'}
                size="medium"
                animated
              />
            </div>
          </div>
        )}

        {/* Lessons list */}
        <div>
          <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
            <span
              className="text-sm font-black px-2.5 py-1 rounded-lg"
              style={{ background: currentLevel?.accentBg, color: currentLevel?.accent, border: `1px solid ${currentLevel?.accentBorder}` }}
            >
              {activeLevel}
            </span>
            Lesona
            <span className="text-white/35 font-normal text-sm">({lessons.length} total)</span>
          </h3>
          <div className="grid gap-3">
            {lessons.map(lesson => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                isCompleted={progress.completedLessons.includes(lesson.id)}
                level={currentLevel}
              />
            ))}
          </div>
        </div>

        {/* Quick nav to exercises/vocab */}
        <div className="grid md:grid-cols-2 gap-4 mt-10">
          <Link
            to="/exercises"
            className="group flex items-center gap-5 p-6 rounded-2xl border transition-all duration-200 card-hover"
            style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.07)' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(167,139,250,0.35)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-base shrink-0 transition-transform group-hover:scale-105"
              style={{ background: 'rgba(167,139,250,0.10)', border: '1px solid rgba(167,139,250,0.22)', color: '#a78bfa' }}
            >
              Üb
            </div>
            <div>
              <div className="font-bold text-white text-sm">Fanazaran-tsaina</div>
              <div className="text-xs text-white/40 mt-0.5">Fiofanana miaraka amin&apos;ny fanontaniana maro</div>
            </div>
            <span className="ml-auto text-white/20 group-hover:text-white/60 transition-colors text-lg">→</span>
          </Link>

          <Link
            to="/vocabulary"
            className="group flex items-center gap-5 p-6 rounded-2xl border transition-all duration-200 card-hover"
            style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.07)' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(129,140,248,0.35)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-base shrink-0 transition-transform group-hover:scale-105"
              style={{ background: 'rgba(129,140,248,0.10)', border: '1px solid rgba(129,140,248,0.22)', color: '#818cf8' }}
            >
              Wrt
            </div>
            <div>
              <div className="font-bold text-white text-sm">Teny / Vokabeln</div>
              <div className="text-xs text-white/40 mt-0.5">Teny 500+ amin&apos;ny lohahevitra maro</div>
            </div>
            <span className="ml-auto text-white/20 group-hover:text-white/60 transition-colors text-lg">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Levels;
