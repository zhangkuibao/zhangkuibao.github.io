let path = require("path");
let absDirname = path.resolve(__dirname, "../../../");
exports.fixFilePath = function(filepath) {
  return filepath.replace(absDirname + path.sep, "");
};
