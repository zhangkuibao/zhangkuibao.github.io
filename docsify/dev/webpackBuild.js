const webpack = require("webpack");
const webpackConfig = require("./webpack.config");

console.log("webpack-building:start");
webpack(webpackConfig, (err, stats) => {
  console.log("webpack-building:success");
  if (err || stats.hasErrors()) {
    // [在这里处理错误](#error-handling)
    console.log(stats)
  }
});
