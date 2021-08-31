let fs = require("fs");
let path = require("path");
let { spaceStr, throttle, arrLaggingSort, absDirname } = require("../utils");
let ignoreDirname = [];
let targetDirname = path.resolve(absDirname, "docsify/src/assets/_navbar.md");
let laggingDirList = ["其他"];

function getFirstFilepath(item) {
  while (item) {
    if (item?.files?.length) {
      return item.files[0].fullpath;
    }
    let keys = Object.keys(item.childDir);
    item = item.childDir[keys[0]];
  }
}

const generateNavbar = throttle(function(str) {
  str += fs.readFileSync(
    path.resolve(absDirname, "docsify/src/template/_navbar.md")
  );
  fs.writeFile(targetDirname, str, () => {
    console.log(`navbar修改: ${targetDirname}`);
  });
});

exports.generateNavbar = function(dirMap) {
  let navbarMd = "";
  ergodicConfig(dirMap);

  function ergodicConfig(dirMap, level = 0) {
    let keys = Object.keys(dirMap.childDir);
    // 处理目录
    arrLaggingSort(keys, laggingDirList).forEach((prop) => {
      let item = dirMap.childDir[prop];
      if (level <= 1) {
        if (level === 1) {
          navbarMd += `${spaceStr(level)}- [${prop}](${getFirstFilepath(
            item
          )})\n\n`;
        } else if (!ignoreDirname.includes(prop)) {
          if (Object.keys(item.childDir).length === 0) {
            navbarMd += `${spaceStr(level)}- [${prop}](${getFirstFilepath(
              item
            )})\n\n`;
          } else {
            navbarMd += `${spaceStr(level)}- ${prop}\n\n`;
          }
        }
        generateNavbar(navbarMd);
      }
      ergodicConfig(item, level + 1);
    });
  }
};
