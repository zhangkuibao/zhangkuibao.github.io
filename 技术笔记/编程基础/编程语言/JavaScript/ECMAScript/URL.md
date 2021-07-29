# URL

<author-info date="{docsify-updated}"> </author-info>

URL 接口用于解析，构造，规范化和编码 URLs。

一个完整的 url 包括：`{协议}://{用户名}:{密码}@{主机名（域名）}:{端口}#{hash}?{query}`

## 构造器

可以使用 new URL() 来构建一个 URL 对象。

## 属性

一个 url 对象 `new URL('http://zkb:123@localhost:3000/zhangkb?name=zkb&age=18#/escript/url')`，包含如下属性。

[URLSearchParams 对象](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams)

```js
URL =  {
    hash: "#/escript/url"       // 跟在 # 之后的字符串
    host: "localhost:3000"      // 域名+端口
    hostname: "localhost"       // 仅域名
    href: "http://zkb:123@localhost:3000/#/escript/url"     // 完整 url
    origin: "http://localhost:3000" // 协议+域名+端口
    password: "123"             // 密码
    pathname: "/zhangkb"        // 资源路径
    port: "3000"
    protocol: "http:"
    search: "?name=zkb&age=18"  // 跟在 ? 后的参数字符串，需要在 # 之前
    searchParams: URLSearchParams {}    // search 中键值对的二维数组迭代器，[..searchParams] 可得到 [["name", "zkb"],["age", "18"]]
    username: "zkb"
}
```

## 静态方法

URL 类包含两个静态方法。

### createObjectURL(object)

> 注意：此特性在 Service Worker 中不可用，因为它有可能导致内存泄漏。

根据参数创建一个唯一的 blob 链接（该链接协议为以 blob:，后跟唯一标识浏览器中的对象的掩码）。通常用来根据图片的二进制数据来创建图片。

```js
const response = await fetch("flower.jpg");
const myBlob = await response.blob();
const objectURL = URL.createObjectURL(myBlob);

const myImage = document.querySelector("img");
myImage.src = objectURL;
```

- 参数

  参数可以是 File 对象、Blob 对象或者 MediaSource 对象。​

- blob 链接的生命周期

  这个新的 URL 对象表示指定的 File 对象或 Blob 对象。它的生命周期和创建它的窗口中的 document 绑定。

- 内存管理

  在每次调用 createObjectURL() 方法时，都会创建一个新的 URL 对象，即使你已经用相同的对象作为参数创建过。

  当不再需要这些 URL 对象时，每个对象必须通过调用 URL.revokeObjectURL() 方法来释放。

  浏览器在 document 卸载的时候，会自动释放它们。

### revokeObjectURL()

销毁之前使用 URL.createObjectURL()方法创建的 URL 实例。
