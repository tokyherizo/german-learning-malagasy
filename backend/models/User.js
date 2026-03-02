const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name:     { type: String, required: true, trim: true },
  email:    { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, default: '' },          // empty for Google-only accounts
  googleId: { type: String, default: '' },           // Google sub / UID
  avatar:   { type: String, default: '' },           // initials or Google picture URL
  provider: { type: String, enum: ['email', 'google'], default: 'email' },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
