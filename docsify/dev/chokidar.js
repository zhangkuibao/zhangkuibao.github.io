// md文件修改时在顶部添加最后修改时间

const path = require("path");
const fs = require("fs");

// 监控文件变化
const chokidar = require("chokidar");

const watcher = chokidar
  .watch(".", {
    ignored: /.git|node_modules|.js|.vue|.html|.png|.css|.js|.jpg|.map|.less|.ts/,
  })
  .on("change", async (filePath) => {
    let extname = path.extname(filePath);
    if (extname !== ".md") return;
    await watcher.unwatch(filePath);
    changeFile(filePath, () => {
      watcher.add(filePath);
    });
  });

function getFullTime() {
  let date = new Date(), //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear() + "",
    M =
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1,
    D = date.getDate() < 10 ? "0" + date.getDate() : date.getDate(),
    h = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
    m = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
    s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  return `${Y}-${M}-${D} ${h}:${m}:${s}`;
}

function changeFile(filePath, callback) {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) throw err;
    if (/^`最后修改时间：/.test(data)) {
      console.log("替换", getFullTime());
      data = data.replace(/(?<=`最后修改时间：).*?(?=`)/, getFullTime());
    } else {
      data = `\`最后修改时间：${getFullTime()}\`\n\n${data}`;
      console.log("添加", getFullTime());
    }

    fs.writeFile(filePath, data, (err) => {
      if (err) throw err;
      if (callback) callback();
    });
  });
}