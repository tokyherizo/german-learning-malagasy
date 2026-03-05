const router     = require('express').Router();
const bcrypt     = require('bcryptjs');
const jwt        = require('jsonwebtoken');
const mongoose   = require('mongoose');
const nodemailer = require('nodemailer');
const User       = require('../models/User');

const JWT_SECRET  = process.env.JWT_SECRET  || 'deutschmg-secret-change-in-prod';
const JWT_EXPIRES = process.env.JWT_EXPIRES || '30d';

const dbCheck = (_req, res, next) => {
  if (mongoose.connection.readyState !== 1)
    return res.status(503).json({ error: 'MongoDB non connecté. Lancez MongoDB et réessayez.' });
  next();
};

// Apply DB check to all auth routes that need the database
router.use(['/register', '/login', '/google', '/change-password', '/forgot-password', '/reset-password'], dbCheck);

/* ── Email transporter ──────────────────────────────────────── */
const createTransporter = () => nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

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

/* ── POST /api/auth/forgot-password ─────────────────────────── */
router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'Email requis' });

    const user = await User.findOne({ email: email.toLowerCase().trim() });
    // Always respond with success to avoid user enumeration
    if (!user) return res.json({ message: 'Si ce compte existe, un email a été envoyé.' });

    if (user.provider === 'google' && !user.password)
      return res.json({ message: 'Ce compte utilise Google. Connectez-vous avec Google.' });

    const resetToken = jwt.sign(
      { id: user._id, email: user.email, type: 'password-reset' },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';
    const resetUrl   = `${CLIENT_URL}/login?token=${resetToken}`;

    const transporter = createTransporter();
    await transporter.sendMail({
      from: `"Germify" <${process.env.EMAIL_USER}>`,
      to: user.email,
      subject: 'Password reset — Germify',
      html: `
        <div style="font-family:sans-serif;max-width:500px;margin:auto;background:#0d0d0d;color:#fff;padding:36px;border-radius:16px;">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:24px;">
            <div style="width:36px;height:36px;background:#fff;border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:900;color:#0d0d0d;font-size:13px;">DE</div>
            <span style="font-size:20px;font-weight:900;">Germify</span>
          </div>
          <h2 style="margin:0 0 8px;font-size:22px;">Password Reset 🔐</h2>
          <p style="color:rgba(255,255,255,0.55);margin-bottom:20px;">Hello <strong style="color:#fff;">${user.name}</strong>,</p>
          <p style="color:rgba(255,255,255,0.75);line-height:1.6;">You requested a password reset on DeutschLearn. Click the button below to choose a new password:</p>
          <a href="${resetUrl}" style="display:inline-block;margin:28px 0;padding:14px 32px;background:linear-gradient(135deg,#4f46e5,#7c3aed);color:#fff;text-decoration:none;border-radius:12px;font-weight:700;font-size:15px;">Reset my password</a>
          <p style="color:rgba(255,255,255,0.35);font-size:13px;">⏱ This link expires in <strong>1 hour</strong>.</p>
          <p style="color:rgba(255,255,255,0.25);font-size:12px;">If you did not request this, please ignore this email — your password will not be changed.</p>
          <hr style="border:none;border-top:1px solid rgba(255,255,255,0.08);margin:24px 0;" />
          <p style="color:rgba(255,255,255,0.20);font-size:11px;">Direct link: ${resetUrl}</p>
        </div>
      `,
    });

    res.json({ message: 'Email sent! Check your inbox (and spam folder).' });
  } catch (err) {
    console.error('Forgot-password error:', err.message);
    res.status(500).json({ error: 'Unable to send email. Check EMAIL_USER / EMAIL_PASS configuration on the server.' });
  }
});

/* ── POST /api/auth/reset-password ──────────────────────────── */
router.post('/reset-password', async (req, res) => {
  try {
    const { token, password } = req.body;
    if (!token || !password) return res.status(400).json({ error: 'Token et mot de passe requis' });
    if (password.length < 6)  return res.status(400).json({ error: 'Mot de passe trop court (min. 6 caractères)' });

    let decoded;
    try { decoded = jwt.verify(token, JWT_SECRET); }
    catch { return res.status(401).json({ error: 'Lien invalide ou expiré. Recommencez la procédure.' }); }

    if (decoded.type !== 'password-reset')
      return res.status(401).json({ error: 'Token invalide.' });

    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ error: 'Utilisateur introuvable' });

    user.password = await bcrypt.hash(password, 12);
    await user.save();

    res.json({ message: 'Mot de passe mis à jour avec succès !' });
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
