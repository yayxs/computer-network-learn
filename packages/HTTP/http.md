### `HTTP`的含义

http `hyperText Transfer Protocol ` 超文本传输协议。

超文本
传输
协议

是双向协议

超文本 文字 图片 视频 超链接

### 常见字段

| 常见的字段                                    | 解释                                      |
| --------------------------------------------- | ----------------------------------------- |
| host                                          | Host: www.baidu.com 域名 指定服务器的域名 |
| Content-Length: 600                           | 本次回应的数据长度                        |
| Connection: keep-alive                        | 长链接                                    |
| Content-Type: application/json; charset=utf-8 | 本次数据什么格式                          |
| Content-Encoding:gzip                         | 服务器返回的数据使用了什么压缩格式        |

## http/1.1 协议

本身是无状态的，后来引入 cookie 技术，用来管理状态。主要通过在**请求** 和 **响应**的报文中写入 COOKIE

大体流程

1.  响应报文内有个叫 Set-Cookie 首部字段信息 通知客户端保存
2.  发送请求时在请求报文中加入 Cookie 值
3.  服务端检查是哪个客户端发的连接请求

### in `MDN`

> **HTTP** is a [protocol](https://developer.mozilla.org/en-US/docs/Glossary/protocol) which allows the fetching of resources, such as HTML documents. It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser. A complete document is reconstructed from the different sub-documents fetched, for instance text, layout description, images, videos, scripts, and more.

![](https://mdn.mozillademos.org/files/13677/Fetching_a_page.png)

### in `RFC`

[https://tools.ietf.org/html/rfc7231](https://tools.ietf.org/html/rfc7231)

> ```
>  The Hypertext Transfer Protocol (HTTP) is a stateless application-
>   level protocol for distributed, collaborative, hypertext information
>   systems.  This document defines the semantics of HTTP/1.1 messages,
>   as expressed by request methods, request header fields, response
>   status codes, and response header fields, along with the payload of
>   messages (metadata and body content) and mechanisms for content
>   negotiation.
> ```

## 谈谈对`http`的理解及基本结构

肯定是从客户端开始建立通信,是不保存的协议，**无状态的 ** **不做持久化处理** **持久连接** （为了减少重复连接断开的开销）

### 缺点

- 通信使用明文 不加密 内容可能被窃听
- 不验证通信方身份
- 无法证明报文的完整性
- 存在安全漏洞

## `http`与`https`协议的基本概念、区别、工作原理

通过通信加密，`http` 协议中是没有什么加密机制 的，与`SSL` 建立通信组合使用 便有个一个`https`

- http 超文本传输协议
- https 超文本传输安全协议
  - 因为和 ssl 通信，会适当变慢，加密解密消耗资源
  - 购买证书要花钱

ssl 提供加密处理，证书手段，第三方机构颁发 md5 SHA-1 散列校验，https 不是一个新的协议

`ssl` 是应用最为广泛的安全技术

## HTTP2 和 HTTP1 有什么区别

- http2.0 一直正在推进
  - 速度体验
  - 多路复用
  - TLS 义务化
  - 协商
  - 客户端
  - 流量控制
  - websocket

## `HTTP`的缺点

首选谈谈 HTTP 的缺点（安全方面的）

- 明文传输 不加密
- 不验证通信双方的身份 遭遇伪装
- 无法验证报文的完整性 会被篡改

## 讲讲 http 的缓存机制吧，强缓存，协商缓存？

## 谈谈`http` 的`报文`

用于 http 协议交互的信息被称为 `http`报文，大体分为`请求行` `状态行` `首部字段` `其他` 。具有一定的语义化

### 内容编码

常见的内容编码

- gzip
- compress
- deflate
- identity

### `mime`机制

- multipart/form-data 表单文件上传使用
- multipart/byteranges 状态码 206

使用对象的集合时候需要在首部字段增加`Content-type`

## `HTTP`的响应报文由哪几部分组成

- http 的版本号 状态码 原因短语
- 响应的日期
- 首部字段
- 资源实体的主题

```
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  }
]
```

基本是由`协议版本` ` 状态码` `原因短语` 可选的响应首部字段 主体

```
HTTP/1.1 200 OK （200代表状态OK）
Date: Tue, 15 Dec 2020 02:38:10 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 600
Connection: keep-alive
Set-Cookie: __cfduid=df6eaa5fb405d992b43fb3487389a612c1607999890; expires=Thu, 14-Jan-21 02:38:10 GMT; path=/; domain=.typicode.com; HttpOnly; SameSite=Lax
X-Powered-By: Express
X-Ratelimit-Limit: 1000
X-Ratelimit-Remaining: 999
X-Ratelimit-Reset: 1607999936
Vary: Origin, Accept-Encoding
Access-Control-Allow-Credentials: true
Cache-Control: max-age=43200
Pragma: no-cache
Expires: -1
X-Total-Count: 100
Access-Control-Expose-Headers: X-Total-Count
X-Content-Type-Options: nosniff
Etag: W/"258-/AdFG/pwMUveUGKZ3vuwGAJYftA"
Via: 1.1 vegur
CF-Cache-Status: MISS
Accept-Ranges: bytes
cf-request-id: 0705dc3aa600004162e00fb000000001
Expect-CT: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
Report-To: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report?s=LF6llou9w6BCDOdXnG%2Bu%2FTBQIwoXHRLIaYfrZi46L27KPx%2Br8dWsOVqInaI%2F5Guytck02ilIv5E%2BgT5g1o1zL%2FMQtQCR4SNSjAsYgdkSnDXEmpsbEWMnTFQu5Eqf"}],"group":"cf-nel","max_age":604800}
NEL: {"report_to":"cf-nel","max_age":604800}
Server: cloudflare
CF-RAY: 601cc9710ca44162-HAM

[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  }
]
```

## HTTP 头部

### 请求首部字段

请求首部字段是从客户端发送请求报文中所使用的字段

| 请求首部            | 作用                                           |
| ------------------- | ---------------------------------------------- |
| Accept              | 能正确接收的媒体类型，用户代理可处理的媒体类型 |
| Accept-Charset      | 能正确接收的字符集                             |
| Accept-Encoding     | 能正确接收的编码格式列表                       |
| Accept-Language     | 能正确接收的语言列表                           |
| Expect              | 期待服务端的指定行为                           |
| From                | 请求方邮箱地址                                 |
| Host                | 服务器的域名                                   |
| If-Match            | 两端资源标记比较                               |
| If-Modified-Since   | 本地资源未修改返回 304（比较时间）             |
| If-None-Match       | 本地资源未修改返回 304（比较标记）             |
| User-Agent          | HTTP 客户端程序的信息                          |
| Max-Forwards        | 限制可被代理及网关转发的次数                   |
| Proxy-Authorization | 向代理服务器发送验证信息                       |
| Range               | 请求某个内容的一部分                           |
| Referer             | 表示浏览器所访问的前一个页面                   |
| TE                  | 传输编码方式                                   |

- Accept

  ```
  Accept: application/json, text/plain, */*
  - 文本文件
  text/html text/plain text/css application/xhtml+xml application/xml
  - 图片文件
  image/jpeg image/gif imag/png
  - 视频文件
  video/mpeg video/quicktime
  - 二进制文件
  application、octet-stream application/zip
  ```

### 响应首部字段

| 响应首部           | 作用                       |
| ------------------ | -------------------------- |
| Accept-Ranges      | 是否支持某些种类的范围     |
| Age                | 资源在代理缓存中存在的时间 |
| ETag               | 资源标识                   |
| Location           | 客户端重定向到某个 URL     |
| Proxy-Authenticate | 向代理服务器发送验证信息   |
| Server             | 服务器名字                 |
| WWW-Authenticate   | 获取资源需要的验证信息     |

### 实体首部字段

| 实体首部         | 作用                             |
| ---------------- | -------------------------------- |
| Allow            | 资源的正确请求方式               |
| Content-Encoding | 内容的编码格式                   |
| Content-Language | 内容使用的语言                   |
| Content-Length   | request body 长度                |
| Content-Location | 返回数据的备用地址               |
| Content-MD5      | Base64 加密格式的内容 MD5 检验值 |
| Content-Range    | 内容的位置范围                   |
| Content-Type     | 内容的媒体类型,对象类型          |
| Expires          | 内容的过期时间                   |
| Last_modified    | 内容的最后修改时间               |

## `http`认证方式

- BASIC 基本认证
- DIGEST 摘要认证
- SSL 客户端认证
- FormBase 基于表单认证

## 实现简单的`web` 服务

```js
const http = require('http')

http
  .createServer((req, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    // 将HTTP响应的HTML内容写入response:
    response.end('<h1>Hello world!</h1>')
  })
  .listen(2222)
```

## 客户端

```sh
curl -v www.baidu.com
```

```shell
* Rebuilt URL to: www.baidu.com/
*   Trying 110.242.68.3...
* TCP_NODELAY set
* Connected to www.baidu.com (110.242.68.3) port 80 (#0)
> GET / HTTP/1.1
> Host: www.baidu.com
> User-Agent: curl/7.54.0
> Accept: */*
>
< HTTP/1.1 200 OK
< Accept-Ranges: bytes
< Cache-Control: private, no-cache, no-store, proxy-revalidate, no-transform
< Connection: keep-alive
< Content-Length: 2381
< Content-Type: text/html
< Date: Mon, 08 Feb 2021 14:59:46 GMT
< Etag: "588604c1-94d"
< Last-Modified: Mon, 23 Jan 2017 13:27:29 GMT
< Pragma: no-cache
< Server: bfe/1.0.8.18
< Set-Cookie: BDORZ=27315; max-age=86400; domain=.baidu.com; path=/
<
<!DOCTYPE html>
<!--STATUS OK--><html> <head><meta http-equiv=content-type content=text/html;charset=utf-8><meta http-equiv=X-UA-Compatible content=IE=Edge><meta content=always name=referrer><link rel=stylesheet type=text/css href=http://s1.bdstatic.com/r/www/cache/bdorz/baidu.min.css><title>百度一下，你就知道</title></head> <body link=#0000cc> <div id=wrapper> <div id=head> <div class=head_wrapper> <div class=s_form> <div class=s_form_wrapper> <div id=lg> <img hidefocus=true src=//www.baidu.com/img/bd_logo1.png width=270 height=129> </div> <form id=form name=f action=//www.baidu.com/s class=fm> <input type=hidden name=bdorz_come value=1> <input type=hidden name=ie value=utf-8> <input type=hidden name=f value=8> <input type=hidden name=rsv_bp value=1> <input type=hidden name=rsv_idx value=1> <input type=hidden name=tn value=baidu><span class="bg s_ipt_wr"><input id=kw name=wd class=s_ipt value maxlength=255 autocomplete=off autofocus></span><span class="bg s_btn_wr"><input type=submit id=su value=百度一下 class="bg s_btn"></span> </form> </div> </div> <div id=u1> <a href=http://news.baidu.com name=tj_trnews class=mnav>新闻</a> <a href=http://www.hao123.com name=tj_trhao123 class=mnav>hao123</a> <a href=http://map.baidu.com name=tj_trmap class=mnav>地图</a> <a href=http://v.baidu.com name=tj_trvideo class=mnav>视频</a> <a href=http://tieba.baidu.com name=tj_trtieba class=mnav>贴吧</a> <noscript> <a href=http://www.baidu.com/bdorz/login.gif?login&amp;tpl=mn&amp;u=http%3A%2F%2Fwww.baidu.com%2f%3fbdorz_come%3d1 name=tj_login class=lb>登录</a> </noscript> <script>document.write('<a href="http://www.baidu.com/bdorz/login.gif?login&tpl=mn&u='+ encodeURIComponent(window.location.href+ (window.location.search === "" ? "?" : "&")+ "bdorz_come=1")+ '" name="tj_login" class="lb">登录</a>');</script> <a href=//www.baidu.com/more/ name=tj_briicon class=bri style="display: block;">更多产品</a> </div> </div> </div> <div id=ftCon> <div id=ftConw> <p id=lh> <a href=http://home.baidu.com>关于百度</a> <a href=http://ir.baidu.com>About Baidu</a> </p> <p id=cp>&copy;2017&nbsp;Baidu&nbsp;<a href=http://www.baidu.com/duty/>使用百度前必读</a>&nbsp; <a href=http://jianyi.baidu.com/ class=cp-feedback>意见反馈</a>&nbsp;京ICP证030173号&nbsp; <img src=//www.baidu.com/img/gs.gif> </p> </div> </div> </div> </body> </html>

```

```
  Frame 6: 130 bytes on wire (1040 bits), 130 bytes captured (1040 bits) on interface \Device\NPF\_{BF024FDE-2036-4B1E-B464-CCC828E51D70}, id 0
  Ethernet II, Src: LCFCHeFe*5b:3e:50 (8c:8c:aa:5b:3e:50), Dst: RuijieNe_d0:b5:ed (58:69:6c:d0:b5:ed)
  Internet Protocol Version 4, Src: 10.100.8.18, Dst: 220.181.38.149
  Transmission Control Protocol, Src Port: 10457, Dst Port: 80, Seq: 1, Ack: 1, Len: 76
  Hypertext Transfer Protocol
  GET / HTTP/1.1\r\n 起始行 请求方法 请求 URL 协议版本
  Host: www.baidu.com\r\n 首部
  User-Agent: curl/8.0.1\r\n 首部
  Accept: */\_\r\n 首部
  \r\n
  [Full request URI: http://www.baidu.com/]
  [HTTP request 1/1]
  [Response in frame: 10]

```
