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
    desc: 'Atombohy ny fianarana ny teny Alemà — miarahaba, isa, fianakaviana...',
    descDe: 'Beginnen Sie mit den Grundlagen der deutschen Sprache.',
    icon: '🌱',
    color: 'indigo',
    gradient: 'from-indigo-600 to-indigo-400',
    border: 'border-indigo-400/22',
    borderHover: 'hover:border-indigo-400/45',
    bg: 'bg-indigo-500/10',
    bgAccent: 'bg-indigo-500/15',
    text: 'text-indigo-400',
    xpColor: 'text-indigo-400',
  },
  {
    id: 'A2',
    label: 'A2',
    name: 'Mioha',
    nameDe: 'Grundkenntnisse',
    desc: 'Havaozina ny A1 — asa, tanàna, toetr\'andro, fahasalamana...',
    descDe: 'Aufbauend auf A1 — Alltag, Arbeit, Gesundheit...',
    icon: '🔥',
    color: 'violet',
    gradient: 'from-violet-600 to-violet-400',
    border: 'border-violet-400/22',
    borderHover: 'hover:border-violet-400/45',
    bg: 'bg-violet-500/10',
    bgAccent: 'bg-violet-500/15',
    text: 'text-violet-400',
    xpColor: 'text-violet-400',
  },
];

const LessonCard = ({ lesson, isCompleted, level }) => {
  const colorMap = {
    indigo: { badge: 'bg-indigo-500/12 border-indigo-400/28 text-indigo-400', dot: 'bg-indigo-400' },
    violet: { badge: 'bg-violet-500/12 border-violet-400/28 text-violet-400', dot: 'bg-violet-400' },
    teal:   { badge: 'bg-indigo-500/12 border-indigo-400/28 text-indigo-400', dot: 'bg-indigo-400' },
    yellow: { badge: 'bg-violet-500/12 border-violet-400/28 text-violet-400', dot: 'bg-violet-400' },
  };
  const c = colorMap[level.color] || colorMap.indigo;

  return (
    <Link to={`/lesson/${lesson.id}`}
      className={`group flex items-start gap-4 p-5 rounded-2xl border transition-all duration-200 card-hover ${
        isCompleted
          ? 'bg-white/4 border-green-500/20 hover:border-green-400/35'
          : 'bg-white/2 border-white/6 hover:border-white/15 hover:bg-white/4'
      }`}>
      {/* Icon box */}
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 transition-transform group-hover:scale-110 ${
        isCompleted ? 'bg-green-500/15 border border-green-400/20' : c.badge + ' border'
      }`}>
        {isCompleted ? '✅' : lesson.icon}
      </div>

      {/* Content */}
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
            <span className={`text-[11px] font-bold ${c.xpColor} bg-white/5 px-2 py-0.5 rounded-full`}>+{lesson.xp} XP</span>
            <span className="text-[10px] text-white/30">{lesson.duration}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Levels = () => {
  const [activeLevel, setActiveLevel] = useState('A1');
  const progress = progressService.getProgress();

  const currentLevel = levels.find(l => l.id === activeLevel);
  const lessons = getLessonsByLevel(activeLevel);
  const completedInLevel = lessons.filter(l => progress.completedLessons.includes(l.id));
  const levelPct = lessons.length ? Math.round((completedInLevel.length / lessons.length) * 100) : 0;

  return (
    <div className="min-h-screen pt-[68px]">
      {/* Header */}
      <section className="relative py-14 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.06),transparent_60%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-black mb-3">
            <span className="text-white">Ambaratonga /</span>{' '}
            <span className="text-grad">Niveaus</span>
          </h1>
          <p className="text-white/45 text-sm max-w-lg mx-auto">
            Safidio ny ambaratonga tianao — atombohy amin'ny A1 ary mandroso
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-16">
        {/* Level Tabs */}
        <div className="flex flex-wrap gap-4 mb-10 justify-center">
          {levels.map(lvl => (
            <button key={lvl.id} onClick={() => setActiveLevel(lvl.id)}
              className={`group flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all duration-200 ${
                activeLevel === lvl.id
                  ? `${lvl.bg} ${lvl.border} ${lvl.text} font-bold shadow-lg`
                  : 'bg-white/3 border-white/8 text-white/55 hover:bg-white/6 hover:border-white/15'
              }`}>
              <span className="text-2xl group-hover:scale-110 transition-transform">{lvl.icon}</span>
              <div className="text-left">
                <div className={`text-xl font-black ${activeLevel === lvl.id ? lvl.text : 'text-white/70'}`}>{lvl.label}</div>
                <div className="text-xs opacity-60">{lvl.name}</div>
              </div>
              {/* Check if all done */}
              {getLessonsByLevel(lvl.id).every(l => progress.completedLessons.includes(l.id)) && getLessonsByLevel(lvl.id).length > 0 && (
                <span className="text-green-400 text-lg">✓</span>
              )}
            </button>
          ))}

          {/* B1 locked */}
          <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-white/6 bg-white/2 opacity-40 cursor-not-allowed">
            <span className="text-2xl">⭐</span>
            <div className="text-left">
              <div className="text-xl font-black text-white/40">B1</div>
              <div className="text-xs text-white/30">Manaraka...</div>
            </div>
            <span className="text-sm">🔒</span>
          </div>
        </div>

        {/* Level Info + Progress */}
        {currentLevel && (
          <div className={`glass-card p-6 md:p-8 mb-8 ${currentLevel.border}`}>
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0 ${currentLevel.bgAccent} border ${currentLevel.border}`}>
                {currentLevel.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h2 className={`text-2xl font-black ${currentLevel.text}`}>{currentLevel.label}</h2>
                  <span className="text-white font-bold text-lg">— {currentLevel.name}</span>
                  <span className="text-white/40 text-sm italic">/ {currentLevel.nameDe}</span>
                </div>
                <p className="text-white/55 text-sm mb-1">{currentLevel.desc}</p>
                <p className="text-white/25 text-xs italic">{currentLevel.descDe}</p>
              </div>
              <div className="text-center md:text-right shrink-0">
                <div className={`text-3xl font-black ${currentLevel.text}`}>{levelPct}%</div>
                <div className="text-xs text-white/35">{completedInLevel.length}/{lessons.length} Lesona</div>
              </div>
            </div>
            <div className="mt-5">
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
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            📋 <span>Lesona {activeLevel} <span className="text-white/35 font-normal text-sm">({lessons.length} total)</span></span>
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
          <Link to="/exercises"
            className="group flex items-center gap-4 p-5 glass-card border-violet-400/15 hover:border-violet-400/35 transition-all duration-200 card-hover">
            <span className="text-3xl group-hover:scale-110 transition-transform">✏️</span>
            <div>
              <div className="font-bold text-white">Fanazaran-tsaina</div>
              <div className="text-xs text-white/40">Fiofanana miaraka amin'ny fanontaniana maro</div>
            </div>
            <span className="ml-auto text-white/20 group-hover:text-white/50 transition-colors">→</span>
          </Link>
          <Link to="/vocabulary"
            className="group flex items-center gap-4 p-5 glass-card border-indigo-400/15 hover:border-indigo-400/30 transition-all duration-200 card-hover">
            <span className="text-3xl group-hover:scale-110 transition-transform">📖</span>
            <div>
              <div className="font-bold text-white">Teny / Vokabeln</div>
              <div className="text-xs text-white/40">Teny 500+ amin'ny lohahevitra maro</div>
            </div>
            <span className="ml-auto text-white/20 group-hover:text-white/50 transition-colors">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Levels;
