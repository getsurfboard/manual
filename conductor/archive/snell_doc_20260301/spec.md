# Specification: Add Snell Proxy Configuration Document

## Overview
Add a new documentation page for the Snell proxy type in the Surfboard-NG documentation. This includes detailed configuration fields, descriptions, and examples in both English and Simplified Chinese.

## Functional Requirements
1. **New File Creation:**
   - Create `docs/profile-format/proxy/external-proxy/snell.md`.
   - Create `i18n/zh-Hans/docusaurus-plugin-content-docs/current/profile-format/proxy/external-proxy/snell.md`.
2. **Documentation Content:**
   - **Basic Fields:** `server`, `port`, `psk`, `version`.
   - **Version Support:** Specifically mention that currently only **versions 1, 2, and 3** are supported.
   - **OBFS Options:** `obfs`, `obfs-host`, `obfs-uri`.
   - **Advanced Fields:** `udp-relay`.
3. **Examples:**
   - Include a complete Snell proxy configuration snippet.
4. **Consistency:**
   - Ensure the style matches existing proxy documentation (e.g., `shadowsocks.md`).
5. **Multi-language Support:**
   - Ensure the `zh-Hans` version is an accurate translation of the English document.

## Non-Functional Requirements
1. **Validation:** The documentation must build successfully using `yarn build`.
2. **Tone:** Formal and technical documentation tone.

## Acceptance Criteria
- [ ] `snell.md` exists in `docs/profile-format/proxy/external-proxy/`.
- [ ] `snell.md` exists in `i18n/zh-Hans/docusaurus-plugin-content-docs/current/profile-format/proxy/external-proxy/`.
- [ ] All requested fields (`server`, `port`, `psk`, `version`, `obfs`, `obfs-host`, `obfs-uri`, `udp-relay`) are documented.
- [ ] Example configuration is included.
- [ ] `yarn build` succeeds.

## Out of Scope
- Documenting other proxy types not mentioned in the request.
- Changes to the application code itself.
- `reuse-connection` field (as requested for removal).
