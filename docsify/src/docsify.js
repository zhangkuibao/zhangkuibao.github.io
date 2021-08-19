const DocName = "张魁堡的笔记";

export let docsify = window.$docsify
  ? window.$docsify
  : {
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
        [encodeURI(
          "/技术笔记/编程基础/.*/_sidebar.md"
        )]: "技术笔记/编程基础/_sidebar.md",
        [encodeURI(
          "/技术笔记/底层知识/.*/_sidebar.md"
        )]: "技术笔记/底层知识/_sidebar.md",
        [encodeURI(
          "/技术笔记/解决方案/.*/_sidebar.md"
        )]: "技术笔记/解决方案/_sidebar.md",
        [encodeURI(
          "/技术笔记/开发工具/.*/_sidebar.md"
        )]: "技术笔记/开发工具/_sidebar.md",
        [encodeURI(
          "/技术笔记/代码库/.*/_sidebar.md"
        )]: "技术笔记/代码库/_sidebar.md",
        [encodeURI(
          "/阅读笔记/电子栏目/.*/_sidebar.md"
        )]: "阅读笔记/电子栏目/_sidebar.md",
        [encodeURI(
          "/阅读笔记/读书/.*/_sidebar.md"
        )]: "阅读笔记/读书/_sidebar.md",
        [encodeURI(
          "/阅读笔记/好句/.*/_sidebar.md"
        )]: "阅读笔记/好句/_sidebar.md",
        [encodeURI(
          "/阅读笔记/知识/.*/_sidebar.md"
        )]: "阅读笔记/知识/_sidebar.md",
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
      // sidebarDisplayLevel: 1, // 侧边栏默认展开级别
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
      sidebarCollapse: {
        closeLevel: 2,  // 默认收起等级
      },
      vueComponents: {},
      vueGlobalOptions: {
        data() {
          let vueComponentsList = [];
          for(let prop in docsify.vueComponents) {
            let item = docsify.vueComponents[prop];
            if(item['css-exhibit-component']) {
              vueComponentsList.push(item);
            }
          }
          return {
            vueComponentsList
          }
        }
      },
      // plugins: [TitleNumberPlugin.install, SidebarCollapsePlugin.install],
    };

export function docsifyInstallPlugin(plugin) {
  docsify.plugins
    ? docsify.plugins.push(plugin.install)
    : (docsify.plugins = [plugin.install]);
}
export function docsifyInstallComponent(comp) {
  let compObj = {
    [comp.name]: comp,
  };
  if (docsify.vueComponents) {
    Object.assign(docsify.vueComponents, compObj);
  } else {
    docsify.vueComponents = compObj;
  }
}

window.$docsify = docsify;
