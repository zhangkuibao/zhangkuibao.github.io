export default class SidebarCollapsePlugin {
  static sideWrapperDom;
  static lastRootBreadcrumbText;
  static closeLevel;  // 默认收起等级
  static install(hook, vm) {
    SidebarCollapsePlugin.closeLevel = vm?.config?.sidebarCollapse?.closeLevel || 2;
    //   hook.init(function () {
    //     // 初始化完成后调用，只调用一次，没有 参数。
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
    hook.doneEach(function() {
      // 每次路由切换时数据全部加载完成后调用，没有参数。
      let dom = document
        .getElementsByClassName("sidebar-nav")[0]
        .querySelector("ul")
        .cloneNode(true);

      SidebarCollapsePlugin.initRootDom(dom);
      SidebarCollapsePlugin.removeEvent();
      SidebarCollapsePlugin.bindEvent();
      SidebarCollapsePlugin.bindCollapseClass(dom);
      SidebarCollapsePlugin.replaceSidebar();
    });
    //   hook.mounted(function () {
    //     // 初始化并第一次加载完成数据后调用，只触发一次，没有参数。
    //   });
    //   hook.ready(function () {
    //     // 初始化并第一次加载完成数据后调用，没有参数。
    //   });
  }

  static initRootDom(dom) {
    let RootBreadcrumbText = SidebarCollapsePlugin.getRootBreadcrumbText();
    // 根路径切换时才替换侧边栏，解决切换路由时侧栏样式重置问题 。
    if (RootBreadcrumbText !== SidebarCollapsePlugin.lastRootBreadcrumbText) {
      SidebarCollapsePlugin.sideWrapperDom = dom;
    }
    SidebarCollapsePlugin.lastRootBreadcrumbText = RootBreadcrumbText;
  }

  static getRootBreadcrumbText() {
    let wrap = document.getElementsByClassName("sidebar-nav")[0];
    return wrap.querySelector("#root-breadcrumb")?.innerHTML;
  }

  static setLiLevel(li, level) {
    li.classList.add("level-" + level);
  }

  static bindCollapseClass(UL, level = 1) {
    if (UL.children) {
      Array.from(UL.children).forEach((li) => {
        let subUl = li.querySelector("ul");
        // 调整li中第一个元素为p包裹a的结构。侧边栏中有些a标签是被p标签包裹着的，导致样式问题。
        if (SidebarCollapsePlugin.isPAroundA(li)) {
          SidebarCollapsePlugin.deletePAround(li);
        }
        SidebarCollapsePlugin.setLiLevel(li, level);
        if (subUl) {
          li.firstElementChild.classList.add("hasChild");
          SidebarCollapsePlugin.bindCollapseClass(subUl, level + 1);
          // 在这里可以先设置一个ul的data-height值，让第一次展开有动画，ul未渲染，offsetHeight为0
        }
        if (level >= SidebarCollapsePlugin.closeLevel) {
          SidebarCollapsePlugin.closeUl(li.firstElementChild);
        }
      });
    }
  }

  // 删除li第一个元素的p元素包裹
  static deletePAround(li) {
    let pTag = li.firstElementChild;
    let aTag = pTag.firstElementChild;
    if (pTag.classList.contains("active")) {
      li.classList.add("active");
    }
    li.innerHTML = aTag.outerHTML;
  }

  // 判断li的第一个元素是否为a标签外包裹了一层p标签
  static isPAroundA(li) {
    let liFirstChild = li.firstElementChild;
    if (
      liFirstChild.tagName === "P" &&
      liFirstChild?.firstElementChild?.tagName === "A"
    ) {
      return true;
    }
    return false;
  }

  static removeEvent() {
    SidebarCollapsePlugin.sideWrapperDom.removeEventListener(
      "transitionend",
      SidebarCollapsePlugin.transitionendEvent
    );
    SidebarCollapsePlugin.sideWrapperDom.removeEventListener(
      "click",
      SidebarCollapsePlugin.ulClickEvent
    );
  }

  static bindEvent() {
    SidebarCollapsePlugin.sideWrapperDom.addEventListener(
      "transitionend",
      SidebarCollapsePlugin.transitionendEvent
    );
    SidebarCollapsePlugin.sideWrapperDom.addEventListener(
      "click",
      SidebarCollapsePlugin.ulClickEvent
    );
  }

  static findLI(dom) {
    if (dom.tagName === "UL") {
      return null;
    }
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
      .querySelector("ul")
      .replaceWith(SidebarCollapsePlugin.sideWrapperDom);
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

  static changeUlHeight(ul) {
    ul.style.height = SidebarCollapsePlugin.getDomOffsetHeight(ul) + "px";
  }

  // 判断是否闭合
  static isClose(firstNode) {
    return firstNode.classList.contains("collapse-menu-hide");
  }

  // 展开
  static extendUl(firstNode) {
    firstNode.classList.remove("collapse-menu-hide");
  }

  // 收起
  static closeUl(firstNode) {
    firstNode.classList.add("collapse-menu-hide");
  }

  static changeTagExtendStatus(target, nextSibling) {
    // a标签后跟子列表时只在a标签被选中后才可开合
    if (
      target.tagName === "A" &&
      !target.parentNode.classList.contains("active")
    ) {
      return;
    }
    SidebarCollapsePlugin.changeUlHeight(nextSibling);
    if (SidebarCollapsePlugin.isClose(target)) {
      setTimeout(() => {
        SidebarCollapsePlugin.extendUl(target);
      });
    } else {
      setTimeout(() => {
        SidebarCollapsePlugin.closeUl(target);
      });
    }
  }

  static ulClickEvent(e) {
    let nextSibling = e.target.nextElementSibling;
    let LiDom = SidebarCollapsePlugin.findLI(e.target);
    if (nextSibling?.tagName === "UL") {
      SidebarCollapsePlugin.bindDomOffsetHeight(nextSibling);
      SidebarCollapsePlugin.changeTagExtendStatus(e.target, nextSibling);
    }
    if (LiDom) {
      SidebarCollapsePlugin.changeActiveClass(LiDom);
    }
  }
}
