---
sidebar_position: 7
---

# AnyTLS

AnyTLS is a proxy type that uses TLS for secure communication. It is a simple and efficient way to tunnel traffic through a TLS-encrypted connection.

## Format

```ini
{proxy name} = anytls, {server}, {port}, {password}, {skip-cert-verify}, {sni}, {reuse}
```

## Parameters

| Name             | Value            | Mandatory | Note                                                                                                                                                                            |
|------------------|------------------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| proxy name       | -                | true      |                                                                                                                                                                                 |
| server           | -                | true      | Supports domain and IP formats.                                                                                                                                                    |
| port             | 0 - 65535        | true      |                                                                                                                                                                                 |
| password         | -                | true      | Authentication password.                                                                                                                                                         |
| skip-cert-verify | true<br/>false   | false     | Set to true if the proxy does not have a valid TLS certificate. Default value: false.                                                                                             |
| sni              | -                | false     | Server Name Indication. Definition is unnecessary if the SNI value matches the host value.                                                                            |
| reuse            | true<br/>false   | false     | Whether to reuse connections. Default value: true.                                                                                                                               |

## Example

```ini
# Full configuration
ProxyAnyTLS = anytls, 1.2.3.4, 443, password, skip-cert-verify=true, sni=abc.com, reuse=false

# Minimal configuration
ProxyAnyTLSMin = anytls, 1.2.3.4, 443, password
```
