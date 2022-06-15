<template>
  <app-example title="纯css选项卡">
    <div class="cssTag">
      <div class="demo">
        <div class="tag">1<input type="text" id="tag1" /></div>
        <div class="tag">2<input type="text" id="tag2" /></div>
        <div class="tag">3<input type="text" id="tag3" /></div>
        <div class="tag">4<input type="text" id="tag4" /></div>
      </div>
      <div class="link">
        <label for="tag1">1</label>
        <label for="tag2">2</label>
        <label for="tag3">3</label>
        <label for="tag4">4</label>
      </div>
    </div>
    <template v-if="false">
      <div class="details">
        利用label的for属性连接input,input的focus特性会让其被展示到窗口内,将input高度设置与要展示的一屏相同,将input类型设置为radio效果更好
      </div>
      <div class="bug">
        focus事件在移动端会默认调起输入法, 用radio不会出现这种情况
      </div>
    </template>
  </app-example>
</template>

<script>
export default {
  name: "css-exhibit-tab",
  "css-exhibit-component": true,
};
</script>

<style scoped>
.cssTag {
  width: 400px;
  height: 200px;
}

.cssTag .tag {
  padding: 8px;
}
.cssTag .demo {
  height: 70%;
  border: 1px solid #000;
  overflow: hidden;
}
.cssTag .demo .tag {
  height: 100%;
  position: relative;
}
.cssTag .demo input {
  width: 0;
  height: inherit;
  outline: none;
  border: none;
  position: absolute;
  top: 0;
}
.cssTag .link label {
  display: inline-block;
  width: 20px;
  border: 1px solid #000;
  cursor: pointer;
}
</style>
