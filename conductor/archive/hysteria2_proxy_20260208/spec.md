# Specification: Add Hysteria2 Proxy Documentation

## Overview
This track involves adding a new documentation page for the Hysteria2 proxy protocol to the Surfboard-NG manual. Hysteria2 is a high-performance proxy based on the QUIC protocol, designed for challenging network environments.

## Functional Requirements
- **New Documentation Page:** Create `docs/profile-format/proxy/external-proxy/hysteria2.md`.
- **Protocol Details:** Include a summary of Hysteria2 and a link to its official protocol standard/documentation.
- **Configuration Specification:** Document the following parameters for Hysteria2:
    - **Mandatory:**
        - `server`: Server IP or domain.
        - `port`: Server port.
        - `password`: Authentication password.
    - **Optional:**
        - `download-bandwidth`: Maximum download speed (e.g., `100`).
        - `port-hopping`: Port hopping configuration (e.g., `"1234;5000-6000"`).
        - `port-hopping-interval`: Interval for port hopping in seconds (e.g., `30`).
        - `skip-cert-verify`: Bypass TLS certificate verification (`true`/`false`).
        - `sni`: Server Name Indication for TLS.
        - `udp-relay`: Enable or disable UDP relay (`true`/`false`).
- **Code Example:** Provide a clear, commented code block demonstrating a Hysteria2 configuration.
- **Navigation Update:** Ensure the new page is correctly categorized under External Proxies.

## Non-Functional Requirements
- **Guideline Compliance:** Follow project guidelines: summary at the top, clear headings, descriptive code comments, and relative internal links.
- **Build Stability:** Verification via `yarn build` is mandatory.

## Acceptance Criteria
- `docs/profile-format/proxy/external-proxy/hysteria2.md` exists and is correctly formatted.
- The configuration example matches the provided format: `ProxyHysteria2 = hysteria2, 1.2.3.4, 443, password=pwd, download-bandwidth=100, port-hopping="1234;5000-6000", port-hopping-interval=30, skip-cert-verify=true, sni=example.com, udp-relay=true`.
- All parameters (mandatory and optional) are clearly explained in a table or list.
- `yarn build` completes without errors.
