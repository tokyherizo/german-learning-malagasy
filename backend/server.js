const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// ── Middleware ──────────────────────────────────────────────────────────────
app.use(cors({
  origin: (origin, callback) => {
    // Allow: no origin (curl, Postman, mobile), localhost any port, Vercel deployments
    if (
      !origin ||
      /^https?:\/\/localhost(:\d+)?$/.test(origin) ||
      /^https?:\/\/127\.0\.0\.1(:\d+)?$/.test(origin) ||
      origin.endsWith('.vercel.app') ||
      origin === process.env.CLIENT_URL
    ) {
      return callback(null, true);
    }
    callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
}));
app.use(express.json());

// ── Health check (no DB needed) ────────────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', db: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected', timestamp: new Date().toISOString() });
});

// ── Routes ──────────────────────────────────────────────────────────────────
// Auth routes — no MongoDB guard (auth handles its own DB errors)
app.use('/api/auth', require('./routes/auth'));

// Guard: return 503 on all other /api routes if MongoDB is not yet connected
app.use('/api', (req, res, next) => {
  if (!mongoose.connection || mongoose.connection.readyState !== 1) {
    return res.status(503).json({ error: 'Database not connected. Start MongoDB and retry.' });
  }
  next();
});

app.use('/api/lessons',    require('./routes/lessons'));
app.use('/api/vocabulary', require('./routes/vocabulary'));
app.use('/api/exercises',  require('./routes/exercises'));
app.use('/api/progress',   require('./routes/progress'));

// ── Health check ─────────────────────────────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ── 404 ──────────────────────────────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// ── Error handler ────────────────────────────────────────────────────────────
app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message || 'Internal server error' });
});

// ── DB + Start ────────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
// Use 127.0.0.1 explicitly — avoids Node.js resolving "localhost" to ::1 (IPv6)
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/german_learning';

// Start HTTP server immediately
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

// ── Keep-alive : prevent Render free tier from sleeping ─────────────────────
const SELF_URL = process.env.RENDER_EXTERNAL_URL || `http://localhost:${PORT}`;
setInterval(() => {
  fetch(`${SELF_URL}/api/health`)
    .then(() => console.log('🔁 Keep-alive ping sent'))
    .catch(() => {});
}, 14 * 60 * 1000); // every 14 minutes

// Then connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected:', MONGO_URI);
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    console.error('⚠️  Make sure MongoDB is running: https://www.mongodb.com/try/download/community');
    console.error('⚠️  Or use MongoDB Atlas: set MONGO_URI in .env');
  });
