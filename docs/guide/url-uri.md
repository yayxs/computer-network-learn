## `URL` vs `URI ` `URN`

- `url`统一资源定位符 指定文档所在地址的 URL **网页地址** 输入的网页地址
- `uri` 统一资源标识符
  - u 协议方案 ftp http mailto telnet file
- **url 是 uri 的子集**

```
https://www.baidu.com/s?ie=utf-8&wd=vue&tn=40025628_10_hao_pg
```

- https:// 协议方案名 /
- www.baidu.com 服务器地址
- 443 服务器端口号(是不方便记忆的)

- wd= 查询字符串

### url

```js
http://user:pass@host.com:80/path?query=string#hash
```

- path 路由
- Hash

### URN

永久统一资源定位符
