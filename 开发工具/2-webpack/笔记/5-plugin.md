## 作用

插件目的在于解决 loader 无法实现的其他事。

## 实质

webpack 插件是一个具有 apply 方法的 JavaScript 对象。apply 方法会被 webpack compiler 调用，并且在 整个编译生命周期都可以访问 compiler 对象。

```js
const pluginName = "ConsoleLogOnBuildWebpackPlugin";

class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, (compilation) => {
      console.log("webpack 构建过程开始！");
    });
  }
}

module.exports = ConsoleLogOnBuildWebpackPlugin;
```
