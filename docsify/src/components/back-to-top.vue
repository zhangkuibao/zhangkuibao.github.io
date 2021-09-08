<template>
  <div v-show="showKey" class="backToTop" @click="backToTop">
    <div class="el-icon-caret-top"></div>
  </div>
</template>

<script>

import { Icon} from 'element-ui'
export default {
  components: {
    [Icon.name]: Icon
  },
  data() {
    return {
      showKey: false,
    };
  },
  methods: {
    show() {
      this.showKey = true;
    },
    hide() {
      this.showKey = false;
    },
    backToTop() {
      window.scrollTo({ behavior: "smooth", top: 0 });
    },
  },
};
</script>

<style scoped>
.backToTop {
  position: fixed;
  right: 5vw;
  bottom: 10vh;
  cursor: pointer;
  position: fixed;
  background-color: #fff;
  width: 40px;
  height: 40px;
  line-height: 0;
  border-radius: 50%;
  color: #42b983;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: 0 0 6px rgb(0 0 0 / 12%);
}
</style>
