const path = require("path");
const { getConfigJSON } = require("./generateConfigJSON");
const { generateNavbar } = require("./generateNavbar");
const { generateSidbar } = require("./generatorSidebar");
const { throttle, serviceLoadLog, absDirname } = require("../utils");
const chokidar = require("chokidar");
const callback = throttle(function(changePath) {
  getConfigJSON().then((res) => {
    generateNavbar(res);
    generateSidbar(res, changePath);
  });
}, 2000);
const watcher = chokidar
  .watch(path.resolve(absDirname, "document"), {
    ignored: /.git|node_modules|.js|.vue|.html|.png|.css|.js|.jpg|.map|.less|.ts|_sidebar.md|_navbar.md/,
  })
  .on("ready", () => {
    serviceLoadLog("自动生成sidebar和navbar");
    watcher.on("all", (event, filepath) => {
      if (["add", "unlink"].includes(event)) {
        console.log("change", filepath);
        callback(filepath);
      }
    });
  });