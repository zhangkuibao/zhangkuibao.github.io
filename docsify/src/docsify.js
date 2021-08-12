const DocName = "张魁堡的笔记";

export const docsify = {
  name: DocName,
  // nameLink: '',
  // repo: "http://www.baidu.com",
  // loadSidebar: "docsify/_sidebar.md",
  loadSidebar: true,
  // autoHeader: true,
  loadNavbar: "docsify/assets/_navbar.md",
  alias: {
    ".*/_navbar.md": "docsify/assets/_navbar.md",
    "/_sidebar.md": "技术笔记/编程基础/_sidebar.md",
    // "/技术笔记/编程基础/编程语言/CSS/_sidebar.md": "/技术笔记/编程基础/_sidebar.md",
    // "/.*/_sidebar.md": "/_sidebar.md", // See #301
  },
  // coverpage: "docsify/_coverpage.md",
  auto2top: true,
  // mergeNavbar: true,
  formatUpdated: "{YYYY}-{MM}-{DD} {HH}:{mm}",
  // routerMode: 'history',
  notFoundPage: "docsify/assets/_404.md",
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

export function docsifyInstallPlugin(plugin) {
  docsify.plugins
    ? docsify.plugins.push(plugin.install)
    : (docsify.plugins = [plugin.install]);
}
export function docsifyInstallComponent(comp) {
  let instance = new comp();
  let compObj = {
    [instance.name]: instance,
  };
  if (docsify.vueComponents) {
    Object.assign(docsify.vueComponents, compObj);
  } else {
    docsify.vueComponents = compObj;
  }
}

window.$docsify = docsify;
