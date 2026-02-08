---
sidebar_position: 1
---

# Reject

The `REJECT` proxy is a built-in policy used to block specific traffic. It is commonly used for advertisement blocking or restricting access to certain domains.

```ini title="Rule example combined with Reject proxy"
# Traffic to google.com will be blocked and reset
DOMAIN,www.google.com,REJECT
```

Traffic matching the Reject proxy will not be sent:

- For UDP and ICMP traffic, packets will be dropped.
- For TCP traffic, a TCP Reset will be triggered.

:::tip
Surfboard is also compatible with `REJECT-TINYGIF` as a built-in proxy, but handles it like `REJECT` because the Android platform does not support MITM.

For more information, please refer to [FAQ](/docs/faq#mitm)
:::