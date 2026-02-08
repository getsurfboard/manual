---
sidebar_position: 5
---

# WireGuard

WireGuard is an extremely simple yet fast and modern VPN that utilizes state-of-the-art cryptography. Surfboard provides native integration for WireGuard tunnels.

## Protocol Standard

- https://en.wikipedia.org/wiki/WireGuard

## Example

Unlike other proxies defined in a single line, WireGuard proxies use a standalone configuration section for details, linked by the `section-name` in the proxy definition.

```ini
[Proxy]
# Definition that references a standalone WireGuard configuration section
wireguard-home = wireguard, section-name = HomeServer

[WireGuard HomeServer]
# Specific interface and peer settings for the WireGuard tunnel
private-key = sDEZLACT3zgNCS0CyClgcBC2eYROqYrwLT4wdtAJj3s=
self-ip = 10.0.2.2
dns-server = 8.8.8.8
mtu = 1280
peer = (public-key = fWO8XS9/nwUQcqnkfBpKeqIqbzclQ6EKP20Pgvzwclg=, allowed-ips = 0.0.0.0/0, endpoint = 192.168.20.6:51820)
```

## Format

```ini
[Proxy]
{proxy name} = wireguard, section-name = {section name}

[WireGuard {section name}]
private-key = {private key}
self-ip = {self ip}
dns-server = {dns server ip}
mtu = {mtu size}
peer = (public-key = {public key}, allowed-ips = {allowed ip routes}, endpoint = {endpoint address}, keepalive = {keepalive seconds})
```

## Parameters

| Name              | Value                     | Mandatory | Note                                      |
|-------------------|---------------------------|-----------|-------------------------------------------|
| proxy name        | -                         | true      |                                           |
| section name      | -                         | true      | Supports domain and IP formats.              |
| private key       | base64 encoded format     | true      |                                           |
| self ip           | IPv4 format               | true      |                                           |
| dns server ip     | IPv4 format               | true      | Supports multiple values separated by commas. |
| mtu size          | integer greater than zero | true      |                                           |
| public key        | base64 encoded format     | true      |                                           |
| allowed ip routes | IPv4 route format         | true      |                                           |
| endpoint address  | IPv4 IP:PORT format       | true      |                                           |
| keepalive seconds | integer greater than zero | false     | 0 means disable keepalive.                 |