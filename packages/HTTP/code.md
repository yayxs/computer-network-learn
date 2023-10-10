[koa 文档中](https://koajs.com/#response)

状态码当客户端向服务器发请求，描述返回的请求结果，实际使用的只有 14 种左右
通过`code`来判断请求的状态(返回结果的 HTTP 状态码)

|     | 类别         | 原因短语           | 常见的      |
| --- | ------------ | ------------------ | ----------- |
| 1xx | 信息状态     | 接收的请求正在处理 |             |
| 2xx | 成功状态     | 正常处理完毕       | 200 204 206 |
| 3xx | 重定向状态   | 附加操作           |             |
| 4xx | 客户端错误   | 服务器无法处理请求 |             |
| 5xx | 服务器端错误 | 服务器处理请求出错 |             |

---

| 状态码 |                       |     |
| ------ | --------------------- | --- |
| 100    | "continue"            |     |
| 101    | "switching protocols" |     |
| 102    | "processing"          |     |

---

| 状态码 |                   |                                      | 使用场景               |
| ------ | ----------------- | ------------------------------------ | ---------------------- |
| 200    | "ok"              | 服务器 daunt 正常处理                |                        |
| 204    | "no content"      | 响应报文没有主体，浏览器的页面不更新 | 客户端不需要发送新信息 |
| 206    | "partial content" | 指定范围的实体内容                   |                        |

- 201 "created"
- 202 "accepted"
- 203 "non-authoritative information"
- 205 "reset content"
- 207 "multi-status"
- 208 "already reported"
- 226 "im used"

---

## 浏览器需要执行某些特殊的处理

- 300 "multiple choices"
- 301 "moved permanently" 永久性重定向 被分配新的 URI
- 302 "found" 临时性重定向 希望用户本次能使用新的 URI 访问 **不是被永久的移动**
- 303 "see other" 客户端应该是`get` 方法获取资源
- 304 "not modified" **和重定向没啥关系** 附带条件请求
- 305 "use proxy"
- 307 "temporary redirect" 临时重定向 不会从 POS 变成 GET
- 308 "permanent redirect"

---

## 客户端错误

- 400 "bad request" 语法错误，需要修改请求的内容
- 401 "unauthorized" 需要认证信息
- 402 "payment required"
- 403 "forbidden" 被服务器拒绝 未获得文件系统的访问授权
- 404 "not found" 没有找打请求资源
- 405 "method not allowed"
- 406 "not acceptable"
- 407 "proxy authentication required"
- 408 "request timeout"
- 409 "conflict"
- 410 "gone"
- 411 "length required"
- 412 "precondition failed"
- 413 "payload too large"
- 414 "uri too long"
- 415 "unsupported media type"
- 416 "range not satisfiable"
- 417 "expectation failed"
- 418 "I'm a teapot"
- 422 "unprocessable entity"
- 423 "locked"
- 424 "failed dependency"
- 426 "upgrade required"
- 428 "precondition required"
- 429 "too many requests"
- 431 "request header fields too large"

---

## 服务器错误

- 500 "internal server error" 存在 bug 服务端执行时错误
- 501 "not implemented"
- 502 "bad gateway"
- 503 "service unavailable" 停机维护
- 504 "gateway timeout"
- 505 "http version not supported"
- 506 "variant also negotiates"
- 507 "insufficient storage"
- 508 "loop detected"
- 510 "not extended"
- 511 "network authentication required"
