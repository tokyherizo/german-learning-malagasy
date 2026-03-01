// API Service - Mifandray amin'ny backend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const apiRequest = async (endpoint, options = {}) => {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, defaultOptions);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'API Error');
    }
    return await response.json();
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

// ---- LESSONS ----
export const lessonsAPI = {
  getAll: () => apiRequest('/lessons'),
  getByLevel: (level) => apiRequest(`/lessons?level=${level}`),
  getById: (id) => apiRequest(`/lessons/${id}`),
};

// ---- VOCABULARY ----
export const vocabularyAPI = {
  getAll: () => apiRequest('/vocabulary'),
  getByLevel: (level) => apiRequest(`/vocabulary?level=${level}`),
  getByTopic: (level, topic) => apiRequest(`/vocabulary?level=${level}&topic=${topic}`),
};

// ---- EXERCISES ----
export const exercisesAPI = {
  getAll: () => apiRequest('/exercises'),
  getByLevel: (level) => apiRequest(`/exercises?level=${level}`),
  getByLesson: (lessonId) => apiRequest(`/exercises?lessonId=${lessonId}`),
};

// ---- PROGRESS ----
export const progressAPI = {
  get: (userId) => apiRequest(`/progress/${userId}`),
  update: (userId, data) => apiRequest(`/progress/${userId}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  completeLesson: (userId, lessonId, xp) => apiRequest('/progress/complete-lesson', {
    method: 'POST',
    body: JSON.stringify({ userId, lessonId, xp }),
  }),
};

export default { lessonsAPI, vocabularyAPI, exercisesAPI, progressAPI };
