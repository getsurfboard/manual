const fs = require('fs');
const path = require('path');

const filesToVerify = [
  'docs/profile-format/proxy/external-proxy/anytls.md',
  'i18n/zh-Hans/docusaurus-plugin-content-docs/current/profile-format/proxy/external-proxy/anytls.md'
];

const mandatorySections = [
  '# AnyTLS',
  '## Format',
  '## Parameters',
  '## Example'
];

function verify() {
  console.log('Verifying anytls documentation...');
  let hasError = false;

  for (const file of filesToVerify) {
    if (!fs.existsSync(file)) {
      console.error(`FAIL: ${file} does not exist.`);
      hasError = true;
      continue;
    }

    const content = fs.readFileSync(file, 'utf8');
    for (const section of mandatorySections) {
      if (!content.includes(section)) {
        console.error(`FAIL: ${file} is missing mandatory section: ${section}`);
        hasError = true;
      }
    }
  }

  if (hasError) {
    process.exit(1);
  }

  console.log('PASS: anytls documentation verified.');
}

verify();
