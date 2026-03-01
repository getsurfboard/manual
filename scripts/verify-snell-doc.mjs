import fs from 'fs';
import path from 'path';

const filesToVerify = [
  'docs/profile-format/proxy/external-proxy/snell.md',
  'i18n/zh-Hans/docusaurus-plugin-content-docs/current/profile-format/proxy/external-proxy/snell.md'
];

const mandatorySections = [
  { en: '# Snell', zh: '# Snell' },
  { en: '## Format', zh: '## 格式' },
  { en: '## Parameters', zh: '## 参数' },
  { en: '## Example', zh: '## 示例' }
];

const mandatoryParameters = [
  { en: 'proxy name', zh: 'proxy name' },
  { en: 'protocol', zh: 'protocol' },
  { en: 'server', zh: 'server' },
  { en: 'port', zh: 'port' },
  { en: 'psk', zh: 'psk' },
  { en: 'version', zh: 'version' },
  { en: 'obfs', zh: 'obfs' },
  { en: 'obfs-host', zh: 'obfs-host' },
  { en: 'obfs-uri', zh: 'obfs-uri' },
  { en: 'udp-relay', zh: 'udp-relay' }
];

function verify() {
  console.log('Verifying snell documentation...');
  let hasError = false;

  for (const file of filesToVerify) {
    if (!fs.existsSync(file)) {
      console.error(`FAIL: ${file} does not exist.`);
      hasError = true;
      continue;
    }

    const isZh = file.includes('zh-Hans');
    const content = fs.readFileSync(file, 'utf8');
    for (const section of mandatorySections) {
      const searchStr = isZh ? section.zh : section.en;
      if (!content.includes(searchStr)) {
        console.error(`FAIL: ${file} is missing mandatory section: ${searchStr}`);
        hasError = true;
      }
    }

    for (const param of mandatoryParameters) {
      const searchStr = isZh ? param.zh : param.en;
      if (!content.includes(searchStr)) {
        console.error(`FAIL: ${file} is missing mandatory parameter: ${searchStr}`);
        hasError = true;
      }
    }
    
    if (!content.includes('version is 3') && !content.includes('版本为 3')) {
        console.error(`FAIL: ${file} is missing version 3 requirement for udp-relay`);
        hasError = true;
    }
    
    if (!content.includes('1, 2, 3') && !content.includes('1, 2, 和 3')) {
        console.error(`FAIL: ${file} is missing version support note (1, 2, 3)`);
        hasError = true;
    }
  }

  if (hasError) {
    process.exit(1);
  }

  console.log('PASS: snell documentation verified.');
}

verify();
