const mongoose = require('mongoose');

const SectionSchema = new mongoose.Schema({
  type: { type: String, required: true },
  title: String,
  content: mongoose.Schema.Types.Mixed,
}, { _id: false });

const LessonSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  level: { type: String, enum: ['A1', 'A2', 'B1'], required: true },
  number: { type: Number, required: true },
  title: { type: String, required: true },
  subtitle: String,
  icon: String,
  duration: Number,
  xp: { type: Number, default: 50 },
  color: String,
  sections: [SectionSchema],
}, { timestamps: true });

LessonSchema.index({ level: 1, number: 1 });

module.exports = mongoose.model('Lesson', LessonSchema);
