export default class BreadcrumbPlugin {
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
    hook.doneEach(function () {
      // 每次路由切换时数据全部加载完成后调用，没有参数。
      let dom = document
        .getElementsByClassName("sidebar-nav")[0]
        .querySelector("ul");
      let active = dom.querySelector(".active");
      BreadcrumbPlugin.initRoot();
      BreadcrumbPlugin.ergodicLI(active);
      BreadcrumbPlugin.addRootDir();
      BreadcrumbPlugin.generateBreadcrumb();
      BreadcrumbPlugin.appendBreadcrumbRoot2Body();
    });
    //   hook.mounted(function () {
    //     // 初始化并第一次加载完成数据后调用，只触发一次，没有参数。
    //   });
    //   hook.ready(function () {
    //     // 初始化并第一次加载完成数据后调用，没有参数。
    //   });
  }

  static breadcrumbList = [];
  static breadcrumbRoot = null;
  static intervalText = "/";

  static initRoot() {
    BreadcrumbPlugin.breadcrumbList = [];
    BreadcrumbPlugin.breadcrumbRoot = document.createElement("div");
    BreadcrumbPlugin.breadcrumbRoot.classList.add("breadcrumb");
  }

  static addRootDir() {
    let firstDir = BreadcrumbPlugin.getRootBreadcrumbText();
    if (firstDir) {
      BreadcrumbPlugin.breadcrumbList.unshift(firstDir);
    }
  }

  static getRootBreadcrumbText() {
    let wrap = document.getElementsByClassName("sidebar-nav")[0];
    return wrap.querySelector("#root-breadcrumb")?.innerHTML;
  }

  static ergodicLI(dom) {
    if (!dom) return;
    while (!dom.classList.contains("sidebar-nav")) {
      if (dom.tagName === "LI") {
        let text = dom.firstElementChild.innerText;
        BreadcrumbPlugin.breadcrumbList.unshift(text);
      }
      dom = dom.parentNode;
    }
  }

  static createSubTitle(text) {
    let subDom = document.createElement("span");
    subDom.classList.add("breadcrumb-title");
    subDom.innerText = text;
    return subDom;
  }

  static generateBreadcrumb() {
    BreadcrumbPlugin.breadcrumbList.forEach((text, index) => {
      let subDom = BreadcrumbPlugin.createSubTitle(text);
      BreadcrumbPlugin.insertSubDom2Root(subDom);
      if (BreadcrumbPlugin.breadcrumbList[index + 1]) {
        BreadcrumbPlugin.insertBeforeInterval();
      }
    });
  }

  static insertSubDom2Root(child) {
    BreadcrumbPlugin.breadcrumbRoot.appendChild(child);
  }

  static insertBeforeInterval() {
    let intervalDom = document.createElement("span");
    intervalDom.innerText = BreadcrumbPlugin.intervalText;
    intervalDom.classList.add("breadcrumb-interval");
    BreadcrumbPlugin.insertSubDom2Root(intervalDom);
  }

  static appendBreadcrumbRoot2Body() {
    let nav = document.querySelector(".app-nav");
    nav.insertBefore(BreadcrumbPlugin.breadcrumbRoot, nav.firstElementChild);
  }
}
