<template>
  <app-example title="vertical实现垂直居中">
    <button id="toggleVer">显示/隐藏</button>
    <div class="verBox" ref="verBox">
      <div class="vbWrap">
        <div class="vbContent">内容</div>
      </div>
    </div>
  </app-example>
</template>

<script>
export default {
  name: "css-exhibit-center_vertical",
  "css-exhibit-component": true,
  mounted() {
    toggleVer.onclick = (e) => {
      this.$refs.verBox.style.visibility = "visible";
    };
    this.$refs.verBox.onclick = (e) => {
      this.$refs.verBox.style.visibility = "hidden";
    };
  },
};
</script>

<style scoped>

#toggleVer {
  height: 2em;
}
.verBox {
  visibility: hidden;
  width: auto;
  height: auto;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.5);
  /* 关键代码1: 字体为0后基线位置就等于元素上边沿(x-height/2 --- 0/2) */
  font-size: 0;
}
.verBox:after {
  content: "";
  color: #fff;
  display: inline-block;
  /* 关键代码2: 
        未设高度时after中的文本与容器内的文本对齐,设置高度后中心点的位置不断变化
        设置伪元素高度为可视窗口的100%, 通过缓慢增加发现高度增加到超过弹窗容器高度时开始向下增加(css默认左上方排列) */
  height: 100%;
  vertical-align: middle;
}
.verBox .vbWrap {
  background-color: #fff;
  border-radius: 6px;
  font-size: 14px;
  display: inline-block;
  vertical-align: middle;
}

.verBox .vbWrap .vbContent {
  width: 240px;
  height: 120px;
  padding: 20px;
}
</style>
