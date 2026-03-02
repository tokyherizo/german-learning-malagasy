const router = require('express').Router();
const Progress = require('../models/Progress');

// GET /api/progress/:userId
router.get('/:userId', async (req, res, next) => {
  try {
    let progress = await Progress.findOne({ userId: req.params.userId });
    if (!progress) {
      progress = await Progress.create({ userId: req.params.userId });
    }
    res.json(progress);
  } catch (err) { next(err); }
});

// PUT /api/progress/:userId  — full overwrite
router.put('/:userId', async (req, res, next) => {
  try {
    const progress = await Progress.findOneAndUpdate(
      { userId: req.params.userId },
      { $set: req.body },
      { upsert: true, new: true, runValidators: true }
    );
    res.json(progress);
  } catch (err) { next(err); }
});

// POST /api/progress/:userId/lesson  — complete a lesson
router.post('/:userId/lesson', async (req, res, next) => {
  try {
    const { lessonId, xp = 50 } = req.body;
    const progress = await Progress.findOneAndUpdate(
      { userId: req.params.userId },
      {
        $addToSet: { completedLessons: lessonId },
        $inc: { totalXP: xp, dailyXP: xp },
        $set: { lastActiveDate: new Date() },
      },
      { upsert: true, new: true }
    );
    res.json(progress);
  } catch (err) { next(err); }
});

// POST /api/progress/:userId/exercise  — record answer
router.post('/:userId/exercise', async (req, res, next) => {
  try {
    const { exerciseId, isCorrect, xp = 10 } = req.body;
    const update = {
      $inc: { totalAnswers: 1, dailyXP: isCorrect ? xp : 0, totalXP: isCorrect ? xp : 0 },
      $set: { lastActiveDate: new Date() },
    };
    if (isCorrect) {
      update.$inc.correctAnswers = 1;
      update.$addToSet = { completedExercises: exerciseId };
    }
    const progress = await Progress.findOneAndUpdate(
      { userId: req.params.userId },
      update,
      { upsert: true, new: true }
    );
    res.json(progress);
  } catch (err) { next(err); }
});

// POST /api/progress/:userId/vocabulary  — mark word learned
router.post('/:userId/vocabulary', async (req, res, next) => {
  try {
    const { wordId } = req.body;
    const progress = await Progress.findOneAndUpdate(
      { userId: req.params.userId },
      {
        $addToSet: { vocabularyLearned: wordId },
        $inc: { totalXP: 2, dailyXP: 2 },
      },
      { upsert: true, new: true }
    );
    res.json(progress);
  } catch (err) { next(err); }
});

// DELETE /api/progress/:userId
router.delete('/:userId', async (req, res, next) => {
  try {
    await Progress.findOneAndDelete({ userId: req.params.userId });
    res.json({ message: 'Progress reset' });
  } catch (err) { next(err); }
});

module.exports = router;
