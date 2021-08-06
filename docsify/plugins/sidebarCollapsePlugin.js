class SidebarCollapsePlugin {
  static sideWrapperDom;
  static firstRender = true;
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
      let dom = document.getElementsByClassName("sidebar-nav")[0].children[0];
      // 每次路由切换时数据全部加载完成后调用，没有参数。
      SidebarCollapsePlugin.sideWrapperDom =
        SidebarCollapsePlugin.sideWrapperDom || dom;
      SidebarCollapsePlugin.bindEvent();
      SidebarCollapsePlugin.replaceSidebar();
    });
    //   hook.mounted(function () {
    //     // 初始化并第一次加载完成数据后调用，只触发一次，没有参数。
    //   });
    //   hook.ready(function () {
    //     // 初始化并第一次加载完成数据后调用，没有参数。
    //   });
  }

  static bindEvent() {
    if (SidebarCollapsePlugin.firstRender) {
      SidebarCollapsePlugin.firstRender = false;
      SidebarCollapsePlugin.sideWrapperDom.addEventListener(
        "transitionend",
        SidebarCollapsePlugin.transitionendEvent
      );
      SidebarCollapsePlugin.sideWrapperDom.addEventListener(
        "click",
        SidebarCollapsePlugin.ulClickEvent
      );
    }
  }

  static findLI(dom) {
    while (dom.tagName !== "LI") {
      if (dom.classList.contains("sidebar-nav") || dom.tagName === "P") {
        dom = null;
        return;
      }
      dom = dom.parentNode;
    }
    return dom;
  }

  static replaceSidebar() {
    document
      .getElementsByClassName("sidebar-nav")[0]
      .children[0].replaceWith(SidebarCollapsePlugin.sideWrapperDom);
  }

  static transitionendEvent(e) {
    e.target.style.height = "";
  }

  static bindDomOffsetHeight(dom) {
    if (dom.offsetHeight) {
      dom.setAttribute("data-height", dom.offsetHeight);
    }
  }
  static getDomOffsetHeight(dom) {
    return dom.getAttribute("data-height");
  }

  static changeActiveClass(dom) {
    let activeDoms = document.getElementsByClassName("active");
    Array.from(activeDoms).forEach((ele) => {
      ele.classList.remove("active");
    });
    dom.classList.add("active");
  }

  static ulClickEvent(e) {
    let nextSibling = e.target.nextElementSibling;
    let LiDom = SidebarCollapsePlugin.findLI(e.target);
    if (nextSibling?.tagName === "UL") {
      SidebarCollapsePlugin.bindDomOffsetHeight(nextSibling);
      nextSibling.style.height =
        SidebarCollapsePlugin.getDomOffsetHeight(nextSibling) + "px";
      if (nextSibling.classList.contains("collapse-hide")) {
        setTimeout(() => {
          nextSibling.classList.remove("collapse-hide");
          e.target.classList.remove('collapse-menu-hide');
        });
      } else {
        if (e.target.tagName !== "A") {
          setTimeout(() => {
            nextSibling.classList.add("collapse-hide");
            e.target.classList.add('collapse-menu-hide');
        });
        }
      }
    }
    if (LiDom) {
      SidebarCollapsePlugin.changeActiveClass(LiDom);
    }
  }
}
