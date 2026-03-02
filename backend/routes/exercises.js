const router = require('express').Router();
const Exercise = require('../models/Exercise');

// GET /api/exercises?level=A1&lessonId=a1-1
router.get('/', async (req, res, next) => {
  try {
    const filter = {};
    if (req.query.level)    filter.level    = req.query.level.toUpperCase();
    if (req.query.lessonId) filter.lessonId = req.query.lessonId;
    const exercises = await Exercise.find(filter).sort({ level: 1, lessonId: 1 });
    res.json(exercises);
  } catch (err) { next(err); }
});

// GET /api/exercises/:id
router.get('/:id', async (req, res, next) => {
  try {
    const ex = await Exercise.findOne({ id: req.params.id });
    if (!ex) return res.status(404).json({ error: 'Exercise not found' });
    res.json(ex);
  } catch (err) { next(err); }
});

// POST /api/exercises  (upsert)
router.post('/', async (req, res, next) => {
  try {
    const ex = await Exercise.findOneAndUpdate(
      { id: req.body.id },
      req.body,
      { upsert: true, new: true, runValidators: true }
    );
    res.status(201).json(ex);
  } catch (err) { next(err); }
});

module.exports = router;
