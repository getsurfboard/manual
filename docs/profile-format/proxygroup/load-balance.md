---
sidebar_position: 2
---

# Load balance

A group of proxies, selection will be randomly chosen.

:::note
Load balance group selection can not be changed manually
:::

## Sample

### Profile sample

```ini
[Proxy Group]
LoadBalanceGroup = load-balance, ProxyHTTP, ProxyHTTPS

[Rule]
# traffic match 'www.google.com' will be redirect through AutoTestGroup's selected proxy
DOMAIN, www.google.com, LoadBalanceGroup
```

### Policy path sample

```ini
ProxyHTTP = http, 1.2.3.4, 443, username, password
ProxyHTTPS = https, 1.2.3.4, 443, username, password, skip-cert-verify=true, sni=www.google.com
ProxySOCKS5 = socks5, 1.2.3.4, 443, username, password, udp-relay=false
```

Just like [[Proxy]](/docs/profile-format/proxy) Section definition but without section header in it.

Use policy path can separate proxies and rules definition, and reduce profile complexity. 

## Format

```ini
{Group name} = load-balance, {proxies, ...}, {policy-path}, {policy-regex-filter}, hidden = {hidden}
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

:::tip
You can use a profile url as policy path url, only proxy part of the profile will be used
:::