import { useState, useCallback, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

/* ─── Phrases to practice ─────────────────────────────────────── */
const PHRASES = [
  { id: 1, level: 'A1', category: 'Salutations', de: 'Guten Morgen!', fr: 'Bonjour ! (le matin)', tips: 'Le "G" de Guten est fort, le "r" final est doux.' },
  { id: 2, level: 'A1', category: 'Salutations', de: 'Wie heißt du?', fr: 'Comment tu t\'appelles ?', tips: 'Le "ei" se prononce comme "aï".' },
  { id: 3, level: 'A1', category: 'Présentation', de: 'Ich heiße Maria.', fr: 'Je m\'appelle Maria.', tips: 'Le "ei" dans heiße = "aï".' },
  { id: 4, level: 'A1', category: 'Présentation', de: 'Ich komme aus Madagaskar.', fr: 'Je viens de Madagascar.', tips: 'Stress sur "komme" et "Madagaskar".' },
  { id: 5, level: 'A1', category: 'Présentation', de: 'Ich bin 25 Jahre alt.', fr: 'J\'ai 25 ans.', tips: '"Jahre" se prononce "Ya-reh".' },
  { id: 6, level: 'A1', category: 'Phrases courantes', de: 'Danke schön!', fr: 'Merci beaucoup !', tips: '"ö" = entre "e" et "o", lèvres arrondies.' },
  { id: 7, level: 'A1', category: 'Phrases courantes', de: 'Bitte sehr!', fr: 'Je vous en prie !', tips: 'Le "ie" final se prononce "i" long.' },
  { id: 8, level: 'A1', category: 'Questions', de: 'Wo ist die Toilette?', fr: 'Où sont les toilettes ?', tips: '"W" allemand = son "V" français.' },
  { id: 9, level: 'A2', category: 'Voyage', de: 'Wie komme ich zum Bahnhof?', fr: 'Comment puis-je aller à la gare ?', tips: '"ch" dans "komme" = "k" dur.' },
  { id: 10, level: 'A2', category: 'Voyage', de: 'Ich möchte eine Fahrkarte kaufen.', fr: 'Je voudrais acheter un billet.', tips: '"ö" dans möchte = o arrondi.' },
  { id: 11, level: 'A2', category: 'Santé', de: 'Ich habe Kopfschmerzen.', fr: 'J\'ai mal à la tête.', tips: '"sch" = ch français doux.' },
  { id: 12, level: 'A2', category: 'Travail', de: 'Ich arbeite als Krankenpfleger.', fr: 'Je travaille comme infirmier.', tips: 'Accent sur "ar-BEI-te".' },
  { id: 13, level: 'A2', category: 'Ausbildung', de: 'Ich mache eine Ausbildung in Deutschland.', fr: 'Je fais un apprentissage en Allemagne.', tips: '"Au" se prononce "ao".' },
  { id: 14, level: 'B1', category: 'Au Pair', de: 'Ich interessiere mich für die Au-Pair-Stelle.', fr: 'Je suis intéressé(e) par la place au pair.', tips: 'Les r en fin de syllabe sont gutturaux.' },
  { id: 15, level: 'B1', category: 'Entretien', de: 'Ich habe drei Jahre Erfahrung in diesem Bereich.', fr: 'J\'ai trois ans d\'expérience dans ce domaine.', tips: '"Erfahrung" = Er-FA-rung.' },
  { id: 16, level: 'B1', category: 'Entretien', de: 'Ich bin teamfähig und zuverlässig.', fr: 'Je suis un(e) bon(ne) équipier(ère) et fiable.', tips: '"zuverlässig" = tzu-fer-LÄ-ssig.' },
];

/* ─── Minimal alphabet phonetics reference ───────────────────── */
const PHONETICS = [
  { char: 'ä', sound: 'comme le "e" ouvert de "père"', example: 'Mädchen' },
  { char: 'ö', sound: 'comme "eu" de "feu"', example: 'schön' },
  { char: 'ü', sound: 'comme "u" français de "vu"', example: 'über' },
  { char: 'ß', sound: 'comme double "ss"', example: 'Straße' },
  { char: 'ch', sound: '"kh" guttural (après a,o,u) ou "hy" doux (après i,e)', example: 'Bach / ich' },
  { char: 'w', sound: 'comme le "v" français', example: 'Wasser' },
  { char: 'v', sound: 'généralement comme "f"', example: 'Vater' },
  { char: 'ei', sound: 'comme "aï"', example: 'mein' },
  { char: 'ie', sound: 'comme "i" long', example: 'lieb' },
  { char: 'eu/äu', sound: 'comme "oi"', example: 'neu' },
];

/* ─── SpeechSynthesis helper ─────────────────────────────────── */
const useTTS = () => {
  const [speaking, setSpeaking] = useState(null);
  const speak = useCallback((text, id) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'de-DE'; u.rate = 0.80; u.pitch = 1;
    const voices = window.speechSynthesis.getVoices();
    const de = voices.find(v => v.lang === 'de-DE') || voices.find(v => v.lang.startsWith('de'));
    if (de) u.voice = de;
    u.onstart = () => setSpeaking(id);
    u.onend = () => setSpeaking(null);
    u.onerror = () => setSpeaking(null);
    window.speechSynthesis.speak(u);
  }, []);
  return { speaking, speak };
};

