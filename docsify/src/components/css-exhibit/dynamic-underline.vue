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
  position: relative;
  padding-bottom: 5px;
  overflow: hidden;
  display: inline-block;
  line-height: 1em;
  height: 1em;
}

.underline::before {
  content: "";
  height: 3px;
  width: 100%;
  position: absolute;
  bottom: 0px;
  transform: translate(-100%);
  background: linear-gradient(to right, red, blue);
}
.underline:hover::before {
  animation: move1 1s linear infinite;
}
@keyframes move1 {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
