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
import Prism from "prismjs";
export default {
  name: "app-example",
  props: ["title"],
  data() {
    return {
      codeHtml: "",
      exampleFileUrl: "",
    };
  },
  methods: {
    initExampleFileInfo() {
      this.exampleFileUrl = this.$parent.$options.__file;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
</style>
