import { useState } from 'react';
import { vocabulary, getAllTopics } from '../data/vocabulary';
import { progressService } from '../services/progress';

const LEVELS = ['A1', 'A2'];

const levelAccents = {
  A1: { color: '#818cf8', bg: 'rgba(129,140,248,0.10)', border: 'rgba(129,140,248,0.25)' },
  A2: { color: '#a78bfa', bg: 'rgba(167,139,250,0.10)', border: 'rgba(167,139,250,0.25)' },
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

const WordCard = ({ word, isLearned, onLearn, showExample }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`cursor-pointer group relative h-40 transition-all duration-300 card-hover ${isLearned ? 'opacity-80' : ''}`}
      onClick={() => { setFlipped(!flipped); if (!isLearned) onLearn(); }}
      style={{ perspective: '800px' }}
    >
      <div className={`w-full h-full transition-all duration-500 relative ${flipped ? '[transform:rotateY(180deg)]' : ''}`}
        style={{ transformStyle: 'preserve-3d' }}>

        {/* Front */}
        <div className={`absolute inset-0 rounded-2xl border p-4 flex flex-col justify-between backface-hidden ${
          isLearned
            ? 'bg-green-500/5 border-green-400/20'
            : 'bg-white/3 border-white/8 hover:border-white/18'
        }`} style={{ backfaceVisibility: 'hidden' }}>
          <div className="flex items-start justify-between">
            <span className="text-[10px] font-semibold text-white/25 uppercase tracking-widest">Deutsch</span>
            {isLearned && <span className="text-green-400 text-xs">✓</span>}
          </div>
          <div className="text-center">
            <div className="text-xl font-black text-white leading-tight">{word.german}</div>
          </div>
          <div className="text-[10px] text-white/25 text-center">Tsindrio / Tippen</div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 rounded-2xl border bg-violet-500/10 border-violet-400/22 p-4 flex flex-col justify-between"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
          <span className="text-[10px] font-semibold text-violet-400/60 uppercase tracking-widest">Malagasy</span>
          <div className="text-center">
            <div className="text-lg font-black text-violet-300 leading-tight">{word.malagasy}</div>
            {showExample && word.example && (
              <div className="text-[11px] text-white/35 italic mt-2 leading-snug">„{word.example}"</div>
            )}
          </div>
          <div className="text-[10px] text-violet-400/45 text-center">Tsindrio indray</div>
        </div>
      </div>
    </div>
  );
};

