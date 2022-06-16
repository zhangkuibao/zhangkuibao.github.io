const path = require("path");

module.exports = (options, ctx) => {
  return {
    name: "vuepress-plugin-image-preview",

    clientRootMixin: path.resolve(__dirname, "clientRootMixin.js"),
  };
};
