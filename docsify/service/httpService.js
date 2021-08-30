const http = require("http");
const fs = require("fs");
const url = require("url");
const opn = require("opn");

async function createServer() {
  //创建服务器
  http
    .createServer(function(request, response) {
      //解析请求，包括文件名
      var pathname = decodeURI(url.parse(request.url).pathname);
      //输出请求的文件名
    //   console.log("Request for " + pathname + "  received.");
      if(pathname === '/') {
        pathname = '/index.html';
      }

      //从文件系统中都去请求的文件内容
      fs.readFile(pathname.substr(1), function(err, data) {
        if (err) {
          // console.log(err);
          response.writeHead(404);
        } else {
          //HTTP 状态码 200 ： OK
          //Content Type:text/plain
          response.writeHead(200);

          //写会相应内容
          response.write(data.toString());
        }
        //发送响应数据
        response.end();
      });
    })
    .listen(8888);
}

createServer().then(res => {
    opn('http://127.0.0.1:8888/')
})

console.log("Server running at http://127.0.0.1:8888/");
