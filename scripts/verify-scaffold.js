const fs = require('fs');
const path = require('path');

const requiredFiles = [
  'i18n/zh-Hans/code.json',
  'i18n/zh-Hans/docusaurus-theme-classic/navbar.json',
  'i18n/zh-Hans/docusaurus-theme-classic/footer.json',
  'i18n/zh-Hans/docusaurus-plugin-content-blog/options.json',
  'i18n/zh-Hans/docusaurus-plugin-content-docs/current.json'
];

function verifyScaffold() {
  console.log('Verifying scaffolded translation files...');
  
  for (const file of requiredFiles) {
    const filePath = path.join(process.cwd(), file);
    if (!fs.existsSync(filePath)) {
      console.error(`FAIL: ${file} is missing`);
      process.exit(1);
    }
    
    try {
      JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (e) {
      console.error(`FAIL: ${file} is not a valid JSON`);
      process.exit(1);
    }
  }
  
  console.log('PASS: All scaffolded files exist and are valid JSON.');
}

verifyScaffold();