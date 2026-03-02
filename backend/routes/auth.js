const router  = require('express').Router();
const bcrypt  = require('bcryptjs');
const jwt     = require('jsonwebtoken');
const mongoose = require('mongoose');
const User    = require('../models/User');

const JWT_SECRET  = process.env.JWT_SECRET  || 'deutschmg-secret-change-in-prod';
const JWT_EXPIRES = process.env.JWT_EXPIRES || '30d';

const dbCheck = (_req, res, next) => {
  if (mongoose.connection.readyState !== 1)
    return res.status(503).json({ error: 'MongoDB non connecté. Lancez MongoDB et réessayez.' });
  next();
};

// Apply DB check to all auth routes that need the database
router.use(['/register', '/login', '/google', '/change-password'], dbCheck);

const initials = (n) =>
  (n || '').trim().split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

const sign = (user) =>
  jwt.sign({ id: user._id, email: user.email, name: user.name }, JWT_SECRET, { expiresIn: JWT_EXPIRES });

const userPayload = (user) => ({
  id:       user._id,
  name:     user.name,
  email:    user.email,
  avatar:   user.avatar || initials(user.name),
  provider: user.provider,
});

/* ── POST /api/auth/register ──────────────────────────────────── */
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ error: 'Tous les champs sont requis' });
    if (password.length < 6)
      return res.status(400).json({ error: 'Mot de passe trop court (min. 6 caractères)' });

    const existing = await User.findOne({ email: email.toLowerCase().trim() });
    if (existing)
      return res.status(409).json({ error: 'Cette adresse email est déjà utilisée' });

    const hashed = await bcrypt.hash(password, 12);
    const user   = await User.create({
      name:     name.trim(),
      email:    email.toLowerCase().trim(),
      password: hashed,
      avatar:   initials(name),
      provider: 'email',
    });

    res.status(201).json({ token: sign(user), user: userPayload(user) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ── POST /api/auth/login ─────────────────────────────────────── */
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ error: 'Email et mot de passe requis' });

    const user = await User.findOne({ email: email.toLowerCase().trim() });
    if (!user)
      return res.status(401).json({ error: 'Email ou mot de passe incorrect' });

    if (user.provider === 'google' && !user.password)
      return res.status(401).json({ error: 'Ce compte utilise Google. Connectez-vous avec Google.' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid)
      return res.status(401).json({ error: 'Email ou mot de passe incorrect' });

    res.json({ token: sign(user), user: userPayload(user) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ── POST /api/auth/google ────────────────────────────────────── */
// Receives decoded Google profile from the frontend (after verifying the credential client-side)
router.post('/google', async (req, res) => {
  try {
    const { name, email, googleId, avatar } = req.body;
    if (!email)
      return res.status(400).json({ error: 'Email Google manquant' });

    let user = await User.findOne({ email: email.toLowerCase().trim() });

    if (!user) {
      // New Google user — create account
      user = await User.create({
        name:     name || email.split('@')[0],
        email:    email.toLowerCase().trim(),
        googleId: googleId || '',
        avatar:   avatar || initials(name),
        provider: 'google',
        password: '',
      });
    } else {
      // Update googleId if missing
      if (!user.googleId) {
        user.googleId = googleId || '';
        user.provider = 'google';
        await user.save();
      }
    }

    res.json({ token: sign(user), user: userPayload(user) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ── GET /api/auth/me  (verify token) ────────────────────────── */
router.get('/me', (req, res) => {
  try {
    const token = (req.headers.authorization || '').replace('Bearer ', '');
    if (!token) return res.status(401).json({ error: 'Non authentifié' });
    const decoded = jwt.verify(token, JWT_SECRET);
    res.json({ user: decoded });
  } catch {
    res.status(401).json({ error: 'Token invalide ou expiré' });
  }
});

/* ── POST /api/auth/change-password ──────────────────────────── */
router.post('/change-password', async (req, res) => {
  try {
    const token = (req.headers.authorization || '').replace('Bearer ', '');
    if (!token) return res.status(401).json({ error: 'Non authentifié' });
    const decoded = jwt.verify(token, JWT_SECRET);

    const { current, newPass } = req.body;
    if (!current || !newPass) return res.status(400).json({ error: 'Champs requis' });
    if (newPass.length < 6)   return res.status(400).json({ error: 'Nouveau mot de passe trop court' });

    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ error: 'Utilisateur introuvable' });

    const valid = await bcrypt.compare(current, user.password);
    if (!valid) return res.status(401).json({ error: 'Mot de passe actuel incorrect' });

    user.password = await bcrypt.hash(newPass, 12);
    await user.save();
    res.json({ message: 'Mot de passe mis à jour' });
  } catch {
    res.status(401).json({ error: 'Token invalide ou expiré' });
  }
});

module.exports = router;
