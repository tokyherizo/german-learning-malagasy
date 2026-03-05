const fs = require('fs');
let c = fs.readFileSync('src/pages/Home.jsx', 'utf8');
const F = '\uFFFD';

// Show what we're dealing with on L579
const lines = c.split('\n');
const l579 = lines[579 - 1];
console.log('L579:', l579.trim().slice(0, 150));
console.log('FFFD positions on L579:');
for (let i = 0; i < l579.length; i++) {
  if (l579.charCodeAt(i) === 0xFFFD) {
    console.log(`  pos ${i}: prev10="${l579.slice(i-10,i)}" next10="${l579.slice(i+1,i+11)}"`);
  }
}

// Use regex for each
// icon="[one FFFD]" 
c = c.replace(/icon="[\uFFFD]" title="Syst/, 'icon="\u2b50" title="Syst');
// desc errors on the same line: exp?rience ? chaque and D?bloquez
c = c.replace(/exp\\u00e9rience [\uFFFD] chaque/, 'exp\\u00e9rience \\u00e0 chaque');
c = c.replace(/exercice\. D[\uFFFD]bloquez/, 'exercice. D\\u00e9verrouillez');

// L348: subtitle
c = c.replace(/l\\'allemand [\uFFFD] le\\u00e7ons/, "l\\'allemand \\u2013 le\\u00e7ons");

// L373: XP
c = c.replace(/gagn\\u00e9s [\uFFFD] Niveau/, 'gagn\\u00e9s \\u00b7 Niveau');

// L439: title Réelles
c = c.replace(/Opportunit\\u00e9s R[\uFFFD]elles/, 'Opportunit\\u00e9s R\\u00e9elles');
// L439: icon still ??
c = c.replace(/icon: '[\uFFFD]{1,4}', title: 'Opportunit\\u00e9s/, "icon: '🌍', title: 'Opportunit\\u00e9s");

const remaining = (c.match(/\uFFFD/g) || []).length;
console.log('\nRemaining:', remaining);
if (remaining > 0) {
  c.split('\n').forEach((l, i) => {
    if (l.includes('\uFFFD')) console.log(`  L${i+1}: ${l.trim().slice(0, 120)}`);
  });
}

fs.writeFileSync('src/pages/Home.jsx', c);
console.log('Done.');
