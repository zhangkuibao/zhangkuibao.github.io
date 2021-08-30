let fs = require("fs");
let path = require("path");
let { spaceStr } = require("./util");
let absDirname = path.resolve(__dirname, "../../../");
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
  // console.log(dirMap);
  let root = dirMap.dir;
  let level = 0;
  sidbarMdMap[root] = "";

  ergodic(dirMap["childDir"]);

  function ergodic(rootMap, level = 0) {
    for (let prop in rootMap) {
      let item = rootMap[prop];
      sidbarMdMap[root] += `${spaceStr(level)}- ${prop}\n\n`;
      if (Object.keys(item.childDir).length) {
        ergodic(item.childDir, level + 1);
      }

      if(item.files.length) {
          item.files.forEach(file => {
              console.log(file)
            sidbarMdMap[root] += `${spaceStr(level + 1)}- [${file.filename}](${file.fullpath})\n\n`;
          })
      }
      generateNavbar();
    }
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

function generateNavbar() {
  clearTimeout(finishTimmer);
  finishTimmer = setTimeout(() => {
    let keys = Object.keys(sidbarMdMap);
    fs.writeFile("./sidbar.md", sidbarMdMap[keys[2]], () => {
      //   console.log(`${targetDirname} 写入成功`);
      Object.keys(sidbarMdMap).forEach((ele) => {});
    });
    console.log(sidbarMdMap);
  }, 100);
}

exports.generateSidbar = ergodicConfig;
