const router = require('express').Router();
const Lesson = require('../models/Lesson');

// GET /api/lessons
router.get('/', async (req, res, next) => {
  try {
    const filter = {};
    if (req.query.level) filter.level = req.query.level.toUpperCase();
    const lessons = await Lesson.find(filter).sort({ level: 1, number: 1 });
    res.json(lessons);
  } catch (err) { next(err); }
});

// GET /api/lessons/:id
router.get('/:id', async (req, res, next) => {
  try {
    const lesson = await Lesson.findOne({ id: req.params.id });
    if (!lesson) return res.status(404).json({ error: 'Lesson not found' });
    res.json(lesson);
  } catch (err) { next(err); }
});

// POST /api/lessons  (admin / seed)
router.post('/', async (req, res, next) => {
  try {
    const lesson = await Lesson.findOneAndUpdate(
      { id: req.body.id },
      req.body,
      { upsert: true, new: true, runValidators: true }
    );
    res.status(201).json(lesson);
  } catch (err) { next(err); }
});

// DELETE /api/lessons/:id
router.delete('/:id', async (req, res, next) => {
  try {
    await Lesson.findOneAndDelete({ id: req.params.id });
    res.json({ message: 'Deleted' });
  } catch (err) { next(err); }
});

module.exports = router;
