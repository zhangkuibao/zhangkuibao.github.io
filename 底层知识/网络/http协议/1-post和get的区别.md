## post和get的实质
HTTP是基于TCP/IP的关于数据如何在万维网中如何通信的协议。所以GET和POST的底层也是TCP/IP，也就是说，GET/POST都是TCP链接。GET和POST能做的事情是一样一样的。你要给GET加上request request body，给POST带上url参数，技术上是完全行的通的。 

## post和get的区别

### 缓存

GET 会被缓存，而post不会

当浏览器发送一个 get 请求，会返回数据并把数据缓存下来，这次的响应状态码是200，再次请求时，浏览器会直接从缓存中取出数据而不会真正的发送请求到服务器，此时的响应状态码是304。

可以在get请求后面加上服务端不会处理的参数如时间戳来保证每个请求的独立性从而正确获取数据。

### 传参方式

参数有两种传递方式：querystring 即直接拼接在 url 后面，request body 将请求数据放在请求体中。

querystring 只支持 urlencode 编码，request body支持多种编码

可以在 get 方法中使用 request body 方式传参也可以给 post 方法通过 querystring 方式传参，具体处理方式得看服务端是如何实现的

在 post 方式中添加 querystring 一定是可以接收的到，但是在 get 方式中加 request body 参数就不一定能成功接收到了。

### 参数长度

querystring 有 长度限制。http 协议对于 url 的长度没有限制，对 url 的长度限制来自浏览器及服务器（防止过长url造成的服务器资源损耗）

放在 request body 中的请求参数没有长度限制。

### 安全性

http 请求都是明文传输，所以两种传参方式其实都不安全，区别在于 post 请求参数不会在 url 上被劫持