<template>
  <div class="fixed-example">
    <label for="setTransform">父元素设置transform</label>
    <input id="setTransform" type="checkbox" checked="true"/>
    <div class="fixed-example-wrapper">
      <div class="fixed-example-wrapper-fixed"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "page-example-fixed-invalid",
};
</script>

<style scoped>
.fixed-example {
  user-select: none;
}

#setTransform:checked + div {
  transform: translateX(0);
}

.fixed-example-wrapper {
  background: green;
  height: 200px;
  width: 200px;
}
.fixed-example-wrapper-fixed {
  width: 100px;
  height: 100px;
  background: red;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11111111111;
}
</style>
