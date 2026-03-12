// A1 Complete Curriculum — Begegnungen A1 (Schubert Verlag)
// 8 Kapitel · each with Teil A (Communication), Teil B (Wissenswertes),
//              Teil C (Grammaire), Teil D (Rückblick)
// topics: [{ title, desc, xp, duration, icon, lessonId }]

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
        topics: [
          { title: "Sich vorstellen", desc: "Se présenter : nom, prénom, nationalité, pays d'origine et profession", xp: 50, duration: "15 min", icon: "👤", lessonId: "a1-l1" },
          { title: "Das Alphabet", desc: "L'alphabet allemand de A à Z, les umlauts Ä/Ö/Ü et le ß — apprendre à épeler les mots", xp: 40, duration: "12 min", icon: "🔤", lessonId: "a1-k1-abc" },
          { title: "Sprachen und Länder", desc: "Les pays d'Europe et leurs langues : Deutsch, Englisch, Französisch, Spanisch…", xp: 45, duration: "15 min", icon: "🗺️", lessonId: "a1-k1-laender" },
          { title: "Die Zahlen 0–100", desc: "Les nombres cardinaux de zéro à cent — écriture, prononciation et calcul simple", xp: 60, duration: "20 min", icon: "🔢", lessonId: "a1-l2" },
          { title: "Personen und Hobbys", desc: "Décrire des personnes et parler de ses loisirs favoris : sport, musique, lecture", xp: 65, duration: "20 min", icon: "🎭", lessonId: "a1-l3" },
        ],
      },
      {
        teil: "B",
        label: "Wissenswertes",
        labelFr: "Culture & Civilisation",
        topics: [
          { title: "Grußformeln in Deutschland, Österreich und der Schweiz", desc: "Formules de salutation régionales — Hallo/Guten Tag/Grüezi — formelles vs. informelles", xp: 35, duration: "10 min", icon: "🤝", lessonId: "a1-k1-gruss" },
        ],
      },
      {
        teil: "C",
        label: "Grammatik",
        labelFr: "Grammaire",
        topics: [
          { title: "Personalpronomen & Verben im Präsens", desc: "ich, du, er/sie/es, wir, ihr, sie — conjugaison des verbes réguliers sein, heißen, kommen, wohnen", xp: 70, duration: "25 min", icon: "⚙️", lessonId: "a1-g2" },
          { title: "Satzbau (SVK)", desc: "La structure de la phrase allemande : Sujet — Verbe en 2e position — Complément", xp: 50, duration: "15 min", icon: "📐", lessonId: "a1-k1-svk" },
          { title: "Die Nomengruppe: Artikel & Genus", desc: "Les articles définis (der/die/das) et indéfinis (ein/eine) — apprendre le genre des noms", xp: 60, duration: "20 min", icon: "🏷️", lessonId: "a1-g1" },
        ],
      },
      {
        teil: "D",
        label: "Rückblick",
        labelFr: "Révision & Test",
        topics: [
          { title: "Révision du chapitre", desc: "Révision complète du vocabulaire et des structures communicatives du Kapitel 1", xp: 30, duration: "20 min", icon: "📖", lessonId: "a1-k1-rev" },
          { title: "Exercices de consolidation", desc: "Exercices variés : lacunes, reformulation, correspondances et traduction", xp: 40, duration: "25 min", icon: "✏️", lessonId: "a1-k1-ex" },
          { title: "Mini-test", desc: "Évaluation formative — 10 questions couvrant tout le vocabulaire et la grammaire du Kapitel 1", xp: 60, duration: "15 min", icon: "🎯", lessonId: "a1-k1-test" },
        ],
      },
    ],
    lessons: ["a1-l1", "a1-l2", "a1-l3", "a1-g2", "a1-g1", "a1-k1-abc", "a1-k1-laender", "a1-k1-gruss", "a1-k1-svk", "a1-k1-rev", "a1-k1-ex", "a1-k1-test"],
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
        topics: [
          { title: "Rund um die Arbeit: im Büro", desc: "Vocabulaire du bureau — objets, meubles, activités et interactions entre collègues", xp: 55, duration: "18 min", icon: "💼", lessonId: "a1-k2-buero" },
          { title: "Rund um die Arbeit: an der Universität", desc: "La vie universitaire — les cours, l'amphi, la cafétéria et les camarades d'études", xp: 50, duration: "15 min", icon: "🎓", lessonId: "a1-k2-uni" },
          { title: "Freizeit", desc: "Activités de loisirs : sport, musique, cinéma, lecture et sorties entre amis", xp: 45, duration: "15 min", icon: "⚽", lessonId: "a1-k2-freizeit" },
        ],
      },
      {
        teil: "B",
        label: "Wissenswertes",
        labelFr: "Culture & Civilisation",
        topics: [
          { title: "Arbeits- und Studienkultur in Deutschland", desc: "La culture professionnelle et universitaire allemande — horaires, valeurs, Feierabend et ambiance", xp: 35, duration: "10 min", icon: "🏢", lessonId: "a1-k2-kultur" },
        ],
      },
      {
        teil: "C",
        label: "Grammatik",
        labelFr: "Grammaire",
        topics: [
          { title: "Die Nomengruppe (Akkusativ)", desc: "L'accusatif : articles définis den/die/das/die et indéfinis einen/eine/ein — COD de la phrase", xp: 60, duration: "20 min", icon: "📐", lessonId: "a1-k2-akkusativ" },
          { title: "Verben: haben, arbeiten, spielen", desc: "Conjugaison de haben et des verbes réguliers en -en au présent indicatif (ich habe, du hast…)", xp: 50, duration: "15 min", icon: "⚙️", lessonId: "a1-k2-verben" },
          { title: "Die Negation: nicht / kein", desc: "Nier avec nicht (verbes, adverbes, adjectifs) et kein/keine/kein (noms indéfinis)", xp: 55, duration: "18 min", icon: "🚫", lessonId: "a1-k2-negation" },
          { title: "Lokale Präpositionen", desc: "in, an, auf, neben, vor, hinter, zwischen, über, unter — localiser un objet dans l'espace", xp: 50, duration: "15 min", icon: "📍", lessonId: "a1-k2-praepositionen" },
          { title: "Fragen: W-Fragen & Ja/Nein-Fragen", desc: "Wer? Was? Wo? Wann? Wie? Warum? — formuler des questions directes et inverser le sujet/verbe", xp: 45, duration: "15 min", icon: "❓", lessonId: "a1-k2-fragen" },
        ],
      },
      {
        teil: "D",
        label: "Rückblick",
        labelFr: "Révision & Test",
        topics: [
          { title: "Révision du chapitre", desc: "Synthèse du vocabulaire professionnel, universitaire et des activités de loisirs", xp: 30, duration: "20 min", icon: "📖", lessonId: "a1-k2-rev" },
          { title: "Exercices de consolidation", desc: "Exercices : compléter les lacunes, transformer les phrases, relier, traduire", xp: 40, duration: "25 min", icon: "✏️", lessonId: "a1-k2-ex" },
          { title: "Mini-test", desc: "Évaluation formative — 12 questions sur l'accusatif, la négation et les questions", xp: 65, duration: "15 min", icon: "🎯", lessonId: "a1-k2-test" },
        ],
      },
    ],
    lessons: ["a1-k2-buero","a1-k2-uni","a1-k2-freizeit","a1-k2-kultur","a1-k2-akkusativ","a1-k2-verben","a1-k2-negation","a1-k2-praepositionen","a1-k2-fragen","a1-k2-rev","a1-k2-ex","a1-k2-test"],
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
        topics: [
          { title: "Im Hotel", desc: "Réserver et s'enregistrer à l'hôtel — chambre simple/double, prix, services et réclamations", xp: 55, duration: "18 min", icon: "🏨", lessonId: "a1-k3-hotel" },
          { title: "Der Stadtplan", desc: "Lire un plan de ville, demander son chemin : geradeaus, links, rechts, die erste Straße…", xp: 50, duration: "15 min", icon: "🗺️", lessonId: "a1-k3-stadtplan" },
          { title: "In München", desc: "Les monuments et quartiers de Munich : Marienplatz, Englischer Garten, Hofbräuhaus, Allianz Arena", xp: 45, duration: "15 min", icon: "🏙️", lessonId: "a1-k3-muenchen" },
        ],
      },
      {
        teil: "B",
        label: "Wissenswertes",
        labelFr: "Culture & Civilisation",
        topics: [
          { title: "München — Sehenswürdigkeiten und Stadtgeschichte", desc: "Découverte culturelle de Munich : histoire, architecture bavaroise, Oktoberfest et gastronomie", xp: 35, duration: "10 min", icon: "🏛️", lessonId: "a1-k3-kultur" },
        ],
      },
      {
        teil: "C",
        label: "Grammatik",
        labelFr: "Grammaire",
        topics: [
          { title: "Die Nomengruppe: Nominativ, Akkusativ, Dativ", desc: "Tableau complet des trois cas — articles définis/indéfinis selon le rôle du nom dans la phrase", xp: 70, duration: "25 min", icon: "📐", lessonId: "a1-k3-kasus" },
          { title: "Verben: fahren, nehmen, gehen", desc: "Verbes de déplacement irréguliers — conjugaison et constructions : mit dem Zug fahren, zu Fuß gehen", xp: 55, duration: "18 min", icon: "⚙️", lessonId: "a1-k3-verben" },
          { title: "Präpositionen: in, an, auf, zu, mit", desc: "Prépositions de lieu et de direction — avec Dativ (statique) ou Akkusativ (mouvement vers)", xp: 60, duration: "20 min", icon: "📍", lessonId: "a1-k3-praepositionen" },
        ],
      },
      {
        teil: "D",
        label: "Rückblick",
        labelFr: "Révision & Test",
        topics: [
          { title: "Révision du chapitre", desc: "Révision des trois cas, des prépositions de lieu et du vocabulaire de la ville et de l'hôtel", xp: 30, duration: "20 min", icon: "📖", lessonId: "a1-k3-rev" },
          { title: "Exercices de consolidation", desc: "Exercices pratiques — jeux de rôle réservation d'hôtel, itinéraires et descriptions de ville", xp: 40, duration: "25 min", icon: "✏️", lessonId: "a1-k3-ex" },
          { title: "Mini-test", desc: "Évaluation formative — 12 questions sur les cas, les prépositions et Munich", xp: 65, duration: "15 min", icon: "🎯", lessonId: "a1-k3-test" },
        ],
      },
    ],
    lessons: ["a1-k3-hotel","a1-k3-stadtplan","a1-k3-muenchen","a1-k3-kultur","a1-k3-kasus","a1-k3-verben","a1-k3-praepositionen","a1-k3-rev","a1-k3-ex","a1-k3-test"],
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
        topics: [
          { title: "Frühstück im Hotel", desc: "Commander le petit-déjeuner à l'hôtel — pain, confiture, œufs, café ou thé", xp: 55, duration: "18 min", icon: "🥐", lessonId: "k4-a1" },
          { title: "Geschirr und Besteck", desc: "Nommer la vaisselle et les couverts : Teller, Gabel, Messer, Löffel, Tasse…", xp: 45, duration: "15 min", icon: "🍴", lessonId: "k4-a2" },
          { title: "Essen und Trinken", desc: "Vocabulaire des aliments et boissons : Brot, Käse, Wurst, Wasser, Bier, Wein…", xp: 60, duration: "20 min", icon: "🥗", lessonId: "k4-a3" },
          { title: "Im Restaurant", desc: "Commander, demander la carte et payer at restaurant : Ich hätte gern… / Die Rechnung bitte!", xp: 65, duration: "20 min", icon: "🍷", lessonId: "k4-a4" },
        ],
      },
      {
        teil: "B",
        label: "Wissenswertes",
        labelFr: "Culture & Civilisation",
        topics: [
          { title: "Essen in Deutschland — Küche und Essgewohnheiten", desc: "La cuisine allemande traditionnelle — Brot, Wurst, Käse — et les habitudes alimentaires", xp: 35, duration: "10 min", icon: "🥨", lessonId: "k4-b1" },
        ],
      },
      {
        teil: "C",
        label: "Grammatik",
        labelFr: "Grammaire",
        topics: [
          { title: "Die Nomengruppe (Akkusativ mit Artikeln)", desc: "L'accusatif avec tous les articles — tableaux complets et exercices de mise en pratique", xp: 65, duration: "22 min", icon: "📐", lessonId: "k4-c1" },
          { title: "Verben: essen, trinken, mögen, nehmen", desc: "Conjugaison des verbes irréguliers du repas — changement de voyelle au présent (isst, trinkt, mag…)", xp: 55, duration: "18 min", icon: "⚙️", lessonId: "k4-c2" },
          { title: "Personalpronomen im Akkusativ", desc: "Les pronoms personnels COD : mich, dich, ihn/sie/es, uns, euch, sie — substituer un nom", xp: 60, duration: "20 min", icon: "🔄", lessonId: "k4-c3" },
        ],
      },
      {
        teil: "D",
        label: "Rückblick",
        labelFr: "Révision & Test",
        topics: [
          { title: "Révision du chapitre", desc: "Révision du vocabulaire alimentaire, de l'accusatif et des verbes irréguliers", xp: 30, duration: "20 min", icon: "📖", lessonId: "k4-d1" },
          { title: "Exercices de consolidation", desc: "Jeux de rôle : commander au restaurant, décrire un menu, exprimer ses préférences", xp: 40, duration: "25 min", icon: "✏️", lessonId: null },
          { title: "Mini-test", desc: "Évaluation formative — 12 questions sur l'alimentation, les verbes et les pronoms", xp: 65, duration: "15 min", icon: "🎯", lessonId: null },
        ],
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
        topics: [
          { title: "Tagesablauf", desc: "La routine quotidienne — aufstehen, frühstücken, arbeiten, schlafen — horaires et activités", xp: 55, duration: "18 min", icon: "⏰", lessonId: "a1-l6" },
          { title: "Stress im Büro", desc: "Exprimer le stress professionnel — problèmes, plaintes et solutions au quotidien", xp: 50, duration: "15 min", icon: "😤", lessonId: null },
          { title: "Am Computer", desc: "Vocabulaire informatique et numérique — tippen, speichern, hochladen, mailen…", xp: 45, duration: "15 min", icon: "💻", lessonId: null },
          { title: "Einen Termin vereinbaren", desc: "Prendre, donner et confirmer un rendez-vous par téléphone ou email — formules utiles", xp: 55, duration: "18 min", icon: "📅", lessonId: null },
        ],
      },
      {
        teil: "B",
        label: "Wissenswertes",
        labelFr: "Culture & Civilisation",
        topics: [
          { title: "Arbeit und Freizeit in Deutschland — Work-Life-Balance", desc: "Le temps de travail et de loisirs en Allemagne — Feierabend, Urlaub et comparaisons européennes", xp: 35, duration: "10 min", icon: "⚖️", lessonId: null },
        ],
      },
      {
        teil: "C",
        label: "Grammatik",
        labelFr: "Grammaire",
        topics: [
          { title: "Verben: trennbare Verben (aufstehen, anfangen…)", desc: "Les verbes à particule séparable — la particule se place en fin de phrase : Ich stehe um 7 auf", xp: 65, duration: "22 min", icon: "⚙️", lessonId: null },
          { title: "Temporale Präpositionen (um, am, im, von…bis)", desc: "um + heure, am + jour, im + mois/saison, von…bis, seit, vor, nach — exprimer le temps", xp: 55, duration: "18 min", icon: "🕐", lessonId: null },
        ],
      },
      {
        teil: "D",
        label: "Rückblick",
        labelFr: "Révision & Test",
        topics: [
          { title: "Révision du chapitre", desc: "Révision de la routine, des verbes séparables et des prépositions temporelles", xp: 30, duration: "20 min", icon: "📖", lessonId: null },
          { title: "Exercices de consolidation", desc: "Décrire sa journée type, rédiger un agenda, simuler une prise de rendez-vous", xp: 40, duration: "25 min", icon: "✏️", lessonId: null },
          { title: "Mini-test", desc: "Évaluation formative — 12 questions sur le quotidien, les verbes séparables et l'heure", xp: 65, duration: "15 min", icon: "🎯", lessonId: null },
        ],
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
        topics: [
          { title: "Die Jahreszeiten und das Wetter", desc: "Les quatre saisons et expressions météo — Es regnet, Es schneit, Es ist sonnig, heiß, kalt…", xp: 50, duration: "15 min", icon: "🌤️", lessonId: null },
          { title: "Reiseziele", desc: "Décrire des destinations en Europe et dans le monde — attraits touristiques et comparaisons", xp: 55, duration: "18 min", icon: "🗺️", lessonId: null },
          { title: "Reisevorbereitungen", desc: "Préparer un voyage — la valise, les documents, le billet, la réservation d'hôtel", xp: 50, duration: "15 min", icon: "🧳", lessonId: null },
          { title: "Verkehrsmittel", desc: "Les transports — Zug, Bus, Auto, Flugzeug, Fahrrad — avantages, prix et billets", xp: 45, duration: "15 min", icon: "🚂", lessonId: null },
        ],
      },
      {
        teil: "B",
        label: "Wissenswertes",
        labelFr: "Culture & Civilisation",
        topics: [
          { title: "Reisegewohnheiten der Deutschen — beliebteste Urlaubsziele", desc: "Les Allemands en vacances — destinations favorites, durée des séjours et budget typique", xp: 35, duration: "10 min", icon: "🏖️", lessonId: null },
        ],
      },
      {
        teil: "C",
        label: "Grammatik",
        labelFr: "Grammaire",
        topics: [
          { title: "Satzverbindungen: Konjunktionen (und, aber, oder, denn, weil)", desc: "Relier des propositions : coordonnantes (und/aber/oder/denn) et subordonnantes (weil → verbe en fin)", xp: 60, duration: "20 min", icon: "🔗", lessonId: null },
          { title: "Verben: Modalverben Einführung (wollen, möchten, können)", desc: "wollen (vouloir), möchten (souhaiter poliment), können (pouvoir/savoir) — structure avec infinitif", xp: 70, duration: "25 min", icon: "⚙️", lessonId: null },
          { title: "Die Nomengruppe: Dativ nach mit/nach/von/zu", desc: "Le datif avec les prépositions mit, nach, von, zu, bei, seit, ab — tableaux et exercices", xp: 60, duration: "20 min", icon: "📐", lessonId: null },
        ],
      },
      {
        teil: "D",
        label: "Rückblick",
        labelFr: "Révision & Test",
        topics: [
          { title: "Révision du chapitre", desc: "Révision de la météo, des destinations, des transports et des verbes modaux", xp: 30, duration: "20 min", icon: "📖", lessonId: null },
          { title: "Exercices de consolidation", desc: "Planifier un voyage en groupe, décrire une destination, rédiger un itinéraire", xp: 40, duration: "25 min", icon: "✏️", lessonId: null },
          { title: "Mini-test", desc: "Évaluation formative — 14 questions sur les voyages, les conjonctions et les modaux", xp: 70, duration: "15 min", icon: "🎯", lessonId: null },
        ],
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
        topics: [
          { title: "Eine Wohnung in der Stadt", desc: "Décrire un appartement — superficie, pièces, loyer, situation et annonce immobilière", xp: 55, duration: "18 min", icon: "🏠", lessonId: null },
          { title: "Die Wohnungseinrichtung", desc: "Les meubles et l'électroménager — Sofa, Schrank, Bett, Herd, Kühlschrank, Waschmaschine…", xp: 50, duration: "15 min", icon: "🛋️", lessonId: null },
          { title: "Die Hausordnung", desc: "Le règlement de co-propriété — règles de vie commune, horaires de bruit, tri des déchets", xp: 45, duration: "15 min", icon: "📋", lessonId: null },
        ],
      },
      {
        teil: "B",
        label: "Wissenswertes",
        labelFr: "Culture & Civilisation",
        topics: [
          { title: "Wohnen in Deutschland — Mieten, Kaufen und Nachbarschaft", desc: "Location vs. propriété en Allemagne — arrondissements, Nebenkosten et vie de quartier", xp: 35, duration: "10 min", icon: "🏘️", lessonId: null },
        ],
      },
      {
        teil: "C",
        label: "Grammatik",
        labelFr: "Grammaire",
        topics: [
          { title: "Lokalangaben: Wo? (Dativ) vs. Wohin? (Akkusativ)", desc: "Wo? (état statique → Dativ) vs. Wohin? (direction/mouvement → Akkusativ) — prépositions locales", xp: 70, duration: "25 min", icon: "📐", lessonId: null },
          { title: "Verben: liegen/stehen/hängen vs. legen/stellen/hängen", desc: "Verbes de position (état) vs. verbes de placement (action) — où est-il? où le met-on?", xp: 60, duration: "20 min", icon: "⚙️", lessonId: null },
          { title: "Adjektive (attributiv und prädikativ)", desc: "Les adjectifs : prédicatifs (sans accord : Das Sofa ist bequem) vs. attributifs (accord : ein bequemes Sofa)", xp: 55, duration: "18 min", icon: "🎨", lessonId: null },
          { title: "Nomen: Komposita (Wohnzimmer, Schlafzimmer…)", desc: "Formation des mots composés allemands — le dernier mot donne le genre : das Wohnzimmer (das Zimmer)", xp: 50, duration: "15 min", icon: "🔧", lessonId: null },
        ],
      },
      {
        teil: "D",
        label: "Rückblick",
        labelFr: "Révision & Test",
        topics: [
          { title: "Révision du chapitre", desc: "Révision du vocabulaire du logement, des prépositions locales et des adjectifs", xp: 30, duration: "20 min", icon: "📖", lessonId: null },
          { title: "Exercices de consolidation", desc: "Décrire son appartement idéal, commenter un plan de logement, rédiger une annonce", xp: 40, duration: "25 min", icon: "✏️", lessonId: null },
          { title: "Mini-test", desc: "Évaluation formative — 14 questions sur le logement, les cas et les adjectifs", xp: 70, duration: "15 min", icon: "🎯", lessonId: null },
        ],
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
        topics: [
          { title: "Gute Wünsche und schöne Geschenke", desc: "Formuler des vœux — Herzlichen Glückwunsch! Alles Gute! — offrir et réagir à un cadeau", xp: 50, duration: "15 min", icon: "🎁", lessonId: null },
          { title: "Die Gesundheit", desc: "Vocabulaire de la santé — les parties du corps, les symptômes courants et chez le médecin", xp: 55, duration: "18 min", icon: "🏥", lessonId: null },
          { title: "Entschuldigungen", desc: "Présenter ses excuses et expliquer une absence — Entschuldigung, es tut mir leid, leider…", xp: 45, duration: "15 min", icon: "🙏", lessonId: null },
          { title: "Was ist noch alles passiert?", desc: "Raconter des événements passés avec le Perfekt — ce qui s'est passé hier, la semaine dernière", xp: 60, duration: "20 min", icon: "📰", lessonId: null },
        ],
      },
      {
        teil: "B",
        label: "Wissenswertes",
        labelFr: "Culture & Civilisation",
        topics: [
          { title: "Feste und Bräuche in Deutschland — Geburtstag, Weihnachten, Karneval", desc: "Les fêtes allemandes — traditions d'anniversaire, Weihnachtsmarkt, Karneval à Cologne et Bavière", xp: 40, duration: "12 min", icon: "🎊", lessonId: null },
        ],
      },
      {
        teil: "C",
        label: "Grammatik",
        labelFr: "Grammaire",
        topics: [
          { title: "Verben: Perfekt mit haben (gemacht, gespielt…)", desc: "Le Perfekt — haben/sein + Partizip II — participes réguliers (ge-…-t), irréguliers (ge-…-en) et préfixés", xp: 75, duration: "28 min", icon: "⚙️", lessonId: null },
          { title: "Modalverben: müssen, dürfen, sollen", desc: "müssen (devoir — obligation), dürfen (avoir le droit — permission), sollen (être censé — instruction)", xp: 65, duration: "22 min", icon: "🔧", lessonId: null },
        ],
      },
      {
        teil: "D",
        label: "Rückblick",
        labelFr: "Révision & Test",
        topics: [
          { title: "Révision finale A1", desc: "Bilan complet du niveau A1 — vocabulaire, grammaire, communication et culture germanophone", xp: 50, duration: "30 min", icon: "📖", lessonId: null },
          { title: "Exercices de bilan", desc: "Exercices variés couvrant tous les 8 Kapitel — compréhension, expression écrite et orale", xp: 60, duration: "35 min", icon: "✏️", lessonId: null },
          { title: "Test final A1", desc: "Évaluation finale du niveau A1 — compréhension écrite/orale, production et grammaire", xp: 100, duration: "30 min", icon: "🏆", lessonId: null },
        ],
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
