let fs = require("fs");
let path = require("path");
let { spaceStr } = require('./util');
let absDirname = path.resolve(__dirname, '../../../');
let finishTimmer;
let sidbarMdMap = {};

function ergodicConfig(dirMap, level = 0) {
  // 处理目录
  for (let prop in dirMap.childDir) {
    let item = dirMap.childDir[prop];
    // if(level === 2) {
    //     console.log(prop);
    // }
    console.log(spaceStr(level) + prop)
    ergodicConfig(item, level + 1);
  }
}

function getFirstFilepath(item) {
  while (item) {
    if (item?.files?.length) {
      return item.files[0].fullpath;
    }
    let keys = Object.keys(item.childDir);
    item = item.childDir[keys[0]];
  }
}

function generateNavbar(str) {
  clearTimeout(finishTimmer);
  str += fs.readFileSync(path.resolve(absDirname, 'docsify/src/template/_navbar.md'));
  finishTimmer = setTimeout(() => {
    // fs.writeFile(targetDirname, str, () => {
    //   console.log(`${targetDirname} 写入成功`);
    // });
  }, 100);
}

exports.generateSidbar = ergodicConfig;
