<template>
  <div class="fixed-example">
    <div class="fixed-example__form">
      <div class="fixed-example__form-item">
        <span class="fixed-example__form-item-label">top</span>
        <input type="number" v-model="top" />
      </div>
      <div class="fixed-example__form-item">
        <span class="fixed-example__form-item-label">right</span>
        <input type="number" v-model="right" />
      </div>

      <div class="fixed-example__form-item">
        <span class="fixed-example__form-item-label">bottom</span>
        <input type="number" v-model="bottom" />
      </div>
      <div class="fixed-example__form-item">
        <span class="fixed-example__form-item-label">left</span>
        <input type="number" v-model="left" />
      </div>
      <div class="fixed-example__form-item">
        <span class="fixed-example__form-item-label">borderRadius</span>
        <input type="number" v-model="borderRadius" />
      </div>
      <div class="fixed-example__form-item">
        <span class="fixed-example__form-item-label">clipRoundRadius</span>
        <input type="number" v-model="clipRoundRadius" />
      </div>
    </div>
    <div style="margin-bottom: 10px;font-weight:700">当前样式：clip-path:{{clipPathStyleStr}}</div>
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
      return ''
    },
    clipPathStyleStr() {
      return `inset(${this.top}px ${this.right}px ${this.bottom}px ${this.left}px ${this.roundStr})`
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
  padding: 10px;
  border: 20px solid red;
}

.fixed-example__form {
  overflow: hidden;
}

.fixed-example__form-item {
  margin-bottom: 10px;
  margin-right: 10px;
  float:left;
}

.fixed-example__form-item-label {
  margin-right: 5px;
}
</style>
