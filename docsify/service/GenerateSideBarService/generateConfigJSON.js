const path = require("path");
const fs = require("fs");
const { clearTimeout } = require("timers");
const absDirname = path.resolve(__dirname, "../../../");
const ergodicDirname = path.resolve(absDirname, "document");
const ignoreFilenameList = ["README", "_sidebar"];
let finishTimmer;
const dirMap = {
  files: [],
  childDir: {},
};

// 路径解析为数组
function parseDir(dir) {
  dir = dir.replace(ergodicDirname, "");
  let result = dir.split(path.sep);
  result.shift();
  return result;
}

// 根据路径数组获取深层对象
function getDeepMap(DirList) {
  let result = dirMap;
  while (DirList.length) {
    result = result["childDir"][DirList.shift()];
  }
  return result;
}

// 将路径信息添加至map
function addPathToMap(dir, filepath, isDir) {
  let DirList = parseDir(dir);
  let deepMap = getDeepMap(DirList);

  if (isDir) {
    deepMap["childDir"][filepath] = {
      files: [],
      childDir: {},
    };
  } else {
    let extname = path.extname(filepath);
    let filename = path.basename(filepath, ".md");
    if (extname === ".md" && !ignoreFilenameList.includes(filename)) {
      let fileItem = {
        fullpath: path.resolve(dir, filepath),
        filename,
      };
      deepMap.files = deepMap.files
        ? deepMap.files.concat([fileItem])
        : [fileItem];
    }
  }
}

function ergodicDir(dir, finish) {
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
          ergodicDir(fullpath, finish);
          addPathToMap(dir, filepath, true);
        } else if (stats.isFile()) {
          addPathToMap(dir, filepath, false);
        }
      });
      if (index === files.length - 1) {
        finish && finish();
      }
    });
  });
}

exports.getConfigJSON = () => {
  return new Promise((resolve) => {
    ergodicDir(ergodicDirname, () => {
      clearTimeout(finishTimmer);
      finishTimmer = setTimeout(() => {
        //   console.log("build success: sidebarConfig");
        resolve(dirMap);
      }, 100);
    });
  });
};
