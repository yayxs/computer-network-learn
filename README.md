# Tools
- 抓包工具下载 [Download Wireshark](https://www.wireshark.org/download.html)
  
## `HTTP`的含义
http `hyperText Transfer Protocol ` 超文本传输协议。

### in `MDN`

>**HTTP** is a [protocol](https://developer.mozilla.org/en-US/docs/Glossary/protocol) which allows the fetching of resources, such as HTML documents. It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser. A complete document is reconstructed from the different sub-documents fetched, for instance text, layout description, images, videos, scripts, and more.

![](https://mdn.mozillademos.org/files/13677/Fetching_a_page.png)

### in `RFC`

 [https://tools.ietf.org/html/rfc7231](https://tools.ietf.org/html/rfc7231)

>```
>  The Hypertext Transfer Protocol (HTTP) is a stateless application-
>   level protocol for distributed, collaborative, hypertext information
>   systems.  This document defines the semantics of HTTP/1.1 messages,
>   as expressed by request methods, request header fields, response
>   status codes, and response header fields, along with the payload of
>   messages (metadata and body content) and mechanisms for content
>   negotiation.
>```
>

## `TCP/IP 协议族`指的是

指的是在 IP 协议通信过程中用到的协议的统称

## `TCP` 连接的特点

- 面向连接	
  - 通过`握手` 建立逻辑连接，结束通信通过`四次挥手`来断开
  - `三次握手` 三次数据交换 （通过握手协商通信的起始序列号、窗口缩放等）
- 传输是**可靠的**
  - 对包提供校验和
  - 包包含序列号
  - 超时重传
  - 流量控制

- 面向字节流的协议