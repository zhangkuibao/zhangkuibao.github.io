<author-info date="1631168697984"></author-info>

# blob 转 base64

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
