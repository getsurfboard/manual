---
sidebar_position: 3
---

# Rule Set

Rule Set is a remote url configuration, whose content is a collection of Rule, but without target definition in it.

Use Rule Set can greatly simplify the content complexity of profile which has a lot of rules in it, 
and also can reuse rules encapsulated by other contributors.

## Sample

### Rule Set definition

```ini
RULE-SET,https://ruleset.com/cn,ProxyVMess
```

### Remote Rule Set content sample

```ini
DOMAIN,www.apple.com
DOMAIN,www.google.com
DOMAIN-SUFFIX,apple.com
DOMAIN-KEYWORD,google
IP-CIDR,192.168.0.0/16
GEOIP,US
```

You can see that there is no target definition in it, all matching traffic will use proxy 'ProxyVMess' as target

## Format

```ini
RULE-SET, {rule set url}, {target}
```

## Param

| Name         | Value | Mandatory | Note                                                   |
|--------------|-------|-----------|--------------------------------------------------------|
| rule set url | -     | true      |                                                        |
| target       | -     | true      | Specified proxy or proxy group must existed in profile |
