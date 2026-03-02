/**
 * seed.js — Seed MongoDB with initial lessons, vocabulary and exercises.
 * Run: node seed.js
 */
require('dotenv').config();
const mongoose = require('mongoose');
const Lesson     = require('./models/Lesson');
const Vocabulary = require('./models/Vocabulary');
const Exercise   = require('./models/Exercise');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/german_learning';

// ── Sample Lessons ────────────────────────────────────────────────────────────
const lessons = [
  {
    id: 'a1-1', level: 'A1', number: 1,
    title: 'Fandraisana / Begrüßung', subtitle: 'Manao ahoana sy misaotra', icon: '👋',
    duration: 15, xp: 50, color: 'teal',
    sections: [
      { type: 'intro', title: 'Salam / Hallo', content: 'Ny teny fandraisana dia manan-danja be amin\'ny fiteny alemà.' },
      { type: 'vocabulary', title: 'Teny manan-danja', content: [
        { german: 'Hallo', malagasy: 'Manao ahoana' },
        { german: 'Guten Morgen', malagasy: 'Maraina tsara' },
        { german: 'Guten Tag', malagasy: 'Antoandro tsara' },
        { german: 'Guten Abend', malagasy: 'Hariva tsara' },
        { german: 'Auf Wiedersehen', malagasy: 'Veloma' },
        { german: 'Tschüss', malagasy: 'Veloma (maivana)' },
        { german: 'Bitte', malagasy: 'Azafady / Mba' },
        { german: 'Danke', malagasy: 'Misaotra' },
      ]},
      { type: 'dialogue', title: 'Resadresaka / Dialog', content: [
        { speaker: 'A', text: 'Guten Morgen! Wie heißen Sie?', translation: 'Maraina tsara! Iza no anaranao?' },
        { speaker: 'B', text: 'Guten Morgen! Ich heiße Marie.', translation: 'Maraina tsara! Marie no anarako.' },
        { speaker: 'A', text: 'Schön, Sie kennenzulernen!', translation: 'Faly mahafantatra anao!' },
      ]},
      { type: 'grammar', title: 'Fenitra: Verb "heißen"', content: {
        headers: ['Mpiresaka', 'Alemà', 'Malagasy'],
        rows: [
          ['ich', 'heiße', 'anarako'],
          ['du', 'heißt', 'anaranao'],
          ['er/sie/es', 'heißt', 'anarany'],
          ['wir', 'heißen', 'anaranay'],
          ['ihr', 'heißt', 'anaranareo'],
          ['sie/Sie', 'heißen', 'anarany / anaranareo (ombam-boninahitra)'],
        ],
      }},
      { type: 'tip', title: 'Torohevitra', content: 'Ny "Sie" lehibe dia fampiasa fomba ombam-boninahitra, toy ny "Anareo" amin\'ny teny malagasy.' },
    ],
  },
  {
    id: 'a1-2', level: 'A1', number: 2,
    title: 'Isa / Zahlen', subtitle: 'Isa 1-100 amin\'ny Alemà', icon: '🔢',
    duration: 20, xp: 60, color: 'blue',
    sections: [
      { type: 'intro', title: 'Ny isa amin\'ny Alemà', content: 'Ny isa dia ilaina tokoa amin\'ny fiainam-pananahana.' },
      { type: 'number_table', title: 'Isa 1-20', content: {
        headers: ['Isa', 'Alemà', 'Malagasy'],
        rows: [
          ['1','eins','iray'],['2','zwei','roa'],['3','drei','telo'],
          ['4','vier','efatra'],['5','fünf','dimy'],['6','sechs','enina'],
          ['7','sieben','fito'],['8','acht','valo'],['9','neun','sivy'],
          ['10','zehn','folo'],['11','elf','iraika ambin\'ny folo'],
          ['12','zwölf','roa ambin\'ny folo'],['20','zwanzig','roapolo'],
        ],
      }},
    ],
  },
  {
    id: 'a2-1', level: 'A2', number: 1,
    title: 'Asa / Berufe', subtitle: 'Asa sy andraikitr\'asa', icon: '💼',
    duration: 25, xp: 75, color: 'purple',
    sections: [
      { type: 'intro', title: 'Ny asa amin\'ny Alemà', content: 'Rehefa manontany ny asan\'olona ianao, mampiasa "Was bist du von Beruf?".' },
      { type: 'vocabulary', title: 'Asa manan-danja', content: [
        { german: 'Arzt / Ärztin', malagasy: 'Dokotera' },
        { german: 'Lehrer / Lehrerin', malagasy: 'Mpampianatra' },
        { german: 'Ingenieur / Ingenieurin', malagasy: 'Injeniera' },
        { german: 'Schüler / Schülerin', malagasy: 'Mpianatra' },
        { german: 'Student / Studentin', malagasy: 'Etudianta' },
      ]},
    ],
  },
];

