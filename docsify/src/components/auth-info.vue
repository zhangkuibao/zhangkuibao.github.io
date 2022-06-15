<template>
  <div class="wrapper">
    <p v-if="false">作者：{{ author }}</p>
    <p>最后更新日期：{{ date | getFullTime }}</p>
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
  filters: {
    getFullTime(time) {
      let date = new Date(Number(time)), //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        Y = date.getFullYear() + "",
        M =
          date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1,
        D = date.getDate() < 10 ? "0" + date.getDate() : date.getDate(),
        h = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
        m =
          date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
        s =
          date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      return `${Y}-${M}-${D} ${h}:${m}:${s}`;
    },
  },
};
</script>

<style scoped>
.wrapper {
  color: #567;
}
</style>
