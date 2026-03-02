const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  lessonId: { type: String, required: true },
  level: { type: String, enum: ['A1', 'A2', 'B1'], required: true },
  type: { type: String, enum: ['multiple_choice', 'fill_blank', 'translation', 'matching'], required: true },
  question: { type: String, required: true },
  options: [String],
  correct: { type: Number, required: true },
  explanation: String,
  xp: { type: Number, default: 10 },
}, { timestamps: true });

ExerciseSchema.index({ level: 1 });
ExerciseSchema.index({ lessonId: 1 });

module.exports = mongoose.model('Exercise', ExerciseSchema);
