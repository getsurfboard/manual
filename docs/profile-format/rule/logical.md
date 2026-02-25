---
sidebar_position: 8
---

# Logical Rules

Logical rules allow you to combine multiple sub-rules using logical operators such as `AND`, `OR`, and `NOT`. This provides powerful and flexible traffic routing capabilities.

## AND

The `AND` operator matches if **all** specified sub-rules match the traffic.

### Format

```ini
AND, ({sub-rule 1}, {sub-rule 2}, ...), {target proxy}
```

## OR

The `OR` operator matches if **any one** of the specified sub-rules matches the traffic.

### Format

```ini
OR, ({sub-rule 1}, {sub-rule 2}, ...), {target proxy}
```

## NOT

The `NOT` operator matches if the specified sub-rule **does not** match the traffic.

### Format

```ini
NOT, ({sub-rule}), {target proxy}
```

## Parameters

| Name         | Value          | Mandatory | Note                                                                 |
|--------------|----------------|-----------|----------------------------------------------------------------------|
| type         | AND, OR, NOT   | true      | Logical operator type.                                               |
| sub-rules    | -              | true      | A list of rules (enclosed in parentheses) to be evaluated.           |
| target proxy | -              | true      | The specified proxy or proxy group must exist in the profile.        |

## Example

```ini
# Matches if the domain suffix is 'google.com' AND the destination port is 443
AND, ((DOMAIN-SUFFIX, google.com), (DEST-PORT, 443)), Proxy

# Matches if the domain suffix is 'example.com' OR it is a local IP
OR, ((DOMAIN-SUFFIX, example.com), (IP-CIDR, 192.168.0.0/16)), DIRECT

# Matches if it is NOT a domain suffix 'apple.com'
NOT, ((DOMAIN-SUFFIX, apple.com)), Proxy

# Matches if NONE of the sub-rules match (e.g., NOT for apple.com AND NOT for google.com)
NOT, ((OR, ((DOMAIN-SUFFIX, apple.com), (DOMAIN-SUFFIX, google.com)))), Proxy

# Complex Nesting: Matches if (it is from a specific subnet) AND (it is NOT for apple.com)
AND, ((SRC-IP-CIDR, 192.168.1.0/24), (NOT, ((DOMAIN-SUFFIX, apple.com)))), Proxy
```

## External Reference

For more details, please refer to the [Surge Logical Rules documentation](https://manual.nssurge.com/rule/logical.html).