const WordList = ({ word, isLearned, onLearn }) => (
  <div
    onClick={onLearn}
    className="flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-200"
    style={{
      background: isLearned ? 'rgba(74,222,128,0.04)' : 'rgba(255,255,255,0.02)',
      border: `1px solid ${isLearned ? 'rgba(74,222,128,0.15)' : 'rgba(255,255,255,0.07)'}`,
    }}
    onMouseEnter={e => { if (!isLearned) { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'; } }}
    onMouseLeave={e => { e.currentTarget.style.background = isLearned ? 'rgba(74,222,128,0.04)' : 'rgba(255,255,255,0.02)'; e.currentTarget.style.borderColor = isLearned ? 'rgba(74,222,128,0.15)' : 'rgba(255,255,255,0.07)'; }}
  >
    <div className="w-2 h-2 rounded-full shrink-0" style={{ background: isLearned ? '#4ade80' : 'rgba(255,255,255,0.15)' }} />
    <div className="flex-1 min-w-0">
      <span className="font-bold text-white text-sm">{word.german}</span>
      <span className="mx-2 text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>→</span>
      <span className="text-sm font-medium" style={{ color: '#a78bfa' }}>{word.malagasy}</span>
    </div>
    {word.example && (
      <div className="hidden md:block text-xs italic truncate max-w-[200px]" style={{ color: 'rgba(255,255,255,0.25)' }}>
        {word.example}
      </div>
    )}
    {!isLearned && (
      <span className="text-[10px] shrink-0" style={{ color: 'rgba(255,255,255,0.20)' }}>+2 XP</span>
    )}
  </div>
);

const Vocabulary = () => {
  const [level, setLevel] = useState('A1');
  const [topic, setTopic] = useState(null);
  const [viewMode, setViewMode] = useState('cards'); // 'cards' | 'list'
  const [showExamples, setShowExamples] = useState(true);
  const [progress, setProgress] = useState(() => progressService.getProgress());
  const [search, setSearch] = useState('');

  const topics = getAllTopics(level);

  // Derive active topic at render time — avoids setState inside useEffect
  const effectiveTopic = topic && topics.includes(topic) ? topic : (topics[0] ?? null);

  const currentTopic = vocabulary[level]?.[effectiveTopic] || { title: '', words: [] };
  const allWords = currentTopic.words || [];

  const filtered = search
    ? allWords.filter(w =>
        w.german.toLowerCase().includes(search.toLowerCase()) ||
        w.malagasy.toLowerCase().includes(search.toLowerCase())
      )
    : allWords;

  const handleLearnWord = (wordId) => {
    const newProgress = progressService.learnWord(wordId);
    setProgress(newProgress);
  };

  const isWordLearned = (word) => {
    const id = `${level}-${effectiveTopic}-${word.german}`;
    return progress.vocabularyLearned.includes(id);
  };

  const learnedInTopic = allWords.filter(w => isWordLearned(w)).length;
  const totalLearned = progress.vocabularyLearned.length;

  const la = levelAccents[level] || levelAccents.A1;

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
          WÖRTER
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
            <div>
              <h1 className="text-3xl md:text-5xl font-black mb-2" style={{ letterSpacing: '-0.03em' }}>
                <span className="text-white">Teny /</span>{' '}
                <span className="text-grad">Vokabeln</span>
              </h1>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.40)' }}>
                Fianarana teny amin&apos;ny lohahevitra maro — Alemà ↔ Malagasy
              </p>
            </div>
            <div
              className="flex items-center gap-4 px-5 py-3 rounded-2xl"
              style={{ background: '#111', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="text-center">
                <div className="text-2xl font-black" style={{ color: '#818cf8' }}>{totalLearned}</div>
                <div className="text-[10px] uppercase tracking-wide" style={{ color: 'rgba(255,255,255,0.35)' }}>Nianarana</div>
              </div>
              <div className="w-px h-8" style={{ background: 'rgba(255,255,255,0.10)' }} />
              <div className="text-center">
                <div className="text-2xl font-black" style={{ color: '#a78bfa' }}>{progress.stats.totalXP}</div>
                <div className="text-[10px] uppercase tracking-wide" style={{ color: 'rgba(255,255,255,0.35)' }}>XP</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sticky level chip bar (matches Home) ── */}
      <div
        className="sticky z-40 flex items-center gap-2 overflow-x-auto px-6 py-3 no-scrollbar"
        style={{ top: '52px', background: 'rgba(13,13,13,0.96)', borderBottom: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(10px)' }}
      >
        {LEVELS.map(l => (
          <Chip key={l} label={l} active={level === l} onClick={() => { setLevel(l); setTopic(null); }} />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col lg:flex-row gap-8">

        {/* ── Sidebar ── */}
        <aside className="lg:w-64 shrink-0">
          <div
            className="rounded-2xl p-4"
            style={{ background: '#111', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.30)' }}>Lohahevitra</div>
            <div className="flex flex-col gap-1">
              {topics.map(t => {
                const topicData = vocabulary[level]?.[t] || {};
                const topicWords = topicData.words || [];
                const learned = topicWords.filter(w => isWordLearned(w)).length;
                const pct = topicWords.length ? Math.round((learned / topicWords.length) * 100) : 0;
                const isActive = effectiveTopic === t;
                const initials = (topicData.title || t).replace(/[^A-Za-z]/g, '').slice(0, 2).toUpperCase() || t.slice(0, 2).toUpperCase();
                return (
                  <button
                    key={t}
                    onClick={() => setTopic(t)}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all duration-150 text-left w-full"
                    style={{
                      background: isActive ? la.bg : 'transparent',
                      border: `1px solid ${isActive ? la.border : 'transparent'}`,
                      color: isActive ? la.color : 'rgba(255,255,255,0.55)',
                    }}
                    onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                    onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent'; }}
                  >
                    {/* Text initial badge instead of emoji */}
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-black shrink-0"
                      style={{
                        background: isActive ? la.bg : 'rgba(255,255,255,0.06)',
                        border: `1px solid ${isActive ? la.border : 'rgba(255,255,255,0.08)'}`,
                        color: isActive ? la.color : 'rgba(255,255,255,0.35)',
                      }}
                    >
                      {initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium truncate">{topicData.title?.split('/')[1]?.trim() || t}</div>
                      <div className="text-[10px] mt-0.5" style={{ color: 'rgba(255,255,255,0.25)' }}>{topicWords.length} teny{pct > 0 ? ` · ${pct}%` : ''}</div>
                    </div>
                    {pct === 100 && <span className="text-[10px] font-bold shrink-0" style={{ color: '#4ade80' }}>✓</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>
                
      

        {/* ── Main content ── */}
        <div className="flex-1 min-w-0">
          {/* Topic header — text badge instead of emoji */}
          {currentTopic.title && (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-lg font-black text-white">{currentTopic.title}</h2>
                <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  {learnedInTopic}/{allWords.length} nianarana
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Search */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Hikaroka..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="rounded-xl px-3.5 py-2 text-sm focus:outline-none w-36 sm:w-44 transition-all"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)', color: '#fff' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(129,140,248,0.35)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.10)'}
                  />
                  {search && (
                    <button onClick={() => setSearch('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2"
                      style={{ color: 'rgba(255,255,255,0.30)' }}>✕</button>
                  )}
                </div>

                {/* View toggle — text labels, no emoji */}
                <div
                  className="flex gap-1 rounded-xl p-1"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  {[{ key: 'cards', label: 'Grid' }, { key: 'list', label: 'List' }].map(v => (
                    <button
                      key={v.key}
                      onClick={() => setViewMode(v.key)}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold transition-all"
                      style={{
                        background: viewMode === v.key ? 'rgba(255,255,255,0.10)' : 'transparent',
                        color: viewMode === v.key ? '#fff' : 'rgba(255,255,255,0.35)',
                      }}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>

                {/* Examples toggle — no emoji */}
                <button
                  onClick={() => setShowExamples(!showExamples)}
                  className="px-3 py-1.5 rounded-xl text-xs font-medium transition-all"
                  style={{
                    background: showExamples ? 'rgba(129,140,248,0.12)' : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${showExamples ? 'rgba(129,140,248,0.28)' : 'rgba(255,255,255,0.10)'}`,
                    color: showExamples ? '#818cf8' : 'rgba(255,255,255,0.35)',
                  }}
                >
                  Ohatra
                </button>
              </div>
            </div>
          )}

          {/* Progress bar for topic */}
          {allWords.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs mb-1.5" style={{ color: 'rgba(255,255,255,0.35)' }}>
                <span>Fandrosoan&apos;ny lohahevitra</span>
                <span className="font-semibold" style={{ color: la.color }}>{learnedInTopic}/{allWords.length}</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${allWords.length ? (learnedInTopic / allWords.length) * 100 : 0}%`, background: `linear-gradient(90deg, ${la.color}, rgba(167,139,250,0.7))` }}
                />
              </div>
            </div>
          )}

          {/* Words display */}
          {filtered.length === 0 ? (
            <div className="text-center py-16" style={{ color: 'rgba(255,255,255,0.30)' }}>
              <div
                className="font-black leading-none mb-3 select-none"
                style={{ fontSize: 'clamp(3rem,10vw,5rem)', color: 'rgba(255,255,255,0.06)', letterSpacing: '-0.04em' }}
              >
                404
              </div>
              <p>Tsy hita ny teny &quot;{search}&quot;</p>
            </div>
          ) : viewMode === 'cards' ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {filtered.map((word, i) => {
                const id = `${level}-${effectiveTopic}-${word.german}`;
                return (
                  <WordCard
                    key={i}
                    word={word}
                    isLearned={isWordLearned(word)}
                    showExample={showExamples}
                    onLearn={() => handleLearnWord(id)}
                  />
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {filtered.map((word, i) => {
                const id = `${level}-${effectiveTopic}-${word.german}`;
                return (
                  <WordList
                    key={i}
                    word={word}
                    isLearned={isWordLearned(word)}
                    onLearn={() => handleLearnWord(id)}
                  />
                );
              })}
            </div>
          )}

          {/* Topic complete — big bold text, no emoji */}
          {learnedInTopic === allWords.length && allWords.length > 0 && (
            <div
              className="mt-8 rounded-3xl p-8 text-center"
              style={{ background: '#111', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div
                className="font-black leading-none mb-2 select-none"
                style={{ fontSize: 'clamp(3rem,12vw,6rem)', color: 'rgba(74,222,128,0.15)', letterSpacing: '-0.04em' }}
              >
                VITA!
              </div>
              <div className="text-lg font-black text-green-400 mb-1">Vita ny Lohahevitra!</div>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.40)' }}>Nianaranao ny teny {allWords.length} rehetra!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Vocabulary;
