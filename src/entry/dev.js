const { runVuepress } = require("../service/business/Vuepress");

const { fileChangeWatcher } = require("../service/business/WatchFile");

// 执行 vuepress dev
runVuepress();

// 监听文件变化
fileChangeWatcher();
