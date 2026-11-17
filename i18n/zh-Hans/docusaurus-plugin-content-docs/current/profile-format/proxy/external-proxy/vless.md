---
sidebar_position: 4
---

# VLESS

节点名含有 `=` 或逗号、参数值含有逗号时，使用引号包裹。在引号内用 `\\` 表示反斜杠、`\"` 表示双引号；其他反斜杠序列（如正则中的 `\d`）按原样保留。

VLESS 由 Xray 引擎处理，支持 Surge 风格参数。可从配置文件、订阅、剪贴板、二维码或 `vless://` 分享链接导入。

## 示例

请替换示例中的地址、用户 ID 和密钥。REALITY 示例中的全零公钥仅为占位符，不能用于连接真实服务器。

```ini
[Proxy]
VlessTLS = vless, proxy.example, 443, username=2cae91b3-f85c-433b-88ee-a002b9ed6d61, tls=true, flow=xtls-rprx-vision
VlessWS = vless, cdn.example, 443, username=2cae91b3-f85c-433b-88ee-a002b9ed6d61, tls=true, ws=true, ws-path=/vless, ws-headers=Host:cdn.example
VlessUpgrade = vless, cdn.example, 443, username=2cae91b3-f85c-433b-88ee-a002b9ed6d61, tls=true, ws=true, ws-http-upgrade=true, ws-path=/up
VlessGRPC = vless, proxy.example, 443, username=2cae91b3-f85c-433b-88ee-a002b9ed6d61, tls=true, grpc=true, grpc-service-name=vless, grpc-mode=multi
VlessXHTTP = vless, cdn.example, 443, username=2cae91b3-f85c-433b-88ee-a002b9ed6d61, tls=true, xhttp=true, xhttp-path=/xhttp, xhttp-mode=packet-up
VlessREALITY = vless, 203.0.113.10, 443, username=2cae91b3-f85c-433b-88ee-a002b9ed6d61, reality-public-key=AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA, reality-short-id=abcd, sni=cover.example, flow=xtls-rprx-vision
```

## 参数

参数名与服务端配置保持一致；带范围的数值可写成单个数字或 `最小值-最大值`。

