<template>
  <css-exhibit-example title="彩色字体">
    <div class="colour-text">I am colour</div>
  </css-exhibit-example>
</template>

<script>
export default {
  name: "css-exhibit-colour_text",
  "css-exhibit-component": true,
};
</script>

<style scoped>
.colour-text {
  font-weight: 800;
  font-size: 2em;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(90deg, #007cf0, #00dfd8);
}
</style>
