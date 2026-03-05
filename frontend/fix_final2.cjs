const fs = require('fs');
let c = fs.readFileSync('src/pages/Home.jsx', 'utf8');
const F = '\uFFFD';

// In the JSX source, characters like é are stored as LITERAL \u00e9 (6 chars)
// So matching must use escaped backslash: \\u00e9 not \u00e9

// L348: subtitle "l'allemand \uFFFD le\u00e7ons"
// Raw file has: l\'allemand [FFFD] le\u00e7ons
c = c.replace("l\\'allemand " + F + " le\\u00e7ons", "l\\'allemand \\u2013 le\\u00e7ons");

// L373: "gagn\u00e9s \uFFFD Niveau"
// Raw file has: gagn\u00e9s [FFFD] Niveau
c = c.replace("gagn\\u00e9s " + F + " Niveau", "gagn\\u00e9s \\u00b7 Niveau");

// L439: icon still ?? and "Opportunit\u00e9s R\uFFFDelles"
// Raw: icon: '??' (two FFFD)
c = c.replace("icon: '" + F + F + "', title: 'Opportunit\\u00e9s", "icon: '🌍', title: 'Opportunit\\u00e9s");
c = c.replace("icon: '" + F + "', title: 'Opportunit\\u00e9s", "icon: '🌍', title: 'Opportunit\\u00e9s");
// Raw: Opportunit\u00e9s R[FFFD]elles
c = c.replace("Opportunit\\u00e9s R" + F + "elles", "Opportunit\\u00e9s R\\u00e9elles");

// L579: "l'exp\u00e9rience \uFFFD chaque"
c = c.replace("l\\'exp\\u00e9rience " + F + " chaque", "l\\'exp\\u00e9rience \\u00e0 chaque");
// also icon="?" (single FFFD)
c = c.replace('icon="' + F + '" title="Syst', 'icon="\u2b50" title="Syst');

// Final count
const remaining = (c.match(/\uFFFD/g) || []).length;
console.log('Remaining replacement chars:', remaining);
if (remaining > 0) {
  c.split('\n').forEach((l, i) => {
    if (l.includes('\uFFFD')) console.log(`  L${i+1}: ${l.trim().slice(0, 120)}`);
  });
}

fs.writeFileSync('src/pages/Home.jsx', c);
console.log('Done.');
