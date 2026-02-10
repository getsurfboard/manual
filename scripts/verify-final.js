const { execSync } = require('child_process');

const scripts = [
  'verify-i18n-config.js',
  'verify-scaffold.js',
  'verify-ui-translations.js',
  'verify-docs-structure.js',
  'verify-docs-batch1.js',
  'verify-docs-batch2.js',
  'verify-docs-batch3.js',
  'verify-blog-structure.js',
  'verify-blog-translation.js'
];

function verifyFinal() {
  console.log('Running final verification...');
  
  for (const script of scripts) {
    try {
      console.log(`Running ${script}...`);
      execSync(`node scripts/${script}`, { stdio: 'inherit' });
    } catch (e) {
      console.error(`FAIL: ${script} failed`);
      process.exit(1);
    }
  }
  
  console.log('PASS: All verifications passed.');
}

verifyFinal();