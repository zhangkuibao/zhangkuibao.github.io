---
title: 【JavaScript】上传图片前查看缩略图
tags:
  - JavaScript
---

## 思路

选择上传文件后可以获取到上传文件的 file 对象，读取 file 后转化为 blob 链接进行展示。

## 要点

File 接口基于 Blob，继承了 blob 的功能并将其扩展使其支持用户系统上的文件。

将 file 转化为 blob 链接有两种方式：

1. URL.createObjectURL()

   ```js
   img.src = URL.createObjectURL(file);
   document.body.appendChild(img);
   ```

2. FileReader()

   ```js
   var reader = new FileReader();
   reader.onload = (function (aImg) {
     return function (e) {
       aImg.src = e.target.result;
       document.body.appendChild(aImg);
     };
   })(img);
   reader.readAsDataURL(file);
   ```

## 实现代码

```html
<input type="file" id="fileInput" />
```

```js
fileInput.addEventListener("change", (e) => {
  handleFiles(onlyFile.files[0]);
});

function handleFiles(file) {
  var imageType = /^image\//;
  if (!imageType.test(file.type)) {
    return;
  }
  var img = document.createElement("img");
  img.src = URL.createObjectURL(file);
  document.body.appendChild(img);
  // var reader = new FileReader();
  // reader.onload = (function (aImg) {
  //   return function (e) {
  //     aImg.src = e.target.result;
  //     document.body.appendChild(aImg);
  //   };
  // })(img);
  // reader.readAsDataURL(file);
}
```
