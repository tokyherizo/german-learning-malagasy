import { k4Lessons } from './k4lessons.js';
import { k5Lessons } from './k5lessons.js';
import { k6Lessons } from './k6lessons.js';
import { k7Lessons } from './k7lessons.js';
import { k8Lessons } from './k8lessons.js';
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
    ,
    // ── KAPITEL 2 — complete lessons ─────────────────────────────────────

    {
      id: "a1-k2-buero",
      level: "A1",
      number: "K2·A1",
      title: "Im Büro — Am Arbeitsplatz",
      subtitle: "Vocabulaire du bureau, objets, meubles et activités professionnelles",
      icon: "💼",
      duration: "18 min",
      xp: 55,
      color: "#34d399",
      sections: [
        {
          type: "intro",
          title: "Willkommen im deutschen Büro!",
          content: "The workplace is one of the most important settings for using German. Whether you work in an office, meet German colleagues, or study in Germany, you need to know the objects around you, the activities you do, and how to interact politely with coworkers. Let's explore the German office!",
          contentDe: "Der Arbeitsplatz ist einer der wichtigsten Orte für Deutsch. Ob du in einem Büro arbeitest, deutsche Kollegen hast oder in Deutschland studierst — du musst die Gegenstände um dich herum und die Aktivitäten kennen."
        },
        {
          type: "vocabulary",
          title: "Büromöbel und Gegenstände — Office furniture & objects",
          words: [
            { german: "der Schreibtisch (-e)", english: "the desk", example: "Mein Schreibtisch steht am Fenster." },
            { german: "der Computer (-)", english: "the computer", example: "Ich arbeite den ganzen Tag am Computer." },
            { german: "der Drucker (-)", english: "the printer", example: "Der Drucker funktioniert nicht." },
            { german: "das Telefon (-e)", english: "the telephone", example: "Das Telefon klingelt. Ich gehe ran." },
            { german: "das Handy (-s)", english: "the mobile phone", example: "Hast du mein Handy gesehen?" },
            { german: "der Stuhl (Stühle)", english: "the chair", example: "Dieser Stuhl ist nicht sehr bequem." },
            { german: "der Schrank (Schränke)", english: "the cupboard / cabinet", example: "Die Akten sind im Schrank." },
            { german: "das Regal (-e)", english: "the shelf / bookcase", example: "Die Bücher stehen im Regal." },
            { german: "der Stift (-e)", english: "the pen / pencil", example: "Leihst du mir einen Stift?" },
            { german: "das Papier (-e)", english: "the paper", example: "Ich brauche mehr Papier für den Drucker." },
            { german: "die Akte (-n)", english: "the file / document folder", example: "Die Akte liegt auf dem Tisch." },
            { german: "die Besprechung (-en)", english: "the meeting", example: "Wir haben um 10 Uhr eine Besprechung." },
          ]
        },
        {
          type: "grammar",
          title: "Büroaktivitäten — Was macht man im Büro?",
          items: [
            { pronoun: "arbeiten", verb: "ich arbeite / du arbeitest / er arbeitet", meaning: "to work — Ich arbeite von 9 bis 17 Uhr." },
            { pronoun: "schreiben", verb: "ich schreibe / du schreibst / er schreibt", meaning: "to write — Sie schreibt eine E-Mail." },
            { pronoun: "lesen", verb: "ich lese / du liest / er liest", meaning: "to read — Er liest den Bericht." },
            { pronoun: "telefonieren", verb: "ich telefoniere / du telefonierst", meaning: "to call — Ich telefoniere mit dem Kunden." },
            { pronoun: "besprechen", verb: "wir besprechen / ihr besprecht", meaning: "to discuss — Wir besprechen das Projekt." },
            { pronoun: "drucken", verb: "ich drucke / du druckst", meaning: "to print — Druckst du das Dokument aus?" },
            { pronoun: "senden / schicken", verb: "ich sende / ich schicke", meaning: "to send — Ich schicke dir die Datei." },
          ]
        },
        {
          type: "dialogue",
          title: "Erster Arbeitstag — Der erste Tag im Büro",
          lines: [
            { speaker: "Chef", text: "Guten Morgen! Ich bin Herr Wagner, Ihr Abteilungsleiter.", translation: "Good morning! I'm Mr Wagner, your department manager." },
            { speaker: "Neuer MA", text: "Guten Morgen, Herr Wagner! Ich bin Laila Benkhalil. Freut mich!", translation: "Good morning, Mr Wagner! I'm Laila Benkhalil. Nice to meet you!" },
            { speaker: "Chef", text: "Das ist Ihr Schreibtisch — mit Computer, Telefon und Drucker. Alles funktioniert.", translation: "This is your desk — with computer, phone and printer. Everything works." },
            { speaker: "Neuer MA", text: "Sehr gut! Wo finde ich die Akten?", translation: "Very good! Where can I find the files?" },
            { speaker: "Chef", text: "Im Schrank links. Und Stifte und Papier im Regal daneben.", translation: "In the cabinet on the left. And pens and paper in the shelf next to it." },
            { speaker: "Neuer MA", text: "Danke! Wann beginnt die erste Besprechung?", translation: "Thank you! When does the first meeting start?" },
            { speaker: "Chef", text: "Um 10 Uhr. Bis dann!", translation: "At 10 o'clock. See you then!" },
          ]
        },
        {
          type: "vocabulary",
          title: "Kollegeninteraktion — Talking with colleagues",
          words: [
            { german: "Entschuldigung, können Sie mir helfen?", english: "Excuse me, can you help me?", example: "Entschuldigung, können Sie mir helfen? Wo ist der Drucker?" },
            { german: "Leihst du mir…?", english: "Can you lend me…? (informal)", example: "Leihst du mir deinen Stift?" },
            { german: "Ich bin neu hier.", english: "I am new here.", example: "Ich bin neu hier. Wo ist die Kaffeemaschine?" },
            { german: "Feierabend!", english: "End of the workday! / Time to go home!", example: "Es ist 17 Uhr. Feierabend! Schönen Abend!" },
            { german: "Einen schönen Feierabend!", english: "Have a nice evening! (leaving work)", example: "Tschüss! Einen schönen Feierabend!" },
            { german: "die Kaffeepause (-n)", english: "the coffee break", example: "Um 10:30 machen wir Kaffeepause." },
          ]
        },
        {
          type: "tip",
          text: "German work culture: Punctuality is sacred — being 5 minutes late is considered rude. Always say 'Guten Morgen' when arriving and 'Auf Wiedersehen' or 'Tschüss' when leaving. 'Feierabend!' (literally 'celebration evening') is said when the workday ends — it's a cherished cultural concept meaning complete switch-off from work. Do NOT email German colleagues after hours!",
          textDe: "Deutsche Arbeitskultur: Pünktlichkeit ist heilig — 5 Minuten zu spät ist unhöflich. Immer 'Guten Morgen' beim Ankommen sagen. 'Feierabend!' ist ein wichtiges Konzept — echte Abgrenzung von der Arbeit. Nach der Arbeitszeit NICHT schreiben!"
        }
      ]
    },

    {
      id: "a1-k2-uni",
      level: "A1",
      number: "K2·A2",
      title: "An der Universität",
      subtitle: "La vie universitaire allemande — cours, bibliothèque, mensa et camarades",
      icon: "🎓",
      duration: "15 min",
      xp: 50,
      color: "#34d399",
      sections: [
        {
          type: "intro",
          title: "Willkommen an der deutschen Uni!",
          content: "German universities (Universitäten) are among the world's best. They are mostly free for EU students! University life revolves around lectures (Vorlesungen), seminars (Seminare), the library (Bibliothek), the cafeteria (Mensa) and study groups. Let's learn the essential vocabulary.",
          contentDe: "Deutsche Universitäten gehören zu den besten der Welt und sind für EU-Studierende meist kostenlos! Das Unileben dreht sich um Vorlesungen, Seminare, die Bibliothek, die Mensa und Lerngruppen."
        },
        {
          type: "vocabulary",
          title: "An der Universität — Universitätsvokabular",
          words: [
            { german: "die Universität / die Uni (-en)", english: "the university", example: "Ich studiere an der Universität Berlin." },
            { german: "die Vorlesung (-en)", english: "the lecture (large class)", example: "Die Vorlesung beginnt um 8 Uhr." },
            { german: "das Seminar (-e)", english: "the seminar (small group)", example: "Im Seminar diskutieren wir viel." },
            { german: "die Bibliothek (-en)", english: "the library", example: "Ich lerne in der Bibliothek." },
            { german: "die Mensa (Mensen)", english: "the university cafeteria", example: "Das Mittagessen in der Mensa kostet 3 Euro." },
            { german: "der Hörsaal (Hörsäle)", english: "the lecture hall / auditorium", example: "Der Hörsaal hat 500 Plätze." },
            { german: "der Professor / die Professorin", english: "the professor (m/f)", example: "Professor Müller erklärt sehr gut." },
            { german: "der Student / die Studentin (-en)", english: "the student (m/f)", example: "Ich bin Studentin im zweiten Semester." },
            { german: "das Semester (-)", english: "the semester", example: "Das Wintersemester beginnt im Oktober." },
            { german: "die Hausarbeit (-en)", english: "the essay / term paper", example: "Ich schreibe gerade meine Hausarbeit." },
            { german: "die Prüfung (-en)", english: "the exam", example: "Die Prüfung ist am Freitag. Ich bin nervös!" },
            { german: "das Stipendium (Stipendien)", english: "the scholarship", example: "Sie hat ein Stipendium vom DAAD." },
          ]
        },
        {
          type: "dialogue",
          title: "In der Mensa — Erste Begegnung",
          lines: [
            { speaker: "Kai", text: "Ist dieser Platz noch frei?", translation: "Is this seat still free?" },
            { speaker: "Sofia", text: "Ja, natürlich! Setz dich. Ich bin Sofia.", translation: "Yes, of course! Sit down. I'm Sofia." },
            { speaker: "Kai", text: "Danke! Ich bin Kai. Studierst du hier auch?", translation: "Thanks! I'm Kai. Do you also study here?" },
            { speaker: "Sofia", text: "Ja, ich studiere Medizin im dritten Semester. Und du?", translation: "Yes, I study medicine in the third semester. And you?" },
            { speaker: "Kai", text: "Ich studiere Informatik, erstes Semester. Hast du gerade eine Vorlesung?", translation: "I study computer science, first semester. Do you have a lecture now?" },
            { speaker: "Sofia", text: "Nein, ich lerne für die Prüfung am Freitag. Ich bin total gestresst!", translation: "No, I'm studying for the exam on Friday. I'm totally stressed!" },
            { speaker: "Kai", text: "Viel Erfolg! Ich gehe jetzt in die Bibliothek.", translation: "Good luck! I'm going to the library now." },
          ]
        },
        {
          type: "grammar",
          title: "Universitätsverben — Key verbs at uni",
          items: [
            { pronoun: "studieren", verb: "ich studiere Informatik", meaning: "to study (at university) — NOT 'lernen'!" },
            { pronoun: "lernen", verb: "ich lerne für die Prüfung", meaning: "to study/learn (a subject, exam prep)" },
            { pronoun: "besuchen", verb: "ich besuche eine Vorlesung", meaning: "to attend (a lecture/event)" },
            { pronoun: "schreiben", verb: "ich schreibe eine Hausarbeit", meaning: "to write (an essay)" },
            { pronoun: "verstehen", verb: "ich verstehe die Erklärung", meaning: "to understand" },
            { pronoun: "fragen", verb: "ich frage den Professor", meaning: "to ask" },
            { pronoun: "bestehen", verb: "ich bestehe die Prüfung", meaning: "to pass (an exam) ↔ durchfallen = to fail" },
          ]
        },
        {
          type: "tip",
          text: "Key distinction: studieren vs. lernen. 'Ich studiere Medizin' = I study medicine (at university, as a degree). 'Ich lerne Deutsch' = I'm learning German (any context). NEVER say 'Ich studiere Deutsch' — that would mean you're doing a university degree in German. Say 'Ich lerne Deutsch'. Also: German semesters run Oct–Feb (Wintersemester) and Apr–Jul (Sommersemester).",
          textDe: "Wichtiger Unterschied: studieren vs. lernen. 'Ich studiere Medizin' = universitäres Studium. 'Ich lerne Deutsch' = Sprache lernen (in jedem Kontext). Nie 'Ich studiere Deutsch' sagen wenn du Deutsch lernst! Das Semester: Oktober–Februar (Winter) und April–Juli (Sommer)."
        }
      ]
    },

    {
      id: "a1-k2-freizeit",
      level: "A1",
      number: "K2·A3",
      title: "Freizeit — Hobbys und Aktivitäten",
      subtitle: "Sports, loisirs, sorties entre amis — Ich spiele, ich höre, ich mache…",
      icon: "⚽",
      duration: "15 min",
      xp: 45,
      color: "#34d399",
      sections: [
        {
          type: "intro",
          title: "Was machst du in deiner Freizeit?",
          content: "Free time (Freizeit) is extremely important in German culture! Germans work hard, but when Feierabend comes, they protect their private time. Sports, culture, socializing — Germans pursue hobbies with great enthusiasm. Let's learn to talk about what we love doing.",
          contentDe: "Freizeit ist in der deutschen Kultur extrem wichtig! Deutsche arbeiten hart, aber wenn Feierabend ist, schützen sie ihre Freizeit. Sport, Kultur, Freunde — Hobbys werden mit großem Enthusiasmus verfolgt."
        },
        {
          type: "vocabulary",
          title: "Freizeitaktivitäten — Leisure activities",
          words: [
            { german: "Fußball spielen", english: "to play football/soccer", example: "Ich spiele jeden Samstag Fußball." },
            { german: "Tennis spielen", english: "to play tennis", example: "Spielst du Tennis? Ja, zweimal pro Woche." },
            { german: "Gitarre spielen", english: "to play guitar", example: "Er spielt sehr gut Gitarre." },
            { german: "Musik hören", english: "to listen to music", example: "Ich höre gerne Musik beim Kochen." },
            { german: "Bücher lesen", english: "to read books", example: "Liest du gern? Ich lese jeden Abend." },
            { german: "ins Kino gehen", english: "to go to the cinema", example: "Gehen wir am Wochenende ins Kino?" },
            { german: "ins Restaurant gehen", english: "to go to a restaurant", example: "Wir gehen freitags oft ins Restaurant." },
            { german: "kochen", english: "to cook", example: "Ich koche gerne — heute gibt es Pasta!" },
            { german: "wandern", english: "to hike", example: "Am Wochenende wandern wir in den Bergen." },
            { german: "reisen", english: "to travel", example: "Im Sommer reise ich nach Portugal." },
            { german: "schwimmen", english: "to swim", example: "Sie schwimmt jeden Morgen im Freibad." },
            { german: "Yoga machen", english: "to do yoga", example: "Ich mache dreimal pro Woche Yoga." },
          ]
        },
        {
          type: "grammar",
          title: "Wie oft? — Talking about frequency",
          items: [
            { pronoun: "jeden Tag", verb: "Ich lese jeden Tag.", meaning: "every day" },
            { pronoun: "jede Woche", verb: "Wir spielen jede Woche Fußball.", meaning: "every week" },
            { pronoun: "am Wochenende", verb: "Am Wochenende gehe ich wandern.", meaning: "at the weekend" },
            { pronoun: "manchmal", verb: "Ich gehe manchmal ins Kino.", meaning: "sometimes" },
            { pronoun: "oft", verb: "Hörst du oft Musik?", meaning: "often" },
            { pronoun: "selten", verb: "Ich reise leider selten.", meaning: "rarely" },
            { pronoun: "nie", verb: "Ich spiele nie Tennis.", meaning: "never" },
            { pronoun: "zweimal pro Woche", verb: "Ich schwimme zweimal pro Woche.", meaning: "twice a week" },
          ]
        },
        {
          type: "dialogue",
          title: "Beim Kaffee — Was machst du gerne?",
          lines: [
            { speaker: "Anna", text: "Hey Mehdi! Was machst du eigentlich in deiner Freizeit?", translation: "Hey Mehdi! What do you actually do in your free time?" },
            { speaker: "Mehdi", text: "Ich spiele Fußball, zweimal pro Woche. Und ich höre viel Musik. Du?", translation: "I play football, twice a week. And I listen to a lot of music. You?" },
            { speaker: "Anna", text: "Ich lese gerne — meistens abends. Und am Wochenende gehe ich wandern.", translation: "I like reading — mostly in the evenings. And at the weekend I go hiking." },
            { speaker: "Mehdi", text: "Oh cool! Wo wanderst du?", translation: "Oh cool! Where do you hike?" },
            { speaker: "Anna", text: "Meistens im Schwarzwald. Das ist wunderschön! Gehst du manchmal ins Kino?", translation: "Mostly in the Black Forest. It's beautiful! Do you sometimes go to the cinema?" },
            { speaker: "Mehdi", text: "Ja, ich gehe oft ins Kino — jeden Freitag fast! Magst du Actionfilme?", translation: "Yes, I often go to the cinema — almost every Friday! Do you like action films?" },
            { speaker: "Anna", text: "Nein, nicht so sehr. Ich mag lieber Dramen. Aber zusammen gehen — warum nicht?", translation: "No, not so much. I prefer dramas. But going together — why not?" },
          ]
        },
        {
          type: "tip",
          text: "The verb 'spielen' (to play) is used for sports WITH a ball AND for musical instruments: Fußball spielen, Tennis spielen, Gitarre spielen, Klavier spielen. But for other sports you use their own verb or 'machen': schwimmen, wandern, laufen, Yoga machen, Sport machen. Also: 'gern(e)' means 'like to' — 'Ich lese gerne' = I like reading.",
          textDe: "Das Verb 'spielen' benutzt man für Sport MIT Ball UND Musikinstrumente: Fußball spielen, Gitarre spielen. Aber andere Sportarten haben eigene Verben oder 'machen': schwimmen, wandern, Yoga machen. Und: 'gerne' bedeutet 'mögen' — 'Ich schwimme gerne' = Ich mag schwimmen."
        }
      ]
    },

    {
      id: "a1-k2-kultur",
      level: "A1",
      number: "K2·B",
      title: "Arbeits- und Studienkultur in Deutschland",
      subtitle: "Culture professionnelle et universitaire — Feierabend, ponctualité, valeurs",
      icon: "🏢",
      duration: "10 min",
      xp: 35,
      color: "#34d399",
      sections: [
        {
          type: "intro",
          title: "Was ist typisch deutsch am Arbeitsplatz?",
          content: "Understanding German work and study culture helps you fit in and communicate effectively. Germany has a strong work ethic combined with a deep respect for private time. Punctuality, directness, structure, and quality are core values. Knowing these cultural norms prevents misunderstandings and builds trust.",
          contentDe: "Die deutsche Arbeits- und Studienkultur zu verstehen hilft dir, dich anzupassen. Deutschland hat eine starke Arbeitsethik, kombiniert mit tiefem Respekt für Freizeit. Pünktlichkeit, Direktheit, Struktur und Qualität sind Kernwerte."
        },
        {
          type: "vocabulary",
          title: "Arbeitskulturelle Schlüsselwörter",
          words: [
            { german: "pünktlich (sein)", english: "to be punctual / on time", example: "In Deutschland muss man pünktlich sein!" },
            { german: "der Feierabend", english: "end of workday; after-work time", example: "Es ist 17 Uhr. Feierabend! Ich gehe jetzt." },
            { german: "die Überstunden (Pl.)", english: "overtime hours", example: "Ich mache heute Überstunden — bis 19 Uhr." },
            { german: "der Urlaub (-e)", english: "vacation / annual leave", example: "Deutsche haben ca. 30 Urlaubstage pro Jahr." },
            { german: "die Work-Life-Balance", english: "work-life balance", example: "Eine gute Work-Life-Balance ist wichtig." },
            { german: "das Betriebsklima", english: "workplace atmosphere / team culture", example: "Das Betriebsklima hier ist sehr freundlich." },
            { german: "die Besprechung → das Meeting", english: "meeting (formal/informal term)", example: "Wir haben um 9 Uhr ein Meeting." },
            { german: "direkt (sein)", english: "to be direct / straightforward", example: "Deutsche sind oft sehr direkt — das ist normal!" },
          ]
        },
        {
          type: "grammar",
          title: "Typische Phrasen am Arbeitsplatz",
          items: [
            { pronoun: "Pünktlichkeit", verb: "Ich bin pünktlich. / Ich komme pünktlich.", meaning: "Being on time — core German value" },
            { pronoun: "Ankunft morgens", verb: "Guten Morgen! / Morgen!", meaning: "Greet every colleague you see individually" },
            { pronoun: "Feierabend machen", verb: "Ich mache jetzt Feierabend.", meaning: "I'm done for the day — said when leaving" },
            { pronoun: "Urlaub nehmen", verb: "Ich nehme nächste Woche Urlaub.", meaning: "I'm taking vacation next week" },
            { pronoun: "krank sein", verb: "Ich bin krank. Ich komme nicht.", meaning: "I'm sick. I won't come in." },
            { pronoun: "Überstunden machen", verb: "Ich mache heute Überstunden.", meaning: "I'm working overtime today" },
          ]
        },
        {
          type: "tip",
          text: "5 rules for German work culture: 1) Arrive ON TIME (ideally 5 min early). 2) Greet every single person in the room. 3) Separate work and private life — Germans rarely become close friends with colleagues. 4) Be direct — 'no' means no, feedback is honest. 5) Feierabend is sacred — don't call or message after hours unless it's an emergency. These norms also apply at university!",
          textDe: "5 Regeln für die deutsche Arbeitskultur: 1) Pünktlich ankommen (5 Min früher). 2) Jeden einzeln begrüßen. 3) Arbeit und Privatleben trennen. 4) Direkt sein — 'Nein' bedeutet Nein. 5) Feierabend ist heilig — nach der Arbeitszeit nicht kontaktieren. Diese Normen gelten auch an der Uni!"
        }
      ]
    },

    {
      id: "a1-k2-akkusativ",
      level: "A1",
      number: "K2·C1",
      title: "Der Akkusativ — Die Nomengruppe",
      subtitle: "Le cas accusatif : articles définis et indéfinis au cas COD",
      icon: "📐",
      duration: "20 min",
      xp: 60,
      color: "#34d399",
      sections: [
        {
          type: "intro",
          title: "Was ist der Akkusativ? — Le complément d'objet direct",
          content: "German has 4 grammatical cases. You already know the Nominativ (subject of the sentence). Now meet the Akkusativ: it marks the DIRECT OBJECT — the person or thing that is directly affected by the action. In 'I see the man', 'the man' is in the Akkusativ. The good news: only masculine articles change!",
          contentDe: "Deutsch hat 4 Fälle. Du kennst schon den Nominativ (Subjekt). Jetzt lernst du den Akkusativ: Er markiert das DIREKTE OBJEKT — die Person oder Sache, die direkt von der Handlung betroffen ist. Die gute Nachricht: Nur maskuline Artikel ändern sich!"
        },
        {
          type: "grammar",
          title: "Artikel im Akkusativ — The article table",
          items: [
            { pronoun: "Maskulin (m) ← ÄNDERT SICH!", verb: "Nominativ: der / ein", meaning: "Akkusativ: DEN / EINEN" },
            { pronoun: "Feminin (f) — gleich", verb: "Nominativ: die / eine", meaning: "Akkusativ: die / eine" },
            { pronoun: "Neutrum (n) — gleich", verb: "Nominativ: das / ein", meaning: "Akkusativ: das / ein" },
            { pronoun: "Plural (Pl.) — gleich", verb: "Nominativ: die / (−)", meaning: "Akkusativ: die / (−)" },
            { pronoun: "Merksatz:", verb: "Nur maskulin ändert sich!", meaning: "der → den · ein → einen" },
          ]
        },
        {
          type: "grammar",
          title: "Akkusativ in Sätzen — Praktische Beispiele",
          items: [
            { pronoun: "Ich sehe (den / einen) Mann.", verb: "m: DEN Mann / EINEN Mann", meaning: "I see the man / a man. (Akk. m)" },
            { pronoun: "Ich kaufe (die / eine) Tasche.", verb: "f: die Tasche / eine Tasche", meaning: "I buy the bag / a bag. (Akk. f = same)" },
            { pronoun: "Er hat (das / ein) Buch.", verb: "n: das Buch / ein Buch", meaning: "He has the book / a book. (Akk. n = same)" },
            { pronoun: "Sie trinkt (keinen) Kaffee.", verb: "m: keinen Kaffee", meaning: "She drinks no coffee. (kein → keinen, m)" },
            { pronoun: "Wir haben (keine) Zeit.", verb: "f: keine Zeit", meaning: "We have no time. (keine = same, f)" },
            { pronoun: "Ich brauche (einen) Drucker.", verb: "m: EINEN Drucker", meaning: "I need a printer. (ein → einen, m)" },
          ]
        },
        {
          type: "vocabulary",
          title: "Typische Akkusativ-Verben — Verbs that take Akkusativ",
          words: [
            { german: "haben + Akk.", english: "to have", example: "Ich habe einen Computer. Sie hat keine Zeit." },
            { german: "sehen + Akk.", english: "to see", example: "Ich sehe den Drucker nicht." },
            { german: "kaufen + Akk.", english: "to buy", example: "Er kauft einen neuen Stuhl." },
            { german: "brauchen + Akk.", english: "to need", example: "Ich brauche einen Stift!" },
            { german: "suchen + Akk.", english: "to look for", example: "Suchst du das Büro von Herrn Wagner?" },
            { german: "finden + Akk.", english: "to find", example: "Ich finde die Akte nicht." },
            { german: "lesen + Akk.", english: "to read", example: "Sie liest einen Bericht." },
            { german: "trinken + Akk.", english: "to drink", example: "Er trinkt einen Kaffee." },
          ]
        },
        {
          type: "tip",
          text: "Memory trick for the Akkusativ: Think of a crime scene! The Nominativ (N) is the SUBJECT (the 'doer' — the crime INVESTIGATOR). The Akkusativ (A) is the OBJECT (the 'victim' of the action). 'Der Mann kauft DEN Computer.' — 'der Mann' investigates, 'den Computer' is the victim of the buying! Only masculine changes: der→den, ein→einen, kein→keinen.",
          textDe: "Merkhilfe: Denke an einen Tatort! Der Nominativ ist das SUBJEKT (der Täter). Der Akkusativ ist das OBJEKT (das Opfer der Handlung). 'Der Mann kauft DEN Computer.' — Nur maskulин ändert sich: der→den, ein→einen, kein→keinen. Feminin, Neutrum und Plural bleiben gleich."
        }
      ]
    },

    {
      id: "a1-k2-verben",
      level: "A1",
      number: "K2·C2",
      title: "Verben: haben, arbeiten, spielen",
      subtitle: "Conjugaison de haben et des verbes réguliers en -en au présent",
      icon: "⚙️",
      duration: "15 min",
      xp: 50,
      color: "#34d399",
      sections: [
        {
          type: "intro",
          title: "Die zwei wichtigsten Verbtypen im Deutschen",
          content: "In German, most verbs follow a regular pattern in the present tense. The verb 'haben' (to have) is irregular and extremely important — you'll use it in almost every conversation. Together, these verbs unlock hundreds of sentences about work, hobbies, possessions, and daily life.",
          contentDe: "Im Deutschen folgen die meisten Verben einem regelmäßigen Muster im Präsens. Das Verb 'haben' ist unregelmäßig und extrem wichtig — du brauchst es in fast jedem Gespräch."
        },
        {
          type: "grammar",
          title: "haben — Vollständige Konjugation (Präsens)",
          items: [
            { pronoun: "ich", verb: "habe", meaning: "Ich habe einen Bruder." },
            { pronoun: "du", verb: "hast", meaning: "Hast du Zeit?" },
            { pronoun: "er / sie / es", verb: "hat", meaning: "Er hat ein Auto. Sie hat keine Zeit." },
            { pronoun: "wir", verb: "haben", meaning: "Wir haben eine Besprechung." },
            { pronoun: "ihr", verb: "habt", meaning: "Habt ihr einen Drucker?" },
            { pronoun: "sie / Sie", verb: "haben / haben", meaning: "Sie haben viel Arbeit. / Was haben Sie?" },
          ]
        },
        {
          type: "grammar",
          title: "Regelmäßige Verben auf -en: arbeiten, spielen, kochen…",
          items: [
            { pronoun: "Stamm + Endung:", verb: "arbeit- + en = arbeiten", meaning: "Remove -en → add endings" },
            { pronoun: "ich", verb: "-e → ich arbeite / spiele / koche", meaning: "Regular -e ending" },
            { pronoun: "du", verb: "-st → du arbeitest / spielst / kochst", meaning: "+st (note: arbeit+est, not +st)" },
            { pronoun: "er/sie/es", verb: "-t → er arbeitet / spielt / kocht", meaning: "+t ending" },
            { pronoun: "wir", verb: "-en → wir arbeiten / spielen / kochen", meaning: "= infinitive" },
            { pronoun: "ihr", verb: "-t → ihr arbeitet / spielt / kocht", meaning: "+t ending" },
            { pronoun: "sie/Sie", verb: "-en → sie arbeiten / spielen / kochen", meaning: "= infinitive" },
          ]
        },
        {
          type: "grammar",
          title: "Verben mit Stammänderung (Vokalwechsel) — Irregular stem verbs",
          items: [
            { pronoun: "lesen (e→ie)", verb: "ich lese · du LIEST · er LIEST · wir lesen", meaning: "to read — stem changes for du/er/sie/es!" },
            { pronoun: "sehen (e→ie)", verb: "ich sehe · du SIEHST · er SIEHT · wir sehen", meaning: "to see" },
            { pronoun: "sprechen (e→i)", verb: "ich spreche · du SPRICHST · er SPRICHT · wir sprechen", meaning: "to speak" },
            { pronoun: "fahren (a→ä)", verb: "ich fahre · du FÄHRST · er FÄHRT · wir fahren", meaning: "to drive / travel" },
            { pronoun: "Regel:", verb: "Nur du/er/sie/es ändern den Vokal", meaning: "ich, wir, ihr, sie/Sie → regular" },
          ]
        },
        {
          type: "vocabulary",
          title: "Nützliche Verben aus Kapitel 2 — K2 verb list",
          words: [
            { german: "haben", english: "to have", example: "Ich habe eine Frage." },
            { german: "arbeiten", english: "to work", example: "Wo arbeitest du?" },
            { german: "spielen", english: "to play", example: "Er spielt Gitarre." },
            { german: "kochen", english: "to cook", example: "Kochst du heute Abend?" },
            { german: "kaufen", english: "to buy", example: "Ich kaufe einen neuen Computer." },
            { german: "brauchen", english: "to need", example: "Brauchst du Hilfe?" },
            { german: "machen", english: "to do / make", example: "Was machst du heute?" },
            { german: "lernen", english: "to learn / study", example: "Ich lerne Deutsch." },
            { german: "hören", english: "to listen / hear", example: "Ich höre Radio." },
            { german: "trinken", english: "to drink", example: "Was trinkst du?" },
          ]
        },
        {
          type: "tip",
          text: "Special rule for verbs ending in -t, -d, or -chn: These verbs add an extra 'e' before -st and -t endings to make pronunciation easier. Examples: arbeiten → du arbeiTEst (not 'arbeitst'), warten → du wartest, zeichnen → du zeichnest. This is a pronunciation rule, not an exception to learn by heart — just apply it when needed.",
          textDe: "Besondere Regel für Verben auf -t, -d oder -chn: Diese Verben fügen vor -st und -t ein zusätzliches 'e' ein. Beispiele: arbeiten → du arbeiTEST (nicht 'arbeitst'), warten → du wartest. Das ist eine Aussprache-Regel, keine Ausnahme — einfach anwenden wenn nötig."
        }
      ]
    },

    {
      id: "a1-k2-negation",
      level: "A1",
      number: "K2·C3",
      title: "Die Negation — nicht und kein",
      subtitle: "Nier avec nicht et kein/keine — deux règles claires",
      icon: "🚫",
      duration: "18 min",
      xp: 55,
      color: "#34d399",
      sections: [
        {
          type: "intro",
          title: "Nein sagen auf Deutsch — Deux outils pour la négation",
          content: "German has two negation words: 'nicht' and 'kein'. They are NOT interchangeable! Each has its own clear rule. Once you understand the difference, negating any sentence becomes straightforward. This is one of the most important grammar points for real-life communication.",
          contentDe: "Deutsch hat zwei Verneinungswörter: 'nicht' und 'kein'. Sie sind NICHT austauschbar! Jedes hat eine klare Regel. Sobald du den Unterschied verstehst, wird die Verneinung einfach — einer der wichtigsten Grammatikpunkte."
        },
        {
          type: "grammar",
          title: "KEIN — Verneinung von Nomen (Regeln)",
          items: [
            { pronoun: "Regel: kein + Nomen", verb: "WITHOUT article OR with ein/eine/ein", meaning: "KEIN negates a noun (indefinite)" },
            { pronoun: "Ich habe einen Bruder.", verb: "→ Ich habe KEINEN Bruder.", meaning: "m: kein → keinen (Akkusativ!)" },
            { pronoun: "Sie hat eine Schwester.", verb: "→ Sie hat KEINE Schwester.", meaning: "f: keine" },
            { pronoun: "Er hat ein Auto.", verb: "→ Er hat KEIN Auto.", meaning: "n: kein" },
            { pronoun: "Wir haben Kinder.", verb: "→ Wir haben KEINE Kinder.", meaning: "Pl: keine (no article → keine)" },
            { pronoun: "Ich trinke Kaffee.", verb: "→ Ich trinke KEINEN Kaffee.", meaning: "m: kein + noun without article" },
          ]
        },
        {
          type: "grammar",
          title: "NICHT — Verneinung von Verben, Adjektiven, Adverbien",
          items: [
            { pronoun: "Verb verneinen", verb: "Ich arbeite. → Ich arbeite NICHT.", meaning: "nicht usually at END of sentence" },
            { pronoun: "Adjektiv verneinen", verb: "Das ist gut. → Das ist NICHT gut.", meaning: "nicht before adjective" },
            { pronoun: "Adverb verneinen", verb: "Er kommt heute. → Er kommt NICHT heute.", meaning: "nicht before adverb" },
            { pronoun: "Bestimmten Artikel", verb: "Ich sehe den Mann. → Ich sehe DEN Mann NICHT.", meaning: "nicht after DEFINITE article + noun" },
            { pronoun: "Gesamten Satz", verb: "Das stimmt. → Das stimmt NICHT.", meaning: "nicht at end to negate whole statement" },
            { pronoun: "Ich mag das NICHT.", verb: "→ NICHT at end", meaning: "I don't like that." },
          ]
        },
        {
          type: "grammar",
          title: "NICHT vs. KEIN — Die Entscheidungshilfe",
          items: [
            { pronoun: "Steht ein Nomen dahinter?", verb: "→ KEIN (wenn unbestimmt / kein Artikel)", meaning: "Ich habe kein Geld. (Geld = Nomen, unbestimmt)" },
            { pronoun: "Steht ein Verb / Adj. / Adv. dahinter?", verb: "→ NICHT", meaning: "Ich arbeite nicht. Er ist nicht müde." },
            { pronoun: "Nomen mit DER/DIE/DAS?", verb: "→ NICHT (nach dem Nomen!)", meaning: "Ich sehe die Akte nicht." },
            { pronoun: "Schnelltest:", verb: "Gibt es 'ein/eine/ein' vor dem Wort?", meaning: "Ja → kein. Nein → nicht." },
          ]
        },
        {
          type: "dialogue",
          title: "Im Büro — Verneinungen im Alltag",
          lines: [
            { speaker: "Kollegin", text: "Hast du einen Drucker auf deinem Schreibtisch?", translation: "Do you have a printer on your desk?" },
            { speaker: "Neuer MA", text: "Nein, ich habe keinen Drucker. Wo ist der Bürodrucker?", translation: "No, I don't have a printer. Where is the office printer?" },
            { speaker: "Kollegin", text: "Der ist leider kaputt. Er funktioniert heute nicht.", translation: "Unfortunately it's broken. It's not working today." },
            { speaker: "Neuer MA", text: "Das ist kein Problem! Ich schicke das Dokument per E-Mail.", translation: "That's no problem! I'll send the document by email." },
            { speaker: "Kollegin", text: "Gut. Kommst du zur Besprechung um 10?", translation: "Good. Are you coming to the meeting at 10?" },
            { speaker: "Neuer MA", text: "Heute nicht — ich habe leider keine Zeit. Ich schreibe gerade einen Bericht.", translation: "Not today — unfortunately I have no time. I'm currently writing a report." },
          ]
        },
        {
          type: "tip",
          text: "Common mistake: Students often say 'Ich habe nicht einen Computer' — this is WRONG! Correct: 'Ich habe keinen Computer'. Use kein(e) when negating a noun that has an indefinite article (ein/eine) or no article. Use nicht when negating a verb ('Ich arbeite nicht'), an adjective ('Er ist nicht nett'), or a noun with a definite article ('Ich sehe den Computer nicht').",
          textDe: "Häufiger Fehler: 'Ich habe nicht einen Computer' ist FALSCH! Richtig: 'Ich habe keinen Computer'. Benutze kein(e) wenn du ein Nomen verneinst das einen unbestimmten Artikel hat oder keinen Artikel. Nicht benutze wenn du ein Verb, Adjektiv oder Nomen mit bestimmtem Artikel verneinst."
        }
      ]
    },

    {
      id: "a1-k2-praepositionen",
      level: "A1",
      number: "K2·C4",
      title: "Lokale Präpositionen",
      subtitle: "Localiser un objet dans l'espace — in, an, auf, neben, vor, hinter…",
      icon: "📍",
      duration: "15 min",
      xp: 50,
      color: "#34d399",
      sections: [
        {
          type: "intro",
          title: "Wo ist das? — Describing locations in German",
          content: "German has 9 main spatial prepositions. Each tells you WHERE something is in relation to something else. They are called two-way prepositions (Wechselpräpositionen) because with a static location (Wo?) they take Dativ, and with movement toward a place (Wohin?) they take Akkusativ. For now, focus on the static (Dativ) use — Wo ist das?",
          contentDe: "Deutsch hat 9 Hauptlokalpräpositionen. Jede sagt dir, WO etwas ist. Als Wechselpräpositionen: statisch (Wo?) → Dativ, Bewegung (Wohin?) → Akkusativ. Jetzt konzentrierst du dich auf den statischen Gebrauch — Wo ist das?"
        },
        {
          type: "grammar",
          title: "Die 9 Lokalpräpositionen — mit Dativ (wo?)",
          items: [
            { pronoun: "in (+Dat.)", verb: "Das Buch ist IN dem Regal. (im Regal)", meaning: "inside / in — in+dem = im" },
            { pronoun: "an (+Dat.)", verb: "Das Bild ist AN der Wand. (an der Wand)", meaning: "on (vertical surface) / at" },
            { pronoun: "auf (+Dat.)", verb: "Der Stift ist AUF dem Tisch. (auf dem Tisch)", meaning: "on top of (horizontal surface)" },
            { pronoun: "neben (+Dat.)", verb: "Der Drucker steht NEBEN dem Computer.", meaning: "next to / beside" },
            { pronoun: "vor (+Dat.)", verb: "Der Stuhl steht VOR dem Schreibtisch.", meaning: "in front of" },
            { pronoun: "hinter (+Dat.)", verb: "Die Akte liegt HINTER dem Monitor.", meaning: "behind" },
            { pronoun: "über (+Dat.)", verb: "Die Lampe hängt ÜBER dem Tisch.", meaning: "above / over (position)" },
            { pronoun: "unter (+Dat.)", verb: "Die Tasche ist UNTER dem Stuhl.", meaning: "under / beneath" },
            { pronoun: "zwischen (+Dat.)", verb: "Das Fenster ist ZWISCHEN den Türen.", meaning: "between" },
          ]
        },
        {
          type: "grammar",
          title: "Dativ-Artikel — Wo steht was? (Dativ endings)",
          items: [
            { pronoun: "Maskulin (m): der", verb: "im (in dem) / am (an dem) / auf dem", meaning: "dem — Dativ masculine" },
            { pronoun: "Feminin (f): die", verb: "in der / an der / auf der", meaning: "der — Dativ feminine" },
            { pronoun: "Neutrum (n): das", verb: "im (in dem) / am (an dem) / auf dem", meaning: "dem — Dativ neuter (same as m!)" },
            { pronoun: "Plural: die", verb: "in den / an den / auf den", meaning: "den — Dativ plural" },
            { pronoun: "Kontraktion:", verb: "in + dem = im · an + dem = am", meaning: "Very common contractions!" },
          ]
        },
        {
          type: "dialogue",
          title: "Wo ist das? — Im Büro suchen",
          lines: [
            { speaker: "Laila", text: "Entschuldigung, wo ist das Papier?", translation: "Excuse me, where is the paper?" },
            { speaker: "Kollege", text: "Das Papier liegt im Schrank neben dem Drucker.", translation: "The paper is in the cabinet next to the printer." },
            { speaker: "Laila", text: "Und die Stifte?", translation: "And the pens?" },
            { speaker: "Kollege", text: "Die Stifte sind auf dem Regal — zwischen den Akten und dem Telefon.", translation: "The pens are on the shelf — between the files and the phone." },
            { speaker: "Laila", text: "Perfekt! Und wo ist das Büro von Herrn Wagner?", translation: "Perfect! And where is Mr Wagner's office?" },
            { speaker: "Kollege", text: "Es ist hinter der Treppe, neben der Kaffeemaschine.", translation: "It's behind the stairs, next to the coffee machine." },
          ]
        },
        {
          type: "tip",
          text: "Two-way prepositions — the complete rule: These 9 prepositions switch between Dativ (wo? = location) and Akkusativ (wohin? = movement TO a place). WO? → Dativ: 'Das Buch ist auf dem Tisch.' WOHIN? → Akkusativ: 'Ich lege das Buch auf den Tisch.' For now, master wo? + Dativ. Wohin? + Akkusativ comes in Kapitel 3!",
          textDe: "Wechselpräpositionen — die vollständige Regel: WO? → Dativ (statisch): 'Das Buch liegt auf dem Tisch.' WOHIN? → Akkusativ (Bewegung): 'Ich lege das Buch auf den Tisch.' Jetzt lernst du WO? + Dativ. WOHIN? + Akkusativ kommt in Kapitel 3!"
        }
      ]
    },

    {
      id: "a1-k2-fragen",
      level: "A1",
      number: "K2·C5",
      title: "Fragen — W-Fragen & Ja/Nein-Fragen",
      subtitle: "Poser des questions : mots interrogatifs, inversion sujet-verbe",
      icon: "❓",
      duration: "15 min",
      xp: 45,
      color: "#34d399",
      sections: [
        {
          type: "intro",
          title: "Fragen stellen — Das Herzstück der Kommunikation",
          content: "Asking questions is how you learn everything — about people, places, objects and situations. In German there are two types of questions: W-questions (open questions with question words like Wer/Was/Wo), and Yes/No questions (verb-first structure). In Kapitel 2, you also use questions with 'haben' and modal verbs.",
          contentDe: "Fragen stellen ist die Basis jeder Kommunikation. Im Deutschen gibt es W-Fragen (offene Fragen mit Fragewörtern) und Ja/Nein-Fragen (Verb an erster Stelle). In Kapitel 2 lernst du auch Fragen mit 'haben' und Modalverben."
        },
        {
          type: "grammar",
          title: "W-Fragewörter — Complete guide",
          items: [
            { pronoun: "Wer? (Who?)", verb: "Wer ist das? → Das ist mein Kollege Tom.", meaning: "Subject question — asks about a person" },
            { pronoun: "Was? (What?)", verb: "Was machst du? → Ich arbeite.", meaning: "Asks about a thing or action" },
            { pronoun: "Wo? (Where?)", verb: "Wo ist das Papier? → Im Schrank.", meaning: "Asks about location (static)" },
            { pronoun: "Woher? (From where?)", verb: "Woher kommt er? → Aus Wien.", meaning: "Asks about origin" },
            { pronoun: "Wohin? (Where to?)", verb: "Wohin gehst du? → In die Bibliothek.", meaning: "Asks about destination (movement)" },
            { pronoun: "Wann? (When?)", verb: "Wann beginnt das Meeting? → Um 10 Uhr.", meaning: "Asks about time" },
            { pronoun: "Wie? (How/What…like?)", verb: "Wie heißt du? / Wie ist das Wetter?", meaning: "Manner, name, quality" },
            { pronoun: "Wie viel? (How much?)", verb: "Wie viel kostet das? → 5 Euro.", meaning: "Quantity / price" },
            { pronoun: "Wie viele? (How many?)", verb: "Wie viele Studenten sind hier?", meaning: "Countable quantity" },
            { pronoun: "Warum? (Why?)", verb: "Warum lernst du Deutsch?", meaning: "Asks for reason" },
            { pronoun: "Welch-? (Which?)", verb: "Welchen Kurs besuchst du?", meaning: "Asks for a choice (declines like articles!)" },
          ]
        },
        {
          type: "grammar",
          title: "Ja/Nein-Fragen mit haben — Yes/No questions",
          items: [
            { pronoun: "Verb (1) + Subjekt (2) + Rest?", verb: "HAST du einen Computer?", meaning: "Do you have a computer? — Ja! / Nein, ich habe keinen." },
            { pronoun: "HAT er viel Arbeit?", verb: "→ Ja, er hat viel.", meaning: "Does he have a lot of work?" },
            { pronoun: "HABT ihr Zeit?", verb: "→ Nein, wir haben keine Zeit.", meaning: "Do you (pl.) have time?" },
            { pronoun: "ARBEITET sie heute?", verb: "→ Ja, sie arbeitet von zu Hause.", meaning: "Is she working today?" },
            { pronoun: "SPIELST du Fußball?", verb: "→ Manchmal, am Wochenende.", meaning: "Do you play football?" },
          ]
        },
        {
          type: "dialogue",
          title: "Kennenlernen auf einer Party — Using all question types",
          lines: [
            { speaker: "Jonas", text: "Hallo! Ich bin Jonas. Wer bist du?", translation: "Hi! I'm Jonas. Who are you?" },
            { speaker: "Priya", text: "Hi! Ich heiße Priya. Woher kommst du, Jonas?", translation: "Hi! My name is Priya. Where are you from, Jonas?" },
            { speaker: "Jonas", text: "Ich komme aus Stuttgart. Und du? Wo wohnst du jetzt?", translation: "I come from Stuttgart. And you? Where do you live now?" },
            { speaker: "Priya", text: "Ich komme aus Indien, aber ich wohne jetzt in München.", translation: "I come from India, but I now live in Munich." },
            { speaker: "Jonas", text: "Was machst du hier? Studierst du oder arbeitest du?", translation: "What do you do here? Do you study or work?" },
            { speaker: "Priya", text: "Ich studiere Architektur an der TU München. Hast du auch studiert?", translation: "I study architecture at the TU Munich. Did you also study?" },
            { speaker: "Jonas", text: "Ja! Ich habe Informatik studiert. Wie lange bist du schon hier?", translation: "Yes! I studied computer science. How long have you been here already?" },
          ]
        },
        {
          type: "tip",
          text: "Answering questions: When someone asks 'Hast du…?', you can answer: 'Ja, ich habe…' or 'Nein, ich habe kein(e)…' / 'Nein, ich habe … nicht.' When asked 'Arbeitest du…?': 'Ja, ich arbeite…' or 'Nein, ich arbeite nicht.' A common trick: you can also just answer 'Ja!' or 'Nein!' and the sentence is clear. In W-questions, you DON'T need to repeat the whole question structure — just answer the key part.",
          textDe: "Antworten auf Fragen: Bei 'Hast du…?' antworte: 'Ja, ich habe…' oder 'Nein, ich habe kein(e)…' Bei 'Arbeitest du…?': 'Ja, ich arbeite…' oder 'Nein, ich arbeite nicht.' Du kannst auch einfach 'Ja!' oder 'Nein!' sagen — der Kontext ist klar."
        }
      ]
    },

    {
      id: "a1-k2-rev",
      level: "A1",
      number: "K2·D1",
      title: "Révision — Kapitel 2",
      subtitle: "Révision complète du vocabulaire et de la grammaire du Kapitel 2",
      icon: "📖",
      duration: "20 min",
      xp: 30,
      color: "#f472b6",
      sections: [
        {
          type: "intro",
          title: "Alles zusammen — Kapitel 2 im Rückblick",
          content: "In Kapitel 2 you learned: office and university vocabulary, leisure activities, German work culture, the Akkusativ case, haben and regular verbs, negation with nicht/kein, spatial prepositions, and question formation. This lesson brings it all together with a comprehensive vocabulary list, grammar summary and revision text.",
          contentDe: "In Kapitel 2 hast du gelernt: Büro- und Uni-Vokabular, Freizeitaktivitäten, deutsche Arbeitskultur, den Akkusativ, haben und regelmäßige Verben, Verneinung mit nicht/kein, Lokalpräpositionen und Fragebildung."
        },
        {
          type: "vocabulary",
          title: "Die 20 wichtigsten Wörter aus Kapitel 2",
          words: [
            { german: "der Schreibtisch (-e)", english: "the desk", example: "Mein Schreibtisch ist immer ordentlich." },
            { german: "die Besprechung (-en)", english: "the meeting", example: "Um 10 Uhr haben wir eine Besprechung." },
            { german: "die Vorlesung (-en)", english: "the lecture", example: "Die Vorlesung beginnt um 8 Uhr!" },
            { german: "die Mensa (Mensen)", english: "university cafeteria", example: "Mittagessen in der Mensa: 3,50 Euro." },
            { german: "die Prüfung (-en)", english: "the exam", example: "Ich lerne für die Prüfung." },
            { german: "Feierabend machen", english: "to finish work for the day", example: "Es ist 17 Uhr. Ich mache Feierabend!" },
            { german: "pünktlich", english: "punctual / on time", example: "Sei bitte pünktlich!" },
            { german: "haben (habe/hast/hat)", english: "to have", example: "Hast du Zeit für ein Meeting?" },
            { german: "brauchen + Akk.", english: "to need", example: "Ich brauche einen Stift." },
            { german: "kaufen + Akk.", english: "to buy", example: "Er kauft einen neuen Computer." },
            { german: "keinen / keine / kein", english: "no / not a (Akkusativ)", example: "Ich habe keinen Drucker." },
            { german: "nicht", english: "not", example: "Der Drucker funktioniert nicht." },
            { german: "im Regal / auf dem Tisch", english: "in the shelf / on the table", example: "Das Buch liegt im Regal." },
            { german: "neben (+Dat.)", english: "next to", example: "Der Drucker steht neben dem Computer." },
            { german: "spielen (Fußball / Gitarre)", english: "to play (sport / instrument)", example: "Ich spiele Gitarre." },
            { german: "hören (Musik)", english: "to listen (to music)", example: "Ich höre gerne Musik." },
            { german: "wandern", english: "to hike", example: "Am Wochenende wandere ich." },
            { german: "studieren (+ Fach)", english: "to study (a subject at uni)", example: "Sie studiert Medizin." },
            { german: "oft / manchmal / nie", english: "often / sometimes / never", example: "Ich gehe oft ins Kino." },
            { german: "Wo? / Woher? / Wohin?", english: "Where? / From where? / Where to?", example: "Wo ist das Papier?" },
          ]
        },
        {
          type: "grammar",
          title: "Grammatik-Übersicht Kapitel 2",
          items: [
            { pronoun: "Akkusativ", verb: "m: DEN/EINEN → nur maskulin ändert sich", meaning: "Ich sehe DEN Mann. Ich brauche EINEN Stift." },
            { pronoun: "haben", verb: "ich habe · du hast · er hat · wir haben", meaning: "Hast du Zeit? — Ja, ich habe Zeit." },
            { pronoun: "Regelmäßige Verben", verb: "-e / -st / -t / -en / -t / -en", meaning: "arbeite / arbeitest / arbeitet / arbeiten" },
            { pronoun: "kein", verb: "kein(m) / keine(f) / kein(n) / keine(Pl.)", meaning: "Keine Prüfung! Kein Problem! Keinen Kaffee!" },
            { pronoun: "nicht", verb: "before adj./adv. · at end for verb", meaning: "Er ist nicht müde. Ich arbeite nicht." },
            { pronoun: "Lokalpräpositionen + Dativ", verb: "im Büro · auf dem Tisch · neben der Tür", meaning: "in+dem=im · an+dem=am" },
            { pronoun: "W-Fragen", verb: "Fragewort + Verb + Subjekt + Rest?", meaning: "Wo ARBEITEST DU? Was HABEN SIE?" },
            { pronoun: "Ja/Nein-Fragen", verb: "Verb (1) + Subjekt (2) + Rest?", meaning: "HAST DU Zeit? ARBEITET er heute?" },
          ]
        },
        {
          type: "story_text",
          title: "Lesetext — Ein typischer Arbeitstag",
          level: "A1",
          paragraphs: [
            {
              text: "Ich heiße Thomas und ich arbeite in einem Büro in Frankfurt. Ich beginne jeden Tag um 8:30 Uhr. Ich bin immer pünktlich.",
              translation: "My name is Thomas and I work in an office in Frankfurt. I start every day at 8:30 am. I am always punctual."
            },
            {
              text: "Mein Schreibtisch hat einen Computer, ein Telefon und einen Drucker. Auf dem Regal habe ich viele Akten. Neben dem Drucker steht eine Kaffeemaschine.",
              translation: "My desk has a computer, a phone and a printer. On the shelf I have many files. Next to the printer stands a coffee machine."
            },
            {
              text: "Um 10 Uhr haben wir eine Besprechung. Mein Chef heißt Herr Wagner. Er ist direkt aber fair. Ich habe keine Angst vor ihm.",
              translation: "At 10 o'clock we have a meeting. My boss's name is Mr Wagner. He is direct but fair. I am not afraid of him."
            },
            {
              text: "Um 12 Uhr esse ich in der Kantine. Ich trinke keinen Kaffee — ich trinke lieber Tee. Nach dem Mittagessen lese ich die E-Mails.",
              translation: "At 12 o'clock I eat in the canteen. I don't drink coffee — I prefer tea. After lunch I read the emails."
            },
            {
              text: "Um 17 Uhr mache ich Feierabend. Dann spiele ich Fußball oder höre Musik. Ich brauche die Entspannung nach einem langen Arbeitstag!",
              translation: "At 5 pm I finish work. Then I play football or listen to music. I need the relaxation after a long workday!"
            }
          ],
          vocabulary: [
            { german: "die Kantine (-n)", english: "workplace cafeteria / canteen", example: "Ich esse in der Kantine." },
            { german: "die Angst (Ängste)", english: "fear / anxiety", example: "Ich habe keine Angst." },
            { german: "die Entspannung", english: "relaxation", example: "Ich brauche Entspannung nach der Arbeit." },
            { german: "lieber", english: "rather / prefer to", example: "Ich trinke lieber Tee als Kaffee." },
            { german: "nach (+Dat.)", english: "after", example: "Nach dem Mittagessen arbeite ich weiter." },
          ]
        },
        {
          type: "tip",
          text: "Spaced repetition for K2: Write 5 sentences using haben + Akkusativ on a paper (e.g. 'Ich habe einen Bruder. Ich habe keine Zeit…'). Then write 5 more using nicht/kein. Alternate days: Day 1 — Akkusativ drills. Day 2 — Preposition positions (draw a desk and label everything in German). Day 3 — Questions with haben. Variety prevents boredom and builds lasting memory.",
          textDe: "Lernstrategie für K2: Schreibe 5 Sätze mit haben + Akkusativ. Dann 5 mit nicht/kein. Wechsel täglich: Tag 1 — Akkusativ-Übungen. Tag 2 — Präpositionen (zeichne einen Schreibtisch und beschrifte alles auf Deutsch). Tag 3 — Fragen mit haben. Abwechslung verhindert Langeweile."
        }
      ]
    },

    {
      id: "a1-k2-ex",
      level: "A1",
      number: "K2·D2",
      title: "Exercices de consolidation — Kapitel 2",
      subtitle: "Exercices pratiques : accusatif, négation, prépositions, dialogues",
      icon: "✏️",
      duration: "25 min",
      xp: 40,
      color: "#f472b6",
      sections: [
        {
          type: "intro",
          title: "Übung macht den Meister! — L'entraînement rend parfait",
          content: "This consolidation lesson drills all the grammar from Kapitel 2. Work through each exercise at your own pace. Pay special attention to Akkusativ article changes (only masculine!), the nicht vs. kein distinction, and preposition + Dativ combinations.",
          contentDe: "Diese Übungslektion trainiert die gesamte Grammatik aus Kapitel 2. Arbeite in deinem Tempo. Besondere Aufmerksamkeit: Akkusativ-Artikelveränderungen (nur maskulin!), nicht vs. kein, und Präposition + Dativ."
        },
        {
          type: "grammar",
          title: "Übung 1 — Akkusativ: Ergänze den richtigen Artikel",
          items: [
            { pronoun: "Ich brauche ___ Stift. (m)", verb: "→ einen Stift", meaning: "ein → einen (maskulin, Akk.)" },
            { pronoun: "Er kauft ___ Computer. (m)", verb: "→ einen Computer", meaning: "ein → einen" },
            { pronoun: "Hast du ___ Drucker? (m)", verb: "→ einen Drucker", meaning: "ein → einen" },
            { pronoun: "Ich lese ___ Buch. (n)", verb: "→ ein Buch", meaning: "ein = ein (Neutrum, keine Änderung!)" },
            { pronoun: "Wir brauchen ___ Kaffeemaschine. (f)", verb: "→ eine Kaffeemaschine", meaning: "eine = eine (Feminin, keine Änderung!)" },
            { pronoun: "Er sieht ___ Kollegen. (m, definit)", verb: "→ den Kollegen", meaning: "der → den (maskulin, definit, Akk.)" },
            { pronoun: "Ich finde ___ Akte nicht. (f, definit)", verb: "→ die Akte nicht", meaning: "die = die (Feminin, keine Änderung!)" },
          ]
        },
        {
          type: "grammar",
          title: "Übung 2 — nicht oder kein? Entscheide!",
          items: [
            { pronoun: "Ich habe ___ Zeit. (Zeit = Nomen, unkount.)", verb: "→ keine Zeit", meaning: "Nomen ohne Artikel → kein(e)" },
            { pronoun: "Das funktioniert ___.", verb: "→ Das funktioniert nicht.", meaning: "Verb verneinen → nicht (am Ende)" },
            { pronoun: "Er ist ___ müde.", verb: "→ Er ist nicht müde.", meaning: "Adjektiv verneinen → nicht" },
            { pronoun: "Ich habe ___ Drucker. (m)", verb: "→ keinen Drucker", meaning: "Nomen m. Akk. → keinen" },
            { pronoun: "Sie kommt heute ___.", verb: "→ Sie kommt heute nicht.", meaning: "Verb + Zeitadverb → nicht (am Ende)" },
            { pronoun: "Wir haben ___ Besprechung. (f)", verb: "→ keine Besprechung", meaning: "Nomen f. → keine" },
            { pronoun: "Ich verstehe das ___.", verb: "→ Ich verstehe das nicht.", meaning: "Verb + Objekt → nicht (nach Objekt)" },
          ]
        },
        {
          type: "grammar",
          title: "Übung 3 — Präpositionen: Wo ist das?",
          items: [
            { pronoun: "___ dem Tisch liegt ein Stift.", verb: "→ AUF dem Tisch", meaning: "Horizontal surface → auf" },
            { pronoun: "___ der Wand hängt ein Bild.", verb: "→ AN der Wand", meaning: "Vertical surface → an" },
            { pronoun: "Das Buch ist ___ dem Regal.", verb: "→ im (in dem) Regal", meaning: "Inside → in+dem=im" },
            { pronoun: "Der Drucker steht ___ dem Computer.", verb: "→ NEBEN dem Computer", meaning: "Next to → neben" },
            { pronoun: "Die Tasche liegt ___ dem Stuhl.", verb: "→ UNTER dem Stuhl", meaning: "Beneath → unter" },
            { pronoun: "Das Büro ist ___ der Treppe. (hinten)", verb: "→ HINTER der Treppe", meaning: "Behind → hinter" },
          ]
        },
        {
          type: "dialogue",
          title: "Übung 4 — Rollenspiel: Im Büro am ersten Tag",
          lines: [
            { speaker: "Kollege", text: "Hast du schon deinen Computer?", translation: "➜ Answer: Ja / Nein + kein(en) + reason" },
            { speaker: "Du", text: "Ja, ich habe einen Computer, aber keinen Drucker.", translation: "✓ Good answer using haben + Akk. + kein" },
            { speaker: "Kollege", text: "Arbeitest du heute Nachmittag?", translation: "➜ Answer: Ja, ich arbeite… OR Nein, ich arbeite nicht…" },
            { speaker: "Du", text: "Ja, ich arbeite bis 17 Uhr. Dann mache ich Feierabend.", translation: "✓ Regular verb + kulturelles Wissen (Feierabend)" },
            { speaker: "Kollege", text: "Wo ist deine Akte?", translation: "➜ Answer with Präposition + Dativ" },
            { speaker: "Du", text: "Die Akte liegt auf dem Schreibtisch, neben dem Telefon.", translation: "✓ auf + dem (Dativ n.) + neben + dem" },
          ]
        },
        {
          type: "vocabulary",
          title: "Übung 5 — Verbpaare: Positiv und Negativ",
          words: [
            { german: "Ich habe Zeit. ↔ Ich habe keine Zeit.", english: "I have time. ↔ I have no time.", example: "Hast du Zeit? — Nein, leider keine!" },
            { german: "Ich arbeite. ↔ Ich arbeite nicht.", english: "I work. ↔ I don't work.", example: "Arbeitest du heute? — Nein, nicht heute." },
            { german: "Er hat einen Drucker. ↔ Er hat keinen Drucker.", english: "He has a printer. ↔ He has no printer.", example: "Keinen! masculine → keinen" },
            { german: "Das funktioniert. ↔ Das funktioniert nicht.", english: "That works. ↔ That doesn't work.", example: "nicht at the end for verbs!" },
            { german: "Ich spiele Fußball. ↔ Ich spiele keinen Fußball.", english: "I play football. ↔ I don't play football.", example: "Fußball = masculine noun → keinen" },
          ]
        },
        {
          type: "tip",
          text: "Production technique for K2: Take any sentence and transform it four ways: 1) Affirmative: 'Ich habe Zeit.' → 2) Negative: 'Ich habe keine Zeit.' → 3) Question: 'Habe ich Zeit?' → 4) W-Question: 'Wie viel Zeit habe ich?' Doing this for 10 sentences gives you 40 practice sentences. This technique, called sentence transformation, builds grammatical flexibility fast.",
          textDe: "Produktionstechnik: Transformiere jeden Satz auf 4 Arten: 1) Aussage: 'Ich habe Zeit.' 2) Verneinung: 'Ich habe keine Zeit.' 3) Ja/Nein-Frage: 'Habe ich Zeit?' 4) W-Frage: 'Wie viel Zeit habe ich?' 10 Sätze × 4 = 40 Übungssätze."
        }
      ]
    },

    {
      id: "a1-k2-test",
      level: "A1",
      number: "K2·D3",
      title: "Mini-Test — Kapitel 2",
      subtitle: "Teste tes connaissances du Kapitel 2 — 12 questions interactives",
      icon: "🎯",
      duration: "15 min",
      xp: 65,
      color: "#f472b6",
      sections: [
        {
          type: "intro",
          title: "Zeit für den Test! — C'est l'heure du test !",
          content: "12 questions covering all of Kapitel 2: office and university vocabulary, leisure activities, German work culture, Akkusativ (articles!), verb conjugation (haben + regular -en verbs), negation (nicht vs. kein), spatial prepositions + Dativ, and question formation. Answer carefully — explanations help you learn from every mistake!",
          contentDe: "12 Fragen zu allem aus Kapitel 2: Büro & Uni, Freizeit, Arbeitskultur, Akkusativ, Verbkonjugation (haben + regelmäßige Verben), Verneinung (nicht/kein), Lokalpräpositionen + Dativ, Fragebildung. Lies die Erklärungen sorgfältig!"
        },
        {
          type: "quiz",
          title: "Mini-Test — Kapitel 2 (12 questions)",
          questions: [
            {
              topic: "Bürovokabular",
              question: "Du beendest deinen Arbeitstag um 17 Uhr und gehst nach Hause. Was sagst du?",
              options: ["Auf Wiedersehen und schönen Feierabend!", "Gute Nacht, ich schlafe jetzt.", "Ich mache Pause!", "Bis übermorgen!"],
              correct: 0,
              explanation: "'Feierabend' is the sacred German concept of the end of the workday. You say 'Feierabend!' or 'Schönen Feierabend!' when leaving work. 'Gute Nacht' is only when going to sleep, not when leaving the office."
            },
            {
              topic: "Uni-Vokabular",
              question: "Maria lernt seit 2 Jahren Deutsch. Wie sagt man das RICHTIG?",
              options: ["Maria studiert Deutsch seit 2 Jahren.", "Maria lernt seit 2 Jahren Deutsch.", "Maria macht Deutsch seit 2 Jahren.", "Maria spielt Deutsch seit 2 Jahren."],
              correct: 1,
              explanation: "'Lernen' = to learn/study (any language, skill, for an exam). 'Studieren' = to study AT UNIVERSITY as a degree program. You never say 'Ich studiere Deutsch' when you're learning the language — you say 'Ich lerne Deutsch'."
            },
            {
              topic: "Akkusativ",
              question: "Welcher Satz ist RICHTIG im Akkusativ?",
              options: ["Ich brauche ein Stift.", "Ich brauche einen Stift.", "Ich brauche der Stift.", "Ich brauche dem Stift."],
              correct: 1,
              explanation: "'der Stift' is masculine. In the Akkusativ, masculine articles change: der→den and ein→EINEN. So 'brauchen' takes Akkusativ → 'Ich brauche EINEN Stift'. 'ein Stift' is wrong because for masculine Akkusativ, 'ein' becomes 'einen'."
            },
            {
              topic: "Akkusativ",
              question: "Ich kaufe ___ Computer. (maskulin) Welcher Artikel fehlt?",
              options: ["ein", "eine", "einen", "einem"],
              correct: 2,
              explanation: "Computer is masculine (der Computer). After 'kaufen' (which takes Akkusativ), masculine ein becomes EINEN. So: 'Ich kaufe EINEN Computer.' Remember: only masculine changes in the Akkusativ (die→die, das→das stay the same)."
            },
            {
              topic: "Verben",
              question: "Welche Konjugation von 'haben' passt? 'Er ___ keine Zeit heute.'",
              options: ["habe", "haben", "hat", "habt"],
              correct: 2,
              explanation: "haben conjugation: ich habe · du hast · er/sie/es HAT · wir haben · ihr habt · sie/Sie haben. For 'er' (he), the correct form is 'hat'. Note: haben is irregular — the 'b' disappears in du/er/sie/es forms."
            },
            {
              topic: "Negation",
              question: "Ich möchte sagen: 'I have no brother.' Wie sagt man das auf Deutsch?",
              options: ["Ich habe nicht einen Bruder.", "Ich habe keinen Bruder.", "Ich habe kein Bruder.", "Ich nicht habe einen Bruder."],
              correct: 1,
              explanation: "'Bruder' is masculine (der Bruder). To negate a masculine noun in Akkusativ, use KEINEN. So: 'Ich habe KEINEN Bruder.' 'Kein Bruder' is wrong (needs Akkusativ -en for masculine). 'Nicht einen' is always wrong — use kein(en) for indefinite nouns."
            },
            {
              topic: "Negation",
              question: "Der Drucker ___. (The printer doesn't work.) Was fehlt?",
              options: ["funktioniert kein", "nicht funktioniert", "funktioniert nicht", "kein funktioniert"],
              correct: 2,
              explanation: "To negate a VERB, use 'nicht'. It goes at the END of a simple sentence: 'Der Drucker funktioniert NICHT.' 'Kein' is only for negating nouns. 'Nicht' before the verb is wrong in German — it must be at or near the end."
            },
            {
              topic: "Lokale Präpositionen",
              question: "Das Buch liegt ___ Tisch. (on the table) Was passt?",
              options: ["an dem", "in dem", "auf dem", "unter dem"],
              correct: 2,
              explanation: "'auf' is used for something ON TOP of a horizontal surface. 'Das Buch liegt AUF dem Tisch' = The book is lying on the table. 'an' is for vertical surfaces (wall, door). 'in' means inside. Remember: auf+dem (Dativ = static location)."
            },
            {
              topic: "Lokale Präpositionen",
              question: "Der Drucker steht ___ dem Computer. (next to the computer)",
              options: ["auf", "neben", "über", "vor"],
              correct: 1,
              explanation: "'neben' = next to / beside. 'Der Drucker steht NEBEN dem Computer.' 'über' = above/over. 'auf' = on top of. 'vor' = in front of. All these take Dativ in static location sentences (Wo? → Dativ)."
            },
            {
              topic: "Freizeit",
              question: "Welches Verb passt NICHT mit 'spielen'?",
              options: ["Fußball spielen", "Gitarre spielen", "wandern spielen", "Tennis spielen"],
              correct: 2,
              explanation: "'Wandern' (hiking) is a verb on its own — you say 'Ich gehe wandern' or 'Ich wandere'. You NEVER say 'wandern spielen'. 'Spielen' is used for sports WITH A BALL (Fußball, Tennis) and MUSICAL INSTRUMENTS (Gitarre, Klavier)."
            },
            {
              topic: "Fragen",
              question: "Du möchtest wissen: 'How many students are here?' Wie fragst du?",
              options: ["Wie viel Studenten sind hier?", "Wie viele Studenten sind hier?", "Wie Studenten sind hier?", "Welche Studenten sind hier?"],
              correct: 1,
              explanation: "'Wie viele?' is used for COUNTABLE nouns (people, objects you can count). 'Wie viel?' is for UNCOUNTABLE nouns (money, time, water). Since 'Studenten' are countable, use 'Wie viele Studenten sind hier?' This is a common mistake even for advanced learners!"
            },
            {
              topic: "Arbeitskultur",
              question: "Dein Chef schickt dir um 21 Uhr eine E-Mail mit einer Frage. Was machst du TYPISCH DEUTSCH?",
              options: ["Ich antworte sofort — 24/7 erreichbar!", "Ich antworte am nächsten Arbeitstag.", "Ich rufe ihn sofort an.", "Ich ignoriere die E-Mail für immer."],
              correct: 1,
              explanation: "German work culture strongly respects 'Feierabend' — the clear boundary between work and private life. In most German companies, answering after-hours emails is not expected and even discouraged. You respond the next working day. Work-life balance is taken very seriously in Germany."
            }
          ]
        },
        {
          type: "tip",
          text: "Score guide: 11–12 = Ausgezeichnet! — Tu maîtrises Kapitel 2! · 9–10 = Sehr gut! · 7–8 = Gut gemacht! · Under 7 = Nochmal üben — relis les leçons sur l'accusatif et nicht/kein. The most important takeaway: ONLY masculine articles change in Akkusativ (der→den, ein→einen, kein→keinen). Feminine, neuter, and plural stay the same!",
          textDe: "Ergebnis: 11–12 = Ausgezeichnet! · 9–10 = Sehr gut! · 7–8 = Gut! · Unter 7 = Nochmal üben. Wichtigste Erkenntnis: NUR maskuline Artikel ändern sich im Akkusativ. Feminin, Neutrum und Plural bleiben gleich!"
        }
      ]
    },

    // ── KAPITEL 1 — additional lessons ───────────────────────────────────

    {
      id: "a1-k1-abc",
      level: "A1",
      number: "K1·2",
      title: "Das Alphabet",
      subtitle: "L'alphabet allemand de A à Z, les umlauts Ä/Ö/Ü et le ß",
      icon: "🔤",
      duration: "12 min",
      xp: 40,
      color: "#818cf8",
      sections: [
        {
          type: "intro",
          title: "Das deutsche Alphabet — La clé de tout !",
          content: "The German alphabet has 26 letters — plus 3 umlauts (Ä, Ö, Ü) and the special letter ß. Knowing the alphabet is essential: you need it to spell your name at a hotel, read abbreviations, and look up words in a dictionary.",
          contentDe: "Das deutsche Alphabet hat 26 Buchstaben — plus 3 Umlaute (Ä, Ö, Ü) und das ß. Es ist unverzichtbar: zum Buchstabieren deines Namens, für Formulare und Wörterbücher."
        },
        {
          type: "number_table",
          title: "A–Z mit Aussprache und Merkhilfe (DIN 5009)",
          numbers: [
            { number: "Aa", german: "ah", english: "Anton" },
            { number: "Bb", german: "beh", english: "Berta" },
            { number: "Cc", german: "tseh", english: "Cäsar" },
            { number: "Dd", german: "deh", english: "Dora" },
            { number: "Ee", german: "eh", english: "Emil" },
            { number: "Ff", german: "eff", english: "Friedrich" },
            { number: "Gg", german: "geh", english: "Gustav" },
            { number: "Hh", german: "hah", english: "Heinrich" },
            { number: "Ii", german: "ih", english: "Ida" },
            { number: "Jj", german: "yot", english: "Julius" },
            { number: "Kk", german: "kah", english: "Kaufmann" },
            { number: "Ll", german: "ell", english: "Ludwig" },
            { number: "Mm", german: "emm", english: "Martha" },
            { number: "Nn", german: "enn", english: "Nordpol" },
            { number: "Oo", german: "oh", english: "Otto" },
            { number: "Pp", german: "peh", english: "Paula" },
            { number: "Qq", german: "kuh", english: "Quelle" },
            { number: "Rr", german: "err", english: "Richard" },
            { number: "Ss", german: "ess", english: "Samuel" },
            { number: "Tt", german: "teh", english: "Theodor" },
            { number: "Uu", german: "uh", english: "Ulrich" },
            { number: "Vv", german: "fau", english: "Viktor" },
            { number: "Ww", german: "weh", english: "Wilhelm" },
            { number: "Xx", german: "iks", english: "Xanthippe" },
            { number: "Yy", german: "üpsilon", english: "Ypsilon" },
            { number: "Zz", german: "tsett", english: "Zacharias" },
          ]
        },
        {
          type: "grammar",
          title: "Die Umlaute & das ß — Aussprache und Schreibung",
          items: [
            { pronoun: "Ä / ä", verb: "\"eh\" — wie in Äpfel, Mädchen", meaning: "kein Umlaut? → ae  (Müller = Mueller)" },
            { pronoun: "Ö / ö", verb: "\"öh\" rund — wie in schön, Österreich", meaning: "kein Umlaut? → oe" },
            { pronoun: "Ü / ü", verb: "\"üh\" rund — wie in über, Tür", meaning: "kein Umlaut? → ue" },
            { pronoun: "ß (Eszett)", verb: "scharfes S — Straße, heiß, weiß", meaning: "nach langem Vokal/Diphthong. kein ß? → ss" },
            { pronoun: "Merkrege", verb: "ä=ae · ö=oe · ü=ue · ß=ss", meaning: "Immer benutzen wenn die Taste fehlt" },
          ]
        },
        {
          type: "dialogue",
          title: "An der Hotelrezeption — Einen Namen buchstabieren",
          lines: [
            { speaker: "Rezeptionist", text: "Guten Abend! Ihr Name, bitte?", translation: "Good evening! Your name, please?" },
            { speaker: "Gast", text: "Müller. M-Ü-L-L-E-R.", translation: "Müller. M-U-L-L-E-R." },
            { speaker: "Rezeptionist", text: "Und der Vorname?", translation: "And the first name?" },
            { speaker: "Gast", text: "Joachim. J-O-A-C-H-I-M.", translation: "Joachim. J-O-A-C-H-I-M." },
            { speaker: "Rezeptionist", text: "Alles klar! Willkommen im Hotel Adler.", translation: "Perfect! Welcome to Hotel Adler." },
            { speaker: "Gast", text: "Danke schön!", translation: "Thank you very much!" },
          ]
        },
        {
          type: "vocabulary",
          title: "Buchstabierwörter — Wie sagt man das?",
          words: [
            { german: "Wie buchstabiert man das?", english: "How do you spell that?", example: "Wie buchstabiert man 'Straße'?" },
            { german: "Ich buchstabiere:", english: "I spell:", example: "Mein Name: M-Ü-L-L-E-R" },
            { german: "der Buchstabe (-n)", english: "the letter / letters", example: "Das Alphabet hat 26 Buchstaben." },
            { german: "der Umlaut (-e)", english: "the umlaut", example: "Ä, Ö und Ü sind Umlaute." },
            { german: "der Großbuchstabe", english: "capital letter", example: "Schreib das mit Großbuchstabe!" },
            { german: "der Kleinbuchstabe", english: "lowercase letter", example: "Adjektive schreibt man klein." },
            { german: "das Sonderzeichen", english: "special character", example: "Das ß und die Umlaute sind Sonderzeichen." },
          ]
        },
        {
          type: "tip",
          text: "Pronunciation trick: For Ö — make your lips into a circle (like saying 'o'), then try to say 'e'. For Ü — same but try to say 'i'. It feels strange at first, but after 10 repetitions you'll have it! Also: the German R is pronounced further back in the throat — like gargling gently.",
          textDe: "Aussprache-Trick: Für Ö — forme deine Lippen zu einem Kreis (wie bei 'o') und versuche 'e' zu sagen. Für Ü — gleich, aber versuche 'i' zu sagen. Das R wird im Rachen gebildet — wie ein sanftes Gurgeln."
        }
      ]
    },

    {
      id: "a1-k1-laender",
      level: "A1",
      number: "K1·3",
      title: "Sprachen und Länder",
      subtitle: "Les pays d'Europe et leurs langues — Ich spreche, ich komme aus…",
      icon: "🗺️",
      duration: "15 min",
      xp: 45,
      color: "#818cf8",
      sections: [
        {
          type: "intro",
          title: "Europa ist mehrsprachig — L'Europe est multilingue !",
          content: "Europe has over 200 languages. In German you say where you come from, where you live and what languages you speak. These three sentences are essential in every first conversation: 'Ich komme aus…', 'Ich wohne in…', 'Ich spreche…'",
          contentDe: "Europa hat über 200 Sprachen. Auf Deutsch sagst du, woher du kommst, wo du wohnst und welche Sprachen du sprichst. Diese drei Sätze sind in jedem ersten Gespräch unverzichtbar."
        },
        {
          type: "grammar",
          title: "Die drei Schlüsselformeln — The 3 key formulas",
          items: [
            { pronoun: "Woher kommst du?", verb: "Ich komme aus Frankreich.", meaning: "Where are you from? — I come from France." },
            { pronoun: "Wo wohnst du?", verb: "Ich wohne in Berlin.", meaning: "Where do you live? — I live in Berlin." },
            { pronoun: "Was sprichst du?", verb: "Ich spreche Englisch und Deutsch.", meaning: "What do you speak? — I speak English and German." },
            { pronoun: "Lernst du noch?", verb: "Ich lerne gerade Deutsch.", meaning: "Are you still learning? — I am learning German at the moment." },
            { pronoun: "Wichtig!", verb: "kein Artikel vor Länder!", meaning: "Ich komme aus Deutschland. (NOT aus DEM Deutschland)" },
          ]
        },
        {
          type: "vocabulary",
          title: "Länder und Sprachen — Countries and Languages",
          words: [
            { german: "Deutschland → Deutsch", english: "Germany → German", example: "Ich komme aus Deutschland. Ich spreche Deutsch." },
            { german: "Frankreich → Französisch", english: "France → French", example: "Sophie kommt aus Frankreich." },
            { german: "England / Großbritannien → Englisch", english: "England / UK → English", example: "Er kommt aus England und spricht Englisch." },
            { german: "Spanien → Spanisch", english: "Spain → Spanish", example: "María kommt aus Spanien." },
            { german: "Italien → Italienisch", english: "Italy → Italian", example: "Ich lerne Italienisch." },
            { german: "die Schweiz → Deutsch / Französisch / Italienisch", english: "Switzerland → German / French / Italian", example: "Die Schweiz hat vier Landessprachen!" },
            { german: "Österreich → Deutsch", english: "Austria → German", example: "Wien ist die Hauptstadt von Österreich." },
            { german: "Portugal → Portugiesisch", english: "Portugal → Portuguese", example: "Lissabon liegt in Portugal." },
            { german: "Polen → Polnisch", english: "Poland → Polish", example: "Krakau liegt in Polen." },
            { german: "die Türkei → Türkisch", english: "Turkey → Turkish", example: "Ich spreche auch Türkisch." },
          ]
        },
        {
          type: "dialogue",
          title: "Beim Internationalen Sommerkurs — At an international summer course",
          lines: [
            { speaker: "Lena", text: "Hallo! Ich bin Lena. Woher kommst du?", translation: "Hi! I'm Lena. Where are you from?" },
            { speaker: "Omar", text: "Hallo Lena! Ich komme aus Marokko, aus Casablanca. Und du?", translation: "Hi Lena! I come from Morocco, from Casablanca. And you?" },
            { speaker: "Lena", text: "Ich komme aus der Schweiz, aus Zürich. Ich spreche Deutsch und Französisch.", translation: "I come from Switzerland, from Zurich. I speak German and French." },
            { speaker: "Omar", text: "Super! Ich spreche Arabisch, Französisch und etwas Englisch. Deutsch lerne ich gerade.", translation: "Great! I speak Arabic, French and some English. I'm currently learning German." },
            { speaker: "Lena", text: "Dein Deutsch ist schon sehr gut!", translation: "Your German is already very good!" },
            { speaker: "Omar", text: "Danke! Ich lerne jeden Tag eine Stunde.", translation: "Thank you! I study one hour every day." },
          ]
        },
        {
          type: "grammar",
          title: "Verneinung mit kein / nicht — Negation",
          items: [
            { pronoun: "Ich spreche kein Spanisch.", verb: "kein + Nomen", meaning: "I don't speak Spanish. (negates a noun)" },
            { pronoun: "Ich komme nicht aus Italien.", verb: "nicht + Verb/Adjektiv/Ort", meaning: "I don't come from Italy." },
            { pronoun: "Ich lerne kein Chinesisch.", verb: "kein + Sprache", meaning: "I'm not learning Chinese." },
            { pronoun: "Das stimmt nicht.", verb: "nicht am Satzende", meaning: "That's not right. (nicht often at end)" },
          ]
        },
        {
          type: "tip",
          text: "Memory trick for countries: Most countries in German have NO article — just 'aus + country'. Exceptions: die Schweiz, die Türkei, die USA, der Iran, der Irak → aus der Schweiz, aus der Türkei, aus den USA. Learn these 5 exceptions by heart!",
          textDe: "Merkhilfe: Die meisten Ländernamen haben keinen Artikel — einfach 'aus + Land'. Ausnahmen: die Schweiz, die Türkei, die USA, der Iran, der Irak → 'aus der Schweiz'. Lerne diese 5 Ausnahmen auswendig!"
        }
      ]
    },

    {
      id: "a1-k1-gruss",
      level: "A1",
      number: "K1·B",
      title: "Grußformeln im DACH",
      subtitle: "Salutations formelles et informelles — Allemagne, Autriche, Suisse",
      icon: "🤝",
      duration: "10 min",
      xp: 35,
      color: "#34d399",
      sections: [
        {
          type: "intro",
          title: "DACH — Drei Länder, eine Sprache, viele Grüße!",
          content: "German is spoken in three main countries: Deutschland (D), Österreich (A) and die Schweiz (CH) — collectively called the DACH region. Each country has its own greeting traditions, and German has both formal (Sie) and informal (du) address forms. Choosing the right one matters!",
          contentDe: "Deutsch wird in drei Hauptländern gesprochen: Deutschland, Österreich und der Schweiz — kurz: DACH. Jedes Land hat eigene Grußtraditionen. Formell (Sie) oder informell (du) — die richtige Wahl ist wichtig!"
        },
        {
          type: "grammar",
          title: "Grüßen nach Tageszeit — Greetings by time of day",
          items: [
            { pronoun: "Morgens (6–12h)", verb: "Guten Morgen!", meaning: "Good morning! (universal, formal + informal)" },
            { pronoun: "Mittags (12–18h)", verb: "Guten Tag!", meaning: "Good afternoon / Good day! (formal)" },
            { pronoun: "Abends (18–22h)", verb: "Guten Abend!", meaning: "Good evening! (formal)" },
            { pronoun: "Immer / Jederzeit", verb: "Hallo! / Hi!", meaning: "Hi! (informal, any time)" },
            { pronoun: "Nacht (beim Schlafen)", verb: "Gute Nacht!", meaning: "Good night! (only when going to sleep)" },
            { pronoun: "Österreich (jederzeit)", verb: "Grüß Gott!", english: "Hello! (lit. 'Greet God') — formal in AT" },
            { pronoun: "Bayern + Österreich", verb: "Servus!", meaning: "'Hi' AND 'Bye' — informal in Bavaria & Austria" },
            { pronoun: "Schweiz", verb: "Grüezi! / Salü!", meaning: "Hello (formal) / Hi (informal) in Switzerland" },
          ]
        },
        {
          type: "dialogue",
          title: "Situation 1 — Im Büro (formell) / At the office (formal)",
          lines: [
            { speaker: "Herr Koch", text: "Guten Morgen, Frau Bauer! Wie geht es Ihnen?", translation: "Good morning, Ms Bauer! How are you?" },
            { speaker: "Frau Bauer", text: "Guten Morgen, Herr Koch! Danke, es geht mir gut. Und Ihnen?", translation: "Good morning, Mr Koch! Thank you, I'm well. And you?" },
            { speaker: "Herr Koch", text: "Auch gut, danke. Haben Sie die Berichte fertig?", translation: "Also well, thank you. Do you have the reports ready?" },
            { speaker: "Frau Bauer", text: "Ja, natürlich. Auf Wiedersehen, Herr Koch!", translation: "Yes, of course. Goodbye, Mr Koch!" },
          ]
        },
        {
          type: "dialogue",
          title: "Situation 2 — Mit Freunden (informell) / With friends (informal)",
          lines: [
            { speaker: "Tim", text: "Hey Lara! Wie geht's?", translation: "Hey Lara! How's it going?" },
            { speaker: "Lara", text: "Hi Tim! Super, danke! Und dir?", translation: "Hi Tim! Great, thanks! And you?" },
            { speaker: "Tim", text: "Auch gut! Was machst du heute Abend?", translation: "Also good! What are you doing tonight?" },
            { speaker: "Lara", text: "Nichts Besonderes. Bis später!", translation: "Nothing special. See you later!" },
          ]
        },
        {
          type: "vocabulary",
          title: "Verabschiedungen — Ways to say goodbye",
          words: [
            { german: "Auf Wiedersehen!", english: "Goodbye! (formal, standard)", example: "Auf Wiedersehen, Herr Müller!" },
            { german: "Tschüss! / Tschau!", english: "Bye! (informal)", example: "Tschüss! Bis morgen!" },
            { german: "Bis bald!", english: "See you soon!", example: "Bis bald! Mach's gut!" },
            { german: "Bis morgen / später / Montag!", english: "See you tomorrow / later / Monday!", example: "Bis morgen, Tim!" },
            { german: "Schönen Tag noch!", english: "Have a nice day!", example: "Danke, Ihnen auch! Schönen Tag!" },
            { german: "Schönes Wochenende!", english: "Have a nice weekend!", example: "Schönes Wochenende, Herr Koch!" },
          ]
        },
        {
          type: "grammar",
          title: "Du oder Sie? — The key social rule",
          items: [
            { pronoun: "du (informal)", verb: "friends, family, classmates, children", meaning: "Wie geht es dir? / Was machst du?" },
            { pronoun: "Sie (formal)", verb: "strangers, bosses, customers, elderly", meaning: "Wie geht es Ihnen? / Was machen Sie?" },
            { pronoun: "Wann wechseln?", verb: "When someone says 'Wir können uns duzen'", meaning: "'We can use du with each other' — wait for this offer!" },
            { pronoun: "Fehler vermeiden", verb: "When in doubt → use Sie", meaning: "Better too formal than too familiar!" },
          ]
        },
        {
          type: "tip",
          text: "Cultural note: In German-speaking workplaces, even colleagues who have worked together for years may use 'Sie'. In tech startups, schools, and among younger people, 'du' is the norm. Austria tends to be warmer — 'Grüß Gott' is friendly, not religious. In Switzerland, 'Grüezi' is standard even with strangers.",
          textDe: "Kulturhinweis: Am deutschen Arbeitsplatz benutzen Kollegen oft 'Sie', selbst nach Jahren. In Start-ups, Schulen und unter Jüngeren ist 'du' normal. In Österreich ist 'Grüß Gott' herzlich und alltäglich. In der Schweiz ist 'Grüezi' Standard."
        }
      ]
    },

    {
      id: "a1-k1-svk",
      level: "A1",
      number: "K1·C2",
      title: "Satzbau — Die SVK-Regel",
      subtitle: "La structure de phrase allemande : Sujet — Verbe — Complément",
      icon: "📐",
      duration: "15 min",
      xp: 50,
      color: "#a78bfa",
      sections: [
        {
          type: "intro",
          title: "Die goldene Regel: Das Verb steht immer an Position 2!",
          content: "German word order follows one unbreakable rule: the conjugated verb ALWAYS sits in position 2 of the sentence. Not at the end, not at the beginning — always second. This is called the V2 rule (Verb-Zweit-Stellung). Once you master this, German sentences feel natural.",
          contentDe: "Die goldene Regel des Deutschen: Das konjugierte Verb steht IMMER an Position 2. Nicht am Ende, nicht am Anfang — immer an zweiter Stelle. Das nennt man die V2-Regel (Verb-Zweit-Stellung)."
        },
        {
          type: "grammar",
          title: "Aussagesatz (S–V–K) — Declarative sentence",
          items: [
            { pronoun: "Position 1", verb: "Position 2 (Verb!)", meaning: "Position 3, 4… (rest)" },
            { pronoun: "Ich", verb: "lerne", meaning: "jeden Tag Deutsch." },
            { pronoun: "Marie", verb: "kommt", meaning: "aus Frankreich." },
            { pronoun: "Wir", verb: "wohnen", meaning: "in Berlin." },
            { pronoun: "Heute", verb: "lerne", meaning: "ich viel. (subject moves to pos.3!)" },
            { pronoun: "In Berlin", verb: "wohnen", meaning: "viele Menschen." },
          ]
        },
        {
          type: "grammar",
          title: "W-Fragen — Question words (open questions)",
          items: [
            { pronoun: "Wer? (Who?)", verb: "Wer ist das?", meaning: "Das ist mein Freund Max." },
            { pronoun: "Was? (What?)", verb: "Was lernst du?", meaning: "Ich lerne Deutsch." },
            { pronoun: "Wo? (Where?)", verb: "Wo wohnst du?", meaning: "Ich wohne in München." },
            { pronoun: "Woher? (From where?)", verb: "Woher kommst du?", meaning: "Ich komme aus Spanien." },
            { pronoun: "Wohin? (Where to?)", verb: "Wohin fährst du?", meaning: "Ich fahre nach Wien." },
            { pronoun: "Wann? (When?)", verb: "Wann beginnt der Kurs?", meaning: "Der Kurs beginnt um 9 Uhr." },
            { pronoun: "Wie? (How?)", verb: "Wie heißt du?", meaning: "Ich heiße Sophie." },
            { pronoun: "Wie viel? (How much?)", verb: "Wie viel kostet das?", meaning: "Das kostet fünf Euro." },
            { pronoun: "Warum? (Why?)", verb: "Warum lernst du Deutsch?", meaning: "Weil ich in Deutschland arbeiten möchte." },
          ]
        },
        {
          type: "grammar",
          title: "Ja/Nein-Fragen — Yes/No questions (verb first!)",
          items: [
            { pronoun: "Verb (1)", verb: "Subjekt (2)", meaning: "Rest…?" },
            { pronoun: "Kommst", verb: "du", meaning: "aus Frankreich? — Ja! / Nein, ich komme aus Belgien." },
            { pronoun: "Sprichst", verb: "du", meaning: "Deutsch? — Ja, ein bisschen." },
            { pronoun: "Wohnst", verb: "ihr", meaning: "in Berlin? — Nein, wir wohnen in Hamburg." },
            { pronoun: "Lernt", verb: "er", meaning: "Spanisch? — Ja, er lernt Spanisch." },
          ]
        },
        {
          type: "dialogue",
          title: "Alles zusammen — A full conversation using SVK + W-Fragen",
          lines: [
            { speaker: "Jana", text: "Hallo! Ich bin Jana. Wie heißt du?", translation: "Hi! I'm Jana. What's your name?" },
            { speaker: "Felix", text: "Ich heiße Felix. Woher kommst du, Jana?", translation: "My name is Felix. Where are you from, Jana?" },
            { speaker: "Jana", text: "Ich komme aus Wien. Und du?", translation: "I come from Vienna. And you?" },
            { speaker: "Felix", text: "Ich komme aus Hamburg. Wohnst du jetzt in Berlin?", translation: "I come from Hamburg. Do you live in Berlin now?" },
            { speaker: "Jana", text: "Ja, ich wohne seit einem Jahr hier. Warum lernst du Deutsch?", translation: "Yes, I've been living here for a year. Why are you learning German?" },
            { speaker: "Felix", text: "Weil ich Deutsch studiere! Die Sprache ist interessant.", translation: "Because I'm studying German! The language is interesting." },
          ]
        },
        {
          type: "tip",
          text: "The V2 rule has only one exception: subordinate clauses (Nebensätze). After connectors like 'weil' (because), 'dass' (that), 'obwohl' (although), the verb goes to the END. Example: 'Ich lerne Deutsch, weil es interessant IST.' You'll master this in Kapitel 5 — for now, just know it exists!",
          textDe: "Die V2-Regel hat nur eine Ausnahme: Nebensätze. Nach 'weil', 'dass', 'obwohl' steht das Verb am ENDE: 'Ich lerne Deutsch, weil es interessant IST.' Das lernst du in Kapitel 5 — jetzt merke dir nur, dass es existiert!"
        }
      ]
    },

    {
      id: "a1-k1-rev",
      level: "A1",
      number: "K1·D1",
      title: "Révision — Kapitel 1",
      subtitle: "Révision complète du vocabulaire et des structures du Kapitel 1",
      icon: "📖",
      duration: "20 min",
      xp: 30,
      color: "#f472b6",
      sections: [
        {
          type: "intro",
          title: "Rückblick Kapitel 1 — Tout revoir avant le test !",
          content: "In Kapitel 1 you learned to greet people, introduce yourself, use the alphabet, count to 100, name European countries and languages, and build basic German sentences. This revision lesson brings it all together with a short text, key vocabulary, and grammar summary.",
          contentDe: "In Kapitel 1 hast du gelernt: grüßen, dich vorstellen, das Alphabet, bis 100 zählen, europäische Länder und Sprachen nennen, und einfache Sätze bauen. Diese Lektion bringt alles zusammen."
        },
        {
          type: "vocabulary",
          title: "Die 20 wichtigsten Wörter aus Kapitel 1",
          words: [
            { german: "heißen", english: "to be called / to be named", example: "Ich heiße Marie. Wie heißt du?" },
            { german: "kommen aus", english: "to come from", example: "Sie kommt aus Brasilien." },
            { german: "wohnen in", english: "to live in", example: "Wir wohnen in München." },
            { german: "sprechen", english: "to speak", example: "Er spricht drei Sprachen." },
            { german: "lernen", english: "to learn / to study", example: "Ich lerne jeden Tag Deutsch." },
            { german: "der Name", english: "the name", example: "Mein Name ist Thomas." },
            { german: "die Nationalität", english: "the nationality", example: "Meine Nationalität ist Französisch." },
            { german: "der Beruf", english: "the job / profession", example: "Mein Beruf ist Lehrer." },
            { german: "das Hobby (-s)", english: "the hobby", example: "Mein Hobby ist Fußball." },
            { german: "buchstabieren", english: "to spell", example: "Wie buchstabiert man das?" },
            { german: "der Buchstabe (-n)", english: "the letter", example: "Das Alphabet hat 26 Buchstaben." },
            { german: "die Zahl (-en)", english: "the number", example: "Schreib die Zahl auf Deutsch!" },
            { german: "die Sprache (-n)", english: "the language", example: "Welche Sprachen sprichst du?" },
            { german: "das Land (Länder)", english: "the country / countries", example: "Deutschland ist ein großes Land." },
            { german: "formell / informell", english: "formal / informal", example: "Benutze 'Sie' in formellen Situationen." },
            { german: "Guten Morgen!", english: "Good morning!", example: "Guten Morgen, Frau Müller!" },
            { german: "Auf Wiedersehen!", english: "Goodbye!", example: "Auf Wiedersehen, Herr Koch!" },
            { german: "Wie geht es Ihnen? / dir?", english: "How are you? (formal/informal)", example: "Gut, danke! Und Ihnen?" },
            { german: "Das stimmt!", english: "That's right! / Correct!", example: "Ja, das stimmt!" },
            { german: "Ich verstehe nicht.", english: "I don't understand.", example: "Entschuldigung, ich verstehe nicht." },
          ]
        },
        {
          type: "grammar",
          title: "Grammatik-Übersicht Kapitel 1 — Quick Reference",
          items: [
            { pronoun: "sein — to be", verb: "ich bin · du bist · er ist · wir sind", meaning: "Ich bin Student. Er ist Lehrer." },
            { pronoun: "heißen — to be named", verb: "ich heiße · du heißt · er heißt", meaning: "Wie heißt du? Ich heiße Felix." },
            { pronoun: "kommen — to come", verb: "ich komme · du kommst · er kommt", meaning: "Woher kommst du? Aus Spanien." },
            { pronoun: "wohnen — to live", verb: "ich wohne · du wohnst · er wohnt", meaning: "Wo wohnst du? In Berlin." },
            { pronoun: "sprechen — to speak", verb: "ich spreche · du sprichst · er spricht", meaning: "Was sprichst du? Deutsch!" },
            { pronoun: "V2-Regel", verb: "Verb = immer Position 2", meaning: "Heute LERNE ich. In Wien WOHNT er." },
            { pronoun: "W-Frage", verb: "Fragewort + Verb + Subjekt", meaning: "Wo WOHNST DU? Was LERNST DU?" },
            { pronoun: "Ja/Nein-Frage", verb: "Verb + Subjekt + Rest?", meaning: "KOMMST DU aus Frankreich?" },
            { pronoun: "Kein Artikel + Länder", verb: "Ich komme aus Deutschland", meaning: "Ausnahmen: aus DER Schweiz/Türkei" },
          ]
        },
        {
          type: "story_text",
          title: "Lesetext — Mein internationaler Deutschkurs",
          level: "A1",
          paragraphs: [
            {
              text: "Ich heiße Isabelle und ich komme aus Frankreich, aus Lyon. Ich wohne seit drei Monaten in Berlin und ich lerne Deutsch.",
              translation: "My name is Isabelle and I come from France, from Lyon. I have been living in Berlin for three months and I am learning German."
            },
            {
              text: "In meinem Deutschkurs sind 12 Studenten. Wir kommen aus vielen verschiedenen Ländern: aus Spanien, Japan, Brasilien, der Türkei und Marokko.",
              translation: "In my German class there are 12 students. We come from many different countries: from Spain, Japan, Brazil, Turkey and Morocco."
            },
            {
              text: "Meine Lehrerin heißt Frau Bergmann. Sie kommt aus Hamburg. Sie spricht Deutsch, Englisch und ein bisschen Französisch.",
              translation: "My teacher's name is Ms Bergmann. She comes from Hamburg. She speaks German, English and a little French."
            },
            {
              text: "Heute buchstabieren wir unsere Namen auf Deutsch. Das ist interessant! Mein Name: I-S-A-B-E-L-L-E. Kein Umlaut — gut für mich!",
              translation: "Today we spell our names in German. That is interesting! My name: I-S-A-B-E-L-L-E. No umlaut — good for me!"
            },
            {
              text: "Nach dem Kurs spreche ich mit meinem Mitschüler Kenji aus Japan. Er sagt: 'Guten Abend, Isabelle! Bis morgen!' Ich antworte: 'Tschüss, Kenji! Schönen Abend!'",
              translation: "After class I speak with my classmate Kenji from Japan. He says: 'Good evening, Isabelle! See you tomorrow!' I reply: 'Bye, Kenji! Have a nice evening!'"
            }
          ],
          vocabulary: [
            { german: "seit (+ Dativ)", english: "since / for (time)", example: "Ich wohne seit einem Jahr in Berlin." },
            { german: "verschieden", english: "different / various", example: "Wir kommen aus verschiedenen Ländern." },
            { german: "ein bisschen", english: "a little / a bit", example: "Ich spreche ein bisschen Spanisch." },
            { german: "der Mitschüler / die Mitschülerin", english: "classmate (m/f)", example: "Mein Mitschüler heißt Kenji." },
            { german: "antworten", english: "to answer / to reply", example: "Er antwortet auf Deutsch." },
          ]
        },
        {
          type: "tip",
          text: "Revision strategy (Spaced Repetition): After this lesson, wait 1 day, then try to recall 10 words without looking. After 3 days, recall again. After 1 week, final review. Studies show this triples long-term retention compared to re-reading. Use flashcard apps like Anki or the vocabulary section of this platform!",
          textDe: "Lernstrategie (Spaced Repetition): Nach dieser Lektion warte 1 Tag, dann versuche 10 Wörter zu erinnern, ohne nachzuschauen. Nach 3 Tagen nochmal. Nach 1 Woche finale Wiederholung. Diese Methode verdreifacht das Langzeitgedächtnis gegenüber Wiederbelesen."
        }
      ]
    },

    {
      id: "a1-k1-ex",
      level: "A1",
      number: "K1·D2",
      title: "Exercices de consolidation — Kapitel 1",
      subtitle: "Exercices variés : dialogue, grammaire, traduction, vocabulaire",
      icon: "✏️",
      duration: "25 min",
      xp: 40,
      color: "#f472b6",
      sections: [
        {
          type: "intro",
          title: "Üben macht den Meister — Practice makes perfect!",
          content: "This lesson puts all of Kapitel 1 into practice. You will complete dialogues, conjugate verbs, build sentences with the V2 rule, and practise spelling German names. Work through each exercise at your own pace — the goal is fluency, not speed.",
          contentDe: "Diese Lektion setzt alles aus Kapitel 1 in die Praxis um. Du vervollständigst Dialoge, konjugierst Verben, baust Sätze nach der V2-Regel und übst, deutsche Namen zu buchstabieren. Arbeite in deinem eigenen Tempo."
        },
        {
          type: "grammar",
          title: "Übung 1 — Verben konjugieren (Ergänze die Tabelle)",
          items: [
            { pronoun: "ich", verb: "heiße / komme / wohne / spreche / lerne", meaning: "→ Ich heiße Max. Ich komme aus Wien." },
            { pronoun: "du", verb: "heißt / kommst / wohnst / sprichst / lernst", meaning: "→ Wie heißt du? Woher kommst du?" },
            { pronoun: "er/sie/es", verb: "heißt / kommt / wohnt / spricht / lernt", meaning: "→ Er heißt Tom. Sie kommt aus Paris." },
            { pronoun: "wir", verb: "heißen / kommen / wohnen / sprechen / lernen", meaning: "→ Wir wohnen in Berlin." },
            { pronoun: "ihr", verb: "heißt / kommt / wohnt / sprecht / lernt", meaning: "→ Wo wohnt ihr?" },
            { pronoun: "sie/Sie", verb: "heißen / kommen / wohnen / sprechen / lernen", meaning: "→ Woher kommen Sie? (formell)" },
          ]
        },
        {
          type: "grammar",
          title: "Übung 2 — Sätze umstellen (V2-Regel üben)",
          items: [
            { pronoun: "Normal: Ich lerne heute Deutsch.", verb: "Mit Adverb vorne:", meaning: "Heute LERNE ich Deutsch. ✓" },
            { pronoun: "Normal: Marie wohnt in Wien.", verb: "Mit Ort vorne:", meaning: "In Wien WOHNT Marie. ✓" },
            { pronoun: "Normal: Er kommt aus Japan.", verb: "Mit Subjekt hinten:", meaning: "Aus Japan KOMMT er. ✓" },
            { pronoun: "Fehler finden:", verb: "Ich heute lerne Deutsch.", meaning: "❌ FALSCH → Heute lerne ich Deutsch. ✓" },
            { pronoun: "Fehler finden:", verb: "Woher du kommst?", meaning: "❌ FALSCH → Woher kommst du? ✓" },
          ]
        },
        {
          type: "dialogue",
          title: "Übung 3 — Rollenspiel: Sich vorstellen (Lückentext)",
          lines: [
            { speaker: "Person A", text: "Guten Tag! Mein Name ist ___. Ich komme aus ___.", translation: "➜ Fill in: your name and country. Use formal 'Sie'." },
            { speaker: "Person B", text: "Guten Tag! Ich heiße ___. Woher kommen Sie genau?", translation: "➜ Ask for more detail about their city." },
            { speaker: "Person A", text: "Ich komme aus ___, das ist eine Stadt in ___.", translation: "➜ Name your city and country." },
            { speaker: "Person B", text: "Interessant! Welche Sprachen sprechen Sie?", translation: "➜ 'Which languages do you speak?'" },
            { speaker: "Person A", text: "Ich spreche ___ und ___. Ich lerne gerade Deutsch.", translation: "➜ Name 2+ languages you speak." },
            { speaker: "Person B", text: "Ihr Deutsch ist schon sehr gut! Auf Wiedersehen!", translation: "➜ End the conversation formally." },
          ]
        },
        {
          type: "number_table",
          title: "Übung 4 — Zahlen buchstabieren (Schreibe die Zahl auf Deutsch)",
          numbers: [
            { number: "17", german: "siebzehn", english: "17 = sieben + zehn" },
            { number: "23", german: "dreiundzwanzig", english: "3 + und + 20" },
            { number: "45", german: "fünfundvierzig", english: "5 + und + 40" },
            { number: "68", german: "achtundsechzig", english: "8 + und + 60" },
            { number: "71", german: "einundsiebzig", english: "1 + und + 70" },
            { number: "99", german: "neunundneunzig", english: "9 + und + 90" },
            { number: "100", german: "hundert / einhundert", english: "100 = hundert" },
          ]
        },
        {
          type: "vocabulary",
          title: "Übung 5 — Wortschatz: Was passt zusammen?",
          words: [
            { german: "buchstabieren ↔ der Buchstabe", english: "to spell ↔ the letter", example: "Kannst du das buchstabieren? B-U-C-H." },
            { german: "sprechen ↔ die Sprache", english: "to speak ↔ the language", example: "Er spricht die Sprache fließend." },
            { german: "zählen ↔ die Zahl", english: "to count ↔ the number", example: "Zähl von 1 bis 20 auf Deutsch!" },
            { german: "wohnen ↔ die Wohnung", english: "to live ↔ the apartment", example: "Ich wohne in einer kleinen Wohnung." },
            { german: "lernen ↔ der Lerner / die Lernerin", english: "to learn ↔ the learner", example: "Du bist ein guter Deutschlerner!" },
            { german: "kommen ↔ die Herkunft", english: "to come ↔ the origin", example: "Meine Herkunft ist Italien." },
          ]
        },
        {
          type: "tip",
          text: "Speaking exercise: Record yourself introducing yourself in German (30 seconds). Include: your name, where you come from, where you live, what languages you speak, and one hobby. Listen back — do you hear any mistakes? Repeat until it sounds natural. This is one of the most effective techniques for A1 fluency.",
          textDe: "Sprechübung: Nimm dich auf, wie du dich auf Deutsch vorstellst (30 Sekunden). Name, Herkunft, Wohnort, Sprachen, ein Hobby. Höre dir die Aufnahme an — hörst du Fehler? Wiederhole, bis es natürlich klingt. Das ist eine der effektivsten Techniken für A1-Flüssigkeit."
        }
      ]
    },

    {
      id: "a1-k1-test",
      level: "A1",
      number: "K1·D3",
      title: "Mini-Test — Kapitel 1",
      subtitle: "Teste tes connaissances sur tout le Kapitel 1 — 12 questions interactives",
      icon: "🎯",
      duration: "15 min",
      xp: 60,
      color: "#f472b6",
      sections: [
        {
          type: "intro",
          title: "Bereit für den Test? — Es geht los!",
          content: "This mini-test covers all of Kapitel 1: greetings (du/Sie), the alphabet & umlauts, numbers, European countries & languages, verb conjugation (sein, heißen, kommen, wohnen), German sentence structure (V2 rule + W-questions), and articles. 12 questions — answer carefully and read the explanations to learn from your mistakes!",
          contentDe: "Dieser Mini-Test deckt alles aus Kapitel 1 ab: Begrüßung, Alphabet, Zahlen, Länder & Sprachen, Verbkonjugation und Satzbau. 12 Fragen — lies die Erklärungen bei Fehlern genau durch!"
        },
        {
          type: "quiz",
          title: "Mini-Test — Kapitel 1 (12 questions)",
          questions: [
            {
              topic: "Grußformeln",
              question: "Es ist 14:00 Uhr. Du triffst deinen Chef zum ersten Mal. Was sagst du?",
              options: ["Hallo! Wie geht's?", "Guten Tag! Wie geht es Ihnen?", "Servus! Alles klar?", "Guten Morgen! Freut mich."],
              correct: 1,
              explanation: "14:00 = afternoon → 'Guten Tag'. With your boss you use the formal 'Sie', so 'Wie geht es Ihnen?' (not 'dir'). 'Guten Morgen' is only until about 12:00."
            },
            {
              topic: "Du oder Sie?",
              question: "Du lernst einen neuen Mitschüler kennen, der 18 Jahre alt ist. Wie sprichst du ihn an?",
              options: ["mit Sie — er ist fast erwachsen", "mit du — gleiche Situation / gleiches Alter", "mit Ihr — er ist Fremder", "gar nicht ansprechen"],
              correct: 1,
              explanation: "'Du' is used with friends, classmates and people of similar age/situation. 'Sie' is for strangers in professional/formal contexts, older people, or authority figures."
            },
            {
              topic: "Das Alphabet",
              question: "Wie schreibt man den Buchstaben 'Ü' wenn die Umlaut-Taste fehlt?",
              options: ["UE", "UI", "U'", "ue"],
              correct: 3,
              explanation: "The standard substitution: Ä→ae, Ö→oe, Ü→ue, ß→ss. So Müller = Mueller, Österreich = Oesterreich. Both upper and lower case versions work."
            },
            {
              topic: "Das Alphabet",
              question: "Du buchstabierst deinen Namen am Telefon. Der Buchstabe 'J' heißt auf Deutsch…",
              options: ["dschei", "yot", "jeh", "dschot"],
              correct: 1,
              explanation: "'J' is pronounced 'yot' in German (like the English 'y' in 'yes'). This is very different from English 'jay'! The DIN 5009 mnemonic is 'Julius'."
            },
            {
              topic: "Verben",
              question: "Ergänze: 'Wie _____ du?' — (heißen)",
              options: ["heißt", "heißest", "heiße", "heißen"],
              correct: 0,
              explanation: "'heißen' conjugation: ich heiße, du HEISST, er/sie heißt, wir heißen, ihr heißt, sie heißen. The 'du' form drops the vowel change: heiß + t = heißt."
            },
            {
              topic: "Verben",
              question: "Welche Konjugation ist FALSCH?",
              options: ["ich komme", "du kommst", "er kommt", "wir kommt"],
              correct: 3,
              explanation: "'wir kommt' is WRONG! With 'wir' (we), the verb takes the infinitive form: wir KOMMEN. Wir kommen, sie kommen, Sie kommen — all use the infinitive ending (-en)."
            },
            {
              topic: "Satzbau (V2-Regel)",
              question: "Welcher Satz ist RICHTIG?",
              options: ["Heute ich lerne Deutsch.", "Heute lerne ich Deutsch.", "Heute lerne Deutsch ich.", "Ich heute lerne Deutsch."],
              correct: 1,
              explanation: "V2 rule: the verb MUST be in position 2. When 'Heute' (today) is in position 1, the verb 'lerne' comes immediately in position 2, pushing the subject 'ich' to position 3."
            },
            {
              topic: "W-Fragen",
              question: "Ich möchte wissen, wo jemand wohnt. Welche Frage stelle ich?",
              options: ["Woher kommst du?", "Wie heißt du?", "Wo wohnst du?", "Wohin fährst du?"],
              correct: 2,
              explanation: "'Wo?' = Where? (place where you are/live). 'Woher?' = Where from? (origin). 'Wohin?' = Where to? (destination). 'Wie?' = How/What? (name, manner)."
            },
            {
              topic: "Sprachen & Länder",
              question: "Sophie kommt aus der Schweiz. Welche Sprachen kann sie sprechen?",
              options: ["Nur Deutsch", "Deutsch, Französisch oder Italienisch", "Nur Französisch und Rätoromanisch", "Schweizerdeutsch und Englisch"],
              correct: 1,
              explanation: "Switzerland has 4 official languages: Deutsch (64%), Französisch (23%), Italienisch (8%), Rätoromanisch (1%). Most Swiss people speak at least 2. It depends on which region Sophie is from!"
            },
            {
              topic: "Sprachen & Länder",
              question: "Du sagst: 'Ich komme aus ___ Schweiz.' Was fehlt?",
              options: ["(nichts — kein Artikel)", "der", "die", "dem"],
              correct: 1,
              explanation: "'Ich komme aus der Schweiz.' — 'die Schweiz' is a feminine noun that keeps its article even after 'aus'. Exceptions to the no-article rule: die Schweiz, die Türkei, die USA, der Iran, der Irak → aus der/den."
            },
            {
              topic: "Zahlen",
              question: "Wie schreibt man die Zahl 47 auf Deutsch?",
              options: ["vierundvierzig", "siebenundvierzig", "vierundsiebzig", "siebenundvierzig"],
              correct: 1,
              explanation: "47 = sieben (7) + und + vierzig (40) = 'siebenundvierzig'. German compound numbers always say the ones digit FIRST, then 'und', then the tens. So 47 = 'seven-and-forty'."
            },
            {
              topic: "Negation",
              question: "Ich lerne kein Chinesisch. Was bedeutet das?",
              options: ["I'm learning Chinese badly", "I'm not learning Chinese", "I speak Chinese", "I want to learn Chinese"],
              correct: 1,
              explanation: "'kein' negates nouns: kein + (noun). Ich lerne kein Chinesisch = I am not learning Chinese. Compare: Ich spreche nicht laut = I don't speak loudly (nicht + adjective/adverb). Kein replaces ein/eine/ein in negation."
            }
          ]
        },
        {
          type: "tip",
          text: "Score guide: 11–12 = Ausgezeichnet! · 9–10 = Sehr gut! · 7–8 = Gut gemacht! · Under 7 = Nochmal üben. Read every explanation carefully — even for questions you got right. Understanding WHY an answer is correct is more valuable than just knowing the answer.",
          textDe: "Ergebnis: 11–12 = Ausgezeichnet! · 9–10 = Sehr gut! · 7–8 = Gut gemacht! · Unter 7 = Nochmal üben. Lies jede Erklärung sorgfältig — auch für richtige Antworten. Das tiefe Verstehen ist wichtiger als die Punktzahl."
        }
      ]
    },

    // ── KAPITEL 3 — Unterwegs in München ─────────────────────────────────

    {
      id: "a1-k3-hotel",
      level: "A1",
      number: "K3·A1",
      title: "Im Hotel",
      subtitle: "Réserver et s'enregistrer à l'hôtel — chambre, prix, services et réclamations",
      icon: "🏨",
      duration: "18 min",
      xp: 55,
      color: "#f59e0b",
      sections: [
        {
          type: "intro",
          title: "Willkommen im Hotel! — Bienvenue à l'hôtel !",
          content: "Hotels (Hotels) are one of the most common real-life settings where A1 German is needed. From reserving over the phone to checking in at the front desk (Rezeption), dealing with problems in your room, and checking out — you need specific vocabulary and polite phrases. German hotel staff expect formal 'Sie' language.",
          contentDe: "Hotels sind einer der häufigsten Alltagsbereiche, wo A1-Deutsch gebraucht wird. Von der Reservierung bis zum Check-in an der Rezeption, bei Problemen im Zimmer und beim Check-out braucht man spezifisches Vokabular und höfliche Formulierungen."
        },
        {
          type: "vocabulary",
          title: "Hotel-Vokabular — Essential hotel vocabulary",
          words: [
            { german: "die Rezeption (-en)", english: "the reception / front desk", example: "Guten Tag! Ich habe eine Reservierung. — At der Rezeption." },
            { german: "das Einzelzimmer (-)", english: "the single room", example: "Ich möchte ein Einzelzimmer für zwei Nächte." },
            { german: "das Doppelzimmer (-)", english: "the double room", example: "Haben Sie ein Doppelzimmer frei?" },
            { german: "die Nacht (Nächte)", english: "the night", example: "Ich bleibe drei Nächte — von Montag bis Donnerstag." },
            { german: "die Reservierung (-en)", english: "the reservation / booking", example: "Meine Reservierung ist auf den Namen Schmidt." },
            { german: "das Frühstück", english: "the breakfast", example: "Ist das Frühstück im Preis inbegriffen?" },
            { german: "der Schlüssel (-)", english: "the key / key card", example: "Hier ist Ihr Schlüssel — Zimmer 214." },
            { german: "der Aufzug (Aufzüge)", english: "the elevator / lift", example: "Der Aufzug ist links neben der Rezeption." },
            { german: "das Badezimmer (-)", english: "the bathroom", example: "Das Badezimmer ist im Zimmer." },
            { german: "die Klimaanlage (-n)", english: "the air conditioning", example: "Die Klimaanlage funktioniert nicht — kann ich ein anderes Zimmer haben?" },
            { german: "das WLAN", english: "the WiFi", example: "Was ist das WLAN-Passwort?" },
            { german: "der Check-out", english: "the check-out", example: "Wann ist der Check-out? — Um 11 Uhr." },
          ]
        },
        {
          type: "dialogue",
          title: "An der Rezeption — Check-in dialogue",
          lines: [
            { speaker: "Rezeptionist", text: "Guten Tag! Willkommen im Hotel Zentrum. Was kann ich für Sie tun?", translation: "Good day! Welcome to Hotel Zentrum. What can I do for you?" },
            { speaker: "Gast", text: "Guten Tag! Ich habe eine Reservierung auf den Namen Bauer.", translation: "Good day! I have a reservation under the name Bauer." },
            { speaker: "Rezeptionist", text: "Einen Moment… Ja, Herr Bauer. Ein Einzelzimmer für drei Nächte, vom 10. bis 13. März. Richtig?", translation: "One moment… Yes, Mr Bauer. A single room for three nights, from 10 to 13 March. Correct?" },
            { speaker: "Gast", text: "Ja, genau. Ist das Frühstück inklusive?", translation: "Yes, exactly. Is breakfast included?" },
            { speaker: "Rezeptionist", text: "Ja, das Frühstück ist von 7 bis 10 Uhr im Restaurant im Erdgeschoss.", translation: "Yes, breakfast is from 7 to 10 am in the restaurant on the ground floor." },
            { speaker: "Gast", text: "Gut. Und wo ist das WLAN-Passwort?", translation: "Good. And where is the WiFi password?" },
            { speaker: "Rezeptionist", text: "Es steht auf dieser Karte — zusammen mit Ihrem Zimmerschlüssel. Zimmer 312, dritter Stock. Der Aufzug ist rechts.", translation: "It's on this card — together with your room key. Room 312, third floor. The elevator is on the right." },
            { speaker: "Gast", text: "Vielen Dank!", translation: "Thank you very much!" },
          ]
        },
        {
          type: "vocabulary",
          title: "Reklamationen — Dealing with problems in the room",
          words: [
            { german: "Das Zimmer ist zu laut.", english: "The room is too noisy.", example: "Das Zimmer ist zu laut. Haben Sie ein ruhigeres Zimmer?" },
            { german: "Die Heizung funktioniert nicht.", english: "The heating doesn't work.", example: "Es ist sehr kalt — die Heizung funktioniert nicht." },
            { german: "Das Badezimmer ist nicht sauber.", english: "The bathroom is not clean.", example: "Das Badezimmer ist nicht sauber. Können Sie das reinigen?" },
            { german: "Kann ich ein anderes Zimmer haben?", english: "Can I have a different room?", example: "Die Klimaanlage ist kaputt. Kann ich ein anderes Zimmer haben?" },
            { german: "Ich brauche mehr Handtücher.", english: "I need more towels.", example: "Entschuldigung, ich brauche mehr Handtücher, bitte." },
            { german: "Der Fernseher funktioniert nicht.", english: "The TV doesn't work.", example: "Der Fernseher funktioniert nicht — kein Bild." },
          ]
        },
        {
          type: "grammar",
          title: "Höfliche Bitten im Hotel — Polite requests with möchten / können",
          items: [
            { pronoun: "Ich möchte…", verb: "Ich möchte ein Einzelzimmer.", meaning: "I would like a single room. (polite wish)" },
            { pronoun: "Haben Sie…?", verb: "Haben Sie ein Doppelzimmer frei?", meaning: "Do you have a double room available?" },
            { pronoun: "Können Sie…?", verb: "Können Sie mir helfen?", meaning: "Can you help me? (formal Sie)" },
            { pronoun: "Was kostet…?", verb: "Was kostet eine Nacht?", meaning: "How much does one night cost?" },
            { pronoun: "Ich hätte gerne…", verb: "Ich hätte gerne die Rechnung.", meaning: "I would like the bill. (very polite)" },
            { pronoun: "Wann ist…?", verb: "Wann ist der Check-out?", meaning: "When is check-out?" },
          ]
        },
        {
          type: "tip",
          text: "Hotel German etiquette: Always use 'Sie' (formal you) with hotel staff — never 'du'. Start every interaction with 'Guten Tag' or 'Guten Morgen'. When stating your name say 'auf den Namen [Nachname]' (under the name…). When asking for the bill: 'Ich möchte zahlen' or 'Die Rechnung, bitte.' Most German hotels include breakfast (Frühstück inklusive) — this is called 'Übernachtung mit Frühstück' (B&B).",
          textDe: "Hotel-Etiquette: Immer 'Sie' benutzen — nie 'du' mit dem Personal. Mit 'Guten Tag' oder 'Guten Morgen' beginnen. Beim Zahlen: 'Ich möchte zahlen' oder 'Die Rechnung, bitte.' Viele deutsche Hotels haben 'Übernachtung mit Frühstück' (B&B) — fragen Sie: 'Ist das Frühstück inklusive?'"
        }
      ]
    },

    {
      id: "a1-k3-stadtplan",
      level: "A1",
      number: "K3·A2",
      title: "Der Stadtplan — Den Weg beschreiben",
      subtitle: "Lire un plan de ville — geradeaus, links, rechts, biegen Sie ab…",
      icon: "🗺️",
      duration: "15 min",
      xp: 50,
      color: "#f59e0b",
      sections: [
        {
          type: "intro",
          title: "Wie komme ich zum Bahnhof? — Asking and giving directions",
          content: "Being able to ask for directions (nach dem Weg fragen) and understand the answer is one of the most practical real-world German skills. Whether you're in Munich, Berlin or Vienna, these phrases will always be useful. You'll learn direction vocabulary, how to describe routes, and key landmarks.",
          contentDe: "Den Weg erfragen und verstehen ist eine der praktischsten Alltagsfähigkeiten. Ob in München, Berlin oder Wien — diese Phrasen sind immer nützlich. Du lernst Richtungsvokabular, Routenbeschreibungen und wichtige Orientierungspunkte."
        },
        {
          type: "vocabulary",
          title: "Richtungen und Orientierung — Directions vocabulary",
          words: [
            { german: "geradeaus", english: "straight ahead", example: "Gehen Sie geradeaus — ca. 200 Meter." },
            { german: "links", english: "left", example: "Biegen Sie links ab." },
            { german: "rechts", english: "right", example: "Die Post ist rechts, nach der Ampel." },
            { german: "nach links / nach rechts", english: "to the left / to the right", example: "Gehen Sie nach links an der Kreuzung." },
            { german: "die Kreuzung (-en)", english: "the intersection / crossroads", example: "An der Kreuzung gehen Sie rechts." },
            { german: "die Ampel (-n)", english: "the traffic light", example: "Bei der Ampel nach links abbiegen." },
            { german: "die Straße (-n)", english: "the street", example: "Die erste Straße links." },
            { german: "die Ecke (-n)", english: "the corner", example: "Das Hotel ist um die Ecke." },
            { german: "gegenüber (von)", english: "opposite / across from", example: "Die Bank ist gegenüber dem Bahnhof." },
            { german: "neben (+Dat.)", english: "next to", example: "Das Restaurant ist neben dem Hotel." },
            { german: "bis zur / zum…", english: "as far as / until the…", example: "Gehen Sie geradeaus bis zum Marktplatz." },
            { german: "ungefähr / ca.", english: "approximately / about", example: "Es sind ungefähr 5 Minuten zu Fuß." },
          ]
        },
        {
          type: "grammar",
          title: "Den Weg beschreiben — Useful direction phrases",
          items: [
            { pronoun: "Biegen Sie… ab.", verb: "Biegen Sie rechts ab!", meaning: "Turn right! (formal command with 'Sie')" },
            { pronoun: "Gehen Sie…", verb: "Gehen Sie geradeaus!", meaning: "Go straight ahead! (formal Sie-imperative)" },
            { pronoun: "Nehmen Sie…", verb: "Nehmen Sie die U-Bahn!", meaning: "Take the metro! (formal imperative)" },
            { pronoun: "Die erste / zweite Straße links", verb: "Die erste Straße links!", meaning: "The first/second street on the left" },
            { pronoun: "Es ist… von hier.", verb: "Es ist 5 Minuten zu Fuß von hier.", meaning: "It's 5 minutes on foot from here." },
            { pronoun: "Entschuldigung, wie komme ich…?", verb: "Wie komme ich zum Bahnhof?", meaning: "Excuse me, how do I get to the station?" },
            { pronoun: "Wo ist…?", verb: "Wo ist das nächste Hotel?", meaning: "Where is the nearest hotel?" },
          ]
        },
        {
          type: "dialogue",
          title: "Nach dem Weg fragen — In München nach dem Marienplatz suchen",
          lines: [
            { speaker: "Tourist", text: "Entschuldigung! Ich suche den Marienplatz. Wie komme ich dahin?", translation: "Excuse me! I'm looking for Marienplatz. How do I get there?" },
            { speaker: "Passant", text: "Ja, kein Problem! Gehen Sie hier geradeaus, ungefähr 200 Meter.", translation: "Yes, no problem! Go straight here, about 200 metres." },
            { speaker: "Tourist", text: "Geradeaus — okay. Und dann?", translation: "Straight ahead — okay. And then?" },
            { speaker: "Passant", text: "An der Ampel biegen Sie links ab. Dann sehen Sie die Kaufingerstraße.", translation: "At the traffic light turn left. Then you'll see Kaufingerstraße." },
            { speaker: "Tourist", text: "Kaufingerstraße — links an der Ampel. Richtig?", translation: "Kaufingerstraße — left at the traffic light. Correct?" },
            { speaker: "Passant", text: "Genau! Und der Marienplatz ist am Ende der Straße — rechts.", translation: "Exactly! And Marienplatz is at the end of the street — on the right." },
            { speaker: "Tourist", text: "Wie weit ist das zu Fuß?", translation: "How far is that on foot?" },
            { speaker: "Passant", text: "Ca. 10 Minuten. Kein Problem!", translation: "About 10 minutes. No problem!" },
            { speaker: "Tourist", text: "Vielen Dank! Sie sind sehr nett.", translation: "Many thanks! You are very kind." },
          ]
        },
        {
          type: "vocabulary",
          title: "Orientierungspunkte — Key landmarks for navigation",
          words: [
            { german: "der Bahnhof (Bahnhöfe)", english: "the train station", example: "Wie komme ich zum Hauptbahnhof?" },
            { german: "die U-Bahn-Station (-en)", english: "the metro station", example: "Die nächste U-Bahn-Station ist hier links." },
            { german: "die Bushaltestelle (-n)", english: "the bus stop", example: "Die Bushaltestelle ist gegenüber dem Supermarkt." },
            { german: "die Post (-en)", english: "the post office", example: "Wo ist die nächste Post?" },
            { german: "die Bank (-en)", english: "the bank", example: "Die Bank ist gegenüber dem Hotel." },
            { german: "die Apotheke (-n)", english: "the pharmacy", example: "Ich suche eine Apotheke — ich bin krank." },
            { german: "der Supermarkt (Supermärkte)", english: "the supermarket", example: "Wo ist der nächste Supermarkt?" },
            { german: "das Rathaus (Rathäuser)", english: "the town hall", example: "Das Rathaus ist am Marktplatz." },
          ]
        },
        {
          type: "tip",
          text: "When asking for directions in German, use 'Entschuldigung' (Excuse me) to get attention, then 'Wie komme ich zum/zur…?' (How do I get to…?). Use 'zum' before masculine/neuter nouns (zum Bahnhof, zum Hotel) and 'zur' before feminine nouns (zur Post, zur Apotheke). These are contractions: zu + dem = zum, zu + der = zur.",
          textDe: "Nach dem Weg fragen: 'Entschuldigung' zum Aufmerksamkeit erregen, dann 'Wie komme ich zum/zur…?' 'Zum' vor maskulinen/neutralen Nomen (zum Bahnhof, zum Hotel) und 'zur' vor femininen Nomen (zur Post, zur Apotheke). Kontraktionen: zu + dem = zum, zu + der = zur."
        }
      ]
    },

    {
      id: "a1-k3-muenchen",
      level: "A1",
      number: "K3·A3",
      title: "In München — Stadt und Sehenswürdigkeiten",
      subtitle: "Les monuments et quartiers de Munich — Marienplatz, Englischer Garten, Hofbräuhaus…",
      icon: "🏙️",
      duration: "15 min",
      xp: 45,
      color: "#f59e0b",
      sections: [
        {
          type: "intro",
          title: "München — die Weltstadt mit Herz!",
          content: "Munich (München) is Bavaria's capital and Germany's third-largest city. Known for its world-class museums, beautiful parks, beer halls and proximity to the Alps, Munich is a top travel destination. It's also a major economic hub — BMW, Allianz and Siemens are based here. Let's explore the city through its most famous landmarks.",
          contentDe: "München ist die Hauptstadt Bayerns und Deutschlands drittgrößte Stadt. Bekannt für erstklassige Museen, schöne Parks, Bierhäuser und die Nähe zu den Alpen. Auch ein wichtiges Wirtschaftszentrum — BMW, Allianz und Siemens sind hier ansässig."
        },
        {
          type: "vocabulary",
          title: "Münchner Sehenswürdigkeiten — Key landmarks",
          words: [
            { german: "der Marienplatz", english: "Mary's Square — central square of Munich", example: "Der Marienplatz ist das Herz von München." },
            { german: "das Rathaus / Neues Rathaus", english: "New Town Hall — with the famous Glockenspiel", example: "Um 11 Uhr spielt das Glockenspiel am Rathaus." },
            { german: "der Englische Garten", english: "English Garden — huge urban park (bigger than Central Park!)", example: "Im Englischen Garten kann man surfen, picknicken und entspannen." },
            { german: "das Hofbräuhaus", english: "Hofbräuhaus — famous royal beer hall since 1589", example: "Das Hofbräuhaus ist ein Symbol Münchens — 1 Liter Bier = 1 Maß!" },
            { german: "die Frauenkirche", english: "Cathedral of Our Lady — Munich's most recognizable church", example: "Die Frauenkirche hat zwei Türme — das Wahrzeichen Münchens." },
            { german: "das Deutsche Museum", english: "German Museum — world's largest science and tech museum", example: "Das Deutsche Museum ist das größte Technikmuseum der Welt." },
            { german: "das Olympiastadion", english: "Olympic Stadium — built for the 1972 Summer Olympics", example: "Das Olympiastadion wurde für die Olympischen Spiele 1972 gebaut." },
            { german: "die Allianz Arena", english: "Allianz Arena — stadium of FC Bayern München", example: "FC Bayern spielt in der Allianz Arena — einer der modernsten Stadien Europas." },
            { german: "die Viktualienmarkt", english: "Viktualienmarkt — famous outdoor food market", example: "Auf dem Viktualienmarkt kauft man frisches Gemüse, Brot und Käse." },
            { german: "der Hauptbahnhof", english: "Munich Central Station — major transport hub", example: "Der Hauptbahnhof ist die wichtigste Bahnverbindung Münchens." },
          ]
        },
        {
          type: "dialogue",
          title: "Ein Touristengespräch — Was soll ich in München sehen?",
          lines: [
            { speaker: "Tourist", text: "Entschuldigung, ich bin zum ersten Mal in München. Was soll ich unbedingt sehen?", translation: "Excuse me, I'm in Munich for the first time. What should I absolutely see?" },
            { speaker: "Münchner", text: "Oh, vieles! Zuerst natürlich den Marienplatz — das ist das Herz der Stadt.", translation: "Oh, lots! First of course Marienplatz — that's the heart of the city." },
            { speaker: "Tourist", text: "Ist das weit von hier?", translation: "Is that far from here?" },
            { speaker: "Münchner", text: "Nein, nur 10 Minuten zu Fuß. Dann können Sie die Frauenkirche und das Rathaus sehen.", translation: "No, just 10 minutes on foot. Then you can see Frauenkirche and the Town Hall." },
            { speaker: "Tourist", text: "Und der Englische Garten? Ist er schön?", translation: "And the English Garden? Is it beautiful?" },
            { speaker: "Münchner", text: "Wunderschön! Er ist größer als der Central Park in New York. Perfekt für einen Spaziergang.", translation: "Wonderful! It's bigger than Central Park in New York. Perfect for a walk." },
            { speaker: "Tourist", text: "Und abends? Was empfehlen Sie?", translation: "And in the evening? What do you recommend?" },
            { speaker: "Münchner", text: "Das Hofbräuhaus natürlich! Bayerische Küche und Maß Bier — ein Muss!", translation: "Hofbräuhaus of course! Bavarian cuisine and a Maß of beer — a must!" },
          ]
        },
        {
          type: "grammar",
          title: "Über eine Stadt sprechen — Useful phrases",
          items: [
            { pronoun: "… ist bekannt für…", verb: "München ist bekannt für das Oktoberfest.", meaning: "… is famous for… (+ Akk.)" },
            { pronoun: "… liegt in…", verb: "München liegt in Bayern.", meaning: "… is located in… (geography)" },
            { pronoun: "… wurde… gebaut", verb: "Das Stadion wurde 1972 gebaut.", meaning: "… was built in… (passive: wurde + partizip)" },
            { pronoun: "… ist größer als…", verb: "Der Park ist größer als Central Park.", meaning: "… is bigger than… (comparative)" },
            { pronoun: "Man kann… sehen", verb: "Man kann die Alpen sehen.", meaning: "One can see… (general 'one')" },
            { pronoun: "Es gibt…", verb: "In München gibt es viele Museen.", meaning: "There are/is… in Munich" },
          ]
        },
        {
          type: "tip",
          text: "Munich essentials: The city has an excellent public transport network (MVV) — U-Bahn (metro), S-Bahn (city rail), Tram and Bus. Validate your ticket before boarding! The Englische Garten was designed in 1789 and has a famous river surfing spot (Eisbach). Bavarian greeting: 'Servus!' (hello/goodbye) and 'Grüß Gott!' (formal hello, literally 'Greet God'). These replace standard German greetings in Bavaria.",
          textDe: "München-Tipps: Hervorragendes ÖPNV-Netz (MVV) — U-Bahn, S-Bahn, Tram, Bus. Ticket vor dem Einsteigen entwerten! Im Englischen Garten kann man Eisbachsurfen beobachten. Bayerische Grüße: 'Servus!' (hallo/tschüss) und 'Grüß Gott!' (formales Hallo). Sie ersetzen das Standard-Deutsch in Bayern."
        }
      ]
    },

    {
      id: "a1-k3-kultur",
      level: "A1",
      number: "K3·B",
      title: "München — Sehenswürdigkeiten und Stadtgeschichte",
      subtitle: "Découverte culturelle — histoire, Oktoberfest, architecture bavaroise et gastronomie",
      icon: "🏛️",
      duration: "10 min",
      xp: 35,
      color: "#f59e0b",
      sections: [
        {
          type: "intro",
          title: "München — Geschichte und Kultur",
          content: "Munich was founded in 1158 by Henry the Lion. The name 'München' comes from 'bei den Mönchen' (near the monks). Today it's a city of contrasts: ultra-modern business hub with a deeply traditional Bavarian identity. The Oktoberfest, the Frauenkirche, dirndls and lederhosen — Munich is proud of its heritage.",
          contentDe: "München wurde 1158 von Heinrich dem Löwen gegründet. Der Name 'München' kommt von 'bei den Mönchen'. Heute eine Stadt der Kontraste: ultramodernes Wirtschaftszentrum mit tief verwurzelter bayerischer Identität. Das Oktoberfest, die Frauenkirche, Dirndl und Lederhose — München ist stolz auf sein Erbe."
        },
        {
          type: "vocabulary",
          title: "München — Geschichte und Identität",
          words: [
            { german: "Bayern / bayerisch", english: "Bavaria / Bavarian", example: "München ist die Hauptstadt des bayerischen Freistaates." },
            { german: "das Oktoberfest (-e)", english: "the Oktoberfest — world's largest beer festival", example: "Das Oktoberfest findet im September und Oktober statt." },
            { german: "die Maß (-en)", english: "the Maß — a 1-litre beer stein", example: "Eine Maß Bier kostet auf dem Oktoberfest ca. 15 Euro!" },
            { german: "das Dirndl (-)", english: "the Dirndl — traditional Bavarian women's dress", example: "Auf dem Oktoberfest tragen viele Frauen ein Dirndl." },
            { german: "die Lederhosen (Pl.)", english: "the Lederhosen — traditional Bavarian leather breeches", example: "Männer tragen auf dem Oktoberfest traditionell Lederhosen." },
            { german: "die Weißwurst (Würste)", english: "the Weisswurst — traditional white sausage", example: "Weißwurst ist ein typisches bayerisches Frühstück — mit Brezn und Weißbier." },
            { german: "die Brezn / die Brezel", english: "the pretzel", example: "Eine frische Brezn ist perfekt mit Leberkäse oder Butter." },
            { german: "der Biergarten (Biergärten)", english: "the beer garden — outdoor dining & drinking space", example: "Im Englischen Garten gibt es den größten Biergarten Münchens." },
            { german: "Grüß Gott!", english: "formal Bavarian greeting (lit. 'Greet God')", example: "In Bayern sagt man 'Grüß Gott!' statt 'Guten Tag!'" },
            { german: "Servus!", english: "informal Bavarian hello and goodbye", example: "Servus! Wie geht's? — Gut, danke! Und dir?" },
          ]
        },
        {
          type: "grammar",
          title: "Kulturelle Beschreibungen — Es gibt, man kann, es ist bekannt für",
          items: [
            { pronoun: "Es gibt…", verb: "In München gibt es das weltberühmte Oktoberfest.", meaning: "There is/are… (very useful for describing what a city has)" },
            { pronoun: "stattfinden", verb: "Das Oktoberfest findet im September statt.", meaning: "to take place — separable verb: statt·finden" },
            { pronoun: "Man kann… sehen/besuchen", verb: "Man kann die Frauenkirche besuchen.", meaning: "One can see/visit… (general statement)" },
            { pronoun: "bekannt für + Akk.", verb: "München ist bekannt für sein Bier!", meaning: "famous for something" },
            { pronoun: "seit + Datum (Dativ)", verb: "Das Oktoberfest gibt es seit 1810.", meaning: "since (year) — dates with 'seit' use Dativ" },
          ]
        },
        {
          type: "tip",
          text: "Oktoberfest facts: Despite the name, it mostly takes place in SEPTEMBER (late Sep – early Oct). It started in 1810 as a royal wedding celebration. Today 6+ million visitors attend each year, consuming ~7+ million litres of beer. The festival is held on the Theresienwiese ('Wiesn') field. Note: A Maß (1 litre) of beer at Oktoberfest now costs around 15 Euro. You must book a table in a tent (Zelt) months in advance!",
          textDe: "Oktoberfest-Fakten: Trotz des Namens findet es hauptsächlich im SEPTEMBER statt (Ende Sep. – Anfang Okt.). Es begann 1810 als königliche Hochzeitsfeier. Heute kommen über 6 Millionen Besucher und trinken über 7 Millionen Liter Bier. Auf der Theresienwiese ('Wiesn'). Tischreservierungen in Zelten — Monate im Voraus buchen!"
        }
      ]
    },

    {
      id: "a1-k3-kasus",
      level: "A1",
      number: "K3·C1",
      title: "Die Nomengruppe — Nominativ, Akkusativ, Dativ",
      subtitle: "Tableau complet des trois cas — articles définis et indéfinis dans les trois rôles",
      icon: "📐",
      duration: "25 min",
      xp: 70,
      color: "#f59e0b",
      sections: [
        {
          type: "intro",
          title: "Die drei Fälle — Nominativ, Akkusativ, Dativ",
          content: "German has 4 grammatical cases. You already know Nominativ (subject) and Akkusativ (direct object). Now add Dativ — the indirect object case. The Dativ answers the question 'Wem?' (to whom? / for whom?) and is used after prepositions like in, an, auf, mit, bei, von, zu, nach, seit. This is one of the most important grammar lessons in A1!",
          contentDe: "Deutsch hat 4 Kasus. Du kennst bereits Nominativ (Subjekt) und Akkusativ (direktes Objekt). Jetzt kommt der Dativ — der Kasus des indirekten Objekts. Dativ antwortet auf 'Wem?' und steht nach Präpositionen wie in, an, auf, mit, bei, von, zu, nach, seit."
        },
        {
          type: "grammar",
          title: "Die drei Kasus — Vollständige Artikeltabelle",
          items: [
            { pronoun: "NOMINATIV (Wer/Was?)", verb: "der / ein (m) · die / eine (f) · das / ein (n) · die / – (Pl.)", meaning: "Subject — does the action" },
            { pronoun: "AKKUSATIV (Wen/Was?)", verb: "DEN / EINEN (m) · die / eine (f) · das / ein (n) · die / – (Pl.)", meaning: "Direct object — only masculine changes!" },
            { pronoun: "DATIV (Wem?)", verb: "dem / einem (m) · der / einer (f) · dem / einem (n) · den / – (Pl.)", meaning: "Indirect object — ALL genders change!" },
            { pronoun: "Maskulin:", verb: "der→den→dem · ein→einen→einem", meaning: "3 different forms!" },
            { pronoun: "Feminin:", verb: "die→die→DER · eine→eine→EINER", meaning: "Dativ feminine = 'der'!" },
            { pronoun: "Neutrum:", verb: "das→das→DEM · ein→ein→EINEM", meaning: "Dativ neuter = 'dem'" },
            { pronoun: "Plural:", verb: "die→die→DEN + Nomen +-(e)n!", meaning: "Dativ plural adds -n to noun!" },
          ]
        },
        {
          type: "grammar",
          title: "Kasus in Sätzen — Praktische Beispiele mit Hotel/Stadt",
          items: [
            { pronoun: "NOM: Der Bahnhof ist groß.", verb: "der Bahnhof = Subjekt", meaning: "Nominativ — 'der' for masculine subject" },
            { pronoun: "AKK: Ich suche den Bahnhof.", verb: "den Bahnhof = direktes Objekt", meaning: "Akkusativ: der→DEN (maskulin)" },
            { pronoun: "DAT: Ich gehe zum Bahnhof.", verb: "zu + dem = ZUM Bahnhof", meaning: "Dativ after 'zu': dem → ZUM (m)" },
            { pronoun: "NOM: Die Rezeption ist hier.", verb: "die Rezeption = Subjekt", meaning: "Nominativ feminin = 'die'" },
            { pronoun: "AKK: Ich sehe die Rezeption.", verb: "die Rezeption = Obj.", meaning: "Akkusativ feminin: die→DIE (no change!)" },
            { pronoun: "DAT: Ich warte an der Rezeption.", verb: "an + der Rezeption", meaning: "Dativ: die→DER (feminin Dativ!)" },
            { pronoun: "NOM: Das Hotel ist schön.", verb: "das Hotel = Subjekt", meaning: "Nominativ neutrum = 'das'" },
            { pronoun: "DAT: Im Hotel ist es warm.", verb: "in + dem = IM Hotel", meaning: "Dativ neutrum: dem→DEM, in+dem=im" },
          ]
        },
        {
          type: "grammar",
          title: "Typische Dativ-Präpositionen — Always take Dativ",
          items: [
            { pronoun: "mit", verb: "mit dem Zug / mit der U-Bahn / mit dem Auto", meaning: "with / by (transport) — always Dativ" },
            { pronoun: "bei", verb: "bei dem Hotel (= beim Hotel) / bei mir", meaning: "at / near / at someone's place" },
            { pronoun: "von", verb: "von dem Bahnhof (= vom Bahnhof)", meaning: "from / of — von+dem=vom" },
            { pronoun: "zu", verb: "zu dem Marienplatz (= zum) / zu der Post (= zur)", meaning: "to — zu+dem=zum, zu+der=zur" },
            { pronoun: "nach", verb: "nach München / nach Hause", meaning: "to (cities/countries/home) — always Dativ" },
            { pronoun: "seit", verb: "seit einem Jahr / seit der Schule", meaning: "since / for (time) — always Dativ" },
            { pronoun: "aus", verb: "aus Deutschland / aus dem Hotel", meaning: "from (origin/exit) — always Dativ" },
            { pronoun: "gegenüber", verb: "gegenüber dem Bahnhof / der Bank", meaning: "opposite — always Dativ" },
          ]
        },
        {
          type: "tip",
          text: "Case selection shortcut: Ask WHICH question you could ask about the noun: WER/WAS? → Nominativ (subject). WEN/WAS? → Akkusativ (direct object). WEM? → Dativ (indirect object / after certain prepositions). And the PREPOSITION shortcut: mit/bei/von/zu/nach/seit/aus/gegenüber → ALWAYS Dativ. in/an/auf/neben/vor/hinter/über/unter/zwischen → Dativ (WO?) or Akkusativ (WOHIN?).",
          textDe: "Kasus-Kurztest: Welche Frage kann man stellen? WER/WAS? → Nominativ. WEN/WAS? → Akkusativ. WEM? → Dativ. Präpositions-Merkhilfe: mit/bei/von/zu/nach/seit/aus/gegenüber → IMMER Dativ. in/an/auf/neben/vor/hinter/über/unter/zwischen → Dativ (WO?) oder Akkusativ (WOHIN?)."
        }
      ]
    },

    {
      id: "a1-k3-verben",
      level: "A1",
      number: "K3·C2",
      title: "Verben: fahren, nehmen, gehen",
      subtitle: "Verbes de déplacement irréguliers — mit dem Zug fahren, zu Fuß gehen…",
      icon: "⚙️",
      duration: "18 min",
      xp: 55,
      color: "#f59e0b",
      sections: [
        {
          type: "intro",
          title: "Bewegungsverben — Getting around in German",
          content: "Three verbs dominate travel and city navigation in German: fahren (drive/travel by vehicle), nehmen (take), and gehen (go on foot). These verbs are all irregular and appear in almost every sentence about getting around. Master their conjugation and you unlock a huge range of real conversations.",
          contentDe: "Drei Verben dominieren Reisen und Stadtnavigation auf Deutsch: fahren (mit einem Fahrzeug reisen), nehmen und gehen (zu Fuß). Diese Verben sind alle unregelmäßig und erscheinen fast in jedem Gespräch über Mobilität."
        },
        {
          type: "grammar",
          title: "fahren — to travel / drive (irregular: a→ä)",
          items: [
            { pronoun: "ich", verb: "fahre", meaning: "Ich fahre mit dem Zug nach München." },
            { pronoun: "du", verb: "FÄHRST", meaning: "Fährst du mit dem Auto oder mit dem Zug?" },
            { pronoun: "er / sie / es", verb: "FÄHRT", meaning: "Er fährt jeden Tag mit der U-Bahn zur Arbeit." },
            { pronoun: "wir", verb: "fahren", meaning: "Wir fahren zusammen nach München." },
            { pronoun: "ihr", verb: "fahrt", meaning: "Fahrt ihr mit der S-Bahn oder mit dem Bus?" },
            { pronoun: "sie / Sie", verb: "fahren / fahren", meaning: "Der Zug fährt um 9:15 Uhr ab." },
          ]
        },
        {
          type: "grammar",
          title: "nehmen — to take (highly irregular: nimm-)",
          items: [
            { pronoun: "ich", verb: "nehme", meaning: "Ich nehme den Bus Linie 100." },
            { pronoun: "du", verb: "NIMMST", meaning: "Nimmst du die U-Bahn?" },
            { pronoun: "er / sie / es", verb: "NIMMT", meaning: "Er nimmt immer das Taxi." },
            { pronoun: "wir", verb: "nehmen", meaning: "Wir nehmen die S-Bahn zum Flughafen." },
            { pronoun: "ihr", verb: "nehmt", meaning: "Nehmt ihr das Taxi oder die U-Bahn?" },
            { pronoun: "sie / Sie", verb: "nehmen / nehmen", meaning: "Das Beste ist, Sie nehmen die U-Bahn 6." },
          ]
        },
        {
          type: "grammar",
          title: "gehen — to go (on foot)",
          items: [
            { pronoun: "ich", verb: "gehe", meaning: "Ich gehe zu Fuß zum Hotel." },
            { pronoun: "du", verb: "gehst", meaning: "Gehst du zum Marienplatz?" },
            { pronoun: "er / sie / es", verb: "geht", meaning: "Sie geht jeden Morgen zur Bushaltestelle." },
            { pronoun: "wir", verb: "gehen", meaning: "Wir gehen zusammen ins Museum." },
            { pronoun: "ihr", verb: "geht", meaning: "Geht ihr heute Abend ins Hofbräuhaus?" },
            { pronoun: "sie / Sie", verb: "gehen / gehen", meaning: "Wie viele Minuten geht man zu Fuß?" },
          ]
        },
        {
          type: "vocabulary",
          title: "Verkehrsmittel — Public transport vocabulary",
          words: [
            { german: "mit dem Zug / der Bahn", english: "by train", example: "Ich fahre mit dem Zug von Berlin nach München." },
            { german: "mit der U-Bahn", english: "by metro / underground", example: "Nehmen Sie die U-Bahn Linie U6 Richtung Klinikum." },
            { german: "mit der S-Bahn", english: "by city rail (S-Bahn)", example: "Die S-Bahn fährt zum Flughafen in 40 Minuten." },
            { german: "mit dem Bus", english: "by bus", example: "Fahren Sie mit dem Bus Nummer 100 zum Schloss." },
            { german: "mit der Straßenbahn / Tram", english: "by tram", example: "Die Tram hält direkt vor dem Hotel." },
            { german: "mit dem Taxi", english: "by taxi", example: "Ich nehme ein Taxi — es ist schon spät." },
            { german: "mit dem Auto / Mietwagen", english: "by car / rental car", example: "Wir fahren mit dem Mietwagen in die Berge." },
            { german: "zu Fuß gehen", english: "to go on foot / to walk", example: "Es sind nur 5 Minuten zu Fuß. Wir gehen!" },
          ]
        },
        {
          type: "tip",
          text: "fahren vs. gehen: In English, 'go' covers both. In German: 'fahren' = travel by vehicle (bus, train, car, bike). 'gehen' = go on foot ONLY. So: 'Ich fahre mit dem Bus' (I go by bus), 'Ich gehe zu Fuß' (I walk). Common mistake: saying 'Ich gehe mit dem Bus' — wrong! The bus drives, it doesn't walk! Also note: 'fliegen' (to fly) for planes: 'Ich fliege nach Berlin.'",
          textDe: "fahren vs. gehen: Im Englischen deckt 'go' beides ab. Auf Deutsch: 'fahren' = mit Fahrzeug reisen (Bus, Zug, Auto, Fahrrad). 'gehen' = NUR zu Fuß. Häufiger Fehler: 'Ich gehe mit dem Bus' — falsch! Der Bus FÄHRT, er geht nicht. Auch: 'fliegen' für Flugzeuge: 'Ich fliege nach Berlin.'"
        }
      ]
    },

    {
      id: "a1-k3-praepositionen",
      level: "A1",
      number: "K3·C3",
      title: "Präpositionen: in, an, auf, zu, mit",
      subtitle: "Avec Dativ (statique) ou Akkusativ (mouvement) — les règles complètes",
      icon: "📍",
      duration: "20 min",
      xp: 60,
      color: "#f59e0b",
      sections: [
        {
          type: "intro",
          title: "Präpositionen — Das komplette System",
          content: "In Kapitel 2 you learned the 9 two-way prepositions with Dativ (static location: Wo?). Now in Kapitel 3 you complete the system: the same prepositions take Akkusativ when describing MOVEMENT toward a place (Wohin?). Plus you learn 'zu' and 'mit' which always take Dativ. This lesson gives you the full picture.",
          contentDe: "In Kapitel 2 hast du die 9 Wechselpräpositionen mit Dativ (statisch: Wo?) gelernt. Jetzt vervollständigst du das System: dieselben Präpositionen nehmen Akkusativ bei BEWEGUNG zu einem Ort (Wohin?). Plus 'zu' und 'mit', die immer Dativ nehmen."
        },
        {
          type: "grammar",
          title: "Wechselpräpositionen — WO? (Dativ) vs. WOHIN? (Akkusativ)",
          items: [
            { pronoun: "WO? → Dativ", verb: "Das Buch liegt AUF DEM Tisch.", meaning: "Static location — something IS somewhere" },
            { pronoun: "WOHIN? → Akkusativ", verb: "Ich lege das Buch AUF DEN Tisch.", meaning: "Movement TO — something is placed somewhere" },
            { pronoun: "WO? (m): Das Hotel liegt…", verb: "am (an+dem) Marienplatz", meaning: "an + dem + Marienplatz (m) → am" },
            { pronoun: "WOHIN? (m): Ich gehe…", verb: "an den Marienplatz", meaning: "an + den → motion toward masculine noun" },
            { pronoun: "WO? (f): Das Gemälde hängt…", verb: "an der Wand", meaning: "an + der (Dativ f.) → static" },
            { pronoun: "WOHIN? (f): Ich hänge das Bild…", verb: "an die Wand", meaning: "an + die (Akk. f.) → motion" },
            { pronoun: "WO?: Ich wohne…", verb: "in der Stadt / im Hotel", meaning: "in + der (Dativ f.) / in+dem=im (m/n)" },
            { pronoun: "WOHIN?: Ich fahre…", verb: "in die Stadt / ins Hotel", meaning: "in + die (Akk. f.) / in+das=ins (n)" },
          ]
        },
        {
          type: "grammar",
          title: "Reine Dativ-Präpositionen — Always Dativ",
          items: [
            { pronoun: "zu + Dat.", verb: "Ich gehe ZUM Bahnhof. / ZUR Apotheke.", meaning: "to (places, people) — zu+dem=zum, zu+der=zur" },
            { pronoun: "mit + Dat.", verb: "Ich fahre MIT DEM Zug. / MIT DER U-Bahn.", meaning: "by / with — transport always mit+Dat." },
            { pronoun: "von + Dat.", verb: "Ich komme VOM Hotel. / VON DER Post.", meaning: "from — von+dem=vom" },
            { pronoun: "bei + Dat.", verb: "Das Restaurant ist BEIM Bahnhof.", meaning: "near / at — bei+dem=beim" },
            { pronoun: "nach + Dat.", verb: "Ich fahre NACH München / NACH HAUSE.", meaning: "to (cities/countries/Hause)" },
            { pronoun: "aus + Dat.", verb: "Ich komme AUS Deutschland.", meaning: "from (origin/country/city)" },
            { pronoun: "seit + Dat.", verb: "Ich wohne SEIT EINEM Jahr hier.", meaning: "since / for (time duration)" },
          ]
        },
        {
          type: "vocabulary",
          title: "Nützliche Wendungen mit Präpositionen — Hotel & Stadt",
          words: [
            { german: "zum Bahnhof gehen / fahren", english: "to go / drive to the station", example: "Wie komme ich zum Bahnhof?" },
            { german: "im Hotel wohnen / übernachten", english: "to stay / sleep at the hotel", example: "Ich übernachte im Hotel Zentrum." },
            { german: "ins Museum gehen", english: "to go to the museum", example: "Wir gehen heute ins Deutsche Museum." },
            { german: "an der Rezeption warten", english: "to wait at the reception", example: "Bitte warten Sie kurz an der Rezeption." },
            { german: "am Marienplatz treffen", english: "to meet at Marienplatz", example: "Wir treffen uns um 10 Uhr am Marienplatz." },
            { german: "auf der Straße suchen", english: "to look on the street", example: "Ich suche das Hotel auf der Straße — wo ist es?" },
            { german: "mit der U-Bahn / dem Zug fahren", english: "to travel by metro / train", example: "Es ist am schnellsten mit der U-Bahn." },
            { german: "nach Hause fahren / gehen", english: "to go home", example: "Es ist 22 Uhr — ich fahre nach Hause." },
          ]
        },
        {
          type: "tip",
          text: "The wo/wohin test: If you can ask WO? (Where IS it?) → Dativ. If you can ask WOHIN? (Where is it going TO?) → Akkusativ. Trick: static VERBS like liegen, stehen, hängen, sein, wohnen → Dativ. Motion VERBS like legen, stellen, hängen (to hang something), gehen, fahren, kommen → Akkusativ. Note: 'hängen' can be BOTH — 'Das Bild HÄNGT an der Wand' (Dativ) vs 'Ich HÄNGE das Bild an die Wand' (Akkusativ).",
          textDe: "Der Wo/Wohin-Test: WO? (Wo IST es?) → Dativ. WOHIN? (Wo geht es HIN?) → Akkusativ. Trick: Statische Verben (liegen, stehen, hängen-sein, sein, wohnen) → Dativ. Bewegungsverben (legen, stellen, hängen-setzen, gehen, fahren) → Akkusativ."
        }
      ]
    },

    {
      id: "a1-k3-rev",
      level: "A1",
      number: "K3·D1",
      title: "Révision — Kapitel 3",
      subtitle: "Révision complète : hôtel, Munich, trois cas et prépositions de lieu",
      icon: "📖",
      duration: "20 min",
      xp: 30,
      color: "#fb923c",
      sections: [
        {
          type: "intro",
          title: "Alles zusammen — Kapitel 3 im Rückblick",
          content: "In Kapitel 3 you learned: hotel vocabulary and check-in/out dialogue, asking and giving directions (geradeaus, links, rechts), Munich landmarks and culture, the three German cases (Nominativ/Akkusativ/Dativ) with full article tables, transport verbs (fahren/nehmen/gehen) and their conjugations, and the complete preposition system (Dativ vs Akkusativ).",
          contentDe: "In Kapitel 3 hast du gelernt: Hotelvokabular, Wegbeschreibungen, Münchner Sehenswürdigkeiten, die drei Kasus (Nominativ/Akkusativ/Dativ), Transportverben (fahren/nehmen/gehen) und das komplette Präpositionssystem."
        },
        {
          type: "vocabulary",
          title: "Die 20 wichtigsten Wörter aus Kapitel 3",
          words: [
            { german: "die Rezeption (-en)", english: "hotel reception desk", example: "Ich warte an der Rezeption." },
            { german: "das Einzelzimmer / Doppelzimmer", english: "single / double room", example: "Ein Einzelzimmer für zwei Nächte, bitte." },
            { german: "der Schlüssel (-)", english: "the key", example: "Hier ist Ihr Zimmerschlüssel." },
            { german: "geradeaus / links / rechts", english: "straight / left / right", example: "Gehen Sie geradeaus, dann links." },
            { german: "die Kreuzung (-en)", english: "crossroads / intersection", example: "An der Kreuzung rechts abbiegen." },
            { german: "der Marienplatz", english: "central square of Munich", example: "Der Marienplatz ist das Herz Münchens." },
            { german: "der Englische Garten", english: "huge park in Munich", example: "Im Englischen Garten kann man entspannen." },
            { german: "das Oktoberfest", english: "world's largest beer festival", example: "Das Oktoberfest findet im September statt." },
            { german: "fahren (fährt)", english: "to travel / go by vehicle", example: "Ich fahre mit dem Zug nach München." },
            { german: "nehmen (nimmt)", english: "to take (transport)", example: "Nehmen Sie die U-Bahn Linie U6!" },
            { german: "zu Fuß gehen", english: "to go on foot", example: "Es sind 5 Minuten zu Fuß." },
            { german: "der Dativ", english: "the Dative case — Wem?", example: "Ich gehe zum Bahnhof. (Dativ: zum = zu+dem)" },
            { german: "der Akkusativ", english: "the Accusative case — Wen/Was?", example: "Ich sehe den Bahnhof. (Akk.: den, maskulin)" },
            { german: "zum / zur", english: "to the (m+n) / to the (f)", example: "zum Bahnhof · zur Post · zur Apotheke" },
            { german: "im / ins", english: "in the (static) / into the (motion)", example: "Im Hotel wohnen · ins Hotel gehen" },
            { german: "mit dem Zug / der U-Bahn", english: "by train / by metro", example: "Wir fahren mit der U-Bahn." },
            { german: "von + Dat. (vom / von der)", english: "from — vom Bf. / von der Post", example: "Ich komme vom Bahnhof." },
            { german: "gegenüber (+Dat.)", english: "opposite / across from", example: "Das Hotel ist gegenüber dem Bahnhof." },
            { german: "die Maß", english: "1-litre beer stein (Oktoberfest)", example: "Prost! Eine Maß Bier!" },
            { german: "Grüß Gott! / Servus!", english: "Bavarian formal / informal greeting", example: "Grüß Gott! — Wie kann ich helfen?" },
          ]
        },
        {
          type: "grammar",
          title: "Grammatik-Übersicht Kapitel 3",
          items: [
            { pronoun: "NOMINATIV", verb: "der / die / das / die", meaning: "Wer/Was? — Subjekt: Der Bahnhof ist groß." },
            { pronoun: "AKKUSATIV", verb: "DEN / die / das / die", meaning: "Wen/Was? — Objekt: Ich nehme DEN Bus." },
            { pronoun: "DATIV", verb: "dem / der / dem / den(+n)", meaning: "Wem? — Ich fahre MIT DEM Zug / ZUR Post." },
            { pronoun: "fahren (fährt)", verb: "ich fahre · du fährst · er fährt", meaning: "a→ä for du/er — mit + Dat. transport" },
            { pronoun: "nehmen (nimmt)", verb: "ich nehme · du nimmst · er nimmt", meaning: "highly irregular — e→imm for du/er" },
            { pronoun: "gehen (geht)", verb: "ich gehe · du gehst · er geht", meaning: "regular — nur zu Fuß!" },
            { pronoun: "Dativ-immer:", verb: "mit / zu / von / bei / nach / seit / aus", meaning: "These prepositions → ALWAYS Dativ" },
            { pronoun: "Wechselpräp.:", verb: "Wo? → Dativ // Wohin? → Akkusativ", meaning: "in/an/auf/neben/vor/hinter/über/unter/zwischen" },
          ]
        },
        {
          type: "story_text",
          title: "Lesetext — Ein Wochenende in München",
          level: "A1",
          paragraphs: [
            {
              text: "Lena fährt am Samstag nach München. Sie nimmt den Zug von Frankfurt. Die Fahrt dauert ca. 3 Stunden.",
              translation: "Lena travels to Munich on Saturday. She takes the train from Frankfurt. The journey takes about 3 hours."
            },
            {
              text: "Am Hauptbahnhof nimmt sie die U-Bahn Linie U6 zum Marienplatz. Das Wetter ist schön — sie geht zu Fuß zum Hotel.",
              translation: "At the central station she takes the U-Bahn line U6 to Marienplatz. The weather is lovely — she walks to the hotel."
            },
            {
              text: "An der Rezeption sagt sie: 'Guten Tag! Ich habe eine Reservierung auf den Namen Weber.' Der Rezeptionist gibt ihr den Zimmerschlüssel — Zimmer 210.",
              translation: "At reception she says: 'Good day! I have a reservation under the name Weber.' The receptionist gives her the room key — room 210."
            },
            {
              text: "Am Nachmittag besucht Lena den Englischen Garten. Er ist riesig! Sie sitzt an einem See und isst eine frische Brezn vom Viktualienmarkt.",
              translation: "In the afternoon Lena visits the Englische Garten. It's huge! She sits by a lake and eats a fresh pretzel from Viktualienmarkt."
            },
            {
              text: "Am Abend geht sie ins Hofbräuhaus. Sie bestellt eine Maß Bier und Weißwurst. 'Prost!' sagt sie. Das ist typisch München!",
              translation: "In the evening she goes to Hofbräuhaus. She orders a Maß of beer and Weisswurst. 'Cheers!' she says. That's typical Munich!"
            }
          ],
          vocabulary: [
            { german: "die Fahrt (-en)", english: "the journey / trip", example: "Die Fahrt dauert 3 Stunden." },
            { german: "dauern", english: "to last / take (time)", example: "Wie lange dauert die Fahrt?" },
            { german: "riesig", english: "huge / enormous", example: "Der Park ist riesig!" },
            { german: "bestellen", english: "to order (food/drink)", example: "Ich bestelle eine Maß Bier." },
            { german: "Prost!", english: "Cheers!", example: "Prost! Auf München!" },
          ]
        },
        {
          type: "tip",
          text: "Kapitel 3 key insight: German prepositions are your biggest obstacle — but also your biggest reward once mastered. Focus on three groups: 1) Dativ-ONLY: mit/zu/von/bei/nach/seit/aus. 2) Akkusativ-ONLY (direction without Wechselpräp.): durch/für/gegen/ohne/um. 3) BOTH (Wechselpräp.): in/an/auf/neben/vor/hinter/über/unter/zwischen → Dativ for WO, Akkusativ for WOHIN.",
          textDe: "Kapitel 3 — Haupterkenntnis: Präpositionen sind dein größtes Hindernis — aber auch deine größte Belohnung! Drei Gruppen: 1) Nur Dativ: mit/zu/von/bei/nach/seit/aus. 2) Nur Akkusativ: durch/für/gegen/ohne/um. 3) Beides (Wechselpräp.): in/an/auf/… → Dativ (WO?) oder Akkusativ (WOHIN?)."
        }
      ]
    },

    {
      id: "a1-k3-ex",
      level: "A1",
      number: "K3·D2",
      title: "Exercices de consolidation — Kapitel 3",
      subtitle: "Exercices pratiques — hôtel, itinéraires, cas et prépositions",
      icon: "✏️",
      duration: "25 min",
      xp: 40,
      color: "#fb923c",
      sections: [
        {
          type: "intro",
          title: "Übung macht den Meister! — Practice all K3 skills",
          content: "This consolidation lesson drills all Kapitel 3 grammar and vocabulary. Focus areas: hotel dialogues (praktische Kommunikation), direction expressions (Wegbeschreibung), Dativ article recognition after prepositions, fahren/nehmen/gehen conjugation, and the Wo?/Wohin? switching rule.",
          contentDe: "Diese Übungslektion trainiert alle K3-Grammatik und -Vokabeln: Hoteldialoge, Wegbeschreibungen, Dativ-Artikel nach Präpositionen, fahren/nehmen/gehen-Konjugation und die Wo?/Wohin?-Regel."
        },
        {
          type: "grammar",
          title: "Übung 1 — Dativ-Artikel: Ergänze nach der Präposition",
          items: [
            { pronoun: "Ich fahre mit ___ Zug. (m)", verb: "→ mit DEM Zug", meaning: "mit → immer Dativ; maskulin Dat. = dem" },
            { pronoun: "Sie geht zu ___ Post. (f)", verb: "→ zur Post (zu+der)", meaning: "zu+der = zur; feminin Dat. = der" },
            { pronoun: "Er kommt von ___ Bahnhof. (m)", verb: "→ vom Bahnhof (von+dem)", meaning: "von+dem = vom; maskulin Dat. = dem" },
            { pronoun: "Ich wohne in ___ Hotel. (n)", verb: "→ im Hotel (in+dem)", meaning: "static Wo? → Dativ; neutrum = dem" },
            { pronoun: "Das Restaurant ist bei ___ Rezeption. (f)", verb: "→ bei der Rezeption", meaning: "bei → Dativ; feminin = der" },
            { pronoun: "Ich warte an ___ Bushaltestelle. (f)", verb: "→ an der Bushaltestelle", meaning: "Wo? (static) → Dativ; feminin = der" },
          ]
        },
        {
          type: "grammar",
          title: "Übung 2 — Wo? oder Wohin? Wähle Dativ oder Akkusativ",
          items: [
            { pronoun: "Das Buch liegt auf ___ Tisch. (m)", verb: "Wo? → AUF DEM Tisch (Dativ)", meaning: "Liegen = static → Dativ" },
            { pronoun: "Ich lege das Buch auf ___ Tisch. (m)", verb: "Wohin? → AUF DEN Tisch (Akk.)", meaning: "Legen = motion → Akkusativ; m→ den" },
            { pronoun: "Sie geht in ___ Supermarkt. (m)", verb: "Wohin? → IN DEN Supermarkt (Akk.)", meaning: "Gehen = motion; m Akk. = den" },
            { pronoun: "Er ist in ___ Supermarkt. (m)", verb: "Wo? → IM Supermarkt (Dativ)", meaning: "Sein = static; in+dem=im" },
            { pronoun: "Ich fahre in ___ Stadt. (f)", verb: "Wohin? → IN DIE Stadt (Akk.)", meaning: "Fahren = motion; f Akk. = die" },
            { pronoun: "Ich lebe in ___ Stadt. (f)", verb: "Wo? → IN DER Stadt (Dativ)", meaning: "Leben = static; f Dativ = der" },
          ]
        },
        {
          type: "grammar",
          title: "Übung 3 — Verben konjugieren: fahren, nehmen, gehen",
          items: [
            { pronoun: "du (fahren)", verb: "→ du FÄHRST", meaning: "a→ä for du/er — du fährst jeden Tag." },
            { pronoun: "er (nehmen)", verb: "→ er NIMMT", meaning: "highly irregular — er nimmt die U-Bahn." },
            { pronoun: "ihr (fahren)", verb: "→ ihr FAHRT", meaning: "no umlaut for ihr — ihr fahrt morgen." },
            { pronoun: "sie/Pl. (gehen)", verb: "→ sie GEHEN", meaning: "regular — sie gehen zu Fuß." },
            { pronoun: "du (gehen)", verb: "→ du GEHST", meaning: "regular — gehst du zum Hotel?" },
            { pronoun: "ich (nehmen)", verb: "→ ich NEHME", meaning: "ich form is regular — ich nehme die S-Bahn." },
          ]
        },
        {
          type: "dialogue",
          title: "Übung 4 — Rollenspiel: Im Hotel und in der Stadt",
          lines: [
            { speaker: "Rezeptionist", text: "Guten Abend! Was kann ich für Sie tun?", translation: "➜ Practice: Ich habe eine Reservierung auf den Namen… + Zimmer und Nächte angeben" },
            { speaker: "Du (Gast)", text: "Guten Abend! Ich habe eine Reservierung auf den Namen [IhrName]. Ein Doppelzimmer für zwei Nächte.", translation: "✓ Key phrases: auf den Namen… / ein Zimmer für X Nächte" },
            { speaker: "Passant", text: "Kann ich Ihnen helfen? Sie suchen etwas?", translation: "➜ Practice: Wie komme ich zum/zur… + Wegbeschreibung verstehen" },
            { speaker: "Du (Tourist)", text: "Ja! Wie komme ich zum Marienplatz? Ist es weit?", translation: "✓ Use: Wie komme ich zu + Dativ / Ist es weit?" },
            { speaker: "Passant", text: "Nehmen Sie die U-Bahn — Linie U3 Richtung Moosach. Dann 3 Stationen.", translation: "➜ Verstehe: U-Bahn-Linie, Richtung, Stationen zählen" },
            { speaker: "Du", text: "Wo ist die nächste U-Bahn-Station?", translation: "✓ Wo + ist? Simple Wo?-question" },
          ]
        },
        {
          type: "vocabulary",
          title: "Übung 5 — Verkehrsmittel + Präposition: Richtig kombinieren",
          words: [
            { german: "Zug → mit dem Zug fahren", english: "by train (m: dem)", example: "Ich fahre mit dem Zug nach Berlin." },
            { german: "U-Bahn → mit der U-Bahn fahren", english: "by metro (f: der)", example: "Nehmen Sie die U-Bahn — mit der U-Bahn in 10 Min." },
            { german: "Bus → mit dem Bus fahren", english: "by bus (m: dem)", example: "Wir fahren mit dem Bus ins Zentrum." },
            { german: "Taxi → mit dem Taxi fahren", english: "by taxi (n: dem)", example: "Ich nehme ein Taxi — mit dem Taxi ist es schneller." },
            { german: "Auto → mit dem Auto fahren", english: "by car (n: dem)", example: "Er fährt mit dem Auto — aber das Parken ist teuer!" },
            { german: "Fuß → zu Fuß gehen", english: "on foot (no article!)", example: "Es sind 5 Min — wir gehen zu Fuß." },
          ]
        },
        {
          type: "tip",
          text: "Production technique for K3: The sentence transformation method applied to prepositions. Take any noun and build a Wo? sentence (Dativ) and a Wohin? sentence (Akkusativ): 'Das Buch ist AUF DEM Tisch.' (Wo?) → 'Ich lege das Buch AUF DEN Tisch.' (Wohin?) Do this for all 9 two-way prepositions with masculine, feminine and neuter nouns. That's 9 × 3 × 2 = 54 practice sentences from one pattern!",
          textDe: "Produktionstechnik für K3: Satztransformation mit Präpositionen. Für jede Wechselpräposition: Wo?-Satz (Dativ) + Wohin?-Satz (Akkusativ). Z.B.: 'Das Buch ist AUF DEM Tisch' → 'Ich lege das Buch AUF DEN Tisch.' 9 Präp. × 3 Genera × 2 = 54 Übungssätze aus einem Muster!"
        }
      ]
    },

    {
      id: "a1-k3-test",
      level: "A1",
      number: "K3·D3",
      title: "Mini-Test — Kapitel 3",
      subtitle: "Teste tes connaissances du Kapitel 3 — 12 questions interactives",
      icon: "🎯",
      duration: "15 min",
      xp: 65,
      color: "#fb923c",
      sections: [
        {
          type: "intro",
          title: "Zeit für den Test! — Kapitel 3",
          content: "12 questions covering all of Kapitel 3: hotel vocabulary and check-in phrases, directions (geradeaus/links/rechts/biegen Sie ab), Munich landmarks, the three cases (Nominativ/Akkusativ/Dativ) with articles, transport verbs (fahren/nehmen/gehen), Dativ-only prepositions, and the Wo?/Wohin? switching rule.",
          contentDe: "12 Fragen zu allem aus Kapitel 3: Hotelvokabular, Wegbeschreibungen, Münchner Sehenswürdigkeiten, drei Kasus mit Artikeln, Transportverben, Dativ-Präpositionen und die Wo?/Wohin?-Regel."
        },
        {
          type: "quiz",
          title: "Mini-Test — Kapitel 3 (12 questions)",
          questions: [
            {
              topic: "Hotel",
              question: "Du bist im Hotel und fragst: 'Wie viel kostet eine Nacht?' — Was antwortet der Rezeptionist am wahrscheinlichsten?",
              options: ["Das Zimmer kostet 89 Euro pro Nacht, inklusive Frühstück.", "Das Zimmer liegt im dritten Stock.", "Der Aufzug ist rechts.", "Das Frühstück ist von 7 bis 10 Uhr."],
              correct: 0,
              explanation: "When asking 'Was kostet…?' (how much does… cost?), the answer gives a price. 'Pro Nacht' = per night. 'Inklusive Frühstück' = breakfast included. The other answers answer different questions (floor, elevator location, breakfast time) — not about price."
            },
            {
              topic: "Hotel",
              question: "Welche Phrase benutzt man beim Check-in an der Rezeption?",
              options: ["Ich hätte gerne die Rechnung.", "Kannst du mir helfen?", "Ich habe eine Reservierung auf den Namen Müller.", "Wo ist das nächste Restaurant?"],
              correct: 2,
              explanation: "'Ich habe eine Reservierung auf den Namen [Name]' = I have a reservation under the name… This is the standard phrase for hotel check-in. 'Auf den Namen' (under the name) is key. 'Ich hätte gerne die Rechnung' is for check-OUT. 'Kannst du' uses informal 'du' — wrong for hotel staff (use 'Sie')."
            },
            {
              topic: "Wegbeschreibung",
              question: "Du fragst: 'Wie komme ich zur Post?' Was sagt der Passant? 'Gehen Sie geradeaus, dann ___.'",
              options: ["nehmen Sie links.", "biegen Sie rechts ab.", "Sie sind hier rechts.", "links fahren Sie."],
              correct: 1,
              explanation: "Standard direction phrase: 'biegen Sie [links/rechts] ab' = turn left/right (formal Sie-imperative of abbiegen). 'abbiegen' is a separable verb — the 'ab' goes to the end: 'biegen… ab'. This is the correct formal direction instruction."
            },
            {
              topic: "München",
              question: "Was ist der Marienplatz?",
              options: ["Ein Museum für bayerische Kunst.", "Der zentrale Platz im Herzen Münchens mit dem Neuen Rathaus.", "Ein Biergarten im Englischen Garten.", "Das Fußballstadion von FC Bayern."],
              correct: 1,
              explanation: "Marienplatz is the CENTRAL SQUARE of Munich — the heart of the city. The Neues Rathaus (New Town Hall) with its famous Glockenspiel (carillon) is located there. The beer garden is in the Englischer Garten, and the FC Bayern stadium is the Allianz Arena."
            },
            {
              topic: "Dativ",
              question: "Ich fahre ___ Zug nach München. (mit, maskulin) Was fehlt?",
              options: ["mit der", "mit dem", "mit den", "mit das"],
              correct: 1,
              explanation: "'mit' always takes Dativ. 'Zug' is masculine (der Zug). Dativ masculine = DEM. So: 'mit DEM Zug'. The contraction 'mit dem' stays as two words (unlike zu+dem=zum or in+dem=im). 'Mit der' would be for feminine nouns (mit der U-Bahn)."
            },
            {
              topic: "Dativ",
              question: "Wie komme ich ___ Apotheke? (zu, feminin) Was fehlt?",
              options: ["zum", "zur", "zu der", "zu die"],
              correct: 1,
              explanation: "'Apotheke' is feminine (die Apotheke). 'zu' takes Dativ. Dativ feminine = 'der'. zu + der = 'ZUR'. So: 'zur Apotheke'. 'Zum' (zu+dem) is for masculine/neuter. Note: 'zu der' is correct but 'zur' is the standard contracted form used in everyday speech."
            },
            {
              topic: "Kasus",
              question: "Welcher Satz hat den DATIV korrekt?",
              options: ["Ich sehe dem Bahnhof.", "Der Bahnhof ist groß.", "Ich fahre zu dem Bahnhof.", "Ich suche den Bahnhof."],
              correct: 2,
              explanation: "'Ich fahre zu dem Bahnhof' (= 'Ich fahre zum Bahnhof') uses Dativ after 'zu'. 'Ich sehe DEM Bahnhof' is wrong — 'sehen' takes Akkusativ (DEN Bahnhof). 'Der Bahnhof ist groß' uses Nominativ. 'Ich suche DEN Bahnhof' uses Akkusativ correctly."
            },
            {
              topic: "Verben",
              question: "Welche Konjugation von 'fahren' ist RICHTIG für 'er'?",
              options: ["er fahrt", "er fahren", "er fährt", "er fahre"],
              correct: 2,
              explanation: "'fahren' has a vowel change a→ä for du and er/sie/es. So: ich fahre, du FÄHRST, er/sie/es FÄHRT. 'er fahrt' (no umlaut) is wrong. 'er fahren' (using infinitive) is wrong. 'er fahre' is the subjunctive mood — not Präsens indicative."
            },
            {
              topic: "Verben",
              question: "Ergänze den richtigen Satz: 'Ich ___ nicht mit dem Auto — ich ___ zu Fuß.'",
              options: ["gehe / fahre", "nehme / fahre", "fahre / gehe", "fahre / nehme"],
              correct: 2,
              explanation: "'fahren' = to travel by vehicle (Auto, Bus, Zug). 'gehen' = to go on foot ONLY. So: 'Ich FAHRE nicht mit dem Auto — ich GEHE zu Fuß.' This is a very common contrast. Never say 'Ich gehe mit dem Auto' — the car drives (fährt), it doesn't walk!"
            },
            {
              topic: "Präpositionen",
              question: "Das Bild ___ an der Wand. (static — Wo?) Was ist korrekt?",
              options: ["geht", "hängt", "legt", "stellt"],
              correct: 1,
              explanation: "'an der Wand HÄNGEN' = to hang on the wall (static). 'Das Bild HÄNGT an der Wand' (Wo? → Dativ: an DER Wand). 'Legen' and 'stellen' express motion/placement. 'hängen' as static verb (Dativ) vs 'hängen' as action verb (Akkusativ): 'Das Bild hängt AN DER Wand' vs 'Ich hänge das Bild AN DIE Wand'."
            },
            {
              topic: "Präpositionen",
              question: "Ich gehe ___ Supermarkt. (Wohin? — maskulin) Was ist korrekt?",
              options: ["in dem", "im", "in den", "in der"],
              correct: 2,
              explanation: "'gehen' expresses MOTION → WOHIN? question → AKKUSATIV. 'Supermarkt' is masculine (der Supermarkt). Akkusativ masculine = DEN. So: 'Ich gehe IN DEN Supermarkt.' 'Im Supermarkt' (in+dem) = Dativ → used for WO? (static). 'Im Supermarkt kaufe ich ein' = I shop IN the supermarket (already there)."
            },
            {
              topic: "München/Kultur",
              question: "Im Bayern sagt man 'Grüß Gott!' — Was bedeutet das?",
              options: ["Ich grüße Gott jeden Tag.", "Es ist eine formale Begrüßung, typisch für Bayern.", "Man sagt das nur in der Kirche.", "Es bedeutet 'Gute Nacht' auf Bayerisch."],
              correct: 1,
              explanation: "'Grüß Gott!' is the formal Bavarian greeting, equivalent to 'Guten Tag!' in standard German. Literally 'Greet God' — a traditional Catholic greeting. Used throughout Bavaria and Austria. The informal version is 'Servus!' (both hello AND goodbye). You'll hear it everywhere in Munich, not just in church!"
            }
          ]
        },
        {
          type: "tip",
          text: "K3 Test results: 11–12 = Ausgezeichnet! Du bist bereit für Kapitel 4! · 9–10 = Sehr gut! · 7–8 = Gut gemacht! · Under 7 = Nochmal üben — focus on Dativ articles after prepositions (the most common source of errors) and the wo/wohin switching rule. One-sentence reminder: mit/zu/von/bei/von/nach/seit/aus → ALWAYS Dativ, no exceptions!",
          textDe: "K3 Test: 11–12 = Ausgezeichnet! · 9–10 = Sehr gut! · 7–8 = Gut! · Unter 7 = Nochmal üben. Fokus: Dativ-Artikel nach Präpositionen und die Wo?/Wohin?-Regel. Merksatz: mit/zu/von/bei/nach/seit/aus → IMMER Dativ, keine Ausnahmen!"
        }
      ]
    },

    ...k4Lessons,
    ...k5Lessons,
    ...k6Lessons,
    ...k7Lessons,
    ...k8Lessons
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
