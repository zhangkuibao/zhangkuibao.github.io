let fs = require("fs");
let path = require("path");
let finishTimmer;
let absDirname = path.resolve(__dirname, '../../../');
let navbarMd = '';
let ignoreDirname = ['收藏夹'];
let targetDirname = path.resolve(absDirname, 'docsify/src/assets/_navbar.md');

function ergodicConfig(dirMap, level = 0) {
  // 处理目录
  for (let prop in dirMap.childDir) {
    let item = dirMap.childDir[prop];
    if (level <= 1) {
      if (level === 1) {
        navbarMd += `${spaceStr(level)}- [${prop}](${getFirstFile(item)})\n\n`;
      } else if(!ignoreDirname.includes(prop)) {
        if (Object.keys(item.childDir).length === 0) {
          navbarMd += `${spaceStr(level)}- [${prop}](${getFirstFile(
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

function getFirstFile(item) {
  while (item) {
    if (item?.files?.length) {
      return item.files[0].fullpath;
    }
    let keys = Object.keys(item.childDir);
    item = item.childDir[keys[0]];
  }
}

function spaceStr(num) {
  return "  ".repeat(num);
}

function generateNavbar(str) {
  clearTimeout(finishTimmer);
  str += fs.readFileSync(path.resolve(absDirname, 'docsify/src/template/_navbar.md'));
  finishTimmer = setTimeout(() => {
    fs.writeFile(targetDirname, str, () => {
      console.log(`${targetDirname} 写入成功`);
    });
  }, 100);
}

exports.generateNavbar = ergodicConfig;
