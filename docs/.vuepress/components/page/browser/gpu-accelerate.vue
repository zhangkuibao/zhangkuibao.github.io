<template>
  <div>
    <h1 id="title" :class="classObj">
      开启硬件加速不一定会创建复合图层
    </h1>
    <div>打开 chrome layers 可以看到【添加动画】时后面的所有元素都会创建复合图层，【硬件加速】时并不会创建</div>
    <label>
      <input type="checkbox" v-model="animateChecked" />
      【添加动画】为H1添加动画效果
    </label>
    <label>
      <input type="checkbox" v-model="transformChecked" />
      【硬件加速】为H1添加translateZ(0)
    </label>
    <ul id="list">
      <li class="album-item" v-for="item in 5" :key="item">
        <div class="img"></div>
        hello world
        <div class="time">2015-09</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app-example-browser-gpu-accelerate",
  data() {
    return {
      animateChecked: false,
      transformChecked: false,
    };
  },
  computed: {
    classObj() {
      return {
        "animation-class": this.animateChecked,
        "transform-class": this.transformChecked,
      };
    },
  },
};
</script>

<style scoped>
@keyframes move {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0px);
  }
}

.animation-class {
  animation: move 1s linear infinite;
}

.transform-class {
  transform: translateZ(0);
}

h1 {
  font-size: 20px;
  position: "relative";
  z-index: 1;
}
a {
  color: #888;
  text-decoration: none;
}
div {
  overflow: hidden;
}
ul {
  margin: 5px;
  padding: 0;
}
li {
  position: relative;
  height: 30px;
  overflow: hidden;
  border-top: 1px dotted #ccc;
  padding: 5px 20px 5px 40px;
  font-size: 20px;
}
.img {
  width: 30px;
  height: 30px;
  position: absolute;
  left: 3px;
  top: 4px;
  background: red;
}
.time {
  position: absolute;
  right: 5px;
  top: 4px;
  font-size: 12px;
  color: #999;
}
label {
  display: block;
  margin: 10px 5px;
  color: red;
}
input {
  vertical-align: middle;
}
</style>
