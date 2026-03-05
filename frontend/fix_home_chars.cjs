const fs = require('fs');
let c = fs.readFileSync('src/pages/Home.jsx', 'utf8');
const R = '\uFFFD'; // replacement character that appears as ?

// ─── EMOJIS (broken surrogates showing as ??) ────────────────────────────

// CTAs
c = c.replace(`${R}${R} {t?.home?.cta1 || 'Commencer maintenant'}`, `🚀 {t?.home?.cta1 || 'Commencer maintenant'}`);
c = c.replace(`${R}${R} {t?.home?.cta2 || 'Explorer le vocabulaire'}`, `📖 {t?.home?.cta2 || 'Explorer le vocabulaire'}`);

// XP display star
c = c.replace(`{t?.home?.subtitleDe || 'Die kostenlose Lernplattform f\u00fcr alle.'}\n          </p>`,
              `{t?.home?.subtitleDe || 'Die kostenlose Lernplattform f\u00fcr alle.'}\n          </p>`);

// ⭐ +10 XP (single ? broken star)
c = c.replace(`style={{ color: '#f59e0b' }}>${R} +10 XP`, `style={{ color: '#f59e0b' }}>⭐ +10 XP`);

// ✓ checkmark in quiz answer
c = c.replace(`{opt.ok && '${R}'}`, `{opt.ok && '✓'}`);

// Mission badge
c = c.replace(`${R}${R} Notre Mission`, `🎯 Notre Mission`);

// Mission pillar icons
c = c.replace(`icon: '${R}${R}', title: 'Accessibilit`, `icon: '🌐', title: 'Accessibilit`);
c = c.replace(`icon: '${R}${R}', title: 'Opportunit`, `icon: '🌍', title: 'Opportunit`);

// Big quote decoration (single broken char showing as ?)
c = c.replace(`style={{ color: \`\${accentPurple}28\`, lineHeight: 1 }}>${R}</div>`,
              `style={{ color: \`\${accentPurple}28\`, lineHeight: 1 }}>❝</div>`);

// Feature card icons
c = c.replace(`icon="${R}${R}" title="Le`, `icon="📖" title="Le`);
c = c.replace(`icon="${R}${R}" title="Prononciation`, `icon="🔊" title="Prononciation`);
c = c.replace(`icon="${R}" title="Syst`, `icon="⭐" title="Syst`);
c = c.replace(`icon="${R}${R}" title="Exercices`, `icon="🧩" title="Exercices`);
c = c.replace(`icon="${R}${R}" title="Suivi`, `icon="📊" title="Suivi`);
c = c.replace(`icon="${R}${R}" title="Opportunit`, `icon="🌍" title="Opportunit`);

// Features "Voir tous les niveaux ?" arrow
c = c.replace(`Voir tous les niveaux ${R}`, `Voir tous les niveaux →`);

// ─── FLAG EMOJIS (showing as ????) ──────────────────────────────────────
// "Opportunités ????" – broken DE flag
c = c.replace(`Opportunit\u00e9s ${R}${R}${R}${R}`, `Opportunit\u00e9s 🇩🇪`);
c = c.replace(`Opportunit\u00e9s ${R}${R}`, `Opportunit\u00e9s 🇩🇪`);

// Comments: floating tiles ? left / ? right
c = c.replace(`tiles ${R} left`, 'tiles — left');
c = c.replace(`tiles ${R} right`, 'tiles — right');

// ─── FRENCH TEXT (replacement chars for accented letters / punctuation) ─

// Subtitle
c = c.replace(`l'allemand ${R} le\u00e7ons`, "l'allemand \u2013 le\u00e7ons");
// Fix "Apprenants" leftover from prev script (should be just "apprendre")
c = c.replace("pour Apprenants qui apprennent l'allemand", "pour apprendre l'allemand");

// Mission paragraph: "accéder ? des" → "accéder à des"
c = c.replace(`acc\u00e9der ${R} des opportunit`, `acc\u00e9der \u00e0 des opportunit`);

