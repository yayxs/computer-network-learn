### http 请求传输压缩

请求头中已经含有 Accept-Encoding: gzip, deflate, br

```json

POST /xxxx HTTP/1.1
Accept: application/json, text/plain, */*
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9
Authorization: eyJhbGciOiJIUzUxMiJ9.eyJhY2NvdW50SWQiOjE2NzgzNDczOTc0NzkxNDU0NzQsInN1YiI6IjE3NjM4MjYyMjgzIiwiZXhwIjoxNjkzMTg3NzA5LCJpYXQiOjE2OTI1ODI5MDl9.bJ1ybOkycHgt_t6V_1zUbENIkUmv1AMcxz4BjrI9ZumldrpqiyVc6khBFbXvmMmouyZXt4RmTuVCsCjTVHbBYA
Connection: keep-alive
Content-Length: 71
Content-Type: application/json
Cookie: _ga=GA1.1.663650815.1678757703
Host: localhost:8090
Origin: http://localhost:8090
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1
```

1. 浏览器发送 Http request 给 Web 服务器, request 中有 Accept-Encoding: gzip, deflate。 (告诉服务器， 浏览器支持 gzip 压缩)
2. Web 服务器接到 request 后， 生成原始的 Response, 其中有原始的 Content-Type 和 Content-Length。
3. Web 服务器通过 Gzip，来对 Response 进行编码， 编码后 header 中有 Content-Type 和 Content-Length(压缩后的大小)， 并且增加了 Content-Encoding:gzip. 然后把 Response 发送给浏览器。
4. 浏览器接到 Response 后，根据 Content-Encoding:gzip 来对 Response 进行解码。 获取到原始 response 后， 然后显示出网页。

支持 gzip 的浏览器范围最广，使用 gzip 的压缩效果最佳。
