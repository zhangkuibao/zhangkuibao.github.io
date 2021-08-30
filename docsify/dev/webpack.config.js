const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const absDirname = path.resolve(__dirname,'../../');

module.exports = {
  mode: "production",
  entry: {
    index: path.resolve(absDirname, "docsify/src/index.js"),
    // "css-exhibit": "../src/js/css-exhibit.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(absDirname, "docsify/dist"),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            scss: "vue-style-loader!css-loader!sass-loader",
            sass: "vue-style-loader!css-loader!sass-loader?indentedSyntax",
          },
        },
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              [
                "component",
                {
                  libraryName: "element-ui",
                  styleLibraryName: "theme-chalk",
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    // 主页
    new HtmlWebpackPlugin({
      template: path.resolve(absDirname, "docsify/src/html/index.html"), // 模板文件
      filename: path.resolve(absDirname, "index.html"), // 目标文件
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
