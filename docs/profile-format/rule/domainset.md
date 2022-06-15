---
sidebar_position: 4
---

# Domain Set

Domain Set is a remote url configuration, whose content is a collection of Domain rules, but without target definition in it.

Use Domain Set can greatly simplify the content complexity of profile which has a lot of domain rules in it,
and also can reuse rules encapsulated by other contributors.

Compare to [RULE-SET](/docs/profile-format/rule/ruleset), Domain set only support domain rule

## Sample

### Domain Set definition

```ini
DOMAIN-SET,https://domainset.com/ad,REJECT
```

### Remote Domain Set content sample

```ini
www.apple.com
google.com
.google.com
```

It should be noted that, `.google.com` will not only match `www.google.com` but also `google.com`

## Format

```ini
DOMAIN-SET, {domain set url}, {target}
```

## Param

| Name           | Value | Mandatory | Note                                                   |
|----------------|-------|-----------|--------------------------------------------------------|
| domain set url | -     | true      |                                                        |
| target         | -     | true      | Specified proxy or proxy group must existed in profile |

:::tip
Currently domain set will not bring any performance improvement compare to RULE-SET, it may be achieved in the future
:::