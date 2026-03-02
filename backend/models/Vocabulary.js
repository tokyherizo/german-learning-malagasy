const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
  german: { type: String, required: true },
  malagasy: { type: String, required: true },
  example: String,
  pronunciation: String,
}, { _id: false });

const VocabularySchema = new mongoose.Schema({
  level: { type: String, enum: ['A1', 'A2', 'B1'], required: true },
  topic: { type: String, required: true },
  title: { type: String, required: true },
  icon: String,
  words: [WordSchema],
}, { timestamps: true });

VocabularySchema.index({ level: 1, topic: 1 }, { unique: true });

module.exports = mongoose.model('Vocabulary', VocabularySchema);
