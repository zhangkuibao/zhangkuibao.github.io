const webpack = require("webpack");
const webpackConfig = require("./webpack.config");
const { serviceLoadLog } = require('../utils')

webpack(webpackConfig, (err, stats) => {
  serviceLoadLog('webpack')
  if (err || stats.hasErrors()) {
    // [在这里处理错误](#error-handling)
    console.log(stats)
  }
});
