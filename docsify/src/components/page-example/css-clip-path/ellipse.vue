<template>
  <div class="fixed-example">
    <div class="fixed-example__form">
      <div class="fixed-example__form-item">
        <span class="fixed-example__form-item-label">水平裁剪半径</span>
        <input type="number" v-model="clipDegreeX" />
        <span>px</span>
      </div>
      <div class="fixed-example__form-item">
        <span class="fixed-example__form-item-label">垂直裁剪半径</span>
        <input type="number" v-model="clipDegreeY" />
        <span>px</span>
      </div>
      <div class="fixed-example__form-item">
        <span class="fixed-example__form-item-label">圆心水平位置</span>
        <input type="number" v-model="vertical" />
        <span>%</span>
      </div>
      <div class="fixed-example__form-item">
        <span class="fixed-example__form-item-label">圆心垂直位置</span>
        <input type="number" v-model="horizontal" />
        <span>%</span>
      </div>
    </div>
    <div style="margin-bottom: 10px; font-weight: 700">
      当前样式：
      <div>height: 100px;</div>
      <div>width: 100px;</div>
      <div>border-size: 20px;</div>
      <div>clip-path:{{ clipPathStyleStr }}</div>
    </div>
    <div class="example-box" :style="clipStyle"></div>
  </div>
</template>

<script>
export default {
  name: "page-example-css-clip-path-ellipse",
  data() {
    return {
      clipDegreeX: 20,
      clipDegreeY: 50,
      horizontal: 50,
      vertical: 50,
    };
  },
  computed: {
    positionStr() {
      return ` at ${this.horizontal}% ${this.vertical}%`;
    },
    clipPathStyleStr() {
      return `ellipse(${this.clipDegreeX}px ${this.clipDegreeY}px ${this.positionStr})`;
    },
    clipStyle() {
      return {
        "clip-path": this.clipPathStyleStr,
      };
    },
  },
};
</script>

<style scoped>
.fixed-example {
  padding: 10px;
}

.example-box {
  height: 100px;
  width: 100px;
  background: #000;
  border: 20px solid red;
  box-sizing: border-box;
}

.fixed-example__form {
  overflow: hidden;
}

.fixed-example__form-item {
  margin-bottom: 10px;
  margin-right: 30px;
  float: left;
}

input {
  width: 50px;
  margin: 0 5px;
}
</style>
