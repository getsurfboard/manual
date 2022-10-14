---
sidebar_position: 0
---

# Overview

:::tip
Surfboard follow [Surge](https://nssurge.com/)'s profile format

Surge's profile documentation can be viewed [here](https://manual.nssurge.com/)
:::

```ini
#!MANAGED-CONFIG http://test.com/surfboard.conf interval=60 strict=true # subscribe profile url and auto update config
[General]
# Specify dns server used by application
dns-server = system, 8.8.8.8, 8.8.4.4, 9.9.9.9:9953

# Specify doh server used by application
doh-server = https://9.9.9.9/dns-query

# Specify route rule and domain rule, matching traffic will not be redirected or rejected.
skip-proxy = 127.0.0.1, 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, 100.64.0.0/10, localhost, *.local, www.baidu.com //444

# Test url used by url-test and manually node speed test. Redirect proxy will use this url.
proxy-test-url = http://www.gstatic.com/generate_204

# Test url used by url-test and manually node speed test. Direct proxy will use this url.
internet-test-url = http://www.gstatic.cn/generate_204

# Match domain won't get fake ip dns response
always-real-ip = *.srv.nintendo.net, *.stun.playstation.net, xbox.*.microsoft.com, *.xboxlive.com

# Establish a http proxy server on your device and provide proxy service in specified ip
http-listen = 0.0.0.0:1234

# Establish a socks5 proxy server on your device and provide proxy service in specified ip
socks5-listen = 127.0.0.1:1235

# If proxy not support udp relay, use DIRECT or REJECT instead
udp-policy-not-supported-behaviour = DIRECT

[Host]
# map 'abc.com' to '1.2.3.4'
abc.com = 1.2.3.4

# map any domain end with '.dev' to '6.7.8.9'
*.dev = 6.7.8.9

# alias 'bar.com' dns query result to 'foo.com'
foo.com = bar.com

# assign '8.8.8.8' as dns server for 'bar.com'
bar.com = server:8.8.8.8

[Proxy]
# build in policy
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

[Proxy Group]
# proxy group whose selected proxy can be changed manually
SelectGroup = select, ProxyHTTP, ProxyHTTPS, DIRECT, REJECT

# proxy group whose selected proxy can be decided based on url test result automatically
AutoTestGroup = url-test, ProxySOCKS5, ProxySOCKS5TLS, url=http://www.gstatic.com/generate_204, interval=600, tolerance=100, timeout=5, hidden=true

# proxy group with a external proxies list url
ExternalGroup = select, policy-path=https://test.com/nodes.txt, policy-regex-filter=HK-.*
AutoExternalGroup = url-test, policy-path=https://test.com/nodes.txt

# proxy group which contains all proxy under [Proxy] section
AllProxies = select, include-all-proxies = true

# proxy group whose selection is chosen randomly
LoadBalanceGroup = load-balance, ProxyHTTP, ProxyHTTPS

# proxy group just like url-test but follow 'first come first served' rule
FallbackGroup = fallback, ProxySOCKS5, ProxySOCKS5TLS, url=http://www.gstatic.com/generate_204, interval=600, timeout=5

[Rule]
# domain exact match 'www.apple.com' will be redirected to proxy named 'ProxyHTTP' in [Proxy] section 
DOMAIN,www.apple.com,ProxyHTTP

# domain exact match 'www.google.com' will be redirected to proxy group named 'SelectGroup' in [Proxy Group] section
DOMAIN,www.google.com,SelectGroup

# domain ends with 'apple.com' will be redirected to 'Proxy', DNS query of this domain will triggered in the remote proxy
DOMAIN-SUFFIX,apple.com,Proxy,force-remote-dns

# domain contains 'google' keyword will be redirected to 'Proxy', a fake ip will be returned in DNS query
DOMAIN-KEYWORD,google,Proxy,enhanced-mode

# destination ip match route '192.168.0.0/16' will be sent directly
IP-CIDR,192.168.0.0/16,DIRECT

# destination ip located in United State will be rejected
GEOIP,US,REJECT

# traffic sent by application whose package name is 'com.android.vending' will be sent to 'Proxy'
PROCESS-NAME,com.android.vending,Proxy  # android package name
PROCESS-NAME,*google*,Proxy             # android package name wildcard rule

# traffic match external rules defined in 'https://ruleset.com/cn' will be sent to 'ProxyVMess'
RULE-SET,https://ruleset.com/cn,ProxyVMess

# traffic match external domain rules defined in 'https://domainset.com/ad' will be rejected'
DOMAIN-SET,https://domainset.com/ad,REJECT

# traffic doesn't match rules above will be sent to 'ProxyTrojan'
FINAL,ProxyTrojan

[Panel]
PanelA = title="Panel Title", content="Panel Content\nSecondLine", style=info
```

You can read on for detailed definitions of different sections