const fs = require('fs');
let c = fs.readFileSync('src/pages/Home.jsx', 'utf8');
const F = '\uFFFD';

// L348: "l'allem and \uFFFD le\u00e7ons" → "... – leçons"
c = c.replace("l'allemand " + F + " le\u00e7ons", "l'allemand \u2013 le\u00e7ons");

// L373: "gagnés \uFFFD Niveau"
c = c.replace("gagn\u00e9s " + F + " Niveau", "gagn\u00e9s \u00b7 Niveau");

// L439: "Opportunités R\uFFFDelles" (the é in Réelles is broken, not Opportunités)
c = c.replace("Opportunit\u00e9s R" + F + "elles", "Opportunit\u00e9s R\u00e9elles");
// Also fix the icon which is still ??
c = c.replace("icon: '" + F + F + "', title: 'Opportunit\u00e9s", "icon: '🌍', title: 'Opportunit\u00e9s");
c = c.replace("icon: '" + F + "', title: 'Opportunit\u00e9s", "icon: '🌍', title: 'Opportunit\u00e9s");

// L443: "permanente \uFFFD chaque" – the em dash between "permanente" and "chaque"
c = c.replace("permanente " + F + " chaque", "permanente \u2014 chaque");

// L500: "se d\uFFFDbloquent" → "se débloquent"
c = c.replace("se d" + F + "bloquent", "se d\u00e9bloquent");

// L579: "l'expérience \uFFFD chaque" and "exercice. D\uFFFDbloquez"
c = c.replace("l'exp\u00e9rience " + F + " chaque", "l'exp\u00e9rience \u00e0 chaque");
c = c.replace("exercice. D" + F + "bloquez", "exercice. D\u00e9verrouillez");

// Also fix icon="?" for XP feature card (single \uFFFD)
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
