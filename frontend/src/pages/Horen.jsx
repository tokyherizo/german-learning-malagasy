import { useState, useCallback, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

/* ─── Dialog data ─────────────────────────────────────────────── */
const DIALOGS = [
  {
    id: 1, level: 'A1', title: 'Im Café', topic: 'Alltag',
    lines: [
      { speaker: 'A', name: 'Kellner', text: 'Guten Morgen! Was darf es sein?' },
      { speaker: 'B', name: 'Thomas', text: 'Guten Morgen! Einen Kaffee, bitte.' },
      { speaker: 'A', name: 'Kellner', text: 'Mit Milch und Zucker?' },
      { speaker: 'B', name: 'Thomas', text: 'Nur mit Milch, bitte. Was kostet das?' },
      { speaker: 'A', name: 'Kellner', text: 'Das macht zwei Euro fünfzig.' },
    ],
    questions: [
      { q: 'Was möchte Thomas?', opts: ['Tee', 'Kaffee', 'Wasser', 'Saft'], ans: 1 },
      { q: 'Wie viel kostet das Getränk?', opts: ['1,50 €', '3,00 €', '2,50 €', '2,00 €'], ans: 2 },
      { q: 'Was möchte Thomas NICHT?', opts: ['Milch', 'Zucker', 'Kaffee', 'Bestellung'], ans: 1 },
    ],
  },
  {
    id: 2, level: 'A1', title: 'Sich vorstellen', topic: 'Kennenlernen',
    lines: [
      { speaker: 'A', name: 'Anna',  text: 'Hallo! Ich heiße Anna. Wie heißt du?' },
      { speaker: 'B', name: 'Marco', text: 'Ich bin Marco. Woher kommst du?' },
      { speaker: 'A', name: 'Anna',  text: 'Ich komme aus Frankreich. Und du?' },
      { speaker: 'B', name: 'Marco', text: 'Ich komme aus Italien. Was machst du beruflich?' },
      { speaker: 'A', name: 'Anna',  text: 'Ich bin Lehrerin. Und du?' },
      { speaker: 'B', name: 'Marco', text: 'Ich bin Ingenieur.' },
    ],
    questions: [
      { q: 'Woher kommt Anna?', opts: ['Deutschland', 'Frankreich', 'Italien', 'Spanien'], ans: 1 },
      { q: 'Was ist Marcos Beruf?', opts: ['Lehrer', 'Arzt', 'Ingenieur', 'Kellner'], ans: 2 },
      { q: 'Was ist Anna von Beruf?', opts: ['Ärztin', 'Lehrerin', 'Ingenieurin', 'Kellnerin'], ans: 1 },
    ],
  },
  {
    id: 3, level: 'A2', title: 'Am Bahnhof', topic: 'Reise',
    lines: [
      { speaker: 'A', name: 'Tourist', text: 'Entschuldigung, wann fährt der nächste Zug nach Berlin?' },
      { speaker: 'B', name: 'Mitarbeiter', text: 'Der nächste Zug fährt um 14:30 Uhr ab.' },
      { speaker: 'A', name: 'Tourist', text: 'Und wie lange dauert die Fahrt?' },
      { speaker: 'B', name: 'Mitarbeiter', text: 'Ungefähr zwei Stunden.' },
      { speaker: 'A', name: 'Tourist', text: 'Eine Fahrkarte nach Berlin, bitte. Zweite Klasse.' },
      { speaker: 'B', name: 'Mitarbeiter', text: 'Das kostet 45 Euro. Haben Sie eine BahnCard?' },
    ],
    questions: [
      { q: 'Wann fährt der Zug?', opts: ['13:30', '15:00', '14:30', '16:00'], ans: 2 },
      { q: 'Wie lange dauert die Fahrt nach Berlin?', opts: ['1 Stunde', '3 Stunden', '45 Min', '2 Stunden'], ans: 3 },
      { q: 'Welche Klasse möchte der Tourist?', opts: ['Erste', 'Zweite', 'Business', 'Dritte'], ans: 1 },
    ],
  },
  {
    id: 4, level: 'A2', title: 'Beim Arzt', topic: 'Gesundheit',
    lines: [
      { speaker: 'A', name: 'Ärztin', text: 'Guten Tag! Was kann ich für Sie tun?' },
      { speaker: 'B', name: 'Patient', text: 'Guten Tag! Ich habe seit drei Tagen Kopfschmerzen und Fieber.' },
      { speaker: 'A', name: 'Ärztin', text: 'Haben Sie auch Husten oder Halsschmerzen?' },
      { speaker: 'B', name: 'Patient', text: 'Ja, ein bisschen Husten. Ich fühle mich sehr müde.' },
      { speaker: 'A', name: 'Ärztin', text: 'Ich schreibe Ihnen ein Rezept. Bleiben Sie drei Tage zu Hause.' },
    ],
    questions: [
      { q: 'Wie lange hat der Patient Kopfschmerzen?', opts: ['1 Tag', '2 Tage', '3 Tage', '5 Tage'], ans: 2 },
      { q: 'Was hat der Patient noch?', opts: ['Bauchschmerzen', 'Husten', 'Rückenschmerzen', 'Schwindel'], ans: 1 },
      { q: 'Was macht die Ärztin?', opts: ['Operation', 'Rezept schreiben', 'Krankenhaus', 'Bluttest'], ans: 1 },
    ],
  },
  {
    id: 5, level: 'B1', title: 'Wohnungssuche', topic: 'Wohnen',
    lines: [
      { speaker: 'A', name: 'Vermieter', text: 'Guten Tag! Sie interessieren sich für die Wohnung?' },
      { speaker: 'B', name: 'Interessent', text: 'Ja, genau. Wie groß ist die Wohnung?' },
      { speaker: 'A', name: 'Vermieter', text: 'Sie hat 65 Quadratmeter, drei Zimmer, Küche und Bad.' },
      { speaker: 'B', name: 'Interessent', text: 'Ist die Heizung inklusive? Und wie hoch ist die Kaution?' },
      { speaker: 'A', name: 'Vermieter', text: 'Heizung kostet extra. Die Kaution beträgt drei Monatsmieten.' },
    ],
    questions: [
      { q: 'Wie groß ist die Wohnung?', opts: ['45 m²', '75 m²', '55 m²', '65 m²'], ans: 3 },
      { q: 'Wie viele Zimmer hat die Wohnung?', opts: ['2', '3', '4', '5'], ans: 1 },
      { q: 'Wie hoch ist die Kaution?', opts: ['1 Monatsmiete', '2 Monatsmieten', '3 Monatsmieten', '4 Monatsmieten'], ans: 2 },
    ],
  },
];

/* ─── Voice & intonation helpers ───────────────────────────────── */
// Pick the best available German voice (Google > Microsoft Katja > any de-DE)
const getBestDeVoice = () => {
  const voices = window.speechSynthesis?.getVoices() || [];
  const de = voices.filter(v => v.lang === 'de-DE' || v.lang.startsWith('de'));
  return (
    de.find(v => /google/i.test(v.name) && v.lang === 'de-DE') ||
    de.find(v => /google/i.test(v.name)) ||
    de.find(v => /katja/i.test(v.name)) ||
    de.find(v => /hedda|helene|magdalena|stefan/i.test(v.name)) ||
    de.find(v => /microsoft/i.test(v.name)) ||
    de.find(v => v.lang === 'de-DE') ||
    de[0] || null
  );
};

// German sentence intonation:
//  Ja/Nein-Fragen ("Haben Sie…?") → rising pitch
//  W-Fragen ("Was kostet…?")     → falling pitch (like a statement)
//  Exclamations                  → slightly energetic
//  Statements                    → neutral
const getIntonation = (text) => {
  const t = text.trim();
  const isQ   = t.endsWith('?');
  const isExcl = t.endsWith('!');
  const isWQ  = isQ && /^(wer|was|wie|wo |woher|wohin|wann|warum|weshalb|welch|wessen|wieso|inwiefern|womit|wof)/i.test(t);
  const isYNQ = isQ && !isWQ;
  return {
    rate:  0.93,
    pitch: isYNQ ? 1.18 : isWQ ? 0.92 : isExcl ? 1.07 : 1.0,
  };
};

const makeUtterance = (text, { onStart, onEnd, onError } = {}) => {
  if (!window.speechSynthesis) return null;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'de-DE';
  const { rate, pitch } = getIntonation(text);
  u.rate = rate; u.pitch = pitch;
  const voice = getBestDeVoice();
  if (voice) u.voice = voice;
  if (onStart) u.onstart = onStart;
  if (onEnd)   u.onend   = onEnd;
  if (onError) u.onerror = onError;
  return u;
};

/* ─── Small speaker button ─────────────────────────────────────── */
const SpeakBtn = ({ text, compact = false }) => {
  const [speaking, setSpeaking] = useState(false);
  const { theme } = useTheme();
  const il = theme === 'light';

  const speak = useCallback(() => {
    if (!window.speechSynthesis) return;
    if (speaking) { window.speechSynthesis.cancel(); setSpeaking(false); return; }
    window.speechSynthesis.cancel();
    const trySpeak = () => {
      const u = makeUtterance(text, {
        onStart: () => setSpeaking(true),
        onEnd:   () => setSpeaking(false),
        onError: () => setSpeaking(false),
      });
      if (u) window.speechSynthesis.speak(u);
    };
    if (window.speechSynthesis.getVoices().length > 0) {
      trySpeak();
    } else {
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.onvoiceschanged = null;
        trySpeak();
      };
    }
  }, [text, speaking]);

  return (
    <button onClick={speak}
      className={`flex items-center justify-center rounded-full transition-all ${compact ? 'w-7 h-7 text-sm' : 'w-9 h-9 text-base'}`}
      style={{
        background: speaking ? '#7124e5' : (il ? 'rgba(113,36,229,0.10)' : 'rgba(113,36,229,0.18)'),
        color: speaking ? '#fff' : '#7124e5',
        border: '1px solid #7124e522',
        flexShrink: 0,
      }}
      title={speaking ? 'Stop' : 'Écouter'}>
      {speaking ? '⏹' : '▶'}
    </button>
  );
};

