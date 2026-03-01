# Specification: add_i18n_support_20260210

## Overview
Implement internationalization (i18n) support for the Surfboard-NG documentation website following the [official Docusaurus i18n tutorial](https://docusaurus.io/docs/i18n/tutorial), including automated translation of documentation and blog content into Simplified Chinese (`zh-Hans`).

## Functional Requirements
- **Locale Configuration:** Update `docusaurus.config.js` to define `en` (default) and `zh-Hans` locales.
- **Navigation Integration:** Add a `localeDropdown` type item to the `navbar` in `docusaurus.config.js`.
- **UI String Translation:** Use `yarn docusaurus write-translations --locale zh-Hans` to generate JSON translation files.
- **Automated Content Translation:**
    - Use AI/LLM capabilities to translate all `.md` and `.mdx` files from `docs/` to `i18n/zh-Hans/docusaurus-plugin-content-docs/current/`.
    - Use AI/LLM capabilities to translate all blog posts from `blog/` to `i18n/zh-Hans/docusaurus-plugin-content-blog/`.
    - **Technical Term Preservation:** Ensure that technical terms, keywords, and specific configuration parameters (e.g., `Shadowsocks`, `VMess`, `Trojan`, `HTTP`, `SOCKS5`, `routing rules`, etc.) remain in their original English form.
    - Maintain the original frontmatter, file names, and directory structure during translation.
- **Localized Routing:** Verify that Docusaurus correctly serves localized content at `/zh-Hans/`.

## Non-Functional Requirements
- **Build Stability:** `yarn build` must successfully generate both the English and Chinese versions of the site.
- **Translation Quality:** Automated translations should be technically accurate and maintain the formal tone of the project.
- **Technical Accuracy:** Directory structure must strictly follow Docusaurus i18n conventions.

## Acceptance Criteria
- [ ] `docusaurus.config.js` is correctly configured for `en` and `zh-Hans`.
- [ ] The language switcher dropdown is functional in the `navbar`.
- [ ] `yarn build` completes without errors for both locales.
- [ ] Initial automated translations for all `docs/` and `blog/` content are present in the `i18n/zh-Hans/` directories.
- [ ] Technical terms remain untranslated in the Chinese version.
- [ ] Localized versions of the documentation and blog are accessible at their respective `/zh-Hans/` URLs.

## Out of Scope
- Implementation of third-party SaaS translation platforms (e.g., Crowdin, Transifex).
- Ongoing maintenance of translations (this track covers the initial automated pass).