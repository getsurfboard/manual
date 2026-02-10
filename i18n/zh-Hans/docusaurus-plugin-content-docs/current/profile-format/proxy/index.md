# 代理

代理定义指定了可以用作网络流量目的地的服务。

匹配 [[规则 (Rule)]](/docs/profile-format/rule) 部分定义的规则的流量将被重定向到指定的代理。

代理也可以包含在 [[策略组 (Proxy Group)]](/docs/profile-format/proxygroup) 定义中。

目前支持以下代理协议：

- [HTTP/HTTPS](/docs/profile-format/proxy/external-proxy/http)
- [SOCKS5/SOCKS5-TLS](/docs/profile-format/proxy/external-proxy/socks5)
- [Shadowsocks](/docs/profile-format/proxy/external-proxy/shadowsocks)
- [VMESS](/docs/profile-format/proxy/external-proxy/vmess)
- [Trojan](/docs/profile-format/proxy/external-proxy/trojan)
- [Wireguard](/docs/profile-format/proxy/external-proxy/wireguard)
- [Hysteria2](/docs/profile-format/proxy/external-proxy/hysteria2)