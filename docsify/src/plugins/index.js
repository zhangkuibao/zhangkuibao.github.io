import { docsifyInstallPlugin } from "../docsify";
const requirePlugin = require.context("./", true, /\w+\.js$/);
requirePlugin.keys().forEach((fileName) => {
  if (fileName !== "./index.js") {
    let plugin = requirePlugin(fileName).default;
    docsifyInstallPlugin(plugin);
  }
});
