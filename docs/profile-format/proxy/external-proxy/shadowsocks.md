---
sidebar_position: 2
---

# Shadowsocks

## Protocol standard

- https://shadowsocks.org/en/wiki/Protocol.html
- https://github.com/shadowsocks/simple-obfs

## Sample

```ini
ProxySS = ss, 1.2.3.4, 8000, encrypt-method=chacha20-ietf-poly1305, password=abcd1234, udp-relay=false, obfs=http, obfs-host=www.google.com, obfs-uri=/
```

## Format

```ini
{proxy name} = ss, {host}, {port}, {encrypt method}, {password}, {udp-relay}, {obfs}, {obfs host}, {obfs uri}
```

## Params

| Name           | Value                                                                                                                                                                                                                                                                                                                                       | Mandatory | Note                                                               |
|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|--------------------------------------------------------------------|
| proxy name     | -                                                                                                                                                                                                                                                                                                                                           | true      |                                                                    |
| protocol       | ss<br/>shadowsocks<br/>custom                                                                                                                                                                                                                                                                                                               | true      |                                                                    |
| host           | -                                                                                                                                                                                                                                                                                                                                           | true      | support domain and ip format                                       |
| port           | 0-65535                                                                                                                                                                                                                                                                                                                                     | true      |                                                                    |
| encrypt method | aes-128-gcm<br/>aes-192-gcm<br/>aes-256-gcm<br/>chacha20-ietf-poly1305<br/>xchacha20-ietf-poly1305<br/>rc4<br/>rc4-md5<br/>aes-128-cfb<br/>aes-192-cfb<br/>aes-256-cfb<br/>aes-128-ctr<br/>aes-192-ctr<br/>aes-256-ctr<br/>bf-cfb<br/>camellia-128-cfb<br/>camellia-192-cfb<br/>camellia-256-cfb<br/>salsa20<br/>chacha20<br/>chacha20-ietf | true      |                                                                    |
| password       | -                                                                                                                                                                                                                                                                                                                                           | true      |                                                                    |
| udp-relay      | true<br/>false                                                                                                                                                                                                                                                                                                                              | false     | default value: false                                               |
| obfs           | tls<br/>http                                                                                                                                                                                                                                                                                                                                | false     |                                                                    |
| obfs host      | -                                                                                                                                                                                                                                                                                                                                           |           | default value: cloudfront.net, only useable when obfs is specified |
| obfs uri       | -                                                                                                                                                                                                                                                                                                                                           |           | default value: /, only useable when obfs is http                   |