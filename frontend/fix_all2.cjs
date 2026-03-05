const fs = require('fs');
let c = fs.readFileSync('src/pages/Home.jsx', 'utf8');

// Fix pillar 2 title + desc (Apprenants leftover from previous regex)
c = c.replace(
  "icon: '????', title: 'En apprenant d\\'abord'",
  "icon: '\ud83d\udcda', title: 'Contenu clair'"
);
c = c.replace(
  "icon: '????', title: \"En apprenant d'abord\"",
  "icon: '\ud83d\udcda', title: 'Contenu clair'"
);
// Any remaining variant
c = c.replace(/title: 'En apprenant d.abord'/g, "title: 'Contenu clair'");
c = c.replace(
  /Les explications, exemples et interfaces sont con.us pour les Apprenants\. Apprendre dans sa propre langue facilite la compr.hension et acc.l.re la progression\./g,
  "Les explications et exemples sont adapt\u00e9s pour faciliter la compr\u00e9hension \u00e0 tous les niveaux, quelle que soit votre langue maternelle."
);

// Fix subtitle still mentioning "Apprenants" oddly
c = c.replace(
  "pour Apprenants qui apprennent l'allemand",
  "pour apprendre l'allemand"
);

// Fix card titles (escaped unicode in source)
c = c.replace(
  "'Fanombohana \\u2013 A1'",
  "'D\u00e9marrer \u2013 A1'"
);
c = c.replace(
  "'Mioha \\u2013 A2'",
  "'Progresser \u2013 A2'"
);

// Fix features paragraph
c = c.replace(
  "contenu sp\u00e9cifique aux apprenants malgaches pour",
  "un contenu structur\u00e9 pour"
);
c = c.replace(
  "apprenants malgaches pour une exp\u00e9rience",
  "apprenants pour une exp\u00e9rience"
);

// Final sanity check
const bad = (c.match(/[Mm]algach[ey]|[Mm]alagasy|[Mm]adagass|Fanombo|Mioha/g) || []);
console.log('Still bad words:', bad);
console.log('Has CEFR section?', c.includes('6. LEVELS ROADMAP'));
console.log('Has testimonials?', c.includes('8. TESTIMONIALS'));
console.log('Has final CTA?',   c.includes('9. FINAL CTA'));

fs.writeFileSync('src/pages/Home.jsx', c);
console.log('Done. Lines:', c.split('\n').length);
