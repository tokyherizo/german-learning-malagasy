const fs = require('fs');
let c = fs.readFileSync('src/pages/Home.jsx', 'utf8');

// Helper: show exact bytes around a match to debug  
const R = '\uFFFD';

// Count before
const before = (c.match(/\uFFFD/g) || []).length;
console.log('Replacement chars before:', before);

// Use regex replace for each context  —  [\uFFFD]+ catches 1 or more broken chars

// Subtitle: "l'allemand ? le" 
c = c.replace(/l'allemand \uFFFD+ le/, "l'allemand \u2013 le");

// XP: "gagnés ? Niveau"
c = c.replace(/gagn\u00e9s \uFFFD+ Niveau/, 'gagn\u00e9s \u00b7 Niveau');

// Mission: "accéder ? des"
c = c.replace(/acc\u00e9der \uFFFD+ des/, 'acc\u00e9der \u00e0 des');

// Mission pillar 3 icon (still ??)
c = c.replace(/icon: '[\uFFFD]+', title: 'Opportunit/, "icon: '🌍', title: 'Opportunit");

// Mission pillar 1 icon (still ??)
c = c.replace(/icon: '[\uFFFD]+', title: 'Accessibilit/, "icon: '🌐', title: 'Accessibilit");

// Mission pillar 3 title: "Opportunités Réelles"
c = c.replace(/Opportunit\uFFFD+s R\uFFFD+elles/g, 'Opportunit\u00e9s R\u00e9elles');

// Mission pillar 3 desc: "résidence permanente ? chaque"
c = c.replace(/r\uFFFD+sidence permanente \uFFFD+ chaque/, 'r\u00e9sidence permanente \u2013 chaque');

// Step 01: "débloquent"
c = c.replace(/sup\u00e9rieurs se d\uFFFD+bloquent/, 'sup\u00e9rieurs se d\u00e9bloquent');

// Feature Prononciation icon
c = c.replace(/icon="[\uFFFD]+" title="Prononciation/, 'icon="🔊" title="Prononciation');

// Feature XP icon (single ?)
c = c.replace(/icon="[\uFFFD]+" title="Syst/, 'icon="⭐" title="Syst');

// Feature desc: "grâce ? la synthèse vocale intégrée"
c = c.replace(/gr\u00e2ce \uFFFD+ la synth\uFFFD+se vocale int\uFFFD+gr\uFFFD+e/,
  'gr\u00e2ce \u00e0 la synth\u00e8se vocale int\u00e9gr\u00e9e');

// Feature desc: "expérience ? chaque"
c = c.replace(/l'exp\uFFFD+rience \uFFFD+ chaque exercice\. D\uFFFD+bloquez/,
  "l'exp\u00e9rience \u00e0 chaque exercice. D\u00e9verrouillez");

// "Accessibilité Totale"
c = c.replace(/Accessibilit\uFFFD+ Totale/g, 'Accessibilit\u00e9 Totale');

// Catch all remaining ? in French words based on context
// "Fonctionnalités"
c = c.replace(/Fonctionnalit\uFFFD+s/g, 'Fonctionnalit\u00e9s');
// "Simple. Structurée"
c = c.replace(/Structur\uFFFD+\./g,  'Structur\u00e9e.');
// "étapes"
c = c.replace(/Trois \uFFFD+tapes/g,   'Trois \u00e9tapes');
// "zéro ? l'autonomie"
c = c.replace(/z\uFFFD+ro \uFFFD+ l'autonomie/g, 'z\u00e9ro \u00e0 l\u2019autonomie');
// "d'écriture"
c = c.replace(/d'\uFFFD+criture/g,    "d'\u00e9criture");
// "vocabulaire ? tout"
c = c.replace(/vocabulaire \uFFFD+ tout/g, 'vocabulaire \u2013 tout');
// "DeutschLearn ? A1 ? ?bung"
c = c.replace(/DeutschLearn \uFFFD+ A1 \uFFFD+ \uFFFD+bung/g, 'DeutschLearn \u00b7 A1 \u00b7 \u00dcbung');
// "dit-on ? bonjour ?"
c = c.replace(/dit-on \uFFFD+ bonjour \uFFFD+/g, 'dit-on \u00ab\u00a0bonjour\u00a0\u00bb');
// "bien plus ? structurées"
c = c.replace(/plus \uFFFD+ structur\uFFFD+es/g, 'plus \u2013 structur\u00e9es');
// "matching ? 5 types"
c = c.replace(/matching \uFFFD+ 5 types/g, 'matching \u2013 5 types');
// "Allemagne ? informations"
c = c.replace(/Allemagne \uFFFD+ informations/g, 'Allemagne \u2013 informations');
// quote "différente"
c = c.replace(/diff\uFFFD+rente/g, 'diff\u00e9rente');
// "Federico ? Adapt"
c = c.replace(/\uFFFD+ Federico Fellini \uFFFD+/g, '\u2014 Federico Fellini \u2014');
// "Comment ça"  
c = c.replace(/Comment \uFFFD+a marche/g, 'Comment \u00e7a marche');

// Any remaining single ? in front of space and words — context-based bulk sweep
// "? des" → "à des"
c = c.replace(/\uFFFD des /g, '\u00e0 des ');
// "? la " → "à la"
c = c.replace(/\uFFFD la /g, '\u00e0 la ');
// "? l'" → "à l'"
c = c.replace(/\uFFFD l'/g, "\u00e0 l'");
// "? chaque" → "à chaque" or "– chaque" - use dash when after a noun phrase
// already handled above
// strip any leftover ??→🎯 for mission badge just in case
c = c.replace(/[\uFFFD]{2} Notre Mission/, '🎯 Notre Mission');
// Feature ? for star/arrow
c = c.replace(/niveaux [\uFFFD]+/, 'niveaux \u2192');

// Double word fix
c = c.replace('apprenants apprenants pour', 'apprenants pour');
c = c.replace('sp\u00e9cifique aux apprenants pour', 'pour les apprenants');

// Check
const after = (c.match(/\uFFFD/g) || []).length;
console.log('Replacement chars after:', after);
if (after > 0) {
  c.split('\n').forEach((l, i) => {
    if (l.includes('\uFFFD')) console.log(`  L${i+1}: ${l.trim().slice(0,120)}`);
  });
}

fs.writeFileSync('src/pages/Home.jsx', c);
console.log('Done.');
