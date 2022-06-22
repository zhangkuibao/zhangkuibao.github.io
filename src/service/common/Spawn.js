// const crossSpawn = require("cross-spawn");

// exports.spawn = function (command, args, opts, cb) {
//   const child = crossSpawn(command, args, opts);
//   child.on("error", cb);
//   child.on("close", function (code) {
//     if (code !== 0) return cb(new Error("Non-zero exit code: " + code));
//     cb(null);
//   });
//   return child;
// };
const exec = require("child_process").exec;
const {
  consoleNotice,
  consoleSuccess,
  consoleError,
} = require("../common/Console");
exports.exec = function (cmd, dirname, desination) {
  return new Promise((resolve, reject) => {
    consoleNotice(`开始执行命令`, cmd, dirname, desination);
    const options = {};
    if (dirname && desination) {
      options.cwd = path.join(desination, dirname);
    } else if (desination) {
      options.cwd = desination;
    }
    exec(cmd, options, (err, stdout) => {
        console.log(stdout)
      if (err) {
        consoleError(`执行命令失败`, err);
        reject(false);
        return;
      }
      consoleSuccess(`执行命令成功`);
      resolve(true);
    });
  });
};
