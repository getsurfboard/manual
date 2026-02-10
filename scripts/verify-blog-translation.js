const fs = require('fs');
const path = require('path');

function verifyBlog() {
  console.log('Verifying blog translation...');
  const filePath = 'i18n/zh-Hans/docusaurus-plugin-content-blog/2022-04-06-why-develop-surfboard.mdx';
  
  if (!fs.existsSync(filePath)) {
    console.error(`FAIL: blog post is missing in i18n`);
    process.exit(1);
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  if (!/[\u4e00-\u9fa5]/.test(content)) {
    console.error(`FAIL: blog post does not seem to contain Chinese characters`);
    process.exit(1);
  }
  
  console.log('PASS: Blog translation verified.');
}

verifyBlog();