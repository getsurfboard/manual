---
侧栏位置：0
---

#概述

**小费
冲浪板跟随[激增](https://nssurge.com/)的配置文件格式

可以查看Surge的配置文件[在这里](https://manual.nssurge.com/)
:::

```INI
#！MANAGED-CONFIG http://test.com/surfboard.conf间隔=60严格=true#订阅配置文件url和自动更新配置
[概述]
#指定应用程序使用的dns服务器
dns-server=系统，8.8.8.8，8.8.4.4，9.9.9:9953

#指定应用程序使用的doh服务器
doh-server=https://9.9.9.9/dns-query

#指定路由规则和域规则，匹配的流量不会被重定向或拒绝。
skip-proxy=127.0.0.1，192.168.0.0/16,10.0.0.0/8，172.16.0.0/12，100.64.0.0/10，localhost，*.local，www.baidu.com//444

#url测试和手动节点速度测试使用的测试url。重定向代理将使用此url。
proxy-test-url=http://www.gstatic.com/generate_204

#url-test和手动节点速度测试使用的test url。直接代理将使用此url。
internet-test-url=http://www.gstatic.cn/generate_204

#所有连通性测试超时
测试超时=5

#匹配域不会得到虚假的ip dns响应
always-real-ip=*.srv.nintendo.net，*.stun.playstation.net，xbox.*.microsoft.com，*.xboxlive.com

#在您的设备上建立http代理服务器，并在指定的ip中提供代理服务
http-listen=0.0.0.0:1234

#在您的设备上建立socks5代理服务器，并在指定的ip中提供代理服务
socks5-listen=127.0.0.1:1235

#如果代理不支持udp中继，请改用直接或拒绝
udp-policy-not-supported-behavior=DIRECT

[主机]
#将“abc.com”映射到“1.2.3.4”
ABC.com=1.2.3.4

#将任何以“.dev”结尾的域映射到“6.7.8.9”
*.dev=6.7.8.9

#alias'bar.com'dns查询结果到'foo.com'
foo.com=bar.com

#assign'8.8.8.8'为'bar.com'的dns伺服器
bar.com=服务器：8.8.8.8

[代理]
#内置策略
on=直接
off=拒绝

#http代理
ProxyHTTP=http，1.2.3.4，443，用户名，密码

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
peer = (public-key = fWO8XS9/nwUQcqnkfBpKeqIqbzclQ6EKP20Pgvzwclg=, allowed-ips = 0.0.0.0/0, endpoint = 192.168.20.6:51820)

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

# proxy group which contains all proxy from other group by name
IncludeOtherGroup = select, include-other-group = "SelectGroup, ExternalGroup", policy-regex-filter=Proxy.*

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

# traffic sent using wifi whose ssid name is 'CMCC' will be rejected
SUBNET,SSID:CMCC,REJECT

# traffic sent using wifi whose bssid is 'F4-98-A0-73-3A-5B' will be sent directly
SUBNET,BSSID:F4-98-A0-73-3A-5B,DIRECT

# traffic sent through a router whose ip is '192.168.1.1' will be sent directly
SUBNET,ROUTER:192.168.1.1,DIRECT

# traffic sent using wifi will be sent directly
SUBNET,TYPE:WIFI,DIRECT

# traffic sent using wired network will be sent directly
SUBNET,TYPE:WIRED,DIRECT

# traffic sent using mobile network will be sent through 'SelectGroup'
SUBNET,TYPE:CELLULAR,SelectGroup

# traffic sent using mobile network whose MCC is 100 and MNC is 200, will be sent directly
SUBNET,MCCMNC:100-200,DIRECT

# traffic doesn't match rules above will be sent to 'ProxyTrojan'
FINAL,ProxyTrojan

[Panel]
PanelA = title="Panel Title", content="Panel Content\nSecondLine", style=info
```

You can read on for detailed definitions of different sections
