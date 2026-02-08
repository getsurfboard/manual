---
sidebar_position: 2
---

# Process Rules

Process rules (or Application rules) allow you to route traffic based on the Android application package name that initiated the request.

## Example

```ini
# Routes traffic from the Google Play Store (exact package name match)
PROCESS-NAME,com.android.vending,Proxy

# Routes traffic from any application with 'google' in its package name
PROCESS-NAME,*google*,Proxy

# Routes Instagram traffic and forces remote DNS resolution
PROCESS-NAME,com.instagram.android,Proxy,force-remote-dns
```

## Format

```ini
PROCESS-NAME, {package name}, {target proxy}[, force-remote-dns][, enhanced-mode]
```

## Parameters

| Name             | Value          | Mandatory | Note                                                                                  |
|------------------|----------------|-----------|---------------------------------------------------------------------------------------|
| package name     | -              | true      | Format: Android application package name. Supports complete match or wildcard match.    |
| target proxy     | -              | true      | The specified proxy or proxy group must exist in the profile.                                |
| force-remote-dns | true<br/>false | false     | Default value: false.<br/>If set to true, the DNS query will be triggered on the remote proxy. |
| enhanced-mode    | true<br/>false | false     | Default value: false.<br/>If set to true, a fake IP will be returned in the DNS query.      |

:::caution
Due to system restrictions, `force-remote-dns` and `enhanced-mode` only work on **Android 11 and above**.
:::

:::tip
The Android application package name can be found using the methods below:
- Use software like [Apk Info](https://play.google.com/store/apps/details?id=com.wt.apkinfo) to query the package name on your device.
- Search for the application name on the web version of [Google Play](https://play.google.com). Enter the application details page; the package name will be at the end of the URL.
- Open the application on your phone and keep it in the foreground. Use the [ADB](https://developer.android.com/studio/command-line/adb) command to fetch the package name:

```shell
adb shell dumpsys activity recents | grep 'Recent #0' | cut -d= -f2 | sed 's| .*||' | cut -d '/' -f1
```
:::