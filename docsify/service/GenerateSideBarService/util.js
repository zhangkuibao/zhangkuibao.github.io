let path = require("path");
const { clearTimeout } = require("timers");
let absDirname = path.resolve(__dirname, "../../../");
exports.fixFilePath = function(filepath) {
  filepath = filepath.replace(absDirname + path.sep, "");
  return filepath.replace(new RegExp(`\\${path.sep}`, "g"), "\/");
};

exports.spaceStr = function(num) {
  return "  ".repeat(num);
};

exports.throttle = function(fn, interval = 100) {
  let timmer;
  return function(...args) {
    clearTimeout(timmer);
    timmer = setTimeout(fn, interval, ...args);
  }
}