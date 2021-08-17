<template>
  <css-exhibit-example title="等高布局">
    <div class="sameHeight">
      <div class="sh_left">
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </div>
      <div class="sh_right">
        <div>1</div>
      </div>
    </div>
  </css-exhibit-example>
</template>

<script>
export default {
  name: "css-exhibit-same_height",
  "css-exhibit-component": true,
};
</script>

<style scoped>
.sameHeight {
  width: 80%;
  height: 80%;
  display: inline-block;
  border: 1px solid #000;
  overflow: hidden;
  color: #fff
}
.sameHeight .sh_left,
.sameHeight .sh_right {
  width: 50%;
  float: left;
  padding-bottom: 9999px;
  margin-bottom: -9999px;
}
.sameHeight .sh_left {
  background: red;
}
.sameHeight .sh_right {
  background: blue;
}
</style>