/* ─── Speech recognition helper ──────────────────────────────── */
const useSpeechRecognition = () => {
  const [transcript, setTranscript] = useState('');
  const [listening, setListening] = useState(false);
  const recRef = useRef(null);

  const startListening = useCallback(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { alert('La reconnaissance vocale n\'est pas supportée par votre navigateur. Essayez Chrome.'); return; }
    const rec = new SR();
    rec.lang = 'de-DE';
    rec.continuous = false;
    rec.interimResults = false;
    rec.onstart = () => setListening(true);
    rec.onresult = (e) => {
      const t = Array.from(e.results).map(r => r[0].transcript).join('');
      setTranscript(t);
    };
    rec.onend = () => setListening(false);
    rec.onerror = () => setListening(false);
    recRef.current = rec;
    setTranscript('');
    rec.start();
  }, []);

  const stopListening = useCallback(() => {
    recRef.current?.stop();
    setListening(false);
  }, []);

  return { transcript, listening, startListening, stopListening, setTranscript };
};

/* ─── Compare strings (rough %) ──────────────────────────────── */
const similarity = (a, b) => {
  const normalize = s => s.toLowerCase().replace(/[^a-z\u00e4\u00f6\u00fc\u00df ]/g, '').trim();
  const na = normalize(a), nb = normalize(b);
  if (na === nb) return 100;
  const wordsA = na.split(' '), wordsB = nb.split(' ');
  const matches = wordsA.filter(w => wordsB.includes(w)).length;
  return Math.round((matches / Math.max(wordsA.length, wordsB.length)) * 100);
};

/* ─── Level badge ───────────────────────────────────────────── */
const LvlBadge = ({ level }) => {
  const c = { A1: '#818cf8', A2: '#a78bfa', B1: '#34d399' }[level] || '#818cf8';
  return <span className="text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-widest" style={{ background: c + '22', color: c, border: `1px solid ${c}40` }}>{level}</span>;
};

