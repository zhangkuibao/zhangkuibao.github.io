const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
  mode: "production",
  entry: {
    index: "./docsify/src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "docsify/dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./docsify/src/html/index.html", //模板文件
      filename: path.resolve(__dirname, "index.html"), //目标文件
      scriptLoading: "blocking",
      inject: "head",
    }),
  ],
  watch: true,
  // plugins: [
  //   new UglifyJsPlugin({
  //     test: /\.js(\?.*)?$/i, //测试匹配文件,
  //     // cache: true,
  //     parallel: true,  //使用多进程并行运行来提高构建速度
  //     // include: ''
  //   }),
  // ],
  optimization: {
    // splitChunks: {
    //   minSize: 1,
    // },
    // minimizer: [new UglifyJsPlugin()],
  },
};
