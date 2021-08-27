<author-info date="1630051295494"></author-info>

# 前端获取 IP 地址

前端无法获取用户 IP，但是能通过后端接口实现，这里借助搜狐的 api 获取 ip 信息。

```js
async function getIp() {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = "http://pv.sohu.com/cityjson?ie=utf-8";
    script.onload = function() {
      resolve(returnCitySN);
      document.body.removeChild(script);
    };
    script.onerror = function(err) {
      reject(err);
    };
    document.body.appendChild(script);
  });
}

getIp().then((res) => {
  console.log(res);
});
```
