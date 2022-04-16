---
sidebar_position: 6
---

# FAQ

## Update profile automatically?

Surfboard support update profiles automatically, even when app is in background.

It is achieved through defining a [managed-config](/docs/profile-format/managed_config) at the first line of the profile

```
#!MANAGED-CONFIG http://test.com/surge.conf interval=60 strict=true
```

## High battery consumption?

By default, Surfboard will take over the whole system's network traffic handling.

On some ROMs, the battery consumption of other applications due to the network transmission will be counted on Surfboard.

Please subjectively perceive whether the battery consumption has increased significantly after turning on Surfboard, instead of only referring to the battery consumption percentage displayed in the system settings.

## How to reduce battery consumption?

Please try to use bypass config in the 'tools' tab. Filtering/allowing some app traffic into VPN can reduce battery consumption.

:::caution
Use bypass config settings only if you know what are you doing. Incorrect configuration may cause some applications to not work properly
:::

## Analyzing network issues

Please check the following entries:

### Whether protocol defined in profile is supported

Check the [protocol supported list](/docs/profile-format/proxy)

### Reset bypass config

Uncheck all entries in bypass config

### Try global outbound mode

You can change outbound mode in the dashboard UI.

If global outbound mode is working, it may be caused by following issue:

- DNS poisoning
- Profile rules

## Why not support these Surge standard

### MITM

After Android 7.0, [Google drop support for trusting custom CAs installed by user](https://android-developers.googleblog.com/2016/07/changes-to-trusted-certificate.html). MITM is only achieved on rooted devices after that.

### `USER-AGENT`

User-Agent info is only available on plaintext HTTP traffic or by MITM. 

Since MITM is not achievable anymore and most of the traffic on the Internet today is based on https, 
support for `USER-AGENT` is impossible and unnecessary on Android platform.

### `URL-REGEX`

Just like `USER-AGENT` rule mention above, `URL-REGEX` is only achievable by MITM.

## Why not support SSR/Trojan gRPC/VLESS/Xray/...

Surfboard has always followed the Surge configuration format as a standard. 

Similarly, Surfboard will try its best to support the protocol standards supported by Surge, but will not actively support protocols not supported by Surge to avoid the problem of standard fragmentation.

At the same time, I personally believe that blindly supporting as many protocols as possible will not bring additional benefits, but will increase the difficulty of application maintenance.

If you want to use a protocol that Surfboard does not support, please consider using other applications that support more complete protocols, such as [Clash](https://github.com/Kr328/ClashForAndroid) and [V2rayNG](https://github.com/2dust/v2rayNG), they are all very good applications.

## Why speed test delay is higher than expected

Surfboard use `HTTP HEAD` to make a node speed test just like Surge. The first speed test delay is always higher because there is no node's dns cache. Second run will be lower because dns query duration is removed due to existence of dns cache.

Devices with poor CPU will get higher delay also.