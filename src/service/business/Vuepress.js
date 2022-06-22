const {
  consoleNotice,
  consoleError,
} = require("../common/Console");
const exec = require("child_process").exec;

exports.runVuepress = function () {
  consoleNotice("执行命令：【vuepress dev docs】");
  const process = exec("vuepress dev docs", (err) => {
    consoleError(err);
  });

  process.stdout.on("data", (data) => {
    consoleNotice(`【vuepress】${data.replace(/\n/g, '')}`);
  });
};
