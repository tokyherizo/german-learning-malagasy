import { useState, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

/* ─── Reading texts ────────────────────────────────────────────── */
const TEXTS = [
  {
    id: 1, level: 'A1', title: 'Meine Familie', topic: 'Famille',
    text: `Ich heiße Maria. Ich bin 25 Jahre alt und komme aus Deutschland. Meine Familie ist nicht sehr groß. Ich habe einen Bruder. Er heißt Tom und ist 22 Jahre alt. Mein Vater heißt Hans und ist Arzt. Meine Mutter heißt Anna und ist Lehrerin. Wir wohnen in Berlin. Berlin ist eine große und schöne Stadt. Ich liebe meine Familie sehr.`,
    vocabulary: [
      { de: 'die Familie', fr: 'la famille' },
      { de: 'der Bruder', fr: 'le frère' },
      { de: 'der Vater', fr: 'le père' },
      { de: 'die Mutter', fr: 'la mère' },
      { de: 'wohnen', fr: 'habiter' },
      { de: 'die Stadt', fr: 'la ville' },
    ],
    questions: [
      { q: 'Wie alt ist Maria?', opts: ['20 ans', '25 ans', '30 ans', '22 ans'], ans: 1 },
      { q: 'Was ist der Vater von Beruf?', opts: ['Lehrer', 'Ingenieur', 'Arzt', 'Kellner'], ans: 2 },
      { q: 'Wo wohnt die Familie?', opts: ['München', 'Hamburg', 'Frankfurt', 'Berlin'], ans: 3 },
      { q: 'Wie heißt der Bruder?', opts: ['Max', 'Tom', 'Hans', 'Karl'], ans: 1 },
    ],
  },
  {
    id: 2, level: 'A1', title: 'Mein Zimmer', topic: 'Maison',
    text: `Mein Zimmer ist nicht groß, aber ich mag es sehr. Es gibt ein Bett, einen Tisch und zwei Stühle. An der Wand hängt ein großes Poster von Berlin. Neben dem Bett steht ein Bücherregal mit vielen Büchern. Ich lerne jeden Tag an meinem Tisch. Das Fenster ist groß und ich sehe den Garten. Ich mache jeden Abend mein Zimmer sauber.`,
    vocabulary: [
      { de: 'das Zimmer', fr: 'la chambre' },
      { de: 'das Bett', fr: 'le lit' },
      { de: 'der Tisch', fr: 'la table' },
      { de: 'der Stuhl', fr: 'la chaise' },
      { de: 'das Fenster', fr: 'la fenêtre' },
      { de: 'das Bücherregal', fr: 'l\'étagère' },
    ],
    questions: [
      { q: 'Was steht neben dem Bett?', opts: ['Ein Tisch', 'Ein Bücherregal', 'Ein Poster', 'Ein Stuhl'], ans: 1 },
      { q: 'Was sieht man durch das Fenster?', opts: ['Die Straße', 'Den Garten', 'Den Park', 'Das Haus'], ans: 1 },
      { q: 'Was hängt an der Wand?', opts: ['Ein Bild', 'Ein Poster von Berlin', 'Ein Kalender', 'Ein Spiegel'], ans: 1 },
    ],
  },
  {
    id: 3, level: 'A2', title: 'Ein Ausflug nach München', topic: 'Voyage',
    text: `Letzten Sommer bin ich mit meinen Freunden nach München gefahren. Wir haben drei Tage dort verbracht. Am ersten Tag haben wir den Marienplatz besucht. Das Glockenspiel am Rathaus war sehr schön. Dann haben wir im Hofbräuhaus gegessen und Weißwurst mit Brezeln probiert. Am zweiten Tag sind wir in den Englischen Garten gegangen. Der Park war riesig und sehr grün. Am letzten Tag haben wir das Deutsche Museum besucht. Die Ausstellung war sehr interessant. München ist eine wunderschöne Stadt!`,
    vocabulary: [
      { de: 'der Ausflug', fr: 'l\'excursion' },
      { de: 'besuchen', fr: 'visiter' },
      { de: 'das Glockenspiel', fr: 'le carillon' },
      { de: 'die Ausstellung', fr: 'l\'exposition' },
      { de: 'riesig', fr: 'immense' },
      { de: 'verbringen', fr: 'passer (du temps)' },
    ],
    questions: [
      { q: 'Wie lange waren sie in München?', opts: ['1 Tag', '2 Tage', '3 Tage', '4 Tage'], ans: 2 },
      { q: 'Was haben sie am ersten Tag besucht?', opts: ['Englischer Garten', 'Marienplatz', 'Deutsches Museum', 'Hofbräuhaus'], ans: 1 },
      { q: 'Was haben sie im Hofbräuhaus gegessen?', opts: ['Schnitzel', 'Bratwurst', 'Weißwurst mit Brezeln', 'Gulasch'], ans: 2 },
      { q: 'Welches Museum haben sie besucht?', opts: ['Kunstmuseum', 'Stadtmuseum', 'Nationalmuseum', 'Deutsches Museum'], ans: 3 },
    ],
  },
  {
    id: 4, level: 'A2', title: 'Gesund leben', topic: 'Santé',
    text: `Gesund zu leben ist sehr wichtig. Man soll jeden Tag viel Wasser trinken — mindestens zwei Liter. Obst und Gemüse sind gut für den Körper. Man soll auch regelmäßig Sport treiben. Ein Spaziergang von 30 Minuten täglich ist schon sehr hilfreich. Viel Zucker und Fett sind nicht gut für die Gesundheit. Außerdem ist Schlaf sehr wichtig: Erwachsene brauchen 7 bis 8 Stunden Schlaf pro Nacht. Stress ist auch schlecht für die Gesundheit. Deshalb ist Entspannung, zum Beispiel durch Yoga oder Meditation, sehr sinnvoll.`,
    vocabulary: [
      { de: 'gesund', fr: 'en bonne santé / sain' },
      { de: 'das Obst', fr: 'les fruits' },
      { de: 'das Gemüse', fr: 'les légumes' },
      { de: 'der Schlaf', fr: 'le sommeil' },
      { de: 'die Entspannung', fr: 'la détente' },
      { de: 'täglich', fr: 'quotidiennement' },
    ],
    questions: [
      { q: 'Wie viel Wasser soll man pro Tag trinken?', opts: ['1 Liter', '2 Liter', '3 Liter', '4 Liter'], ans: 1 },
      { q: 'Wie lange sollte ein Spaziergang täglich dauern?', opts: ['15 Minuten', '60 Minuten', '30 Minuten', '45 Minuten'], ans: 2 },
      { q: 'Wie viele Stunden Schlaf brauchen Erwachsene?', opts: ['5–6 Std.', '6–7 Std.', '8–9 Std.', '7–8 Std.'], ans: 3 },
    ],
  },
  {
    id: 5, level: 'B1', title: 'Digitalisierung im Alltag', topic: 'Technologie',
    text: `Die Digitalisierung verändert unseren Alltag grundlegend. Früher musste man persönlich zur Bank gehen, um Geld zu überweisen. Heute geht das in Sekunden per Smartphone. Online-Shopping hat den Einzelhandel verändert: Viele Menschen bestellen ihre Einkäufe nach Hause, anstatt in Geschäfte zu gehen. In der Bildung ermöglichen digitale Plattformen das Lernen von zu Hause aus. Allerdings bringt die Digitalisierung auch Herausforderungen mit sich. Viele ältere Menschen haben Schwierigkeiten, mit der neuen Technik umzugehen. Datenschutz ist ein weiteres wichtiges Thema: Wer nutzt unsere persönlichen Daten und wie?`,
    vocabulary: [
      { de: 'die Digitalisierung', fr: 'la numérisation' },
      { de: 'überweisen', fr: 'virer (de l\'argent)' },
      { de: 'der Einzelhandel', fr: 'le commerce de détail' },
      { de: 'der Datenschutz', fr: 'la protection des données' },
      { de: 'die Herausforderung', fr: 'le défi' },
      { de: 'ermöglichen', fr: 'rendre possible' },
    ],
    questions: [
      { q: 'Was konnte man früher nur persönlich tun?', opts: ['Einkaufen', 'Lernen', 'Zur Bank gehen', 'Arbeiten'], ans: 2 },
      { q: 'Was ist ein wichtiges Thema bei der Digitalisierung?', opts: ['Klimawandel', 'Datenschutz', 'Sport', 'Tourismus'], ans: 1 },
      { q: 'Wer hat Schwierigkeiten mit neuer Technik?', opts: ['Kinder', 'Jugendliche', 'Ältere Menschen', 'Schüler'], ans: 2 },
    ],
  },
];

/* ─── Level badge ──────────────────────────────────────────────── */
const LvlBadge = ({ level }) => {
  const c = { A1: '#818cf8', A2: '#a78bfa', B1: '#34d399' }[level] || '#818cf8';
  return (
    <span className="text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-widest"
      style={{ background: c + '22', color: c, border: `1px solid ${c}40` }}>{level}</span>
  );
};

/* ─── Main ─────────────────────────────────────────────────────── */
export default function Lesen() {
  const { theme } = useTheme();
  const il = theme === 'light';
  const bg = il ? '#f0f2f5' : '#0d0d0d';
  const card = il ? '#fff' : '#111';
  const border = il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)';
  const textC = il ? '#0f172a' : '#fff';
  const muted = il ? 'rgba(15,23,42,0.50)' : 'rgba(255,255,255,0.45)';
  const accent = '#7124e5';

  const [levelFilter, setLevelFilter] = useState('Tout');
  const [selected, setSelected] = useState(TEXTS[0].id);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [scores, setScores] = useState({});
  const [showVocab, setShowVocab] = useState(false);
  const contentRef = useRef(null);

  const scrollToContent = () => {
    setTimeout(() => {
      if (contentRef.current) {
        const top = contentRef.current.getBoundingClientRect().top + window.scrollY - 64;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 50);
  };

  const filtered = levelFilter === 'Tout' ? TEXTS : TEXTS.filter(t => t.level === levelFilter);
  const text = TEXTS.find(t => t.id === selected) || filtered[0];

  const handleAnswer = (qi, ai) => { if (!submitted) setAnswers(p => ({ ...p, [qi]: ai })); };

  const handleSubmit = () => {
    let correct = 0;
    text.questions.forEach((q, i) => { if (answers[i] === q.ans) correct++; });
    setScores(p => ({ ...p, [text.id]: { correct, total: text.questions.length } }));
    setSubmitted(true);
  };

  const handleNext = () => {
    setAnswers({}); setSubmitted(false); setShowVocab(false);
    const idx = filtered.findIndex(t => t.id === selected);
    const next = filtered[(idx + 1) % filtered.length];
    if (next) setSelected(next.id);
  };

  return (
    <div style={{ paddingTop: 52, background: bg, minHeight: '100vh' }}>

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-4 text-[10px] font-bold uppercase tracking-widest"
          style={{ background: accent + '18', border: `1px solid ${accent}33`, color: accent }}>
          📖 Lesen
        </div>
        <h1 className="text-3xl md:text-4xl font-black mb-2" style={{ color: textC, letterSpacing: '-0.03em' }}>
          Compréhension écrite
        </h1>
        <p className="text-sm md:text-base" style={{ color: muted }}>
          Lisez les textes en allemand et testez votre compréhension.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-16 flex flex-col lg:flex-row gap-6">

        {/* ── Left list ─────────────────────────── */}
        <div className="w-full lg:w-64 shrink-0 flex flex-col gap-3">
          <div className="flex gap-2 flex-wrap mb-1">
            {['Tout','A1','A2','B1'].map(l => (
              <button key={l} onClick={() => setLevelFilter(l)}
                className="px-3 py-1 rounded-full text-xs font-bold transition-all"
                style={{
                  background: levelFilter === l ? accent : (il ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'),
                  color: levelFilter === l ? '#fff' : muted,
                  border: `1px solid ${levelFilter === l ? accent : (il ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.10)')}`,
                }}>{l}</button>
            ))}
          </div>
          {filtered.map(t => {
            const sc = scores[t.id];
            return (
              <button key={t.id} onClick={() => { setSelected(t.id); setAnswers({}); setSubmitted(false); setShowVocab(false); scrollToContent(); }}
                className="text-left rounded-2xl p-4 transition-all"
                style={{ background: selected === t.id ? accent + '14' : card, border: `1px solid ${selected === t.id ? accent + '55' : border}` }}>
                <div className="flex items-center justify-between mb-1">
                  <LvlBadge level={t.level} />
                  {sc && <span className="text-[10px] font-bold" style={{ color: sc.correct === sc.total ? '#34d399' : '#f59e0b' }}>{sc.correct}/{sc.total} ✓</span>}
                </div>
                <div className="font-bold text-sm mt-1" style={{ color: textC }}>{t.title}</div>
                <div className="text-xs mt-0.5" style={{ color: muted }}>{t.topic}</div>
              </button>
            );
          })}
        </div>

        {/* ── Right: text + vocab + quiz ─────────────────────────── */}
        {text && (
          <div ref={contentRef} className="flex-1 flex flex-col gap-5">

            {/* Text block */}
            <div className="rounded-3xl p-6" style={{ background: card, border: `1px solid ${border}` }}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <LvlBadge level={text.level} />
                  <span className="text-xs" style={{ color: muted }}>{text.topic}</span>
                </div>
                <button onClick={() => setShowVocab(v => !v)}
                  className="text-xs font-bold px-3 py-1.5 rounded-full transition-all"
                  style={{ background: showVocab ? accent : (il ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)'), color: showVocab ? '#fff' : muted, border: `1px solid ${il ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.10)'}` }}>
                  {showVocab ? 'Masquer vocabulaire' : '📚 Vocabulaire'}
                </button>
              </div>
              <h2 className="text-xl font-black mb-4" style={{ color: textC }}>{text.title}</h2>
              <p className="text-sm leading-7" style={{ color: textC }}>{text.text}</p>

              {/* Vocabulary panel */}
              {showVocab && (
                <div className="mt-5 pt-5" style={{ borderTop: `1px solid ${border}` }}>
                  <h4 className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: muted }}>Vocabulaire clé</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {text.vocabulary.map((v, i) => (
                      <div key={i} className="flex items-center justify-between px-3 py-2 rounded-xl"
                        style={{ background: il ? '#f0f2f5' : 'rgba(255,255,255,0.05)', border: `1px solid ${border}` }}>
                        <span className="text-sm font-bold" style={{ color: textC }}>{v.de}</span>
                        <span className="text-xs" style={{ color: muted }}>{v.fr}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Questions */}
            <div className="rounded-3xl p-6" style={{ background: card, border: `1px solid ${border}` }}>
              <h3 className="font-black text-base mb-4" style={{ color: textC }}>❓ Questions</h3>
              <div className="flex flex-col gap-6">
                {text.questions.map((q, qi) => (
                  <div key={qi}>
                    <p className="text-sm font-bold mb-2" style={{ color: textC }}>{qi + 1}. {q.q}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {q.opts.map((opt, ai) => {
                        const chosen = answers[qi] === ai;
                        const isCorrect = ai === q.ans;
                        let bgC = il ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)';
                        let bC = border; let tC = muted;
                        if (submitted) {
                          if (isCorrect) { bgC = 'rgba(52,211,153,0.12)'; bC = 'rgba(52,211,153,0.40)'; tC = '#34d399'; }
                          else if (chosen) { bgC = 'rgba(239,68,68,0.10)'; bC = 'rgba(239,68,68,0.35)'; tC = '#ef4444'; }
                        } else if (chosen) { bgC = accent + '14'; bC = accent + '55'; tC = accent; }
                        return (
                          <button key={ai} onClick={() => handleAnswer(qi, ai)}
                            className="text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
                            style={{ background: bgC, border: `1px solid ${bC}`, color: tC }}>
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
                    disabled={Object.keys(answers).length < text.questions.length}
                    className="px-6 py-2.5 rounded-xl text-sm font-bold"
                    style={{ background: Object.keys(answers).length < text.questions.length ? (il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)') : 'linear-gradient(135deg,#4f46e5,#7c3aed)', color: Object.keys(answers).length < text.questions.length ? muted : '#fff', cursor: Object.keys(answers).length < text.questions.length ? 'not-allowed' : 'pointer' }}>
                    Valider
                  </button>
                ) : (
                  <>
                    <div className="px-4 py-2.5 rounded-xl text-sm font-bold"
                      style={{ background: scores[text.id]?.correct === text.questions.length ? 'rgba(52,211,153,0.15)' : 'rgba(245,158,11,0.15)', color: scores[text.id]?.correct === text.questions.length ? '#34d399' : '#f59e0b', border: `1px solid ${scores[text.id]?.correct === text.questions.length ? 'rgba(52,211,153,0.30)' : 'rgba(245,158,11,0.30)'}` }}>
                      {scores[text.id]?.correct}/{text.questions.length} correct{scores[text.id]?.correct > 1 ? 's' : ''}
                      {scores[text.id]?.correct === text.questions.length ? ' 🎉' : ''}
                    </div>
                    <button onClick={handleNext}
                      className="px-6 py-2.5 rounded-xl text-sm font-bold hover:scale-[1.02] transition-all"
                      style={{ background: 'linear-gradient(135deg,#4f46e5,#7c3aed)', color: '#fff' }}>
                      Texte suivant →
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
