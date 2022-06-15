---
tags:
  - myGit
  - learning-Notes
  - document
  - 技术
  - webpack
  - 配置
---

## 作用

配置 webpack 的优化策略。

## 可配置项

### minimizer

覆盖默认压缩工具

```js
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        },
      }),
    ],
  },
};
```
