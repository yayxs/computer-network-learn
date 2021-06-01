const http = require("http");

http
  .createServer((req, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    // 将HTTP响应的HTML内容写入response:
    response.end("<h1>Hello world!</h1>");
  })
  .listen(2222);
