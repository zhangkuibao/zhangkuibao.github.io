<template>
  <app-example title="clip-path 实现向右卷起效果">
    <div class="wrapper">
      <div class="display-box">
        <div>将鼠标放在红色区域内</div>
        <div>元素会向右收起</div>
        <img
          style="width: 100px"
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F02%2F2109242312005c1-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653116103&t=d3ee38e4904ce1fdc1eb759f60163c66"
          alt=""
        />
      </div>
    </div>
  </app-example>
</template>

<script>
export default {
  name: "css-exhibit-toggle_display_status",
  "css-exhibit-component": true,
};
</script>

<style scoped>
.display-box {
  padding: 10px;
  background: red;
  transition: 1s;
  clip-path: inset(0 0 0 0);
}

.wrapper {
  border: 1px solid;
}

.wrapper:hover .display-box {
  clip-path: inset(0 0 0 100%);
}
</style>
