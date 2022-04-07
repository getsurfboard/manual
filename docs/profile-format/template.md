---
sidebar_position: 0
---

# Template

:::tip
Surfboard follow [Surge](https://nssurge.com/)'s profile format

Surge's profile documentation can be viewed [here](https://manual.nssurge.com/)
:::

```ini
#!MANAGED-CONFIG http://test.com/surfboard.conf interval=60 strict=true
[General]
dns-server = system, 8.8.8.8, 8.8.4.4, 9.9.9.9:9953
skip-proxy = 127.0.0.1, 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, 100.64.0.0/10, localhost, *.local, www.baidu.com //444
proxy-test-url = http://www.gstatic.com/generate_204
always-real-ip = *.srv.nintendo.net, *.stun.playstation.net, xbox.*.microsoft.com, *.xboxlive.com
http-listen = 0.0.0.0:1234
socks5-listen = 127.0.0.1:1235

[Host]
abc.com = 1.2.3.4
*.dev = 6.7.8.9
foo.com = bar.com
bar.com = server:8.8.8.8

[Proxy]
# build in policy
On = direct
Off = reject

// supported proxies
ProxyHTTP = http, 1.2.3.4, 443, username, password
ProxyHTTPS = https, 1.2.3.4, 443, username, password, skip-cert-verify=true, sni=www.google.com
ProxySOCKS5 = socks5, 1.2.3.4, 443, username, password, udp-relay=false
ProxySOCKS5TLS = socks5-tls, 1.2.3.4, 443, username, password, skip-cert-verify=true, sni=www.google.com
ProxySS = ss, 1.2.3.4, 8000, encrypt-method=chacha20-ietf-poly1305, password=abcd1234, udp-relay=false, obfs=http, obfs-host=www.google.com, obfs-uri=/
ProxyVMess = vmess, 1.2.3.4, 8000, username=0233d11c-15a4-47d3-ade3-48ffca0ce119, udp-relay=false, ws=true, tls=true, ws-path=/v2, ws-headers=X-Header-1:value|X-Header-2:value, skip-cert-verify=true, sni=www.google.com, vmess-aead=true
ProxyTrojan = trojan, 192.168.20.6, 443, password=password1, udp-relay=false, skip-cert-verify=true, sni=www.google.com

[Proxy Group]
SelectGroup = select, ProxyHTTP, ProxyHTTPS, DIRECT, REJECT
AutoTestGroup = url-test, ProxySOCKS5, ProxySOCKS5TLS, url=http://www.gstatic.com/generate_204, interval=600, tolerance=100, timeout=5, hidden=true
ExternalGroup = select, policy-path=https://test.com/nodes.txt, policy-regex-filter=HK-.*
AutoExternalGroup = url-test, policy-path=https://test.com/nodes.txt

[Rule]
DOMAIN,www.apple.com,Proxy
DOMAIN-SUFFIX,apple.com,Proxy,force-remote-dns
DOMAIN-KEYWORD,google,Proxy,enhanced-mode
IP-CIDR,192.168.0.0/16,DIRECT
GEOIP,US,DIRECT
PROCESS-NAME,com.android.vending,Proxy  # android package name
RULE-SET,https://ruleset.com/cn,DIRECT
FINAL,Proxy
```

You can read on for detailed definitions of the different sections