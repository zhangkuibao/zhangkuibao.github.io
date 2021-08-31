const path = require("path");
const { getConfigJSON } = require("./generateConfigJSON");
const { generateNavbar } = require("./generateNavbar");
const { generateSidbar } = require("./generatorSidebar");
const { throttle } = require("./util");
const chokidar = require("chokidar");
const absDirname = path.resolve(__dirname, "../../../");
const callback = throttle(function() {
  getConfigJSON().then((res) => {
    console.log(res);
    generateNavbar(res);
    generateSidbar(res);
  });
}, 2000);
chokidar
  .watch(path.resolve(absDirname, 'document'), {
    ignored: /.git|node_modules|.js|.vue|.html|.png|.css|.js|.jpg|.map|.less|.ts|_sidebar.md|_navbar.md/,
  })
  .on("all", (event, filepath) => {
    console.log(event, filepath);
    if (["add", "unlink"].includes(event)) {
      callback();
    }
  });
// .on("add", () => {
//   console.log(111)
//   callback();
// })
// .on("unlink", () => {
//   callback();
// })
