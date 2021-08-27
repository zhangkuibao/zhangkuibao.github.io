<author-info date="1630046046816"></author-info>

```js
    /** blob转base64 */
    blobToBase64(blob) {
        if (blob instanceof Blob) { // 判断是否为blob类型
            return new Promise((resolve, reject) => {
                const fileReader = new FileReader();
                fileReader.onload = (e) => {
                    resolve(e.target.result);
                };
                fileReader.readAsDataURL(blob);
                fileReader.onerror = () => {
                    reject(new Error('blobToBase64 error'));
                };
            });
        }
    }
```