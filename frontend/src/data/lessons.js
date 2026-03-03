// Lessons / Lektionen
export const lessons = {
  A1: [
    {
      id: "a1-l1",
      level: "A1",
      number: 1,
      title: "Greetings / Sich vorstellen",
      subtitle: "Greetings and self-introduction",
      icon: "👋",
      duration: "15 min",
      xp: 50,
      color: "#FF6B6B",
      sections: [
        {
          type: "intro",
          title: "Welcome! Willkommen!",
          content: "Today we learn how to greet people and introduce ourselves in German.",
          contentDe: "Heute lernen wir, wie man sich auf Deutsch begrüßt und vorstellt."
        },
        {
          type: "grammar",
          title: "Conjugation: sein (to be)",
          items: [
            { pronoun: "ich", verb: "bin", meaning: "I am" },
            { pronoun: "du", verb: "bist", meaning: "you are" },
            { pronoun: "er/sie/es", verb: "ist", meaning: "he / she / it is" },
            { pronoun: "wir", verb: "sind", meaning: "we are" },
            { pronoun: "ihr", verb: "seid", meaning: "you (pl.) are" },
            { pronoun: "sie/Sie", verb: "sind", meaning: "they are / you (formal)" },
          ]
        },
        {
          type: "dialogue",
          title: "Dialogue / Dialog",
          lines: [
            { speaker: "A", text: "Hallo! Wie heißt du?", translation: "Hello! What is your name?" },
            { speaker: "B", text: "Ich heiße Marie. Und du?", translation: "My name is Marie. And you?" },
            { speaker: "A", text: "Ich bin Pierre. Woher kommst du?", translation: "I am Pierre. Where are you from?" },
            { speaker: "B", text: "Ich komme aus Frankreich.", translation: "I come from France." },
            { speaker: "A", text: "Schön! Wie alt bist du?", translation: "Great! How old are you?" },
            { speaker: "B", text: "Ich bin 20 Jahre alt.", translation: "I am 20 years old." },
          ]
        },
        {
          type: "vocabulary",
          title: "Key Vocabulary / Schlüsselwörter",
          words: [
            { german: "der Name", english: "the name", example: "Mein Name ist Marie." },
            { german: "kommen aus", english: "to come from", example: "Ich komme aus Frankreich." },
            { german: "wohnen in", english: "to live in", example: "Ich wohne in London." },
            { german: "das Alter", english: "the age", example: "Ich bin 25 Jahre alt." },
            { german: "die Sprache", english: "the language", example: "Ich spreche Englisch." },
            { german: "lernen", english: "to learn", example: "Ich lerne Deutsch." },
          ]
        },
        {
          type: "tip",
          text: "Tip: 'Sie' (capitalised) is the formal form of address. Use it with strangers or older people.",
          textDe: "Tipp: 'Sie' (großgeschrieben) ist die formelle Anrede. Benutze es mit Fremden oder älteren Menschen."
        }
      ]
    },
    {
      id: "a1-l2",
      level: "A1",
      number: 2,
      title: "Numbers / Zahlen",
      subtitle: "Learn German numbers 0–100",
      icon: "🔢",
      duration: "20 min",
      xp: 60,
      color: "#4ECDC4",
      sections: [
        {
          type: "intro",
          title: "German Numbers / Deutsche Zahlen",
          content: "Numbers are very important. We use them for prices, addresses, times, and more.",
          contentDe: "Zahlen sind sehr wichtig. Wir benutzen sie für Preise, Adressen, Uhrzeiten, usw."
        },
        {
          type: "number_table",
          title: "Numbers 1–20",
          numbers: [
            { number: 1, german: "eins", english: "one" },
            { number: 2, german: "zwei", english: "two" },
            { number: 3, german: "drei", english: "three" },
            { number: 4, german: "vier", english: "four" },
            { number: 5, german: "fünf", english: "five" },
            { number: 6, german: "sechs", english: "six" },
            { number: 7, german: "sieben", english: "seven" },
            { number: 8, german: "acht", english: "eight" },
            { number: 9, german: "neun", english: "nine" },
            { number: 10, german: "zehn", english: "ten" },
            { number: 11, german: "elf", english: "eleven" },
            { number: 12, german: "zwölf", english: "twelve" },
            { number: 20, german: "zwanzig", english: "twenty" },
            { number: 30, german: "dreißig", english: "thirty" },
            { number: 100, german: "hundert", english: "one hundred" },
          ]
        },
        {
          type: "tip",
          text: "Tip: In German the units digit comes first, then 'und', then the tens digit: 21 = einundzwanzig.",
          textDe: "Tipp: Im Deutschen sagt man erst die Einerzahl, dann 'und', dann die Zehnerzahl: 21 = einundzwanzig."
        }
      ]
    },
    {
      id: "a1-l3",
      level: "A1",
      number: 3,
      title: "Family / Familie",
      subtitle: "Learn family vocabulary",
      icon: "👨‍👩‍👧‍👦",
      duration: "20 min",
      xp: 65,
      color: "#FFE66D",
      sections: [
        {
          type: "intro",
          title: "Family / Die Familie",
          content: "We learn words about family in German. It is important for everyday conversations.",
          contentDe: "Wir lernen Wörter über die Familie auf Deutsch. Das ist wichtig für Alltagsgespräche."
        },
        {
          type: "grammar",
          title: "Possessive Pronouns (Mein/Meine)",
          items: [
            { pronoun: "ich", verb: "mein / meine", meaning: "my" },
            { pronoun: "du", verb: "dein / deine", meaning: "your" },
            { pronoun: "er/es", verb: "sein / seine", meaning: "his" },
            { pronoun: "sie", verb: "ihr / ihre", meaning: "her" },
            { pronoun: "wir", verb: "unser / unsere", meaning: "our" },
          ]
        },
        {
          type: "dialogue",
          title: "Family Dialogue",
          lines: [
            { speaker: "A", text: "Hast du Geschwister?", translation: "Do you have any siblings?" },
            { speaker: "B", text: "Ja, ich habe einen Bruder und eine Schwester.", translation: "Yes, I have a brother and a sister." },
            { speaker: "A", text: "Wie alt ist dein Bruder?", translation: "How old is your brother?" },
            { speaker: "B", text: "Er ist 15 Jahre alt.", translation: "He is 15 years old." },
            { speaker: "A", text: "Wo wohnen deine Eltern?", translation: "Where do your parents live?" },
            { speaker: "B", text: "Sie wohnen in London.", translation: "They live in London." },
          ]
        }
      ]
    },
    {
      id: "a1-l4",
      level: "A1",
      number: 4,
      title: "Food and Drink / Essen und Trinken",
      subtitle: "Learn food and drink vocabulary",
      icon: "🍽️",
      duration: "25 min",
      xp: 70,
      color: "#A8E6CF",
      sections: [
        {
          type: "intro",
          title: "Food and Drink / Essen und Trinken",
          content: "Today we learn words for food and drinks. This is important for shopping and at restaurants.",
          contentDe: "Heute lernen wir Wörter für Essen und Trinken. Das ist wichtig beim Einkaufen und im Restaurant."
        },
        {
          type: "grammar",
          title: "Accusative: mögen / essen / trinken",
          items: [
            { pronoun: "ich", verb: "esse / trinke / mag", meaning: "I eat / I drink / I like" },
            { pronoun: "du", verb: "isst / trinkst / magst", meaning: "you eat / you drink / you like" },
            { pronoun: "er/sie/es", verb: "isst / trinkt / mag", meaning: "he eats / he drinks / he likes" },
            { pronoun: "wir", verb: "essen / trinken / mögen", meaning: "we eat / we drink / we like" },
          ]
        },
        {
          type: "tip",
          text: "Did you know? Popular German dishes are Bratwurst, Schnitzel and Sauerkraut!",
          textDe: "Wusstest du? Beliebte deutsche Gerichte sind Bratwurst, Schnitzel und Sauerkraut!"
        }
      ]
    },
    {
      id: "a1-l5",
      level: "A1",
      number: 5,
      title: "Colours and Shapes / Farben und Formen",
      subtitle: "Learn colours and shapes",
      icon: "🎨",
      duration: "15 min",
      xp: 55,
      color: "#FF8B94",
      sections: [
        {
          type: "intro",
          title: "Colours & Shapes / Farben und Formen",
          content: "Colours and shapes are essential for describing the world around you. In German, colour adjectives change their ending depending on gender and grammatical case.",
          contentDe: "Farben und Formen sind wichtig, um die Welt um dich herum zu beschreiben. Auf Deutsch ändern Farbadjektive ihre Endung je nach Genus und Kasus."
        },
        {
          type: "vocabulary",
          title: "Colours / Die Farben",
          words: [
            { german: "rot", english: "red", example: "Das Auto ist rot." },
            { german: "blau", english: "blue", example: "Der Himmel ist blau." },
            { german: "grün", english: "green", example: "Das Gras ist grün." },
            { german: "gelb", english: "yellow", example: "Die Sonne ist gelb." },
            { german: "schwarz", english: "black", example: "Die Nacht ist schwarz." },
            { german: "weiß", english: "white", example: "Der Schnee ist weiß." },
            { german: "braun", english: "brown", example: "Der Tisch ist braun." },
            { german: "orange", english: "orange", example: "Die Orange ist orange." },
            { german: "lila / violett", english: "purple", example: "Das Kleid ist lila." },
            { german: "grau", english: "grey", example: "Der Mantel ist grau." },
            { german: "rosa / pink", english: "pink", example: "Die Blume ist rosa." },
          ]
        },
        {
          type: "grammar",
          title: "Adjective Agreement (Basic) / Adjektivendungen",
          items: [
            { pronoun: "Predicate (after sein)", verb: "Das Haus ist blau.", meaning: "No ending change" },
            { pronoun: "Masc. (der)", verb: "ein roter Apfel", meaning: "a red apple" },
            { pronoun: "Fem. (die)", verb: "eine blaue Tasse", meaning: "a blue cup" },
            { pronoun: "Neut. (das)", verb: "ein grünes Gras", meaning: "green grass" },
            { pronoun: "Plural", verb: "bunte Blumen", meaning: "colourful flowers" },
            { pronoun: "Rule", verb: "After 'ist': no change", meaning: "Die Wand ist weiß. ✓" },
          ]
        },
        {
          type: "dialogue",
          title: "Describing a Room / Ein Zimmer beschreiben",
          lines: [
            { speaker: "A", text: "Wie ist dein Zimmer?", translation: "What is your room like?" },
            { speaker: "B", text: "Es ist klein, aber gemütlich. Die Wände sind weiß.", translation: "It is small but cosy. The walls are white." },
            { speaker: "A", text: "Welche Farbe hat dein Bett?", translation: "What colour is your bed?" },
            { speaker: "B", text: "Mein Bett ist braun und meine Decke ist blau.", translation: "My bed is brown and my blanket is blue." },
            { speaker: "A", text: "Schön! Hast du ein großes Fenster?", translation: "Nice! Do you have a big window?" },
            { speaker: "B", text: "Ja, und die Vorhänge sind grün.", translation: "Yes, and the curtains are green." },
          ]
        },
        {
          type: "vocabulary",
          title: "Shapes / Die Formen",
          words: [
            { german: "der Kreis", english: "circle", example: "Ein Kreis hat keine Ecken." },
            { german: "das Quadrat", english: "square", example: "Das Quadrat hat vier gleiche Seiten." },
            { german: "das Dreieck", english: "triangle", example: "Ein Dreieck hat drei Ecken." },
            { german: "das Rechteck", english: "rectangle", example: "Ein Rechteck ist länger als breit." },
            { german: "der Stern", english: "star", example: "Der Stern hat fünf Zacken." },
          ]
        },
        {
          type: "tip",
          text: "Tip: After 'sein' (to be), adjectives do NOT change: Das Haus ist blau. But before a noun they do: ein blaues Haus. For now, focus on the predicate form — it is the most common!",
          textDe: "Tipp: Nach 'sein' ändern sich Adjektive NICHT: Das Haus ist blau. Aber vor einem Substantiv schon: ein blaues Haus. Lerne zuerst die Prädikatsform — sie kommt am häufigsten vor!"
        }
      ]
    },
    {
      id: "a1-l6",
      level: "A1",
      number: 6,
      title: "Time and Date / Uhrzeit und Datum",
      subtitle: "Learn to tell the time and date in German",
      icon: "⏰",
      duration: "25 min",
      xp: 75,
      color: "#B8B8FF",
      sections: [
        {
          type: "intro",
          title: "Time and Date / Die Uhrzeit und das Datum",
          content: "Telling the time and giving dates is essential in everyday German. Germany uses the 24-hour clock in formal/written contexts, but the 12-hour clock in casual conversation.",
          contentDe: "Die Uhrzeit und das Datum sind im deutschen Alltag unverzichtbar. Formal benutzt man die 24-Stunden-Uhr, in Gesprächen oft die 12-Stunden-Uhr."
        },
        {
          type: "grammar",
          title: "Telling Time / Uhrzeit sagen",
          items: [
            { pronoun: "Wie spät ist es?", verb: "Es ist 9 Uhr.", meaning: "What time is it? It is 9 o'clock." },
            { pronoun: "Wann?", verb: "Um 8 Uhr.", meaning: "When? At 8 o'clock." },
            { pronoun: "X:30", verb: "halb X+1", meaning: "2:30 = halb drei (half three)" },
            { pronoun: "X:15", verb: "Viertel nach X", meaning: "3:15 = Viertel nach drei" },
            { pronoun: "X:45", verb: "Viertel vor X+1", meaning: "4:45 = Viertel vor fünf" },
            { pronoun: "Morgens / Abends", verb: "früh / nachts", meaning: "in the morning / at night" },
          ]
        },
        {
          type: "number_table",
          title: "Clock Hours / Uhrzeiten",
          numbers: [
            { number: "1:00", german: "ein Uhr", english: "one o'clock" },
            { number: "2:30", german: "halb drei", english: "half past two" },
            { number: "3:15", german: "Viertel nach drei", english: "quarter past three" },
            { number: "4:45", german: "Viertel vor fünf", english: "quarter to five" },
            { number: "12:00", german: "Mittag", english: "noon" },
            { number: "0:00", german: "Mitternacht", english: "midnight" },
            { number: "13:00", german: "dreizehn Uhr", english: "1 pm (24h)" },
            { number: "20:30", german: "zwanzig Uhr dreißig", english: "8:30 pm (24h)" },
          ]
        },
        {
          type: "vocabulary",
          title: "Days of the Week / Die Wochentage",
          words: [
            { german: "Montag (Mo)", english: "Monday", example: "Am Montag arbeite ich." },
            { german: "Dienstag (Di)", english: "Tuesday", example: "Am Dienstag habe ich Schule." },
            { german: "Mittwoch (Mi)", english: "Wednesday", example: "Mittwoch ist Mitte der Woche." },
            { german: "Donnerstag (Do)", english: "Thursday", example: "Am Donnerstag gehe ich einkaufen." },
            { german: "Freitag (Fr)", english: "Friday", example: "Freitag ist mein Lieblingstag!" },
            { german: "Samstag (Sa)", english: "Saturday", example: "Am Samstag schlafe ich aus." },
            { german: "Sonntag (So)", english: "Sunday", example: "Sonntag ist Ruhetag." },
          ]
        },
        {
          type: "vocabulary",
          title: "Months / Die Monate",
          words: [
            { german: "Januar / Februar", english: "January / February", example: "Im Januar schneit es oft." },
            { german: "März / April", english: "March / April", example: "Im März beginnt der Frühling." },
            { german: "Mai / Juni", english: "May / June", example: "Im Juni ist es oft warm." },
            { german: "Juli / August", english: "July / August", example: "Im August machen viele Urlaub." },
            { german: "September / Oktober", english: "September / October", example: "Im Oktober fallen die Blätter." },
            { german: "November / Dezember", english: "November / December", example: "Im Dezember ist Weihnachten." },
          ]
        },
        {
          type: "dialogue",
          title: "Making an Appointment / Einen Termin machen",
          lines: [
            { speaker: "A", text: "Guten Morgen! Wann können wir uns treffen?", translation: "Good morning! When can we meet?" },
            { speaker: "B", text: "Wie wäre es am Dienstag um 14 Uhr?", translation: "How about Tuesday at 2 pm?" },
            { speaker: "A", text: "Dienstag passt mir gut. Wie lange dauert das Treffen?", translation: "Tuesday works for me. How long will the meeting take?" },
            { speaker: "B", text: "Ungefähr eine Stunde, von 14 bis 15 Uhr.", translation: "About one hour, from 2 to 3 pm." },
            { speaker: "A", text: "Perfekt. Bis Dienstag dann!", translation: "Perfect. See you Tuesday then!" },
          ]
        },
        {
          type: "tip",
          text: "Tip: Germans write dates as DD.MM.YYYY — so 03.05.2025 = 3rd May 2025. The month comes SECOND, not first, unlike in English!",
          textDe: "Tipp: Deutsche schreiben Daten als TT.MM.JJJJ — also: 03.05.2025 = 3. Mai 2025. Der Monat kommt an zweiter Stelle!"
        }
      ]
    },

    /* ── A1 GRAMMAR ── */
    {
      id: "a1-g1",
      level: "A1",
      type: "grammar",
      number: "G1",
      title: "Articles & Genders — der, die, das",
      subtitle: "Master German noun genders",
      duration: "20 min",
      xp: 60,
      color: "#818cf8",
      sections: [
        {
          type: "intro",
          title: "Why does German have 3 genders?",
          content: "Every German noun has a grammatical gender: masculine (der), feminine (die), or neuter (das). The article changes with the case. Memorising the article WITH the noun is the best strategy — don't learn just 'Hund', learn 'der Hund'.",
          contentDe: "Jedes deutsche Substantiv hat ein grammatisches Geschlecht: maskulin (der), feminin (die) oder neutral (das). Der Artikel verändert sich je nach Fall. Lerne immer den Artikel zusammen mit dem Nomen!"
        },
        {
          type: "grammar",
          title: "Definite Articles — bestimmte Artikel",
          items: [
            { pronoun: "Masculine", verb: "der Mann, der Hund, der Tisch", meaning: "the man, the dog, the table" },
            { pronoun: "Feminine", verb: "die Frau, die Katze, die Schule", meaning: "the woman, the cat, the school" },
            { pronoun: "Neuter", verb: "das Kind, das Buch, das Haus", meaning: "the child, the book, the house" },
            { pronoun: "Plural (all genders)", verb: "die Männer, die Frauen, die Kinder", meaning: "the men, the women, the children" },
          ]
        },
        {
          type: "grammar",
          title: "Indefinite Articles — unbestimmte Artikel",
          items: [
            { pronoun: "Masculine", verb: "ein Mann, ein Hund", meaning: "a man, a dog" },
            { pronoun: "Feminine", verb: "eine Frau, eine Katze", meaning: "a woman, a cat" },
            { pronoun: "Neuter", verb: "ein Kind, ein Buch", meaning: "a child, a book" },
            { pronoun: "Negative", verb: "kein Mann, keine Frau, kein Kind", meaning: "no man, no woman, no child" },
          ]
        },
        {
          type: "grammar",
          title: "Nominativ vs. Akkusativ — the 2 main cases",
          items: [
            { pronoun: "Nominativ (subject)", verb: "Der Mann kauft Brot.", meaning: "The man (subject) buys bread." },
            { pronoun: "Akkusativ (direct object)", verb: "Er kauft den Hund.", meaning: "He buys the dog (object). der → den!" },
            { pronoun: "Masculin change only!", verb: "der → den (Akk.)", meaning: "Only masculine changes: der→den, ein→einen." },
            { pronoun: "Example", verb: "Ich sehe einen Mann.", meaning: "I see a man. (ein→einen, masculine Akk.)" },
          ]
        },
        {
          type: "vocabulary",
          title: "Noun Gender Hints — Tipps zum Artikel",
          words: [
            { german: "-ung → die", english: "always feminine", example: "die Meinung, die Wohnung" },
            { german: "-heit / -keit → die", english: "always feminine", example: "die Freiheit, die Möglichkeit" },
            { german: "-tion → die", english: "always feminine", example: "die Nation, die Situation" },
            { german: "-chen / -lein → das", english: "always neuter (diminutives)", example: "das Mädchen, das Fräulein" },
            { german: "-er (person/agent) → der", english: "usually masculine", example: "der Lehrer, der Fahrer" },
            { german: "Infinitives as nouns → das", english: "verbal nouns are neuter", example: "das Lernen, das Essen" },
          ]
        },
        {
          type: "tip",
          text: "Best tip: Always learn nouns WITH their article as one unit. Create flashcards with colour coding: BLUE for der, RED for die, GREEN for das. After a few weeks this becomes automatic!",
          textDe: "Bester Tipp: Lerne Nomen immer mit dem Artikel. Nutze Farbcodes: BLAU für der, ROT für die, GRÜN für das. Nach einigen Wochen wird das automatisch!"
        }
      ]
    },
    {
      id: "a1-g2",
      level: "A1",
      type: "grammar",
      number: "G2",
      title: "Verb Conjugation — Verbkonjugation",
      subtitle: "Regular verbs, sein, haben and Modal verbs",
      duration: "25 min",
      xp: 70,
      color: "#a78bfa",
      sections: [
        {
          type: "intro",
          title: "How German verbs work",
          content: "German verbs change their ending to match the subject (I, you, he/she, we, you all, they). Regular verbs follow a predictable pattern. Two key irregular verbs — sein (to be) and haben (to have) — must be memorised. Modal verbs (can, must, want) add a second meaning to the sentence.",
          contentDe: "Deutsche Verben verändern ihre Endungen je nach Subjekt. Regelmäßige Verben folgen einem vorhersehbaren Muster. Zwei wichtige unregelmäßige Verben — sein und haben — müssen auswendig gelernt werden."
        },
        {
          type: "grammar",
          title: "Regular Verbs — e.g. lernen (to learn)",
          items: [
            { pronoun: "ich (I)", verb: "lerne", meaning: "I learn / I am learning" },
            { pronoun: "du (you informal)", verb: "lernst", meaning: "you learn" },
            { pronoun: "er / sie / es (he/she/it)", verb: "lernt", meaning: "he/she/it learns" },
            { pronoun: "wir (we)", verb: "lernen", meaning: "we learn" },
            { pronoun: "ihr (you all)", verb: "lernt", meaning: "you all learn" },
            { pronoun: "sie / Sie (they / formal you)", verb: "lernen", meaning: "they learn / You (formal) learn" },
          ]
        },
        {
          type: "grammar",
          title: "Irregular: sein (to be)",
          items: [
            { pronoun: "ich", verb: "bin", meaning: "I am" },
            { pronoun: "du", verb: "bist", meaning: "you are" },
            { pronoun: "er / sie / es", verb: "ist", meaning: "he/she/it is" },
            { pronoun: "wir", verb: "sind", meaning: "we are" },
            { pronoun: "ihr", verb: "seid", meaning: "you all are" },
            { pronoun: "sie / Sie", verb: "sind", meaning: "they are / You are (formal)" },
          ]
        },
        {
          type: "grammar",
          title: "Irregular: haben (to have)",
          items: [
            { pronoun: "ich", verb: "habe", meaning: "I have" },
            { pronoun: "du", verb: "hast", meaning: "you have" },
            { pronoun: "er / sie / es", verb: "hat", meaning: "he/she/it has" },
            { pronoun: "wir", verb: "haben", meaning: "we have" },
            { pronoun: "ihr", verb: "habt", meaning: "you all have" },
            { pronoun: "sie / Sie", verb: "haben", meaning: "they have / You have (formal)" },
          ]
        },
        {
          type: "grammar",
          title: "Modal verbs — used with infinitive at end",
          items: [
            { pronoun: "können (can)", verb: "Ich kann Deutsch sprechen.", meaning: "I can speak German." },
            { pronoun: "müssen (must)", verb: "Du musst lernen.", meaning: "You must learn." },
            { pronoun: "wollen (want to)", verb: "Er will nach Berlin fahren.", meaning: "He wants to go to Berlin." },
            { pronoun: "möchten (would like)", verb: "Ich möchte Kaffee trinken.", meaning: "I would like to drink coffee." },
            { pronoun: "dürfen (may / allowed to)", verb: "Hier darf man nicht rauchen.", meaning: "Smoking is not allowed here." },
            { pronoun: "sollen (should / supposed to)", verb: "Du sollst früh aufstehen.", meaning: "You should get up early." },
          ]
        },
        {
          type: "tip",
          text: "Remember: with modal verbs the main verb goes to the END in infinitive form. 'Ich will Deutsch LERNEN' (not 'Ich will lernen Deutsch'). This is the V2 rule + infinitive at end.",
          textDe: "Merke: Bei Modalverben steht das Hauptverb als Infinitiv am SATZENDE. 'Ich will Deutsch LERNEN.' Das Modalverb ist an Position 2, der Infinitiv am Ende."
        }
      ]
    },

    /* ── A1 STORIES ── */
    {
      id: "a1-s1",
      level: "A1",
      type: "story",
      number: "S1",
      title: "Ein Tag in München",
      subtitle: "A simple story — read and understand German",
      duration: "15 min",
      xp: 50,
      color: "#34d399",
      sections: [
        {
          type: "story_text",
          title: "Ein Tag in München",
          level: "A1",
          paragraphs: [
            {
              text: "Es ist Montag. Maria steht um 7 Uhr auf. Sie geht ins Badezimmer und putzt die Zähne. Dann macht sie Frühstück: Brot mit Butter und einen Kaffee.",
              translation: "It is Monday. Maria gets up at 7 o'clock. She goes to the bathroom and brushes her teeth. Then she makes breakfast: bread with butter and a coffee."
            },
            {
              text: "Um 8 Uhr geht Maria aus dem Haus. Das Wetter ist schön. Die Sonne scheint. Sie fährt mit dem Bus in die Stadt.",
              translation: "At 8 o'clock Maria leaves the house. The weather is nice. The sun is shining. She takes the bus to the city."
            },
            {
              text: "In der Stadt kauft Maria ein neues Buch. Das Buch kostet sieben Euro. 'Das ist nicht teuer', denkt sie.",
              translation: "In the city, Maria buys a new book. The book costs seven euros. 'That is not expensive', she thinks."
            },
            {
              text: "Um 12 Uhr isst Maria in einem Café. Sie bestellt ein Sandwich und einen Tee. Das Sandwich ist sehr lecker.",
              translation: "At 12 o'clock Maria eats in a café. She orders a sandwich and a tea. The sandwich is very tasty."
            },
            {
              text: "Am Abend kommt Maria nach Hause. Sie liest ihr neues Buch und schläft um 22 Uhr ein. Das war ein guter Tag!",
              translation: "In the evening Maria comes home. She reads her new book and falls asleep at 10 pm. That was a good day!"
            }
          ],
          vocabulary: [
            { german: "aufstehen", english: "to get up", example: "Ich stehe um 7 auf." },
            { german: "die Zähne putzen", english: "to brush teeth", example: "Ich putze die Zähne." },
            { german: "das Frühstück", english: "breakfast", example: "Ich esse Frühstück." },
            { german: "die Sonne scheint", english: "the sun is shining", example: "Heute scheint die Sonne." },
            { german: "teuer / billig", english: "expensive / cheap", example: "Das Buch ist nicht teuer." },
            { german: "lecker", english: "tasty / delicious", example: "Das Essen ist lecker!" },
            { german: "einschlafen", english: "to fall asleep", example: "Ich schlafe um 22 Uhr ein." },
          ]
        },
        {
          type: "tip",
          text: "Reading strategy: Read slowly, once without translating. Notice familiar words. Then read again with the translation. Finally, try to retell the story in 3 simple sentences.",
          textDe: "Lesestrategie: Lies zuerst ohne Übersetzen. Erkenne bekannte Wörter. Dann lies mit der Übersetzung. Versuche danach, die Geschichte in 3 Sätzen nachzuerzählen."
        }
      ]
    },
    {
      id: "a1-s2",
      level: "A1",
      type: "story",
      number: "S2",
      title: "Im Supermarkt",
      subtitle: "Shopping dialogue — everyday A1 German",
      duration: "15 min",
      xp: 50,
      color: "#38bdf8",
      sections: [
        {
          type: "story_text",
          title: "Im Supermarkt",
          level: "A1",
          paragraphs: [
            {
              text: "Tom geht in den Supermarkt. Er braucht Milch, Brot und Äpfel. Er nimmt einen Einkaufswagen.",
              translation: "Tom goes to the supermarket. He needs milk, bread and apples. He takes a shopping trolley."
            },
            {
              text: "Tom findet die Milch im Kühlschrank. Das Brot ist in der Bäckereiabteilung. Aber wo sind die Äpfel? Er fragt die Verkäuferin: 'Entschuldigung, wo finde ich Äpfel?' Sie antwortet: 'Im Obst- und Gemüsebereich, Gang 3.'",
              translation: "Tom finds the milk in the fridge. The bread is in the bakery section. But where are the apples? He asks the shop assistant: 'Excuse me, where do I find apples?' She answers: 'In the fruit and vegetables area, aisle 3.'"
            },
            {
              text: "Tom geht zur Kasse. Er legt seine Sachen auf das Band. Die Kassiererin sagt: 'Das macht 8 Euro 50.' Tom bezahlt mit Karte.",
              translation: "Tom goes to the checkout. He puts his items on the belt. The cashier says: 'That is 8 euros 50.' Tom pays by card."
            },
            {
              text: "Tom ist fertig. Er packt seine Sachen in eine Tasche und geht nach Hause. Heute kocht er Nudelsuppe mit Gemüse.",
              translation: "Tom is done. He packs his things into a bag and goes home. Today he is cooking noodle soup with vegetables."
            }
          ],
          vocabulary: [
            { german: "der Supermarkt", english: "supermarket", example: "Ich gehe in den Supermarkt." },
            { german: "der Einkaufswagen", english: "shopping trolley / cart", example: "Ich nehme einen Einkaufswagen." },
            { german: "die Kasse", english: "checkout / till", example: "Ich gehe zur Kasse." },
            { german: "das Band", english: "conveyor belt", example: "Leg die Sachen auf das Band." },
            { german: "bezahlen", english: "to pay", example: "Ich bezahle mit Karte." },
            { german: "die Tüte / die Tasche", english: "bag", example: "Ich packe alles in eine Tasche." },
            { german: "der Gang", english: "aisle", example: "Die Äpfel sind in Gang 3." },
          ]
        },
        {
          type: "tip",
          text: "In German supermarkets it is common to bring your own bag (Einkaufstasche) — plastic bags often cost extra. Self-checkout (Selbst-Scan) is also common in larger chains.",
          textDe: "In deutschen Supermärkten ist es üblich, eine eigene Einkaufstasche mitzubringen. Plastiktüten kosten oft extra."
        }
      ]
    }
  ],
  A2: [
    {
      id: "a2-l1",
      level: "A2",
      number: 1,
      title: "Work and Daily Life / Arbeit und Alltag",
      subtitle: "Learn vocabulary for work and everyday life",
      icon: "💼",
      duration: "30 min",
      xp: 90,
      color: "#FF6B6B",
      sections: [
        {
          type: "intro",
          title: "Work and Daily Life",
          content: "Today we learn vocabulary about work and daily life in Germany.",
          contentDe: "Heute lernen wir über Berufe und den deutschen Alltag."
        },
        {
          type: "grammar",
          title: "Modal Verbs",
          items: [
            { pronoun: "können", verb: "can / to be able to", meaning: "Ich kann Deutsch sprechen." },
            { pronoun: "müssen", verb: "must / to have to", meaning: "Ich muss arbeiten." },
            { pronoun: "wollen", verb: "to want to", meaning: "Ich will lernen." },
            { pronoun: "sollen", verb: "should / to be supposed to", meaning: "Du sollst pünktlich sein." },
            { pronoun: "dürfen", verb: "may / to be allowed to", meaning: "Du darfst hier parken." },
            { pronoun: "möchten", verb: "would like", meaning: "Ich möchte Kaffee." },
          ]
        },
        {
          type: "dialogue",
          title: "Work Dialogue",
          lines: [
            { speaker: "A", text: "Was machst du beruflich?", translation: "What do you do for work?" },
            { speaker: "B", text: "Ich bin Lehrer. Und du?", translation: "I am a teacher. And you?" },
            { speaker: "A", text: "Ich bin Ingenieur und arbeite in einer Firma.", translation: "I am an engineer and work in a company." },
            { speaker: "B", text: "Wie lange arbeitest du schon dort?", translation: "How long have you been working there?" },
            { speaker: "A", text: "Seit fünf Jahren. Ich mag meine Arbeit sehr.", translation: "For five years. I really like my job." },
          ]
        }
      ]
    },
    {
      id: "a2-l2",
      level: "A2",
      number: 2,
      title: "The Weather / Das Wetter",
      subtitle: "Weather expressions",
      icon: "🌤️",
      duration: "25 min",
      xp: 85,
      color: "#4ECDC4",
      sections: [
        {
          type: "intro",
          title: "The Weather / Das Wetter",
          content: "Talking about the weather is an extremely common topic in Germany. We learn weather vocabulary, impersonal verbs, and how to talk about seasons.",
          contentDe: "Über das Wetter zu reden ist in Deutschland sehr üblich. Wir lernen Wettervokabular, unpersönliche Verben und die Jahreszeiten."
        },
        {
          type: "vocabulary",
          title: "Weather Words / Wetterwörter",
          words: [
            { german: "die Sonne / sonnig", english: "the sun / sunny", example: "Es ist sonnig heute." },
            { german: "der Regen / regnen", english: "the rain / to rain", example: "Es regnet. Nimm einen Schirm!" },
            { german: "der Wind / windig", english: "the wind / windy", example: "Es ist windig draußen." },
            { german: "der Schnee / schneien", english: "the snow / to snow", example: "Im Winter schneit es." },
            { german: "die Wolke / bewölkt", english: "the cloud / cloudy", example: "Der Himmel ist bewölkt." },
            { german: "der Nebel / neblig", english: "the fog / foggy", example: "Heute ist es neblig." },
            { german: "das Gewitter", english: "thunderstorm", example: "Das Gewitter ist gefährlich." },
            { german: "warm / heiß / kalt", english: "warm / hot / cold", example: "Im Sommer ist es heiß." },
          ]
        },
        {
          type: "grammar",
          title: "Impersonal Verbs — 'Es' / Unpersönliche Verben",
          items: [
            { pronoun: "Es regnet.", verb: "It is raining.", meaning: "regnen — to rain" },
            { pronoun: "Es schneit.", verb: "It is snowing.", meaning: "schneien — to snow" },
            { pronoun: "Es ist warm.", verb: "It is warm.", meaning: "sein + adjective" },
            { pronoun: "Es gibt Gewitter.", verb: "There is a storm.", meaning: "geben — to give / there is" },
            { pronoun: "Wie ist das Wetter?", verb: "What is the weather like?", meaning: "Common question" },
            { pronoun: "Das Wetter ist schön.", verb: "The weather is nice.", meaning: "schön = nice / beautiful" },
          ]
        },
        {
          type: "vocabulary",
          title: "The Seasons / Die Jahreszeiten",
          words: [
            { german: "der Frühling", english: "spring", example: "Im Frühling blühen die Blumen." },
            { german: "der Sommer", english: "summer", example: "Im Sommer ist es heiß." },
            { german: "der Herbst", english: "autumn", example: "Im Herbst fallen die Blätter." },
            { german: "der Winter", english: "winter", example: "Im Winter ist es kalt und es schneit." },
          ]
        },
        {
          type: "dialogue",
          title: "Talking About the Weather / Über das Wetter reden",
          lines: [
            { speaker: "A", text: "Wie ist das Wetter heute?", translation: "What is the weather like today?" },
            { speaker: "B", text: "Es ist bewölkt und ziemlich kalt.", translation: "It is cloudy and quite cold." },
            { speaker: "A", text: "Soll es regnen?", translation: "Is it supposed to rain?" },
            { speaker: "B", text: "Ja, am Nachmittag gibt es Regen.", translation: "Yes, in the afternoon there will be rain." },
            { speaker: "A", text: "Dann nehme ich meinen Schirm mit!", translation: "Then I will take my umbrella!" },
          ]
        },
        {
          type: "tip",
          text: "Tip: In German, weather verbs use 'es' as a dummy subject: 'Es regnet' (it rains). You cannot say 'der Regen regnet'. Use 'Es ist + adjective' for states: Es ist kalt / warm / schön.",
          textDe: "Tipp: Im Deutschen wird für Wetter 'es' als Platzhaltersubjekt benutzt: 'Es regnet'. Für Zustände: Es ist kalt / warm / schön."
        }
      ]
    },
    {
      id: "a2-l3",
      level: "A2",
      number: 3,
      title: "City and Directions / Stadt und Weg",
      subtitle: "Ask for and give directions",
      icon: "🗺️",
      duration: "30 min",
      xp: 95,
      color: "#FFE66D",
      sections: [
        {
          type: "intro",
          title: "City and Directions",
          content: "We learn how to ask for directions and words used in the city.",
          contentDe: "Wir lernen, wie man nach dem Weg fragt und Wörter, die man in der Stadt benutzt."
        },
        {
          type: "grammar",
          title: "Prepositions of Place / Präpositionen des Ortes",
          items: [
            { pronoun: "vor", verb: "in front of", meaning: "Das Café ist vor dem Bahnhof." },
            { pronoun: "hinter", verb: "behind", meaning: "Das Kino ist hinter der Kirche." },
            { pronoun: "neben", verb: "next to", meaning: "Die Bank ist neben dem Supermarkt." },
            { pronoun: "gegenüber", verb: "opposite / across from", meaning: "Das Hotel ist gegenüber dem Bahnhof." },
            { pronoun: "geradeaus", verb: "straight ahead", meaning: "Gehen Sie geradeaus." },
            { pronoun: "links / rechts", verb: "left / right", meaning: "Biegen Sie links/rechts ab." },
            { pronoun: "an der Ecke", verb: "at the corner", meaning: "Das Restaurant ist an der Ecke." },
          ]
        },
        {
          type: "dialogue",
          title: "Asking for Directions",
          lines: [
            { speaker: "A", text: "Entschuldigung, wie komme ich zum Bahnhof?", translation: "Excuse me, how do I get to the train station?" },
            { speaker: "B", text: "Gehen Sie geradeaus und dann links.", translation: "Go straight ahead and then turn left." },
            { speaker: "A", text: "Ist es weit?", translation: "Is it far?" },
            { speaker: "B", text: "Nein, etwa 10 Minuten zu Fuß.", translation: "No, about 10 minutes on foot." },
            { speaker: "A", text: "Vielen Dank!", translation: "Thank you very much!" },
          ]
        },
        {
          type: "vocabulary",
          title: "City Places / Stadtgebäude",
          words: [
            { german: "der Bahnhof", english: "train station", example: "Der Bahnhof ist in der Mitte." },
            { german: "die Kirche", english: "church", example: "Die Kirche ist sehr alt." },
            { german: "das Rathaus", english: "town hall", example: "Das Rathaus ist gegenüber dem Park." },
            { german: "die Apotheke", english: "pharmacy", example: "Die Apotheke ist neben der Bank." },
            { german: "der Supermarkt", english: "supermarket", example: "Ich gehe zum Supermarkt." },
            { german: "die Bushaltestelle", english: "bus stop", example: "Die Bushaltestelle ist um die Ecke." },
            { german: "die Straße / der Platz", english: "street / square", example: "Der Marktplatz ist das Zentrum." },
          ]
        },
        {
          type: "tip",
          text: "Tip: Use 'zu + dative' to go TO a place: Ich gehe zum Bahnhof (zu + dem = zum). Use 'in + accusative' to go INTO a building: Ich gehe in den Supermarkt.",
          textDe: "Tipp: 'zu + Dativ' für Richtungen: zum Bahnhof. 'in + Akkusativ' um in Gebäude zu gehen: in den Supermarkt."
        }
      ]
    },
    {
      id: "a2-l4",
      level: "A2",
      number: 4,
      title: "School and Education / Schule und Bildung",
      subtitle: "Learn school vocabulary",
      icon: "📚",
      duration: "25 min",
      xp: 85,
      color: "#A8E6CF",
      sections: [
        {
          type: "intro",
          title: "School and Education / Schule und Bildung",
          content: "Germany has a structured school system. After primary school (Grundschule), students go to Gymnasium, Realschule or Hauptschule. We learn key vocabulary and separable verbs used in school life.",
          contentDe: "Deutschland hat ein strukturiertes Schulsystem. Nach der Grundschule kommen Gymnasium, Realschule oder Hauptschule. Wir lernen Vokabular und Trennverben für die Schule."
        },
        {
          type: "vocabulary",
          title: "School Items / Schulsachen",
          words: [
            { german: "das Heft", english: "exercise book", example: "Ich schreibe in mein Heft." },
            { german: "das Buch / das Lehrbuch", english: "book / textbook", example: "Das Lehrbuch ist auf dem Tisch." },
            { german: "der Stift / der Kuli", english: "pen / ballpoint pen", example: "Ich brauche einen Stift." },
            { german: "der Bleistift", english: "pencil", example: "Zeichne mit dem Bleistift." },
            { german: "die Tafel", english: "blackboard", example: "Der Lehrer schreibt an die Tafel." },
            { german: "der Rucksack", english: "backpack", example: "Mein Rucksack ist schwer." },
            { german: "die Hausaufgaben", english: "homework", example: "Ich mache meine Hausaufgaben." },
            { german: "die Note / die Prüfung", english: "grade / exam", example: "Ich habe eine gute Note bekommen." },
          ]
        },
        {
          type: "grammar",
          title: "Separable Verbs / Trennbare Verben",
          items: [
            { pronoun: "aufmachen", verb: "öffnen", meaning: "Mach das Buch auf! — Open the book!" },
            { pronoun: "zumachen", verb: "schließen", meaning: "Mach die Tür zu! — Close the door!" },
            { pronoun: "anfangen", verb: "beginnen", meaning: "Der Unterricht fängt an. — Class begins." },
            { pronoun: "aufschreiben", verb: "notieren", meaning: "Schreib das auf! — Write that down!" },
            { pronoun: "mitnehmen", verb: "nehmen mit", meaning: "Nimm dein Buch mit! — Take your book!" },
            { pronoun: "Rule", verb: "prefix splits off", meaning: "Verb goes to end: Ich mache das Buch auf." },
          ]
        },
        {
          type: "vocabulary",
          title: "School Subjects / Schulfächer",
          words: [
            { german: "Mathematik / Mathe", english: "Mathematics", example: "Mathe ist mein Lieblingsfach." },
            { german: "Deutsch", english: "German", example: "Im Deutschunterricht lesen wir Bücher." },
            { german: "Englisch", english: "English", example: "Ich lerne Englisch seit 5 Jahren." },
            { german: "Geschichte", english: "History", example: "Geschichte ist sehr interessant." },
            { german: "Biologie / Chemie", english: "Biology / Chemistry", example: "Im Labor machen wir Experimente." },
            { german: "Sport", english: "PE / Sports", example: "Sport macht mir Spaß!" },
          ]
        },
        {
          type: "dialogue",
          title: "In the Classroom / Im Unterricht",
          lines: [
            { speaker: "Lehrer", text: "Guten Morgen! Macht bitte eure Bücher auf, Seite 42.", translation: "Good morning! Please open your books, page 42." },
            { speaker: "Schüler", text: "Entschuldigung, ich habe mein Buch vergessen.", translation: "Excuse me, I forgot my book." },
            { speaker: "Lehrer", text: "Das ist nicht gut. Schreib die Hausaufgaben auf!", translation: "That is not good. Write down the homework!" },
            { speaker: "Schüler", text: "Wann fängt die Prüfung an?", translation: "When does the exam start?" },
            { speaker: "Lehrer", text: "Nächste Woche, am Freitag.", translation: "Next week, on Friday." },
          ]
        },
        {
          type: "tip",
          text: "Tip: German grades go from 1 (best) to 6 (worst) — the opposite of many other countries! A grade 1 (sehr gut) is excellent, while a 5 or 6 means you need to repeat the work.",
          textDe: "Tipp: Deutsche Noten gehen von 1 (sehr gut) bis 6 (ungenügend) — umgekehrt zu vielen anderen Ländern!"
        }
      ]
    },
    {
      id: "a2-l5",
      level: "A2",
      number: 5,
      title: "Body and Health / Körper und Gesundheit",
      subtitle: "Vocabulary for the body and health",
      icon: "🏥",
      duration: "30 min",
      xp: 90,
      color: "#FF8B94",
      sections: [
        {
          type: "intro",
          title: "Body and Health",
          content: "It is important to know words about illness and health in German.",
          contentDe: "Es ist wichtig, Wörter über Krankheit und Gesundheit auf Deutsch zu kennen."
        },
        {
          type: "vocabulary",
          title: "Body Parts / Körperteile",
          words: [
            { german: "der Kopf", english: "head", example: "Ich habe Kopfschmerzen." },
            { german: "der Hals / die Kehle", english: "neck / throat", example: "Mein Hals tut weh." },
            { german: "der Bauch / der Magen", english: "belly / stomach", example: "Ich habe Bauchschmerzen." },
            { german: "der Arm / das Bein", english: "arm / leg", example: "Mein Arm ist gebrochen." },
            { german: "die Hand / der Fuß", english: "hand / foot", example: "Mein Fuß tut weh." },
            { german: "das Ohr / das Auge", english: "ear / eye", example: "Ich habe Ohrenschmerzen." },
            { german: "der Rücken", english: "back", example: "Ich habe Rückenschmerzen." },
          ]
        },
        {
          type: "grammar",
          title: "Expressing Pain / Schmerzen ausdrücken",
          items: [
            { pronoun: "Ich habe ... -schmerzen", verb: "compound noun", meaning: "Kopfschmerzen, Bauchschmerzen, Zahnschmerzen" },
            { pronoun: "Mein/Meine ... tut weh.", verb: "wehtun", meaning: "Mein Kopf tut weh. — My head hurts." },
            { pronoun: "Ich bin krank.", verb: "sein", meaning: "I am sick." },
            { pronoun: "Ich fühle mich nicht gut.", verb: "sich fühlen", meaning: "I don't feel well." },
            { pronoun: "Haben Sie Fieber?", verb: "haben", meaning: "Do you have a fever?" },
            { pronoun: "Seit wann?", verb: "seit + dative", meaning: "seit zwei Tagen — for two days" },
          ]
        },
        {
          type: "dialogue",
          title: "At the Doctor's / Beim Arzt",
          lines: [
            { speaker: "Dr.", text: "Guten Tag! Was fehlt Ihnen?", translation: "Good day! What is the matter?" },
            { speaker: "Patient", text: "Ich habe Kopfschmerzen und Fieber.", translation: "I have a headache and a fever." },
            { speaker: "Dr.", text: "Seit wann haben Sie das?", translation: "Since when have you had these symptoms?" },
            { speaker: "Patient", text: "Seit zwei Tagen. Mein Hals tut auch weh.", translation: "For two days. My throat hurts too." },
            { speaker: "Dr.", text: "Ich gebe Ihnen ein Rezept. Ruhen Sie sich aus!", translation: "I will give you a prescription. Get some rest!" },
          ]
        },
        {
          type: "vocabulary",
          title: "At the Pharmacy / In der Apotheke",
          words: [
            { german: "das Medikament / die Tablette", english: "medicine / tablet", example: "Nehmen Sie drei Tabletten am Tag." },
            { german: "das Rezept", english: "prescription", example: "Ich brauche ein Rezept." },
            { german: "die Allergie", english: "allergy", example: "Ich bin allergisch gegen Penicillin." },
            { german: "sich ausruhen", english: "to rest", example: "Ich muss mich ausruhen." },
          ]
        },
        {
          type: "tip",
          text: "Tip: In Germany, healthcare is very good and widely accessible. In an emergency dial 112 (ambulance) or 110 (police). At a pharmacy (Apotheke) you can buy many medicines without a prescription.",
          textDe: "Tipp: In Deutschland ist die Gesundheitsversorgung sehr gut. Im Notfall: 112 (Rettungsdienst) oder 110 (Polizei)."
        }
      ]
    },

    /* ── A2 GRAMMAR ── */
    {
      id: "a2-g1",
      level: "A2",
      type: "grammar",
      number: "G1",
      title: "The Dativ Case — Der Dativ",
      subtitle: "Indirect objects and dative prepositions",
      duration: "25 min",
      xp: 80,
      color: "#a78bfa",
      sections: [
        {
          type: "intro",
          title: "Why the Dativ?",
          content: "The Dativ (dative case) is used for the INDIRECT object — the person who receives or benefits from an action. It is also required after certain prepositions (mit, bei, von, zu, aus, nach, seit, gegenüber).",
          contentDe: "Der Dativ wird für das indirekte Objekt verwendet — die Person, der etwas gegeben oder zugutegetan wird. Er steht auch nach bestimmten Präpositionen."
        },
        {
          type: "grammar",
          title: "Dative Articles — Dativartikel",
          items: [
            { pronoun: "Masculine (der → dem)", verb: "Ich gebe dem Mann das Buch.", meaning: "I give the man the book." },
            { pronoun: "Feminine (die → der)", verb: "Ich helfe der Frau.", meaning: "I help the woman." },
            { pronoun: "Neuter (das → dem)", verb: "Ich sage dem Kind die Wahrheit.", meaning: "I tell the child the truth." },
            { pronoun: "Plural (die → den)", verb: "Ich helfe den Kindern.", meaning: "I help the children." },
            { pronoun: "ein → einem (m/n)", verb: "Ich gebe einem Freund das Buch.", meaning: "I give a friend the book." },
            { pronoun: "eine → einer (f)", verb: "Ich helfe einer Frau.", meaning: "I help a woman." },
          ]
        },
        {
          type: "grammar",
          title: "Dative Prepositions — Dativpräpositionen",
          items: [
            { pronoun: "mit", verb: "Ich fahre mit dem Bus.", meaning: "I travel by bus." },
            { pronoun: "bei", verb: "Ich bin bei meiner Mutter.", meaning: "I am at my mother's." },
            { pronoun: "von", verb: "Das Geschenk ist von meinem Freund.", meaning: "The gift is from my friend." },
            { pronoun: "zu", verb: "Ich gehe zum Arzt. (zu + dem)", meaning: "I go to the doctor." },
            { pronoun: "aus", verb: "Ich komme aus Deutschland.", meaning: "I come from Germany." },
            { pronoun: "nach", verb: "Ich fahre nach Berlin.", meaning: "I travel to Berlin." },
            { pronoun: "seit", verb: "Ich lerne seit zwei Jahren Deutsch.", meaning: "I have been learning German for two years." },
            { pronoun: "gegenüber", verb: "Das Café ist gegenüber dem Rathaus.", meaning: "The café is opposite the town hall." },
          ]
        },
        {
          type: "vocabulary",
          title: "Dative Verbs — common verbs that take dative",
          words: [
            { german: "helfen + Dat.", english: "to help", example: "Ich helfe dem Lehrer." },
            { german: "geben + Dat.", english: "to give (to)", example: "Sie gibt der Frau das Buch." },
            { german: "sagen + Dat.", english: "to say (to)", example: "Er sagt dem Kind die Wahrheit." },
            { german: "gehören + Dat.", english: "to belong to", example: "Das Buch gehört dem Schüler." },
            { german: "gefallen + Dat.", english: "to please / to like", example: "Das Lied gefällt mir. (I like the song)" },
            { german: "danken + Dat.", english: "to thank", example: "Ich danke dir sehr." },
          ]
        },
        {
          type: "tip",
          text: "Memory trick for 'gefallen': instead of 'I like X', think 'X is pleasing TO me' — Das gefällt MIR (mir = me, dative of ich). Similarly: Wie gefällt dir Berlin? — How do you like Berlin?",
          textDe: "Merkhilfe: 'Das gefällt mir' = Das ist mir angenehm. Frage: Wie gefällt dir Berlin? Antwort: Berlin gefällt mir sehr gut!"
        }
      ]
    },
    {
      id: "a2-g2",
      level: "A2",
      type: "grammar",
      number: "G2",
      title: "Word Order & Subordinate Clauses",
      subtitle: "Satzstruktur und Nebensätze",
      duration: "25 min",
      xp: 85,
      color: "#818cf8",
      sections: [
        {
          type: "intro",
          title: "German Word Order / Deutsche Satzstellung",
          content: "German word order follows clear rules. The most important: the VERB is always in position 2 in a main clause. In subordinate clauses introduced by conjunctions, the verb moves to the END.",
          contentDe: "Die deutsche Satzstellung folgt klaren Regeln: In Hauptsätzen steht das Verb immer an zweiter Stelle. In Nebensätzen (nach Konjunktionen) steht das Verb am Ende."
        },
        {
          type: "grammar",
          title: "V2 Rule — Verb Second",
          items: [
            { pronoun: "Normal order", verb: "Ich lerne heute Deutsch.", meaning: "Subject → Verb → Rest" },
            { pronoun: "Fronted element", verb: "Heute lerne ich Deutsch.", meaning: "Adverb → Verb → Subject" },
            { pronoun: "Fronted object", verb: "Deutsch lerne ich heute.", meaning: "Object → Verb → Subject" },
            { pronoun: "Modal verb", verb: "Ich will Deutsch lernen.", meaning: "Modal (pos.2) + Infinitive (end)" },
            { pronoun: "Separable verb", verb: "Ich stehe um 7 auf.", meaning: "Prefix goes to the END" },
          ]
        },
        {
          type: "grammar",
          title: "Subordinating Conjunctions — Verb goes to END",
          items: [
            { pronoun: "weil (because)", verb: "Ich lerne Deutsch, weil es schön ist.", meaning: "I learn German because it is beautiful." },
            { pronoun: "dass (that)", verb: "Ich glaube, dass er kommt.", meaning: "I believe that he is coming." },
            { pronoun: "wenn (when / if)", verb: "Wenn es regnet, bleibe ich zu Hause.", meaning: "When it rains I stay home." },
            { pronoun: "obwohl (although)", verb: "Obwohl es kalt ist, gehe ich raus.", meaning: "Although it is cold, I go out." },
            { pronoun: "weil + modal", verb: "..., weil ich Deutsch lernen will.", meaning: "Modal verb ALSO goes to end (after infinitive)" },
          ]
        },
        {
          type: "vocabulary",
          title: "Coordinating Conjunctions — no change to word order",
          words: [
            { german: "und", english: "and", example: "Ich lerne Deutsch und Englisch." },
            { german: "aber", english: "but", example: "Es ist kalt, aber schön." },
            { german: "oder", english: "or", example: "Kaffee oder Tee?" },
            { german: "denn", english: "because (causal)", example: "Ich lerne, denn ich will eine gute Note." },
            { german: "sondern", english: "but rather (after negation)", example: "Nicht Kaffee, sondern Tee." },
          ]
        },
        {
          type: "tip",
          text: "Key rule: 'weil' sends the verb to the end, 'denn' does NOT. Both mean 'because', but 'denn' is a coordinating conjunction (no change), while 'weil' is subordinating (verb at end). Compare: Ich komme nicht, denn ich bin krank. vs. Ich komme nicht, weil ich krank bin.",
          textDe: "Merkhilfe: 'denn' = koordinierend (keine Änderung), 'weil' = subordinierend (Verb ans Ende). Ich komme nicht, denn ich bin krank. / Ich komme nicht, weil ich krank bin."
        }
      ]
    },

    /* ── A2 STORIES ── */
    {
      id: "a2-s1",
      level: "A2",
      type: "story",
      number: "S1",
      title: "Mein erster Tag in Deutschland",
      subtitle: "A short story — read and understand German",
      duration: "20 min",
      xp: 70,
      color: "#34d399",
      sections: [
        {
          type: "story_text",
          title: "Mein erster Tag in Deutschland",
          level: "A2",
          paragraphs: [
            {
              text: "Es ist Montag, der 3. März. Carlos kommt aus Spanien und fliegt zum ersten Mal nach Deutschland. Er landet um 8 Uhr morgens am Flughafen München.",
              translation: "It is Monday, 3rd March. Carlos comes from Spain and flies to Germany for the first time. He lands at 8 o'clock in the morning at Munich Airport."
            },
            {
              text: "Am Flughafen ist alles auf Deutsch. Carlos sieht viele Schilder. Er liest: 'Ausgang', 'Gepäck', 'Taxi'. Er kennt diese Wörter aus seinem Deutschkurs.",
              translation: "At the airport everything is in German. Carlos sees many signs. He reads: 'Exit', 'Luggage', 'Taxi'. He knows these words from his German course."
            },
            {
              text: "Er nimmt ein Taxi zum Hotel. Der Taxifahrer fragt: 'Wohin fahren Sie?' Carlos antwortet: 'Ins Zentrum, bitte. Zum Hotel Adler.' Der Taxifahrer lächelt und sagt: 'Ihr Deutsch ist sehr gut!'",
              translation: "He takes a taxi to the hotel. The taxi driver asks: 'Where are you going?' Carlos answers: 'To the centre, please. To the Hotel Adler.' The driver smiles and says: 'Your German is very good!'"
            },
            {
              text: "Im Hotel macht Carlos das Fenster auf. Er sieht die Stadt: alte Kirchen, grüne Parks und viele Cafés. Er denkt: 'Ich bin glücklich. Ich bin endlich in Deutschland!'",
              translation: "In the hotel, Carlos opens the window. He sees the city: old churches, green parks and many cafés. He thinks: 'I am happy. I am finally in Germany!'"
            },
            {
              text: "Am Abend geht er in ein Restaurant. Er bestellt auf Deutsch: 'Ich möchte bitte ein Schnitzel mit Pommes und ein Bier.' Die Kellnerin antwortet auf Deutsch. Carlos versteht fast alles. Er ist sehr stolz.",
              translation: "In the evening he goes to a restaurant. He orders in German: 'I would like a schnitzel with chips and a beer, please.' The waitress answers in German. Carlos understands almost everything. He is very proud."
            }
          ],
          vocabulary: [
            { german: "fliegen / landen", english: "to fly / to land", example: "Er fliegt nach Deutschland." },
            { german: "das Schild", english: "sign", example: "Das Schild sagt 'Ausgang'." },
            { german: "der Ausgang", english: "exit", example: "Der Ausgang ist rechts." },
            { german: "das Gepäck", english: "luggage", example: "Mein Gepäck ist schwer." },
            { german: "lächeln", english: "to smile", example: "Er lächelt freundlich." },
            { german: "glücklich / stolz", english: "happy / proud", example: "Ich bin glücklich und stolz." },
            { german: "bestellen", english: "to order (in restaurant)", example: "Ich möchte ein Schnitzel bestellen." },
            { german: "der Kellner / die Kellnerin", english: "waiter / waitress", example: "Die Kellnerin ist sehr nett." },
            { german: "endlich", english: "finally / at last", example: "Ich bin endlich zu Hause!" },
            { german: "fast alles", english: "almost everything", example: "Ich verstehe fast alles." },
          ]
        },
        {
          type: "tip",
          text: "Reading tip: Don't look up every word. Read the full paragraph first, then the translation below. Try to identify: Who? (Wer) — What? (Was) — Where? (Wo) — When? (Wann). This builds real reading comprehension.",
          textDe: "Lesetipp: Versuche, zuerst den ganzen Absatz zu lesen, bevor du die Übersetzung schaust. Identifiziere: Wer? Was? Wo? Wann?"
        }
      ]
    },
    {
      id: "a2-s2",
      level: "A2",
      type: "story",
      number: "S2",
      title: "Das Vorstellungsgespräch",
      subtitle: "A job interview — real-world German",
      duration: "20 min",
      xp: 75,
      color: "#60a5fa",
      sections: [
        {
          type: "story_text",
          title: "Das Vorstellungsgespräch",
          level: "A2",
          paragraphs: [
            {
              text: "Sophie ist 24 Jahre alt und sucht einen Job. Sie hat eine E-Mail bekommen: 'Wir laden Sie zu einem Vorstellungsgespräch ein. Termin: Mittwoch, 10 Uhr.'",
              translation: "Sophie is 24 years old and is looking for a job. She has received an email: 'We invite you to a job interview. Appointment: Wednesday, 10 o'clock.'"
            },
            {
              text: "Am Mittwoch zieht sie sich elegant an und fährt mit der U-Bahn in die Firma. Sie ist zehn Minuten früher da. 'Pünktlichkeit ist sehr wichtig in Deutschland', denkt sie.",
              translation: "On Wednesday she dresses elegantly and takes the metro to the company. She arrives ten minutes early. 'Punctuality is very important in Germany', she thinks."
            },
            {
              text: "Der Chef heißt Herr Wagner. Er fragt: 'Warum möchten Sie bei uns arbeiten?' Sophie antwortet: 'Weil Ihre Firma sehr innovativ ist und ich gerne im Team arbeite.'",
              translation: "The manager is called Mr Wagner. He asks: 'Why would you like to work with us?' Sophie answers: 'Because your company is very innovative and I like working in a team.'"
            },
            {
              text: "Dann fragt er: 'Was sind Ihre Stärken?' Sophie sagt: 'Ich bin zuverlässig, lerne schnell und kann gut mit Menschen kommunizieren.' Herr Wagner nickt und lächelt.",
              translation: "Then he asks: 'What are your strengths?' Sophie says: 'I am reliable, learn quickly and can communicate well with people.' Mr Wagner nods and smiles."
            },
            {
              text: "Nach dem Gespräch sagt Herr Wagner: 'Wir melden uns bis Freitag.' Sophie fährt nach Hause und wartet. Am Donnerstag klingelt ihr Telefon. Die Firma ruft an: 'Herzlichen Glückwunsch! Sie haben den Job!'",
              translation: "After the interview Mr Wagner says: 'We will get back to you by Friday.' Sophie goes home and waits. On Thursday her phone rings. The company calls: 'Congratulations! You have got the job!'"
            }
          ],
          vocabulary: [
            { german: "das Vorstellungsgespräch", english: "job interview", example: "Ich habe ein Vorstellungsgespräch morgen." },
            { german: "einladen", english: "to invite", example: "Sie lädt mich zum Gespräch ein." },
            { german: "pünktlich", english: "punctual / on time", example: "Sei bitte pünktlich!" },
            { german: "die Stärke", english: "strength", example: "Meine Stärke ist Kommunikation." },
            { german: "zuverlässig", english: "reliable", example: "Er ist sehr zuverlässig." },
            { german: "sich melden", english: "to get in touch / to call back", example: "Wir melden uns bald." },
            { german: "nicken", english: "to nod", example: "Er nickt, wenn er zustimmt." },
            { german: "herzlichen Glückwunsch", english: "congratulations", example: "Herzlichen Glückwunsch zum Geburtstag!" },
            { german: "die U-Bahn", english: "metro / underground", example: "Ich fahre mit der U-Bahn." },
            { german: "innovativ", english: "innovative", example: "Die Firma ist sehr innovativ." },
          ]
        },
        {
          type: "tip",
          text: "Culture tip: In Germany, punctuality (Pünktlichkeit) is extremely important, especially in a professional context. Arriving 5–10 minutes early to a job interview is standard. Being late without notice is considered very impolite.",
          textDe: "Kulturtipp: In Deutschland ist Pünktlichkeit sehr wichtig, besonders im Beruf. 5–10 Minuten zu früh kommen beim Vorstellungsgespräch ist Standard."
        }
      ]
    }
  ]
};

export const getLessonsByLevel = (level) => lessons[level] || [];
export const getLessonById = (id) => {
  for (const level of Object.values(lessons)) {
    const lesson = level.find(l => l.id === id);
    if (lesson) return lesson;
  }
  return null;
};
