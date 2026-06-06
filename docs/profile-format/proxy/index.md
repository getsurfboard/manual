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
- [Snell](/docs/profile-format/proxy/external-proxy/snell)

## Common Parameters

The following parameter is supported by all proxy types:

| Name | Value | Mandatory | Note |
|------|-------|-----------|------|
| underlying-proxy | - | false | Use a proxy or proxy group to connect another proxy, aka proxy chain. The value can be another proxy's name or a proxy group's name (the currently selected proxy in that group will be used). |
| block-quic | auto, on, off | false | Controls whether QUIC (HTTP/3) traffic should be blocked. When blocked, clients fall back to HTTPS/TCP. `auto` (default) blocks QUIC if the proxy does not support UDP relay, and allows it if UDP relay is enabled. `on` forces blocking, `off` disables it. |
