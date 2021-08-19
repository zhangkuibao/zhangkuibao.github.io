<template>
  <app-example title="vertical 实现水平垂直居中">
    <div class="verBox" ref="verBox">
      <div class="vbWrap"></div>
    </div>
  </app-example>
</template>

<script>
export default {
  name: "css-exhibit-center_vertical",
  "css-exhibit-component": true,
};
</script>

<style scoped>
.verBox {
  width: 100px;
  height: 100px;
  position: relative;
  border: 1px solid #000;
  /* text-align 实现水平居中 */
  text-align: center;
  /* 关键代码1: 
    字体为0后基线位置就等于元素上边沿(x-height/2 --- 0/2) 
  */
  font-size: 0;
}
.verBox:after {
  content: "";
  display: inline-block;
  vertical-align: middle;
  /* 关键代码2: 
    未设高度时after中的文本与容器内的文本对齐,设置高度后中心点的位置不断变化
    设置伪元素高度为可视窗口的100%, 通过缓慢增加发现高度增加到超过弹窗容器高度时开始向下增加(css默认左上方排列) 
  */
  height: 100%;
}
.verBox .vbWrap {
  display: inline-block;
  vertical-align: middle;
  width: 50px;
  height: 50px;
  background: red;
}
</style>
