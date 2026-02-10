---
sidebar_position: 6
---

# FAQ

## Does Surfboard support automatic profile updates?

Yes, Surfboard supports automatic profile updates, even when the app is running in the background.

This is achieved by defining a [managed-config](/docs/profile-format/managed_config) line at the beginning of the profile:

```
#!MANAGED-CONFIG http://test.com/surge.conf interval=60 strict=true
```

## Is battery consumption high?

By default, Surfboard handles all network traffic for the system.

On some systems, the battery consumption attributed to network transmission by other applications may be counted towards Surfboard.

Please judge the actual battery impact based on your usage time and device performance, rather than relying solely on the battery consumption percentage displayed in system settings.

## Why is data usage high in system settings?

Since Surfboard takes over all network traffic for the system, all data transmitted by the device (whether it is routed through a proxy or sent directly) is processed by Surfboard. As a result, the system attributes all system-wide traffic to Surfboard, making its data usage appear much higher than it actually is.

## How can I reduce battery consumption?

You can use the **Bypass** configuration in the 'Tools' tab. Excluding specific applications from the VPN (or only including necessary ones) can reduce battery consumption.

:::caution
Only modify bypass configurations if you understand the implications. Incorrect settings may cause some applications to malfunction.
:::

## How do I analyze network issues?

Please check the following:

### 1. Is the protocol supported?

Check the [supported protocols list](/docs/profile-format/proxy).

### 2. Reset Bypass Configuration

Uncheck all entries in the bypass configuration to ensure no apps are inadvertently blocked or allowed.

### 3. Try Global Outbound Mode

Switch to **Global** outbound mode in the dashboard.

If Global mode works, the issue might be caused by:
- DNS poisoning
- Incorrect profile rules

## Why are certain Surge standards not supported?

### MITM (Man-in-the-Middle)

Since Android 7.0, [Google has removed support for trusting user-installed CAs](https://android-developers.googleblog.com/2016/07/changes-to-trusted-certificate.html) by default. Consequently, MITM functionality is only achievable on rooted devices.

### `USER-AGENT`

User-Agent information is only available in plaintext HTTP traffic or via MITM decryption.

Since MITM is not standard on Android and most internet traffic is now HTTPS, supporting `USER-AGENT` rules is largely impossible and unnecessary on the Android platform.

### `URL-REGEX`

Similar to the `USER-AGENT` rule, `URL-REGEX` matching requires MITM to inspect the URL of HTTPS requests, which is not feasible without root access and CA installation.

## Why are protocols like SSR, Trojan gRPC, VLESS, or Xray not supported?

Surfboard adheres strictly to the Surge configuration format standard.

Surfboard aims to support protocols that are standard in Surge to strictly avoid fragmentation.

We believe that blindly supporting every available protocol does not necessarily bring additional benefits and can increase the difficulty of maintaining the application.

If you require protocols that Surfboard does not support, please consider using other excellent applications such as [Clash for Android](https://github.com/Kr328/ClashForAndroid) or [v2rayNG](https://github.com/2dust/v2rayNG).

## Why is the speed test latency higher than expected?

Surfboard uses `HTTP HEAD` requests to test node speed, similar to Surge.

- **First Test:** The latency is usually higher because there is no DNS cache for the node.
- **Subsequent Tests:** Latency should be lower as the DNS query time is eliminated due to caching.

Note that devices with weaker CPUs may also experience slightly higher processing latency.

## Why do I see "The imported profile contains an invalid update URL"?

The Surge format supports automatic updates if a [managed-config](/docs/profile-format/managed_config) line is defined at the top of the profile.

If the profile contains an invalid URL in this config, Surfboard will prompt this warning.

:::tip
This usually happens if the URL host is a local address (e.g., `127.0.0.1`).

If you are using a third-party profile converter, this may be a bug in their conversion process. Please consider using a different converter or contacting the provider.
:::
