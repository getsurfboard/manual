const fs = require('fs');
const path = require('path');

const batch1Files = [
  'installation.md',
  'faq.md',
  'bypass.md',
  'changelog.md',
  'deeplink.md',
  'how_to_use_this_app.md',
  'location_permision.md'
];

function verifyBatch1() {
  console.log('Verifying docs batch 1 translation...');
  const baseDest = 'i18n/zh-Hans/docusaurus-plugin-content-docs/current';
  
  for (const file of batch1Files) {
    const filePath = path.join(baseDest, file);
    if (!fs.existsSync(filePath)) {
      console.error(`FAIL: ${file} is missing in i18n`);
      process.exit(1);
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    // Check for some common Chinese characters
    if (!/[\u4e00-\u9fa5]/.test(content)) {
      console.error(`FAIL: ${file} does not seem to contain Chinese characters`);
      process.exit(1);
    }
  }
  
  console.log('PASS: Docs batch 1 translation verified.');
}

verifyBatch1();