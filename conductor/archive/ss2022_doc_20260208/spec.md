# Specification: Update Shadowsocks 2022 Protocol Documentation

## Overview
This track aims to update the Surfboard-NG manual to include support for the new Shadowsocks 2022 (AEAD-2022) encryption methods: `2022-blake3-aes-128-gcm` and `2022-blake3-aes-256-gcm`.

## Functional Requirements
- **Update Encrypt Methods:** Modify `docs/profile-format/proxy/external-proxy/shadowsocks.md` to include `2022-blake3-aes-128-gcm` and `2022-blake3-aes-256-gcm` in the list of supported `encrypt method` values.
- **Document Password Requirements:** Explicitly state that for Shadowsocks 2022 methods, the `password` field must be a base64-encoded string corresponding to the required key size (16 bytes for AES-128, 32 bytes for AES-256).
- **Update Examples:** Provide clear configuration examples demonstrating the use of the new 2022 methods with base64-encoded passwords.

## Non-Functional Requirements
- **Adherence to Guidelines:** Ensure the updated documentation follows the project's content structure, code example, and tone guidelines.
- **Build Stability:** Verify the documentation integrity by running `yarn build`.

## Acceptance Criteria
- `docs/profile-format/proxy/external-proxy/shadowsocks.md` contains the new encryption methods.
- The documentation clearly explains the base64-encoded password requirement for these methods.
- Valid configuration examples are provided.
- `yarn build` completes successfully.

## Out of Scope
- Documenting other Shadowsocks 2022 variants not specified in the request.
- Implementing code changes in the Surfboard-NG application itself.
