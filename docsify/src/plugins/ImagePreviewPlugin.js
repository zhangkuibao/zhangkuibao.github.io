import ImageComp from "../components/image-preview.vue";
import Vue from "vue";
export default class ImagePreviewPlugin {
  static ImageCompConstruct = Vue.extend(ImageComp);
  static instance = new ImagePreviewPlugin.ImageCompConstruct();

  static init() {
    ImagePreviewPlugin.instance.$mount();
  }

  static bindEvent() {
    document.addEventListener("click", (e) => {
      if (e.target.tagName === "IMG" && !ImagePreviewPlugin.isShow()) {
        let src = e.target.src;
        ImagePreviewPlugin.showImagePreview(src);
      }
    });
  }

  static isShow() {
    return (
      ImagePreviewPlugin.instance && ImagePreviewPlugin.instance.showStatus()
    );
  }

  static showImagePreview(src) {
    document.body.appendChild(ImagePreviewPlugin.instance.$el);
    ImagePreviewPlugin.instance.show(src);
  }
  static install(hook, vm) {
    hook.init(function() {
      // 初始化完成后调用，只调用一次，没有参数。
      ImagePreviewPlugin.init();
      ImagePreviewPlugin.bindEvent();
    });
    //   hook.beforeEach(function (content) {
    //     // 每次开始解析 Markdown 内容时调用
    //     // ...
    //     return content;
    //   });
    // hook.afterEach(function (html, next) {
    //   let div = document.createElement("div");
    //   div.innerHTML = html;
    //   console.log(div)
    //   // titleArr = [];
    //   // createTitleNumber(div);
    //   // // 解析成 html 后调用。
    //   // // beforeEach 和 afterEach 支持处理异步逻辑
    //   // // ...
    //   // // 异步处理完成后调用 next(html) 返回结果
    //   // next(div.innerHTML);
    //   next(html)
    // });
    // hook.doneEach(function () {
    //   // 每次路由切换时数据全部加载完成后调用，没有参数。

    // });
    //   hook.mounted(function () {
    //     // 初始化并第一次加载完成数据后调用，只触发一次，没有参数。
    //   });
    //   hook.ready(function () {
    //     // 初始化并第一次加载完成数据后调用，没有参数。
    //   });
  }
}
