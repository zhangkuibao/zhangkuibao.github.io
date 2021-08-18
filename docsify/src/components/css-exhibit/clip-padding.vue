<template>
  <app-example title="同心圆">
    <div class="clipPadding">
      <!-- <div class="icon_menu"></div> -->
      <div class="icon_dot"></div>
    </div>
  </app-example>
</template>

<script>
export default {
  name: "css-exhibit-clip_padding",
  "css-exhibit-component": true,
};
</script>

<style scoped>
/* .clipPadding .icon_menu {
  display: inline-block;
  padding: 10px 0;
  width: 50px;
  height: 5px;
  border-top: 5px solid #000;
  border-bottom: 5px solid #000;
  background-color: currentColor;
  background-clip: content-box;
  margin-top: 10px;
  margin-bottom: 20px;
} */
.clipPadding .icon_dot {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding: 10px;
  border: 5px solid #000;
  background-color: #000;
  background-clip: content-box;
  /* 保留 content-box */
}
</style>
