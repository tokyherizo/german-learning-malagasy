const router = require('express').Router();
const Vocabulary = require('../models/Vocabulary');

// GET /api/vocabulary?level=A1
router.get('/', async (req, res, next) => {
  try {
    const filter = {};
    if (req.query.level) filter.level = req.query.level.toUpperCase();
    if (req.query.topic) filter.topic = req.query.topic;
    const vocab = await Vocabulary.find(filter).sort({ level: 1, topic: 1 });
    res.json(vocab);
  } catch (err) { next(err); }
});

// GET /api/vocabulary/:level/:topic
router.get('/:level/:topic', async (req, res, next) => {
  try {
    const entry = await Vocabulary.findOne({
      level: req.params.level.toUpperCase(),
      topic: req.params.topic,
    });
    if (!entry) return res.status(404).json({ error: 'Topic not found' });
    res.json(entry);
  } catch (err) { next(err); }
});

// POST /api/vocabulary  (upsert by level+topic)
router.post('/', async (req, res, next) => {
  try {
    const entry = await Vocabulary.findOneAndUpdate(
      { level: req.body.level, topic: req.body.topic },
      req.body,
      { upsert: true, new: true, runValidators: true }
    );
    res.status(201).json(entry);
  } catch (err) { next(err); }
});

module.exports = router;
