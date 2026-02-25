const fs = require('fs');
const path = require('path');

const docsToVerify = [
  'docs/profile-format/rule/logical.md',
  'i18n/zh-Hans/docusaurus-plugin-content-docs/current/profile-format/rule/logical.md'
];

const mandatorySections = [
  ['# Logical Rules', '# 逻辑规则'],
  ['## AND'],
  ['## OR'],
  ['## NOT'],
  ['## Example', '## 示例'],
  ['https://manual.nssurge.com/rule/logical.html']
];

const indexFiles = [
  'docs/profile-format/rule/index.md',
  'i18n/zh-Hans/docusaurus-plugin-content-docs/current/profile-format/rule/index.md'
];

function verify() {
  console.log('Verifying logical documentation...');
  let hasError = false;

  for (const file of docsToVerify) {
    if (!fs.existsSync(file)) {
      console.error(`FAIL: ${file} does not exist.`);
      hasError = true;
      continue;
    }

    const content = fs.readFileSync(file, 'utf8');
    for (const sections of mandatorySections) {
      const found = sections.some(section => content.includes(section));
      if (!found) {
        console.error(`FAIL: ${file} is missing mandatory section or link: ${sections.join(' OR ')}`);
        hasError = true;
      }
    }
  }

  for (const file of indexFiles) {
    if (!fs.existsSync(file)) {
      console.error(`FAIL: ${file} does not exist.`);
      hasError = true;
      continue;
    }

    const content = fs.readFileSync(file, 'utf8');
    if (!content.toLowerCase().includes('logical') && !content.includes('逻辑规则')) {
      console.error(`FAIL: ${file} is missing reference to logical rules.`);
      hasError = true;
    }
  }

  if (hasError) {
    process.exit(1);
  }

  console.log('PASS: logical documentation verified.');
}

verify();
