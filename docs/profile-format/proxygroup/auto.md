---
sidebar_position: 1
---

# Auto Select

A group of proxies with a test URL.

After the VPN starts, an `HTTP HEAD` request is sent to the test URL. The latency is recorded when a successful response is received.

The proxy with the lowest latency is selected for the group.

The test runs at regular intervals.

- Reference: https://en.wikipedia.org/wiki/Regular_expression
- Reference: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD

:::note
Auto Select group selection cannot be changed manually.
:::

## Example

### Profile Example

```ini
[Proxy Group]
AutoTestGroup = url-test, ProxySOCKS5, ProxySOCKS5TLS, url=http://www.gstatic.com/generate_204, interval=600, tolerance=100, timeout=5, hidden=true

[Rule]
# Traffic matching 'www.google.com' will be redirected through AutoTestGroup's selected proxy
DOMAIN, www.google.com, AutoTestGroup
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
{group name} = url-test, {proxies, ...}, {policy-path}, {policy-regex-filter}, {url}, {interval}, {tolerance}, {timeout}, hidden = {hidden}, include-all-proxies = {include-all-proxies}, include-other-group = "{include-other-group}"
```

## Parameters

| Name                | Value           | Mandatory | Note                                                                                                                                                                                                                                                                                               |
|---------------------|-----------------|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| group name          | -               | true      | Name of the group; serves as the key.                                                                                                                                                                                                                                                |
| proxies             | -               | true      | A list of proxy names defined in the `[Proxy]` section, separated by commas.                                                                                                                                                                                                                                |
| policy-path         | -               | false     | A URL pointing to a list of proxies.<br/>Content format is described above.                                                                                                                                                                                                                  |
| policy-regex-filter | -               | false     | Applicable if policy-path/include-all-proxies/include-other-group is defined.<br/>A regular expression applied to proxy names; only proxies matching the expression are included. Note: This is a full-match regular expression.                                                     |
| url                 | http scheme url | false     | Test URL used for the HTTP HEAD request.<br/>If the URL is not defined, '<a href="/docs/profile-format/general/proxy_test_url">proxy-test-url</a>' from the `[General]` section is used.<br/>If 'proxy-test-url' is also undefined, 'http://www.gstatic.com/generate_204' is used. |
| interval            | -               | false     | Unit: seconds. Defines the test interval. Default value: 600.                                                                                                                                                                                                                                   |
| tolerance           | -               | false     | Unit: milliseconds.<br/>Proxy selection only changes when the new selected proxy has a lower latency than the current proxy minus this value.<br/>Default value: 100.                                                                                                                                       |
| timeout             | -               | false     | Unit: seconds.<br/>Tests exceeding this duration are treated as failures.<br/>Default value: 5.                                                                                                                                                                                       |
| hidden              | true<br/>false  | false     | Whether to display this proxy group in the user interface. Even if set to false, the group still takes effect.                                                                                                                                                                                       |
| include-all-proxies | true<br/>false  | false     | Includes all proxies defined in the profile. Can be used with `policy-regex-filter` to filter specific proxies.                                                                                                                                                                                 |
| include-other-group | -               | false     | Includes proxies from other groups specified by name. Can be used with `policy-regex-filter`. Multiple group names can be separated by commas.                                                                                                                       |

:::caution
Only **HTTP** scheme URLs are allowed as test URLs. **HTTPS** and other schemes are not supported.
:::

:::tip
`proxies`, `policy-path`, `include-all-proxies`, and `include-other-group` can be used together in the same proxy group.
:::

:::tip
You can use a profile URL as a policy path URL; only proxies defined in the `[Proxy]` section will be used.
:::