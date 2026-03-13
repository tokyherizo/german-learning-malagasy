// KAPITEL 6 — Reisen

export const k6Lessons = [
  {
    id: "a1-k6-weather",
    level: "A1",
    number: "K6·A1",
    title: "Die Jahreszeiten und das Wetter",
    subtitle: "Les quatre saisons et expressions meteo",
    icon: "🌤️",
    duration: "15 min",
    xp: 50,
    color: "#22d3ee",
    kapitel: 6,
    sections: [
      {
        type: "intro",
        title: "Wetter im Alltag",
        content:
          "In German-speaking countries, weather is a very common small-talk topic. You will hear these phrases at work, in trains, in cafes, and on TV.",
        contentDe:
          "Im deutschsprachigen Alltag spricht man sehr oft uber das Wetter. Diese Ausdruecke brauchst du jeden Tag.",
      },
      {
        type: "vocabulary",
        title: "Jahreszeiten",
        words: [
          { german: "der Fruehling", english: "spring", example: "Im Fruehling bluehen viele Blumen." },
          { german: "der Sommer", english: "summer", example: "Im Sommer ist es oft sehr warm." },
          { german: "der Herbst", english: "autumn", example: "Im Herbst regnet es haeufig." },
          { german: "der Winter", english: "winter", example: "Im Winter schneit es manchmal." },
          { german: "die Jahreszeit", english: "season", example: "Was ist deine Lieblingsjahreszeit?" },
        ],
      },
      {
        type: "vocabulary",
        title: "Wetterausdruecke",
        words: [
          { german: "Es regnet.", english: "It is raining.", example: "Heute regnet es den ganzen Tag." },
          { german: "Es schneit.", english: "It is snowing.", example: "In den Bergen schneit es schon." },
          { german: "Es ist sonnig.", english: "It is sunny.", example: "Morgen ist es sonnig und warm." },
          { german: "Es ist windig.", english: "It is windy.", example: "An der Kueste ist es oft windig." },
          { german: "Es ist kalt / heiss.", english: "It is cold / hot.", example: "Im Januar ist es kalt, im Juli heiss." },
          { german: "bewoelkt", english: "cloudy", example: "Heute ist es bewoelkt, aber trocken." },
          { german: "das Gewitter", english: "thunderstorm", example: "Heute Abend gibt es ein Gewitter." },
        ],
      },
      {
        type: "dialogue",
        title: "Small Talk ueber das Wetter",
        lines: [
          { speaker: "Nina", text: "Guten Morgen, Lukas. Wie ist das Wetter heute?", translation: "Good morning Lukas. How is the weather today?" },
          { speaker: "Lukas", text: "Nicht so gut. Es ist kalt und es regnet.", translation: "Not so good. It is cold and raining." },
          { speaker: "Nina", text: "Schade. Morgen wird es besser, glaube ich.", translation: "Too bad. Tomorrow will be better, I think." },
          { speaker: "Lukas", text: "Ja, im Wetterbericht sagen sie: sonnig und 22 Grad.", translation: "Yes, in the weather report they say: sunny and 22 degrees." },
          { speaker: "Nina", text: "Super, dann gehen wir nach der Arbeit spazieren!", translation: "Great, then we go for a walk after work!" },
        ],
      },
      {
        type: "grammar",
        title: "Wetter-Satzmuster",
        items: [
          { pronoun: "Es ist + Adjektiv", verb: "Es ist sonnig / kalt / windig.", meaning: "Basic weather description." },
          { pronoun: "Es regnet / schneit", verb: "Heute regnet es.", meaning: "Impersonal weather verbs with es." },
          { pronoun: "Im + Monatsname", verb: "Im August ist es heiss.", meaning: "Use im for months and seasons." },
          { pronoun: "am + Wochentag", verb: "Am Montag regnet es.", meaning: "Use am for weekdays." },
        ],
      },
      {
        type: "tip",
        text:
          "German weather phrase order is often direct and short: 'Heute ist es sonnig.' Keep it simple and natural. In spoken German, many people say only: 'Heute sonnig, morgen Regen.'",
        textDe:
          "Wetter auf Deutsch ist oft kurz und direkt: 'Heute ist es sonnig.' Im Alltag auch kuerzer: 'Heute sonnig, morgen Regen.'",
      },
    ],
  },

  {
    id: "a1-k6-dest",
    level: "A1",
    number: "K6·A2",
    title: "Reiseziele",
    subtitle: "Destinations en Europe et dans le monde",
    icon: "🗺️",
    duration: "18 min",
    xp: 55,
    color: "#22d3ee",
    kapitel: 6,
    sections: [
      {
        type: "intro",
        title: "Wohin moechtest du reisen?",
        content:
          "You can describe travel destinations by country, city, climate, activities, and atmosphere. This lesson gives practical phrases for comparisons and recommendations.",
        contentDe:
          "Reiseziele kann man nach Land, Stadt, Klima, Aktivitaeten und Stimmung beschreiben. Diese Lektion gibt dir praktische Formulierungen.",
      },
      {
        type: "vocabulary",
        title: "Laender und Staedte",
        words: [
          { german: "Deutschland", english: "Germany", example: "Ich moechte nach Deutschland reisen." },
          { german: "Oesterreich", english: "Austria", example: "In Oesterreich gibt es viele Berge." },
          { german: "die Schweiz", english: "Switzerland", example: "Die Schweiz ist teuer, aber sehr schoen." },
          { german: "Italien", english: "Italy", example: "Italien ist bekannt fuer gutes Essen." },
          { german: "Spanien", english: "Spain", example: "In Spanien ist das Wetter oft sonnig." },
          { german: "die Hauptstadt", english: "capital city", example: "Berlin ist die Hauptstadt von Deutschland." },
        ],
      },
      {
        type: "vocabulary",
        title: "Reisebeschreibungen",
        words: [
          { german: "beliebt", english: "popular", example: "Mallorca ist ein sehr beliebtes Reiseziel." },
          { german: "touristisch", english: "touristic", example: "Im Sommer ist die Stadt sehr touristisch." },
          { german: "ruhig", english: "quiet", example: "Ich suche einen ruhigen Ort am Meer." },
          { german: "guenstig", english: "cheap", example: "Ungarn ist oft guenstiger als die Schweiz." },
          { german: "teuer", english: "expensive", example: "Oslo ist eine teure Stadt." },
          { german: "sehenswert", english: "worth seeing", example: "Die Altstadt ist sehr sehenswert." },
        ],
      },
      {
        type: "grammar",
        title: "Vergleiche einfach machen",
        items: [
          { pronoun: "A ist + als B", verb: "Berlin ist groesser als Muenchen.", meaning: "Simple comparative with als." },
          { pronoun: "A ist so + Adj + wie B", verb: "Wien ist nicht so teuer wie Zuerich.", meaning: "Equal/near-equal comparison." },
          { pronoun: "Ich finde ...", verb: "Ich finde Lissabon sehr interessant.", meaning: "Giving personal opinion." },
          { pronoun: "Ich empfehle ...", verb: "Ich empfehle Prag fuer ein Wochenende.", meaning: "Recommendation phrase." },
        ],
      },
      {
        type: "dialogue",
        title: "Welches Reiseziel passt?",
        lines: [
          { speaker: "Emma", text: "Ich habe im Oktober eine Woche frei.", translation: "I have one week free in October." },
          { speaker: "Noah", text: "Dann ist Portugal eine gute Idee.", translation: "Then Portugal is a good idea." },
          { speaker: "Emma", text: "Ist es dort teuer?", translation: "Is it expensive there?" },
          { speaker: "Noah", text: "Nicht so teuer wie Frankreich, und das Wetter ist noch mild.", translation: "Not as expensive as France, and the weather is still mild." },
          { speaker: "Emma", text: "Perfekt. Ich schaue heute Abend nach Fluegen.", translation: "Perfect. I will look for flights tonight." },
        ],
      },
      {
        type: "tip",
        text:
          "For destinations, combine 3 elements in one sentence: place + climate + activity. Example: 'Ich moechte nach Barcelona reisen, weil das Wetter mild ist und man viel sehen kann.'",
        textDe:
          "Bei Reisezielen kombiniere 3 Elemente: Ort + Klima + Aktivitaet. Beispiel: 'Ich moechte nach Barcelona reisen, weil das Wetter mild ist und man viel sehen kann.'",
      },
    ],
  },

  {
    id: "a1-k6-prepare",
    level: "A1",
    number: "K6·A3",
    title: "Reisevorbereitungen",
    subtitle: "Valise, documents, billets et reservation",
    icon: "🧳",
    duration: "15 min",
    xp: 50,
    color: "#22d3ee",
    kapitel: 6,
    sections: [
      {
        type: "intro",
        title: "Vor der Reise",
        content:
          "A good trip starts with good preparation: documents, booking details, transport times, and packing. This lesson gives essential travel-prep phrases.",
        contentDe:
          "Eine gute Reise beginnt mit guter Vorbereitung: Dokumente, Buchungen, Abfahrtszeiten und Packliste.",
      },
      {
        type: "vocabulary",
        title: "Packliste und Dokumente",
        words: [
          { german: "der Koffer", english: "suitcase", example: "Ich packe meinen Koffer am Abend vorher." },
          { german: "der Rucksack", english: "backpack", example: "Fuer einen Kurztrip nehme ich nur einen Rucksack." },
          { german: "der Reisepass", english: "passport", example: "Ohne Reisepass kann ich nicht einreisen." },
          { german: "der Personalausweis", english: "ID card", example: "In der EU reicht oft der Personalausweis." },
          { german: "das Ticket", english: "ticket", example: "Mein Ticket ist digital auf dem Handy." },
          { german: "die Buchung", english: "booking", example: "Ich bestaetige die Hotelbuchung per E-Mail." },
          { german: "die Versicherung", english: "insurance", example: "Eine Reiseversicherung ist sinnvoll." },
        ],
      },
      {
        type: "grammar",
        title: "Vorbereitungsschritte beschreiben",
        items: [
          { pronoun: "zuerst", verb: "Zuerst buche ich den Flug.", meaning: "Sequence word: first." },
          { pronoun: "dann", verb: "Dann reserviere ich das Hotel.", meaning: "Then / next step." },
          { pronoun: "danach", verb: "Danach packe ich meinen Koffer.", meaning: "After that." },
          { pronoun: "am Ende", verb: "Am Ende drucke ich alle Unterlagen aus.", meaning: "At the end / final step." },
        ],
      },
      {
        type: "dialogue",
        title: "Checkliste vor der Abreise",
        lines: [
          { speaker: "Mila", text: "Hast du schon alles fuer die Reise?", translation: "Do you already have everything for the trip?" },
          { speaker: "Tim", text: "Fast. Ich muss noch den Reisepass suchen.", translation: "Almost. I still need to find my passport." },
          { speaker: "Mila", text: "Und dein Zugticket?", translation: "And your train ticket?" },
          { speaker: "Tim", text: "Das habe ich als PDF auf dem Handy.", translation: "I have it as a PDF on my phone." },
          { speaker: "Mila", text: "Super. Dann packen wir jetzt den Koffer.", translation: "Great. Then we pack the suitcase now." },
        ],
      },
      {
        type: "tip",
        text:
          "Simple planning formula for A1: 'Zuerst ... dann ... danach ... am Ende ...'. With this structure, your travel preparation sounds clear and natural.",
        textDe:
          "Einfache Planungsformel fuer A1: 'Zuerst ... dann ... danach ... am Ende ...'. So klingt deine Reisevorbereitung klar und natuerlich.",
      },
    ],
  },

  {
    id: "a1-k6-transport",
    level: "A1",
    number: "K6·A4",
    title: "Verkehrsmittel",
    subtitle: "Transports, billets et prix",
    icon: "🚂",
    duration: "15 min",
    xp: 45,
    color: "#22d3ee",
    kapitel: 6,
    sections: [
      {
        type: "intro",
        title: "Wie reist man?",
        content:
          "Travel choices depend on distance, time, comfort, and budget. In German, transport vocabulary is very practical for buying tickets and asking for connections.",
        contentDe:
          "Die Wahl des Verkehrsmittels haengt von Strecke, Zeit, Komfort und Budget ab. Dieses Vokabular ist sehr praktisch fuer den Alltag.",
      },
      {
        type: "vocabulary",
        title: "Die wichtigsten Verkehrsmittel",
        words: [
          { german: "der Zug", english: "train", example: "Mit dem Zug komme ich schnell ins Zentrum." },
          { german: "der Bus", english: "bus", example: "Der Bus ist guenstig, aber oft langsam." },
          { german: "das Auto", english: "car", example: "Mit dem Auto bin ich flexibel." },
          { german: "das Flugzeug", english: "airplane", example: "Fuer lange Strecken nehme ich das Flugzeug." },
          { german: "das Fahrrad", english: "bicycle", example: "In der Stadt fahre ich oft Fahrrad." },
          { german: "die U-Bahn", english: "metro/subway", example: "Die U-Bahn faehrt alle 5 Minuten." },
        ],
      },
      {
        type: "vocabulary",
        title: "Tickets und Reiseinfos",
        words: [
          { german: "die Fahrkarte", english: "ticket", example: "Eine Fahrkarte nach Koeln, bitte." },
          { german: "einfach / hin und zurueck", english: "one-way / return", example: "Ich brauche ein Ticket hin und zurueck." },
          { german: "die Abfahrt", english: "departure", example: "Die Abfahrt ist um 08:42 Uhr." },
          { german: "die Ankunft", english: "arrival", example: "Die Ankunft ist um 11:10 Uhr." },
          { german: "der Bahnsteig", english: "platform", example: "Der Zug faehrt von Bahnsteig 7 ab." },
          { german: "umsteigen", english: "to change trains", example: "In Frankfurt muss ich umsteigen." },
        ],
      },
      {
        type: "dialogue",
        title: "Am Bahnhof",
        lines: [
          { speaker: "Kunde", text: "Guten Tag, ich moechte nach Hamburg fahren.", translation: "Good day, I want to travel to Hamburg." },
          { speaker: "Schalter", text: "Einfach oder hin und zurueck?", translation: "One-way or return?" },
          { speaker: "Kunde", text: "Hin und zurueck, bitte.", translation: "Return, please." },
          { speaker: "Schalter", text: "Die naechste Abfahrt ist um 10:15 Uhr, Gleis 4.", translation: "The next departure is at 10:15, platform 4." },
          { speaker: "Kunde", text: "Muss ich umsteigen?", translation: "Do I need to change trains?" },
          { speaker: "Schalter", text: "Ja, einmal in Hannover.", translation: "Yes, once in Hanover." },
        ],
      },
      {
        type: "grammar",
        title: "Mit + Dativ bei Verkehrsmitteln",
        items: [
          { pronoun: "mit dem Zug", verb: "Ich fahre mit dem Zug.", meaning: "Transport method with dative article." },
          { pronoun: "mit dem Bus", verb: "Wir fahren mit dem Bus.", meaning: "masculine dative: dem." },
          { pronoun: "mit dem Auto", verb: "Sie kommt mit dem Auto.", meaning: "neuter dative: dem." },
          { pronoun: "mit der U-Bahn", verb: "Ich fahre mit der U-Bahn.", meaning: "feminine dative: der." },
        ],
      },
      {
        type: "tip",
        text:
          "Useful station question: 'Von welchem Gleis faehrt der Zug ab?' Keep this sentence ready. It solves many real travel situations.",
        textDe:
          "Sehr nuetzliche Frage am Bahnhof: 'Von welchem Gleis faehrt der Zug ab?'",
      },
    ],
  },

  {
    id: "a1-k6-kultur",
    level: "A1",
    number: "K6·B",
    title: "Reisegewohnheiten der Deutschen",
    subtitle: "Beliebte Ziele, Dauer der Reisen und Budget",
    icon: "🏖️",
    duration: "10 min",
    xp: 35,
    color: "#22d3ee",
    kapitel: 6,
    sections: [
      {
        type: "intro",
        title: "Wie reisen Deutsche?",
        content:
          "Travel is culturally important in Germany. Many people plan at least one longer trip per year and several short trips.",
        contentDe:
          "Reisen hat in Deutschland einen hohen Stellenwert. Viele planen jedes Jahr eine laengere Reise plus mehrere Kurztrips.",
      },
      {
        type: "vocabulary",
        title: "Kulturbegriffe rund ums Reisen",
        words: [
          { german: "der Sommerurlaub", english: "summer holiday", example: "Viele Familien planen den Sommerurlaub frueh." },
          { german: "die Ferien", english: "holiday period", example: "In den Ferien sind die Autobahnen voll." },
          { german: "der Kurztrip", english: "short trip", example: "Ein Kurztrip nach Prag ist beliebt." },
          { german: "die Hauptsaison", english: "high season", example: "In der Hauptsaison sind Hotels teurer." },
          { german: "das Reisebudget", english: "travel budget", example: "Wir haben ein Budget von 1200 Euro." },
          { german: "pauschal", english: "package holiday", example: "Viele buchen pauschal mit Flug und Hotel." },
        ],
      },
      {
        type: "grammar",
        title: "Typische Aussagen",
        items: [
          { pronoun: "Viele ...", verb: "Viele Deutsche reisen im Sommer ans Meer.", meaning: "Frequency/generalization." },
          { pronoun: "Am beliebtesten ist ...", verb: "Am beliebtesten ist Spanien.", meaning: "Superlative in basic form." },
          { pronoun: "Die Reise dauert ...", verb: "Die Reise dauert zehn Tage.", meaning: "Duration with accusative time phrase." },
          { pronoun: "Pro Person ...", verb: "Pro Person kostet die Reise etwa 900 Euro.", meaning: "Simple budget statement." },
        ],
      },
      {
        type: "tip",
        text:
          "A common phrase in German travel culture is 'Ich brauche Urlaub' (I need a holiday). It appears in everyday conversations and social media constantly.",
        textDe:
          "Der Satz 'Ich brauche Urlaub' ist in der Alltagskultur sehr haeufig.",
      },
    ],
  },

  {
    id: "a1-k6-konj",
    level: "A1",
    number: "K6·C1",
    title: "Satzverbindungen: Konjunktionen",
    subtitle: "und, aber, oder, denn, weil",
    icon: "🔗",
    duration: "20 min",
    xp: 60,
    color: "#22d3ee",
    kapitel: 6,
    sections: [
      {
        type: "intro",
        title: "Saetze verbinden",
        content:
          "Conjunctions make your German richer and more natural. At A1 level, the key set is: und, aber, oder, denn, weil.",
        contentDe:
          "Konjunktionen machen dein Deutsch natuerlicher. Auf A1 sind besonders wichtig: und, aber, oder, denn, weil.",
      },
      {
        type: "grammar",
        title: "Koordinierende Konjunktionen",
        items: [
          { pronoun: "und", verb: "Ich buche den Flug und ich reserviere das Hotel.", meaning: "Adds information." },
          { pronoun: "aber", verb: "Ich moechte nach Italien reisen, aber es ist teuer.", meaning: "Contrast/opposition." },
          { pronoun: "oder", verb: "Fahren wir mit dem Zug oder mit dem Bus?", meaning: "Choice/alternative." },
          { pronoun: "denn", verb: "Ich bleibe zu Hause, denn ich bin krank.", meaning: "Reason in normal word order." },
        ],
      },
      {
        type: "grammar",
        title: "weil als Nebensatz",
        items: [
          { pronoun: "weil + Verb am Ende", verb: "Ich bleibe zu Hause, weil ich krank bin.", meaning: "Subordinate clause: verb goes to the end." },
          { pronoun: "Komma vor weil", verb: "Wir fahren mit dem Zug, weil er schneller ist.", meaning: "Always comma before weil-clause." },
          { pronoun: "denn vs weil", verb: "Ich komme nicht, denn ich arbeite. / ... weil ich arbeite.", meaning: "Both give reason, but grammar differs." },
        ],
      },
      {
        type: "dialogue",
        title: "Reiseplan mit Konjunktionen",
        lines: [
          { speaker: "Sara", text: "Fahren wir im August ans Meer oder in die Berge?", translation: "Shall we go to the sea in August or to the mountains?" },
          { speaker: "Ben", text: "Ans Meer, weil das Wetter dort stabiler ist.", translation: "To the sea, because the weather there is more stable." },
          { speaker: "Sara", text: "Gute Idee, aber die Hotels sind teuer.", translation: "Good idea, but the hotels are expensive." },
          { speaker: "Ben", text: "Dann buchen wir frueh, denn fruehe Angebote sind guenstiger.", translation: "Then we book early, because early offers are cheaper." },
        ],
      },
      {
        type: "tip",
        text:
          "Fast check: if your sentence has weil, push the conjugated verb to the end of that clause. Example: '..., weil es heute regnet.'",
        textDe:
          "Schnelltest: Bei 'weil' steht das konjugierte Verb am Ende des Nebensatzes: '..., weil es heute regnet.'",
      },
    ],
  },

  {
    id: "a1-k6-modal",
    level: "A1",
    number: "K6·C2",
    title: "Modalverben: wollen, moechten, koennen",
    subtitle: "Structure avec infinitif en fin de phrase",
    icon: "⚙️",
    duration: "25 min",
    xp: 70,
    color: "#22d3ee",
    kapitel: 6,
    sections: [
      {
        type: "intro",
        title: "Modalverben im Alltag",
        content:
          "Modal verbs are central in practical German: expressing desire, polite wishes, and ability. Sentence pattern: subject + modal verb (position 2) + infinitive at the end.",
        contentDe:
          "Modalverben sind zentral im Alltag: Wunsch, Absicht und Faehigkeit. Struktur: Subjekt + Modalverb (Pos.2) + Infinitiv am Ende.",
      },
      {
        type: "grammar",
        title: "Grundstruktur",
        items: [
          { pronoun: "wollen", verb: "Ich will nach Wien fahren.", meaning: "Strong personal will/intention." },
          { pronoun: "moechten", verb: "Ich moechte ein Ticket kaufen.", meaning: "Polite wish (from moegen)." },
          { pronoun: "koennen", verb: "Ich kann heute nicht reisen.", meaning: "Ability/possibility." },
          { pronoun: "Infinitiv am Ende", verb: "Wir koennen morgen frueh starten.", meaning: "Main action verb stays in infinitive at end." },
        ],
      },
      {
        type: "grammar",
        title: "Konjugation (Praesens)",
        items: [
          { pronoun: "wollen", verb: "ich will, du willst, er/sie will, wir wollen, ihr wollt, sie wollen", meaning: "Notice: singular stem changes." },
          { pronoun: "moechten", verb: "ich moechte, du moechtest, er/sie moechte, wir moechten, ihr moechtet, sie moechten", meaning: "Very common for polite requests." },
          { pronoun: "koennen", verb: "ich kann, du kannst, er/sie kann, wir koennen, ihr koennt, sie koennen", meaning: "Ability and permission context." },
        ],
      },
      {
        type: "dialogue",
        title: "Im Reisebuero",
        lines: [
          { speaker: "Kundin", text: "Guten Tag, ich moechte eine Reise nach Wien buchen.", translation: "Good day, I would like to book a trip to Vienna." },
          { speaker: "Berater", text: "Sehr gern. Wann wollen Sie reisen?", translation: "With pleasure. When do you want to travel?" },
          { speaker: "Kundin", text: "Ich will am 12. August fahren.", translation: "I want to travel on 12 August." },
          { speaker: "Berater", text: "Koennen Sie morgens um 7 Uhr starten?", translation: "Can you start at 7 in the morning?" },
          { speaker: "Kundin", text: "Ja, das kann ich. Dann ist der Preis guenstiger.", translation: "Yes, I can. Then the price is cheaper." },
        ],
      },
      {
        type: "tip",
        text:
          "Use moechten for polite interaction: 'Ich moechte...' sounds more natural than 'Ich will...' in service contexts (hotel, ticket office, restaurant).",
        textDe:
          "Im Service-Kontext lieber 'Ich moechte ...' statt 'Ich will ...'. Das klingt hoeflicher.",
      },
    ],
  },

  {
    id: "a1-k6-dativ",
    level: "A1",
    number: "K6·C3",
    title: "Die Nomengruppe: Dativ nach mit/nach/von/zu",
    subtitle: "mit, nach, von, zu, bei, seit, ab + Dativ",
    icon: "📐",
    duration: "20 min",
    xp: 60,
    color: "#22d3ee",
    kapitel: 6,
    sections: [
      {
        type: "intro",
        title: "Dativ mit festen Praepositionen",
        content:
          "Some German prepositions always require dative. In this chapter: mit, nach, von, zu, bei, seit, ab. Mastering these forms makes travel German much cleaner.",
        contentDe:
          "Einige Praepositionen stehen immer mit Dativ: mit, nach, von, zu, bei, seit, ab.",
      },
      {
        type: "grammar",
        title: "Artikel im Dativ",
        items: [
          { pronoun: "maskulin", verb: "der -> dem", meaning: "mit dem Zug" },
          { pronoun: "neutral", verb: "das -> dem", meaning: "nach dem Essen" },
          { pronoun: "feminin", verb: "die -> der", meaning: "zu der Station (zur Station)" },
          { pronoun: "Plural", verb: "die -> den (+n)", meaning: "mit den Freunden" },
        ],
      },
      {
        type: "grammar",
        title: "Praepositionen mit Beispielen",
        items: [
          { pronoun: "mit", verb: "Ich reise mit dem Zug.", meaning: "with/by means of" },
          { pronoun: "nach", verb: "Wir fahren nach Berlin.", meaning: "to city/country (usually no article)" },
          { pronoun: "von", verb: "Der Zug kommt von der Kueste.", meaning: "from" },
          { pronoun: "zu", verb: "Ich gehe zum Bahnhof.", meaning: "to (person/place), zu + dem = zum" },
          { pronoun: "bei", verb: "Bei schlechtem Wetter bleiben wir drinnen.", meaning: "at/with/under condition" },
          { pronoun: "seit", verb: "Seit einem Jahr lerne ich Deutsch.", meaning: "since/for (ongoing)" },
          { pronoun: "ab", verb: "Ab Montag arbeite ich wieder.", meaning: "from (starting at)" },
        ],
      },
      {
        type: "dialogue",
        title: "Reisetag mit Dativ",
        lines: [
          { speaker: "Tom", text: "Faehrst du mit dem Bus zum Flughafen?", translation: "Are you going to the airport by bus?" },
          { speaker: "Lea", text: "Nein, ich fahre mit dem Zug zum Bahnhof und dann mit dem Shuttle.", translation: "No, I go by train to the station and then by shuttle." },
          { speaker: "Tom", text: "Seit wann planst du die Reise?", translation: "Since when have you been planning the trip?" },
          { speaker: "Lea", text: "Seit zwei Wochen. Ab morgen bin ich im Urlaub.", translation: "For two weeks. From tomorrow I am on vacation." },
        ],
      },
      {
        type: "tip",
        text:
          "Memory trick: write them as a fixed dative group: 'mit-nach-von-zu-bei-seit-ab'. Repeat daily and build one sentence with each.",
        textDe:
          "Merksatz: 'mit-nach-von-zu-bei-seit-ab' immer mit Dativ.",
      },
    ],
  },

  {
    id: "a1-k6-rev",
    level: "A1",
    number: "K6·D1",
    title: "Revision du chapitre",
    subtitle: "Synthese: meteo, destinations, transport, conjonctions, modaux, datif",
    icon: "📖",
    duration: "20 min",
    xp: 30,
    color: "#06b6d4",
    kapitel: 6,
    sections: [
      {
        type: "intro",
        title: "Kapitel 6 im Ueberblick",
        content:
          "You can now speak about weather, destinations, preparations, transport, conjunctions, modal verbs, and dative prepositions in travel contexts.",
        contentDe:
          "Du kannst jetzt ueber Wetter, Reiseziele, Vorbereitung, Verkehrsmittel, Konjunktionen, Modalverben und Dativ-Praepositionen sprechen.",
      },
      {
        type: "grammar",
        title: "Schnelle Grammatik-Checkliste",
        items: [
          { pronoun: "weil", verb: "..., weil das Hotel guenstig ist.", meaning: "Verb at the end in weil clause." },
          { pronoun: "Modalverb", verb: "Ich moechte nach Wien fahren.", meaning: "Modal in position 2 + infinitive at end." },
          { pronoun: "Dativ mit mit", verb: "mit dem Zug", meaning: "Always dative article." },
          { pronoun: "am/im/um", verb: "am Montag, im August, um 8 Uhr", meaning: "Day/month/time distinction." },
        ],
      },
      {
        type: "story_text",
        title: "Lesetext: Eine Reise nach Salzburg",
        level: "A1",
        paragraphs: [
          {
            text: "Im Oktober moechte Lara nach Salzburg reisen, weil die Stadt sehr schoen ist und nicht zu gross.",
            translation: "In October Lara wants to travel to Salzburg because the city is very beautiful and not too big."
          },
          {
            text: "Sie bucht zuerst den Zug und dann ein kleines Hotel im Zentrum. Danach packt sie ihren Koffer.",
            translation: "She first books the train and then a small hotel in the center. After that she packs her suitcase."
          },
          {
            text: "Am Reisetag faehrt sie mit dem Zug zum Bahnhof. Das Wetter ist bewoelkt, aber trocken.",
            translation: "On the travel day she goes by train to the station. The weather is cloudy but dry."
          },
          {
            text: "In Salzburg kann sie die Altstadt besuchen und abends typisch oesterreichisch essen.",
            translation: "In Salzburg she can visit the old town and in the evening eat typical Austrian food."
          }
        ],
        vocabulary: [
          { german: "das Zentrum", english: "city center", example: "Das Hotel liegt im Zentrum." },
          { german: "die Altstadt", english: "old town", example: "Die Altstadt ist sehr sehenswert." },
          { german: "typisch", english: "typical", example: "Das ist ein typisches Gericht." }
        ]
      },
      {
        type: "tip",
        text:
          "If one travel sentence is too difficult, split it into 2 short sentences first. Then reconnect with und/aber/weil.",
        textDe:
          "Wenn ein Satz zu schwer ist, zuerst in zwei kurze Saetze teilen. Danach mit und/aber/weil verbinden.",
      },
    ],
  },

  {
    id: "a1-k6-ex",
    level: "A1",
    number: "K6·D2",
    title: "Exercices de consolidation",
    subtitle: "Planifier un voyage et decrire un itineraire",
    icon: "✏️",
    duration: "25 min",
    xp: 40,
    color: "#06b6d4",
    kapitel: 6,
    sections: [
      {
        type: "intro",
        title: "Training Kapitel 6",
        content:
          "Practice all K6 elements with guided drills: conjunctions, modal verbs, weather phrases, destination descriptions, and dative travel expressions.",
        contentDe:
          "Hier trainierst du alle Elemente aus Kapitel 6: Konjunktionen, Modalverben, Wetter, Reiseziele und Dativformen.",
      },
      {
        type: "grammar",
        title: "Uebung 1: Verbinde die Saetze",
        items: [
          { pronoun: "Es regnet. Wir bleiben im Hotel.", verb: "-> Es regnet, deshalb bleiben wir im Hotel.", meaning: "Cause-consequence pattern." },
          { pronoun: "Ich buche frueh. Das Ticket ist guenstiger.", verb: "-> Ich buche frueh, weil das Ticket guenstiger ist.", meaning: "weil + verb at end." },
          { pronoun: "Wir fahren nach Wien. Wir fahren nach Prag.", verb: "-> Wir fahren nach Wien oder nach Prag.", meaning: "Alternative with oder." },
        ],
      },
      {
        type: "grammar",
        title: "Uebung 2: Modalverben",
        items: [
          { pronoun: "(wollen) Ich ___ im Juli reisen.", verb: "-> Ich will im Juli reisen.", meaning: "wollen conjugation." },
          { pronoun: "(moechten) Wir ___ ein Doppelzimmer buchen.", verb: "-> Wir moechten ein Doppelzimmer buchen.", meaning: "polite request." },
          { pronoun: "(koennen) Du ___ mit dem Bus fahren.", verb: "-> Du kannst mit dem Bus fahren.", meaning: "ability/option." },
        ],
      },
      {
        type: "grammar",
        title: "Uebung 3: Dativ nach Praeposition",
        items: [
          { pronoun: "mit + der Zug", verb: "-> mit dem Zug", meaning: "dative article shift." },
          { pronoun: "zu + der Bahnhof", verb: "-> zum Bahnhof", meaning: "zu + dem contraction in common usage for masculine/neuter places." },
          { pronoun: "seit + ein Jahr", verb: "-> seit einem Jahr", meaning: "dative ending." },
        ],
      },
      {
        type: "tip",
        text:
          "For oral fluency, do one 60-second monologue: destination + weather + transport + reason with weil + one modal verb sentence.",
        textDe:
          "Sprechübung: 60 Sekunden Monolog mit Reiseziel + Wetter + Verkehrsmittel + weil-Satz + Modalverb-Satz.",
      },
    ],
  },

  {
    id: "a1-k6-test",
    level: "A1",
    number: "K6·D3",
    title: "Mini-test",
    subtitle: "14 questions sur les voyages, conjonctions, modaux et datif",
    icon: "🎯",
    duration: "15 min",
    xp: 70,
    color: "#06b6d4",
    kapitel: 6,
    sections: [
      {
        type: "intro",
        title: "Mini-test Kapitel 6",
        content:
          "This quiz checks communication, grammar, and travel vocabulary from Kapitel 6. Read carefully and focus on conjunctions, modals, and dative forms.",
        contentDe:
          "Dieser Test prueft Kommunikation, Grammatik und Reisewortschatz aus Kapitel 6.",
      },
      {
        type: "quiz",
        title: "Mini-test K6 (14 questions)",
        questions: [
          {
            topic: "Wetter",
            question: "Welche Aussage ist korrekt?",
            options: ["Es ist regen.", "Es regnet.", "Es regnen.", "Es ist regnet."],
            correct: 1,
            explanation: "Weather verb form: 'Es regnet.'"
          },
          {
            topic: "Jahreszeiten",
            question: "Welche Praeposition passt? '___ Sommer ist es oft heiss.'",
            options: ["Am", "Im", "Um", "An"],
            correct: 1,
            explanation: "Seasons use im: 'Im Sommer'."
          },
          {
            topic: "Reiseziele",
            question: "Welche Form ist ein Vergleich?",
            options: ["Berlin ist gross.", "Berlin ist groesser als Bonn.", "Berlin ist am Montag.", "Berlin ist weil schoen."],
            correct: 1,
            explanation: "Comparative uses -er + als."
          },
          {
            topic: "Reisevorbereitung",
            question: "Was ist ein Reisedokument?",
            options: ["der Reisepass", "der Regen", "der Bahnsteig", "die Wolke"],
            correct: 0,
            explanation: "A passport is a key travel document."
          },
          {
            topic: "Verkehrsmittel",
            question: "Welche Form ist korrekt?",
            options: ["Ich fahre mit der Zug.", "Ich fahre mit dem Zug.", "Ich fahre mit den Zug.", "Ich fahre mit zu Zug."],
            correct: 1,
            explanation: "mit requires dative -> dem Zug."
          },
          {
            topic: "Konjunktionen",
            question: "Welche Konjunktion drueckt Gegensatz aus?",
            options: ["und", "aber", "oder", "denn"],
            correct: 1,
            explanation: "aber introduces contrast."
          },
          {
            topic: "Konjunktionen",
            question: "Welcher Satz mit weil ist korrekt?",
            options: [
              "Ich bleibe zu Hause, weil ich bin muede.",
              "Ich bleibe zu Hause, weil ich muede bin.",
              "Ich bleibe zu Hause, weil bin ich muede.",
              "Ich bleibe zu Hause, weil muede ich bin."
            ],
            correct: 1,
            explanation: "In weil clauses, conjugated verb goes to the end."
          },
          {
            topic: "Modalverben",
            question: "Welche Option ist hoeflich?",
            options: ["Ich will ein Zimmer.", "Ich moechte ein Zimmer buchen.", "Ich kann ein Zimmer.", "Ich wollen ein Zimmer."],
            correct: 1,
            explanation: "moechte is the polite request form."
          },
          {
            topic: "Modalverben",
            question: "Welche Struktur ist richtig?",
            options: [
              "Ich kann morgen reisen.",
              "Ich kann reise morgen.",
              "Ich morgen kann reisen.",
              "Ich kann morgen reise."
            ],
            correct: 0,
            explanation: "Modal verb in position 2, infinitive at the end."
          },
          {
            topic: "Dativ",
            question: "Welche Praeposition braucht Dativ?",
            options: ["mit", "fuer", "durch", "ohne"],
            correct: 0,
            explanation: "mit always takes dative."
          },
          {
            topic: "Dativ",
            question: "Welche Form ist richtig?",
            options: ["seit ein Jahr", "seit einem Jahr", "seit einen Jahr", "seit eine Jahr"],
            correct: 1,
            explanation: "seit + dative: einem Jahr."
          },
          {
            topic: "Transport",
            question: "Wo faehrt der Zug ab?",
            options: ["am Wetter", "auf dem Koffer", "von Gleis 6", "mit Urlaub"],
            correct: 2,
            explanation: "Trains depart from a platform: von Gleis 6."
          },
          {
            topic: "Kultur",
            question: "Welche Aussage passt zu Reisegewohnheiten?",
            options: [
              "Viele planen den Sommerurlaub frueh.",
              "Viele reisen nie in den Ferien.",
              "Reisebudget ist immer 0 Euro.",
              "Alle reisen nur mit dem Flugzeug."
            ],
            correct: 0,
            explanation: "Early planning for summer holidays is common."
          },
          {
            topic: "Gesamt",
            question: "Welche Version ist komplett korrekt?",
            options: [
              "Ich moechte nach Wien reisen, weil die Stadt schoen ist, und ich fahre mit dem Zug.",
              "Ich moechte nach Wien reisen, weil die Stadt ist schoen, und ich fahre mit der Zug.",
              "Ich moechte nach Wien reisen, denn die Stadt schoen ist, und ich fahre mit dem Zug.",
              "Ich moechte nach Wien reisen, weil ist die Stadt schoen, und ich fahre mit dem Zug."
            ],
            correct: 0,
            explanation: "Correct weil order + correct dative article with mit dem Zug."
          }
        ]
      },
      {
        type: "tip",
        text:
          "Mini-test target: 11/14 or more means solid A1 control for Kapitel 6. If score is lower, review: 1) weil word order, 2) modal + infinitive, 3) dative forms after mit/nach/von/zu.",
        textDe:
          "Ziel im Mini-test: 11/14 oder mehr. Bei niedrigerem Ergebnis: weil-Wortstellung, Modalverb + Infinitiv und Dativformen wiederholen.",
      },
    ],
  },
];
