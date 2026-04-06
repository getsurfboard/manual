---
sidebar_position: 4
---

# SSHDump Packet Capture

SSHDump allows you to stream live VPN traffic from Surfboard directly into Wireshark via the SSH remote capture interface. This is useful for deep packet inspection and network debugging.

:::caution
Enabling SSHDump will significantly reduce VPN performance because every packet is synchronized over an SSH socket. Use it for debugging only.
:::

## Prerequisites

- Android 8.0 or higher (SSHDump is disabled on Android 7 and below)
- Surfboard VPN is active
- Your computer and Android device are on the same network
- Wireshark with SSH remote capture support installed on your computer

## Enable SSHDump

1. Open **Surfboard** and start the VPN.
2. Go to **Settings** → **VPN Settings**.
3. Turn on **SSH remote capture**.

Once enabled, a card appears on the Dashboard showing:

```
SSHDump is running on <private_ip>:15000
```

The default port is `15000`. If that port is occupied, a different port will be assigned automatically.

## Capture in Wireshark

1. Open **Wireshark**.
2. Select **SSH remote capture** from the capture interface list.
3. Enter the following information:
   - **Remote host**: The private IP address shown in the Surfboard Dashboard (e.g. `192.168.1.100`)
   - **Remote port**: The port shown in the Dashboard (default `15000`)
   - **Remote capture command**: Can be left empty or any arbitrary command
4. For authentication, enter any username and any password (or use any key). SSHDump accepts all credentials for convenience.
5. Click **Start**, and Wireshark will begin displaying live packets from the VPN tunnel.

## Important Notes

- SSHDump binds to `0.0.0.0` inside Surfboard, so any device on the same local network can connect.
- The captured interface type is **RAW IP** (Link-type 101), so protocol dissection starts at the IP layer.
- System DNS IPs (`198.18.0.4`, `198.18.0.5`) and the local TUN address (`198.18.0.1`) shown in the capture are internal placeholders used by the VPN engine.
- Remember to turn off SSHDump when debugging is finished to restore normal VPN performance.

## See Also

- [Wireshark sshdump manual](https://www.wireshark.org/docs/man-pages/sshdump.html)
