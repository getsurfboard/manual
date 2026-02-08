# `[Proxy]`

A Proxy definition specifies a service that can be used as a destination for network traffic.

Traffic matching rules defined in the [[Rule]](/docs/profile-format/rule) section will be redirected to the specified proxy.

Proxies can also be included in [[Proxy Group]](/docs/profile-format/proxygroup) definitions.

The following proxy protocols are currently supported:

- [HTTP/HTTPS](/docs/profile-format/proxy/external-proxy/http)
- [SOCKS5/SOCKS5-TLS](/docs/profile-format/proxy/external-proxy/socks5)
- [Shadowsocks](/docs/profile-format/proxy/external-proxy/shadowsocks)
- [VMESS](/docs/profile-format/proxy/external-proxy/vmess)
- [Trojan](/docs/profile-format/proxy/external-proxy/trojan)
- [Wireguard](/docs/profile-format/proxy/external-proxy/wireguard)
- [Hysteria2](/docs/profile-format/proxy/external-proxy/hysteria2)
