# `[Proxy]`

Proxy is a proxy service definition which can be used as network traffic's destination.

Traffic which match rules defined in [[Rule]](/) section will be redirected to specified proxy.

Proxy can be also included in [[Proxy Group]](/docs/profile-format/proxygroup) definition.

Currently proxy protocol below is supported:

- [HTTP/HTTPS](/docs/profile-format/proxy/external-proxy/http)
- [SOCKS5/SOCKS5-TLS](/docs/profile-format/proxy/external-proxy/socks5)
- [Shadowsocks](/docs/profile-format/proxy/external-proxy/shadowsocks)
- [VMESS](/docs/profile-format/proxy/external-proxy/vmess)
- [Trojan](/docs/profile-format/proxy/external-proxy/trojan)