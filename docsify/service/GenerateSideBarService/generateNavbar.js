let fs = require("fs");
let path = require("path");
let { spaceStr, throttle } = require("./util");
let absDirname = path.resolve(__dirname, "../../../");
let navbarMd = "";
let ignoreDirname = ["收藏夹"];
let targetDirname = path.resolve(absDirname, "docsify/src/assets/_navbar.md");

function ergodicConfig(dirMap, level = 0) {
  // 处理目录
  for (let prop in dirMap.childDir) {
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

const generateNavbar = throttle(function(str) {
  str += fs.readFileSync(
    path.resolve(absDirname, "docsify/src/template/_navbar.md")
  );
  fs.writeFile(targetDirname, str, () => {
    console.log(`${targetDirname} 写入成功`);
  });
});

exports.generateNavbar = ergodicConfig;
