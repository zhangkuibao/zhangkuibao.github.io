// md文件修改时在顶部添加最后修改时间

const path = require("path");
const fs = require("fs");
const { serviceLoadLog, absDirname } = require('../utils')


// 监控文件变化
const chokidar = require("chokidar");

let watcher;

function changeFile(filePath, callback) {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) throw err;
    let time = new Date().getTime();
    // <author-info date="1629961964463"></author-info>
    if (/^<author-info/.test(data)) {
      data = data.replace(
        /(?<=<author-info date=").*?(?="><\/author-info>)/,
        time
      );
      console.log("修改更新日期", filePath);
    } else {
      data = `<author-info date="${time}"></author-info>\n\n${data}`;
      console.log("添加更新日期", filePath);
    }

    fs.writeFile(filePath, data, (err) => {
      if (err) throw err;
      if (callback) callback();
    });
  });
}

async function changeDateWatcher() {
  watcher = chokidar
    .watch(path.resolve(absDirname, 'document'), {
      ignored: /.git|node_modules|_sidebar.md|_navbar.md/,
    })
    .on("change", async (filePath) => {
      console.log('change', filePath)
      let extname = path.extname(filePath);
      if (extname !== ".md") return;
      await watcher.unwatch(filePath);
      changeFile(filePath, () => {
        watcher.add(filePath);
      });
    });
}

changeDateWatcher().then(() => {
  serviceLoadLog('自动添加最后更新日期')
});
