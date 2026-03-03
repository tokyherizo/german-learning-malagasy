// Service fanaraha-maso ny fandrosoan'ny mpianatra
// Progress Tracking Service (localStorage)

const STORAGE_KEY = 'deutsch_malagasy_progress';

const defaultProgress = {
  userId: 'local_user',
  xp: 0,
  level: 'A1',
  streak: 0,
  lastActivity: null,
  completedLessons: [],
  completedExercises: [],
  vocabularyLearned: [],
  achievements: [],
  dailyGoal: 50,
  dailyXP: 0,
  stats: {
    totalXP: 0,
    lessonsCompleted: 0,
    exercisesCompleted: 0,
    wordsLearned: 0,
    correctAnswers: 0,
    totalAnswers: 0,
  }
};

export const progressService = {
  // Maka ny angon-drakitra
  getProgress: () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
      // Save and return default
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProgress));
      return defaultProgress;
    } catch {
      return defaultProgress;
    }
  },

  // Manavao ny angon-drakitra
  saveProgress: (progress) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
      return true;
    } catch {
      return false;
    }
  },

  // Manatanteraka lesona
  completeLesson: (lessonId, xpEarned) => {
    const progress = progressService.getProgress();
    if (!progress.completedLessons.includes(lessonId)) {
      progress.completedLessons.push(lessonId);
      progress.xp += xpEarned;
      progress.stats.totalXP += xpEarned;
      progress.stats.lessonsCompleted += 1;
      progress.dailyXP += xpEarned;
      progress.lastActivity = new Date().toISOString();
      
      // Halavana ny streak
      progressService._updateStreak(progress);
      
      // Check achievements
      progressService._checkAchievements(progress);
      
      progressService.saveProgress(progress);
    }
    return progress;
  },

  // Manatanteraka fanazaran-tsaina
  completeExercise: (exerciseId, isCorrect, xpEarned = 10) => {
    const progress = progressService.getProgress();
    if (!progress.completedExercises.includes(exerciseId)) {
      progress.completedExercises.push(exerciseId);
      progress.stats.exercisesCompleted += 1;
    }
    progress.stats.totalAnswers += 1;
    if (isCorrect) {
      progress.stats.correctAnswers += 1;
      progress.xp += xpEarned;
      progress.stats.totalXP += xpEarned;
      progress.dailyXP += xpEarned;
    }
    progress.lastActivity = new Date().toISOString();
    progressService._updateStreak(progress);
    progressService.saveProgress(progress);
    return progress;
  },

  // Ajouter un mot appris
  learnWord: (wordId) => {
    const progress = progressService.getProgress();
    if (!progress.vocabularyLearned.includes(wordId)) {
      progress.vocabularyLearned.push(wordId);
      progress.stats.wordsLearned += 1;
      progress.xp += 2;
      progressService.saveProgress(progress);
    }
    return progress;
  },

  // Manavao streak
  _updateStreak: (progress) => {
    const today = new Date().toDateString();
    const lastActivity = progress.lastActivity ? new Date(progress.lastActivity).toDateString() : null;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    
    if (lastActivity === today) {
      // efa niasa androany
    } else if (lastActivity === yesterday) {
      progress.streak += 1;
    } else if (!lastActivity) {
      progress.streak = 1;
    } else {
      progress.streak = 1; // Tapaka ny streak
    }
  },

  // Check ny achievement
  _checkAchievements: (progress) => {
    const achievements = [
      { id: 'first_lesson', title: 'Lesona Voalohany!', titleDe: 'Erste Lektion!', icon: '🎉', condition: () => progress.stats.lessonsCompleted >= 1 },
      { id: 'five_lessons', title: 'Lesona 5!', titleDe: '5 Lektionen!', icon: '⭐', condition: () => progress.stats.lessonsCompleted >= 5 },
      { id: 'first_words', title: 'Mpianatra Teny!', titleDe: 'Wortlerner!', icon: '📚', condition: () => progress.stats.wordsLearned >= 10 },
      { id: 'hundred_xp', title: 'XP 100!', titleDe: '100 XP!', icon: '🏆', condition: () => progress.stats.totalXP >= 100 },
      { id: 'streak_3', title: 'Streak 3 Andro!', titleDe: '3 Tage Streak!', icon: '🔥', condition: () => progress.streak >= 3 },
      { id: 'perfect_score', title: 'Nahazo 100%!', titleDe: '100% erreicht!', icon: '💯', condition: () => {
        const rate = progress.stats.totalAnswers > 0 ? progress.stats.correctAnswers / progress.stats.totalAnswers : 0;
        return rate >= 1 && progress.stats.totalAnswers >= 5;
      }},
    ];

    achievements.forEach(ach => {
      if (!progress.achievements.find(a => a.id === ach.id) && ach.condition()) {
        progress.achievements.push({ ...ach, earnedAt: new Date().toISOString() });
      }
    });
  },

  // Manadio ny progress (reset)
  resetProgress: () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProgress));
    return defaultProgress;
  },

  // Mahazo ny tahan'ny nahazoany
  getAccuracyRate: () => {
    const progress = progressService.getProgress();
    if (progress.stats.totalAnswers === 0) return 0;
    return Math.round((progress.stats.correctAnswers / progress.stats.totalAnswers) * 100);
  },

  // Mahazo ny tahan'ny fandrosoana isaky ny level
  getLevelProgress: (level, totalLessons) => {
    const progress = progressService.getProgress();
    const levelLessons = progress.completedLessons.filter(id => id.startsWith(level.toLowerCase()));
    return Math.round((levelLessons.length / totalLessons) * 100);
  },

  // Halavana ny XP amin'ny level manaraka
  getXPForNextLevel: () => {
    const progress = progressService.getProgress();
    const thresholds = { A1: 500, A2: 1500, B1: 3000 };
    const current = progress.level;
    return thresholds[current] || 9999;
  }
};

export default progressService;
