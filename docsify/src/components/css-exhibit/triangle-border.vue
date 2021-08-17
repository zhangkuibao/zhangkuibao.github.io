<template>
  <css-exhibit-example title="三角边框">
    <div class="find-div-body"></div>
  </css-exhibit-example>
</template>

<script>
export default {
  name: "css-exhibit-triangle_border",
  "css-exhibit-component": true,
};
</script>

<style scoped>
/* 5.三角边框 */
.find-div-body {
  position: relative;
  right: 0px;
  width: 80%;
  height: 80%;
  padding: 8px;
  background-color: #ffffff;
  border: #cccccc solid 1px;
  border-radius: 3px;
}
.find-div-body:before {
  box-sizing: content-box;
  width: 0px;
  height: 0px;
  position: absolute;
  top: -16px;
  right: 41px;
  padding: 0;
  border-bottom: 8px solid #ffffff;
  border-top: 8px solid transparent;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  display: block;
  content: "";
  z-index: 12;
}
.find-div-body:after {
  box-sizing: content-box;
  width: 0px;
  height: 0px;
  position: absolute;
  top: -18px;
  right: 40px;
  padding: 0;
  border-bottom: 9px solid #cccccc;
  border-top: 9px solid transparent;
  border-left: 9px solid transparent;
  border-right: 9px solid transparent;
  display: block;
  content: "";
  z-index: 10;
}
</style>
