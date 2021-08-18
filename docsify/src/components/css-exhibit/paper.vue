<template>
  <app-example title="点击涟漪效果">
    <div class="paper" ref="paper">
      <div class="ripple"></div>
    </div>
  </app-example>
</template>

<script>
export default {
  name: "css-exhibit-paper",
  "css-exhibit-component": true,
  mounted() {
    // 点击涟漪效果
    this.$refs.paper.onmousedown = (e) => {
      var ripple = this.$refs.paper.querySelector(".ripple");
      ripple.classList.remove("animate");
      ripple.style.top = e.offsetY + 'px';
      ripple.style.left = e.offsetX + 'px';
      ripple.classList.add('animate');
    };
  },
};
</script>

<style scoped>
.paper {
  background-color: #fffeff;
  width: 80%;
  height: 40px;
  overflow: hidden;
  position: relative;
  margin-bottom: 16px;
  box-shadow: 0px 1px 2px 1px #d3d2d3;
  border-radius: 2px;
  transition: 0.1s ease-in;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.paper:hover {
  cursor: pointer;
}

.ripple {
  background-color: rgba(0, 0, 0, 0.45);
  border-radius: 100%;
  height: 20px;
  width: 20px;
  position: relative;
  transform: scale(0);
}

.animate {
  -webkit-animation: ripple 0.4s linear;
  animation: ripple 0.4s linear;
}

@keyframes ripple {
  100% {
    transform: scale(20);
    background-color: transparent;
  }
}
</style>
