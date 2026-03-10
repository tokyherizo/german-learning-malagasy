import { useState, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

/* ─── Writing prompts ─────────────────────────────────────────── */
const PROMPTS = [
  {
    id: 1, level: 'A1', type: 'Présentation', icon: '👤',
    title: 'Sich vorstellen',
    instruction: 'Stellen Sie sich vor. Schreiben Sie 4–6 Sätze über sich selbst.',
    checklist: ['Comme vous vous appelez (Name)', 'Votre âge (Alter)', 'D\'où vous venez (Herkunft)', 'Votre métier / vos études (Beruf)', 'Vos loisirs (Hobbys)'],
    tips: [
      { label: 'Nom', example: 'Ich heiße [Vorname].' },
      { label: 'Âge', example: 'Ich bin [X] Jahre alt.' },
      { label: 'Origine', example: 'Ich komme aus [Land].' },
      { label: 'Métier', example: 'Ich bin [Beruf] / Ich studiere [Fach].' },
      { label: 'Loisir', example: 'Ich spiele gern Fußball. / Ich lese gern Bücher.' },
    ],
    example: 'Hallo! Ich heiße Lena. Ich bin 23 Jahre alt und komme aus Frankreich. Ich studiere Medizin in Paris. In meiner Freizeit spiele ich Klavier und lese gern Bücher. Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.',
    minWords: 20,
  },
  {
    id: 2, level: 'A1', type: 'E-Mail', icon: '✉️',
    title: 'Eine E-Mail an einen Freund',
    instruction: 'Schreiben Sie eine kurze E-Mail an Ihren deutschen Freund Max. Erzählen Sie, wie Ihr Tag war.',
    checklist: ['Salutation (Anrede)', 'Was Sie heute gemacht haben', 'Wie Sie sich fühlen', 'Eine Frage an Max', 'Abschluss (Tschüss / Bis bald)'],
    tips: [
      { label: 'Salutation', example: 'Hallo Max! / Lieber Max,' },
      { label: 'Activité', example: 'Heute habe ich ... gemacht.' },
      { label: 'Feeling', example: 'Ich bin müde / glücklich / zufrieden.' },
      { label: 'Question', example: 'Wie geht es dir? Was machst du am Wochenende?' },
      { label: 'Fin', example: 'Liebe Grüße, [Dein Name]' },
    ],
    example: 'Hallo Max!\n\nWie geht es dir? Heute war ein langer Tag. Ich habe morgens Sport gemacht und nachmittags Deutsch gelernt. Am Abend habe ich mit meiner Familie gekocht. Das Essen war sehr lecker!\n\nWas machst du am Wochenende? Hast du Zeit für einen Videoanruf?\n\nLiebe Grüße,\nSophie',
    minWords: 30,
  },
  {
    id: 3, level: 'A2', type: 'Description', icon: '🏙️',
    title: 'Meine Stadt beschreiben',
    instruction: 'Beschreiben Sie Ihre Stadt oder Ihr Dorf. Was gibt es dort? Was gefällt Ihnen?',
    checklist: ['Le nom et la situation géographique', 'La taille (grande / petite ville)', 'Ce qu\'il y a à voir / faire', 'Ce que vous aimez / n\'aimez pas', 'Une recommandation'],
    tips: [
      { label: 'Lieu', example: 'Ich wohne in [Stadt], einer Stadt in [Land] / im Süden von [Land].' },
      { label: 'Taille', example: 'Es ist eine große / kleine / mittelgroße Stadt.' },
      { label: 'Attrait', example: 'Es gibt viele Geschäfte, Parks und Museen.' },
      { label: 'Opinion', example: 'Ich mag / Ich liebe ... weil ... / Ich finde ... schön.' },
      { label: 'Conseil', example: 'Ich empfehle Ihnen, ... zu besuchen.' },
    ],
    example: 'Ich wohne in Lyon, einer Stadt im Südosten von Frankreich. Es ist eine mittelgroße Stadt mit etwa 500.000 Einwohnern. Lyon ist für sein gutes Essen bekannt — die lokale Küche ist ausgezeichnet! In der Altstadt gibt es viele historische Gebäude. Ich mag Lyon sehr, weil die Menschen freundlich sind und es immer etwas zu tun gibt. Ich empfehle Ihnen, das Vieux Lyon zu besuchen.',
    minWords: 40,
  },
  {
    id: 4, level: 'A2', type: 'Argumentation', icon: '💬',
    title: 'Für oder gegen Sport?',
    instruction: 'Schreiben Sie einen kurzen Text über Sport. Warum ist Sport wichtig? Welchen Sport machen Sie?',
    checklist: ['Introduction sur le sport', 'Vos arguments POUR', 'Votre sport préféré', 'Fréquence d\'entraînement', 'Conclusion'],
    tips: [
      { label: 'Intro', example: 'Sport ist sehr wichtig für die Gesundheit.' },
      { label: 'Arguments', example: 'Sport hält fit / baut Stress ab / macht Spaß.' },
      { label: 'Préférence', example: 'Ich spiele am liebsten ... / Ich mache gern ...' },
      { label: 'Fréquence', example: 'Ich trainiere [X]-mal pro Woche.' },
      { label: 'Conclusion', example: 'Deshalb empfehle ich allen Menschen, regelmäßig Sport zu treiben.' },
    ],
    example: 'Sport ist sehr wichtig für die Gesundheit und das Wohlbefinden. Er hält uns fit und baut Stress ab. Außerdem macht Sport viel Spaß und man kann neue Freunde kennenlernen.\n\nIch spiele am liebsten Fußball. Ich trainiere zweimal pro Woche mit meiner Mannschaft. Am Wochenende gehe ich manchmal joggen — das entspannt mich sehr.\n\nDeshalb empfehle ich allen Menschen, regelmäßig Sport zu treiben. Es muss nicht immer intensiv sein — even ein kurzer Spaziergang hilft!',
    minWords: 50,
  },
  {
    id: 5, level: 'B1', type: 'Formelle E-Mail', icon: '📋',
    title: 'Bewerbung für ein Praktikum',
    instruction: 'Schreiben Sie eine formelle E-Mail, um sich für ein Praktikum in einem deutschen Unternehmen zu bewerben.',
    checklist: ['Objet de l\'e-mail', 'Présentation formelle', 'Vos motivations', 'Vos compétences et expériences', 'Disponibilités', 'Formule de politesse'],
    tips: [
      { label: 'Objet', example: 'Betreff: Bewerbung für ein Praktikum' },
      { label: 'Salutation formelle', example: 'Sehr geehrte Damen und Herren,' },
      { label: 'Intro', example: 'Mit großem Interesse habe ich Ihre Stellenanzeige gelesen...' },
      { label: 'Compétences', example: 'Ich habe Erfahrung in... / Ich spreche Deutsch auf B1-Niveau.' },
      { label: 'Fin formelle', example: 'Mit freundlichen Grüßen, [Vorname Nachname]' },
    ],
    example: 'Betreff: Bewerbung für ein Praktikum im Bereich Marketing\n\nSehr geehrte Damen und Herren,\n\nmit großem Interesse habe ich Ihre Stellenanzeige auf Ihrer Website gelesen. Ich bewerbe mich hiermit um ein Praktikum in Ihrem Unternehmen.\n\nIch studiere Betriebswirtschaftslehre im dritten Semester. Ich habe bereits Erfahrung in Social Media und Content-Erstellung. Meine Deutschkenntnisse sind auf dem Niveau B1, und ich verbessere sie täglich.\n\nIch bin ab dem 1. Juli für drei Monate verfügbar. Ich würde mich sehr freuen, in Ihrem Team arbeiten zu dürfen.\n\nMit freundlichen Grüßen,\nMaria Dupont',
    minWords: 60,
  },
];

/* ─── Word counter ────────────────────────────────────────────── */
const countWords = (t) => t.trim().split(/\s+/).filter(w => w.length > 0).length;

/* ─── Level badge ────────────────────────────────────────────── */
const LvlBadge = ({ level }) => {
  const c = { A1: '#818cf8', A2: '#a78bfa', B1: '#34d399' }[level] || '#818cf8';
  return (
    <span className="text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-widest"
      style={{ background: c + '22', color: c, border: `1px solid ${c}40` }}>{level}</span>
  );
};

/* ─── Main ─────────────────────────────────────────────────────── */
export default function Schreiben() {
  const { theme } = useTheme();
  const il = theme === 'light';
  const bg = il ? '#f0f2f5' : '#0d0d0d';
  const card = il ? '#fff' : '#111';
  const border = il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)';
  const textC = il ? '#0f172a' : '#fff';
  const muted = il ? 'rgba(15,23,42,0.50)' : 'rgba(255,255,255,0.45)';
  const accent = '#7124e5';
  const accentBlue = '#4f46e5';

  const [levelFilter, setLevelFilter] = useState('Tout');
  const [selected, setSelected] = useState(PROMPTS[0].id);
  const [writing, setWriting] = useState('');
  const [showExample, setShowExample] = useState(false);
  const [completed, setCompleted] = useState({});
  const contentRef = useRef(null);

  const scrollToContent = () => {
    setTimeout(() => {
      if (contentRef.current) {
        const top = contentRef.current.getBoundingClientRect().top + window.scrollY - 64;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 50);
  };

  const filtered = levelFilter === 'Tout' ? PROMPTS : PROMPTS.filter(p => p.level === levelFilter);
  const prompt = PROMPTS.find(p => p.id === selected) || filtered[0];

  const words = countWords(writing);
  const meetsMin = words >= (prompt?.minWords || 20);

  const handleDone = () => {
    setCompleted(p => ({ ...p, [prompt.id]: words }));
  };

  const handleSelect = (id) => {
    setSelected(id); setWriting(''); setShowExample(false); scrollToContent();
  };

  return (
    <div style={{ paddingTop: 52, background: bg, minHeight: '100vh' }}>

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-4 text-[10px] font-bold uppercase tracking-widest"
          style={{ background: accent + '18', border: `1px solid ${accent}33`, color: accent }}>
          ✍️ Schreiben
        </div>
        <h1 className="text-3xl md:text-4xl font-black mb-2" style={{ color: textC, letterSpacing: '-0.03em' }}>
          Expression écrite
        </h1>
        <p className="text-sm md:text-base" style={{ color: muted }}>
          Entraînez-vous à écrire en allemand avec des sujets progressifs. Consultez les conseils et exemples.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-16 flex flex-col lg:flex-row gap-6">

        {/* ── Left: prompt list ─────────────────────────── */}
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
          {filtered.map(p => (
            <button key={p.id} onClick={() => handleSelect(p.id)}
              className="text-left rounded-2xl p-4 transition-all"
              style={{ background: selected === p.id ? accent + '14' : card, border: `1px solid ${selected === p.id ? accent + '55' : border}` }}>
              <div className="flex items-center justify-between mb-1">
                <LvlBadge level={p.level} />
                {completed[p.id] && (
                  <span className="text-[10px] font-bold text-emerald-400">✓ {completed[p.id]} mots</span>
                )}
              </div>
              <div className="text-lg mt-1">{p.icon}</div>
              <div className="font-bold text-sm" style={{ color: textC }}>{p.title}</div>
              <div className="text-xs mt-0.5" style={{ color: muted }}>{p.type} · min. {p.minWords} mots</div>
            </button>
          ))}
        </div>

        {/* ── Right: writing area ─────────────────────────── */}
        {prompt && (
          <div ref={contentRef} className="flex-1 flex flex-col gap-5">

            {/* Prompt & checklist */}
            <div className="rounded-3xl p-6" style={{ background: card, border: `1px solid ${border}` }}>
              <div className="flex items-center gap-2 mb-3">
                <LvlBadge level={prompt.level} />
                <span className="text-xs font-bold" style={{ color: muted }}>{prompt.type}</span>
              </div>
              <div className="text-2xl mb-2">{prompt.icon}</div>
              <h2 className="text-xl font-black mb-2" style={{ color: textC }}>{prompt.title}</h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: muted }}>{prompt.instruction}</p>

              <div className="rounded-2xl p-4 mb-4" style={{ background: accentBlue + '08', border: `1px solid ${accentBlue}22` }}>
                <div className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: accentBlue }}>📋 À inclure</div>
                <ul className="flex flex-col gap-1">
                  {prompt.checklist.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs" style={{ color: textC }}>
                      <span className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black shrink-0"
                        style={{ background: accentBlue + '22', color: accentBlue }}>{i + 1}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Grammar tips */}
              <details className="rounded-2xl overflow-hidden">
                <summary className="px-4 py-3 cursor-pointer text-xs font-bold flex items-center gap-2"
                  style={{ background: il ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)', color: accent }}>
                  💡 Aide grammaticale & expressions utiles
                </summary>
                <div className="px-4 py-3" style={{ background: il ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.03)' }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {prompt.tips.map((tip, i) => (
                      <div key={i} className="rounded-xl px-3 py-2" style={{ background: accent + '08', border: `1px solid ${accent}18` }}>
                        <div className="text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color: accent }}>{tip.label}</div>
                        <div className="text-xs font-medium italic" style={{ color: textC }}>{tip.example}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </details>
            </div>

            {/* Writing zone */}
            <div className="rounded-3xl p-6" style={{ background: card, border: `1px solid ${border}` }}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-black text-base" style={{ color: textC }}>✍️ Votre texte</h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold" style={{ color: meetsMin ? '#34d399' : words > 0 ? '#f59e0b' : muted }}>
                    {words} / {prompt.minWords} mots
                  </span>
                  {meetsMin && <span className="text-xs">✅</span>}
                </div>
              </div>

              {/* Word count progress */}
              <div className="w-full h-1.5 rounded-full mb-3" style={{ background: il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)' }}>
                <div className="h-full rounded-full transition-all duration-300"
                  style={{ width: `${Math.min((words / prompt.minWords) * 100, 100)}%`, background: meetsMin ? 'linear-gradient(90deg,#34d399,#10b981)' : 'linear-gradient(90deg,#4f46e5,#7c3aed)' }} />
              </div>

              <textarea
                value={writing}
                onChange={e => setWriting(e.target.value)}
                rows={10}
                placeholder={`Écrivez votre texte en allemand ici...\n\nTip: Utilisez les aides grammaticales ci-dessus !`}
                className="w-full rounded-2xl p-4 text-sm leading-relaxed resize-none outline-none transition-all"
                style={{
                  background: il ? '#f8f9fa' : 'rgba(255,255,255,0.04)',
                  border: `1.5px solid ${il ? 'rgba(0,0,0,0.10)' : 'rgba(255,255,255,0.10)'}`,
                  color: textC,
                  fontFamily: 'inherit',
                }}
              />

              <div className="flex items-center gap-3 mt-4">
                <button
                  onClick={handleDone}
                  disabled={!meetsMin}
                  className="px-6 py-2.5 rounded-xl text-sm font-bold transition-all"
                  style={{
                    background: meetsMin ? 'linear-gradient(135deg,#4f46e5,#7c3aed)' : (il ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)'),
                    color: meetsMin ? '#fff' : muted,
                    cursor: meetsMin ? 'pointer' : 'not-allowed',
                  }}>
                  {completed[prompt.id] ? '✓ Terminé' : 'Marquer comme terminé'}
                </button>
                <button onClick={() => setShowExample(v => !v)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
                  style={{ background: il ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)', color: muted, border: `1px solid ${border}` }}>
                  {showExample ? 'Masquer' : '👁 Voir un exemple'}
                </button>
                <button onClick={() => setWriting('')}
                  className="px-3 py-2.5 rounded-xl text-sm transition-all"
                  style={{ color: muted, background: 'transparent', border: `1px solid ${border}` }}>
                  🗑
                </button>
              </div>
            </div>

            {/* Example answer */}
            {showExample && (
              <div className="rounded-3xl p-6" style={{ background: card, border: `1px solid ${accent}33` }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: accent }}>Exemple de réponse</span>
                </div>
                <p className="text-sm leading-7 whitespace-pre-line" style={{ color: textC }}>{prompt.example}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
