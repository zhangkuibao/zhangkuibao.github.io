# FileReader



FileReader 对象允许 Web 应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 File 或 Blob 对象指定要读取的文件或数据。

其中 File 对象可以是来自用户在一个`<input>`元素上选择文件后返回的 FileList 对象,也可以来自拖放操作生成的 DataTransfer 对象,还可以是来自在一个 HTMLCanvasElement 上执行 mozGetAsFile()方法后返回结果。

## 构造函数

FileReader()

返回一个新构造的 FileReader。

## 实例属性

- FileReader.error

  表示在读取文件时发生的错误 。

- FileReader.readyState

  表示 FileReader 状态的数字。取值如下：

  - 0：常量名为EMPTY，表示还没有加载任何数据。
  - 1：常量名为LOADING，表示数据正在被加载。
  - 2：常量名为DONE，表示已完成全部的读取请求。

- FileReader.result

  文件的内容。该属性仅在读取操作完成后才有效，数据的格式取决于使用哪个方法来启动读取操作。

## 事件

事件通过 addEventListener() 绑定在 FileReader 实例上，如：

```js
var reader = new FileReader();
reader.addEventListener("loadend", function () {});
```

- FileReader.onabort

  读取操作被中断时触发。

- FileReader.onerror

  读取操作发生错误时触发。

- FileReader.onload

  读取操作完成时触发。

## 方法

- FileReader.abort()

  中止读取操作。在返回时，readyState 属性为 DONE。

- FileReader.readAsArrayBuffer()

  开始读取指定的 Blob 中的内容, 一旦完成, result 属性中保存的将是被读取文件的 ArrayBuffer 数据对象.

- FileReader.readAsBinaryString()

  开始读取指定的 Blob 中的内容。一旦完成，result 属性中将包含所读取文件的原始二进制数据。

- FileReader.readAsDataURL()

  开始读取指定的 Blob 中的内容。一旦完成，result 属性中将包含一个 data: URL 格式的 Base64 字符串以表示所读取文件的内容。

- FileReader.readAsText()

  开始读取指定的 Blob 中的内容。一旦完成，result 属性中将包含一个字符串以表示所读取的文件内容。

## 参考

[FileReader](https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader)
