const mongoose = require('mongoose');

const AchievementSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  icon: String,
  unlockedAt: Date,
}, { _id: false });

const ProgressSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  totalXP: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  streak: { type: Number, default: 0 },
  lastActiveDate: Date,
  completedLessons: [String],
  completedExercises: [String],
  vocabularyLearned: [String],
  correctAnswers: { type: Number, default: 0 },
  totalAnswers: { type: Number, default: 0 },
  dailyXP: { type: Number, default: 0 },
  achievements: [AchievementSchema],
}, { timestamps: true });

module.exports = mongoose.model('Progress', ProgressSchema);
