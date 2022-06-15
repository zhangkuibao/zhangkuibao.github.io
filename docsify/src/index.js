// 加载样式
import "./css/index.scss";

// 注册插件
import "./plugins";

// 注册组件
import "./components";

// 注册sw
if (typeof navigator.serviceWorker !== "undefined") {
  navigator.serviceWorker.register("docsify/src/assets/sw.js");
}