/* ─── Main ─────────────────────────────────────────────────────── */
export default function Sprechen() {
  const { theme } = useTheme();
  const il = theme === 'light';
  const bg = il ? '#f0f2f5' : '#0d0d0d';
  const card = il ? '#fff' : '#111';
  const border = il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)';
  const textC = il ? '#0f172a' : '#fff';
  const muted = il ? 'rgba(15,23,42,0.50)' : 'rgba(255,255,255,0.45)';
  const accent = '#7124e5';

  const [levelFilter, setLevelFilter] = useState('Tout');
  const [catFilter, setCatFilter] = useState('Tout');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [showPhonetics, setShowPhonetics] = useState(false);
  const [results, setResults] = useState({});

  const { speaking, speak } = useTTS();
  const { transcript, listening, startListening, stopListening, setTranscript } = useSpeechRecognition();

  const filtered = PHRASES.filter(p =>
    (levelFilter === 'Tout' || p.level === levelFilter) &&
    (catFilter === 'Tout' || p.category === catFilter)
  );

  const categories = ['Tout', ...new Set(PHRASES.filter(p => levelFilter === 'Tout' || p.level === levelFilter).map(p => p.category))];
  const phrase = filtered[phraseIdx % Math.max(filtered.length, 1)] || PHRASES[0];
  const score = transcript ? similarity(transcript, phrase.de) : null;

  const handleRecord = () => {
    if (listening) { stopListening(); } else { startListening(); }
  };

  const handleEvaluate = () => {
    if (score !== null) {
      setResults(p => ({ ...p, [phrase.id]: score }));
    }
  };

  const handleNext = () => {
    setTranscript('');
    setPhraseIdx(i => (i + 1) % filtered.length);
  };

  return (
    <div style={{ paddingTop: 52, background: bg, minHeight: '100vh' }}>

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-4 text-[10px] font-bold uppercase tracking-widest"
          style={{ background: accent + '18', border: `1px solid ${accent}33`, color: accent }}>
          🎤 Sprechen
        </div>
        <h1 className="text-3xl md:text-4xl font-black mb-2" style={{ color: textC, letterSpacing: '-0.03em' }}>
          Expression orale
        </h1>
        <p className="text-sm md:text-base" style={{ color: muted }}>
          Écoutez, répétez et entraînez-vous à prononcer l'allemand correctement.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-16 flex flex-col lg:flex-row gap-6">

        {/* ── Left: filters + phrase list ─────────────── */}
        <div className="w-full lg:w-64 shrink-0 flex flex-col gap-3">
          {/* Level filter */}
          <div className="flex gap-2 flex-wrap">
            {['Tout','A1','A2','B1'].map(l => (
              <button key={l} onClick={() => { setLevelFilter(l); setCatFilter('Tout'); setPhraseIdx(0); }}
                className="px-3 py-1 rounded-full text-xs font-bold transition-all"
                style={{
                  background: levelFilter === l ? accent : (il ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'),
                  color: levelFilter === l ? '#fff' : muted,
                  border: `1px solid ${levelFilter === l ? accent : (il ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.10)')}`,
                }}>{l}</button>
            ))}
          </div>
          {/* Category filter */}
          <div className="flex gap-1.5 flex-wrap">
            {categories.map(c => (
              <button key={c} onClick={() => { setCatFilter(c); setPhraseIdx(0); }}
                className="px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all"
                style={{
                  background: catFilter === c ? '#4f46e5' + '20' : 'transparent',
                  color: catFilter === c ? '#4f46e5' : muted,
                  border: `1px solid ${catFilter === c ? '#4f46e5' + '40' : (il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)')}`,
                }}>{c}</button>
            ))}
          </div>

          {/* List */}
          <div className="flex flex-col gap-2 mt-1">
            {filtered.map((p, i) => (
              <button key={p.id} onClick={() => { setPhraseIdx(i); setTranscript(''); }}
                className="text-left rounded-xl p-3 transition-all"
                style={{ background: phrase.id === p.id ? accent + '14' : card, border: `1px solid ${phrase.id === p.id ? accent + '55' : border}` }}>
                <div className="flex items-center gap-1.5 mb-1">
                  <LvlBadge level={p.level} />
                  {results[p.id] !== undefined && (
                    <span className="text-[10px] font-bold" style={{ color: results[p.id] >= 70 ? '#34d399' : '#f59e0b' }}>{results[p.id]}%</span>
                  )}
                </div>
                <div className="text-xs font-medium" style={{ color: textC }}>{p.de}</div>
                <div className="text-[11px]" style={{ color: muted }}>{p.category}</div>
              </button>
            ))}
          </div>
        </div>

        {/* ── Right: practice zone ─────────────────────────── */}
        <div className="flex-1 flex flex-col gap-5">

          {/* Main phrase card */}
          <div className="rounded-3xl p-8 text-center" style={{ background: card, border: `1px solid ${border}` }}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <LvlBadge level={phrase.level} />
              <span className="text-xs" style={{ color: muted }}>{phrase.category}</span>
            </div>

            <p className="text-3xl md:text-4xl font-black mb-3 leading-tight" style={{ color: textC, letterSpacing: '-0.02em' }}>
              {phrase.de}
            </p>
            <p className="text-sm mb-6" style={{ color: muted }}>{phrase.fr}</p>

            {/* Pronunciation tip */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs"
              style={{ background: il ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.06)', border: `1px solid ${il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)'}`, color: muted }}>
              💡 {phrase.tips}
            </div>

            {/* TTS Button */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <button
                onClick={() => speak(phrase.de, phrase.id)}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:scale-[1.03]"
                style={{
                  background: speaking === phrase.id ? accent : `linear-gradient(135deg,#4f46e5,#7c3aed)`,
                  color: '#fff',
                  boxShadow: '0 6px 24px rgba(113,36,229,0.28)',
                }}>
                {speaking === phrase.id ? '⏹ Stop' : '▶ Écouter'}
              </button>
              <button
                onClick={() => speak(phrase.de + '...' + phrase.de, phrase.id + '_slow')}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all"
                style={{ background: il ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)', color: muted, border: `1px solid ${border}` }}>
                🐌 Lentement
              </button>
            </div>

            {/* Record Button */}
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={handleRecord}
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold transition-all"
                style={{
                  background: listening ? 'rgba(239,68,68,0.15)' : (il ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0.07)'),
                  border: `2px solid ${listening ? '#ef4444' : (il ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.15)')}`,
                  color: listening ? '#ef4444' : muted,
                  animation: listening ? 'pulse 1s infinite' : 'none',
                }}>
                {listening ? '⏹' : '🎤'}
              </button>
              <span className="text-xs" style={{ color: muted }}>
                {listening ? 'En cours d\'écoute...' : 'Cliquez pour parler'}
              </span>

              {/* Transcript result */}
              {transcript && (
                <div className="w-full rounded-2xl p-4 mt-2"
                  style={{ background: il ? '#f8f9fa' : 'rgba(255,255,255,0.05)', border: `1px solid ${border}` }}>
                  <div className="text-xs font-bold mb-1" style={{ color: muted }}>Vous avez dit :</div>
                  <div className="text-base font-bold mb-2" style={{ color: textC }}>{transcript}</div>
                  {score !== null && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-24 rounded-full" style={{ background: il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)' }}>
                          <div className="h-full rounded-full" style={{ width: `${score}%`, background: score >= 70 ? 'linear-gradient(90deg,#34d399,#10b981)' : score >= 40 ? 'linear-gradient(90deg,#f59e0b,#d97706)' : 'linear-gradient(90deg,#ef4444,#dc2626)' }} />
                        </div>
                        <span className="text-sm font-black" style={{ color: score >= 70 ? '#34d399' : score >= 40 ? '#f59e0b' : '#ef4444' }}>
                          {score}%
                        </span>
                        <span className="text-xs" style={{ color: muted }}>
                          {score >= 70 ? '🎉 Excellent !' : score >= 40 ? '👍 Bien, réessayez !' : '🔄 Réessayez'}
                        </span>
                      </div>
                      <button onClick={handleEvaluate}
                        className="text-xs px-3 py-1.5 rounded-lg font-bold"
                        style={{ background: accent + '18', color: accent, border: `1px solid ${accent}30` }}>
                        Sauvegarder
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button onClick={() => { setTranscript(''); setPhraseIdx(i => (i - 1 + filtered.length) % filtered.length); }}
              className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all"
              style={{ background: il ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)', color: muted, border: `1px solid ${border}` }}>
              ← Précédente
            </button>
            <span className="text-xs" style={{ color: muted }}>
              {(phraseIdx % filtered.length) + 1} / {filtered.length}
            </span>
            <button onClick={handleNext}
              className="px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-[1.02]"
              style={{ background: `linear-gradient(135deg,#4f46e5,#7c3aed)`, color: '#fff' }}>
              Suivante →
            </button>
          </div>

          {/* Phonetics reference */}
          <div className="rounded-3xl overflow-hidden" style={{ border: `1px solid ${border}` }}>
            <button onClick={() => setShowPhonetics(v => !v)}
              className="w-full flex items-center justify-between px-6 py-4 text-sm font-bold"
              style={{ background: card, color: textC }}>
              📌 Guide de prononciation allemande
              <span style={{ color: muted }}>{showPhonetics ? '▲' : '▼'}</span>
            </button>
            {showPhonetics && (
              <div className="px-6 pb-5" style={{ background: card }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PHONETICS.map((p, i) => (
                    <div key={i} className="rounded-xl px-4 py-3" style={{ background: il ? '#f0f2f5' : 'rgba(255,255,255,0.04)', border: `1px solid ${border}` }}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-black text-base" style={{ color: accent }}>{p.char}</span>
                        <span className="text-xs font-bold" style={{ color: muted }}>ex: <em>{p.example}</em></span>
                      </div>
                      <div className="text-xs" style={{ color: textC }}>{p.sound}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
