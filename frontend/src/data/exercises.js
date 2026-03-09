import { k4Exercises } from './k4lessons.js';
// Exercises / Übungen
export const exercises = {
  A1: [
    {
      id: "a1-ex1",
      lessonId: "a1-l1",
      level: "A1",
      type: "multiple_choice",
      question: "What does 'Guten Morgen' mean in English?",
      questionDe: "Was bedeutet 'Guten Morgen' auf Englisch?",
      options: ["Good evening", "Good morning", "Good night", "Hello"],
      correct: 1,
      explanation: "'Guten Morgen' = Good morning. You use it in the morning.",
      xp: 10
    },
    {
      id: "a1-ex2",
      lessonId: "a1-l1",
      level: "A1",
      type: "multiple_choice",
      question: "How do you say 'My name is' in German?",
      questionDe: "Wie sagt man 'My name is' auf Deutsch?",
      options: ["Ich komme aus...", "Ich bin... Jahre alt", "Ich heiße...", "Ich wohne in..."],
      correct: 2,
      explanation: "'Ich heiße...' = My name is... Example: Ich heiße Marie.",
      xp: 10
    },
    {
      id: "a1-ex3",
      lessonId: "a1-l1",
      level: "A1",
      type: "fill_blank",
      question: "Fill in the blank: 'Ich ___ aus Deutschland.' (verb 'kommen')",
      questionDe: "Füllen Sie die Lücke: 'Ich ___ aus Deutschland.'",
      options: ["komme", "bin", "habe", "gehe"],
      correct: 0,
      explanation: "'Ich komme aus...' = I come from... It is used to talk about your origin.",
      xp: 10
    },
    {
      id: "a1-ex4",
      lessonId: "a1-l2",
      level: "A1",
      type: "multiple_choice",
      question: "What does 'sieben' mean in English?",
      questionDe: "Was bedeutet 'sieben' auf Englisch?",
      options: ["six", "eight", "seven", "nine"],
      correct: 2,
      explanation: "sieben = seven (7)",
      xp: 10
    },
    {
      id: "a1-ex5",
      lessonId: "a1-l2",
      level: "A1",
      type: "multiple_choice",
      question: "Choose the correct number: eins, zwei, ___, vier",
      questionDe: "Wählen Sie die richtige Zahl: eins, zwei, ___, vier",
      options: ["fünf", "sechs", "drei", "zehn"],
      correct: 2,
      explanation: "eins (1), zwei (2), drei (3), vier (4). The sequence is one, two, three, four.",
      xp: 10
    },
    {
      id: "a1-ex6",
      lessonId: "a1-l3",
      level: "A1",
      type: "multiple_choice",
      question: "What does 'die Mutter' mean in English?",
      questionDe: "Was bedeutet 'die Mutter' auf Englisch?",
      options: ["the father", "the sister", "the mother", "the grandmother"],
      correct: 2,
      explanation: "die Mutter = the mother",
      xp: 10
    },
    {
      id: "a1-ex7",
      lessonId: "a1-l3",
      level: "A1",
      type: "fill_blank",
      question: "Fill in the blank: '___ Vater arbeitet.' (my father)",
      questionDe: "Füllen Sie: '___ Vater arbeitet.'",
      options: ["Dein", "Sein", "Mein", "Ihr"],
      correct: 2,
      explanation: "'Mein' = my. Mein Vater = my father.",
      xp: 10
    },
    {
      id: "a1-ex8",
      lessonId: "a1-l4",
      level: "A1",
      type: "multiple_choice",
      question: "What does 'das Brot' mean in English?",
      questionDe: "Was bedeutet 'das Brot' auf Englisch?",
      options: ["the water", "the bread", "the milk", "the rice"],
      correct: 1,
      explanation: "das Brot = the bread",
      xp: 10
    },
    {
      id: "a1-ex9",
      lessonId: "a1-l1",
      level: "A1",
      type: "translation",
      question: "Translate to German: 'Thank you very much!'",
      questionDe: "Übersetzen Sie ins Deutsche: 'Thank you very much!'",
      options: ["Bitte sehr!", "Danke schön!", "Gern geschehen!", "Entschuldigung!"],
      correct: 1,
      explanation: "'Thank you very much' = 'Danke schön!' in German.",
      xp: 15
    },
    {
      id: "a1-ex10",
      lessonId: "a1-l2",
      level: "A1",
      type: "multiple_choice",
      question: "How do you say 'twenty' in German?",
      questionDe: "Wie sagt man 'twenty' auf Deutsch?",
      options: ["zehn", "dreißig", "zwanzig", "fünfzig"],
      correct: 2,
      explanation: "twenty = zwanzig (20)",
      xp: 10
    },
    {
      id: "a1-ex11",
      lessonId: "a1-l1",
      level: "A1",
      type: "matching",
      question: "Match German with English:",
      questionDe: "Verbinden Sie Deutsch und Englisch:",
      pairs: [
        { german: "Hallo", english: "Hello" },
        { german: "Danke", english: "Thank you" },
        { german: "Bitte", english: "Please" },
        { german: "Ja", english: "Yes" },
      ],
      xp: 20
    },
    {
      id: "a1-ex12",
      lessonId: "a1-l5",
      level: "A1",
      type: "multiple_choice",
      question: "What does 'blau' mean in English?",
      questionDe: "Was bedeutet 'blau' auf Englisch?",
      options: ["red", "green", "blue", "yellow"],
      correct: 2,
      explanation: "blau = blue. Der Himmel ist blau = The sky is blue.",
      xp: 10
    }
    ,
    ...k4Exercises
  ],
  A2: [
    {
      id: "a2-ex1",
      lessonId: "a2-l1",
      level: "A2",
      type: "multiple_choice",
      question: "What does 'Ich kann Deutsch sprechen' mean in English?",
      questionDe: "Was bedeutet 'Ich kann Deutsch sprechen' auf Englisch?",
      options: [
        "I cannot speak German",
        "I can speak German",
        "I am learning German",
        "I like German"
      ],
      correct: 1,
      explanation: "'können' = can / to be able to. 'Ich kann Deutsch sprechen' = I can speak German.",
      xp: 15
    },
    {
      id: "a2-ex2",
      lessonId: "a2-l2",
      level: "A2",
      type: "multiple_choice",
      question: "What does 'Es regnet' mean in English?",
      questionDe: "Was bedeutet 'Es regnet' auf Englisch?",
      options: ["It is raining", "It is sunny", "It is cold", "It is hot"],
      correct: 0,
      explanation: "'Es regnet' = It is raining. 'Regen' = rain.",
      xp: 15
    },
    {
      id: "a2-ex3",
      lessonId: "a2-l3",
      level: "A2",
      type: "fill_blank",
      question: "Fill in the blank: 'Gehen Sie _____ und dann links.' (straight ahead)",
      questionDe: "Füllen Sie: 'Gehen Sie _____ und dann links.'",
      options: ["rechts", "geradeaus", "zurück", "oben"],
      correct: 1,
      explanation: "'geradeaus' = straight ahead. 'Gehen Sie geradeaus' = Go straight ahead.",
      xp: 15
    },
    {
      id: "a2-ex4",
      lessonId: "a2-l1",
      level: "A2",
      type: "multiple_choice",
      question: "Choose the correct form: 'Ich ___ jeden Tag arbeiten.'",
      questionDe: "Wählen Sie die richtige Form: 'Ich ___ jeden Tag arbeiten.'",
      options: ["kann", "muss", "darf", "möchte"],
      correct: 1,
      explanation: "'muss' = must / have to. 'müssen' means to have to / must.",
      xp: 15
    },
    {
      id: "a2-ex5",
      lessonId: "a2-l2",
      level: "A2",
      type: "multiple_choice",
      question: "What does 'Heute ist es sehr heiß' mean in English?",
      questionDe: "Was bedeutet 'Heute ist es sehr heiß' auf Englisch?",
      options: [
        "Today it is very cold",
        "The sky is blue today",
        "Today it is very hot",
        "It is raining today"
      ],
      correct: 2,
      explanation: "'heiß' = hot. 'sehr' = very. 'Heute ist es sehr heiß' = Today it is very hot.",
      xp: 15
    },
    {
      id: "a2-ex6",
      lessonId: "a2-l5",
      level: "A2",
      type: "multiple_choice",
      question: "What do you say to the doctor if you have a headache?",
      questionDe: "Was sagen Sie zum Arzt, wenn Sie Kopfschmerzen haben?",
      options: [
        "Ich habe Hunger.",
        "Ich habe Kopfschmerzen.",
        "Ich bin müde.",
        "Ich habe Durst."
      ],
      correct: 1,
      explanation: "'Kopfschmerzen' = headache. Kopf = head, Schmerzen = pain.",
      xp: 15
    },
    {
      id: "a2-ex7",
      lessonId: "a2-l3",
      level: "A2",
      type: "translation",
      question: "Translate to German: 'Turn left and then go straight ahead.'",
      questionDe: "Übersetzen Sie: 'Gehen Sie links und dann geradeaus.'",
      options: [
        "Gehen Sie rechts und dann geradeaus.",
        "Gehen Sie links und dann rechts.",
        "Gehen Sie links und dann geradeaus.",
        "Gehen Sie geradeaus und dann links."
      ],
      correct: 2,
      explanation: "left = links, straight ahead = geradeaus. The sequence is the same as in English.",
      xp: 20
    },
    {
      id: "a2-ex8",
      lessonId: "a2-l4",
      level: "A2",
      type: "multiple_choice",
      question: "What does 'die Hausaufgabe' mean in English?",
      questionDe: "Was bedeutet 'die Hausaufgabe' auf Englisch?",
      options: [
        "the classroom",
        "the teacher",
        "the homework",
        "the school"
      ],
      correct: 2,
      explanation: "'die Hausaufgabe' = homework. Haus = house, Aufgabe = task.",
      xp: 15
    }
  ]
};

export const getExercisesByLevel = (level) => exercises[level] || [];
export const getExercisesByLesson = (lessonId) => {
  for (const level of Object.values(exercises)) {
    const filtered = level.filter(ex => ex.lessonId === lessonId);
    if (filtered.length > 0) return filtered;
  }
  return [];
};
export const getAllExercises = () => [...(exercises.A1 || []), ...(exercises.A2 || [])];