/* ─── Play full dialog sequentially ────────────────────────────── */
const PlayAllBtn = ({ lines, onLineChange }) => {
  const [playing, setPlaying] = useState(false);
  const stopRef = useRef(false);
  const { theme } = useTheme();
  const il = theme === 'light';

  const playFromRef = useRef(null);
  useEffect(() => {
    playFromRef.current = (idx) => {
      if (stopRef.current || idx >= lines.length) {
        setPlaying(false);
        onLineChange?.(-1);
        return;
      }
      onLineChange?.(idx);
      const u = makeUtterance(lines[idx].text, {
        onEnd:   () => { if (!stopRef.current) setTimeout(() => playFromRef.current(idx + 1), 380); },
        onError: () => { if (!stopRef.current) setTimeout(() => playFromRef.current(idx + 1), 200); },
      });
      if (u) window.speechSynthesis.speak(u);
    };
  });
  const playFrom = useCallback((idx) => playFromRef.current?.(idx), []);

  const toggle = useCallback(() => {
    if (playing) {
      stopRef.current = true;
      window.speechSynthesis.cancel();
      setPlaying(false);
      onLineChange?.(-1);
    } else {
      stopRef.current = false;
      setPlaying(true);
      window.speechSynthesis.cancel();
      const start = () => playFrom(0);
      if (window.speechSynthesis.getVoices().length > 0) {
        start();
      } else {
        window.speechSynthesis.onvoiceschanged = () => {
          window.speechSynthesis.onvoiceschanged = null;
          start();
        };
      }
    }
  }, [playing, playFrom, onLineChange]);

  return (
    <button onClick={toggle}
      className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all"
      style={{
        background: playing ? '#7124e5' : (il ? 'rgba(113,36,229,0.10)' : 'rgba(113,36,229,0.18)'),
        color: playing ? '#fff' : '#7124e5',
        border: '1px solid #7124e533',
        flexShrink: 0,
      }}>
      {playing ? '⏹ Stop' : '▶ Écouter le dialogue'}
    </button>
  );
};

