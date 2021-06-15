## 作用

可以通过配置 output 选项，告知 webpack 如何向硬盘写入编译文件。

即使可以存在多个 entry 起点，但只能指定一个 output 配置。

## 多入口起点

配置多入口起点时 filename 需要用占位符来保证名称的唯一性

```js
module.exports = {
  entry: {
    app: './src/app.js',
    search: './src/search.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  },
};

// 写入到硬盘：./dist/app.js, ./dist/search.js
```


## 不明确输出地址

如果在编译时，不知道最终输出文件的 publicPath 是什么地址，则可以将其留空，并且在运行时通过入口起点文件中的 __webpack_public_path__ 动态设置。