<template>
  <css-exhibit-example title="margin:auto垂直居中">
    <div class="autoMargin">
      <div></div>
    </div>
  </css-exhibit-example>
</template>

<script>
export default {
  name: "css-exhibit-auto_margin",
  "css-exhibit-component": true,
};
</script>

<style scoped>
.autoMargin {
  width: 80%;
  height: 80%;
  border: 1px solid #000;
  position: relative;
}
.autoMargin > div {
  position: absolute;
  background: red;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 50px;
  width: 50px;
  margin: auto;
}
</style>
