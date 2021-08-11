const DocName = "张魁堡的笔记";
const author = "张魁堡";

window.$docsify = {
  name: DocName,
  // nameLink: '',
  // repo: "http://www.baidu.com",
  // loadSidebar: "docsify/_sidebar.md",
  loadSidebar: true,
  // autoHeader: true,
  loadNavbar: "docsify/_navbar.md",
  alias: {
    ".*/_navbar.md": "docsify/_navbar.md",
    "/_sidebar.md": "技术笔记/编程基础/_sidebar.md",
    // "/技术笔记/编程基础/编程语言/CSS/_sidebar.md": "/技术笔记/编程基础/_sidebar.md",
    // "/.*/_sidebar.md": "/_sidebar.md", // See #301
  },
  // coverpage: "docsify/_coverpage.md",
  auto2top: true,
  // mergeNavbar: true,
  formatUpdated: "{YYYY}-{MM}-{DD} {HH}:{mm}",
  // routerMode: 'history',
  notFoundPage: "docsify/_404.md",
  topMargin: 70,
  // homepage: '技术笔记/编程基础/编程语言/CSS/CSS手册.md',
  // crossOriginLinks: [],  // 设置跨域链接
  // formatUpdated: function (time) {
  //   console.log(time)
  //   return time;
  // },
  // homepage: '',
  // logo: '',
  // subMaxLevel: 2, // 在侧边栏中生成每个页面的目录
  sidebarDisplayLevel: 3, // 侧边栏默认展开级别
  search: {
    placeholder: "搜索",
    noData: "找不到结果",
  },
  copyCode: {
    buttonText: "复制",
    errorText: "复制失败",
    successText: "复制成功",
  },
  count: {
    countable: false,
    position: "top",
    margin: "10px",
    float: "right",
    fontsize: "0.9em",
    color: "rgb(90,90,90)",
    language: "chinese",
    isExpected: true,
  },
  customPageTitle: {
    prefix: DocName,
    seprator: "|",
  },
  toc: {
    tocMaxLevel: 6,
    target: "H2, H3, H4, h5, h6",
  },
  progress: {
    position: "top",
    color: "var(--theme-color,#42b983)",
    height: "3px",
  },
  // vueComponents,
  // plugins: [TitleNumberPlugin.install, SidebarCollapsePlugin.install],
};

if (typeof navigator.serviceWorker !== "undefined") {
  navigator.serviceWorker.register("docsify/sw.js");
}

function docsifyInstallPlugin(plugin) {
  window.$docsify.plugins
    ? window.$docsify.plugins.push(plugin.install)
    : (window.$docsify.plugins = [plugin.install]);
}

function docsifyInstallComponent(comp) {
  let instance = new comp();
  let compObj = {
    [instance.name]: instance
  }
  if(window.$docsify.vueComponents) {
    Object.assign(window.$docsify.vueComponents, compObj);
  }else {
    window.$docsify.vueComponents = compObj;
  }
}

docsifyInstallPlugin(TitleNumberPlugin);
docsifyInstallPlugin(SidebarCollapsePlugin);
docsifyInstallPlugin(BreadcrumbPlugin);
docsifyInstallComponent(AuthorInfoComponent);
