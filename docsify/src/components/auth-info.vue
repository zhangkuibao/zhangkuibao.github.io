<template>
  <div class="wrapper">
    <p v-if="false">作者：{{ author }}</p>
    <p>最后更新日期：{{ date }}</p>
  </div>
</template>

<script>
export default {
  name: "author-info",
  props: ["date"],
  data() {
    return {
      author: "张魁堡",
    };
  },
};
</script>

<style scoped>
.wrapper {
    color: #567;
}
</style>
