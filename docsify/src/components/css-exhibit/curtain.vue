<template>
  <app-example title="radial-gradient 实现帘幕效果">
    <div style="margin-bottom: 20px;">
      来源于：<a :href="hrefLink" target="_blank">{{ hrefText }}</a>
    </div>
    <div class="radial-gradient"></div>
  </app-example>
</template>

<script>
export default {
  name: "css-exhibit-radial_gradient_curtain",
  "css-exhibit-component": true,
  data() {
    return {
      hrefLink:
        "https://www.zhangxinxu.com/wordpress/2017/11/css3-radial-gradient-syntax-example/",
      hrefText: "10个demo示例学会CSS3 radial-gradient径向渐变",
    };
  },
};
</script>

<style scoped>
.radial-gradient {
  width: 200px;
  height: 100px;
  background: red;
  position: relative;
}
.radial-gradient:after {
  content: "";
  position: absolute;
  height: 10px;
  left: 0;
  right: 0;
  bottom: -10px;
  background: radial-gradient(
    20px 15px ellipse at top,
    red 10px,
    transparent 11px
  );
  background-size: 20px 10px;
}
</style>
