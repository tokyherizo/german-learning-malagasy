const fs = require('fs');
const c = fs.readFileSync('src/pages/Home.jsx', 'utf8');
const lines = c.split('\n');
const F = '\uFFFD';

// Dump 20 chars around each FFFD in the line
function dump(lineNum) {
  const l = lines[lineNum - 1];
  for (let i = 0; i < l.length; i++) {
    if (l.charCodeAt(i) === 0xFFFD) {
      const start = Math.max(0, i - 15);
      const end   = Math.min(l.length, i + 15);
      const ctx = l.slice(start, end);
      // Show as codepoints
      const codes = [...ctx].map(ch => `U+${ch.codePointAt(0).toString(16).toUpperCase().padStart(4,'0')}`).join(' ');
      console.log(`L${lineNum} i=${i}: "${ctx}"`);
      console.log(`codes: ${codes}`);
      console.log(`prev5: "${JSON.stringify(l.slice(i-5, i+5))}"`);
    }
  }
}

dump(348);
dump(373);
dump(439);
dump(579);
