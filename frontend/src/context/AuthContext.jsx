import { createContext, useContext, useState, useCallback } from 'react';

const AuthContext = createContext(null);
const TOKEN_KEY   = 'deutschmg_token';
const USER_KEY    = 'deutschmg_user';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const initials = (n) =>
  (n || '').trim().split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

/* ─────────────────────────────────────────────────────────────── */
export const AuthProvider = ({ children }) => {
  const [user,  setUser]  = useState(() => {
    try { const s = localStorage.getItem(USER_KEY); return s ? JSON.parse(s) : null; }
    catch { return null; }
  });
  const [error, setError] = useState('');

  const persist = (userData, token) => {
    if (token) localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(userData));
    setUser(userData);
  };

  const getToken = () => localStorage.getItem(TOKEN_KEY);

  /* ── Login ─────────────────────────────────────────────────── */
  const login = useCallback(async ({ email, password }) => {
    setError('');
    try {
      const res = await fetch(`${API}/auth/login`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || 'Erreur de connexion'); return false; }
      persist(data.user, data.token);
      return true;
    } catch {
      setError('Serveur inaccessible. Lancez le backend : node server.js');
      return false;
    }
  }, []);

  /* ── Register ──────────────────────────────────────────────── */
  const register = useCallback(async ({ name, email, password }) => {
    setError('');
    const trimName  = (name  || '').trim();
    const trimEmail = (email || '').toLowerCase().trim();
    if (!trimName)            { setError('Ampidiro ny anaranao');          return false; }
    if (!trimEmail)           { setError('Ampidiro ny email-anao');         return false; }
    if (password.length < 6)  { setError('Mot de passe trop court (min. 6)'); return false; }
    try {
      const res = await fetch(`${API}/auth/register`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ name: trimName, email: trimEmail, password }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || 'Erreur lors de la création du compte'); return false; }
      // Do NOT auto-login — user must sign in manually after registration
      return true;
    } catch {
      setError('Serveur inaccessible. Vérifiez que le backend tourne.');
      return false;
    }
  }, []);

  /* ── Google OAuth (real) ─────────────────────────────────────── */
  // Called with user info object from Google userinfo endpoint
  const loginWithGoogle = useCallback(async ({ name, email, googleId, picture }) => {
    setError('');
    if (!email) { setError('Email Google manquant'); return false; }
    try {
      const res = await fetch(`${API}/auth/google`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ name, email, googleId, avatar: picture }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || 'Erreur Google'); return false; }
      persist({ ...data.user, avatar: picture || initials(name) }, data.token);
      return true;
    } catch {
      // Backend down — store Google session locally
      const fallback = { name, email, avatar: picture || initials(name), provider: 'google', isGuest: false };
      persist(fallback, null);
      return true;
    }
  }, []);

  /* ── Update profile ──────────────────────────────────────────── */
  const updateProfile = useCallback(({ name }) => {
    setError('');
    const trimName = (name || '').trim();
    if (!trimName) { setError('Le nom ne peut pas être vide'); return false; }
    const updated = { ...user, name: trimName, avatar: initials(trimName) };
    persist(updated, getToken());
    return true;
  }, [user]);

  /* ── Change password (via API) ───────────────────────────────── */
  const changePassword = useCallback(async ({ current, newPass }) => {
    setError('');
    try {
      const res = await fetch(`${API}/auth/change-password`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}` },
        body:    JSON.stringify({ current, newPass }),
      });
      if (!res.ok) { const d = await res.json(); setError(d.error || 'Erreur'); return false; }
      return true;
    } catch {
      setError('Serveur inaccessible');
      return false;
    }
  }, []);

  /* ── Forgot password (real API) ─────────────────────────────── */
  const forgotPassword = useCallback(async (email) => {
    setError('');
    const trimmed = (email || '').toLowerCase().trim();
    if (!trimmed) { setError('Veuillez saisir votre adresse email'); return false; }
    try {
      const res  = await fetch(`${API}/auth/forgot-password`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ email: trimmed }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || 'Erreur lors de l\'envoi'); return false; }
      return data.message || true;
    } catch {
      setError('Serveur inaccessible. Vérifiez que le backend tourne.');
      return false;
    }
  }, []);

  /* ── Reset password (from email token) ──────────────────────── */
  const resetPassword = useCallback(async ({ token, password }) => {
    setError('');
    if (!token || !password) { setError('Champs requis'); return false; }
    if (password.length < 6) { setError('Mot de passe trop court (min. 6 caractères)'); return false; }
    try {
      const res  = await fetch(`${API}/auth/reset-password`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ token, password }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || 'Erreur'); return false; }
      return true;
    } catch {
      setError('Serveur inaccessible.');
      return false;
    }
  }, []);

  /* ── Logout ─────────────────────────────────────────────────── */
  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    setUser(null);
    setError('');
  }, []);

  const clearError = useCallback(() => setError(''), []);

  return (
    <AuthContext.Provider value={{
      user, login, register, loginWithGoogle, forgotPassword, resetPassword,
      updateProfile, changePassword,
      logout, error, clearError, isAuthenticated: !!user, getToken,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};


