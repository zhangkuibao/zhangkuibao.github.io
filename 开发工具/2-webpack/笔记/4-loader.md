## 作用

webpack 默认只能识别 javascript 和 json 文件，loader 让 webpack 能够去处理其他类型的文件，并将它们转换为有效模块。

loader 用于对模块的源代码（文件内容本身）进行转换。

## 用法

### 在配置文件中配置
module.rules 允许你在 webpack 配置中指定多个 loader。

给一个规则定义多个 loader 时从右到左执行，下例匹配 `/\.css$/` 规则的文件从 sass-loader 开始执行，然后继续执行 css-loader，最后以 style-loader 为结束。
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          { loader: "sass-loader" },
        ],
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
};
```

### 内联方式

```js
import Styles from 'style-loader!css-loader?modules!./styles.css';
```

- 使用 ! 前缀，将禁用所有已配置的 normal loader(普通 loader)

- 使用 !! 前缀，将禁用所有已配置的 loader（preLoader, loader, postLoader）

- 使用 -! 前缀，将禁用所有已配置的 preLoader 和 loader，但是不禁用 postLoaders


选项可以传递查询参数，例如 ?key=value&foo=bar，或者一个 JSON 对象，例如 ?{"key":"value","foo":"bar"}。