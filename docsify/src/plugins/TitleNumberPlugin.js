export default class TitleNumberPlugin {
  titleArr = [];

  static transferTitleNumber(title, text) {
    let titleList = title.split('.')
    if (titleList.length === 1) {
      return TitleNumberPlugin.intToChinese(titleList[0]) + "、" + text;
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
  
  static intToChinese ( str ) {
    str = str+'';
    var len = str.length-1;
    var idxs = ['','十','百','千','万','十','百','千','亿','十','百','千','万','十','百','千','亿'];
    // var num = ['零','壹','贰','叁','肆','伍','陆','柒','捌','玖'];
    var num = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
    
    return str.replace(/([1-9]|0+)/g,function( $, $1, idx, full) {
     var pos = 0;
     if( $1[0] != '0' ){
      pos = len-idx;
      if( idx == 0 && $1[0] == 1 && idxs[len-idx] == '十'){
       return idxs[len-idx];
      }
      return num[$1[0]] + idxs[len-idx];
     } else {
      var left = len - idx;
      var right = len - idx + $1.length;
      if( Math.floor(right/4) - Math.floor(left/4) > 0 ){
       pos = left - left%4;
      }
      if( pos ){
       return idxs[pos] + num[$1[0]];
      } else if( idx + $1.length >= len ){
       return '';
      }else {
       return num[$1[0]]
      }
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
