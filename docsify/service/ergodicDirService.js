const path = require("path");
const fs = require("fs");
const absDirname = path.resolve(__dirname, "../../");
const ergodicDirname = path.resolve(absDirname, "document");
const ignoreFilenameList = ["README", "_sidebar"];
const dirMap = {
    files: [],
    childDir: {}
};

function parseDir(dir) {
  dir = dir.replace(ergodicDirname, "");
  let result = dir.split(path.sep);
  result.shift();
  return result;
}

function getDeepMap(DirList) {
  let result = dirMap;
  while (DirList.length) {
    result = result["childDir"][DirList.shift()];
  }
  return result;
}

function addPathToMap(dir, path, isDir) {
  let DirList = parseDir(dir);
  console.log(DirList)
  let deepMap = getDeepMap(DirList);
  // console.log(parseDir(dir))
  console.log(deepMap);

  if (isDir) {
    deepMap["childDir"][path] = {
        files: [],
        childDir: {}
    };
  } else {
    deepMap.files = deepMap.files ? deepMap.files.concat([path]) : [path];
  }
}

function ergodicDir(dir, callback, finish) {
  fs.readdir(dir, function(err, files) {
    if (err) {
      console.error(err);
      return;
    }
    files.forEach((filepath, index) => {
      let fullpath = path.join(dir, filepath);
      fs.stat(fullpath, (err, stats) => {
        // 读取文件信息
        if (err) {
          console.log("获取文件stats失败");
          return;
        }
        if (stats.isDirectory()) {
          ergodicDir(fullpath,finish, callback);
          addPathToMap(dir, filepath, true);
        } else if (stats.isFile()) {
          let extname = path.extname(fullpath);
          let filename = path.basename(fullpath, ".md");
          addPathToMap(dir, filepath, false);
          if (extname === ".md" && !ignoreFilenameList.includes(filename)) {
            callback && callback(fullpath);
          }

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

let cont = 0;
ergodicDir(ergodicDirname, function(file) {
  cont++;
  //   console.log(1111, file);

  // 读取文件后的处理
}, () => {
    console.log(111)
    fs.writeFile('./test.json', JSON.stringify(dirMap), () => {})
});
