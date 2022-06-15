---
title: Blob
tags:
  - myGit
  - learning-Notes
  - document
  - technology
  - JavaScript
  - WebAPI
---

Blob 对象表示一个不可变、原始数据的类文件对象。它的数据可以按文本或二进制的格式进行读取，也可以转换成 ReadableStream 来用于数据操作。

可以使用 Blob() 构造函数将其他非 blob 对象和数据构造成一个 Blob。

File 接口基于 Blob，继承了 blob 的功能并将其扩展使其支持用户系统上的文件。

## 构造函数

Blob(blobParts[, options])

- blobParts 是一个由 ArrayBuffer, ArrayBufferView, Blob, DOMString 等对象构成的 Array ，或者其他类似对象的混合体，它将会被放进 Blob。DOMStrings 会被编码为 UTF-8。

- options 是一个可选的 BlobPropertyBag 字典，它可能会指定如下两个属性：

  - type，默认值为 ""，它代表了将会被放入到 blob 中的数组内容的 MIME 类型。

  - endings，默认值为"transparent"，用于指定包含行结束符\n 的字符串如何被写入。 它是以下两个值中的一个： "native"，代表行结束符会被更改为适合宿主操作系统文件系统的换行符，或者 "transparent"，代表会保持 blob 中保存的结束符不变。

## 属性

- Blob.size

  Blob 对象中所包含数据的大小（字节）。

- Blob.type

  一个字符串，表明该 Blob 对象所包含数据的 MIME 类型。如果类型未知，则该值为空字符串。

## 方法

- Blob.slice([start[, end[, contentType]]])

  返回一个新的 Blob 对象，包含了源 Blob 对象中指定范围内的数据。

- Blob.stream()

  返回一个能读取 blob 内容的 ReadableStream。

- Blob.text()

  返回一个 promise 且包含 blob 所有内容的 UTF-8 格式的 USVString。

- Blob.arrayBuffer()

  返回一个 promise 且包含 blob 所有内容的二进制格式的 ArrayBuffer

## 使用 Blob

### 用 Blob 创建 url

适用 [URL.createObjectURL](/技术笔记/编程基础/编程语言/JavaScript/ECMAScript/URL?id=createobjecturlobject) 可以创建一个临时的 blob 链接，可以像使用普通 URL 那样使用它。

```js
var typedArray = GetTheTypedArraySomehow();
var blob = new Blob([typedArray.buffer], { type: "application/octet-stream" }); // 传入一个合适的 MIME 类型
var url = URL.createObjectURL(blob);
// 会产生一个类似 blob:d3958f5c-0777-0845-9dcf-2cb28783acaf 这样的URL字符串
```

### 用 FileReader 读取 Blob

[FileReader API](技术笔记/编程基础/编程语言/JavaScript/ECMAScript/FileReader)

reader.result 包含被转化为类型数组 typed array 的 blob。

通过使用 FileReader 的其它方法可以把 Blob 读取为字符串或者数据 URL。

```js
var reader = new FileReader();
reader.readAsArrayBuffer(blob);
```

### 用 Response 读取 Blob

[Response](/技术笔记/编程基础/编程语言/JavaScript/ECMAScript/fetch?id=response-对象)对象与 fetch 中的 Response 是同一个对象。

下述代码将 Blob 中的内容读取为文本。

```js
var res = new Response(blob);
var text = res.text();
```
