const fs = require('fs');
const path = require('path');

const batch3Files = [
  'agreement/terms_and_conditions.md',
  'agreement/privacy_policy.md',
  'profile-example/local_server.md',
  'profile-example/global.md',
  'profile-example/gfw.md',
  'profile-example/adblock.md'
];

function verifyBatch3() {
  console.log('Verifying docs batch 3 translation...');
  const baseDest = 'i18n/zh-Hans/docusaurus-plugin-content-docs/current';
  
  for (const file of batch3Files) {
    const filePath = path.join(baseDest, file);
    if (!fs.existsSync(filePath)) {
      console.error(`FAIL: ${file} is missing in i18n`);
      process.exit(1);
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    if (!/[\u4e00-\u9fa5]/.test(content)) {
      console.error(`FAIL: ${file} does not seem to contain Chinese characters`);
      process.exit(1);
    }
  }
  
  console.log('PASS: Docs batch 3 translation verified.');
}

verifyBatch3();