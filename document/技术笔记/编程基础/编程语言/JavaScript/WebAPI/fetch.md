<author-info date="1636365523542"></author-info>

# fetch API

fetch 用于发送 http 请求，比 XMLHttpRequest 更强大且更灵活。

## fetch 与 XMLHttpRequest 区别

fetch() 通过数据流（stream 对象）处理对象，可以分块读取，有利于提高网站性能，减少内存占用，对于请求大文件或者网速慢的场景相当有用。

XMLHttpRequest 不支持数据流，所有数据必须放在缓存中，不支持分块读取，必须等到全部拿到后，再一次性吐出来。

## fetch 封装

### post

```js
function request(url, params) {
  return fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  })
    .then(async (res) => {
      return await res.json();
    })
    .catch(() => {
      return null;
    });
}
```

### get

```js
function get() {
  return fetch(`${HOST_DOMAIN}/generateConfigure/getCompanyMap`)
    .then(async (res) => {
      return await res.json();
    })
    .catch(() => {
      return null;
    });
}
```

## fetch 用法

### 发送请求

fetch() 方法接收两个参数，一参为 URL，二参是配置对象

```js
fetch(url, optionObj);
```

#### post 请求传参

```js
fetch(`/generateConfigure/submit`, {
  method: "post",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(params),
});
```

### Response 对象

fetch()请求成功以后，得到的是一个 Response 对象。它对应服务器的 HTTP 回应。

- Response.headers

指向一个 Headers 对象，对应 HTTP 回应的所有请求头，是一个迭代器对象。

可以用 response.headers.get() 获取 header 中的某个值。

### 读取内容

Response 对象根据服务器返回的不同类型的数据，提供了不同的读取方法。

- response.text()：得到文本字符串，比如 HTML 文件。
- response.json()：得到 JSON 对象。
- response.formData()：得到 FormData 表单对象，主要用在 Service Worker 里面，拦截用户提交的表单，修改某些数据以后，再提交给服务器。
- response.blob()：得到二进制 Blob 对象，用于获取二进制文件。

  ```js
  const response = await fetch("flower.jpg");
  const myBlob = await response.blob();
  const objectURL = URL.createObjectURL(myBlob);

  const myImage = document.querySelector("img");
  myImage.src = objectURL;
  ```

- response.arrayBuffer()：得到二进制 ArrayBuffer 对象，主要用于获取流媒体文件。

  ```js
  const audioCtx = new window.AudioContext();
  const source = audioCtx.createBufferSource();

  const response = await fetch("song.ogg");
  const buffer = await response.arrayBuffer();

  const decodeData = await audioCtx.decodeAudioData(buffer);
  source.buffer = buffer;
  source.connect(audioCtx.destination);
  source.loop = true;
  ```

Stream 对象只能读取一次，读取完就没了，这意味着上述方法只能使用一个，如果要多次读取可以使用 Response.clone() 将 Stream 克隆一份。

### 判断请求是否成功

fetch()发出请求以后，只有网络错误，或者无法连接时，fetch()才会报错，其他情况都不会报错，而是认为请求成功。

可以通过 Response.status 或 Response.ok 两个属性判断请求是否成功：

```js
if (response.status === 200) {
  // 请求成功
} else {
  // 请求失败
}

// or

if (response.ok) {
  // 请求成功
} else {
  // 请求失败
}
```

### 取消 featch() 请求

fetch()请求发送以后，如果中途想要取消，需要使用 AbortController 对象。

```js
let controller = new AbortController();
let signal = controller.signal;

fetch(url, {
  signal: controller.signal,
});

signal.addEventListener("abort", () => console.log("abort!"));

controller.abort(); // 取消

console.log(signal.aborted); // true
```

### fetch() 可配置项

注意，有些标头不能通过 headers 属性设置，比如 Content-Length、Cookie、Host 等等。它们是由浏览器自动生成，无法修改。

