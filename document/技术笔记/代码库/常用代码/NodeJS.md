<author-info date="1631152586628"></author-info>

# NodeJS

## 遍历文件夹

```js
const path = require("path");
const fs = require("fs");

const basePath = "D:/work/ruite/src/views/print/report"; // 目标目录

function mapDir(dir, callback, finish) {
  fs.readdir(dir, function(err, files) {
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
  function(file) {
    console.log(file.split(".")[0]);
    // 读取文件后的处理
  },
  function() {
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
