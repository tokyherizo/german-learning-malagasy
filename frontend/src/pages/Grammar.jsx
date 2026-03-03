import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

/* ── Reusable section wrapper ── */
const GSection = ({ id, title, subtitle, accent = '#818cf8', children }) => {
  const { theme } = useTheme();
  const il = theme === 'light';
  return (
    <div
      id={id}
      className="relative overflow-hidden rounded-3xl mb-8"
      style={{
        background: il ? '#ffffff' : '#111',
        border: `1.5px solid ${accent}25`,
      }}
    >
      <div className="absolute top-0 left-0 bottom-0 w-[3px] rounded-l-3xl" style={{ background: `linear-gradient(to bottom, ${accent}cc, ${accent}18)` }} />
      <div className="px-6 pt-6 pb-2 flex items-center gap-3">
        <span
          className="text-[10px] font-black px-2 py-0.5 rounded-md shrink-0"
          style={{ background: `${accent}22`, color: accent, border: `1px solid ${accent}35` }}
        >
          GRAMMAR
        </span>
        <div>
          <h2 className="font-black text-lg" style={{ color: accent }}>{title}</h2>
          {subtitle && <p className="text-xs mt-0.5" style={{ color: il ? 'rgba(15,23,42,0.50)' : 'rgba(255,255,255,0.40)' }}>{subtitle}</p>}
        </div>
      </div>
      <div className="px-6 pb-6 pt-2">{children}</div>
    </div>
  );
};

