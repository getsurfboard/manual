---
sidebar_position: 3
---

# Subnet / SSID

The `subnet` group type automatically selects a policy based on the current network environment. You can use [subnet expressions](/docs/profile-format/rule/subnet) as conditions.

:::note
User cannot manually change the selection of a subnet group.
:::

The legacy `ssid` keyword is still supported and behaves identically to `subnet`.

## Example

### Profile Example

```ini
[Proxy Group]
# Switch to DIRECT when connected to home WiFi, otherwise use auto-selected proxy
SubnetGroup = subnet, default = Auto, SSID:MyHome = DIRECT, TYPE:WIFI = DIRECT

[Rule]
# Traffic matching 'www.google.com' will be routed through SubnetGroup's current policy
DOMAIN, www.google.com, SubnetGroup
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
{group name} = subnet, default = {proxy}, {expressions...}, hidden = {hidden}, include-all-proxies = {include-all-proxies}, include-other-group = "{include-other-group}"
```

The legacy keyword `ssid` can be used in place of `subnet`.

## Parameters

| Name                | Value         | Mandatory | Note                                                                                                                                                                                                               |
|---------------------|---------------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| group name          | -             | true      | Name of the group; serves as the key.                                                                                                                                                                              |
| default             | proxy name    | true      | The policy used when no subnet expression matches.                                                                                                                                                                 |
| `TYPE:WIFI`           | proxy name    | false     | The policy to use when connected to a WiFi network.                                                                                                                                                                |
| `TYPE:WIRED`          | proxy name    | false     | The policy to use when connected to a wired (Ethernet) network.                                                                                                                                                    |
| `TYPE:CELLULAR`       | proxy name    | false     | The policy to use when connected to a cellular (mobile data) network.                                                                                                                                              |
| `SSID:{ssid}`         | proxy name    | false     | The policy to use when connected to a WiFi network with the specified SSID. Supports wildcard matching. Requires location permission.                                                                               |
| `BSSID:{bssid}`       | proxy name    | false     | The policy to use when connected to a WiFi network with the specified BSSID. Supports wildcard matching. Requires location permission.                                                                              |
| `ROUTER:{ip}`         | proxy name    | false     | The policy to use when the default gateway matches the specified IP address.                                                                                                                                       |
| `MCCMNC:{mcc}-{mnc}`  | proxy name    | false     | The policy to use when connected to a cellular network with the specified MCC and MNC codes.                                                                                                                       |
| hidden              | true<br/>false| false     | Whether to display this proxy group in the user interface. Even if set to false, the group still takes effect.                                                                                                     |
| include-all-proxies | true<br/>false| false     | Includes all proxies defined in the profile. Can be used with `policy-regex-filter` to filter specific proxies.                                                                                                    |
| include-other-group | -             | false     | Includes proxies from other groups specified by name. Can be used with `policy-regex-filter`. Multiple group names can be separated by commas.                                                                     |

:::tip
Conditions are evaluated in the order they are declared. The first matching condition's policy is selected. If no condition matches, the `default` policy is used.
:::

:::tip
`proxies`, `policy-path`, `include-all-proxies`, and `include-other-group` can be used together in the same proxy group.
:::

:::note
SSID and BSSID conditions require location permission. If the permission is not granted, these conditions will never match and the group will fall back to the `default` policy.
:::
