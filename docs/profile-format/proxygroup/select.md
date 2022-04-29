---
sidebar_position: 0
---

# Manually select

A group of proxies, user can change selected proxy manually, even when VPN is started.

- Reference: https://en.wikipedia.org/wiki/Regular_expression

## Sample

### Profile sample

```ini
[Proxy Group]
SelectGroup = select, ProxyHTTP, ProxyHTTPS, DIRECT, REJECT, hidden = false

[Rule]
# traffic match 'www.google.com' will be redirect through SelectGroup's selected proxy
DOMAIN, www.google.com, SelectGroup
```

### Policy path sample

```ini
ProxyHTTP = http, 1.2.3.4, 443, username, password
ProxyHTTPS = https, 1.2.3.4, 443, username, password, skip-cert-verify=true, sni=www.google.com
ProxySOCKS5 = socks5, 1.2.3.4, 443, username, password, udp-relay=false
```

Just like [[Proxy]](/docs/profile-format/proxy) Section definition but without section header in it

Use policy path can separate proxies and rules definition, and reduce profile complexity.

## Format

```ini
{Group name} = select, {proxies, ...}, {policy-path}, {policy-regex-filter}, hidden = {hidden}
```

## Param

| Name                | Value          | Mandatory | Note                                                                                                                                                                                                              |
|---------------------|----------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| group name          | -              | true      | name of group, will be used like a key to the group                                                                                                                                                               |
| proxies             | -              | true      | A list of proxy name defined in [Proxy] section, divided by comma                                                                                                                                                 |
| policy-path         | -              | false     | A list of proxy defined in url content. Content format will be presented below:<br/><br/><code>ProxyHTTP1 = http, 1.2.3.4, 443, username, password<br/>ProxyHTTP2 = http, 1.2.3.4, 443, username, password</code> |
| policy-regex-filter | -              | false     | Usable if policy-path defined.<br/>A regular expression which will apply on proxy name in policy-path url content, only proxies which match expression will be reserved.                                          |
| hidden              | true<br/>false | false     | Whether to display this proxy group in user interface, even set to false, this group will still take effect.                                                                                                      |

:::tip
{proxies} and {policy-path} can be used together in the same proxy group
:::