/* ── Table row ── */
const GTable = ({ headers, rows, accent = '#818cf8' }) => {
  const { theme } = useTheme();
  const il = theme === 'light';
  return (
    <div className="overflow-x-auto rounded-2xl" style={{ border: `1px solid ${accent}18` }}>
      <table className="w-full text-sm">
        <thead>
          <tr style={{ background: `${accent}10`, borderBottom: `1px solid ${accent}20` }}>
            {headers.map((h, i) => (
              <th key={i} className="text-left py-2.5 px-4 font-black text-[11px] uppercase tracking-widest whitespace-nowrap" style={{ color: `${accent}bb` }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="transition-colors"
              style={{
                borderBottom: i < rows.length - 1 ? `1px solid ${il ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.04)'}` : 'none',
                background: i % 2 === 1 ? (il ? 'rgba(0,0,0,0.02)' : 'rgba(255,255,255,0.015)') : 'transparent',
              }}
            >
              {row.map((cell, j) => (
                <td key={j} className="py-3 px-4" style={{ color: il ? (j === 0 ? '#0f172a' : 'rgba(15,23,42,0.70)') : (j === 0 ? '#fff' : 'rgba(220,225,255,0.70)') }}>
                  {j === 0
                    ? <span className="font-black">{cell}</span>
                    : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/* ── Example box ── */
const Example = ({ de, en, accent = '#818cf8' }) => {
  const { theme } = useTheme();
  const il = theme === 'light';
  return (
    <div
      className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 rounded-xl px-4 py-3 mt-2"
      style={{ background: `${accent}0d`, border: `1px solid ${accent}22` }}
    >
      <span className="font-black text-sm" style={{ color: accent }}>{de}</span>
      <span className="text-xs" style={{ color: il ? 'rgba(15,23,42,0.45)' : 'rgba(255,255,255,0.40)' }}>=</span>
      <span className="text-sm italic" style={{ color: il ? 'rgba(15,23,42,0.60)' : 'rgba(220,225,255,0.60)' }}>{en}</span>
    </div>
  );
};

/* ── Tip box ── */
const Tip = ({ text }) => {
  const { theme } = useTheme();
  const il = theme === 'light';
  return (
    <div
      className="flex gap-3 rounded-2xl p-4 mt-4"
      style={{ background: 'rgba(251,191,36,0.07)', border: '1.5px solid rgba(251,191,36,0.22)' }}
    >
      <span
        className="text-[10px] font-black px-2 py-0.5 rounded-lg shrink-0 self-start mt-0.5"
        style={{ background: 'rgba(251,191,36,0.18)', color: '#fbbf24', border: '1px solid rgba(251,191,36,0.28)' }}
      >
        Tipp
      </span>
      <p className="text-sm leading-relaxed" style={{ color: il ? 'rgba(15,23,42,0.70)' : 'rgba(253,230,138,0.85)' }}>{text}</p>
    </div>
  );
};

/* ── Sidebar nav sections ── */
const SECTIONS = [
  { id: 's1', label: 'Articles', sub: 'der / die / das', accent: '#60a5fa' },
  { id: 's2', label: 'Cases', sub: 'Kasus', accent: '#a78bfa' },
  { id: 's3', label: 'sein & haben', sub: 'to be / to have', accent: '#34d399' },
  { id: 's4', label: 'Regular Verbs', sub: 'Regelmäßige Verben', accent: '#f472b6' },
  { id: 's5', label: 'Modal Verbs', sub: 'Modalverben', accent: '#fb923c' },
  { id: 's6', label: 'W-Questions', sub: 'Fragewörter', accent: '#38bdf8' },
  { id: 's7', label: 'Negation', sub: 'nicht / kein', accent: '#f87171' },
  { id: 's8', label: 'Separable Verbs', sub: 'Trennbare Verben', accent: '#fbbf24' },
  { id: 's9', label: 'Prepositions', sub: 'Präpositionen', accent: '#c084fc' },
  { id: 's10', label: 'Sentence Structure', sub: 'Satzstruktur', accent: '#6ee7b7' },
];

const Grammar = () => {
  const { theme } = useTheme();
  const il = theme === 'light';
  const [activeSection, setActiveSection] = useState('s1');

  const scrollTo = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen" style={{ background: il ? '#f0f2f5' : '#0d0d0d', paddingTop: '52px' }}>

      {/* Page header */}
      <section
        className="relative overflow-hidden py-14 border-b"
        style={{ background: il ? '#f0f2f5' : '#0d0d0d', borderColor: il ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0.07)' }}
      >
        <div
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 font-black leading-none select-none pointer-events-none text-center"
          style={{ fontSize: 'clamp(4rem,16vw,10rem)', color: il ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.025)', letterSpacing: '-0.04em', zIndex: 0 }}
        >
          GRAMMATIK
        </div>
        <div className="relative max-w-6xl mx-auto px-6 text-center" style={{ zIndex: 1 }}>
          <span
            className="inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{ background: 'rgba(129,140,248,0.12)', color: '#818cf8', border: '1px solid rgba(129,140,248,0.25)' }}
          >
            Référence complète
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-3" style={{ color: il ? '#0f172a' : '#fff' }}>
            German Grammar
          </h1>
          <p className="text-sm max-w-lg mx-auto" style={{ color: il ? 'rgba(15,23,42,0.55)' : 'rgba(255,255,255,0.45)' }}>
            A complete grammar reference — articles, cases, verbs, prepositions and more. Use the index to jump to any topic.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-10 flex gap-8 items-start">

        {/* Sticky sidebar index */}
        <aside className="hidden lg:flex flex-col gap-1 w-52 shrink-0 sticky top-[68px]">
          <p className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: il ? 'rgba(15,23,42,0.35)' : 'rgba(255,255,255,0.30)' }}>Index</p>
          {SECTIONS.map(s => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="text-left flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs transition-all duration-150"
              style={{
                background: activeSection === s.id ? `${s.accent}15` : 'transparent',
                border: activeSection === s.id ? `1px solid ${s.accent}30` : '1px solid transparent',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: s.accent }} />
              <span>
                <span className="font-bold block" style={{ color: activeSection === s.id ? s.accent : (il ? 'rgba(15,23,42,0.70)' : 'rgba(255,255,255,0.65)') }}>{s.label}</span>
                <span className="text-[10px]" style={{ color: il ? 'rgba(15,23,42,0.35)' : 'rgba(255,255,255,0.30)' }}>{s.sub}</span>
              </span>
            </button>
          ))}
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0">

          {/* ── 1. Articles ── */}
          <GSection id="s1" title="Articles — der, die, das, ein" subtitle="Every German noun has a grammatical gender" accent="#60a5fa">
            <p className="text-sm mb-4" style={{ color: il ? 'rgba(15,23,42,0.65)' : 'rgba(220,225,255,0.65)' }}>
              Every German noun is <strong>masculine</strong> (der), <strong>feminine</strong> (die) or <strong>neuter</strong> (das). You <strong>must</strong> learn the article together with the noun — there is no reliable rule.
            </p>
            <GTable
              accent="#60a5fa"
              headers={['Gender', 'Definite Article', 'Indefinite Article', 'Example']}
              rows={[
                ['Masculine (m.)', 'der', 'ein', 'der Mann — the man'],
                ['Feminine (f.)', 'die', 'eine', 'die Frau — the woman'],
                ['Neuter (n.)', 'das', 'ein', 'das Kind — the child'],
                ['Plural', 'die', 'keine', 'die Kinder — the children'],
              ]}
            />
            <Example de="der Tisch, die Lampe, das Buch" en="the table (m.), the lamp (f.), the book (n.)" accent="#60a5fa" />
            <Tip text="Always learn nouns WITH their article: not just 'Tisch' but 'der Tisch'. Make flashcards with colour-coding: blue for der, red for die, green for das." />
          </GSection>

          {/* ── 2. Cases ── */}
          <GSection id="s2" title="The Four Cases — Die vier Kasus" subtitle="How articles change depending on role in the sentence" accent="#a78bfa">
            <p className="text-sm mb-4" style={{ color: il ? 'rgba(15,23,42,0.65)' : 'rgba(220,225,255,0.65)' }}>
              German has four grammatical cases that change the form of articles and pronouns depending on the role of the noun in the sentence.
            </p>
            <GTable
              accent="#a78bfa"
              headers={['Case', 'Role', 'der (m.)', 'die (f.)', 'das (n.)', 'die (pl.)']}
              rows={[
                ['Nominativ', 'Subject', 'der', 'die', 'das', 'die'],
                ['Akkusativ', 'Direct object', 'den', 'die', 'das', 'die'],
                ['Dativ', 'Indirect object', 'dem', 'der', 'dem', 'den'],
                ['Genitiv', "Possession / 'of'", 'des', 'der', 'des', 'der'],
              ]}
            />
            <Example de="Der Mann sieht den Hund." en="The man (Nom.) sees the dog (Akk.)" accent="#a78bfa" />
            <Example de="Ich gebe der Frau das Buch." en="I give the woman (Dat.) the book (Akk.)" accent="#a78bfa" />
            <Example de="Das Auto des Mannes ist rot." en="The car (Nom.) of the man (Gen.) is red." accent="#a78bfa" />
            <Tip text="Master Nominativ and Akkusativ first — they cover 90% of everyday German. Dativ is used after 'mit, bei, von, zu, aus, nach'. Genitiv is mostly used in writing." />
          </GSection>

          {/* ── 3. sein & haben ── */}
          <GSection id="s3" title="sein & haben — to be & to have" subtitle="The two most important German verbs" accent="#34d399">
            <p className="text-sm mb-4" style={{ color: il ? 'rgba(15,23,42,0.65)' : 'rgba(220,225,255,0.65)' }}>
              These two verbs are irregular and must be memorised. They are also used as auxiliary verbs to form the past tense.
            </p>
            <GTable
              accent="#34d399"
              headers={['Pronoun', 'sein (to be)', 'haben (to have)']}
              rows={[
                ['ich', 'bin', 'habe'],
                ['du', 'bist', 'hast'],
                ['er / sie / es', 'ist', 'hat'],
                ['wir', 'sind', 'haben'],
                ['ihr', 'seid', 'habt'],
                ['sie / Sie', 'sind', 'haben'],
              ]}
            />
            <Example de="Ich bin Lehrer. Er ist müde." en="I am a teacher. He is tired." accent="#34d399" />
            <Example de="Ich habe ein Auto. Sie hat keine Zeit." en="I have a car. She has no time." accent="#34d399" />
            <Example de="Ich bin gegangen. / Ich habe gegessen." en="Past: I went. / I have eaten. (sein/haben as auxiliaries)" accent="#34d399" />
            <Tip text="'sein' is used for movement and state changes in the past tense: fahren, gehen, kommen, werden. 'haben' is used for most other verbs in the past tense." />
          </GSection>

          {/* ── 4. Regular verbs ── */}
          <GSection id="s4" title="Regular Verb Conjugation — Regelmäßige Verben" subtitle="Present tense pattern for all regular verbs" accent="#f472b6">
            <p className="text-sm mb-4" style={{ color: il ? 'rgba(15,23,42,0.65)' : 'rgba(220,225,255,0.65)' }}>
              Regular verbs follow a predictable pattern. Take the infinitive, remove <strong>-en</strong>, then add the endings below.
            </p>
            <GTable
              accent="#f472b6"
              headers={['Pronoun', 'Ending', 'lernen (to learn)', 'spielen (to play)', 'wohnen (to live)']}
              rows={[
                ['ich', '-e', 'lerne', 'spiele', 'wohne'],
                ['du', '-st', 'lernst', 'spielst', 'wohnst'],
                ['er / sie / es', '-t', 'lernt', 'spielt', 'wohnt'],
                ['wir', '-en', 'lernen', 'spielen', 'wohnen'],
                ['ihr', '-t', 'lernt', 'spielt', 'wohnt'],
                ['sie / Sie', '-en', 'lernen', 'spielen', 'wohnen'],
              ]}
            />
            <Example de="Ich lerne Deutsch." en="I am learning German." accent="#f472b6" />
            <Example de="Du wohnst in Berlin." en="You live in Berlin." accent="#f472b6" />
            <Tip text="Many common verbs are IRREGULAR (fahren, gehen, sprechen, essen, sehen…). The du/er forms often change their stem vowel: fahren → du fährst, er fährt. These must be learned individually." />
          </GSection>

          {/* ── 5. Modal verbs ── */}
          <GSection id="s5" title="Modal Verbs — Modalverben" subtitle="können, müssen, wollen, sollen, dürfen, möchten" accent="#fb923c">
            <p className="text-sm mb-4" style={{ color: il ? 'rgba(15,23,42,0.65)' : 'rgba(220,225,255,0.65)' }}>
              Modal verbs express <strong>ability, necessity, permission, or desire</strong>. The main verb goes to the <strong>end of the sentence</strong> in its infinitive form.
            </p>
            <GTable
              accent="#fb923c"
              headers={['Pronoun', 'können (can)', 'müssen (must)', 'wollen (want)', 'dürfen (may)', 'sollen (should)', 'möchten (would like)']}
              rows={[
                ['ich', 'kann', 'muss', 'will', 'darf', 'soll', 'möchte'],
                ['du', 'kannst', 'musst', 'willst', 'darfst', 'sollst', 'möchtest'],
                ['er/sie/es', 'kann', 'muss', 'will', 'darf', 'soll', 'möchte'],
                ['wir', 'können', 'müssen', 'wollen', 'dürfen', 'sollen', 'möchten'],
                ['ihr', 'könnt', 'müsst', 'wollt', 'dürft', 'sollt', 'möchtet'],
                ['sie/Sie', 'können', 'müssen', 'wollen', 'dürfen', 'sollen', 'möchten'],
              ]}
            />
            <Example de="Ich kann Deutsch sprechen." en="I can speak German." accent="#fb923c" />
            <Example de="Du musst das Buch lesen." en="You must read the book." accent="#fb923c" />
            <Example de="Ich möchte einen Kaffee, bitte." en="I would like a coffee, please." accent="#fb923c" />
            <Tip text="The infinitive ALWAYS goes to the end: 'Ich will heute Abend ins Kino gehen.' The modal verb changes according to person, the main verb stays in its infinitive form." />
          </GSection>

          {/* ── 6. W-Questions ── */}
          <GSection id="s6" title="W-Questions — Fragewörter" subtitle="Who, what, when, where, why, how?" accent="#38bdf8">
            <p className="text-sm mb-4" style={{ color: il ? 'rgba(15,23,42,0.65)' : 'rgba(220,225,255,0.65)' }}>
              Question words always come <strong>first</strong> in the sentence. The verb comes <strong>second</strong>.
            </p>
            <GTable
              accent="#38bdf8"
              headers={['Question word', 'Meaning', 'Example', 'Answer example']}
              rows={[
                ['Wer?', 'Who?', 'Wer ist das?', 'Das ist Maria.'],
                ['Was?', 'What?', 'Was machst du?', 'Ich lerne Deutsch.'],
                ['Wann?', 'When?', 'Wann kommst du?', 'Um 8 Uhr.'],
                ['Wo?', 'Where? (location)', 'Wo wohnst du?', 'In Berlin.'],
                ['Woher?', 'Where from?', 'Woher kommst du?', 'Aus Frankreich.'],
                ['Wohin?', 'Where to?', 'Wohin gehst du?', 'In die Schule.'],
                ['Warum?', 'Why?', 'Warum lernst du Deutsch?', 'Weil es schön ist.'],
                ['Wie?', 'How?', 'Wie heißt du?', 'Ich heiße Marie.'],
                ['Wie viel?', 'How much/many?', 'Wie viel kostet das?', 'Es kostet 5 Euro.'],
                ['Welch-?', 'Which?', 'Welchen Bus nimmst du?', 'Den Bus Nummer 4.'],
              ]}
            />
            <Tip text="'Wo = where (location)' vs 'Wohin = where to (movement)': Wo bist du? — Ich bin zu Hause. Wohin gehst du? — Ich gehe nach Hause." />
          </GSection>

          {/* ── 7. Negation ── */}
          <GSection id="s7" title="Negation — nicht & kein" subtitle="Saying 'no', 'not', 'no/none'" accent="#f87171">
            <p className="text-sm mb-4" style={{ color: il ? 'rgba(15,23,42,0.65)' : 'rgba(220,225,255,0.65)' }}>
              Use <strong>nicht</strong> to negate verbs, adjectives and adverbs. Use <strong>kein / keine / kein</strong> to negate nouns (replaces 'ein').
            </p>
            <GTable
              accent="#f87171"
              headers={['Rule', 'Positive', 'Negative', 'English']}
              rows={[
                ['Verb negation', 'Ich komme.', 'Ich komme nicht.', "I'm not coming."],
                ['Adjective negation', 'Das ist schön.', 'Das ist nicht schön.', "That is not beautiful."],
                ['Noun (m./n.)', 'Ich habe ein Auto.', 'Ich habe kein Auto.', "I don't have a car."],
                ['Noun (f./pl.)', 'Ich habe eine Frau.', 'Ich habe keine Frau.', "I don't have a wife."],
                ['Kein + Pl.', 'Ich habe Freunde.', 'Ich habe keine Freunde.', "I have no friends."],
                ['nicht + always', 'Er schläft.', 'Er schläft nicht.', "He's not sleeping."],
              ]}
            />
            <Example de="Ich spreche nicht Englisch." en="I do not speak English." accent="#f87171" />
            <Example de="Ich habe keine Zeit." en="I have no time. (keine = kein + feminine)" accent="#f87171" />
            <Tip text="Simple rule: Use 'kein/keine' when you would use 'ein/eine' in the positive sentence. Use 'nicht' for everything else (verbs, adverbs, proper nouns, der/die/das nouns)." />
          </GSection>

          {/* ── 8. Separable verbs ── */}
          <GSection id="s8" title="Separable Verbs — Trennbare Verben" subtitle="Verbs with prefixes that split off" accent="#fbbf24">
            <p className="text-sm mb-4" style={{ color: il ? 'rgba(15,23,42,0.65)' : 'rgba(220,225,255,0.65)' }}>
              Many German verbs have a <strong>separable prefix</strong>. In main clauses the prefix <strong>splits off and goes to the end</strong> of the sentence.
            </p>
            <GTable
              accent="#fbbf24"
              headers={['Infinitive', 'Meaning', 'Present tense', 'English']}
              rows={[
                ['aufmachen', 'to open', 'Ich mache das Fenster auf.', 'I open the window.'],
                ['zumachen', 'to close', 'Er macht die Tür zu.', 'He closes the door.'],
                ['anfangen', 'to start', 'Der Unterricht fängt an.', 'The lesson starts.'],
                ['aufstehen', 'to get up', 'Ich stehe um 7 Uhr auf.', 'I get up at 7 o\'clock.'],
                ['einschlafen', 'to fall asleep', 'Sie schläft früh ein.', 'She falls asleep early.'],
                ['anrufen', 'to call (phone)', 'Ich rufe dich morgen an.', 'I\'ll call you tomorrow.'],
                ['mitnehmen', 'to take along', 'Nimm dein Buch mit!', 'Take your book with you!'],
                ['zurückgehen', 'to go back', 'Wir gehen jetzt zurück.', 'We are going back now.'],
              ]}
            />
            <Example de="Ich mache das Buch auf. / Mach das Buch auf!" en="I open the book. / Open the book! (prefix always at end)" accent="#fbbf24" />
            <Tip text="In subordinate clauses (after 'weil', 'dass', 'wenn'...) the verb goes to the END, and the prefix REJOINS it: Ich weiß, dass er früh aufsteht." />
          </GSection>

          {/* ── 9. Prepositions ── */}
          <GSection id="s9" title="Prepositions — Präpositionen" subtitle="Always require a specific case" accent="#c084fc">
            <p className="text-sm mb-4" style={{ color: il ? 'rgba(15,23,42,0.65)' : 'rgba(220,225,255,0.65)' }}>
              German prepositions <strong>always require a specific case</strong> for the following noun.
            </p>
            <GTable
              accent="#c084fc"
              headers={['Preposition', 'Case', 'Meaning', 'Example']}
              rows={[
                ['durch', 'Akkusativ', 'through', 'Ich gehe durch den Park.'],
                ['für', 'Akkusativ', 'for', 'Das ist für dich.'],
                ['ohne', 'Akkusativ', 'without', 'Ohne Arbeit kein Geld.'],
                ['um', 'Akkusativ', 'around / at (time)', 'Um 8 Uhr frühstücke ich.'],
                ['gegen', 'Akkusativ', 'against', 'Ich bin gegen Gewalt.'],
                ['mit', 'Dativ', 'with', 'Ich fahre mit dem Bus.'],
                ['bei', 'Dativ', 'at / near', 'Ich bin bei meiner Freundin.'],
                ['von', 'Dativ', 'from / of', 'Das Buch ist von Maria.'],
                ['zu', 'Dativ', 'to (destinations)', 'Ich gehe zum Bahnhof.'],
                ['aus', 'Dativ', 'from / out of', 'Ich komme aus Deutschland.'],
                ['nach', 'Dativ', 'after / to (cities)', 'Ich fahre nach Berlin.'],
                ['seit', 'Dativ', 'since / for', 'Seit zwei Jahren lerne ich Deutsch.'],
                ['in', 'Dativ/Akk', 'in (location/direction)', 'Ich bin im Haus. / Ich gehe ins Haus.'],
                ['an', 'Dativ/Akk', 'at/on (location/direction)', 'Er sitzt am Tisch. / Er geht an den Tisch.'],
              ]}
            />
            <Example de="zu + dem = zum  /  zu + der = zur" en="Contractions: zum Bahnhof, zur Schule" accent="#c084fc" />
            <Example de="in + dem = im  /  in + das = ins" en="im Haus (in the house) / ins Haus (into the house)" accent="#c084fc" />
            <Tip text="Two-way prepositions (in, an, auf, über, unter, vor, hinter, neben, zwischen) use DATIV for location (Wo? = Where?) and AKKUSATIV for movement/direction (Wohin? = Where to?)." />
          </GSection>

          {/* ── 10. Sentence Structure ── */}
          <GSection id="s10" title="Sentence Structure — Satzstruktur" subtitle="Word order rules in German" accent="#6ee7b7">
            <p className="text-sm mb-4" style={{ color: il ? 'rgba(15,23,42,0.65)' : 'rgba(220,225,255,0.65)' }}>
              German has strict word-order rules, but they are logical once you know the patterns.
            </p>
            <GTable
              accent="#6ee7b7"
              headers={['Rule', 'Structure', 'Example', 'English']}
              rows={[
                ['Main clause', 'Subject + Verb + Rest', 'Ich lerne Deutsch.', 'I am learning German.'],
                ['V2 rule', 'Element + Verb + Subject', 'Heute lerne ich Deutsch.', 'Today I am learning German.'],
                ['Yes/No question', 'Verb + Subject + Rest?', 'Lernst du Deutsch?', 'Are you learning German?'],
                ['W-question', 'W-word + Verb + Subject?', 'Was lernst du?', 'What are you learning?'],
                ['Modal verb', 'Subject + Modal + Rest + Infinitive', 'Ich will Deutsch lernen.', 'I want to learn German.'],
                ['Subordinate clause', 'Conj. + Subject + Rest + Verb', 'Ich lerne, weil es schön ist.', 'I learn because it is nice.'],
                ['Negation position', 'meist vor dem was negiert wird', 'Er kommt heute nicht.', "He isn't coming today."],
              ]}
            />
            <Example de="Obwohl es regnet, gehe ich spazieren." en="Subordinate clause: verb goes to END after 'weil', 'dass', 'obwohl', 'wenn'..." accent="#6ee7b7" />
            <Tip text="The most important rule: THE VERB IS ALWAYS IN POSITION 2 in a main clause, no matter what comes first. 'Heute gehe ich.' — 'Morgen kommt er.' — 'Das Buch lese ich gern.'" />
          </GSection>

        </div>
      </div>
    </div>
  );
};

export default Grammar;
