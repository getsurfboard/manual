---
sidebar_position: 0
---

# Manually select

A group of proxies, user can change selected proxy manually, even when VPN is started.

- Reference: https://en.wikipedia.org/wiki/Regular_expression

## Sample

```ini
[Proxy Group]
SelectGroup = select, ProxyHTTP, ProxyHTTPS, DIRECT, REJECT

[Rule]
# traffic match 'www.google.com' will be redirect through SelectGroup's selected proxy
DOMAIN, www.google.com, SelectGroup
```

## Format

```ini
{Group name} = select, {proxies, ...}, {policy-path}, {policy-regex-filter}
```

## Param

| Name                | Value | Mandatory | Note                                                                                                                                                                                                              |
|---------------------|-------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| group name          | -     | true      | name of group, will be used like a key to the group                                                                                                                                                               |
| proxies             | -     | true      | A list of proxy name defined in [Proxy] section, divided by comma                                                                                                                                                 |
| policy-path         | -     | false     | A list of proxy defined in url content. Content format will be presented below:<br/><br/><code>ProxyHTTP1 = http, 1.2.3.4, 443, username, password<br/>ProxyHTTP2 = http, 1.2.3.4, 443, username, password</code> |
| policy-regex-filter | -     | false     | Usable if policy-path defined.<br/>A regular expression which will apply on proxy name in policy-path url content, only proxies which match expression will be reserved.                                          |

:::tip
{proxies} and {policy-path} can be used together in the same proxy group
:::
