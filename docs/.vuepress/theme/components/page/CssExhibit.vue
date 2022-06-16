<template>
  <div>
    <Header />
    <div class="container">
      <component
        v-for="item in componentsNames"
        :key="item"
        :is="item"
      ></component>
      <css-exhibit-auto-margin />
    </div>
  </div>
</template>

<script>
import Header from "@parent-theme/components/Header.vue";

export default {
  name: "CssExhibit",

  components: { Header },

  data() {
    return {
      componentsNames: [
        "css-exhibit-auto-margin",
        "css-exhibit-center-vertical",
        "css-exhibit-circle-angle-tab",
        "css-exhibit-clip-padding",
        "css-exhibit-colour-text",
        "css-exhibit-curtain",
        "css-exhibit-custom-scroll",
        "css-exhibit-dynamic-underline",
        "css-exhibit-hover-manu",
        "css-exhibit-paper",
        "css-exhibit-same-height-border",
        "css-exhibit-same-height",
        "css-exhibit-scroll-infinite",
        "css-exhibit-semicircle",
        "css-exhibit-snake-border",
        "css-exhibit-tab",
        "css-exhibit-toggle-display-status",
        "css-exhibit-triangle-border",
      ],
    };
  },
};
</script>

<style lang="stylus">
.container {
  padding: ($headerHeight + 20px) 2rem 0;
  max-width: $homePageWidth;
  margin: 0px auto;
  display: block;
}
</style>
