const fs = require('fs');
const path = require('path');

function verifyTranslations() {
  console.log('Verifying UI translations...');
  
  const navbar = JSON.parse(fs.readFileSync('i18n/zh-Hans/docusaurus-theme-classic/navbar.json', 'utf8'));
  if (navbar.title.message !== 'Surfboard 使用手册') {
    console.error('FAIL: navbar title not translated');
    process.exit(1);
  }
  
  const docs = JSON.parse(fs.readFileSync('i18n/zh-Hans/docusaurus-plugin-content-docs/current.json', 'utf8'));
  if (docs['sidebar.tutorialSidebar.category.Agreement'].message !== '相关协议') {
    console.error('FAIL: docs sidebar category not translated');
    process.exit(1);
  }
  
  console.log('PASS: Essential UI translations verified.');
}

verifyTranslations();