const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'frontend', 'src', 'pages', 'Home.jsx');
let t = fs.readFileSync(filePath, 'utf8');

const count = (t.match(/\uFFFD/g) || []).length;
console.log('U+FFFD count before fix:', count);

// Fix all corrupted strings - ordered from most specific (longer) to least specific
const fixes = [
  // ── Hero CTAs ──────────────────────────────────────────────
  ['\uFFFD\uFFFD {t?.home?.cta1', '🚀 {t?.home?.cta1'],
  ['\uFFFD\uFFFD {t?.home?.cta2', '📚 {t?.home?.cta2'],
  ['<span>\uFFFD</span>', '<span>⭐</span>'],
  // XP label
  ['\uFFFD +10 XP', '⭐ +10 XP'],

  // ── Stats bar icons ────────────────────────────────────────
  // We'll match the full label context so we pick correct emoji
  ['label="Mots de vocabulaire"  icon="\uFFFD\uFFFD"', 'label="Mots de vocabulaire"  icon="📖"'],
  ['label="Le\u00e7ons structures"    icon="\uFFFD\uFFFD"', 'label="Leçons structurées"    icon="📚"'],
  ['label="Exercices interactifs" icon="\uFFFD\uFFFD"', 'label="Exercices interactifs" icon="✅"'],
  ['label="Niveaux A1 \uFFFD C2"       icon="\uFFFD\uFFFD"', 'label="Niveaux A1 → C2"       icon="🏆"'],

  // ── Mission section ────────────────────────────────────────
  ['\uFFFD\uFFFD Notre Mission', '🎯 Notre Mission'],
  ['\uFFFD tous les Malgaches', 'à tous les Malgaches'],
  // Mission pillar icons & title
  ["icon: '\uFFFD\uFFFD', title: 'Accessibilit", "icon: '🎯', title: 'Accessibilit"],
  ["icon: '\uFFFD\uFFFD\uFFFD\uFFFD', title: 'En Malagasy", "icon: '🇲🇬', title: 'En Malagasy"],
  ["icon: '\uFFFD\uFFFD', title: 'Opportunit\u00e9s R\uFFFDelles'", "icon: '🌍', title: 'Opportunités Réelles'"],
  // Also fix standalone R?elles:
  ["Opportunit\u00e9s R\uFFFDelles", "Opportunités Réelles"],

  // ── Mission big quote ──────────────────────────────────────
  ['<div className="text-6xl font-black mb-4" style={{ color: `${accentPurple}28`, lineHeight: 1 }}>\uFFFD</div>',
   '<div className="text-6xl font-black mb-4" style={{ color: `${accentPurple}28`, lineHeight: 1 }}>❝</div>'],
  ['diff\\u00e9rente, c\'est une vision diff\\u00e9rente',
   'différente, c\'est une vision différente'],
  ['\uFFFD Federico Fellini \uFFFD Adapt\\u00e9 pour DeutschLearn',
   '— Federico Fellini — Adapté pour DeutschLearn'],

  // ── How it works ──────────────────────────────────────────
  ['Comment \uFFFDa marche', 'Comment ça marche'],
  ['Structur\uFFFD. Efficace.', 'Structuré. Efficace.'],
  ['Trois \uFFFDtapes claires pour passer de z\uFFFDro', 'Trois étapes claires pour passer de zéro'],
  ['se d\uFFFDbloquent progressivement', 'se débloquent progressivement'],
  // Mock UI panel header
  ['DeutschLearn \uFFFD A1 \uFFFD \uFFFDbung', 'DeutschLearn · A1 · Übung'],
  ['Comment dit-on \uFFFD bonjour \uFFFD \uFFFD', 'Comment dit-on « bonjour » ?'],
  ['{opt.ok && \'\uFFFD\'}', "{opt.ok && '✓'}"],

  // ── Features section ──────────────────────────────────────
  ['Fonctionnalit\uFFFDs', 'Fonctionnalités'],
  ['Voir tous les niveaux \uFFFD', 'Voir tous les niveaux →'],
  ['icon="\uFFFD\uFFFD" title="Le\\u00e7ons Th\\u00e9matiques"', 'icon="📖" title="Leçons Thématiques"'],
  ['icon="\uFFFD\uFFFD" title="Prononciation Audio"', 'icon="🔊" title="Prononciation Audio"'],
  ['icon="\uFFFD" title="Syst\\u00e8me XP', 'icon="⭐" title="Système XP'],
  ['icon="\uFFFD\uFFFD" title="Exercices Vari\\u00e9s"', 'icon="✏️" title="Exercices Variés"'],
  ['icon="\uFFFD\uFFFD" title="Suivi de Progression"', 'icon="📊" title="Suivi de Progression"'],
  ['icon="\uFFFD\uFFFD" title="Opportunit\\u00e9s \uFFFD\uFFFD\uFFFD\uFFFD"', 'icon="🌍" title="Opportunités 🇩🇪"'],
  // Fallback for feature structurées
  ['structur\uFFFD\uFFFDs par niveau CEFR', 'structurées par niveau CEFR'],
  // 'à' before 'tous les niveaux supérieurs'
  ['\uFFFD tous les niveaux sup', 'à tous les niveaux sup'],

  // ── Final CTAs ────────────────────────────────────────────
  ['\uFFFD\uFFFD Commencer maintenant', '🚀 Commencer maintenant'],
  ['\uFFFD\uFFFD\uFFFD\uFFFD Opportunit\\u00e9s', '🌍 Opportunités'],

  // ── Resource card open button ─────────────────────────────
  ["'Ouvrir \uFFFD'", "'Ouvrir →'"],

  // ── TestimonialCard quote icon ────────────────────────────
  ['style={{ color: \'#7124e5\' }}>\uFFFD<', "style={{ color: '#7124e5' }}>❝<"],

  // ── Misc single replacements ──────────────────────────────
  ['Accessibilit\uFFFD Totale', 'Accessibilité Totale'],
  ['diff\uFFFDrent', 'différent'],
  ["<span>\uFFFD</span>", "<span>⭐</span>"],  // duplicate guard

  // ── \uXXXX in JSX direct text content ─────────────────────
  // blockquote
  ['diff\\u00e9rente, c\'est une vision diff\\u00e9rente de la vie.',
   'différente, c\'est une vision différente de la vie.'],
  // cite line
  ['Adapt\\u00e9 pour DeutschLearn', 'Adapté pour DeutschLearn'],
];

let changed = 0;
for (const [from, to] of fixes) {
  if (t.includes(from)) {
    t = t.split(from).join(to);
    changed++;
    console.log('Fixed:', JSON.stringify(from).substring(0, 60));
  } else {
    console.log('Not found:', JSON.stringify(from).substring(0, 60));
  }
}

const remaining = (t.match(/\uFFFD/g) || []).length;
console.log('\nFixed', changed, 'patterns. U+FFFD remaining:', remaining);

// Show context of remaining U+FFFD chars
if (remaining > 0) {
  const lines = t.split('\n');
  lines.forEach((line, i) => {
    if (line.includes('\uFFFD')) {
      console.log(`  Line ${i+1}: ${line.trim().substring(0, 100)}`);
    }
  });
}

fs.writeFileSync(filePath, t, 'utf8');
console.log('\nFile written successfully.');
