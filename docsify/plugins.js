let titleArr = [];

function transferTitleNumber(title, text) {
  let arr = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
  if (title.length === 1) {
    return arr[title[0]] + "、" + text;
  }
  return title + " " + text;
}

function synthesisNumber(text, level) {
  level = Number(level);
  titleArr[level] = titleArr[level] ? titleArr[level] + 1 : 1;
  titleArr = titleArr.slice(0, level + 1);
  let number = titleArr.filter((ele) => ele).join(".");
  console.log(titleArr);
  //   return number + " " + text;
  return transferTitleNumber(number, text);
}

function handleTitle(dom) {
  let a = dom.children[0];
  let span = a.children[0];
  let titleLevel = dom.tagName[1];
  span.innerText = synthesisNumber(span.innerText, titleLevel);
}

function createTitleNumber(main) {
  Array.from(main.children).forEach((ele) => {
    if (
      ele.tagName.length == 2 &&
      ele.tagName !== "H1" &&
      ele.tagName[0] === "H"
    ) {
      handleTitle(ele);
    }
  });
}

function plugin(hook, vm) {
  //   hook.init(function () {
  //     // 初始化完成后调用，只调用一次，没有参数。
  //   });

  //   hook.beforeEach(function (content) {
  //     // 每次开始解析 Markdown 内容时调用
  //     // ...
  //     return content;
  //   });

  //   hook.afterEach(function (html, next) {
  //     // 解析成 html 后调用。
  //     // beforeEach 和 afterEach 支持处理异步逻辑
  //     // ...
  //     // 异步处理完成后调用 next(html) 返回结果
  //     next(html);
  //   });

  hook.doneEach(function () {
    // 每次路由切换时数据全部加载完成后调用，没有参数。
    let main = document.getElementById("main");
    titleArr = [];
    createTitleNumber(main);
  });

  //   hook.mounted(function () {
  //     // 初始化并第一次加载完成数据后调用，只触发一次，没有参数。
  //   });

  //   hook.ready(function () {
  //     // 初始化并第一次加载完成数据后调用，没有参数。
  //   });
}