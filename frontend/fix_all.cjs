const fs = require('fs');
let c = fs.readFileSync('src/pages/Home.jsx', 'utf8');

// ─── 1. Kill remaining Testimonials + CTA leftover ────────────────────────
// Everything from the broken comment "{/* testimonials removed */" through </section> </div> });
const cutFrom = '\n      {/* testimonials removed */';
const cutTo   = '\n\n    </div>\n  );\n};\n\nexport default Home;';
const idxFrom = c.indexOf(cutFrom);
const idxTo   = c.lastIndexOf(cutTo);
if (idxFrom !== -1 && idxTo !== -1) {
  c = c.slice(0, idxFrom) + cutTo;
  console.log('Testimonials+CTA removed');
} else {
  console.log('MISS cut block', idxFrom, idxTo);
}

// ─── 2. Text fixes ────────────────────────────────────────────────────────
const fix = (from, to) => {
  if (c.includes(from)) { c = c.split(from).join(to); console.log('OK:', from.slice(0,60)); }
  else { console.log('MISS:', from.slice(0,60)); }
};

// Hero badge mobile
fix('DEUTSCH \u{fffd} MALAGASY',        'DEUTSCH \u{2013} FOR EVERYONE');
fix('DEUTSCH \u2013 MALAGASY',          'DEUTSCH \u2013 FOR EVERYONE');
// (catch raw replacement character variant)
const rawBadge = c.match(/DEUTSCH . MALAGASY/);
if (rawBadge) { c = c.replace(/DEUTSCH . MALAGASY/g, 'DEUTSCH \u2013 FOR EVERYONE'); console.log('OK: DEUTSCH raw badge'); }

// Hero headline
fix("en Malagasy.", "gratuitement.");

// Hero subtitle (has escaped unicode inline)
c = c.replace("Malgaches qui apprennent l'allemand", "apprenants qui apprennent l'allemand");
console.log("subtitle Malgaches fixed?", !c.includes("Malgaches qui"));

// German subtitle
c = c.replace('Madagassen.', 'alle.');
console.log('Madagassen fixed?', !c.includes('Madagassen'));

// Mission title: uses raw replacement chars + text
c = c.replace(/\u00e0 tous les Malgaches/, '\u00e0 tout le monde');
c = c.replace(/\ufffd tous les Malgaches/, '\u00e0 tout le monde');
// catch any remaining
c = c.replace(/tous les Malgaches/g, 'tout le monde');
console.log('Mission title fixed?', !c.includes('Malgaches'));

// Mission paragraph
c = c.replace(/chaque Malgache puisse/g, 'chacun puisse');

// Mission pillar 2 title
fix("En Malagasy d'abord", "Contenu clair");

// Mission pillar 2 desc
c = c.replace(
  "Les explications, exemples et interfaces sont con\u00e7us pour les Malgaches. Apprendre dans sa propre langue facilite la compr\u00e9hension et acc\u00e9l\u00e8re la progression.",
  "Les explications et exemples sont adapt\u00e9s pour faciliter la compr\u00e9hension \u00e0 tous les niveaux, quelle que soit votre langue maternelle."
);

// Features section desc
c = c.replace(
  "contenu sp\u00e9cifique aux apprenants malgaches",
  "un contenu structur\u00e9"
);
c = c.replace("pour les apprenants malgaches", "pour tous les apprenants");

// Feature card Opportunit\u00e9s desc
c = c.replace("informations pour ressortissants malgaches.", "informations sur l'Allemagne, l'Autriche et la Suisse.");

// Card data: corrupted Malagasy titles
c = c.replace("Fanombohana \u2013 A1", "D\u00e9marrer \u2013 A1");
c = c.replace("Mioha \u2013 A2",       "Progresser \u2013 A2");

// Catch any missed raw occurrences
c = c.replace(/Malgach[ey]/gi, (m) => m[0] === 'M' ? 'Apprenant' : 'apprenant');
c = c.replace(/Malagasy/gi, 'apprenant');
c = c.replace(/[Mm]adagass?[ae]n/g, 'alle');

// Status badges (??  Malagasy etc.)
// These may be rendered as replacement chars — do a broad sweep
c = c.replace(/ MALAGASY/g, ' FOR EVERYONE');

// Final check
const remaining = c.match(/[Mm]algach[ey]|[Mm]alagasy|[Mm]adagass/g) || [];
console.log('Remaining:', remaining);

fs.writeFileSync('src/pages/Home.jsx', c);
console.log('Done. Lines:', c.split('\n').length);
