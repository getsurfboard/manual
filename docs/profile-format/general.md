---
sidebar_position: 3
---

# [General]

## `dns-server`

```ini
dns-server = system, 8.8.8.8, 8.8.4.4, 9.9.9.9:9953
```

## `skip-proxy`

```ini
skip-proxy = 127.0.0.1, 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, 100.64.0.0/10, localhost, *.local, www.baidu.com
```

## `proxy-test-url`

```ini
proxy-test-url = http://www.gstatic.com/generate_204
```

## `always-real-ip`

```ini
always-real-ip = *.srv.nintendo.net, *.stun.playstation.net, xbox.*.microsoft.com, *.xboxlive.com
```

## `http-listen`

```ini
http-listen = 0.0.0.0:1234
```

## `socks5-listen`

```ini
socks5-listen = 127.0.0.1:1235
```