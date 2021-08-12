export default class TitleNumberPlugin {
  titleArr = [];

  static transferTitleNumber(title, text) {
    let arr = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
    if (title.length === 1) {
      return arr[title[0]] + "、" + text;
    }
    return title + " " + text;
  }

  static synthesisNumber(text, level) {
    level = Number(level);
    TitleNumberPlugin.titleArr[level] = TitleNumberPlugin.titleArr[level]
      ? TitleNumberPlugin.titleArr[level] + 1
      : 1;
    TitleNumberPlugin.titleArr = TitleNumberPlugin.titleArr.slice(0, level + 1);
    let number = TitleNumberPlugin.titleArr.filter((ele) => ele).join(".");
    //   return number + " " + text;
    return TitleNumberPlugin.transferTitleNumber(number, text);
  }

  static handleTitle(dom) {
    if (!dom.children) return;
    let a = dom.firstElementChild;
    let span = a?.firstElementChild;
    if (span && span.innerText !== "参考") {
      let titleLevel = dom.tagName[1];
      span.innerText = TitleNumberPlugin.synthesisNumber(
        span.innerText,
        titleLevel
      );
    }
  }

  static createTitleNumber(main) {
    Array.from(main.children).forEach((ele) => {
      if (
        ele.tagName.length == 2 &&
        ele.tagName !== "H1" &&
        ele.tagName[0] === "H"
      ) {
        TitleNumberPlugin.handleTitle(ele);
      }
    });
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

    hook.afterEach(function (html, next) {
      let div = document.createElement("div");
      div.innerHTML = html;
      TitleNumberPlugin.titleArr = [];
      TitleNumberPlugin.createTitleNumber(div);
      // 解析成 html 后调用。
      // beforeEach 和 afterEach 支持处理异步逻辑
      // ...
      // 异步处理完成后调用 next(html) 返回结果
      next(div.innerHTML);
    });

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
