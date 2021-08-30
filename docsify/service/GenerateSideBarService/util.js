let path = require("path");
let absDirname = path.resolve(__dirname, "../../../");
exports.fixFilePath = function(filepath) {
  filepath = filepath.replace(absDirname + path.sep, "");
  return filepath.replace(new RegExp(`\\${path.sep}`, "g"), "\/");
};

exports.spaceStr = function(num) {
  return "  ".repeat(num);
};
