<template>
  <app-example title="无限滚动">
    <div class="wrapper">
      <div class="view-window">
        <div
          class="list"
          :style="{
            animation: animationStyle,
            height: `calc(${viewCount} * 25px)`,
          }"
        >
          <div class="list-item" v-for="(item, index) in list" :key="index">
            {{ item }}
          </div>
        </div>
      </div>
      <div>
        <div>
          <span>元素数量</span>
          <input type="number" v-model="listLength" />
        </div>
        <div>
          <span>展示数量</span>
          <input type="number" v-model="viewCount" />
        </div>
      </div>
    </div>
  </app-example>
</template>

<script>
// 生成滚动动画样式
function initCommentStyle(length, animationName) {
  let styleHtml = getCommentStyleTemp(length, animationName);
  let styleDom = document.createElement("style");
  styleDom.innerHTML = styleHtml;
  document.head.appendChild(styleDom);
  return `${animationName} ${length * 2 + 1}s ease-out infinite`;
}

// 获取评论样式模板
function getCommentStyleTemp(length, animationName = "scroll-infinite") {
  let str = "";
  let animationItemLength = 2 * length;
  let progress = (10 / animationItemLength) * 10;
  let scrollToIndex = 0;
  for (let i = 0; i <= animationItemLength; i++) {
    if (i % 2 === 0 && i > 0) {
      scrollToIndex++;
    }
    str += getCommentStyleAnimationItemTemp(
      progress * i,
      scrollToIndex,
      "25px"
    );
  }
  return `@keyframes ${animationName}{${str}}`;
}

// 获取单个动画样式模板
function getCommentStyleAnimationItemTemp(progressNum, num, itemHeight) {
  return `
  ${progressNum}% {
    transform: translateY(calc(${num} * -${itemHeight}));
  }
`;
}

export default {
  name: "css-exhibit-scroll_infinite",
  "css-exhibit-component": true,
  data() {
    return {
      animationStyle: "",
      list: [],
      viewCount: 4,
      listLength: 5,
    };
  },
  watch: {
    listLength() {
      this.initScrollList();
    },
    viewCount() {
      this.initScrollList();
    },
  },
  methods: {
    initListData() {
      this.list = [];
      for (let i = 1; i <= this.listLength; i++) {
        this.list.push(`item-${i}`)
      }
      if (this.list.length < this.viewCount) {
        this.viewCount = this.list.length;
      }
      if (this.list.length > 1) {
        this.list = this.list.concat(this.list.slice(0, this.viewCount));
      }
    },
    initScrollList() {
      this.initListData();
      let animationName = "scroll-infinite";
      this.initListData();
      this.animationStyle = initCommentStyle(this.list.length - this.viewCount, animationName);
    },
  },
  created() {
    this.initScrollList();
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
}

.view-window {
  overflow: hidden;
  border: 1px solid;
  margin-right: 20px;
  padding: 0 10px;
}

.list-item {
  height: 25px;
  line-height: 25px;
}
</style>
