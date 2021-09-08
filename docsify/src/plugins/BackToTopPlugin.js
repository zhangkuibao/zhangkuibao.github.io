import BackToTopComp from "../components/back-to-top.vue";
import Vue from "vue";
export default class BackToTopPlugin {
  static instance;

  static init() {
    let constructVue = Vue.extend(BackToTopComp);
    let instance = new constructVue();
    let div = document.createElement("div");
    document.body.appendChild(div);
    instance.$mount(div);
    BackToTopPlugin.instance = instance;
  }
  static install(hook, vm) {
    //   hook.init(function () {
    //     // 初始化完成后调用，只调用一次，没有参数。
    //   });

    //   hook.beforeEach(function (content) {
    //     // 每次开始解析 Markdown 内容时调用
    //     // ...
    //     return content;
    //   });

    // hook.afterEach(function (html, next) {
    //   // 解析成 html 后调用。
    //   // beforeEach 和 afterEach 支持处理异步逻辑
    //   // ...
    //   // 异步处理完成后调用 next(html) 返回结果
    // });

    // hook.doneEach(function () {
    //   // 每次路由切换时数据全部加载完成后调用，没有参数。
    // });

    //   hook.mounted(function () {
    //     // 初始化并第一次加载完成数据后调用，只触发一次，没有参数。
    //   });

    hook.ready(function() {
      console.log("ready");
      BackToTopPlugin.init();
      window.addEventListener("scroll", (o) => {
        if(window.scrollY > 400) {
          BackToTopPlugin.instance.show();
        }else {
          BackToTopPlugin.instance.hide();
        }
      });

      // 初始化并第一次加载完成数据后调用，没有参数。
    });
  }
}
