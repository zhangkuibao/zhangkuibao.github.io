<template>
  <app-example title="动态下划线">
    <div class="underline">hover me</div>
  </app-example>
</template>

<script>
export default {
  name: "css-exhibit-dynamic_underline",
  "css-exhibit-component": true,
};
</script>

<style scoped>
.underline {
  font-size: 20px;
  overflow: hidden;
  position: relative;
  cursor: context-menu;
}

.underline::before {
  content: "";
  height: 3px;
  width: 100%;
  position: absolute;
  bottom: 0px;
  right: 100%;
  background: linear-gradient(to right, red, blue);
}
.underline:hover::before {
  animation: move1 1s linear infinite;
}
@keyframes move1 {
  0% {
    right: 100%;
  }
  100% {
    right: -100%;
  }
}
</style>