| 参数 | 默认值 | 含义 |
|---|---|---|
| `username` | `必填` | UUID，或长度为 1–30 个 UTF-8 字节的用户 ID |
| `tls` | `false` | 启用 TLS；REALITY 不需要此开关 |
| `sni` | `服务器主机名` | TLS/REALITY 服务端名称；off 关闭普通 TLS 的 SNI |
| `skip-cert-verify` | `false` | 跳过普通 TLS 证书验证 |
| `server-cert-verify-name` | `SNI/hostname` | 独立于 SNI，使用此名称验证证书 |
| `server-cert-fingerprint-sha256` | `未设置` | 64 位十六进制摘要；固定叶证书，替代系统信任验证 |
| `alpn` | `由传输决定` | 协议列表；多项需加引号，例如 alpn="h2,http/1.1" |
| `flow` | `未设置` | xtls-rprx-vision 或 xtls-rprx-vision-udp443；两者均由 block-quic 控制 UDP/443 |
| `reality-public-key` | `未设置` | 32 字节服务端公钥；接受标准或 URL-safe Base64，可带填充；设置后启用 REALITY |
| `reality-short-id` | `空` | 0–16 位成对的十六进制数字；需要 reality-public-key |
| `encryption` | `none` | 完整复制服务端提供的客户端 encryption 字符串 |
| `udp-relay` | `true` | 启用 XUDP 转发，支持多个目标 |
| `block-quic` | `auto` | auto、on、off；与其他协议使用相同的共享策略行为 |
| `underlying-proxy` | `未设置` | 用于连接此服务器的代理名称，或已选择节点的策略组名称 |
| `ws` | `false` | 选择 WebSocket 传输 |
| `ws-path` | `/` | WebSocket/HTTPUpgrade 路径 |
| `ws-headers` | `未设置` | 使用竖线分隔 Key:Value 请求头；Host 指定虚拟主机 |
| `ws-http-upgrade` | `false` | 选择 HTTPUpgrade；需要 ws=true |
| `grpc` | `false` | 选择 gRPC；需要 TLS 或 REALITY |
| `grpc-service-name` | `空` | 服务名，或自定义 /service/method 路径 |
| `grpc-mode` | `gun` | gun 或 multi |
| `grpc-authority` | `sni，其次服务器` | HTTP/2 authority |
| `xhttp` | `false` | 选择 XHTTP 传输 |
| `xhttp-path` | `/` | 请求路径，可包含查询参数 |
| `xhttp-host` | `sni，其次服务器` | HTTP Host；不要在 xhttp-headers 中指定 Host |
| `xhttp-mode` | `auto` | auto、packet-up、stream-up、stream-one |
| `xhttp-headers` | `未设置` | 使用竖线分隔 Key:Value 请求头；支持浏览器 User-Agent 别名 |
| `xhttp-padding-bytes` | `100-1000` | 填充长度或范围 |
| `xhttp-padding-obfs` | `false` | 混淆填充数据 |
| `xhttp-padding-key` | `x_padding` | 填充使用的查询参数或 cookie 名称 |
| `xhttp-padding-header` | `X-Padding` | 填充请求头名称 |
| `xhttp-padding-placement` | `queryInHeader` | queryInHeader、header、cookie、query |
| `xhttp-padding-method` | `repeat-x` | repeat-x 或 tokenish |
| `xhttp-uplink-method` | `POST` | POST；GET 需要 packet-up 模式 |
| `xhttp-session-placement` | `path` | path、query、header、cookie |
| `xhttp-session-key` | `由位置决定` | 会话字段名称 |
| `xhttp-session-table` | `UUID` | 自定义 ASCII 会话字符表；需同时指定 session-length |
| `xhttp-session-length` | `由字符表决定` | 会话长度或范围；字符表与长度必须提供足够的唯一组合 |
| `xhttp-seq-placement` | `path` | path、query、header、cookie |
| `xhttp-seq-key` | `由位置决定` | 序号字段名称 |
| `xhttp-uplink-data-placement` | `auto` | auto、body、header、cookie；后两者需要 packet-up 模式 |
| `xhttp-uplink-data-key` | `由位置决定` | 上传数据字段名称 |
| `xhttp-uplink-chunk-size` | `由位置决定` | 上传分片长度或范围 |
| `xhttp-no-grpc-header` | `false` | 省略 gRPC 风格的 content-type |
| `xhttp-max-each-post-bytes` | `1000000` | 每个 packet-up 请求上传的最大字节数 |
| `xhttp-min-posts-interval` | `30` | packet-up 请求之间的最小间隔，单位毫秒 |
| `xhttp-xmux-max-concurrency` | `未设置` | 并发流上限或范围 |
| `xhttp-xmux-max-connections` | `接受但不生效` | 保留以兼容配置；不覆盖引擎行为 |
| `xhttp-xmux-max-reuse-times` | `未设置` | 连接复用次数上限或范围 |
| `xhttp-xmux-max-request-times` | `600-900` | 每条连接的请求次数上限或范围 |
| `xhttp-xmux-max-reusable-secs` | `1800-3000` | 连接寿命上限或范围，单位秒 |
| `xhttp-xmux-keep-alive` | `接受但不生效` | 保留以兼容配置；保活由引擎管理 |

## 传输组合

`ws`、`grpc`、`xhttp` 只能启用一个，均不启用时使用 RAW/TCP。HTTPUpgrade 还需 `ws=true`。用户凭据、传输、安全层、路径或服务名及 flow 必须与服务端匹配。

| 传输 | 安全层 | Vision |
|---|---|---|
| RAW/TCP | 无、TLS、REALITY | 需要 TLS、REALITY 或 Encryption |
| WebSocket | 无、TLS | 需要 Encryption |
| HTTPUpgrade | 无、TLS | 需要 Encryption |
| gRPC | TLS、REALITY | 不支持 |
| XHTTP | 无、TLS、REALITY | 需要 Encryption |

