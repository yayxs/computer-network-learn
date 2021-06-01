## `WebSocket`和`Ajax`的区别是什么，怎么实现

### Ajax

异步 js 与 xml 有效利用 js 和 dom 局部 web 页面的替换异步通信手段，只更新部分页面 **XMLHttpRequest** 存在大量请求发生

### websocket

实现的一套新协议以及 api,作为 html5 的一部分，可以互相发送数据，发起方还是客户端

- 推送功能 服务器直接发送数据
- 减少通信量 一直保持连接状态 减少开销 通信量减少‘
- `Upgrade` websocket

## websocket 的应用场景有哪些

Web Socket（套接字）的目标是通过一个长时连接实现与服务器全双工、双向的通信。不能再使用 http://或 https://，而要使用 ws://和 wss://。前者是不安全的连接，后者是安全连接
