const fs = require('fs');
const path = require('path');

function verifyBatch2() {
  console.log('Verifying docs batch 2 translation...');
  const baseSource = 'docs/profile-format';
  const baseDest = 'i18n/zh-Hans/docusaurus-plugin-content-docs/current/profile-format';
  
  const getFiles = (dir) => {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
      file = path.join(dir, file);
      const stat = fs.statSync(file);
      if (stat && stat.isDirectory()) {
        results = results.concat(getFiles(file));
      } else if (file.endsWith('.md')) {
        results.push(file);
      }
    });
    return results;
  };
  
  const sourceFiles = getFiles(baseSource);
  
  for (const src of sourceFiles) {
    const relPath = path.relative(baseSource, src);
    const dest = path.join(baseDest, relPath);
    
    if (!fs.existsSync(dest)) {
      console.error(`FAIL: ${relPath} is missing in i18n`);
      process.exit(1);
    }
    
    const content = fs.readFileSync(dest, 'utf8');
    if (!/[\u4e00-\u9fa5]/.test(content)) {
      console.error(`FAIL: ${dest} does not seem to contain Chinese characters`);
      process.exit(1);
    }
  }
  
  console.log('PASS: Docs batch 2 translation verified.');
}

verifyBatch2();