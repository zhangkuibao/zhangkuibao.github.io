<author-info date="1639039375065"></author-info>

# NodeJS

## 遍历文件夹

```js
const path = require("path");
const fs = require("fs");

const basePath = "D:/work/ruite/src/views/print/report"; // 目标目录

function mapDir(dir, callback, finish) {
  fs.readdir(dir, function (err, files) {
    if (err) {
      console.error(err);
      return;
    }
    files.forEach((filename, index) => {
      let pathname = path.join(dir, filename);
      fs.stat(pathname, (err, stats) => {
        // 读取文件信息
        if (err) {
          console.log("获取文件stats失败");
          return;
        }
        if (stats.isDirectory()) {
          mapDir(pathname, callback, finish);
        } else if (stats.isFile()) {
          if ([".json", ".less"].includes(path.extname(pathname))) {
            // 排除 目录下的 json less 文件
            return;
          }
          callback && callback(filename);

          // 读取文件内容
          // fs.readFile(pathname, (err, data) => {
          //   if (err) {
          //     console.error(err)
          //     return
          //   }
          //   callback && callback(data)
          // })
        }
      });
      if (index === files.length - 1) {
        finish && finish();
      }
    });
  });
}

mapDir(
  basePath,
  function (file) {
    console.log(file.split(".")[0]);
    // 读取文件后的处理
  },
  function () {
    // console.log('xxx文件目录遍历完了')
  }
);
```

## 删除文本文档头部的 bom

windows 在以 utf-8 编码保存 txt 文件时会在头部添加一段 bom 标记, 如果在合并文件时把这个标记也合并会导致出错

bom 标记本身是 uncode 字符,位于文件头部, 个编码对应的二进制字节如下:

Bytes Encoding

FE FF UTF16BE

FF FE UTF16LE

EF BB BF UTF8

```js
function removeBom(pathname) {
  var bin = fs.readFileSync(pathname);

  if (bin[0] === 0xef && bin[1] === 0xbb && bin[2] === 0xbf) {
    bin = bin.slice(3);
  }

  return bin.toString("utf-8");
}
```

## 创建深层目录

`fs` 模块提供的 `fs.mkdir()` 在创建深层目录时如果遇到不存在的路径会报错。

### 回调函数版

```js
const fs = require("fs");
const path = require("path");

function mkdirDeep(dirname, callback = () => {}) {
  fs.access(dirname, function (err) {
    if (err) {
      mkdirDeep(path.dirname(dirname), function () {
        fs.mkdir(dirname, callback);
      });
    } else {
      callback();
    }
  });
}
```

`mkdirDeep(dir, callback?)` 接收两个参数：

- dir：待创建目录路径。
- callback：创建完毕后的回调函数。

```js
mkdirDeep("./name/sss/dfdfs/sdfa/sdf");
```

### promise 版

```js
function mkdirDeep(dirname) {
  function innerMkdir(dirname, callback = () => {}) {
    fs.access(dirname, function (err) {
      if (err) {
        innerMkdir(path.dirname(dirname), function () {
          fs.mkdir(dirname, callback);
        });
      } else {
        callback();
      }
    });
  }
  return new Promise((resolve) => {
    innerMkdir(dirname, resolve);
  });
}
```

`mkdirDeep(dir)` 接收一个参数：

- dir：待创建目录路径。

```js
mkdirDeep("./name/sss/dfdfs/sdfa/sdf");
```

## 发送请求

### 等待数据返回完毕

```js
function spiderPage(url) {
  return new Promise((resolve, reject) => {
    http.get(url).then((response) => {
      let data = "";
      response.setEncoding("utf-8");
      response.on("data", (chunk) => {
        data += chunk;
      });
      response.on("end", (err) => {
        if (err) {
          console.log("数据接收出错");
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  });
}
```

`spiderPage(url)` 方法接收一个参数：

- url：请求地址。

```js
spiderPage("https://www.baidu.com").then((res) => {
  console.log(res);
});
```