```js
const response = fetch(url, {
  method: "GET",
  headers: {
    "Content-Type": "text/plain;charset=UTF-8",
  },
  body: undefined,
  referrer: "about:client",
  referrerPolicy: "no-referrer-when-downgrade",
  mode: "cors",
  credentials: "same-origin",
  cache: "default",
  redirect: "follow",
  integrity: "",
  keepalive: false,
  signal: undefined,
});
```

#### cache

cache 属性指定如何处理缓存。可能的取值如下：

- default：默认值，先在缓存里面寻找匹配的请求。
- no-store：直接请求远程服务器，并且不更新缓存。
- reload：直接请求远程服务器，并且更新缓存。
- no-cache：将服务器资源跟本地缓存进行比较，有新的版本才使用服务器资源，否则使用缓存。
- force-cache：缓存优先，只有不存在缓存的情况下，才请求远程服务器。
- only-if-cached：只检查缓存，如果缓存里面不存在，将返回 504 错误。

#### mode

mode 属性指定请求的模式。可能的取值如下：

- cors：默认值，允许跨域请求。
- same-origin：只允许同源请求。
- no-cors：请求方法只限于 GET、POST 和 HEAD，并且只能使用有限的几个简单标头，不能添加跨域的复杂标头，相当于提交表单所能发出的请求。

#### credentials

credentials 属性指定是否发送 Cookie。可能的取值如下：

- same-origin：默认值，同源请求时发送 Cookie，跨域请求时不发送。
- include：不管同源请求，还是跨域请求，一律发送 Cookie。
- omit：一律不发送。

跨域请求发送 Cookie，需要将 credentials 属性设为 include。

#### signal

signal 属性指定一个 AbortSignal 实例，用于取消 fetch()请求。

#### keepalive

keepalive 属性用于页面卸载时，告诉浏览器在后台保持连接，继续发送数据。

一个典型的场景就是，用户离开网页时，脚本向服务器提交一些用户行为的统计信息。这时，如果不用 keepalive 属性，数据可能无法发送，因为浏览器已经把页面卸载了。

```js
window.onunload = function () {
  fetch("/analytics", {
    method: "POST",
    body: "statistics",
    keepalive: true,
  });
};
```

#### redirect

redirect 属性指定 HTTP 跳转的处理方法。可能的取值如下：

- follow：默认值，fetch()跟随 HTTP 跳转。
- error：如果发生跳转，fetch()就报错。
- manual：fetch()不跟随 HTTP 跳转，但是 response.url 属性会指向新的 URL，response.redirected 属性会变为 true，由开发者自己决定后续如何处理跳转。

#### integrity

integrity 属性指定一个哈希值，用于检查 HTTP 回应传回的数据是否等于这个预先设定的哈希值。

比如，下载文件时，检查文件的 SHA-256 哈希值是否相符，确保没有被篡改。

```js
fetch("http://site.com/file", {
  integrity: "sha256-abcdef",
});
```

#### referrerPolicy

referrerPolicy 属性用于设定 Referer 标头的规则。可能的取值如下：

- no-referrer-when-downgrade：默认值，总是发送 Referer 标头，除非从 HTTPS 页面请求 HTTP 资源时不发送。
- no-referrer：不发送 Referer 标头。
- origin：Referer 标头只包含域名，不包含完整的路径。
- origin-when-cross-origin：同源请求 Referer 标头包含完整的路径，跨域请求只包含域名。
- same-origin：跨域请求不发送 Referer，同源请求发送。
- strict-origin：Referer 标头只包含域名，HTTPS 页面请求 HTTP 资源时不发送 Referer 标头。
- strict-origin-when-cross-origin：同源请求时 Referer 标头包含完整路径，跨域请求时只包含域名，HTTPS 页面请求 HTTP 资源时不发送该标头。
- unsafe-url：不管什么情况，总是发送 Referer 标头。

## 参考

[Fetch API 教程](https://www.ruanyifeng.com/blog/2020/12/fetch-tutorial.html)
