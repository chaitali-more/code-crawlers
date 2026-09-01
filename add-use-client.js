const fs = require('fs');
const path = require('path');

const dirs = [
  path.join(__dirname, 'src', 'components'),
  path.join(__dirname, 'src', 'pages'),
  path.join(__dirname, 'src', 'Poweradmin')
];

function processDir(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      processDir(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.jsx') || entry.name.endsWith('.js'))) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (!content.trim().startsWith("'use client'") && !content.trim().startsWith('"use client"')) {
        content = `'use client';\n` + content;
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Added use client to:', entry.name);
      }
    }
  }
}

dirs.forEach(processDir);
console.log('Finished adding use client directives.');
