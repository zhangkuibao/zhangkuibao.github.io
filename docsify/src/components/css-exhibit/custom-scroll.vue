<template>
  <css-exhibit-example title="自定义滚动条样式">
    <div class="scroll">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
        Iure id exercitationem nulla qui repellat laborum vitae, <br />
        molestias tempora velit natus. Quas, assumenda nisi. <br />
        Quisquam enim qui iure, consequatur velit sit?
      </p>
    </div>
  </css-exhibit-example>
</template>

<script>
export default {
  name: "css-exhibit-custom_scroll",
  "css-exhibit-component": true,
};
</script>

<style scoped>
/* 3.自定义滚动条 */
.scroll {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 10px 10px;
}

/* 
  ::-webkit-scrollbar 滚动条整体部分
  ::-webkit-scrollbar-thumb  滚动条里面的小方块，能向上向下移动（或往左往右移动，取决于是垂直滚动条还是水平滚动条）
  ::-webkit-scrollbar-track  滚动条的轨道（里面装有Thumb）
  ::-webkit-scrollbar-button 滚动条的轨道的两端按钮，允许通过点击微调小方块的位置。
  ::-webkit-scrollbar-track-piece 内层轨道，滚动条中间部分（除去）
  ::-webkit-scrollbar-corner 边角，即两个滚动条的交汇处
  ::-webkit-resizer 两个滚动条的交汇处上用于通过拖动调整元素大小的小控件 
*/

/* 整个滚动条元素 */
.scroll::-webkit-scrollbar {
  width: 8px;
  /* 设置为0则不显示滚动条且占用宽度为0(仍然可滚动) */
}

/* 滚动条上的轨道 */
.scroll::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(255, 0, 0, 0.3);
  border-radius: 10px;
}

/* 滚动条轨道上可拖拽的元素 */
.scroll::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(112, 0, 0, 0.5);
}
</style>
