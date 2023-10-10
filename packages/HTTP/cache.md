相同的数据缓存到本地。

http 协议的头部有针对缓存的字段

## http 首部

首部分为请求首部和响应首部，并且部分首部两种通用，接下来我们就来学习一部分的常用首部。

### 通用首部字段

**请求报文** 和 **响应报文** 都会使用的首部

| 字段名            | 说明                                     |
| ----------------- | ---------------------------------------- |
| Cache-Control     | 控制缓存的行为                           |
| Connection        | 浏览器想要优先使用的连接类型，连接的管理 |
| Date              | 创建报文日期时间                         |
| Pragma            | 报文指令                                 |
| Via               | 代理服务器相关信息                       |
| Transfer-Encoding | 传输编码方式                             |
| Upgrade           | 要求客户端升级协议                       |
| Warning           | 在内容中可能存在错误，错误通知           |

## `Cache-Control`操作缓存的工作机制

当服务器返回`HTTP响应头`给浏览器 浏览器通过响应头中`Cache-Control` 来设置是否是否缓存该资源

> Cache-Control: private, no-cache, no-store, proxy-revalidate, >no-transform

- Cache-Control: no-cache
- Cache-Control: private,max-age=0,no-cache

| 指令     | 参数 | 说明                                           |
| -------- | ---- | ---------------------------------------------- |
| no-cache |      | 可以在服务器缓存，再次验证一下，才可以使用缓存 |
| no-store | 无   | 彻底的没有缓存                                 |
| max-age  |      | 到期。响应的最大 age 值                        |

总结：是客户端缓存，直接从缓存中去读数据，没有去服务端读取

- connection 控制不再转发给代理 管理持久连接

  |            |            |                                                   |
  | ---------- | ---------- | ------------------------------------------------- |
  | Connection | Keep-Alive | 在旧版的 http 协议上维持持久连接，增加 Keep-Alive |
  |            |            |                                                   |
  |            |            |                                                   |

- Date

  ```
  Date: Tue, 15 Dec 2020 05:32:53 GMT
  ```