// Mission pillar 1 title: "Accessibilit? Totale"
c = c.replace(`'Accessibilit${R} Totale'`, `'Accessibilit\u00e9 Totale'`);

// Mission pillar 3 title: "Opportunit?s R?elles"
c = c.replace(`'Opportunit${R}s R${R}elles'`, `'Opportunit\u00e9s R\u00e9elles'`);
c = c.replace(`Opportunit${R}s R${R}elles`, `Opportunit\u00e9s R\u00e9elles`);

// Mission pillar 3 desc: "r?sidence permanente ? chaque le?on"
c = c.replace(`r${R}sidence permanente ${R} chaque le`, `r\u00e9sidence permanente \u2013 chaque le`);

// Big quote: "diff?rente, c'est une vision diff?rente"
c = c.replace(`diff${R}rente, c'est une vision diff${R}rente`, `diff\u00e9rente, c\u2019est une vision diff\u00e9rente`);

// Quote attribution: "? Federico Fellini ?"
c = c.replace(`${R} Federico Fellini ${R} Adapt`, `\u2014 Federico Fellini \u2014 Adapt`);

// HOW IT WORKS section
c = c.replace(`Comment ${R}a marche`, `Comment \u00e7a marche`);
c = c.replace(`Simple. Structur${R}. Efficace.`, `Simple. Structur\u00e9e. Efficace.`);
c = c.replace(`Trois ${R}tapes claires pour passer de z${R}ro ${R} l'autonomie`, `Trois \u00e9tapes claires pour passer de z\u00e9ro \u00e0 l'autonomie`);

// Steps descriptions
c = c.replace(`sup${R}rieurs se d${R}bloquent`, `sup\u00e9rieurs se d\u00e9bloquent`);
c = c.replace(`exercices d'${R}criture et jeux`, `exercices d'\u00e9criture et jeux`);
c = c.replace(`vocabulaire ${R} tout en une`, `vocabulaire \u2013 tout en une`);

// Mock UI panel
c = c.replace(`DeutschLearn ${R} A1 ${R} ${R}bung`, `DeutschLearn \u00b7 A1 \u00b7 \u00dcbung`);
c = c.replace(`Comment dit-on ${R} bonjour ${R} ?`, `Comment dit-on \u00ab\u00a0bonjour\u00a0\u00bb\u00a0?`);

// FEATURES section
c = c.replace(`Fonctionnalit${R}s`, `Fonctionnalit\u00e9s`);
c = c.replace(`apprenants apprenants pour`, `apprenants pour`); // double word fix
c = c.replace(`contenu sp\u00e9cifique aux apprenants apprenants`, `un contenu structur\u00e9`);

// Feature card descs
c = c.replace(`bien plus ${R} structur${R}es par niveau CEFR`, `bien plus \u2013 structur\u00e9es par niveau CEFR`);
c = c.replace(`gr\u00e2ce ${R} la synth${R}se vocale int${R}gr${R}e`, `gr\u00e2ce \u00e0 la synth\u00e8se vocale int\u00e9gr\u00e9e`);
c = c.replace(`l'exp${R}rience ${R} chaque exercice. D${R}bloquez`, `l'exp\u00e9rience \u00e0 chaque exercice. D\u00e9verrouillez`);
c = c.replace(`matching ${R} 5 types`, `matching \u2013 5 types`);
c = c.replace(`Allemagne ${R} informations`, `Allemagne \u2013 informations`);

// XP progress display
c = c.replace(`gagn\u00e9s ${R} Niveau`, `gagn\u00e9s \u00b7 Niveau`);

// ─── FINAL CHECK ─────────────────────────────────────────────────────────
const remaining = [];
const lines = c.split('\n');
lines.forEach((l, i) => {
  if (l.includes('\uFFFD')) remaining.push(`L${i+1}: ${l.trim().slice(0,100)}`);
});
if (remaining.length) {
  console.log('Still has replacement chars:');
  remaining.forEach(r => console.log(' ', r));
} else {
  console.log('✓ No more replacement chars');
}

fs.writeFileSync('src/pages/Home.jsx', c);
console.log('Done. Lines:', lines.length);
