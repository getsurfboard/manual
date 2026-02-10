const config = require('../docusaurus.config.js');

function verifyI18nConfig() {
  console.log('Verifying i18n configuration...');

  // Check i18n object
  if (!config.i18n) {
    console.error('FAIL: i18n object is missing in docusaurus.config.js');
    process.exit(1);
  }

  if (config.i18n.defaultLocale !== 'en') {
    console.error(`FAIL: defaultLocale is ${config.i18n.defaultLocale}, expected 'en'`);
    process.exit(1);
  }

  const locales = config.i18n.locales;
  if (!locales.includes('en') || !locales.includes('zh-Hans')) {
    console.error(`FAIL: locales ${JSON.stringify(locales)} does not include both 'en' and 'zh-Hans'`);
    process.exit(1);
  }

  // Check navbar
  const navbar = config.themeConfig.navbar;
  const hasLocaleDropdown = navbar.items.some(item => item.type === 'localeDropdown');

  if (!hasLocaleDropdown) {
    console.error('FAIL: Navbar does not contain an item with type "localeDropdown"');
    process.exit(1);
  }

  console.log('PASS: i18n configuration is correct.');
}

verifyI18nConfig();