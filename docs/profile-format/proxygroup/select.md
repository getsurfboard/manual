---
sidebar_position: 0
---

# Manual Select

The `select` group type allows users to manually choose their preferred proxy from a list of options within the Surfboard interface.

- Reference: https://en.wikipedia.org/wiki/Regular_expression

## Example

### Profile Example

```ini
[Proxy Group]
# A group allowing manual selection between multiple proxies and direct/reject policies
SelectGroup = select, ProxyHTTP, ProxyHTTPS, DIRECT, REJECT, hidden = false

[Rule]
# Traffic matching 'www.google.com' will be redirected through SelectGroup's currently selected proxy
DOMAIN, www.google.com, SelectGroup
```

### Policy Path Example

```ini
ProxyHTTP = http, 1.2.3.4, 443, username, password
ProxyHTTPS = https, 1.2.3.4, 443, username, password, skip-cert-verify=true, sni=www.google.com
ProxySOCKS5 = socks5, 1.2.3.4, 443, username, password, udp-relay=false
```

This is similar to the [[Proxy]](/docs/profile-format/proxy) section definition but without the section header.

Using a policy path separates proxies and rules definitions, reducing profile complexity.

## Format

```ini
{group name} = select, {proxies, ...}, {policy-path}, {policy-regex-filter}, hidden = {hidden}, include-all-proxies = {include-all-proxies}, include-other-group = "{include-other-group}"
```

## Parameters

| Name                | Value          | Mandatory | Note                                                                                                                                                                                                                                            |
|---------------------|----------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| group name          | -              | true      | Name of the group; serves as the key.                                                                                                                                                                                             |
| proxies             | -              | true      | A list of proxy names defined in the `[Proxy]` section, separated by commas.                                                                                                                                                                             |
| policy-path         | -              | false     | A URL pointing to a list of proxies. Content format is shown below:<br/><br/><code>ProxyHTTP1 = http, 1.2.3.4, 443, username, password<br/>ProxyHTTP2 = http, 1.2.3.4, 443, username, password</code>                               |
| policy-regex-filter | -              | false     | Applicable if policy-path/include-all-proxies/include-other-group is defined.<br/>A regular expression applied to proxy names; only proxies matching the expression are included. Note: This is a full-match regular expression. |
| hidden              | true<br/>false | false     | Whether to display this proxy group in the user interface. Even if set to false, the group still takes effect.                                                                                                                                    |
| include-all-proxies | true<br/>false | false     | Includes all proxies defined in the profile. Can be used with `policy-regex-filter` to filter specific proxies.                                                                                                                              |
| include-other-group | -              | false     | Includes proxies from other groups specified by name. Can be used with `policy-regex-filter`. Multiple group names can be separated by commas.                                                                    |

:::tip
`proxies`, `policy-path`, `include-all-proxies`, and `include-other-group` can be used together in the same proxy group.
:::

:::tip
You can use a profile URL as a policy path URL; only proxies defined in the `[Proxy]` section will be used.
:::