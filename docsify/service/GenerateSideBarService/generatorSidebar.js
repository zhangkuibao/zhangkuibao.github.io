let fs = require("fs");
let path = require("path");
let { spaceStr } = require("./util");
let finishTimmer;
let sidbarMdMap = {};

function ergodicConfig(dirMap, level = 0) {
  // 处理目录
  if (level === 2) {
    generateSidbarPart(dirMap);
  }
  for (let prop in dirMap.childDir) {
    let item = dirMap.childDir[prop];
    ergodicConfig(item, level + 1);
  }
}

function generateSidbarPart(dirMap) {
  let root = dirMap.dir;
  sidbarMdMap[root] = "";

  ergodic(dirMap["childDir"]);

  function ergodic(rootMap, level = 0) {
    for (let prop in rootMap) {
      let item = rootMap[prop];
      sidbarMdMap[root] += `${spaceStr(level)}- ${prop}\n\n`;

      // 有子目录
      if (Object.keys(item.childDir).length) {
        ergodic(item.childDir, level + 1);
      }

      // 有文件
      if (item.files.length) {
        item.files.forEach((file, index) => {
          sidbarMdMap[root] += `${spaceStr(level + 1)}- [${file.filename}](${
            file.fullpath
          })\n${item.files.length - 1 === index ? "\n" : ""}`;
        });
      }
      generateSidbar();
    }
  }
}

function generateSidbar() {
  clearTimeout(finishTimmer);
  finishTimmer = setTimeout(() => {
    Object.keys(sidbarMdMap).forEach((prop) => {
      let targetDirname = path.resolve(prop, "_sidbarsss.md");
      fs.writeFile(targetDirname, sidbarMdMap[prop], () => {
        console.log(`${targetDirname} 写入成功`);
      });
    });
  }, 100);
}

exports.generateSidbar = ergodicConfig;
