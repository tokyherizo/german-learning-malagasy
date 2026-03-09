// A1 Complete Curriculum — Begegnungen A1 (Schubert Verlag)
// 8 Kapitel · each with Teil A (Communication), Teil B (Wissenswertes),
//              Teil C (Grammaire), Teil D (Rückblick)

export const A1_MODULES = [
  // ─────────────────────────────────────────
  // KAPITEL 1 : Guten Tag
  // ─────────────────────────────────────────
  {
    id: "a1-k1",
    number: 1,
    title: "Guten Tag!",
    titleFr: "Bonjour !",
    subtitle: "Se présenter, l'alphabet, les langues, les chiffres, les hobbies",
    icon: "👋",
    color: "#818cf8",
    accentBg: "rgba(129,140,248,0.10)",
    accentBorder: "rgba(129,140,248,0.25)",
    objectives: [
      "Saluer et prendre congé (formel/informel)",
      "Se présenter : nom, prénom, nationalité, profession",
      "Épeler avec l'alphabet allemand",
      "Nommer les langues et les pays d'Europe",
      "Compter de 0 à 100",
      "Parler de ses hobbies et loisirs",
    ],
    teile: [
      {
        teil: "A",
        label: "Kommunikation",
        labelFr: "Communication",
        topics: ["Sich vorstellen", "Das Alphabet", "Sprachen und Länder", "Die Zahlen 0–100", "Personen und Hobbys"],
        lessonIds: ["a1-l1", null, null, "a1-l2", "a1-l3"],
      },
      {
        teil: "B",
        label: "Wissenswertes",
        labelFr: "Culture & Civilisation",
        topics: ["Grußformeln in Deutschland, Österreich und der Schweiz"],
        lessonIds: [null],
      },
      {
        teil: "C",
        label: "Grammatik",
        labelFr: "Grammaire",
        topics: ["Personalpronomen & Verben im Präsens", "Satzbau (SVK)", "Die Nomengruppe: Artikel & Genus"],
        lessonIds: ["a1-g2", null, "a1-g1"],
      },
      {
        teil: "D",
        label: "Rückblick",
        labelFr: "Révision & Test",
        topics: ["Révision du chapitre", "Exercices de consolidation", "Mini-test"],
        lessonIds: [null],
      },
    ],
    lessons: ["a1-l1", "a1-l2", "a1-l3", "a1-g2", "a1-g1"],
    grammarTopics: ["Verbes au présent : sein, heißen, kommen, wohnen", "Structure SVK", "Genres : der/die/das"],
    miniTestId: "k1-test",
  },
  // ─────────────────────────────────────────
  // KAPITEL 2 : Erste Kontakte am Arbeitsplatz
  // ─────────────────────────────────────────
  {
    id: "a1-k2",
    number: 2,
    title: "Erste Kontakte am Arbeitsplatz",
    titleFr: "Premiers contacts au travail",
    subtitle: "Le bureau, l'université, les loisirs, la négation, les questions",
    icon: "💼",
    color: "#34d399",
    accentBg: "rgba(52,211,153,0.10)",
    accentBorder: "rgba(52,211,153,0.25)",
    objectives: [
      "Parler du bureau et des collègues",
      "Décrire l'environnement à l'université",
      "Exprimer ses loisirs et activités",
      "Utiliser la négation : nicht / kein",
      "Poser des questions (W-Fragen et Ja/Nein)",
      "Comprendre les prépositions de lieu simples",
    ],
    teile: [
      {
        teil: "A",
        label: "Kommunikation",
        labelFr: "Communication",
        topics: ["Rund um die Arbeit: im Büro", "Rund um die Arbeit: an der Universität", "Freizeit"],
        lessonIds: [null, null, null],
      },
      {
        teil: "B",
        label: "Wissenswertes",
        labelFr: "Culture & Civilisation",
        topics: ["Arbeits- und Studienkultur in Deutschland"],
        lessonIds: [null],
      },
      {
        teil: "C",
        label: "Grammatik",
        labelFr: "Grammaire",
        topics: ["Die Nomengruppe (Akkusativ)", "Verben: haben, arbeiten, spielen", "Die Negation: nicht / kein", "Lokale Präpositionen", "Fragen: W-Fragen & Ja/Nein-Fragen"],
        lessonIds: [null, null, null, null, null],
      },
      {
        teil: "D",
        label: "Rückblick",
        labelFr: "Révision & Test",
        topics: ["Révision du chapitre", "Exercices de consolidation", "Mini-test"],
        lessonIds: [null],
      },
    ],
    lessons: [],
    grammarTopics: ["L'accusatif", "Verbe haben au présent", "Négation nicht/kein", "Prépositions de lieu"],
    miniTestId: "k2-test",
  },

  // ─────────────────────────────────────────
  // KAPITEL 3 : Unterwegs in München
  // ─────────────────────────────────────────
  {
    id: "a1-k3",
    number: 3,
    title: "Unterwegs in München",
    titleFr: "En route dans Munich",
    subtitle: "L'hôtel, le plan de la ville, les transports, demander son chemin",
    icon: "🏙️",
    color: "#f59e0b",
    accentBg: "rgba(245,158,11,0.10)",
    accentBorder: "rgba(245,158,11,0.25)",
    objectives: [
      "Réserver et s'orienter dans un hôtel",
      "Lire et utiliser un plan de ville",
      "Demander et indiquer le chemin",
      "Parler de Munich et des villes allemandes",
      "Utiliser les articles au datif avec les prépositions de lieu",
    ],
    teile: [
      {
        teil: "A",
        label: "Kommunikation",
        labelFr: "Communication",
        topics: ["Im Hotel", "Der Stadtplan", "In München"],
        lessonIds: [null, null, null],
      },
      {
        teil: "B",
        label: "Wissenswertes",
        labelFr: "Culture & Civilisation",
        topics: ["München — Sehenswürdigkeiten und Stadtgeschichte"],
        lessonIds: [null],
      },
      {
        teil: "C",
        label: "Grammatik",
        labelFr: "Grammaire",
        topics: ["Die Nomengruppe: Nominativ, Akkusativ, Dativ", "Verben: fahren, nehmen, gehen", "Präpositionen: in, an, auf, zu, mit"],
        lessonIds: [null, null, null],
      },
      {
        teil: "D",
        label: "Rückblick",
        labelFr: "Révision & Test",
        topics: ["Révision du chapitre", "Exercices de consolidation", "Mini-test"],
        lessonIds: [null],
      },
    ],
    lessons: [],
    grammarTopics: ["Le datif", "Prépositions in/an/auf/zu", "Verbes de déplacement"],
    miniTestId: "k3-test",
  },

  // ─────────────────────────────────────────
  // KAPITEL 4 : Essen und Trinken
  // ─────────────────────────────────────────
  {
    id: "a1-k4",
    number: 4,
    title: "Essen und Trinken",
    titleFr: "Manger et boire",
    subtitle: "Le petit-déjeuner, la vaisselle, la nourriture, au restaurant",
    icon: "🍽️",
    color: "#f472b6",
    accentBg: "rgba(244,114,182,0.10)",
    accentBorder: "rgba(244,114,182,0.25)",
    objectives: [
      "Commander un petit-déjeuner à l'hôtel",
      "Nommer la vaisselle et les couverts",
      "Parler des aliments et des boissons",
      "Commander et payer au restaurant",
      "Exprimer ses goûts alimentaires",
      "Utiliser les pronoms personnels à l'accusatif",
    ],
    teile: [
      {
        teil: "A",
        label: "Kommunikation",
        labelFr: "Communication",
        topics: ["Frühstück im Hotel", "Geschirr und Besteck", "Essen und Trinken", "Im Restaurant"],
        lessonIds: ["k4-a1", "k4-a2", "k4-a3", "k4-a4"],
      },
      {
        teil: "B",
        label: "Wissenswertes",
        labelFr: "Culture & Civilisation",
        topics: ["Essen in Deutschland — Küche und Essgewohnheiten"],
        lessonIds: ["k4-b1"],
      },
      {
        teil: "C",
        label: "Grammatik",
        labelFr: "Grammaire",
        topics: ["Die Nomengruppe (Akkusativ mit Artikeln)", "Verben: essen, trinken, mögen, nehmen", "Personalpronomen im Akkusativ"],
        lessonIds: ["k4-c1", "k4-c2", "k4-c3"],
      },
      {
        teil: "D",
        label: "Rückblick",
        labelFr: "Révision & Test",
        topics: ["Révision du chapitre", "Exercices de consolidation", "Mini-test"],
        lessonIds: ["k4-d1"],
      },
    ],
    lessons: ["k4-a1", "k4-a2", "k4-a3", "k4-a4", "k4-b1", "k4-c1", "k4-c2", "k4-c3", "k4-d1"],
    grammarTopics: ["L'accusatif avec articles", "Verbes essen/trinken/mögen", "Pronoms personnels accusatif"],
    miniTestId: "k4-test",
  },

  // ─────────────────────────────────────────
  // KAPITEL 5 : Alltag
  // ─────────────────────────────────────────
  {
    id: "a1-k5",
    number: 5,
    title: "Alltag",
    titleFr: "La vie quotidienne",
    subtitle: "Routine journalière, stress au bureau, ordinateur, prendre rendez-vous",
    icon: "🗓️",
    color: "#60a5fa",
    accentBg: "rgba(96,165,250,0.10)",
    accentBorder: "rgba(96,165,250,0.25)",
    objectives: [
      "Décrire sa routine quotidienne et ses horaires",
      "Parler du stress et des problèmes au bureau",
      "Utiliser l'ordinateur et le vocabulaire numérique",
      "Prendre, donner et confirmer un rendez-vous",
      "Utiliser les verbes à particule séparable",
      "Maîtriser les prépositions temporelles",
    ],
    teile: [
      {
        teil: "A",
        label: "Kommunikation",
        labelFr: "Communication",
        topics: ["Tagesablauf", "Stress im Büro", "Am Computer", "Einen Termin vereinbaren"],
        lessonIds: ["a1-l6", null, null, null],
      },
      {
        teil: "B",
        label: "Wissenswertes",
        labelFr: "Culture & Civilisation",
        topics: ["Arbeit und Freizeit in Deutschland — Work-Life-Balance"],
        lessonIds: [null],
      },
      {
        teil: "C",
        label: "Grammatik",
        labelFr: "Grammaire",
        topics: ["Verben: trennbare Verben (aufstehen, anfangen…)", "Temporale Präpositionen (um, am, im, von…bis)"],
        lessonIds: [null, null],
      },
      {
        teil: "D",
        label: "Rückblick",
        labelFr: "Révision & Test",
        topics: ["Révision du chapitre", "Exercices de consolidation", "Mini-test"],
        lessonIds: [null],
      },
    ],
    lessons: ["a1-l6"],
    grammarTopics: ["Verbes séparables", "Prépositions temporelles um/am/im", "L'heure formelle/informelle"],
    miniTestId: "k5-test",
  },

  // ─────────────────────────────────────────
  // KAPITEL 6 : Reisen
  // ─────────────────────────────────────────
  {
    id: "a1-k6",
    number: 6,
    title: "Reisen",
    titleFr: "Voyager",
    subtitle: "Saisons, météo, destinations, préparatifs, transports",
    icon: "✈️",
    color: "#22d3ee",
    accentBg: "rgba(34,211,238,0.10)",
    accentBorder: "rgba(34,211,238,0.25)",
    objectives: [
      "Parler des saisons et du temps qu'il fait",
      "Décrire des destinations de voyage",
      "Planifier et préparer un voyage",
      "Utiliser les différents moyens de transport",
      "Utiliser les conjonctions de coordination",
      "Comprendre les verbes modaux wollen, möchten, können",
    ],
    teile: [
      {
        teil: "A",
        label: "Kommunikation",
        labelFr: "Communication",
        topics: ["Die Jahreszeiten und das Wetter", "Reiseziele", "Reisevorbereitungen", "Verkehrsmittel"],
        lessonIds: [null, null, null, null],
      },
      {
        teil: "B",
        label: "Wissenswertes",
        labelFr: "Culture & Civilisation",
        topics: ["Reisegewohnheiten der Deutschen — beliebteste Urlaubsziele"],
        lessonIds: [null],
      },
      {
        teil: "C",
        label: "Grammatik",
        labelFr: "Grammaire",
        topics: ["Satzverbindungen: Konjunktionen (und, aber, oder, denn, weil)", "Verben: Modalverben Einführung (wollen, möchten, können)", "Die Nomengruppe: Dativ nach mit/nach/von/zu"],
        lessonIds: [null, null, null],
      },
      {
        teil: "D",
        label: "Rückblick",
        labelFr: "Révision & Test",
        topics: ["Révision du chapitre", "Exercices de consolidation", "Mini-test"],
        lessonIds: [null],
      },
    ],
    lessons: [],
    grammarTopics: ["Conjonctions de coordination", "Verbes modaux wollen/möchten/können", "Datif avec mit/nach/von/zu"],
    miniTestId: "k6-test",
  },

  // ─────────────────────────────────────────
  // KAPITEL 7 : Wohnen
  // ─────────────────────────────────────────
  {
    id: "a1-k7",
    number: 7,
    title: "Wohnen",
    titleFr: "Habiter",
    subtitle: "Un appartement en ville, l'ameublement, le règlement de maison",
    icon: "🏠",
    color: "#a78bfa",
    accentBg: "rgba(167,139,250,0.10)",
    accentBorder: "rgba(167,139,250,0.25)",
    objectives: [
      "Décrire un appartement et ses pièces",
      "Nommer les meubles et l'électroménager",
      "Comprendre et rédiger un règlement de copropriété",
      "Donner et comprendre des indications de lieu",
      "Utiliser les prépositions locales (Wo? / Wohin?)",
      "Décrire des objets avec des adjectifs",
    ],
    teile: [
      {
        teil: "A",
        label: "Kommunikation",
        labelFr: "Communication",
        topics: ["Eine Wohnung in der Stadt", "Die Wohnungseinrichtung", "Die Hausordnung"],
        lessonIds: [null, null, null],
      },
      {
        teil: "B",
        label: "Wissenswertes",
        labelFr: "Culture & Civilisation",
        topics: ["Wohnen in Deutschland — Mieten, Kaufen und Nachbarschaft"],
        lessonIds: [null],
      },
      {
        teil: "C",
        label: "Grammatik",
        labelFr: "Grammaire",
        topics: ["Lokalangaben: Wo? (Dativ) vs. Wohin? (Akkusativ)", "Verben: liegen/stehen/hängen vs. legen/stellen/hängen", "Adjektive (attributiv und prädikativ)", "Nomen: Komposita (Wohnzimmer, Schlafzimmer…)"],
        lessonIds: [null, null, null, null],
      },
      {
        teil: "D",
        label: "Rückblick",
        labelFr: "Révision & Test",
        topics: ["Révision du chapitre", "Exercices de consolidation", "Mini-test"],
        lessonIds: [null],
      },
    ],
    lessons: [],
    grammarTopics: ["Wo? Dativ vs. Wohin? Akkusativ", "Verbes de position", "Adjectifs attributifs"],
    miniTestId: "k7-test",
  },

  // ─────────────────────────────────────────
  // KAPITEL 8 : Begegnungen und Ereignisse
  // ─────────────────────────────────────────
  {
    id: "a1-k8",
    number: 8,
    title: "Begegnungen und Ereignisse",
    titleFr: "Rencontres et événements",
    subtitle: "Souhaits, cadeaux, santé, excuses, passé composé",
    icon: "🎉",
    color: "#fb923c",
    accentBg: "rgba(251,146,60,0.10)",
    accentBorder: "rgba(251,146,60,0.25)",
    objectives: [
      "Formuler des vœux et offrir des cadeaux",
      "Parler de sa santé et chez le médecin",
      "Présenter des excuses et expliquer une absence",
      "Raconter des événements passés (Perfekt)",
      "Utiliser les verbes modaux müssen, dürfen, sollen",
      "Comprendre haben/sein + Partizip II au Perfekt",
    ],
    teile: [
      {
        teil: "A",
        label: "Kommunikation",
        labelFr: "Communication",
        topics: ["Gute Wünsche und schöne Geschenke", "Die Gesundheit", "Entschuldigungen", "Was ist noch alles passiert?"],
        lessonIds: [null, null, null, null],
      },
      {
        teil: "B",
        label: "Wissenswertes",
        labelFr: "Culture & Civilisation",
        topics: ["Feste und Bräuche in Deutschland — Geburtstag, Weihnachten, Karneval"],
        lessonIds: [null],
      },
      {
        teil: "C",
        label: "Grammatik",
        labelFr: "Grammaire",
        topics: ["Verben: Perfekt mit haben (gemacht, gespielt…)", "Modalverben: müssen, dürfen, sollen"],
        lessonIds: [null, null],
      },
      {
        teil: "D",
        label: "Rückblick",
        labelFr: "Révision & Test",
        topics: ["Révision finale A1", "Exercices de bilan", "Test final A1"],
        lessonIds: [null],
      },
    ],
    lessons: [],
    grammarTopics: ["Le Perfekt : haben + Partizip II", "Verbes modaux müssen/dürfen/sollen", "Sein + Partizip II"],
    miniTestId: "k8-test",
  },
];

/* ── Helper functions ── */
export const getModuleById      = (id) => A1_MODULES.find(m => m.id === id) || null;
export const getModuleByNumber  = (n)  => A1_MODULES.find(m => m.number === n) || null;
export const getTeilLessons     = (kapitelId, teil) => {
  const mod = getModuleById(kapitelId);
  if (!mod) return [];
  const t = mod.teile.find(t => t.teil === teil);
  return t ? t.lessonIds : [];
};
