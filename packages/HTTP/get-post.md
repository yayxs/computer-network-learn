## `GTE` vs `POST`

### 标准参考

W3school:http://www.w3school.com.cn/tags/html_ref_httpmethods.asp
| 项目 | GET | POST |
| ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 后退按钮/刷新 | 无害 | 数据会被重新提交（浏览器应该告知用户数据会被重新提交）。 |
| 书签 | 可收藏为书签 | 不可收藏为书签 |
| 缓存 | 能被缓存 | 不能缓存 |
| 编码类型 | application/x-www-form-urlencoded | application/x-www-form-urlencoded 或 multipart/form-data。为二进制数据使用多重编码。 |
| 历史 | 参数保留在浏览器历史中。 | 参数保留在浏览器历史中。 |
| 对数据长度的限制 | 是的。当发送数据时，GET 方法向 URL 添加数据；URL 的长度是受限制的（URL 的最大长度是 2048 个字符）。 | 无限制 |
| 对数据类型的限制 | 只允许 ASCII 字符。 | 没有限制。也允许二进制数据。 |
| 安全性 | 与 POST 相比，GET 的安全性较差，因为所发送的数据是 URL 的一部分。在发送密码或其他敏感信息时绝不要使用 GET ！ | POST 比 GET 更安全，因为参数不会被保存在浏览器历史或 web 服务器日志中。 |
| 可见性 | 数据在 URL 中对所有人都是可见的。 | 数据不会显示在 URL 中。 |

### 副作用和幂等的概念

副作用指对服务器上的资源做改变，搜索是无副作用的，注册是副作用的。

幂等指发送 M 和 N 次请求（两者不相同且都大于 1），服务器上资源的状态一致，比如注册 10 个和 11 个帐号是不幂等的，对文章进行更改 10 次和 11 次是幂等的。因为前者是多了一个账号（资源），后者只是更新同一个资源。

在规范的应用场景上说，Get 多用于无副作用，幂等的场景，例如搜索关键字。Post 多用于副作用，不幂等的场景，例如注册。

### 技术上的不同

- Get 请求能缓存，Post 不能
- Post 相对 Get 安全一点点，因为 Get 请求都包含在 URL 里（当然你想写到 body 里也是可以的），且会被浏览器保存历史纪录。Post 不会，但是在抓包的情况下都是一样的。
- URL 有长度限制，会影响 Get 请求，但是这个长度限制是浏览器规定的，不是 RFC 规定的
- Post 支持更多的编码类型且不对数据类型限制

### 报文上的区别

**结论：GET 和 POST 方法没有实质区别，只是报文格式不同。**

GET 和 POST 只是 HTTP 协议中两种请求方式，而 HTTP 协议是基于 TCP/IP 的应用层协议，无论 GET 还是 POST，用的都是同一个传输层协议，所以在传输上，没有区别。

报文格式上，不带参数时，最大区别就是第一行方法名不同

POST 方法请求报文第一行是这样的`POST /products/create HTTP/1.1`

GET 方法请求报文第一行是这样的 `GET /products?name=zs&age=18 HTTP/1.1`

是的，不带参数时他们的区别就仅仅是报文的前几个字符不同而已

带参数时报文的区别呢？ 在约定中，GET 方法的参数应该放在 url 中，POST 方法参数应该放在 body 中

举个例子，如果参数是 `pname='小米9', pprice=3500`

GET 请求方法的报文如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190523105759400.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3l5eHN3dw==,size_16,color_FFFFFF,t_70)

POST 请求方法的报文如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190523105047882.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3l5eHN3dw==,size_16,color_FFFFFF,t_70)

**现在我们知道了两种方法本质上是 TCP 连接，没有差别，也就是说，如果我不按规范来也是可以的。我们可以在 URL 上写参数，然后方法使用 POST；也可以在 Body 写参数，然后方法使用 GET。当然，这需要服务端支持。**

- get 用于向服务器查询某些信息。必要时，需要在 GET 请求的 URL 后面添加查询字符串参数

```js
https://jsonplaceholder.typicode.com/posts?_offset=1&_limit=2
```

- post 用于向服务器发送应该保存的数据。每个 POST 请求都应该在请求体中携带提交的数据，而 GET 请求则不然