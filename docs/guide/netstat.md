> 显示套接字的状态

## 列出所有套接字

```bash
netstat -a
```

## TCP 套接字

```bash
netstat -at
-t 选项可以只列出 TCP 的套接字，也可也用--tcp
```

```bash
Active Internet connections (servers and established)
Proto Recv-Q Send-Q Local Address           Foreign Address         State
tcp        0      0 0.0.0.0:http            0.0.0.0:*               LISTEN
tcp        0      0 0.0.0.0:ssh             0.0.0.0:*               LISTEN
tcp        0      0 localhost:hbci          0.0.0.0:*               LISTEN
tcp        0      0 vast:40578              100.100.30.26:http      ESTABLISHED
tcp        0      0 vast:ssh                106.38.97.210:51572     ESTABLISHED
tcp6       0      0 [::]:http               [::]:*                  LISTEN
tcp6       0      0 [::]:webcache           [::]:*                  LISTEN
tcp6       0      0 [::]:origo-native       [::]:*                  LISTEN
tcp6       0      0 [::]:pxc-ntfy           [::]:*                  LISTEN
tcp6       0      0 [::]:mysql              [::]:*                  LISTEN
```

## UDP 套接字

```bash
netstat -au
```

```
Active Internet connections (servers and established)
Proto Recv-Q Send-Q Local Address           Foreign Address         State
udp        0      0 0.0.0.0:bootpc          0.0.0.0:*
udp        0      0 vast:ntp                0.0.0.0:*
udp        0      0 vast:ntp                0.0.0.0:*
udp        0      0 localhost:ntp           0.0.0.0:*
udp        0      0 0.0.0.0:ntp             0.0.0.0:*
udp        0      0 0.0.0.0:42264           0.0.0.0:*
udp6       0      0 [::]:26062              [::]:*
udp6       0      0 [::]:ntp                [::]:*

```
