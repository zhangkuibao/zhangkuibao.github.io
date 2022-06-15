---
title: 【配置】mode
tags:
  - 前端工程化
  - webpack
  - 配置
---

## 作用

告知 webpack 使用何种模式进行内置优化。

## 用法

- webpack.config.js

```js
module.exports = {
  mode: "development",
};
```

- 在 CLI 中传递

```js
webpack --mode=development
```

## 支持的选项

| 选项          | 描述                                                                                                                                                                                                                                          |
| :------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `development` | 会将 `DefinePlugin` 中 `process.env.NODE_ENV` 的值设置为 `development`. 为模块和 chunk 启用有效的名。                                                                                                                                         |
| `production`  | 会将 `DefinePlugin` 中 `process.env.NODE_ENV` 的值设置为 `production`。为模块和 chunk 启用确定性的混淆名称，`FlagDependencyUsagePlugin`，`FlagIncludedChunksPlugin`，`ModuleConcatenationPlugin`，`NoEmitOnErrorsPlugin` 和 `TerserPlugin` 。 |
| `none`        | 不使用任何默认优化选项                                                                                                                                                                                                                        |

## 根据 mode 动态配置 webpack

如果要根据 webpack.config.js 中的 mode 变量更改打包行为，则必须将配置导出为函数，而不是导出对象：

```js
var config = {
  entry: "./app.js",
  //...
};

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    config.devtool = "source-map";
  }

  if (argv.mode === "production") {
    //...
  }

  return config;
};
```
