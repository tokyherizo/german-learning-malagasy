const fs = require('fs');
const c = fs.readFileSync('src/pages/Home.jsx', 'utf8');
const lines = c.split('\n');

// Find lines still with weird chars
const suspects = [348, 373, 439, 443, 500, 579];
for (const lineNum of suspects) {
  const l = lines[lineNum - 1];
  if (!l) continue;
  console.log(`\nL${lineNum}: ${l.trim().slice(0, 100)}`);
  // find non-ASCII chars
  for (let i = 0; i < Math.min(l.length, 200); i++) {
    const code = l.charCodeAt(i);
    if (code > 127) {
      console.log(`  pos ${i}: U+${code.toString(16).toUpperCase().padStart(4,'0')} "${l[i]}" (ctx: "${l.slice(Math.max(0,i-5),i+6).replace(/\n/g,'\\n')}")`);
    }
  }
}
