const webpack = require("webpack");
const webpackConfig = require("./webpack.config");

console.log("webpack-building:start");
webpack(webpackConfig, (err, stats) => {
  console.log("webpack-building:success");
});
