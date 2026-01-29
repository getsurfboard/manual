---
sidebar_position: 0
---

# Overview

:::tip
Surfboard follows [Surge](https://nssurge.com/)'s profile format.

Surge's profile documentation can be viewed [here](https://manual.nssurge.com/).
:::

```ini
#!MANAGED-CONFIG http://test.com/surfboard.conf interval=60 strict=true # subscribe profile url and auto update config
[General]
# Specify dns server used by application
dns-server = system, 8.8.8.8, 8.8.4.4, 9.9.9.9:9953

# Specify doh server used by application, support batch query through multiple servers
doh-server = https://9.9.9.9/dns-query, https://1.1.1.1/dns-query

# Specify route rule and domain rule, matching traffic will not be redirected or rejected.
skip-proxy = 127.0.0.1, 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, 100.64.0.0/10, localhost, *.local, www.baidu.com //444

# Test url used by url-test and manually node speed test. Redirect proxy will use this url.
proxy-test-url = http://www.gstatic.com/generate_204

# Test url used by url-test and manually node speed test. Direct proxy will use this url.
internet-test-url = http://www.gstatic.cn/generate_204

# Timeout for all connectivity tests
test-timeout = 5

# Matched domains won't get fake ip dns response
always-real-ip = *.srv.nintendo.net, *.stun.playstation.net, xbox.*.microsoft.com, *.xboxlive.com

# Establish an http proxy server on your device and provide proxy service at specified ip
http-listen = 0.0.0.0:1234

# Establish a socks5 proxy server on your device and provide proxy service at specified ip
socks5-listen = 127.0.0.1:1235

# If proxy does not support udp relay, use DIRECT or REJECT instead
udp-policy-not-supported-behaviour = DIRECT

[Host]
# Maps 'abc.com' to '1.2.3.4'
abc.com = 1.2.3.4

# Maps any domain ending with '.dev' to '6.7.8.9'
*.dev = 6.7.8.9

# Aliases 'bar.com' dns query result to 'foo.com'
foo.com = bar.com

# Assigns '8.8.8.8' as dns server for 'bar.com'
bar.com = server:8.8.8.8

[Proxy]
# Built-in policy
On = direct
Off = reject

# http proxy
ProxyHTTP = http, 1.2.3.4, 443, username, password

# https proxy
ProxyHTTPS = https, 1.2.3.4, 443, username, password, skip-cert-verify=true, sni=www.google.com

# socks5 proxy
ProxySOCKS5 = socks5, 1.2.3.4, 443, username, password, udp-relay=false

# socks5 over tls proxy
ProxySOCKS5TLS = socks5-tls, 1.2.3.4, 443, username, password, skip-cert-verify=true, sni=www.google.com

# shadowsocks proxy, simple-obfs supported
ProxySS = ss, 1.2.3.4, 8000, encrypt-method=chacha20-ietf-poly1305, password=abcd1234, udp-relay=false, obfs=http, obfs-host=www.google.com, obfs-uri=/

# vmess proxy, tls and websocket supported, pure tcp is not supported
ProxyVMess = vmess, 1.2.3.4, 8000, username=0233d11c-15a4-47d3-ade3-48ffca0ce119, udp-relay=false, ws=true, tls=true, ws-path=/v2, ws-headers=X-Header-1:value|X-Header-2:value, skip-cert-verify=true, sni=www.google.com, vmess-aead=true

# trojan proxy, trojan grpc is not supported
ProxyTrojan = trojan, 192.168.20.6, 443, password=password1, udp-relay=false, skip-cert-verify=true, sni=www.google.com

# wireguard proxy
ProxyWireguard = wireguard, section-name = HomeServer

[WireGuard HomeServer]
private-key = sDEZLACT3zgNCS0CyClgcBC2eYROqYrwLT4wdtAJj3s=
self-ip = 10.0.2.2
dns-server = 8.8.8.8
mtu = 1280
peer = (public-key = fWO8XS9/nwUQcqnkfBpKeqIqbzclQ6EKP20Pgvzwclg=, allowed-ips = 0.0.0.0/0, endpoint = 192.168.20.6:51820, keepalive = 30)

[Proxy Group]
# A proxy group where the selected proxy can be changed manually
SelectGroup = select, ProxyHTTP, ProxyHTTPS, DIRECT, REJECT

# A proxy group where the selected proxy is decided automatically based on url test results
AutoTestGroup = url-test, ProxySOCKS5, ProxySOCKS5TLS, url=http://www.gstatic.com/generate_204, interval=600, tolerance=100, timeout=5, hidden=true

# A proxy group with an external proxies list url
ExternalGroup = select, policy-path=https://test.com/nodes.txt, policy-regex-filter=HK-.*
AutoExternalGroup = url-test, policy-path=https://test.com/nodes.txt

# A proxy group which contains all proxies under the [Proxy] section
AllProxies = select, include-all-proxies = true

# A proxy group which contains all proxies from other groups by name
IncludeOtherGroup = select, include-other-group = "SelectGroup, ExternalGroup", policy-regex-filter=Proxy.*

# A proxy group whose selection is chosen randomly
LoadBalanceGroup = load-balance, ProxyHTTP, ProxyHTTPS

# A proxy group just like url-test but follows 'first come first served' rule
FallbackGroup = fallback, ProxySOCKS5, ProxySOCKS5TLS, url=http://www.gstatic.com/generate_204, interval=600, timeout=5

[Rule]
# Domain exact match 'www.apple.com' will be redirected to proxy named 'ProxyHTTP' in [Proxy] section
DOMAIN,www.apple.com,ProxyHTTP

# Domain exact match 'www.google.com' will be redirected to proxy group named 'SelectGroup' in [Proxy Group] section
DOMAIN,www.google.com,SelectGroup

# Domain ending with 'apple.com' will be redirected to 'Proxy', DNS query of this domain will trigger in the remote proxy
DOMAIN-SUFFIX,apple.com,Proxy,force-remote-dns

# Domain containing 'google' keyword will be redirected to 'Proxy', a fake ip will be returned in DNS query
DOMAIN-KEYWORD,google,Proxy,enhanced-mode

# Destination ip matching route '192.168.0.0/16' will be sent directly
IP-CIDR,192.168.0.0/16,DIRECT

# Destination ip located in United States will be rejected
GEOIP,US,REJECT

# Traffic sent by application whose package name is 'com.android.vending' will be sent to 'Proxy'
PROCESS-NAME,com.android.vending,Proxy  # android package name
PROCESS-NAME,*google*,Proxy             # android package name wildcard rule

# Traffic matching external rules defined in 'https://ruleset.com/cn' will be sent to 'ProxyVMess'
RULE-SET,https://ruleset.com/cn,ProxyVMess

# Traffic matching external domain rules defined in 'https://domainset.com/ad' will be rejected
DOMAIN-SET,https://domainset.com/ad,REJECT

# Traffic sent using wifi whose ssid name is 'CMCC' will be rejected
SUBNET,SSID:CMCC,REJECT

# Traffic sent using wifi whose bssid is 'F4-98-A0-73-3A-5B' will be sent directly
SUBNET,BSSID:F4-98-A0-73-3A-5B,DIRECT

# Traffic sent through a router whose ip is '192.168.1.1' will be sent directly
SUBNET,ROUTER:192.168.1.1,DIRECT

# Traffic sent using wifi will be sent directly
SUBNET,TYPE:WIFI,DIRECT

# Traffic sent using wired network will be sent directly
SUBNET,TYPE:WIRED,DIRECT

# Traffic sent using mobile network will be sent through 'SelectGroup'
SUBNET,TYPE:CELLULAR,SelectGroup

# Traffic sent using mobile network whose MCC is 100 and MNC is 200, will be sent directly
SUBNET,MCCMNC:100-200,DIRECT

# Reject quic, fallback to tls
PROTOCOL,QUIC,REJECT

# Traffic matching no rules above will be sent to 'ProxyTrojan'
FINAL,ProxyTrojan

[Panel]
PanelA = title="Panel Title", content="Panel Content\nSecondLine", style=info
```

You can read on for detailed definitions of different sections.
