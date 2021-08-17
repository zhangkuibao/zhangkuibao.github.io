import { docsifyInstallComponent } from "../docsify";
import Vue from 'vue'

const requireComponent = require.context(
  "../components/css-exhibit",
  false,
  /\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
  let cmp = requireComponent(fileName).default;
  docsifyInstallComponent(cmp);
});