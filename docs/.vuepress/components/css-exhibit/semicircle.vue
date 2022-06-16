<template>
  <app-example title="radial-gradient 实现透明半圆">
    <div class="gard"></div>
  </app-example>
</template>

<script>
export default {
  name: "css-exhibit-radial_gradient_semicircle",
  "css-exhibit-component": true,
};
</script>

<style scoped>
.gard {
  position: relative;
  height: 20px;
  width: 300px;
  background: radial-gradient(circle at left bottom, transparent 10px, #999 0)
      left top / calc(50%) 10px no-repeat,
    radial-gradient(circle at right bottom, transparent 10px, #999 0) right top /
      calc(50%) 10px no-repeat,
    radial-gradient(circle at left top, transparent 10px, #999 0) bottom left /
      calc(50%) 10px no-repeat,
    radial-gradient(circle at right top, transparent 10px, #999 0) bottom right /
      calc(50%) 10px no-repeat;
}

.gard:after {
  position: absolute;
  top: 50%;
  left: 10px;
  display: block;
  width: calc(100% - 20px);
  border-top: 1px dashed #fff;
  content: "";
}
</style>
