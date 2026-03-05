const fs = require('fs');
let c = fs.readFileSync('src/pages/Home.jsx', 'utf8');
const F = '\uFFFD';

// The only remaining FFFD: l'expérience [F] chaque  (no backslash before apostrophe in JSX double-quoted attr)
c = c.replace("l'exp\\u00e9rience " + F + " chaque", "l'exp\\u00e9rience \\u00e0 chaque");
// Also catch D[F]bloquez just in case it wasn't fixed
c = c.replace('D' + F + 'bloquez', 'D\\u00e9bloquez');

const remaining = (c.match(/\uFFFD/g) || []).length;
console.log('FFFD remaining:', remaining);
if (remaining > 0) {
  c.split('\n').forEach((l, i) => {
    if (l.includes('\uFFFD')) console.log('  L'+(i+1)+':', JSON.stringify(l.trim().slice(0, 130)));
  });
}
fs.writeFileSync('src/pages/Home.jsx', c);
console.log('Done.');
