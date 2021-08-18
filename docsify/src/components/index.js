import { docsifyInstallComponent } from "../docsify";
const requireComponent = require.context("./", true, /\w+\.(vue|js)$/);
requireComponent.keys().forEach((fileName) => {
  if (fileName !== "./index.js") {
    let cmp = requireComponent(fileName).default;
    docsifyInstallComponent(cmp);
  }
});
