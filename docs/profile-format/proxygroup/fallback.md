---
sidebar_position: 1
---

# Fallback

A group of proxies with a test url in it, just like [Auto select](./auto) group.

Unlike auto select group, the selection change will take effect immediately as long as any proxy test succeeds.

Therefore, proxies order is critical in a fallback group, you should put better proxies first.

:::note
Fallback group selection can not be changed manually
:::

## Sample

### Profile sample

```ini
[Proxy Group]
FallbackGroup = fallback, ProxySOCKS5, ProxySOCKS5TLS, url=http://www.gstatic.com/generate_204, interval=600, timeout=5

[Rule]
# traffic match 'www.google.com' will be redirect through AutoTestGroup's selected proxy
DOMAIN, www.google.com, FallbackGroup
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
{group name} = fallback, {proxies, ...}, {policy-path}, {policy-regex-filter}, {url}, {interval}, {timeout}, {hidden}, include-all-proxies = {include-all-proxies}
```

## Param

| Name                | Value           | Mandatory | Note                                                                                                                                                                                                                                                                                               |
|---------------------|-----------------|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| group name          | -               | true      | name of group, will be used like a key to the group                                                                                                                                                                                                                                                |
| proxies             | -               | true      | A list of proxy name defined in `[Proxy]` section, divided by comma                                                                                                                                                                                                                                |
| policy-path         | -               | false     | A list of proxy defined in url content<br/>Content format will be presented below                                                                                                                                                                                                                  |
| policy-regex-filter | -               | false     | Usable if policy-path defined.<br/>A regular expression which will apply on proxy name in policy-path url content, only proxies which match expression will be reserved.                                                                                                                           |
| url                 | http scheme url | false     | Test url which is used by HTTP HEAD request.<br/>If url is not defined, '<a href="/docs/profile-format/general/proxy_test_url">proxy-test-url</a>' defined in `[General]` section will be used.<br/>If 'proxy-test-url' is not defined either, 'http://www.gstatic.com/generate_204' will be used. |
| interval            | -               | false     | Unit: seconds, define test trigger intervals. Default value: 600                                                                                                                                                                                                                                   |
| timeout             | -               | false     | Unit: seconds<br/>Test exceed this maximum allowed duration will be treated as failure.<br/>Default value: 5                                                                                                                                                                                       |
| hidden              | true<br/>false  | false     | Whether to display this proxy group in user interface, even set to false, this group will still take effect.                                                                                                                                                                                       |
| include-all-proxies | true<br/>false  | false     | Include all proxies defined in whole profile, can be used with `policy-regex-filter` to filter some of the proxies                                                                                                                                                                                 |

:::caution
Only **HTTP** scheme url is allowed as test url, **HTTPS** and any other types of scheme url will not be supported.
:::

:::tip
{proxies} and {policy-path} can be used together in the same proxy group
:::

:::tip
You can use a profile url as policy path url, only proxies defined in `[Proxy]` section will be used
:::