// 加载自定义内容
import "./css/index.scss";
import TitleNumberPlugin from "./plugins/TitleNumberPlugin";
import SidebarCollapsePlugin from "./plugins/SidebarCollapsePlugin";
import BreadcrumbPlugin from "./plugins/BreadcrumbPlugin";
import AuthorInfoComponent from "./components/auth-info";
import { docsifyInstallPlugin, docsifyInstallComponent } from "./docsify";
docsifyInstallPlugin(TitleNumberPlugin);
docsifyInstallPlugin(SidebarCollapsePlugin);
docsifyInstallPlugin(BreadcrumbPlugin);
docsifyInstallComponent(AuthorInfoComponent);

// 加载docsify官方插件
import "../assets/cdn/docsify@4.js";


if (typeof navigator.serviceWorker !== "undefined") {
  navigator.serviceWorker.register("docsify/assets/sw.js");
}
