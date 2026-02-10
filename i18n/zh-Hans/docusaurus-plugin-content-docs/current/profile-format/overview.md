---
sidebar_position: 0
---

# 配置文件概览

本页面提供了 Surfboard 配置文件格式的全面概览。Surfboard 的配置系统旨在提供灵活性和强大的功能，允许用户定义复杂的代理规则和网络行为。

:::tip 提示
Surfboard 遵循 [Surge](https://nssurge.com/) 的配置文件格式。

Surge 的配置文件文档可以在 [此处](https://manual.nssurge.com/) 查看。
:::

以下示例展示了一个完整的配置文件结构，涵盖了主要部分：`[General]`、`[Host]`、`[Proxy]`、`[Proxy Group]`、`[Rule]` 和 `[Panel]`。

```ini
#!MANAGED-CONFIG http://test.com/surfboard.conf interval=60 strict=true # 远程配置订阅，自动更新间隔（分钟）

[General]
# DNS 服务器配置。'system' 使用设备的默认 DNS。
dns-server = system, 8.8.8.8, 8.8.4.4, 9.9.9.9:9953

# 用于加密 DNS 查询的 DNS over HTTPS (DoH) 服务器。
doh-server = https://9.9.9.9/dns-query, https://1.1.1.1/dns-query

# 绕过代理的域名或 IP 范围列表。
skip-proxy = 127.0.0.1, 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, 100.64.0.0/10, localhost, *.local, www.example.com

# 用于测试代理连接延迟的 URL。
proxy-test-url = http://www.gstatic.com/generate_204

# 用于测试直连延迟的 URL。
internet-test-url = http://www.gstatic.cn/generate_204

# 连接测试的超时时间（秒）。
test-timeout = 5

# 始终解析为真实 IP 的域名，绕过 Fake IP 机制。
always-real-ip = *.srv.nintendo.net, *.stun.playstation.net, xbox.*.microsoft.com, *.xboxlive.com

# 内部 HTTP 代理服务器地址和端口。
http-listen = 0.0.0.0:1234

# 内部 SOCKS5 代理服务器地址和端口。
socks5-listen = 127.0.0.1:1235

# 当代理不支持 UDP 转发时的行为（DIRECT 或 REJECT）。
udp-policy-not-supported-behaviour = DIRECT

[Host]
# 特定域名的静态 IP 映射。
abc.com = 1.2.3.4

# 通配符域名映射。
*.dev = 6.7.8.9

# DNS 别名 (CNAME) 映射。
foo.com = bar.com

# 特定域名的自定义 DNS 服务器。
bar.com = server:8.8.8.8

[Proxy]
# 内置策略。
On = direct
Off = reject

# HTTP 代理配置。
ProxyHTTP = http, 1.2.3.4, 443, username, password

# 带有 TLS 设置的 HTTPS 代理。
ProxyHTTPS = https, 1.2.3.4, 443, username, password, skip-cert-verify=true, sni=www.google.com

# SOCKS5 代理配置。
ProxySOCKS5 = socks5, 1.2.3.4, 443, username, password, udp-relay=false

# 为了增强安全性，通过 TLS 传输的 SOCKS5。
ProxySOCKS5TLS = socks5-tls, 1.2.3.4, 443, username, password, skip-cert-verify=true, sni=www.google.com

# 带有可选混淆的 Shadowsocks 代理。
ProxySS = ss, 1.2.3.4, 8000, encrypt-method=chacha20-ietf-poly1305, password=abcd1234, udp-relay=false, obfs=http, obfs-host=www.google.com, obfs-uri=/

# V2Ray 协议的 VMess 代理。
ProxyVMess = vmess, 1.2.3.4, 8000, username=0233d11c-15a4-47d3-ade3-48ffca0ce119, udp-relay=false, ws=true, tls=true, ws-path=/v2, ws-headers=X-Header-1:value|X-Header-2:value, skip-cert-verify=true, sni=www.google.com, vmess-aead=true

# Trojan 代理配置。
ProxyTrojan = trojan, 192.168.20.6, 443, password=password1, udp-relay=false, skip-cert-verify=true, sni=www.google.com

# WireGuard VPN 集成。
ProxyWireguard = wireguard, section-name = HomeServer

[WireGuard HomeServer]
# 特定的 WireGuard 接口和对等端配置。
private-key = sDEZLACT3zgNCS0CyClgcBC2eYROqYrwLT4wdtAJj3s=
self-ip = 10.0.2.2
dns-server = 8.8.8.8
mtu = 1280
peer = (public-key = fWO8XS9/nwUQcqnkfBpKeqIqbzclQ6EKP20Pgvzwclg=, allowed-ips = 0.0.0.0/0, endpoint = 192.168.20.6:51820, keepalive = 30)

[Proxy Group]
# 手动选择组。
SelectGroup = select, ProxyHTTP, ProxyHTTPS, DIRECT, REJECT

# 基于延迟的自动选择组。
AutoTestGroup = url-test, ProxySOCKS5, ProxySOCKS5TLS, url=http://www.gstatic.com/generate_204, interval=600, tolerance=100, timeout=5, hidden=true

# 使用外部策略列表的组。
ExternalGroup = select, policy-path=https://example.com/nodes.txt, policy-regex-filter=HK-.*

# 包含所有已定义代理的组。
AllProxies = select, include-all-proxies = true

# 用于分流流量的负载均衡组。
LoadBalanceGroup = load-balance, ProxyHTTP, ProxyHTTPS

# 故障转移组：如果当前代理失败，则切换到下一个。
FallbackGroup = fallback, ProxySOCKS5, ProxySOCKS5TLS, url=http://www.gstatic.com/generate_204, interval=600, timeout=5

[Rule]
# 直接域名匹配。
DOMAIN,www.apple.com,ProxyHTTP

# 域名后缀匹配（涵盖所有子域名）。
DOMAIN-SUFFIX,apple.com,Proxy,force-remote-dns

# 域名关键词匹配。
DOMAIN-KEYWORD,google,Proxy,enhanced-mode

# 使用 CIDR 表示法的 IP 范围匹配。
IP-CIDR,192.168.0.0/16,DIRECT

# 基于地理位置的匹配（例如 ISO 国家代码）。
GEOIP,US,REJECT

# 基于进程/包名的应用程序匹配。
PROCESS-NAME,com.android.vending,Proxy

# 匹配外部规则集的规则。
RULE-SET,https://example.com/ruleset.conf,ProxyVMess

# 基于特定网络的 SSID/BSSID 规则。
SUBNET,TYPE:WIFI,DIRECT

# 特定协议规则。
PROTOCOL,QUIC,REJECT

# 默认规则，用于匹配不到任何其他规则的流量。
FINAL,ProxyTrojan

[Panel]
# 自定义 UI 面板，用于显示信息或状态。
PanelA = title="状态面板", content="系统在线
所有服务运行正常", style=info
```

你可以继续阅读以了解不同部分的详细定义。