所有支持的组合均可叠加 Encryption。不支持 mKCP，也不支持 XHTTP 的独立 `downloadSettings`。

## VLESS Encryption

将服务端 `xray vlessenc` 输出的完整客户端字符串填入 `encryption`，不要使用服务端 `decryption` 字符串。格式为 `mlkem768x25519plus.MODE.HANDSHAKE[.PADDING].KEY[.KEY...]`。

`MODE` 支持 `native`、`xorpub`、`random`；`HANDSHAKE` 支持 `1rtt`、`0rtt`。可选 padding 段交替描述长度和暂停时间，每段为概率、最小值、最大值，首段概率必须为 100 且长度至少 35 字节。密钥必须来自服务端，不能自行编造。Encryption 独立于 TLS；WS、HTTPUpgrade、XHTTP 上的 Vision 必须启用 Encryption，gRPC 不能使用 Vision。

0rtt 会复用之前握手的票据。服务端重启可能使票据失效，此时当前请求失败，下一次连接重新完整握手。

## XHTTP

明文使用 HTTP/1.1，TLS 默认使用 HTTP/2。`alpn=http/1.1` 选择 HTTP/1.1，`alpn=h3` 选择 HTTP/3，REALITY 使用 HTTP/2。HTTP/3 到代理服务器的连接使用 UDP，因此底层代理链必须能转发 UDP。

区间写作单个数字或 `最小值-最大值`。padding、会话字段及上传字段需要与服务端一致。通过请求头或 Cookie 上传时必须使用 `packet-up`，降低 `xhttp-max-each-post-bytes` 并确保服务端请求头限制足够容纳 Base64 数据。

## 分享链接

标准格式为 `vless://ID@HOST:PORT?QUERY#NAME`，IPv6 地址需加方括号，ID、路径和名称中的特殊字符需进行百分号编码。

- `type=tcp`/`raw`、`ws`、`httpupgrade`、`grpc`、`xhttp`/`splithttp` 选择传输。
- `security=tls` 开启 TLS；`security=reality` 配合 `pbk`、`sid` 开启 REALITY。
- `path`、`host` 对应所选 HTTP 传输；gRPC 使用 `serviceName`、`authority` 和可选的 `mode=multi`。
- `sni`、`flow`、`encryption`、`alpn`、`pcs`、`vcn`、`allowInsecure=1`/`insecure=1` 映射到对应配置参数。
- XHTTP `extra` JSON 导入支持的客户端字段及 XMUX 限制，忽略仅服务端使用的字段，拒绝 `downloadSettings`。
- Shadowrocket 的 Base64 `none:ID@HOST:PORT` 格式支持 `remarks`、`tls=1`、`peer`、`xtls=2`、`obfs=websocket`/`grpc`、`path`、`obfsParam`。

## 兼容性说明

REALITY 使用 Chrome ClientHello 并通过自身握手验证证书，普通证书跳过验证和指纹选项不会替代 REALITY 验证。遇到无法处理 ML-KEM 的旧 REALITY 服务端时，会重新建立连接，最多尝试一次关闭 ML-KEM 的兼容握手；TLS 仍为 1.3，且必须通过 REALITY 身份验证，无需额外配置。验证成功后，按服务器和凭据在进程内记忆兼容模式 30 分钟；认证失败不会写入缓存。服务端升级后，若兼容握手失败，会重试普通 Chrome 握手；现代服务端仍使用 ML-KEM。分享链接的 `fp` 和 `spx` 被忽略。

参数语法兼容，连接调度和连接池行为由内置 Xray 引擎决定。无实际作用的 XMUX 参数仍会在保存时保留。本功能不增加 Surge Keystore、双向 TLS 或 Shadow TLS 支持。

参见：[通用代理参数](/docs/profile-format/proxy)、[Surge VLESS 语法](https://manual.nssurge.com/policies/vless.html)。
