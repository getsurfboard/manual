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
- [Snell](/docs/profile-format/proxy/external-proxy/snell)

## 通用参数

以下参数适用于所有代理类型：

| 名称 | 值 | 是否必填 | 备注 |
|------|-----|----------|------|
| underlying-proxy | - | 否 | 通过一个代理来连接另一个代理，即代理链。值可以是另一个代理名称或策略组名称（将使用该策略组当前选中的代理）。 |
| block-quic | auto, on, off | 否 | 控制是否阻断 QUIC (HTTP/3) 流量。阻断后客户端将回退到 HTTPS/TCP。`auto`（默认）在代理不支持 UDP 转发时阻断，开启 UDP 转发则放行。`on` 强制阻断，`off` 关闭阻断。 |
