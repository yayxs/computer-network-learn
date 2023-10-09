### 端口被什么进程占用

```sh
[root@VM-0-15-centos /]# sudo netstat -ltpn | grep :22
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      1040/sshd
tcp6       0      0 :::22                   :::*                    LISTEN      1040/sshd
```

```sh

[root@VM-0-15-centos /]# sudo lsof -n -P -i:22
COMMAND   PID USER   FD   TYPE    DEVICE SIZE/OFF NODE NAME
sshd     1040 root    3u  IPv4     16589      0t0  TCP *:22 (LISTEN)
sshd     1040 root    4u  IPv6     16591      0t0  TCP *:22 (LISTEN)
sshd    11229 root    3u  IPv4 440347839      0t0  TCP 172.17.0.15:22->106.55.203.200:46890 (ESTABLISHED)
[root@VM-0-15-centos /]#
```

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