/* ─── Level badge ────────────────────────────────────────────────── */
const LvlBadge = ({ level }) => {
  const colors = { A1: '#818cf8', A2: '#a78bfa', B1: '#34d399', B2: '#f59e0b' };
  const c = colors[level] || '#818cf8';
  return (
    <span className="text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-widest"
      style={{ background: c + '22', color: c, border: `1px solid ${c}40` }}>{level}</span>
  );
};

/* ─── Main page ─────────────────────────────────────────────── */
export default function Horen() {
  const { theme } = useTheme();
  const il = theme === 'light';
  const bg = il ? '#f0f2f5' : '#0d0d0d';
  const card = il ? '#fff' : '#111';
  const border = il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)';
  const text = il ? '#0f172a' : '#fff';
  const muted = il ? 'rgba(15,23,42,0.50)' : 'rgba(255,255,255,0.45)';

  const [levelFilter, setLevelFilter] = useState('Tout');
  const [selected, setSelected] = useState(DIALOGS[0].id);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [scores, setScores] = useState({});
  const [activeLine, setActiveLine] = useState(-1);
  const contentRef = useRef(null);

  const scrollToContent = () => {
    setTimeout(() => {
      if (contentRef.current) {
        const top = contentRef.current.getBoundingClientRect().top + window.scrollY - 64;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 50);
  };

  const levels = ['Tout', 'A1', 'A2', 'B1'];
  const filtered = levelFilter === 'Tout' ? DIALOGS : DIALOGS.filter(d => d.level === levelFilter);
  const dialog = DIALOGS.find(d => d.id === selected) || filtered[0];

  const handleAnswer = (qi, ai) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qi]: ai }));
  };

  const handleSubmit = () => {
    if (!dialog) return;
    let correct = 0;
    dialog.questions.forEach((q, i) => { if (answers[i] === q.ans) correct++; });
    setScores(prev => ({ ...prev, [dialog.id]: { correct, total: dialog.questions.length } }));
    setSubmitted(true);
  };

  const handleNext = () => {
    setAnswers({}); setSubmitted(false);
    const idx = filtered.findIndex(d => d.id === selected);
    const next = filtered[(idx + 1) % filtered.length];
    if (next) setSelected(next.id);
  };

  const accentPurple = '#7124e5';

  return (
    <div style={{ paddingTop: 52, background: bg, minHeight: '100vh' }}>

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-4 text-[10px] font-bold uppercase tracking-widest"
          style={{ background: accentPurple + '18', border: `1px solid ${accentPurple}33`, color: accentPurple }}>
          🎧 Hören
        </div>
        <h1 className="text-3xl md:text-4xl font-black mb-2 leading-tight" style={{ color: text, letterSpacing: '-0.03em' }}>
          Compréhension orale
        </h1>
        <p className="text-sm md:text-base" style={{ color: muted }}>
          Écoutez les dialogues en allemand et répondez aux questions de compréhension.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-16 flex flex-col lg:flex-row gap-6">

        {/* ── Left: dialog list ─────────────────────────── */}
        <div className="w-full lg:w-72 shrink-0 flex flex-col gap-3">
          {/* Level filter */}
          <div className="flex gap-2 flex-wrap mb-1">
            {levels.map(l => (
              <button key={l} onClick={() => { setLevelFilter(l); }}
                className="px-3 py-1 rounded-full text-xs font-bold transition-all"
                style={{
                  background: levelFilter === l ? accentPurple : (il ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'),
                  color: levelFilter === l ? '#fff' : muted,
                  border: `1px solid ${levelFilter === l ? accentPurple : (il ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.10)')}`,
                }}>{l}</button>
            ))}
          </div>

          {filtered.map(d => {
            const sc = scores[d.id];
            return (
              <button key={d.id} onClick={() => { setSelected(d.id); setAnswers({}); setSubmitted(false); scrollToContent(); }}
                className="text-left rounded-2xl p-4 transition-all"
                style={{
                  background: selected === d.id ? accentPurple + '14' : card,
                  border: `1px solid ${selected === d.id ? accentPurple + '55' : border}`,
                }}>
                <div className="flex items-center justify-between mb-1">
                  <LvlBadge level={d.level} />
                  {sc && (
                    <span className="text-[10px] font-bold" style={{ color: sc.correct === sc.total ? '#34d399' : '#f59e0b' }}>
                      {sc.correct}/{sc.total} ✓
                    </span>
                  )}
                </div>
                <div className="font-bold text-sm mt-1" style={{ color: text }}>{d.title}</div>
                <div className="text-xs mt-0.5" style={{ color: muted }}>{d.topic} · {d.lines.length} répliques</div>
              </button>
            );
          })}
        </div>

        {/* ── Right: dialog player + quiz ─────────────────────────── */}
        {dialog && (
          <div ref={contentRef} className="flex-1 flex flex-col gap-5">

            {/* Dialog header */}
            <div className="rounded-3xl p-6" style={{ background: card, border: `1px solid ${border}` }}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <LvlBadge level={dialog.level} />
                    <span className="text-xs" style={{ color: muted }}>{dialog.topic}</span>
                  </div>
                  <h2 className="text-xl font-black" style={{ color: text }}>{dialog.title}</h2>
                </div>
                {/* Play full dialog */}
                <PlayAllBtn lines={dialog.lines} onLineChange={setActiveLine} />
              </div>

              {/* Script */}
              <div className="flex flex-col gap-3">
                {dialog.lines.map((line, i) => (
                  <div key={i} className={`flex gap-3 items-start ${line.speaker === 'A' ? '' : 'flex-row-reverse'}`}
                    style={{ transition: 'opacity 0.2s', opacity: activeLine === -1 || activeLine === i ? 1 : 0.35 }}>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black shrink-0"
                      style={{ background: line.speaker === 'A' ? '#4f46e5' : '#7124e5', color: '#fff' }}>
                      {line.name.charAt(0)}
                    </div>
                    <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 ${line.speaker === 'A' ? 'rounded-tl-sm' : 'rounded-tr-sm'}`}
                      style={{
                        background: line.speaker === 'A' ? (il ? '#f0f2f5' : 'rgba(255,255,255,0.06)') : (accentPurple + '16'),
                        border: `1px solid ${line.speaker === 'B' ? accentPurple + '30' : border}`,
                      }}>
                      <div className="text-[10px] font-bold mb-1" style={{ color: muted }}>{line.name}</div>
                      <div className="text-sm leading-relaxed font-medium" style={{ color: text }}>{line.text}</div>
                      <div className="flex justify-end mt-1">
                        <SpeakBtn text={line.text} compact />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Questions */}
            <div className="rounded-3xl p-6" style={{ background: card, border: `1px solid ${border}` }}>
              <h3 className="font-black text-base mb-4" style={{ color: text }}>
                ❓ Questions de compréhension
              </h3>
              <div className="flex flex-col gap-6">
                {dialog.questions.map((q, qi) => (
                  <div key={qi}>
                    <p className="text-sm font-bold mb-2" style={{ color: text }}>{qi + 1}. {q.q}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {q.opts.map((opt, ai) => {
                        const chosen = answers[qi] === ai;
                        const isCorrect = ai === q.ans;
                        let bg = il ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)';
                        let borderC = border;
                        let textC = muted;
                        if (submitted) {
                          if (isCorrect) { bg = 'rgba(52,211,153,0.12)'; borderC = 'rgba(52,211,153,0.40)'; textC = '#34d399'; }
                          else if (chosen && !isCorrect) { bg = 'rgba(239,68,68,0.10)'; borderC = 'rgba(239,68,68,0.35)'; textC = '#ef4444'; }
                        } else if (chosen) {
                          bg = accentPurple + '14'; borderC = accentPurple + '55'; textC = accentPurple;
                        }
                        return (
                          <button key={ai} onClick={() => handleAnswer(qi, ai)}
                            className="text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
                            style={{ background: bg, border: `1px solid ${borderC}`, color: textC }}>
                            {opt} {submitted && isCorrect && '✓'} {submitted && chosen && !isCorrect && '✗'}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 mt-6">
                {!submitted ? (
                  <button onClick={handleSubmit}
                    disabled={Object.keys(answers).length < dialog.questions.length}
                    className="px-6 py-2.5 rounded-xl text-sm font-bold transition-all"
                    style={{
                      background: Object.keys(answers).length < dialog.questions.length ? (il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)') : `linear-gradient(135deg,#4f46e5,#7c3aed)`,
                      color: Object.keys(answers).length < dialog.questions.length ? muted : '#fff',
                      cursor: Object.keys(answers).length < dialog.questions.length ? 'not-allowed' : 'pointer',
                    }}>
                    Valider les réponses
                  </button>
                ) : (
                  <>
                    <div className="px-4 py-2.5 rounded-xl text-sm font-bold"
                      style={{ background: scores[dialog.id]?.correct === dialog.questions.length ? 'rgba(52,211,153,0.15)' : 'rgba(245,158,11,0.15)', color: scores[dialog.id]?.correct === dialog.questions.length ? '#34d399' : '#f59e0b', border: `1px solid ${scores[dialog.id]?.correct === dialog.questions.length ? 'rgba(52,211,153,0.30)' : 'rgba(245,158,11,0.30)'}` }}>
                      {scores[dialog.id]?.correct}/{dialog.questions.length} correct{scores[dialog.id]?.correct > 1 ? 's' : ''}
                      {scores[dialog.id]?.correct === dialog.questions.length ? ' 🎉' : ''}
                    </div>
                    <button onClick={handleNext}
                      className="px-6 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-[1.02]"
                      style={{ background: `linear-gradient(135deg,#4f46e5,#7c3aed)`, color: '#fff' }}>
                      Dialogue suivant →
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
