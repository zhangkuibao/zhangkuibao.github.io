<template>
  <div class="fixed-example">
    <div class="fixed-example__form">
      <div class="fixed-example__form-item">
        <span class="fixed-example__form-item-label">距顶部</span>
        <input type="number" v-model="top" />
        <span>px</span>
      </div>
      <div class="fixed-example__form-item">
        <span class="fixed-example__form-item-label">距右侧</span>
        <input type="number" v-model="right" />
        <span>px</span>
      </div>

      <div class="fixed-example__form-item">
        <span class="fixed-example__form-item-label">距底部</span>
        <input type="number" v-model="bottom" />
        <span>px</span>
      </div>
      <div class="fixed-example__form-item">
        <span class="fixed-example__form-item-label">距左侧</span>
        <input type="number" v-model="left" />
        <span>px</span>
      </div>
      <div class="fixed-example__form-item">
        <span class="fixed-example__form-item-label">盒子圆角</span>
        <input type="number" v-model="borderRadius" />
        <span>px</span>
      </div>
      <div class="fixed-example__form-item">
        <span class="fixed-example__form-item-label">裁剪图形圆角</span>
        <input type="number" v-model="clipRoundRadius" />
        <span>px</span>
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
  name: "page-example-css-clip-path-inset",
  data() {
    return {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      borderRadius: 10,
      clipRoundRadius: 0,
    };
  },
  computed: {
    roundStr() {
      if (this.clipRoundRadius > 0) {
        return `round ${this.clipRoundRadius}px`;
      }
      return "";
    },
    clipPathStyleStr() {
      return `inset(${this.top}px ${this.right}px ${this.bottom}px ${this.left}px ${this.roundStr})`;
    },
    clipStyle() {
      return {
        "clip-path": this.clipPathStyleStr,
        "border-radius": `${this.borderRadius}px`,
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
