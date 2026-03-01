import { useState } from 'react';
import { vocabulary, getAllTopics } from '../data/vocabulary';
import { progressService } from '../services/progress';

const LEVELS = ['A1', 'A2'];

const levelColors = {
  A1: {
    badge: 'bg-indigo-500/12 border-indigo-400/28 text-indigo-400',
    tab:   'bg-indigo-500/15 border-indigo-400/32 text-indigo-400',
    dot:   'bg-indigo-400',
  },
  A2: {
    badge: 'bg-violet-500/12 border-violet-400/28 text-violet-400',
    tab:   'bg-violet-500/15 border-violet-400/32 text-violet-400',
    dot:   'bg-violet-400',
  },
};

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
    className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-200 group hover:bg-white/4 ${
      isLearned
        ? 'bg-green-500/4 border-green-400/15 hover:border-green-400/25'
        : 'bg-white/2 border-white/6 hover:border-white/14'
    }`}>
    <div className={`w-2 h-2 rounded-full shrink-0 ${isLearned ? 'bg-green-400' : 'bg-white/15'}`} />
    <div className="flex-1 min-w-0">
      <span className="font-bold text-white text-sm">{word.german}</span>
      <span className="text-white/25 mx-2 text-xs">→</span>
      <span className="text-violet-400 text-sm font-medium">{word.malagasy}</span>
    </div>
    {word.example && (
      <div className="hidden md:block text-xs text-white/25 italic truncate max-w-[200px]">
        {word.example}
      </div>
    )}
    {!isLearned && (
      <span className="text-[10px] text-white/20 shrink-0 group-hover:text-violet-400/60 transition-colors">+2 XP</span>
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

  const lc = levelColors[level] || levelColors.A1;

  return (
    <div className="min-h-screen pt-[68px]">
      {/* Header */}
      <section className="relative py-12 border-b border-white/6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.06),transparent_60%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
            <div>
              <h1 className="text-3xl md:text-5xl font-black mb-2">
                <span className="text-white">Teny /</span>{' '}
                <span className="text-grad">Vokabeln</span>
              </h1>
              <p className="text-white/40 text-sm">Fianarana teny amin'ny lohahevitra maro — Alemà ↔ Malagasy</p>
            </div>
            <div className="flex items-center gap-4 bg-white/3 border border-white/8 rounded-2xl px-5 py-3">
              <div className="text-center">
                <div className="text-2xl font-black text-indigo-400">{totalLearned}</div>
                <div className="text-[10px] text-white/35 uppercase tracking-wide">Nianarana</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-black text-violet-400">{progress.stats.totalXP}</div>
                <div className="text-[10px] text-white/35 uppercase tracking-wide">XP</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col lg:flex-row gap-8">

        {/* ── Sidebar ── */}
        <aside className="lg:w-64 shrink-0">
          {/* Level selector */}
          <div className="glass-card p-4 border-white/8 mb-5">
            <div className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-3">Ambaratonga</div>
            <div className="flex gap-2">
              {LEVELS.map(l => {
                const c = levelColors[l];
                return (
                  <button key={l} onClick={() => setLevel(l)}
                    className={`flex-1 py-2.5 rounded-xl border text-sm font-black transition-all duration-200 ${
                      level === l ? c.tab : 'bg-white/3 border-white/8 text-white/45 hover:bg-white/6'
                    }`}>
                    {l}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Topics */}
          <div className="glass-card p-4 border-white/8">
            <div className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-3">Lohahevitra</div>
            <div className="flex flex-col gap-1">
              {topics.map(t => {
                const topicData = vocabulary[level]?.[t] || {};
                const topicWords = topicData.words || [];
                const learned = topicWords.filter(w => isWordLearned(w)).length;
                const pct = topicWords.length ? Math.round((learned / topicWords.length) * 100) : 0;
                return (
                  <button key={t} onClick={() => setTopic(t)}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all duration-150 text-left w-full ${
                      effectiveTopic === t
                        ? `${lc.badge} border font-semibold`
                        : 'hover:bg-white/5 text-white/55 hover:text-white/80'
                    }`}>
                    <span className="text-base shrink-0">{topicData.icon || '📁'}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium truncate">{topicData.title?.split('/')[1]?.trim() || t}</div>
                      <div className="text-[10px] text-white/25 mt-0.5">{topicWords.length} teny{pct > 0 ? ` • ${pct}%` : ''}</div>
                    </div>
                    {pct === 100 && <span className="text-green-400 text-xs shrink-0">✓</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* ── Main ── */}
        <div className="flex-1 min-w-0">
          {/* Topic header */}
          {currentTopic.title && (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{currentTopic.icon}</span>
                <div>
                  <h2 className="text-lg font-black text-white">{currentTopic.title}</h2>
                  <div className="text-xs text-white/35 mt-0.5">
                    {learnedInTopic}/{allWords.length} nianarana
                  </div>
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
                    className="bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-sm placeholder-white/25 focus:outline-none focus:border-indigo-400/35 w-36 sm:w-44 transition-all"
                    style={{ color: 'var(--text-primary)' }}
                  />
                  {search && (
                    <button onClick={() => setSearch('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60">✕</button>
                  )}
                </div>

                {/* View toggle */}
                <div className="flex gap-1 bg-white/4 border border-white/8 rounded-xl p-1">
                  <button onClick={() => setViewMode('cards')}
                    className={`p-1.5 rounded-lg transition-all text-base ${viewMode === 'cards' ? 'bg-white/10 text-white' : 'text-white/30 hover:text-white/55'}`}
                    title="Karatra">🃏</button>
                  <button onClick={() => setViewMode('list')}
                    className={`p-1.5 rounded-lg transition-all text-base ${viewMode === 'list' ? 'bg-white/10 text-white' : 'text-white/30 hover:text-white/55'}`}
                    title="Lisitra">☰</button>
                </div>

                {/* Examples toggle */}
                <button onClick={() => setShowExamples(!showExamples)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                    showExamples
                      ? 'bg-indigo-400/12 border-indigo-400/28 text-indigo-400'
                      : 'bg-white/4 border-white/10 text-white/35'
                  }`}>
                  💬 Ohatra
                </button>
              </div>
            </div>
          )}

          {/* Progress bar for topic */}
          {allWords.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs text-white/35 mb-1.5">
                <span>Fandrosoan'ny lohahevitra</span>
                <span className="font-semibold text-xs text-indigo-400">{learnedInTopic}/{allWords.length}</span>
              </div>
              <div className="h-1.5 bg-white/6 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-600 to-violet-400 rounded-full transition-all duration-500"
                  style={{ width: `${allWords.length ? (learnedInTopic / allWords.length) * 100 : 0}%` }}
                />
              </div>
            </div>
          )}

          {/* Words display */}
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-white/30">
              <div className="text-4xl mb-3">🔍</div>
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

          {/* Topic complete */}
          {learnedInTopic === allWords.length && allWords.length > 0 && (
            <div className="mt-8 text-center p-6 glass-card border-green-400/20 animate-bounce-in">
              <div className="text-4xl mb-3">🏆</div>
              <div className="text-lg font-black text-green-400 mb-1">Vita ny Lohahevitra!</div>
              <p className="text-white/40 text-sm">Nianaranao ny teny {allWords.length} rehetra!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Vocabulary;
