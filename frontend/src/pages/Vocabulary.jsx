import { useState } from 'react';
import { vocabulary, getAllTopics } from '../data/vocabulary';
import { progressService } from '../services/progress';
import AudioWord from '../components/AudioWord';

/* ── Dictionary row — table on desktop, card on mobile ── */
const DictTableRow = ({ word, isLearned, onLearn }) => {
  /* ── MOBILE card (shown below sm breakpoint via CSS class hidden/block) ── */
  const mobileCard = (
    <div
      className="block sm:hidden"
      onClick={onLearn}
      style={{
        cursor: 'pointer',
        padding: '12px 14px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        background: isLearned ? 'rgba(74,222,128,0.04)' : 'transparent',
        transition: 'background 0.15s',
      }}
    >
      {/* Row 1: dot + word + audio buttons + XP */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'nowrap', marginBottom: 6 }}>
        <div style={{ width: 7, height: 7, borderRadius: '50%', flexShrink: 0, background: isLearned ? '#4ade80' : 'rgba(255,255,255,0.15)' }} />
        <span style={{ fontWeight: 700, color: '#fff', fontSize: 15, flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {word.german}
        </span>
        {/* Audio buttons in their own block so they never wrap into translation columns */}
        <div
          onClick={e => e.stopPropagation()}
          style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}
        >
          <AudioWord word={word.german} />
        </div>
        {!isLearned && (
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.20)', flexShrink: 0 }}>+2 XP</span>
        )}
      </div>

      {/* Row 2: example sentence */}
      {word.example && (
        <div style={{ fontSize: 11, fontStyle: 'italic', color: 'rgba(255,255,255,0.30)', marginBottom: 6, paddingLeft: 15 }}>
          {word.example}
        </div>
      )}

      {/* Row 3: translations side by side */}
      <div style={{ display: 'flex', gap: 12, paddingLeft: 15 }}>
        <div style={{ flex: 1 }}>
          <span style={{ fontSize: 13, marginRight: 4 }}>🇬🇧</span>
          <span style={{ fontWeight: 500, color: '#a78bfa', fontSize: 13 }}>{word.english}</span>
          {word.exampleEn && (
            <div style={{ fontSize: 10, fontStyle: 'italic', color: 'rgba(167,139,250,0.35)', marginTop: 2 }}>{word.exampleEn}</div>
          )}
        </div>
        <div style={{ flex: 1 }}>
          <span style={{ fontSize: 13, marginRight: 4 }}>🇫🇷</span>
          <span style={{ fontWeight: 500, color: '#60a5fa', fontSize: 13 }}>{word.french || '—'}</span>
        </div>
      </div>
    </div>
  );

  /* ── DESKTOP table row (hidden on mobile) ── */
  const desktopRow = (
    <tr
      className="hidden sm:table-row"
      onClick={onLearn}
      style={{
        cursor: 'pointer',
        background: isLearned ? 'rgba(74,222,128,0.04)' : 'transparent',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        transition: 'background 0.15s',
      }}
      onMouseEnter={e => { if (!isLearned) e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
      onMouseLeave={e => { e.currentTarget.style.background = isLearned ? 'rgba(74,222,128,0.04)' : 'transparent'; }}
    >
      {/* 🇩🇪 Deutsch */}
      <td style={{ padding: '10px 14px 10px 12px', verticalAlign: 'top', width: '33%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 7, height: 7, borderRadius: '50%', flexShrink: 0, background: isLearned ? '#4ade80' : 'rgba(255,255,255,0.15)' }} />
          <span style={{ fontWeight: 700, color: '#fff', fontSize: 14 }}>{word.german}</span>
          <div onClick={e => e.stopPropagation()} style={{ flexShrink: 0 }}><AudioWord word={word.german} /></div>
          {!isLearned && <span style={{ marginLeft: 'auto', fontSize: 10, color: 'rgba(255,255,255,0.20)' }}>+2 XP</span>}
        </div>
        {word.example && (
          <div style={{ fontSize: 11, fontStyle: 'italic', color: 'rgba(255,255,255,0.30)', marginTop: 4, paddingLeft: 15 }}>{word.example}</div>
        )}
      </td>
      {/* 🇬🇧 English */}
      <td style={{ padding: '10px 14px', verticalAlign: 'top', width: '34%', borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
        <span style={{ fontWeight: 500, color: '#a78bfa', fontSize: 14 }}>{word.english}</span>
        {word.exampleEn && (
          <div style={{ fontSize: 11, fontStyle: 'italic', color: 'rgba(167,139,250,0.45)', marginTop: 4 }}>{word.exampleEn}</div>
        )}
      </td>
      {/* 🇫🇷 Français */}
      <td style={{ padding: '10px 12px 10px 14px', verticalAlign: 'top', width: '33%', borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
        <span style={{ fontWeight: 500, color: '#60a5fa', fontSize: 14 }}>{word.french || '—'}</span>
      </td>
    </tr>
  );

  return (
    <>
      {mobileCard}
      {desktopRow}
    </>
  );
};

const LEVELS = ['A1', 'A2', 'A-L', 'M-Z'];

const LEVEL_LABELS = {
  'A1': 'A1',
  'A2': 'A2',
  'A-L': 'A → L',
  'M-Z': 'M → Z',
};

const levelAccents = {
  A1:   { color: '#818cf8', bg: 'rgba(129,140,248,0.10)', border: 'rgba(129,140,248,0.25)' },
  A2:   { color: '#a78bfa', bg: 'rgba(167,139,250,0.10)', border: 'rgba(167,139,250,0.25)' },
  'A-L': { color: '#34d399', bg: 'rgba(52,211,153,0.10)',  border: 'rgba(52,211,153,0.25)'  },
  'M-Z': { color: '#f59e0b', bg: 'rgba(245,158,11,0.10)',  border: 'rgba(245,158,11,0.25)'  },
};

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

const Vocabulary = () => {
  const [level, setLevel] = useState('A1');
  const [topic, setTopic] = useState(null);
  const [progress, setProgress] = useState(() => progressService.getProgress());
  const [search, setSearch] = useState('');

  const topics = getAllTopics(level);
  const effectiveTopic = topic && topics.includes(topic) ? topic : (topics[0] ?? null);
  const currentTopic = vocabulary[level]?.[effectiveTopic] || { title: '', words: [] };
  const allWords = currentTopic.words || [];

  const filtered = search
    ? allWords.filter(w =>
        w.german.toLowerCase().includes(search.toLowerCase()) ||
        w.english.toLowerCase().includes(search.toLowerCase()) ||
        (w.french && w.french.toLowerCase().includes(search.toLowerCase()))
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
        <div
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-black select-none pointer-events-none"
          style={{ fontSize: 'clamp(4rem,16vw,10rem)', color: 'rgba(255,255,255,0.03)', letterSpacing: '-0.04em', lineHeight: 1 }}
        >
          WÖRTERBUCH
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
            <div>
              <h1 className="text-3xl md:text-5xl font-black mb-2" style={{ letterSpacing: '-0.03em' }}>
                <span className="text-white">Dictionnaire /</span>{' '}
                <span className="text-grad">Wörterbuch</span>
              </h1>
              <p className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.40)' }}>
                <span>🇩🇪 Deutsch</span>
                <span style={{ color: 'rgba(255,255,255,0.15)' }}>·</span>
                <span>🇬🇧 English</span>
                <span style={{ color: 'rgba(255,255,255,0.15)' }}>·</span>
                <span>🇫🇷 Français</span>
              </p>
            </div>
            <div
              className="flex items-center gap-4 px-5 py-3 rounded-2xl"
              style={{ background: '#111', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="text-center">
                <div className="text-2xl font-black" style={{ color: '#818cf8' }}>{totalLearned}</div>
                <div className="text-[10px] uppercase tracking-wide" style={{ color: 'rgba(255,255,255,0.35)' }}>Appris</div>
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

      {/* ── Sticky level bar ── */}
      <div
        className="sticky z-40 flex items-center justify-center gap-2 overflow-x-auto px-6 py-3 no-scrollbar"
        style={{ top: '52px', background: 'rgba(13,13,13,0.96)', borderBottom: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(10px)' }}
      >
        {LEVELS.map(l => (
          <Chip key={l} label={LEVEL_LABELS[l] ?? l} active={level === l} onClick={() => { setLevel(l); setTopic(null); }} />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col lg:flex-row gap-8">

        {/* ── Sidebar ── */}
        <aside className="lg:w-64 shrink-0">
          <div
            className="rounded-2xl p-4"
            style={{ background: '#111', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.30)' }}>Thèmes</div>
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
                    onClick={() => {
                      setTopic(t);
                      // On mobile (sidebar stacks above content), scroll down to words
                      if (window.innerWidth < 1024) {
                        setTimeout(() => {
                          document.getElementById('vocab-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }, 50);
                      }
                    }}
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
                      <div className="text-xs font-medium truncate">{(() => { const raw = topicData.title || t; return raw.includes('/') ? raw.split('/')[1].trim() : raw; })()}</div>
                      <div className="text-[10px] mt-0.5" style={{ color: 'rgba(255,255,255,0.25)' }}>{topicWords.length} mots{pct > 0 ? ` · ${pct}%` : ''}</div>
                    </div>
                    {pct === 100 && <span className="text-[10px] font-bold shrink-0" style={{ color: '#4ade80' }}>✓</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* ── Main content ── */}
        <div id="vocab-content" className="flex-1 min-w-0">

          {/* Topic header + search */}
          {currentTopic.title && (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-lg font-black text-white">{currentTopic.title}</h2>
                <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  {learnedInTopic}/{allWords.length} appris — cliquez sur un mot pour le marquer
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="rounded-xl px-3.5 py-2 text-sm focus:outline-none w-44 transition-all"
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
            </div>
          )}

          {/* Progress bar */}
          {allWords.length > 0 && (
            <div className="mb-5">
              <div className="flex items-center justify-between text-xs mb-1.5" style={{ color: 'rgba(255,255,255,0.35)' }}>
                <span>Progression du thème</span>
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

          {/* Dictionary table */}
          {filtered.length === 0 ? (
            <div className="text-center py-16" style={{ color: 'rgba(255,255,255,0.30)' }}>
              <div
                className="font-black leading-none mb-3 select-none"
                style={{ fontSize: 'clamp(3rem,10vw,5rem)', color: 'rgba(255,255,255,0.06)', letterSpacing: '-0.04em' }}
              >
                404
              </div>
              <p>Mot introuvable &quot;{search}&quot;</p>
            </div>
          ) : (
            <div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.09)' }}>
              {/* Desktop table header — hidden on mobile */}
              <table className="hidden sm:table" style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.10)' }}>
                    <th style={{ padding: '9px 14px 9px 12px', textAlign: 'left', fontWeight: 600, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.40)', width: '33%' }}>🇩🇪 Deutsch</th>
                    <th style={{ padding: '9px 14px', textAlign: 'left', fontWeight: 600, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.40)', borderLeft: '1px solid rgba(255,255,255,0.08)', width: '34%' }}>🇬🇧 English</th>
                    <th style={{ padding: '9px 12px 9px 14px', textAlign: 'left', fontWeight: 600, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.40)', borderLeft: '1px solid rgba(255,255,255,0.08)', width: '33%' }}>🇫🇷 Français</th>
                  </tr>
                </thead>
              </table>

              {/* Rows — each DictTableRow renders a mobile card + a desktop <tr> */}
              <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
                <tbody>
                  {filtered.map((word, i) => {
                    const id = `${level}-${effectiveTopic}-${word.german}`;
                    return (
                      <DictTableRow
                        key={i}
                        word={word}
                        isLearned={isWordLearned(word)}
                        onLearn={() => handleLearnWord(id)}
                      />
                    );
                  })}
                </tbody>
              </table>
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
                PARFAIT !
              </div>
              <div className="text-lg font-black text-green-400 mb-1">Thème terminé !</div>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.40)' }}>Vous avez appris les {allWords.length} mots !</p>
            </div>
          )}

          {/* ── Letter navigation (prev / next topic) ── */}
          {(() => {
            const idx  = topics.indexOf(effectiveTopic);
            const prev = topics[idx - 1] ?? null;
            const next = topics[idx + 1] ?? null;
            if (!prev && !next) return null;

            const getLabel = (key) => {
              const t = vocabulary[level]?.[key];
              if (!t) return key;
              const raw = t.title || key;
              // Letter categories: "M — machen · mögen" → "M"
              if (raw.includes('—')) return raw.split('—')[0].trim();
              // Topic categories: "Greetings / Begrüßungen" → "Greetings"
              if (raw.includes('/')) return raw.split('/')[0].trim();
              // Fallback: first 20 chars
              return raw.length > 20 ? raw.slice(0, 18) + '…' : raw;
            };

            const scrollToTop = () => {
              document.querySelector('main,#main,div[style*="min-height"]')?.scrollTo({ top: 0 });
              window.scrollTo({ top: 0, behavior: 'smooth' });
            };

            const go = (key) => { setTopic(key); setSearch(''); scrollToTop(); };

            return (
              <div className="mt-8 flex items-center gap-3">
                {/* Previous */}
                {prev ? (
                  <button
                    onClick={() => go(prev)}
                    className="flex items-center gap-2 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-150 hover:scale-[1.02] active:scale-95"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: `1px solid ${la.border}`,
                      color: la.color,
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = la.bg}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                  >
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>
                      <span style={{ opacity: 0.5, fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', lineHeight: 1 }}>Retour</span>
                      {getLabel(prev)}
                    </span>
                  </button>
                ) : <div className="flex-1" />}

                {/* Spacer */}
                <div className="flex-1" />

                {/* Position indicator */}
                <div className="hidden sm:flex items-center gap-1">
                  {topics.map((t) => (
                    <button
                      key={t}
                      onClick={() => go(t)}
                      className="transition-all duration-150 rounded-full"
                      style={{
                        width: t === effectiveTopic ? 20 : 7, 
                        height: 7,
                        background: t === effectiveTopic ? la.color : 'rgba(255,255,255,0.15)',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                      title={getLabel(t)}
                    />
                  ))}
                </div>

                <div className="flex-1" />

                {/* Next */}
                {next ? (
                  <button
                    onClick={() => go(next)}
                    className="flex items-center gap-2 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-150 hover:scale-[1.02] active:scale-95"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: `1px solid ${la.border}`,
                      color: la.color,
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = la.bg}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                  >
                    <span className="text-right">
                      <span style={{ opacity: 0.5, fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', lineHeight: 1 }}>Suivant</span>
                      {getLabel(next)}
                    </span>
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ) : <div className="flex-1" />}
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
};

export default Vocabulary;
