<template>
  <app-example title="菜单">
    <div>
      <input
        type="text"
        placeholder="焦点放在input中然后按table键"
        tabIndex="1"
        style="width: 200px;margin-bottom: 20px;"
      />
      <div class="hoverManu" tabIndex="2">
        hover或focus时显示菜单
        <ul class="menu">
          <li>收藏</li>
          <li>关注</li>
        </ul>
      </div>
    </div>
  </app-example>
</template>

<script>
export default {
  name: "css-exhibit-hover_manu",
  "css-exhibit-component": true,
};
</script>

<style scoped>
.hoverManu {
  list-style: none;
  cursor: pointer;
}
.hoverManu {
  width: 100px;
  background-color: #ddd;
  box-sizing: border-box;
  border: 1px solid transparent;
  padding: 10px;
  position: relative;
}

.hoverManu:hover,
.hoverManu:focus {
  border-color: #000;
}

.hoverManu:hover > .menu,
.hoverManu:focus > .menu {
  visibility: visible;
  /* display: block; */
}
.hoverManu .menu {
  margin: 0;
  padding-left: 10px;
  list-style: none;
  position: absolute;
  top: 0;
  left: 100%;
  width: 70px;
  background: #333;
  color: white;
  /* display: none; */
  visibility: hidden;
}
</style>
