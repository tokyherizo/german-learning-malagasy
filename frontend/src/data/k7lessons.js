// KAPITEL 7 — Wohnen

export const k7Lessons = [
  {
    id: "a1-k7-wohnung",
    level: "A1",
    number: "K7·A1",
    title: "Eine Wohnung in der Stadt",
    subtitle: "Decrire un appartement: pieces, loyer, surface et quartier",
    icon: "🏠",
    duration: "18 min",
    xp: 55,
    color: "#a78bfa",
    kapitel: 7,
    sections: [
      {
        type: "intro",
        title: "Wohnungssuche in der Stadt",
        content:
          "In German-speaking cities, apartment ads use very practical vocabulary: room count, square meters, rent, neighborhood, and transport access.",
        contentDe:
          "In deutschsprachigen Staedten gibt es in Wohnungsanzeigen typisches Vokabular: Zimmerzahl, Quadratmeter, Miete, Lage und Verkehrsanbindung.",
      },
      {
        type: "vocabulary",
        title: "Grundwortschatz Wohnung",
        words: [
          { german: "die Wohnung", english: "apartment", example: "Ich suche eine kleine Wohnung." },
          { german: "das Zimmer", english: "room", example: "Die Wohnung hat drei Zimmer." },
          { german: "die Kueche", english: "kitchen", example: "Die Kueche ist modern und hell." },
          { german: "das Badezimmer", english: "bathroom", example: "Das Badezimmer ist neu renoviert." },
          { german: "das Schlafzimmer", english: "bedroom", example: "Das Schlafzimmer ist ruhig." },
          { german: "das Wohnzimmer", english: "living room", example: "Im Wohnzimmer steht ein grosses Sofa." },
          { german: "der Balkon", english: "balcony", example: "Die Wohnung hat einen kleinen Balkon." },
        ],
      },
      {
        type: "vocabulary",
        title: "Anzeige und Lage",
        words: [
          { german: "die Miete", english: "rent", example: "Die Miete betraegt 850 Euro kalt." },
          { german: "warm / kalt", english: "warm rent / cold rent", example: "Warmmiete ist hoeher als Kaltmiete." },
          { german: "die Nebenkosten", english: "additional costs", example: "Nebenkosten sind 180 Euro pro Monat." },
          { german: "die Wohnflaeche", english: "living area", example: "Die Wohnflaeche ist 62 Quadratmeter." },
          { german: "zentral", english: "central", example: "Die Lage ist zentral, nahe der U-Bahn." },
          { german: "ruhig", english: "quiet", example: "Die Strasse ist ruhig, ohne viel Verkehr." },
        ],
      },
      {
        type: "dialogue",
        title: "Beim Besichtigungstermin",
        lines: [
          { speaker: "Maklerin", text: "Willkommen. Die Wohnung hat 62 Quadratmeter und drei Zimmer.", translation: "Welcome. The apartment has 62 square meters and three rooms." },
          { speaker: "Leonie", text: "Wie hoch ist die Warmmiete?", translation: "How high is the warm rent?" },
          { speaker: "Maklerin", text: "Die Warmmiete liegt bei 1030 Euro inklusive Nebenkosten.", translation: "The warm rent is 1030 euros including additional costs." },
          { speaker: "Leonie", text: "Ist die Wohnung gut angebunden?", translation: "Is the apartment well connected?" },
          { speaker: "Maklerin", text: "Ja, die U-Bahn ist nur 4 Minuten zu Fuss entfernt.", translation: "Yes, the subway is only 4 minutes away on foot." },
        ],
      },
      {
        type: "tip",
        text:
          "In apartment ads, note this pair: 'kalt' means rent without utilities, 'warm' includes utilities. This distinction is essential in Germany.",
        textDe:
          "In Wohnungsanzeigen ist der Unterschied wichtig: Kaltmiete ohne Nebenkosten, Warmmiete mit Nebenkosten.",
      },
    ],
  },

  {
    id: "a1-k7-einrichtung",
    level: "A1",
    number: "K7·A2",
    title: "Die Wohnungseinrichtung",
    subtitle: "Meubles et electromenager du quotidien",
    icon: "🛋️",
    duration: "15 min",
    xp: 50,
    color: "#a78bfa",
    kapitel: 7,
    sections: [
      {
        type: "intro",
        title: "Moebel und Geraete",
        content:
          "To describe your home naturally, you need furniture vocabulary, appliance names, and basic placement phrases.",
        contentDe:
          "Um deine Wohnung natuerlich zu beschreiben, brauchst du Moebelwortschatz, Geraetenamen und einfache Ortsangaben.",
      },
      {
        type: "vocabulary",
        title: "Moebel",
        words: [
          { german: "das Sofa", english: "sofa", example: "Das Sofa ist bequem und grau." },
          { german: "der Schrank", english: "wardrobe/cabinet", example: "Der Schrank steht im Schlafzimmer." },
          { german: "das Bett", english: "bed", example: "Das Bett ist 1,80 Meter breit." },
          { german: "der Tisch", english: "table", example: "Der Tisch steht in der Kueche." },
          { german: "der Stuhl", english: "chair", example: "Wir haben vier Stuehle im Esszimmer." },
          { german: "das Regal", english: "shelf", example: "Im Regal liegen viele Buecher." },
        ],
      },
      {
        type: "vocabulary",
        title: "Elektrogeraete",
        words: [
          { german: "der Herd", english: "stove", example: "Der Herd ist neu und energiesparend." },
          { german: "der Kuehlschrank", english: "fridge", example: "Im Kuehlschrank ist noch Platz." },
          { german: "die Waschmaschine", english: "washing machine", example: "Die Waschmaschine steht im Bad." },
          { german: "die Spuelmaschine", english: "dishwasher", example: "Wir haben eine kleine Spuelmaschine." },
          { german: "der Fernseher", english: "TV", example: "Der Fernseher haengt an der Wand." },
          { german: "die Lampe", english: "lamp", example: "Die Lampe ueber dem Tisch ist sehr hell." },
        ],
      },
      {
        type: "grammar",
        title: "Wohnung beschreiben",
        items: [
          { pronoun: "Es gibt ...", verb: "Im Wohnzimmer gibt es ein Sofa und einen Tisch.", meaning: "Use 'es gibt' for existence." },
          { pronoun: "stehen / liegen / haengen", verb: "Der Tisch steht dort. Das Buch liegt auf dem Tisch. Das Bild haengt an der Wand.", meaning: "Position verbs for objects." },
          { pronoun: "sehr + Adjektiv", verb: "Die Kueche ist sehr praktisch.", meaning: "Simple adjective intensification." },
        ],
      },
      {
        type: "tip",
        text:
          "When in doubt, start with: 'Im [Zimmer] gibt es ...'. This sentence pattern is safe and natural at A1 level.",
        textDe:
          "Wenn du unsicher bist, beginne mit: 'Im [Zimmer] gibt es ...'. Das ist auf A1 sehr sicher.",
      },
    ],
  },

  {
    id: "a1-k7-hausordnung",
    level: "A1",
    number: "K7·A3",
    title: "Die Hausordnung",
    subtitle: "Regles de vie commune dans l immeuble",
    icon: "📋",
    duration: "15 min",
    xp: 45,
    color: "#a78bfa",
    kapitel: 7,
    sections: [
      {
        type: "intro",
        title: "Zusammen wohnen",
        content:
          "In many buildings in Germany, tenants follow a Hausordnung: quiet hours, cleaning rules, trash sorting, and shared-space behavior.",
        contentDe:
          "In vielen Haeusern gilt eine Hausordnung: Ruhezeiten, Putzregeln, Muelltrennung und Verhalten in Gemeinschaftsflaechen.",
      },
      {
        type: "vocabulary",
        title: "Hausordnung Vokabular",
        words: [
          { german: "die Hausordnung", english: "building rules", example: "Bitte lesen Sie die Hausordnung genau." },
          { german: "die Ruhezeit", english: "quiet hours", example: "Ab 22 Uhr gilt die Ruhezeit." },
          { german: "der Laerm", english: "noise", example: "Musik nach 22 Uhr verursacht Laerm." },
          { german: "der Muell", english: "waste/trash", example: "Der Muell muss getrennt werden." },
          { german: "die Muelltrennung", english: "waste sorting", example: "In Deutschland ist Muelltrennung wichtig." },
          { german: "das Treppenhaus", english: "stairwell", example: "Das Treppenhaus muss sauber bleiben." },
        ],
      },
      {
        type: "grammar",
        title: "Regeln formulieren",
        items: [
          { pronoun: "man darf (nicht)", verb: "Man darf im Treppenhaus nicht rauchen.", meaning: "Permission/prohibition." },
          { pronoun: "man muss", verb: "Man muss den Muell richtig trennen.", meaning: "Obligation." },
          { pronoun: "Bitte + Infinitiv", verb: "Bitte die Tuere schliessen.", meaning: "Polite imperative form in signs." },
          { pronoun: "Kein + Nomen", verb: "Kein Laerm nach 22 Uhr.", meaning: "Notice/house-rule style." },
        ],
      },
      {
        type: "dialogue",
        title: "Nachbarschaftsgespräch",
        lines: [
          { speaker: "Herr Klein", text: "Entschuldigung, gestern Abend war es sehr laut.", translation: "Excuse me, yesterday evening it was very loud." },
          { speaker: "Mara", text: "Oh, das tut mir leid. Wir hatten Besuch.", translation: "Oh, I am sorry. We had visitors." },
          { speaker: "Herr Klein", text: "Ab 22 Uhr ist Ruhezeit laut Hausordnung.", translation: "From 22:00 quiet hours apply according to building rules." },
          { speaker: "Mara", text: "Verstanden, wir achten naechstes Mal darauf.", translation: "Understood, we will pay attention next time." },
        ],
      },
      {
        type: "tip",
        text:
          "Polite conflict formula in German housing: apology + understanding + future action. Example: 'Es tut mir leid. Ich verstehe. Das passiert nicht wieder.'",
        textDe:
          "Hoefliche Konfliktformel: Entschuldigung + Verstaendnis + Loesung. Beispiel: 'Es tut mir leid. Ich verstehe. Das passiert nicht wieder.'",
      },
    ],
  },

  {
    id: "a1-k7-kultur",
    level: "A1",
    number: "K7·B",
    title: "Wohnen in Deutschland",
    subtitle: "Mieten, Kaufen und Nachbarschaft",
    icon: "🏘️",
    duration: "10 min",
    xp: 35,
    color: "#a78bfa",
    kapitel: 7,
    sections: [
      {
        type: "intro",
        title: "Wohnkultur",
        content:
          "Germany has a strong rental culture. Many people rent long-term, and contracts can be very detailed about costs and responsibilities.",
        contentDe:
          "Deutschland hat eine starke Mietkultur. Viele Menschen wohnen langfristig zur Miete, und Vertraege enthalten genaue Regeln zu Kosten und Pflichten.",
      },
      {
        type: "vocabulary",
        title: "Kultur und Finanzen",
        words: [
          { german: "mieten", english: "to rent", example: "Viele junge Leute mieten zuerst eine Wohnung." },
          { german: "kaufen", english: "to buy", example: "Manche Familien kaufen spaeter ein Haus." },
          { german: "die Kaution", english: "deposit", example: "Die Kaution betraegt oft drei Monatsmieten." },
          { german: "der Mietvertrag", english: "rental contract", example: "Bitte lesen Sie den Mietvertrag genau." },
          { german: "die Nachbarschaft", english: "neighborhood", example: "Eine gute Nachbarschaft ist sehr wichtig." },
          { german: "die Nebenkosten", english: "utilities/additional costs", example: "Nebenkosten koennen stark variieren." },
        ],
      },
      {
        type: "tip",
        text:
          "In Germany, warm rent ('Warmmiete') and additional costs ('Nebenkosten') are key when comparing apartments. Price alone is often not enough.",
        textDe:
          "In Deutschland sind Warmmiete und Nebenkosten entscheidend beim Wohnungsvergleich. Der Grundpreis allein reicht selten.",
      },
    ],
  },

  {
    id: "a1-k7-wohin",
    level: "A1",
    number: "K7·C1",
    title: "Lokalangaben: Wo? vs. Wohin?",
    subtitle: "Wo = Dativ, Wohin = Akkusativ",
    icon: "📐",
    duration: "25 min",
    xp: 70,
    color: "#a78bfa",
    kapitel: 7,
    sections: [
      {
        type: "intro",
        title: "Ort oder Richtung",
        content:
          "German local prepositions often switch case by meaning: static location answers Wo? (dative), movement/direction answers Wohin? (accusative).",
        contentDe:
          "Viele lokale Praepositionen wechseln den Kasus nach Bedeutung: Wo? (Dativ, statisch) und Wohin? (Akkusativ, Richtung).",
      },
      {
        type: "grammar",
        title: "Wechselpraepositionen",
        items: [
          { pronoun: "in", verb: "Wo? im Zimmer. / Wohin? in das Zimmer (ins Zimmer).", meaning: "inside location vs movement into." },
          { pronoun: "auf", verb: "Wo? auf dem Tisch. / Wohin? auf den Tisch.", meaning: "on top location vs placement onto." },
          { pronoun: "an", verb: "Wo? an der Wand. / Wohin? an die Wand.", meaning: "at/near vertical surface." },
          { pronoun: "unter", verb: "Wo? unter dem Bett. / Wohin? unter das Bett.", meaning: "under position or direction." },
          { pronoun: "vor", verb: "Wo? vor der Tuere. / Wohin? vor die Tuere.", meaning: "in front of." },
          { pronoun: "zwischen", verb: "Wo? zwischen den Stuehlen. / Wohin? zwischen die Stuehle.", meaning: "between." },
        ],
      },
      {
        type: "dialogue",
        title: "Wo ist der Schluessel?",
        lines: [
          { speaker: "Paul", text: "Wo ist mein Schluessel?", translation: "Where is my key?" },
          { speaker: "Nora", text: "Er liegt auf dem Tisch.", translation: "It is lying on the table." },
          { speaker: "Paul", text: "Kannst du ihn bitte in die Tasche legen?", translation: "Can you put it into the bag, please?" },
          { speaker: "Nora", text: "Klar, ich lege ihn jetzt in die Tasche.", translation: "Sure, I am putting it in the bag now." },
        ],
      },
      {
        type: "tip",
        text:
          "Quick test: if the object moves from A to B, choose Akkusativ. If it stays in a place, choose Dativ.",
        textDe:
          "Schnelltest: Bei Bewegung von A nach B -> Akkusativ. Bei Ort ohne Bewegung -> Dativ.",
      },
    ],
  },

  {
    id: "a1-k7-position",
    level: "A1",
    number: "K7·C2",
    title: "liegen/stehen/haengen vs legen/stellen/haengen",
    subtitle: "Position (etat) vs placement (action)",
    icon: "⚙️",
    duration: "20 min",
    xp: 60,
    color: "#a78bfa",
    kapitel: 7,
    sections: [
      {
        type: "intro",
        title: "Objekte im Raum",
        content:
          "German distinguishes between state and action. 'liegen/stehen/haengen' describe where something is, while 'legen/stellen/haengen' describe putting it somewhere.",
        contentDe:
          "Deutsch unterscheidet Zustand und Handlung: 'liegen/stehen/haengen' beschreiben Position, 'legen/stellen/haengen' beschreiben das Platzieren.",
      },
      {
        type: "grammar",
        title: "Paare im Vergleich",
        items: [
          { pronoun: "liegen (state) / legen (action)", verb: "Das Buch liegt auf dem Tisch. / Ich lege das Buch auf den Tisch.", meaning: "flat object: be lying / put down." },
          { pronoun: "stehen (state) / stellen (action)", verb: "Die Vase steht am Fenster. / Ich stelle die Vase ans Fenster.", meaning: "vertical object: stand / set upright." },
          { pronoun: "haengen (state/action)", verb: "Das Bild haengt an der Wand. / Ich haenge das Bild an die Wand.", meaning: "same verb form, case shows state vs direction." },
        ],
      },
      {
        type: "vocabulary",
        title: "Typische Objekte",
        words: [
          { german: "das Buch", english: "book", example: "Das Buch liegt auf dem Sofa." },
          { german: "die Vase", english: "vase", example: "Die Vase steht auf dem Tisch." },
          { german: "das Bild", english: "picture", example: "Das Bild haengt ueber dem Bett." },
          { german: "die Jacke", english: "jacket", example: "Die Jacke haengt am Haken." },
        ],
      },
      {
        type: "tip",
        text:
          "Ask first: Is it already there (state) or am I placing it (action)? This question gives you the correct verb and case.",
        textDe:
          "Frage zuerst: Ist es schon dort (Zustand) oder platziere ich es (Handlung)? So findest du Verb und Kasus.",
      },
    ],
  },

  {
    id: "a1-k7-adjektive",
    level: "A1",
    number: "K7·C3",
    title: "Adjektive (attributiv und praedikativ)",
    subtitle: "Das Sofa ist bequem vs ein bequemes Sofa",
    icon: "🎨",
    duration: "18 min",
    xp: 55,
    color: "#a78bfa",
    kapitel: 7,
    sections: [
      {
        type: "intro",
        title: "Objekte beschreiben",
        content:
          "Adjectives work in two main ways: predicative (after sein, no ending) and attributive (before noun, with ending).",
        contentDe:
          "Adjektive funktionieren in zwei Hauptformen: praedikativ (nach sein, ohne Endung) und attributiv (vor Nomen, mit Endung).",
      },
      {
        type: "grammar",
        title: "Praedikativ vs attributiv",
        items: [
          { pronoun: "praedikativ", verb: "Das Sofa ist bequem.", meaning: "No adjective ending after sein." },
          { pronoun: "attributiv", verb: "ein bequemes Sofa", meaning: "Adjective before noun takes ending." },
          { pronoun: "feminine example", verb: "eine grosse Kueche", meaning: "Basic A1 ending pattern with indefinite article." },
          { pronoun: "plural example", verb: "moderne Moebel", meaning: "Plural often appears without article ending complexity at A1." },
        ],
      },
      {
        type: "vocabulary",
        title: "Nutzliche Wohnungsadjektive",
        words: [
          { german: "hell", english: "bright", example: "Das Wohnzimmer ist hell." },
          { german: "dunkel", english: "dark", example: "Das Schlafzimmer ist etwas dunkel." },
          { german: "bequem", english: "comfortable", example: "Wir haben ein bequemes Sofa." },
          { german: "modern", english: "modern", example: "Die Kueche ist sehr modern." },
          { german: "alt", english: "old", example: "Der Schrank ist alt, aber stabil." },
          { german: "klein / gross", english: "small / big", example: "Das Bad ist klein, die Kueche ist gross." },
        ],
      },
      {
        type: "tip",
        text:
          "For clean A1 production, use this sequence: noun sentence first, adjective phrase second. Example: 'Das Sofa ist bequem. Es ist ein bequemes Sofa.'",
        textDe:
          "A1-Tipp: zuerst einfacher Satz, dann attributive Form. Beispiel: 'Das Sofa ist bequem. Es ist ein bequemes Sofa.'",
      },
    ],
  },

  {
    id: "a1-k7-komposita",
    level: "A1",
    number: "K7·C4",
    title: "Nomen: Komposita",
    subtitle: "Wohnzimmer, Schlafzimmer, Kuehlschrank...",
    icon: "🔧",
    duration: "15 min",
    xp: 50,
    color: "#a78bfa",
    kapitel: 7,
    sections: [
      {
        type: "intro",
        title: "Wortbildung im Deutschen",
        content:
          "German often creates new nouns by combining two or more words. In compounds, the final word determines grammatical gender.",
        contentDe:
          "Deutsch bildet oft neue Nomen durch Zusammensetzung. Bei Komposita bestimmt das letzte Wort den Artikel.",
      },
      {
        type: "grammar",
        title: "Regel der Komposita",
        items: [
          { pronoun: "Wohn + Zimmer", verb: "das Wohnzimmer", meaning: "last word 'Zimmer' -> neuter (das)." },
          { pronoun: "Schlaf + Zimmer", verb: "das Schlafzimmer", meaning: "last word 'Zimmer' -> das." },
          { pronoun: "Kuehl + Schrank", verb: "der Kuehlschrank", meaning: "last word 'Schrank' -> der." },
          { pronoun: "Wasch + Maschine", verb: "die Waschmaschine", meaning: "last word 'Maschine' -> die." },
          { pronoun: "Haus + Ordnung", verb: "die Hausordnung", meaning: "last word 'Ordnung' -> die." },
        ],
      },
      {
        type: "vocabulary",
        title: "Wichtige Wohn-Komposita",
        words: [
          { german: "das Esszimmer", english: "dining room", example: "Im Esszimmer steht ein grosser Tisch." },
          { german: "die Wohnungstuer", english: "apartment door", example: "Bitte die Wohnungstuer schliessen." },
          { german: "der Mietvertrag", english: "rental contract", example: "Der Mietvertrag ist auf zwei Jahre." },
          { german: "die Wohnungsanzeige", english: "apartment listing", example: "Ich lese jeden Tag Wohnungsanzeigen." },
          { german: "das Treppenhaus", english: "stairwell", example: "Im Treppenhaus ist Rauchen verboten." },
        ],
      },
      {
        type: "tip",
        text:
          "When you see a long noun, identify the final element first. It gives you article, plural pattern, and often the core meaning.",
        textDe:
          "Bei langen Nomen zuerst das letzte Element erkennen. Es gibt dir Artikel und Kernbedeutung.",
      },
    ],
  },

  {
    id: "a1-k7-rev",
    level: "A1",
    number: "K7·D1",
    title: "Revision du chapitre",
    subtitle: "Logement, prepositions locales, adjectifs",
    icon: "📖",
    duration: "20 min",
    xp: 30,
    color: "#8b5cf6",
    kapitel: 7,
    sections: [
      {
        type: "intro",
        title: "Kapitel 7 zusammenfassen",
        content:
          "You can now describe apartments, furniture, house rules, and neighborhood life, and use core grammar: Wo/Wohin, position verbs, adjectives, and compounds.",
        contentDe:
          "Du kannst jetzt Wohnungen, Einrichtung, Hausordnung und Nachbarschaft beschreiben sowie Wo/Wohin, Positionsverben, Adjektive und Komposita nutzen.",
      },
      {
        type: "grammar",
        title: "Schnellcheck",
        items: [
          { pronoun: "Wo?", verb: "Der Schluessel liegt auf dem Tisch.", meaning: "Location -> dative." },
          { pronoun: "Wohin?", verb: "Ich lege den Schluessel auf den Tisch.", meaning: "Direction -> accusative." },
          { pronoun: "Adjektiv", verb: "Die Wohnung ist hell. / eine helle Wohnung", meaning: "predicative vs attributive." },
          { pronoun: "Komposita", verb: "Wohn + Zimmer = Wohnzimmer", meaning: "last element gives article." },
        ],
      },
      {
        type: "story_text",
        title: "Lesetext: Unsere neue Wohnung",
        level: "A1",
        paragraphs: [
          {
            text: "Wir haben eine neue Wohnung in der Stadt gefunden. Sie hat zwei Schlafzimmer, ein Wohnzimmer und eine kleine Kueche.",
            translation: "We found a new apartment in the city. It has two bedrooms, a living room, and a small kitchen."
          },
          {
            text: "Die Lage ist zentral, aber die Strasse ist trotzdem ruhig. Die Warmmiete ist nicht billig, aber fair.",
            translation: "The location is central, but the street is still quiet. The warm rent is not cheap, but fair."
          },
          {
            text: "Im Wohnzimmer steht ein grosses Sofa und an der Wand haengt ein Bild. Den neuen Tisch stellen wir morgen ins Esszimmer.",
            translation: "In the living room there is a large sofa and a picture hangs on the wall. We will place the new table in the dining room tomorrow."
          },
          {
            text: "Laut Hausordnung darf man ab 22 Uhr keinen Laerm machen. Das ist fuer alle Nachbarn besser.",
            translation: "According to the house rules, one may not make noise after 22:00. That is better for all neighbors."
          }
        ],
        vocabulary: [
          { german: "trotzdem", english: "nevertheless", example: "Die Lage ist zentral, trotzdem ist es ruhig." },
          { german: "fair", english: "fair", example: "Die Miete ist hoch, aber fair." },
          { german: "laut", english: "according to", example: "Laut Vertrag ist Rauchen verboten." }
        ]
      },
      {
        type: "tip",
        text:
          "Before speaking, sketch a mini floor plan and describe room by room. This keeps your Wo/Wohin choices accurate.",
        textDe:
          "Vor dem Sprechen einen kleinen Wohnungsplan zeichnen und Zimmer fuer Zimmer beschreiben. So bleiben Wo/Wohin korrekt.",
      },
    ],
  },

  {
    id: "a1-k7-ex",
    level: "A1",
    number: "K7·D2",
    title: "Exercices de consolidation",
    subtitle: "Decrire un appartement ideal et rediger une annonce",
    icon: "✏️",
    duration: "25 min",
    xp: 40,
    color: "#8b5cf6",
    kapitel: 7,
    sections: [
      {
        type: "intro",
        title: "Uebungen Kapitel 7",
        content:
          "Practice speaking and writing about housing with targeted grammar drills and short production tasks.",
        contentDe:
          "Hier trainierst du Sprechen und Schreiben zum Thema Wohnen mit gezielten Grammatikuebungen.",
      },
      {
        type: "grammar",
        title: "Uebung 1: Wo oder Wohin?",
        items: [
          { pronoun: "Das Buch ist ...", verb: "-> auf dem Tisch", meaning: "Wo? -> dative." },
          { pronoun: "Ich lege das Buch ...", verb: "-> auf den Tisch", meaning: "Wohin? -> accusative." },
          { pronoun: "Die Jacke haengt ...", verb: "-> an der Tuere", meaning: "State -> dative." },
          { pronoun: "Ich haenge die Jacke ...", verb: "-> an die Tuere", meaning: "Movement -> accusative." },
        ],
      },
      {
        type: "grammar",
        title: "Uebung 2: Positionsverben",
        items: [
          { pronoun: "(liegen/legen)", verb: "Der Laptop ___ auf dem Schreibtisch. -> liegt", meaning: "state" },
          { pronoun: "(liegen/legen)", verb: "Ich ___ den Laptop auf den Schreibtisch. -> lege", meaning: "action" },
          { pronoun: "(stehen/stellen)", verb: "Die Lampe ___ am Fenster. -> steht", meaning: "state" },
          { pronoun: "(stehen/stellen)", verb: "Wir ___ die Lampe ans Fenster. -> stellen", meaning: "action" },
        ],
      },
      {
        type: "grammar",
        title: "Uebung 3: Adjektive",
        items: [
          { pronoun: "Das Sofa ist bequem.", verb: "-> ein bequemes Sofa", meaning: "predicative to attributive." },
          { pronoun: "Die Kueche ist modern.", verb: "-> eine moderne Kueche", meaning: "feminine form." },
          { pronoun: "Der Balkon ist klein.", verb: "-> ein kleiner Balkon", meaning: "masculine form." },
        ],
      },
      {
        type: "tip",
        text:
          "For writing an ad, use this sequence: size + rooms + location + rent + one positive adjective line.",
        textDe:
          "Fuer eine Wohnungsanzeige nutze diese Reihenfolge: Flaeche + Zimmer + Lage + Miete + eine positive Adjektivzeile.",
      },
    ],
  },

  {
    id: "a1-k7-test",
    level: "A1",
    number: "K7·D3",
    title: "Mini-test",
    subtitle: "14 questions sur logement, cas et adjectifs",
    icon: "🎯",
    duration: "15 min",
    xp: 70,
    color: "#8b5cf6",
    kapitel: 7,
    sections: [
      {
        type: "intro",
        title: "Mini-test Kapitel 7",
        content:
          "Final check for K7: apartment vocabulary, local prepositions, position verbs, adjective forms, and compounds.",
        contentDe:
          "Abschlusstest fuer K7: Wohnungswortschatz, lokale Praepositionen, Positionsverben, Adjektive und Komposita.",
      },
      {
        type: "quiz",
        title: "Mini-test K7 (14 questions)",
        questions: [
          {
            topic: "Wohnung",
            question: "Welche Aussage passt zu einer Wohnung?",
            options: ["Die Wohnung hat 60 Quadratmeter.", "Die Wohnung regnet.", "Die Wohnung faehrt Bus.", "Die Wohnung isst Abendessen."],
            correct: 0,
            explanation: "Apartment descriptions use size/rooms/rent details."
          },
          {
            topic: "Miete",
            question: "Was bedeutet Warmmiete?",
            options: ["Nur Grundmiete", "Miete mit Nebenkosten", "Nur Strom", "Nur Heizung"],
            correct: 1,
            explanation: "Warmmiete includes additional costs (Nebenkosten)."
          },
          {
            topic: "Hausordnung",
            question: "Welche Regel ist typisch?",
            options: ["Kein Laerm nach 22 Uhr", "Kochen ist verboten", "Fenster sind verboten", "Nur am Sonntag wohnen"],
            correct: 0,
            explanation: "Quiet hours after 22:00 are common in many buildings."
          },
          {
            topic: "Wo/Wohin",
            question: "Wo liegt das Buch?",
            options: ["auf den Tisch", "auf dem Tisch", "in den Tisch", "an den Tisch"],
            correct: 1,
            explanation: "Wo? = location/state -> dative: auf dem Tisch."
          },
          {
            topic: "Wo/Wohin",
            question: "Wohin legst du das Buch?",
            options: ["auf dem Tisch", "auf den Tisch", "an der Wand", "im Schrank"],
            correct: 1,
            explanation: "Wohin? = movement/direction -> accusative: auf den Tisch."
          },
          {
            topic: "Positionsverben",
            question: "Welche Form ist korrekt?",
            options: ["Ich liege das Buch auf den Tisch.", "Ich lege das Buch auf den Tisch.", "Das Buch legt auf dem Tisch.", "Ich stellen das Buch auf den Tisch."],
            correct: 1,
            explanation: "Action of placing a flat object uses legen."
          },
          {
            topic: "Positionsverben",
            question: "Welche Aussage beschreibt einen Zustand?",
            options: ["Ich stelle die Vase auf den Tisch.", "Ich haenge das Bild an die Wand.", "Die Vase steht auf dem Tisch.", "Ich lege den Teppich ins Zimmer."],
            correct: 2,
            explanation: "stehen describes current position/state."
          },
          {
            topic: "Adjektive",
            question: "Welche attributive Form ist korrekt?",
            options: ["ein bequem Sofa", "ein bequemes Sofa", "ein bequemer Sofa", "eine bequemes Sofa"],
            correct: 1,
            explanation: "Neuter noun with 'ein' often uses -es: ein bequemes Sofa."
          },
          {
            topic: "Adjektive",
            question: "Welche praedikative Form ist korrekt?",
            options: ["Das Sofa ist bequem.", "Das Sofa ist bequemes.", "Das Sofa ist bequemeres.", "Das Sofa ist bequeme."],
            correct: 0,
            explanation: "Predicative adjective after 'sein' has no ending."
          },
          {
            topic: "Komposita",
            question: "Welches Wort ist ein Kompositum?",
            options: ["Wohnzimmer", "wohnen", "gross", "Miete"],
            correct: 0,
            explanation: "Wohnzimmer combines wohnen + Zimmer."
          },
          {
            topic: "Komposita",
            question: "Welcher Artikel ist richtig?",
            options: ["die Wohnzimmer", "der Wohnzimmer", "das Wohnzimmer", "dem Wohnzimmer"],
            correct: 2,
            explanation: "Last element is Zimmer (das), so: das Wohnzimmer."
          },
          {
            topic: "Kultur",
            question: "Was ist in Deutschland bei Mietwohnungen wichtig?",
            options: ["Nur Farbe der Wand", "Nebenkosten und Hausordnung", "Nur die Postleitzahl", "Nur der Balkon"],
            correct: 1,
            explanation: "Nebenkosten and Hausordnung strongly affect housing life."
          },
          {
            topic: "Wortschatz",
            question: "Was ist ein Elektrogeraet?",
            options: ["der Schrank", "die Waschmaschine", "der Teppich", "die Gardine"],
            correct: 1,
            explanation: "A washing machine is an electrical appliance."
          },
          {
            topic: "Gesamt",
            question: "Welche Version ist komplett korrekt?",
            options: [
              "Das Buch liegt auf dem Tisch, und ich lege den Schluessel in den Schrank.",
              "Das Buch liegt auf den Tisch, und ich lege den Schluessel in dem Schrank.",
              "Das Buch legen auf dem Tisch, und ich liege den Schluessel in den Schrank.",
              "Das Buch ist bequem, und ich stelle den Schluessel auf den Schrank."],
            correct: 0,
            explanation: "Correct Wo/Wohin distinction and correct verb pair usage."
          }
        ]
      },
      {
        type: "tip",
        text:
          "Target score: 11/14 or more. If lower, revise in this order: 1) Wo vs Wohin, 2) liegen/legen & stehen/stellen, 3) attributive adjective endings.",
        textDe:
          "Ziel: 11/14 oder mehr. Bei geringerem Ergebnis zuerst Wo/Wohin, dann Positionsverben, dann attributive Adjektive wiederholen.",
      },
    ],
  },
];
