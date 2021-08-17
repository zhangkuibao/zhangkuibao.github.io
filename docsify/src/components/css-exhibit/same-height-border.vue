<template>
  <css-exhibit-example title="border实现等高">
    <div class="sameHeight_borderBox">
      <div class="left">
        <div>1</div>
        <div>1</div>
      </div>
      <div class="right">
        <div>1</div>
      </div>
    </div>
  </css-exhibit-example>
</template>

<script>
export default {
  name: "css-exhibit-same_height_border",
  "css-exhibit-component": true,
};
</script>

<style scoped>
/* 10.用border实现等高布局 */
.sameHeight_borderBox {
  background: blue;
  border-left: 70px solid red;
  height: auto;
  color: #fff;
}
.sameHeight_borderBox .left {
  width: 70px;
  margin-left: -70px;
  float: left;
}
.sameHeight_borderBox .right {
  width: 70px;
}
</style>
