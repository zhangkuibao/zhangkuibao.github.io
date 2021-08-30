<author-info date="1630046046816"></author-info>

# 在项目中获取 `*.vue` 文件源码

项目中有些场景下需要展示文件的源码，比如 Element UI 和其他一些 UI 框架中做的“显示代码”功能。

这里介绍两种获取组件源码的方式。

[vue-cli 项目示例](https://gitee.com/zhangkb/get-vue-source-code)。

## 网络请求获取

### 适用项目

此方法适用于可以用 http 请求当前项目资源的静态项目。

### 原理

获取组件在服务器上的路径然后发送网络请求获取。

vue 组件中有一个 `$options.__file` 属性代表该组件实例的源文件位置。

### 核心代码

```js
function initExampleCodeHtml() {
  if (this.$options.__file) {
    fetch(this.$options.__file).then((res) => {
      res.text().then((text) => {
        this.codeHtml = text;
      });
    });
  }
}
```

## webpack-loader 绑定

vue-cli 构建的项目会经过 webpack 打包，这时用网络请求就无法获取到源文件了，这种项目下可以利用 loader 来获取组件的源码。

### 适用项目

vue-cli 项目、用 webpack 打包的 vue 项目。

### 原理

[vue-loader](https://vue-loader.vuejs.org/zh/guide/custom-blocks.html)官方文档中提供了一种配置 loader 在**运行时**访问被导入组件自定义代码块的能力。

- vue.config.js

```js
{
  module: {
    rules: [
      {
        resourceQuery: /blockType=foo/,
        loader: "loader-to-use",
      },
    ];
  }
}
```

- loader-to-use.js

```js
module.exports = function(source, map) {
  this.callback(
    null,
    `export default function (Component) {
      Component.options.__docs = ${JSON.stringify(source)}
    }`,
    map
  );
};
```

只要在 vue 组件中配置 `<docs></docs>` 标签就会被 loader 解析，并在这个 vue 实例上绑定数据（上面的例子中是 docs 标签中的内容）。

利用这个能力我们只需要在 loader 中读取组件的源文件再绑定到这个 vue 实例上就可以获取它的源码了。

### 核心代码

- loader-to-use.js

loader 中可以用 this.resourcePath 获取到被处理文件的位置。

用 fs 读取文件内容之后绑定到实例的 \_\_sourceCode 属性上。

```js
const fs = require("fs");

module.exports = function(source, map) {
  const { resourcePath } = this;
  const file = fs.readFileSync(resourcePath);
  this.callback(
    null,
    `export default function (Component) {
            Component.options.__sourceCode = \`${file}\`
        }`,
    map
  );
};
```

- App.vue

导入 vue 组件后通过组件实例的 `__sourceCode` 属性读取组件源码。

```html
<script>
  import HelloWorld from "./components/HelloWorld.vue";
  export default {
    name: "App",
    data() {
      return {
        sourceCode: HelloWorld.__sourceCode,
      };
    },
  };
</script>
```

## 参考

[自定义 loader 读取 \*.vue 文件源码](https://www.jianshu.com/p/c270e13918f3)

[vue-loader](https://vue-loader.vuejs.org/zh/guide/custom-blocks.html)
