import { docsifyInstallComponent } from "../docsify";
const requireComponent = require.context("./", true, /\w+\.(vue|js)$/);
const ignoreFileList = ['./index.js','./image-preview.vue'];
requireComponent.keys().forEach((fileName) => {
  if (!ignoreFileList.includes(fileName)) {
    let cmp = requireComponent(fileName).default;
    docsifyInstallComponent(cmp);
  }
});
