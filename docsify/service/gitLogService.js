const { exec } = require("child_process");
const { absDirname, serviceLoadLog } = require("./utils");
const chokidar = require("chokidar");
const fs = require("fs");
const path = require("path");
const targetDirname = path.resolve(absDirname, 'docsify/src/assets/commit.json');
const watchFileName = path.resolve(absDirname, '.git/logs/HEAD');
function buildCommitJSON() {
  exec(`git log --pretty=format:"%ad","%s" > ${targetDirname}`, (err) => {
    fs.readFile(targetDirname, "utf-8", (err, data) => {
      let arr = data.split("\n");
      let result = arr.map((ele) => {
        let subArr = ele.split(",");
        return {
          date: subArr[0],
          message: subArr[1],
        };
      });

      // console.log(arr);
      fs.writeFile(targetDirname, JSON.stringify(result), (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`commit.json 已更新: ${targetDirname}`);
        }
      });
    });
  });
}

const watcher = chokidar
  .watch(watchFileName)
  .on('ready', () => {
    serviceLoadLog('自动提取git-commit信息')
    buildCommitJSON();
  })
  .on("change", () => {
    buildCommitJSON();
  });
