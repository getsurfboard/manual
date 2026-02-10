const fs = require('fs');
const path = require('path');

function verifyStructure() {
  console.log('Verifying docs i18n structure...');
  const sourceDirs = [
    'profile-format/host',
    'profile-format/panel',
    'profile-format/proxy/external-proxy',
    'profile-format/proxy/built-in-proxy',
    'profile-format/general',
    'profile-format/rule',
    'profile-format/proxygroup',
    'agreement',
    'profile-example'
  ];
  
  const baseDest = 'i18n/zh-Hans/docusaurus-plugin-content-docs/current';
  
  for (const dir of sourceDirs) {
    const destDir = path.join(baseDest, dir);
    if (!fs.existsSync(destDir) || !fs.statSync(destDir).isDirectory()) {
      console.error(`FAIL: ${destDir} is missing or not a directory`);
      process.exit(1);
    }
  }
  
  console.log('PASS: Docs i18n structure is correct.');
}

verifyStructure();