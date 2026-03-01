# Specification: Add anytls Proxy Documentation

## Overview
This track involves adding technical documentation for the `anytls` proxy type to the Surfboard-NG manual. The documentation will cover the configuration format, parameters, and provide usage examples in both English and Simplified Chinese.

## Functional Requirements

### 1. New Documentation Files
- Create the English documentation at: `docs/profile-format/proxy/external-proxy/anytls.md`
- Create the Simplified Chinese documentation at: `i18n/zh-Hans/docusaurus-plugin-content-docs/current/profile-format/proxy/external-proxy/anytls.md`

### 2. Content Specifications
The documentation must include:
- **Description:** A brief overview of the `anytls` proxy type.
- **Format:** The standard comma-separated configuration line used in Surfboard profiles.
- **Parameters:**
    - `name`: Identifier for the proxy.
    - `server`: Server address (IP or hostname).
    - `port`: Server port.
    - `password`: Authentication password.
    - `skip-cert-verify` (Optional): `true` or `false`.
    - `sni` (Optional): Server Name Indication.
    - `reuse` (Optional): `true` or `false`. **Default is `true`.**
- **Examples:**
    - Full configuration: `ProxyAnyTLS = anytls, 1.2.3.4, 443, password, skip-cert-verify=true, sni=abc.com, reuse=false`
    - Minimal configuration: `ProxyAnyTLSMin = anytls, 1.2.3.4, 443, password`

### 3. Localization
- Ensure the Chinese version accurately translates the technical descriptions while keeping the configuration parameters and examples in their literal form.

## Non-Functional Requirements
- **Consistency:** Maintain the formal and technical tone of the existing documentation.
- **Formatting:** Use MDX and follow Docusaurus conventions.

## Acceptance Criteria
- [ ] `docs/profile-format/proxy/external-proxy/anytls.md` exists with correct English content.
- [ ] `i18n/zh-Hans/docusaurus-plugin-content-docs/current/profile-format/proxy/external-proxy/anytls.md` exists with correct Chinese content.
- [ ] The new files are correctly indexed or visible in the sidebar (Docusaurus auto-generated sidebar should handle this).
- [ ] `yarn build` completes successfully without errors.

## Out of Scope
- Implementing `anytls` proxy logic in the Surfboard application itself.
- Updating documentation for other proxy types.
