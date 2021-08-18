<template>
  <app-example title="菜单">
    <div class="hoverManu">
      <div class="cont" tabindex="1">
        聚焦或hover时显示菜单
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
}
.hoverManu .cont {
  width: 70px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  box-sizing: border-box;
  border: 1px solid transparent;
  padding: 10px;
}

.hoverManu .cont:hover,
.hoverManu .cont:focus {
  border-color: #000;
}

.hoverManu .cont:hover > .menu,
.hoverManu .cont:focus > .menu {
  visibility: visible;
  /* display: block; */
}
.hoverManu .cont .menu {
  margin: 0;
  padding: 0;
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
