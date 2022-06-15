---
date: 2021-09-09 14:24:57
title: blob 转 base64
tags:
  - myGit
  - learning-Notes
  - document
  - 技术
  - 功能实现
---

```js
/** blob转base64 */
function blobToBase64(blob) {
  if (blob instanceof Blob) {
    // 判断是否为blob类型
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        resolve(e.target.result);
      };
      fileReader.readAsDataURL(blob);
      fileReader.onerror = () => {
        reject(new Error("blobToBase64 error"));
      };
    });
  }
}
```