// ── Sample Vocabulary ─────────────────────────────────────────────────────────
const vocabularyData = [
  {
    level: 'A1', topic: 'greetings', title: 'Fandraisana / Begrüßung', icon: '👋',
    words: [
      { german: 'Hallo', malagasy: 'Manao ahoana', example: 'Hallo, wie geht es dir?' },
      { german: 'Guten Morgen', malagasy: 'Maraina tsara', example: 'Guten Morgen, Mama!' },
      { german: 'Guten Tag', malagasy: 'Antoandro tsara' },
      { german: 'Guten Abend', malagasy: 'Hariva tsara' },
      { german: 'Gute Nacht', malagasy: 'Alina tsara' },
      { german: 'Auf Wiedersehen', malagasy: 'Veloma' },
      { german: 'Tschüss', malagasy: 'Veloma (maivana)' },
      { german: 'Bitte', malagasy: 'Azafady' },
      { german: 'Danke', malagasy: 'Misaotra', example: 'Danke schön!' },
      { german: 'Entschuldigung', malagasy: 'Azafady (fangatahana famelana)' },
      { german: 'Ja', malagasy: 'Eny' },
      { german: 'Nein', malagasy: 'Tsia' },
    ],
  },
  {
    level: 'A1', topic: 'numbers', title: 'Isa / Zahlen', icon: '🔢',
    words: [
      { german: 'eins', malagasy: 'iray' },
      { german: 'zwei', malagasy: 'roa' },
      { german: 'drei', malagasy: 'telo' },
      { german: 'vier', malagasy: 'efatra' },
      { german: 'fünf', malagasy: 'dimy' },
      { german: 'sechs', malagasy: 'enina' },
      { german: 'sieben', malagasy: 'fito' },
      { german: 'acht', malagasy: 'valo' },
      { german: 'neun', malagasy: 'sivy' },
      { german: 'zehn', malagasy: 'folo' },
    ],
  },
  {
    level: 'A2', topic: 'professions', title: 'Asa / Berufe', icon: '💼',
    words: [
      { german: 'Arzt', malagasy: 'Dokotera (lahy)' },
      { german: 'Ärztin', malagasy: 'Dokotera (vavy)' },
      { german: 'Lehrer', malagasy: 'Mpampianatra (lahy)' },
      { german: 'Lehrerin', malagasy: 'Mpampianatra (vavy)' },
      { german: 'Ingenieur', malagasy: 'Injeniera' },
    ],
  },
];

// ── Sample Exercises ──────────────────────────────────────────────────────────
const exercises = [
  {
    id: 'ex-a1-1', lessonId: 'a1-1', level: 'A1', type: 'multiple_choice', xp: 10,
    question: 'Ahoana ny fandikana "Guten Morgen" amin\'ny teny Malagasy?',
    options: ['Alina tsara', 'Maraina tsara', 'Hariva tsara', 'Antoandro tsara'],
    correct: 1,
    explanation: '"Guten Morgen" = "Maraina tsara" amin\'ny Malagasy.',
  },
  {
    id: 'ex-a1-2', lessonId: 'a1-1', level: 'A1', type: 'multiple_choice', xp: 10,
    question: 'Inona no midika "Danke" amin\'ny Malagasy?',
    options: ['Azafady', 'Veloma', 'Misaotra', 'Eny'],
    correct: 2,
    explanation: '"Danke" = "Misaotra". Afaka hampiasa "Danke schön" koa ianao ho hevitra "Misaotra betsaka".',
  },
  {
    id: 'ex-a1-3', lessonId: 'a1-2', level: 'A1', type: 'multiple_choice', xp: 10,
    question: 'Ahoana ny fandikana "fünf"?',
    options: ['efatra', 'dimy', 'enina', 'fito'],
    correct: 1,
    explanation: '"fünf" = 5 = "dimy" amin\'ny Malagasy.',
  },
  {
    id: 'ex-a2-1', lessonId: 'a2-1', level: 'A2', type: 'multiple_choice', xp: 15,
    question: 'Inona no midika "Lehrer" amin\'ny Malagasy?',
    options: ['Dokotera', 'Injeniera', 'Mpampianatra', 'Mpivarotra'],
    correct: 2,
    explanation: '"Lehrer" (lahy) na "Lehrerin" (vavy) = "Mpampianatra".',
  },
];

// ── Seed function ─────────────────────────────────────────────────────────────
async function seed() {
  await mongoose.connect(MONGO_URI);
  console.log('✅ Connected to MongoDB:', MONGO_URI);

  // Clear existing
  await Promise.all([
    Lesson.deleteMany({}),
    Vocabulary.deleteMany({}),
    Exercise.deleteMany({}),
  ]);
  console.log('🗑️  Cleared existing data');

  // Insert
  await Lesson.insertMany(lessons);
  console.log(`📚 Seeded ${lessons.length} lessons`);

  await Vocabulary.insertMany(vocabularyData);
  console.log(`📖 Seeded ${vocabularyData.length} vocabulary topics`);

  await Exercise.insertMany(exercises);
  console.log(`✏️  Seeded ${exercises.length} exercises`);

  console.log('🎉 Seed completed!');
  await mongoose.disconnect();
}

seed().catch(err => {
  console.error('❌ Seed error:', err);
  mongoose.disconnect();
  process.exit(1);
});
