## `HTTP`的请求报文由哪几部分组成

- 请求方法
- 请求的 URI
- http 的版本号
- 可选的请求首部字段
- 内容实体

```
GET https://jsonplaceholder.typicode.com/posts?_offset=1&_limit=2 HTTP/1.1
User-Agent:Fiddler Everywhere
Host:jsonplaceholder.typicode.com
Content-Type:text/plain
(有一个完整的空行)
```
