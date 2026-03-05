import { useState, useEffect, useCallback, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   DATA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const VOCAB_PAIRS = [
  { de: 'der Hund', fr: 'le chien' }, { de: 'die Katze', fr: 'le chat' },
  { de: 'das Haus', fr: 'la maison' }, { de: 'das Auto', fr: 'la voiture' },
  { de: 'das Buch', fr: 'le livre' }, { de: 'die Schule', fr: 'l\'école' },
  { de: 'der Baum', fr: 'l\'arbre' }, { de: 'die Blume', fr: 'la fleur' },
  { de: 'das Wasser', fr: 'l\'eau' }, { de: 'das Brot', fr: 'le pain' },
  { de: 'der Tisch', fr: 'la table' }, { de: 'der Stuhl', fr: 'la chaise' },
];

const SPEED_QUESTIONS = [
  { q: 'Wie sagt man "bonjour" auf Deutsch?', opts: ['Hallo', 'Tschüss', 'Danke', 'Bitte'], ans: 0 },
  { q: '"Das ist groß" bedeutet...?', opts: ['C\'est petit', 'C\'est grand', 'C\'est beau', 'C\'est bon'], ans: 1 },
  { q: 'Was ist die Mutter auf Französisch?', opts: ['le père', 'la sœur', 'la mère', 'la fille'], ans: 2 },
  { q: 'Wie sagt man "j\'ai faim"?', opts: ['Ich habe Durst', 'Ich bin müde', 'Ich habe Hunger', 'Ich bin krank'], ans: 2 },
  { q: '"Der Hund" bedeutet...?', opts: ['le chat', 'le chien', 'l\'oiseau', 'le lapin'], ans: 1 },
  { q: 'Was ist "schön"?', opts: ['laid', 'petit', 'beau', 'grand'], ans: 2 },
  { q: 'Wie heißt "travailler" auf Deutsch?', opts: ['lernen', 'spielen', 'schlafen', 'arbeiten'], ans: 3 },
  { q: '"Ich bin müde" = ?', opts: ['Je suis malade', 'J\'ai faim', 'Je suis fatigué', 'J\'ai sommeil'], ans: 2 },
  { q: 'Was bedeutet "die Schule"?', opts: ['le bureau', 'l\'école', 'la maison', 'la rue'], ans: 1 },
  { q: 'Artikel von "Haus"?', opts: ['der', 'die', 'das', 'den'], ans: 2 },
  { q: '"Auf Wiedersehen" bedeutet...?', opts: ['Bonjour', 'Bonne nuit', 'Au revoir', 'Merci'], ans: 2 },
  { q: 'Wie sagt man "j\'ai 20 ans"?', opts: ['Ich habe 20 Jahren', 'Ich bin 20 Jahr', 'Ich habe 20 Jahr alt', 'Ich bin 20 Jahre alt'], ans: 3 },
];

const PHRASE_BUILDER = [
  { words: ['Ich', 'heiße', 'Maria', 'und', 'komme', 'aus', 'Deutschland'], correct: 'Ich heiße Maria und komme aus Deutschland', hint: 'Ich me présente...' },
  { words: ['Guten', 'Morgen', 'Wie', 'geht', 'es', 'Ihnen'], correct: 'Guten Morgen Wie geht es Ihnen', hint: 'Salutation formelle...' },
  { words: ['Ich', 'möchte', 'einen', 'Kaffee', 'bitte'], correct: 'Ich möchte einen Kaffee bitte', hint: 'Commande au café...' },
  { words: ['Wo', 'ist', 'der', 'nächste', 'Bahnhof', 'bitte'], correct: 'Wo ist der nächste Bahnhof bitte', hint: 'Question en ville...' },
  { words: ['Ich', 'lerne', 'jeden', 'Tag', 'Deutsch'], correct: 'Ich lerne jeden Tag Deutsch', hint: 'Parler de ses habitudes...' },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   GAME 1 — MEMORY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function GameMemory({ il }) {
  const border = il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)';
  const textC = il ? '#0f172a' : '#fff';
  const muted = il ? 'rgba(15,23,42,0.50)' : 'rgba(255,255,255,0.45)';

  const createDeck = useCallback(() => {
    const pairs = VOCAB_PAIRS.slice(0, 6);
    const cards = [...pairs.map((p, i) => ({ id: i * 2, text: p.de, pairId: i, lang: 'de' })),
      ...pairs.map((p, i) => ({ id: i * 2 + 1, text: p.fr, pairId: i, lang: 'fr' }))];
    return cards.sort(() => Math.random() - 0.5);
  }, []);

  const [deck, setDeck] = useState(() => createDeck());
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [won, setWon] = useState(false);
  const lockRef = useRef(false);

  const reset = () => { setDeck(createDeck()); setFlipped([]); setMatched([]); setMoves(0); setWon(false); lockRef.current = false; };

  const handleFlip = (idx) => {
    if (lockRef.current || flipped.includes(idx) || matched.includes(deck[idx].pairId)) return;
    const newFlipped = [...flipped, idx];
    setFlipped(newFlipped);
    if (newFlipped.length === 2) {
      lockRef.current = true;
      setMoves(m => m + 1);
      const [a, b] = newFlipped.map(i => deck[i]);
      if (a.pairId === b.pairId) {
        const newMatched = [...matched, a.pairId];
        setMatched(newMatched);
        setFlipped([]);
        lockRef.current = false;
        if (newMatched.length === VOCAB_PAIRS.slice(0, 6).length) setWon(true);
      } else {
        setTimeout(() => { setFlipped([]); lockRef.current = false; }, 900);
      }
    }
  };

  const isFlipped = (idx) => flipped.includes(idx) || matched.includes(deck[idx]?.pairId);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm" style={{ color: muted }}>Coups: <strong style={{ color: textC }}>{moves}</strong></div>
        <button onClick={reset} className="text-xs px-3 py-1.5 rounded-lg font-bold" style={{ background: '#4f46e5' + '18', color: '#4f46e5', border: '1px solid #4f46e530' }}>🔄 Rejouer</button>
      </div>
      {won && (
        <div className="mb-4 rounded-2xl p-4 text-center" style={{ background: 'rgba(52,211,153,0.12)', border: '1px solid rgba(52,211,153,0.30)' }}>
          <span className="font-black text-base" style={{ color: '#34d399' }}>🎉 Bravo ! Complété en {moves} coups !</span>
        </div>
      )}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
        {deck.map((c, i) => {
          const isMatch = matched.includes(c.pairId);
          const show = isFlipped(i);
          return (
            <button key={i} onClick={() => handleFlip(i)}
              className="h-16 rounded-xl text-sm font-bold transition-all"
              style={{
                background: isMatch ? 'rgba(52,211,153,0.15)' : show ? '#4f46e5' + '18' : (il ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'),
                border: `1px solid ${isMatch ? 'rgba(52,211,153,0.40)' : show ? '#4f46e555' : border}`,
                color: isMatch ? '#34d399' : show ? '#4f46e5' : 'transparent',
                transform: show ? 'scale(1.03)' : 'scale(1)',
              }}>
              {show ? c.text : '?'}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   GAME 2 — SPEED QUIZ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function GameSpeedQuiz({ il }) {
  const textC = il ? '#0f172a' : '#fff';
  const muted = il ? 'rgba(15,23,42,0.50)' : 'rgba(255,255,255,0.45)';
  const border = il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)';

  const TOTAL_TIME = 30;
  const [qIdx, setQIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(TOTAL_TIME);
  const [started, setStarted] = useState(false);
  const [over, setOver] = useState(false);
  const [chosen, setChosen] = useState(null);
  const [order, setOrder] = useState(() => SPEED_QUESTIONS.map((_, i) => i).sort(() => Math.random() - 0.5));

  const reset = () => { setQIdx(0); setScore(0); setTime(TOTAL_TIME); setStarted(false); setOver(false); setChosen(null); setOrder(SPEED_QUESTIONS.map((_, i) => i).sort(() => Math.random() - 0.5)); };

  useEffect(() => {
    if (!started || over) return;
    if (time === 0) { setTimeout(() => setOver(true), 0); return; }
    const t = setTimeout(() => setTime(s => s - 1), 1000);
    return () => clearTimeout(t);
  }, [started, over, time]);

  const q = SPEED_QUESTIONS[order[qIdx % order.length]];

  const handleAnswer = (ai) => {
    if (chosen !== null || over || !started) return;
    setChosen(ai);
    if (ai === q.ans) setScore(s => s + 1);
    setTimeout(() => {
      setChosen(null);
      setQIdx(i => i + 1);
      if (qIdx + 1 >= SPEED_QUESTIONS.length) setOver(true);
    }, 400);
  };

  const pct = (time / TOTAL_TIME) * 100;

  return (
    <div>
      {!started && !over && (
        <div className="text-center py-8">
          <div className="text-4xl mb-4">⚡</div>
          <p className="mb-4 text-sm" style={{ color: muted }}>30 secondes, le maximum de bonnes réponses !</p>
          <button onClick={() => setStarted(true)} className="px-8 py-3 rounded-xl font-bold text-sm" style={{ background: 'linear-gradient(135deg,#4f46e5,#7c3aed)', color: '#fff' }}>
            Démarrer !
          </button>
        </div>
      )}

      {started && !over && (
        <>
          <div className="flex items-center justify-between mb-2">
            <span className="font-black text-lg" style={{ color: time <= 10 ? '#ef4444' : textC }}>{time}s</span>
            <span className="text-sm font-bold" style={{ color: '#34d399' }}>Score: {score}</span>
          </div>
          <div className="w-full h-2 rounded-full mb-5" style={{ background: il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)' }}>
            <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: pct > 50 ? 'linear-gradient(90deg,#34d399,#10b981)' : pct > 25 ? 'linear-gradient(90deg,#f59e0b,#d97706)' : 'linear-gradient(90deg,#ef4444,#dc2626)' }} />
          </div>
          <p className="text-base font-bold mb-4 text-center" style={{ color: textC }}>{q.q}</p>
          <div className="grid grid-cols-2 gap-3">
            {q.opts.map((opt, i) => {
              let bg = il ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)';
              let bc = border; let tc = muted;
              if (chosen !== null) {
                if (i === q.ans) { bg = 'rgba(52,211,153,0.14)'; bc = 'rgba(52,211,153,0.40)'; tc = '#34d399'; }
                else if (i === chosen) { bg = 'rgba(239,68,68,0.10)'; bc = 'rgba(239,68,68,0.35)'; tc = '#ef4444'; }
              }
              return (
                <button key={i} onClick={() => handleAnswer(i)}
                  className="py-2.5 rounded-xl text-sm font-medium transition-all"
                  style={{ background: bg, border: `1px solid ${bc}`, color: tc }}>
                  {opt}
                </button>
              );
            })}
          </div>
        </>
      )}

      {over && (
        <div className="text-center py-8">
          <div className="text-5xl mb-3">{score >= 8 ? '🏆' : score >= 5 ? '⭐' : '💪'}</div>
          <div className="text-3xl font-black mb-2" style={{ color: score >= 8 ? '#34d399' : '#f59e0b' }}>{score} / {Math.min(qIdx, SPEED_QUESTIONS.length)}</div>
          <p className="text-sm mb-6" style={{ color: muted }}>{score >= 8 ? 'Excellent ! Vous êtes rapide !' : score >= 5 ? 'Bien joué ! Continuez !' : 'Entraînez-vous encore !'}</p>
          <button onClick={reset} className="px-8 py-3 rounded-xl font-bold text-sm" style={{ background: 'linear-gradient(135deg,#4f46e5,#7c3aed)', color: '#fff' }}>
            Rejouer
          </button>
        </div>
      )}
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   GAME 3 — PHRASE BUILDER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function GamePhraseBuilder({ il }) {
  const textC = il ? '#0f172a' : '#fff';
  const muted = il ? 'rgba(15,23,42,0.50)' : 'rgba(255,255,255,0.45)';
  const border = il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)';
  const accent = '#7124e5';

  const [idx, setIdx] = useState(0);
  const [built, setBuilt] = useState([]);
  const [available, setAvailable] = useState(() => [...PHRASE_BUILDER[0].words].sort(() => Math.random() - 0.5));
  const [checked, setChecked] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [scores, setScores] = useState(0);

  const prompt = PHRASE_BUILDER[idx];

  const reset = (newIdx) => {
    const p = PHRASE_BUILDER[newIdx];
    setAvailable([...p.words].sort(() => Math.random() - 0.5));
    setBuilt([]); setChecked(false); setCorrect(false);
  };

  const addWord = (word, i) => {
    if (checked) return;
    setBuilt(b => [...b, word]);
    setAvailable(a => a.filter((_, ai) => ai !== i));
  };

  const removeWord = (word, i) => {
    if (checked) return;
    setBuilt(b => b.filter((_, bi) => bi !== i));
    setAvailable(a => [...a, word].sort(() => Math.random() - 0.5));
  };

  const check = () => {
    const sentence = built.join(' ');
    const isCorrect = sentence === prompt.correct;
    setCorrect(isCorrect);
    setChecked(true);
    if (isCorrect) setScores(s => s + 1);
  };

  const next = () => {
    const newIdx = (idx + 1) % PHRASE_BUILDER.length;
    setIdx(newIdx); reset(newIdx);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs" style={{ color: muted }}>Phrase {idx + 1}/{PHRASE_BUILDER.length}</span>
        <span className="text-xs font-bold" style={{ color: '#34d399' }}>Score: {scores}</span>
      </div>
      <p className="text-sm mb-2" style={{ color: muted }}>💡 {prompt.hint}</p>

      {/* Drop zone */}
      <div className="min-h-14 rounded-2xl p-3 flex flex-wrap gap-2 mb-4"
        style={{ background: checked ? (correct ? 'rgba(52,211,153,0.08)' : 'rgba(239,68,68,0.06)') : (il ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)'), border: `1.5px dashed ${checked ? (correct ? 'rgba(52,211,153,0.40)' : 'rgba(239,68,68,0.35)') : border}`, minHeight: 56 }}>
        {built.length === 0 && <span className="text-sm" style={{ color: muted }}>← Cliquez les mots pour construire la phrase</span>}
        {built.map((w, i) => (
          <button key={i} onClick={() => removeWord(w, i)}
            className="px-3 py-1.5 rounded-lg text-sm font-bold transition-all hover:scale-[1.05]"
            style={{ background: checked ? (correct ? 'rgba(52,211,153,0.15)' : 'rgba(239,68,68,0.10)') : accent + '18', color: checked ? (correct ? '#34d399' : '#ef4444') : accent, border: `1px solid ${checked ? (correct ? 'rgba(52,211,153,0.40)' : 'rgba(239,68,68,0.35)') : accent + '33'}` }}>
            {w}
          </button>
        ))}
      </div>

      {/* Available words */}
      <div className="flex flex-wrap gap-2 mb-4">
        {available.map((w, i) => (
          <button key={i} onClick={() => addWord(w, i)}
            className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all hover:scale-[1.05]"
            style={{ background: il ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.07)', color: textC, border: `1px solid ${border}` }}>
            {w}
          </button>
        ))}
      </div>

      {/* Feedback */}
      {checked && !correct && (
        <div className="rounded-xl p-3 mb-4 text-xs" style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', color: '#ef4444' }}>
          Réponse correcte : <strong>{prompt.correct}</strong>
        </div>
      )}

      <div className="flex gap-3">
        {!checked ? (
          <button onClick={check} disabled={built.length < prompt.words.length}
            className="px-6 py-2.5 rounded-xl text-sm font-bold"
            style={{ background: built.length < prompt.words.length ? (il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)') : 'linear-gradient(135deg,#4f46e5,#7c3aed)', color: built.length < prompt.words.length ? muted : '#fff', cursor: built.length < prompt.words.length ? 'not-allowed' : 'pointer' }}>
            Vérifier
          </button>
        ) : (
          <button onClick={next} className="px-6 py-2.5 rounded-xl text-sm font-bold hover:scale-[1.02] transition-all" style={{ background: 'linear-gradient(135deg,#4f46e5,#7c3aed)', color: '#fff' }}>
            {idx + 1 < PHRASE_BUILDER.length ? 'Phrase suivante →' : '🔄 Recommencer'}
          </button>
        )}
        <button onClick={() => reset(idx)} className="px-4 py-2.5 rounded-xl text-sm" style={{ background: il ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)', color: muted, border: `1px solid ${border}` }}>
          Mélanger
        </button>
      </div>
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   GAME 4 — WORD MATCH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function GameWordMatch({ il }) {
  const textC = il ? '#0f172a' : '#fff';
  const muted = il ? 'rgba(15,23,42,0.50)' : 'rgba(255,255,255,0.45)';
  const border = il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)';
  const accent = '#7124e5';

  const genRound = useCallback(() => {
    const pairs = VOCAB_PAIRS.sort(() => Math.random() - 0.5).slice(0, 5);
    const deWords = pairs.map((p, i) => ({ id: i, text: p.de })).sort(() => Math.random() - 0.5);
    const frWords = pairs.map((p, i) => ({ id: i, text: p.fr })).sort(() => Math.random() - 0.5);
    return { pairs, deWords, frWords };
  }, []);

  const [round, setRound] = useState(() => genRound());
  const [selDe, setSelDe] = useState(null);
  const [selFr, setSelFr] = useState(null);
  const [matched, setMatched] = useState([]);
  const [wrong, setWrong] = useState([]);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const reset = () => { const r = genRound(); setRound(r); setSelDe(null); setSelFr(null); setMatched([]); setWrong([]); setDone(false); };

  useEffect(() => {
    if (selDe !== null && selFr !== null) {
      if (selDe === selFr) {
        const nm = [...matched, selDe];
        const isDone = nm.length === round.pairs.length;
        setTimeout(() => {
          setMatched(nm); setSelDe(null); setSelFr(null);
          setScore(s => s + 1);
          if (isDone) setDone(true);
        }, 0);
      } else {
        const pair = [selDe, selFr];
        setTimeout(() => {
          setWrong(pair);
          setTimeout(() => { setWrong([]); setSelDe(null); setSelFr(null); }, 700);
        }, 0);
      }
    }
  }, [selDe, selFr, matched, round.pairs.length]);

  const btnStyle = (id, side) => {
    const sel = side === 'de' ? selDe === id : selFr === id;
    const isMatch = matched.includes(id);
    const isWrong = wrong.includes(id);
    return {
      background: isMatch ? 'rgba(52,211,153,0.12)' : isWrong ? 'rgba(239,68,68,0.10)' : sel ? accent + '18' : (il ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)'),
      border: `1px solid ${isMatch ? 'rgba(52,211,153,0.40)' : isWrong ? 'rgba(239,68,68,0.35)' : sel ? accent + '55' : border}`,
      color: isMatch ? '#34d399' : isWrong ? '#ef4444' : sel ? accent : textC,
      opacity: isMatch ? 0.6 : 1,
      cursor: isMatch ? 'default' : 'pointer',
    };
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-bold" style={{ color: muted }}>Reliez les paires !</span>
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold" style={{ color: '#34d399' }}>{score} paires</span>
          <button onClick={reset} className="text-xs px-3 py-1.5 rounded-lg font-bold" style={{ background: '#4f46e5' + '18', color: '#4f46e5', border: '1px solid #4f46e530' }}>🔄</button>
        </div>
      </div>
      {done && (
        <div className="mb-4 rounded-2xl p-4 text-center" style={{ background: 'rgba(52,211,153,0.12)', border: '1px solid rgba(52,211,153,0.30)' }}>
          <span className="font-black" style={{ color: '#34d399' }}>🎉 Parfait ! Toutes les paires trouvées !</span>
        </div>
      )}
      <div className="grid grid-cols-2 gap-4">
        {/* Deutsch */}
        <div className="flex flex-col gap-2">
          <div className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: muted }}>🇩🇪 Deutsch</div>
          {round.deWords.map(w => (
            <button key={w.id} onClick={() => !matched.includes(w.id) && setSelDe(w.id)}
              className="px-3 py-2.5 rounded-xl text-sm font-bold text-left transition-all"
              style={btnStyle(w.id, 'de')}>
              {w.text}
            </button>
          ))}
        </div>
        {/* Français */}
        <div className="flex flex-col gap-2">
          <div className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: muted }}>🇫🇷 Français</div>
          {round.frWords.map(w => (
            <button key={w.id} onClick={() => !matched.includes(w.id) && setSelFr(w.id)}
              className="px-3 py-2.5 rounded-xl text-sm font-bold text-left transition-all"
              style={btnStyle(w.id, 'fr')}>
              {w.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   MAIN PAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const GAMES = [
  { id: 'memory', label: 'Memory', icon: '🧩', desc: 'Trouvez les paires DE/FR', component: GameMemory },
  { id: 'speed', label: 'Speed Quiz', icon: '⚡', desc: 'Max de bonnes réponses en 30s', component: GameSpeedQuiz },
  { id: 'builder', label: 'Phrase Builder', icon: '🔧', desc: 'Remettez les mots dans l\'ordre', component: GamePhraseBuilder },
  { id: 'match', label: 'Word Match', icon: '🔗', desc: 'Reliez les mots et leurs traductions', component: GameWordMatch },
];

export default function MiniGames() {
  const { theme } = useTheme();
  const il = theme === 'light';
  const bg = il ? '#f0f2f5' : '#0d0d0d';
  const card = il ? '#fff' : '#111';
  const border = il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)';
  const textC = il ? '#0f172a' : '#fff';
  const muted = il ? 'rgba(15,23,42,0.50)' : 'rgba(255,255,255,0.45)';
  const accent = '#7124e5';

  const [activeGame, setActiveGame] = useState('memory');
  const ActiveComponent = GAMES.find(g => g.id === activeGame)?.component || GameMemory;

  return (
    <div style={{ paddingTop: 52, background: bg, minHeight: '100vh' }}>

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-4 text-[10px] font-bold uppercase tracking-widest"
          style={{ background: accent + '18', border: `1px solid ${accent}33`, color: accent }}>
          🎮 Mini Games
        </div>
        <h1 className="text-3xl md:text-4xl font-black mb-2" style={{ color: textC, letterSpacing: '-0.03em' }}>
          Jeux d'apprentissage
        </h1>
        <p className="text-sm md:text-base" style={{ color: muted }}>
          Apprenez l'allemand en jouant ! 4 mini-jeux pour pratiquer le vocabulaire et les phrases.
        </p>
      </div>

      {/* Game selector */}
      <div className="max-w-6xl mx-auto px-6 mb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {GAMES.map(g => (
            <button key={g.id} onClick={() => setActiveGame(g.id)}
              className="rounded-2xl p-4 text-left transition-all"
              style={{
                background: activeGame === g.id ? accent + '14' : card,
                border: `1px solid ${activeGame === g.id ? accent + '55' : border}`,
              }}>
              <div className="text-2xl mb-2">{g.icon}</div>
              <div className="font-black text-sm" style={{ color: activeGame === g.id ? accent : textC }}>{g.label}</div>
              <div className="text-xs mt-0.5" style={{ color: muted }}>{g.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Game area */}
      <div className="max-w-3xl mx-auto px-6 pb-16">
        <div className="rounded-3xl p-6" style={{ background: card, border: `1px solid ${border}` }}>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-2xl">{GAMES.find(g => g.id === activeGame)?.icon}</span>
            <div>
              <h2 className="font-black text-lg" style={{ color: textC }}>{GAMES.find(g => g.id === activeGame)?.label}</h2>
              <p className="text-xs" style={{ color: muted }}>{GAMES.find(g => g.id === activeGame)?.desc}</p>
            </div>
          </div>
          <ActiveComponent il={il} />
        </div>
      </div>
    </div>
  );
}
