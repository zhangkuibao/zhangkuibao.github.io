// md文件修改时在顶部添加最后修改时间

const path = require("path");
const fs = require("fs");

// 监控文件变化
const chokidar = require("chokidar");

const watcher = chokidar
  .watch(".", {
    ignored: /.git|node_modules|.js|.vue|.html|.png|.css|.js|.jpg|.map|.less|.ts|_sidebar.md|_navbar.md/,
  })
  .on("change", async (filePath) => {
    let extname = path.extname(filePath);
    if (extname !== ".md") return;
    await watcher.unwatch(filePath);
    changeFile(filePath, () => {
      watcher.add(filePath);
    });
  });

function changeFile(filePath, callback) {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) throw err;
    let time = new Date().getTime();
    // <author-info date="1629961964463"></author-info>
    if (/^<author-info/.test(data)) {
      data = data.replace(/(?<=<author-info date=").*?(?="><\/author-info>)/, time);
      console.log("更新修改日期", filePath);
    } else {
      data = `<author-info date="${time}"></author-info>\n\n${data}`;
      console.log("添加修改日期", filePath);
    }

    fs.writeFile(filePath, data, (err) => {
      if (err) throw err;
      if (callback) callback();
    });
  });
}