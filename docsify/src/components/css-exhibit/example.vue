<template>
  <div class="part">
    <div class="descript">{{ title }}</div>
    <div class="example-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "css-exhibit-example",
  props: ["title"],
};
</script>

<style scoped>
.part {
  width: 170px;
  height: 170px;
  margin: 10px 10px 30px 10px;
  border: 1px dashed #000;
  position: relative;
  user-select: none;
  /* 取消事件响应 */
  /* pointer-events: none;  */
}
.descript {
  margin-bottom: 10px;
  line-height: 2;
  color: #333;
  text-align: center;
}

.example-content {
  width: 100%;
  flex: 1;
  display: flex;
  align-content: center;
  justify-content: center;
  height: calc(100% - 2em - 10px);
}
</style>
