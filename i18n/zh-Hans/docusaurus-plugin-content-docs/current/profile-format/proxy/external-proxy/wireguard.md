---
sidebar_position: 5
---

# WireGuard

WireGuard 是一种极其简单但快速且现代的 VPN，利用了最先进的密码学技术。Surfboard 为 WireGuard 隧道提供了原生集成。

## 协议标准

- https://en.wikipedia.org/wiki/WireGuard

## 示例

与其它在单行中定义的代理不同，WireGuard 代理使用独立的配置部分来描述详情，并通过代理定义中的 `section-name` 进行关联。

```ini
[Proxy]
# 引用独立 WireGuard 配置部分的定义
wireguard-home = wireguard, section-name = HomeServer

[WireGuard HomeServer]
# WireGuard 隧道的特定接口和对等端设置
private-key = sDEZLACT3zgNCS0CyClgcBC2eYROqYrwLT4wdtAJj3s=
self-ip = 10.0.2.2
dns-server = 8.8.8.8
mtu = 1280
peer = (public-key = fWO8XS9/nwUQcqnkfBpKeqIqbzclQ6EKP20Pgvzwclg=, allowed-ips = 0.0.0.0/0, endpoint = 192.168.20.6:51820)
```

## 格式

```ini
[Proxy]
{proxy name} = wireguard, section-name = {section name}

[WireGuard {section name}]
private-key = {private key}
self-ip = {self ip}
dns-server = {dns server ip}
mtu = {mtu size}
peer = (public-key = {public key}, allowed-ips = {allowed ip routes}, endpoint = {endpoint address}, keepalive = {keepalive seconds})
```

## 参数

| 名称              | 值                        | 是否必填 | 备注                                      |
|-------------------|---------------------------|-----------|-------------------------------------------|
| proxy name        | -                         | 是      |                                           |
| section name      | -                         | 是      | 支持域名和 IP 格式。              |
| private key       | base64 编码格式           | 是      |                                           |
| self ip           | IPv4 格式                 | 是      |                                           |
| dns server ip     | IPv4 格式                 | 是      | 支持以逗号分隔的多个值。 |
| mtu size          | 大于零的整数              | 是      |                                           |
| public key        | base64 编码格式           | 是      |                                           |
| allowed ip routes | IPv4 路由格式             | 是      |                                           |
| endpoint address  | IPv4 IP:端口 格式         | 是      |                                           |
| keepalive seconds | 大于零的整数              | 否     | 0 表示禁用 Keepalive。                 |