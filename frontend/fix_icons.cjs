const fs = require('fs');
let c = fs.readFileSync('src/pages/Home.jsx', 'utf8');
const F = '\uFFFD';

// ── Fix remaining U+FFFD chars ──────────────────────────────────
// L326 subtitle: l'allemand [F] leçons
c = c.replace("l\\'allemand " + F + " le\\u00e7ons", "l\\'allemand \\u2013 le\\u00e7ons");
// L351 XP badge: gagnés [F] Niveau
c = c.replace("gagn\\u00e9s " + F + " Niveau", "gagn\\u00e9s \\u00b7 Niveau");
// L394 mission: accéder [F] des
c = c.replace("acc\\u00e9der " + F + " des", "acc\\u00e9der \\u00e0 des");
// L421 pillar: permanente [F] chaque
c = c.replace("permanente " + F + " chaque", "permanente \\u00e0 chaque");
// L478 step: se d[F]bloquent
c = c.replace("se d" + F + "bloquent", "se d\\u00e9bloquent");
// L557 XP card desc: expérience [F] chaque
c = c.replace("l'exp\\u00e9rience " + F + " chaque", "l'exp\\u00e9rience \\u00e0 chaque");
// L557 XP card desc: D[F]bloquez
c = c.replace('D' + F + 'bloquez', 'D\\u00e9bloquez');

// ── Fix literal ? icons ──────────────────────────────────────────
c = c.replace('<span>?</span>', '<span>\u2b50</span>');
c = c.replace('icon="?" title="Syst\\u00e8me', 'icon="\u2b50" title="Syst\\u00e8me');

// ── Original fixes from first run ────────────────────────────────
// ── Literal "??" (two 0x3F) — emoji broken by previous scripts ──

// Hero CTA buttons
c = c.replace(/\?\? \{t\?\.home\?\.cta1/, '🚀 {t?.home?.cta1');
c = c.replace(/\?\? \{t\?\.home\?\.cta2/, '📖 {t?.home?.cta2');

// Mission section badge
c = c.replace(/\?\? Notre Mission/, '🎯 Notre Mission');

// Mission pillars icons
c = c.replace(/icon: '\?\?', title: 'Accessibilité Totale'/, "icon: '🌐', title: 'Accessibilité Totale'");
c = c.replace(/icon: '\?\?', title: 'Opportunit/, "icon: '🌍', title: 'Opportunit");

// Feature cards icons
c = c.replace(/icon="\?\?" title="Le\\u00e7ons/, 'icon="📖" title="Le\\u00e7ons');
c = c.replace(/icon="\?\?" title="Prononciation/, 'icon="🔊" title="Prononciation');
c = c.replace(/icon="\?\?" title="Exercices Vari/, 'icon="🧩" title="Exercices Vari');
c = c.replace(/icon="\?\?" title="Suivi/, 'icon="📊" title="Suivi');
// Opportunités card: icon + title with ????
c = c.replace(/icon="\?\?" title="Opportunit\\u00e9s \?\?\?\?"/, 'icon="🌍" title="Opportunit\\u00e9s 🇩🇪"');
// Fallback if only 3 ?   
c = c.replace(/icon="\?\?" title="Opportunit\\u00e9s \?\?\?"/, 'icon="🌍" title="Opportunit\\u00e9s 🇩🇪"');

// ── Remaining U+FFFD ──

// L417: Réelles (R + FFFD + elles)
c = c.replace('R' + F + 'elles', 'R\\u00e9elles');

// L556: grâce [FFFD] la synthèse  →  grâce \u00e0 la
c = c.replace('gr\\u00e2ce ' + F + ' la synth', 'gr\\u00e2ce \\u00e0 la synth');

// Count remaining
const remaining = (c.match(/\uFFFD/g) || []).length;
const litQQ = (c.match(/(?<![?])\?\?(?![=<])/g) || []).filter(m => m === '??').length;

console.log('FFFD remaining:', remaining);
console.log('Literal ?? (non-JS-operator) remaining check complete');

if (remaining > 0) {
  c.split('\n').forEach((l, i) => {
    if (l.includes('\uFFFD')) console.log('  L'+(i+1)+':', l.trim().slice(0,120));
  });
}

fs.writeFileSync('src/pages/Home.jsx', c);
console.log('Done.');
