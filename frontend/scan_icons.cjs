const fs = require('fs');
const path = require('path');

function walk(dir) {
  let files = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) files = files.concat(walk(full));
    else if (f.endsWith('.jsx') || f.endsWith('.js')) files.push(full);
  }
  return files;
}

const all = walk('src');
const bad = [];

for (const f of all) {
  const c = fs.readFileSync(f, 'utf8');
  const lines = c.split('\n');
  lines.forEach((l, i) => {
    if (l.includes('\uFFFD') || l.includes('\u{fffd}')) {
      bad.push({ file: f, line: i + 1, text: l.trim().slice(0, 120) });
    }
    // broken emoji rendered as ??: two or more consecutive ? not inside a URL/comment
    const stripped = l.replace(/https?:\/\//g, '');
    if (/[?]{2,}/.test(stripped) && !stripped.trimStart().startsWith('//')) {
      bad.push({ file: f, line: i + 1, text: '[??] ' + l.trim().slice(0, 120) });
    }
  });
}

const byFile = {};
for (const b of bad) {
  if (!byFile[b.file]) byFile[b.file] = [];
  byFile[b.file].push(`  L${b.line}: ${b.text}`);
}

for (const [f, lines] of Object.entries(byFile)) {
  console.log('\n=== ' + f.replace('D:\\german-learning-platform\\frontend\\', ''));
  for (const l of lines) console.log(l);
}
console.log('\nTotal issues:', bad.length);
