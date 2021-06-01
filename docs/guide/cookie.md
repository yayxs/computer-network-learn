## `cookie`状态管理

正是因为`http` 是无状态的，存储的是会话信息，**通过在请求和响应\* ** 的报文中

<!-- ![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9cb657f0572242659bba67b4b75fe16b~tplv-k3u1fbpfcp-zoom-1.image)

不难发现`cookie` 的组成就是有图片中展示的 几种参数构成的![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/abd5b6d7797e4850a41807197fbf1f4d~tplv-k3u1fbpfcp-zoom-1.image) -->

```
Set-Cookie: __cfduid=df6eaa5fb405d992b43fb3487389a612c1607999890; expires=Thu, 14-Jan-21
```

通知客户端保存`Cookie`

| 首部字段名 | 说明                             | 首部类型     |
| ---------- | -------------------------------- | ------------ |
| Set-Cookie | 开始状态管理所使用的 Cookie 信息 | 响应首部字段 |
| Cookie     | 服务器接收到的 Cookie 信息       | 请求首部字段 |
|            |                                  |              |

**Set-Cookie** 字段的属性

| 属性         | 说明                           |
| ------------ | ------------------------------ |
| NAME=VALUE   | 名称值                         |
| expires=DATE | 有效期                         |
| path=PATH    | 文件目录作为 Cookie 的适用对象 |
| domain=域名  |                                |
| Secure       |                                |
| HttpOnly     | 加以限制                       |

**缺点**

1. 特定域限制

2. 浏览器会限制

3. 不会占用太多磁盘空间

4. 总数大多有限制，超出的话删除之前的，或者随机删除

5. 大小限制 4096 字节

6. 数据不是保存在安全的环境中
