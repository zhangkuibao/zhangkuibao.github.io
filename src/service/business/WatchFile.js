// 监听md文件变化并添加头部信息
const chokidar = require("chokidar");
const path = require("path");
const mdFolder = path.join(__dirname, "../../../docs/_posts");
const { consoleNotice } = require("../common/Console");
const matter = require("gray-matter");
const moment = require("moment");
const fs = require("fs");

async function fileChangeWatcher() {
  consoleNotice("【监听文档变化程序已启动】");
  watcher = chokidar
    .watch(mdFolder, {
      ignored: /.git|node_modules|_sidebar.md|_navbar.md/,
    })
    .on("change", async (filePath) => {
      consoleNotice("【file-change】", filePath);
      handleDate(filePath);
    });
}

/**
 * 修改文件date
 */
function handleDate(fp) {
  const { content, data } = matter.read(fp);
  data.date = moment().format("YYYY-MM-DD HH:mm:ss");
  fs.writeFileSync(fp, matter.stringify(content, data), {
    encoding: "utf-8",
  });
}

exports.fileChangeWatcher = fileChangeWatcher;
