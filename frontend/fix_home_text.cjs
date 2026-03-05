const fs = require('fs');
let c = fs.readFileSync('src/pages/Home.jsx', 'utf8');

const fix = (from, to) => {
  if (c.includes(from)) { c = c.split(from).join(to); console.log('OK:', JSON.stringify(from).slice(0, 70)); }
  else { console.log('MISS:', JSON.stringify(from).slice(0, 70)); }
};

// Hero badge / status pill
fix("DEUTSCH \u2013 MALAGASY", "DEUTSCH \u2013 FOR EVERYONE");
fix("Plateforme d'apprentissage de l'allemand pour les Malagasy", "Free German learning platform for everyone");

// Hero headline gradient
fix("en Malagasy.", "gratuitement.");

// Hero subtitle & German subtitle
fix("La plateforme gratuite pour Malgaches qui apprennent l'allemand", "La plateforme gratuite pour apprendre l'allemand");
fix("Die kostenlose Lernplattform f\u00fcr Madagassen.", "Die kostenlose Lernplattform f\u00fcr alle.");

// Mission title
fix("\u00e0 tous les Malgaches", "\u00e0 tout le monde");

// Mission paragraph
fix("pour que chaque Malgache puisse acc\u00e9der", "pour que chacun puisse acc\u00e9der");

// Mission pillar 2
fix("En Malagasy d'abord", "Contenu clair");
fix("Les explications, exemples et interfaces sont con\u00e7us pour les Malgaches. Apprendre dans sa propre langue facilite la compr\u00e9hension et acc\u00e9l\u00e8re la progression.",
  "Les explications et exemples sont adapt\u00e9s pour faciliter la compr\u00e9hension \u00e0 tous les niveaux, quelle que soit votre langue maternelle.");

// Features section description
fix("contenu sp\u00e9cifique aux apprenants malgaches pour une exp\u00e9rience d'apprentissage sans \u00e9quivalent.",
  "un contenu structur\u00e9 pour une exp\u00e9rience d'apprentissage sans \u00e9quivalent.");

// Feature card: Opportunit\u00e9s info
fix("informations pour ressortissants malgaches.", "informations sur l'Allemagne, l'Autriche et la Suisse.");

// Card titles: corrupted Malagasy words
fix("Fanombohana \u2013 A1", "D\u00e9marrer \u2013 A1");
fix("Mioha \u2013 A2", "Progresser \u2013 A2");

// Remaining raw instances
const remaining = (c.match(/[Mm]algach[ey]|[Mm]alagasy|[Mm]adagass?[ae]n/g) || []);
console.log('\nRemaining Malagasy/Malgache words:', remaining);

fs.writeFileSync('src/pages/Home.jsx', c);
console.log('Done. Lines:', c.split('\n').length);
