## 经典的分层模型

- 分层管理：应用层、传输层、网络层、数据链路层
  应用层 Application Layer:http dns smtp ftp
  传输层 Transport Layer:tcp udp
  网络互连层 Internet Layer:IP
  网络访问层

  - 应用层：决定向用户提供应用服务时的通信活动 为应用软件提供很多服务 （HTTP）
    - 构建于`TCP/IP` 之上的
    - 屏蔽网络传输的相关的细节
  - 传输层：端到端的可靠服务，两台计算机之间的数据传输 （TCPIP 协议 UDP）
    - 向高层屏蔽了下层数据通信的细节
  - 网络层：处理网络上的数据包，数据结点之间逻辑链路
  - 数据链路层：链接网络的硬件部分，在通讯实体之间建立数据链路的链接
  - 物理层：电脑的硬件、物理设备如何传输设备

  ![](https://cdn.jsdelivr.net/gh/yayxs/Pics/dontKownJS/Snipaste_2020-11-29_12-51-54.png)
