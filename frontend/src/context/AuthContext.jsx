import { createContext, useContext, useState, useCallback } from 'react';

const AuthContext  = createContext(null);
const STORAGE_KEY  = 'deutschmg_user';
const ACCOUNTS_KEY = 'deutschmg_accounts';

/* ── Seed accounts ─────────────────────────────────────────────── */
const SEED_ACCOUNTS = [
  { email: 'demo@deutschmg.mg',  password: 'deutsch123', name: 'Demo Mpianatra', avatar: 'DM' },
  { email: 'admin@deutschmg.mg', password: 'admin123',   name: 'Admin',          avatar: 'AD' },
];

const loadAccounts = () => {
  try {
    const s = localStorage.getItem(ACCOUNTS_KEY);
    return s ? JSON.parse(s) : [...SEED_ACCOUNTS];
  } catch { return [...SEED_ACCOUNTS]; }
};
const saveAccounts = (a) => localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(a));
const initials = (n) => n.trim().split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

/* ─────────────────────────────────────────────────────────────── */
export const AuthProvider = ({ children }) => {
  const [user,  setUser]  = useState(() => {
    try { const s = localStorage.getItem(STORAGE_KEY); return s ? JSON.parse(s) : null; }
    catch { return null; }
  });
  const [error, setError] = useState('');

  const persist = (userData) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    setUser(userData);
  };

  /* ── Login ─────────────────────────────────────────────────── */
  const login = useCallback(({ email, password }) => {
    setError('');
    const found = loadAccounts().find(
      a => a.email.toLowerCase() === (email || '').toLowerCase().trim()
        && a.password === password
    );
    if (!found) {
      setError('Email na tenimiafina diso • Falsche E-Mail oder Passwort');
      return false;
    }
    persist({ name: found.name, email: found.email, avatar: found.avatar || initials(found.name), isGuest: false, provider: 'email' });
    return true;
  }, []);

  /* ── Register ──────────────────────────────────────────────── */
  const register = useCallback(({ name, email, password }) => {
    setError('');
    const trimName  = (name  || '').trim();
    const trimEmail = (email || '').toLowerCase().trim();
    if (!trimName)           { setError('Ampidiro ny anaranao • Gib deinen Namen ein');        return false; }
    if (!trimEmail)          { setError('Ampidiro ny email-anao • E-Mail eingeben');            return false; }
    if (password.length < 6) { setError('Tenimiafina kely loatra (min. 6 karatra)');           return false; }
    const accounts = loadAccounts();
    if (accounts.find(a => a.email.toLowerCase() === trimEmail)) {
      setError('Efa misy ilay email • Diese E-Mail existiert bereits');
      return false;
    }
    const newAcc = { email: trimEmail, password, name: trimName, avatar: initials(trimName) };
    accounts.push(newAcc);
    saveAccounts(accounts);
    persist({ name: trimName, email: trimEmail, avatar: initials(trimName), isGuest: false, provider: 'email' });
    return true;
  }, []);

  /* ── Google sign-in (simulated) ─────────────────────────────── */
  const loginWithGoogle = useCallback(() => {
    setError('');
    const g = { name: 'Utilisateur Google', email: `user${Date.now()}@gmail.com`, avatar: 'G', isGuest: false, provider: 'google' };
    persist(g);
    return true;
  }, []);

  /* ── Forgot password (simulated) ───────────────────────────── */
  const forgotPassword = useCallback((email) => {
    setError('');
    if (!(email || '').toLowerCase().trim()) { setError('Ampidiro ny email-anao'); return false; }
    return true; // always succeeds — don't leak account existence
  }, []);

  /* ── Update profile ──────────────────────────────────────────── */
  const updateProfile = useCallback(({ name }) => {
    setError('');
    const trimName = (name || '').trim();
    if (!trimName) { setError('Le nom ne peut pas être vide'); return false; }
    const updated = { ...user, name: trimName, avatar: initials(trimName) };
    const accounts = loadAccounts();
    const idx = accounts.findIndex(a => a.email.toLowerCase() === user.email.toLowerCase());
    if (idx !== -1) { accounts[idx].name = trimName; accounts[idx].avatar = initials(trimName); saveAccounts(accounts); }
    persist(updated);
    return true;
  }, [user]);

  /* ── Change password ─────────────────────────────────────────── */
  const changePassword = useCallback(({ current, newPass }) => {
    setError('');
    const accounts = loadAccounts();
    const idx = accounts.findIndex(
      a => a.email.toLowerCase() === (user?.email || '').toLowerCase() && a.password === current
    );
    if (idx === -1) { setError('Mot de passe actuel incorrect'); return false; }
    accounts[idx].password = newPass;
    saveAccounts(accounts);
    return true;
  }, [user]);

  /* ── Logout ─────────────────────────────────────────────────── */
  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
    setError('');
  }, []);

  const clearError = useCallback(() => setError(''), []);

  return (
    <AuthContext.Provider value={{
      user, login, register, loginWithGoogle, forgotPassword,
      updateProfile, changePassword,
      logout, error, clearError, isAuthenticated: !!user,
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
