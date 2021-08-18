<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <div>{{ title }}</div>
    </div>
    <div class="example-content">
      <slot />
    </div>
    <el-collapse>
      <el-collapse-item title="显示代码">
        <div style="margin-bottom: 10px;">文件位置：{{ exampleFileUrl }}</div>
        <div style="background-color: #f8f8f8;padding:16px;">
          <code v-html="codeHtml"></code>
        </div>
      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>

<script>
import {
  Tabs,
  TabPane,
  Card,
  Button,
  Collapse,
  CollapseItem,
} from "element-ui";
import Prism from "prismjs";
export default {
  name: "app-example",
  props: ["title", "file"],
  components: {
    [Tabs.name]: Tabs,
    [TabPane.name]: TabPane,
    [Card.name]: Card,
    [Button.name]: Button,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
  },
  data() {
    return {
      codeHtml: "",
      exampleFileUrl: "",
      exampleFileName: "",
      showCollapse: 0,
    };
  },
  methods: {
    initExampleFileInfo() {
      this.exampleFileUrl = this.$parent.$options.__file;
      let arr = this.exampleFileUrl.split("/");
      this.exampleFileName = arr.slice(arr.length - 2).join("/");
    },
    initExampleCodeHtml() {
      if (this.exampleFileUrl) {
        fetch(this.exampleFileUrl).then((res) => {
          res.text().then((text) => {
            this.codeHtml = Prism.highlight(text, Prism.languages.html, "html");
          });
        });
      }
    },
  },
  mounted() {
    this.initExampleFileInfo();
    this.initExampleCodeHtml();
  },
};
</script>

<style scoped>
.box-card:not(:last-of-type) {
  margin-bottom: 20px;
}

.example-content {
  height: 200px;
  display: flex;
  align-content: center;
  justify-content: center;
  /* width: 100%;
  flex: 1;

  height: calc(100% - 2em - 10px); */
}
</style>
