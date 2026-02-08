---
sidebar_position: 6
---

# Hysteria2

Hysteria2 is a high-performance proxy based on the QUIC protocol, designed for challenging network environments. It focuses on maximizing throughput and minimizing latency even on congested or high-loss links.

## Protocol Standard

- https://hysteria.network/

## Example

```ini
# Hysteria2 proxy configuration with optional performance and security settings
ProxyHysteria2 = hysteria2, 1.2.3.4, 443, password=pwd, download-bandwidth=100, port-hopping="1234;5000-6000", port-hopping-interval=30, skip-cert-verify=true, sni=example.com, udp-relay=true
```

## Format

```ini
{proxy name} = hysteria2, {server}, {port}, password={password}, download-bandwidth={bandwidth}, port-hopping={hopping}, port-hopping-interval={interval}, skip-cert-verify={skip}, sni={sni}, udp-relay={udp}
```

## Parameters

| Name                  | Value          | Mandatory | Note                                                                                                                               |
|-----------------------|----------------|-----------|------------------------------------------------------------------------------------------------------------------------------------|
| proxy name            | -              | true      |                                                                                                                                    |
| server                | -              | true      | Supports domain and IP formats.                                                                                                    |
| port                  | 1 - 65535      | true      |                                                                                                                                    |
| password              | -              | true      | Authentication password.                                                                                                           |
| download-bandwidth    | -              | false     | Maximum download speed in Mbps.                                                                                                    |
| port-hopping          | -              | false     | Port hopping configuration (e.g., `"1234;5000-6000"`).                                                                             |
| port-hopping-interval | -              | false     | Interval for port hopping in seconds (e.g., `30`).                                                                                 |
| skip-cert-verify      | true<br/>false | false     | Default value: false. Set to true if the proxy does not have a valid TLS certificate.                                              |
| sni                   | -              | false     | Definition is unnecessary if the SNI value matches the host value.                                                                 |
| udp-relay             | true<br/>false | false     | Default value: true. Enable or disable UDP relay.                                                                                  |
