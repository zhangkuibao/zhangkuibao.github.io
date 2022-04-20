<template>
  <div class="fixed-example">
    <div style="margin-bottom: 10px;">顶点：<button @click="addVertex">增加顶点</button></div>
    <div class="fixed-example__form">
      <div
        style="display: flex; float: left"
        v-for="(vertex, idx) in vertexList"
        :key="idx"
      >
        <div>顶点{{ idx + 1 }}：</div>
        <div class="fixed-example__form-item">
          <span class="fixed-example__form-item-label">x</span>
          <input type="number" v-model="vertex[0]" />
          <span>%</span>
        </div>
        <div class="fixed-example__form-item">
          <span class="fixed-example__form-item-label">y</span>
          <input type="number" v-model="vertex[1]" />
          <span>%</span>
        </div>
        <button
          @click="removeVertex(idx)"
          style="line-height: 10px; height: 20px; font-size: 0.8em"
        >
          删除
        </button>
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
  name: "page-example-css-clip-path-polygon",
  data() {
    return {
      vertexList: [
        [50, 0],
        [100, 50],
        [50, 100],
        [0, 50],
      ],
    };
  },
  computed: {
    clipPathStyleStr() {
      let strList = [];
      this.vertexList.forEach((vertex) => {
        strList.push(`${vertex[0]}% ${vertex[1]}%`);
      });
      return `polygon(${strList.join(",")})`;
    },
    clipStyle() {
      return {
        "clip-path": this.clipPathStyleStr,
        "border-radius": `${this.borderRadius}px`,
      };
    },
  },
  methods: {
    addVertex() {
      this.vertexList.push([0, 0]);
    },
    removeVertex(index) {
      if (this.vertexList.length <= 3) {
        return;
      }
      this.vertexList.splice(index, 1);
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
  display: flex;
}

input {
  width: 50px;
  margin: 0 5px;
}
</style>
