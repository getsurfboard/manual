const fs = require('fs');
const path = require('path');

function verifyStructure() {
  console.log('Verifying blog i18n structure...');
  const destDir = 'i18n/zh-Hans/docusaurus-plugin-content-blog';
  
  if (!fs.existsSync(destDir) || !fs.statSync(destDir).isDirectory()) {
    console.error(`FAIL: ${destDir} is missing or not a directory`);
    process.exit(1);
  }
  
  if (!fs.existsSync(path.join(destDir, 'authors.yml'))) {
    console.error(`FAIL: authors.yml is missing in blog i18n`);
    process.exit(1);
  }
  
  console.log('PASS: Blog i18n structure is correct.');
}

verifyStructure();