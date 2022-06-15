<template>
  <app-example title="蛇形边框">
    <div class="snake-border"></div>
  </app-example>
</template>

<script>
export default {
  name: "css-exhibit-snake_border",
  'css-exhibit-component': true
};
</script>

<style scoped>

.snake-border {
  border: none;
  background-color: rgb(0, 238, 247);
  position: relative;
  width: 100px;
  height: 100px;
}
.snake-border::before,
.snake-border::after {
  content: "";
  top: -5px;
  bottom: -5px;
  left: -5px;
  right: -5px;
  position: absolute;
}
.snake-border::before {
  border: 5px solid rgb(240, 0, 220);
  animation: move 5s linear infinite;
}
.snake-border::after {
  border: 5px solid red;
  animation: move 5s linear infinite -2.5s;
}
@keyframes move {
  0%,
  100% {
    clip: rect(0px 110px 5px 0px);
  }
  25% {
    clip: rect(0px 110px 110px 105px);
  }
  50% {
    clip: rect(105px 110px 110px 0px);
  }
  75% {
    clip: rect(0px 5px 110px 0px);
  }
}
</style>
