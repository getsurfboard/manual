---
sidebar_position: 0
---

# Overview

This page provides a comprehensive overview of the Surfboard profile format. Surfboard's configuration system is designed for flexibility and power, allowing users to define sophisticated proxy rules and network behaviors.

:::tip
Surfboard follows [Surge](https://nssurge.com/)'s profile format.

Surge's profile documentation can be viewed [here](https://manual.nssurge.com/).
:::

The following example demonstrates a complete profile structure, covering the primary sections: `[General]`, `[Host]`, `[Proxy]`, `[Proxy Group]`, `[Rule]`, and `[Panel]`.

```ini
#!MANAGED-CONFIG http://test.com/surfboard.conf interval=60 strict=true # Remote configuration subscription with auto-update interval in minutes

[General]
# DNS server configuration. 'system' uses the device's default DNS.
dns-server = system, 8.8.8.8, 8.8.4.4, 9.9.9.9:9953

# DNS over HTTPS (DoH) servers for encrypted DNS queries.
doh-server = https://9.9.9.9/dns-query, https://1.1.1.1/dns-query

# List of domains or IP ranges that bypass the proxy.
skip-proxy = 127.0.0.1, 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, 100.64.0.0/10, localhost, *.local, www.example.com

# URL used to test latency for proxy connections.
proxy-test-url = http://www.gstatic.com/generate_204

# URL used to test latency for direct connections.
internet-test-url = http://www.gstatic.cn/generate_204

# Timeout in seconds for connectivity tests.
test-timeout = 5

# Domains that should always resolve to their real IP, bypassing fake IP mechanisms.
always-real-ip = *.srv.nintendo.net, *.stun.playstation.net, xbox.*.microsoft.com, *.xboxlive.com

# Internal HTTP proxy server address and port.
http-listen = 0.0.0.0:1234

# Internal SOCKS5 proxy server address and port.
socks5-listen = 127.0.0.1:1235

# Behavior when a proxy does not support UDP relay (DIRECT or REJECT).
udp-policy-not-supported-behaviour = DIRECT

[Host]
# Static IP mapping for specific domains.
abc.com = 1.2.3.4

# Wildcard domain mapping.
*.dev = 6.7.8.9

# DNS alias (CNAME) mapping.
foo.com = bar.com

# Custom DNS server for a specific domain.
bar.com = server:8.8.8.8

[Proxy]
# Built-in policies.
On = direct
Off = reject

# HTTP proxy configuration.
ProxyHTTP = http, 1.2.3.4, 443, username, password

# HTTPS proxy with TLS settings.
ProxyHTTPS = https, 1.2.3.4, 443, username, password, skip-cert-verify=true, sni=www.google.com

# SOCKS5 proxy configuration.
ProxySOCKS5 = socks5, 1.2.3.4, 443, username, password, udp-relay=false

# SOCKS5 over TLS for enhanced security.
ProxySOCKS5TLS = socks5-tls, 1.2.3.4, 443, username, password, skip-cert-verify=true, sni=www.google.com

# Shadowsocks proxy with optional obfuscation.
ProxySS = ss, 1.2.3.4, 8000, encrypt-method=chacha20-ietf-poly1305, password=abcd1234, udp-relay=false, obfs=http, obfs-host=www.google.com, obfs-uri=/

# VMess proxy for V2Ray protocols.
ProxyVMess = vmess, 1.2.3.4, 8000, username=0233d11c-15a4-47d3-ade3-48ffca0ce119, udp-relay=false, ws=true, tls=true, ws-path=/v2, ws-headers=X-Header-1:value|X-Header-2:value, skip-cert-verify=true, sni=www.google.com, vmess-aead=true

# Trojan proxy configuration.
ProxyTrojan = trojan, 192.168.20.6, 443, password=password1, udp-relay=false, skip-cert-verify=true, sni=www.google.com

# AnyTLS proxy configuration.
ProxyAnyTLS = anytls, 1.2.3.4, 443, password, skip-cert-verify=true, sni=abc.com, reuse=false

# Hysteria2 proxy configuration.
ProxyHysteria2 = hysteria2, 1.2.3.4, 443, password=pwd, download-bandwidth=100, port-hopping="1234;5000-6000", port-hopping-interval=30, skip-cert-verify=true, sni=example.com, udp-relay=true

# WireGuard VPN integration.
ProxyWireguard = wireguard, section-name = HomeServer

[WireGuard HomeServer]
# Specific WireGuard interface and peer configuration.
private-key = sDEZLACT3zgNCS0CyClgcBC2eYROqYrwLT4wdtAJj3s=
self-ip = 10.0.2.2
dns-server = 8.8.8.8
mtu = 1280
peer = (public-key = fWO8XS9/nwUQcqnkfBpKeqIqbzclQ6EKP20Pgvzwclg=, allowed-ips = 0.0.0.0/0, endpoint = 192.168.20.6:51820, keepalive = 30)

[Proxy Group]
# Manual selection group.
SelectGroup = select, ProxyHTTP, ProxyHTTPS, DIRECT, REJECT

# Automatic latency-based selection.
AutoTestGroup = url-test, ProxySOCKS5, ProxySOCKS5TLS, url=http://www.gstatic.com/generate_204, interval=600, tolerance=100, timeout=5, hidden=true

# Group utilizing an external policy list.
ExternalGroup = select, policy-path=https://example.com/nodes.txt, policy-regex-filter=HK-.*

# Group that includes all defined proxies.
AllProxies = select, include-all-proxies = true

# Load balancing group for distributing traffic.
LoadBalanceGroup = load-balance, ProxyHTTP, ProxyHTTPS

# Fallback group: switches to next proxy if current fails.
FallbackGroup = fallback, ProxySOCKS5, ProxySOCKS5TLS, url=http://www.gstatic.com/generate_204, interval=600, timeout=5

[Rule]
# Direct domain matching.
DOMAIN,www.apple.com,ProxyHTTP

# Domain suffix matching (covers all subdomains).
DOMAIN-SUFFIX,apple.com,Proxy,force-remote-dns

# Domain keyword matching.
DOMAIN-KEYWORD,google,Proxy,enhanced-mode

# IP range matching using CIDR notation.
IP-CIDR,192.168.0.0/16,DIRECT

# Geolocation-based matching (e.g., ISO country code).
GEOIP,US,REJECT

# Application-based matching by process/package name.
PROCESS-NAME,com.android.vending,Proxy

# Rule matching traffic against an external rule set.
RULE-SET,https://example.com/ruleset.conf,ProxyVMess

# SSID/BSSID based rules for specific networks.
SUBNET,TYPE:WIFI,DIRECT

# Protocol-specific rules.
PROTOCOL,QUIC,REJECT

# Default rule for traffic matching no other rules.
FINAL,ProxyTrojan

[Panel]
# Custom UI panel for displaying information or status.
PanelA = title="Status Panel", content="System Online\nAll services operational", style=info
```

You can read on for detailed definitions of different sections.
```

You can read on for detailed definitions of different sections.
