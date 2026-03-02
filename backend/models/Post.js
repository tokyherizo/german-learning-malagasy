const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  userId:   { type: String, required: true },
  userName: { type: String, required: true },
  text:     { type: String, required: true, maxlength: 500 },
  createdAt:{ type: Date, default: Date.now },
}, { _id: true });

const PostSchema = new mongoose.Schema({
  authorId:   { type: String, required: true },
  authorName: { type: String, required: true },
  authorLevel:{ type: String, default: 'A1' },   // A1 A2 B1 B2
  type:       { type: String, enum: ['text', 'lesson', 'video', 'question'], default: 'text' },
  content:    { type: String, required: true, maxlength: 2000 },
  imageUrl:   { type: String, default: '' },
  videoUrl:   { type: String, default: '' },
  lessonRef:  { type: String, default: '' },   // lesson id if type===lesson
  likes:      [{ type: String }],              // array of userIds
  savedBy:    [{ type: String }],              // array of userIds
  comments:   [CommentSchema],
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);
