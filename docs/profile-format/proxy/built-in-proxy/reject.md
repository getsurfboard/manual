---
sidebar_position: 1
---

# Reject

```ini title="Rule sample combined with reject proxy"
DOMAIN,www.google.com,REJECT
```

Traffic match Reject proxy will not be sent:

- For UDP and ICMP traffic, packets will be dropped.
- For TCP traffic, a TCP Reset will be triggered.

:::tip
Surfboard is also compatible with `REJECT-TINYGIF` as built-in proxy,
but will handle it like `REJECT` because Android platform do not support MITM.

For more information, please refer to [FAQ](/docs/faq#mitm)
:::