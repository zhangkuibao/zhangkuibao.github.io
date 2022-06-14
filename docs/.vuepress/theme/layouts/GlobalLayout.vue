<template>
  <div id="vuepress-theme-blog__global-layout">
    <template v-if="$page.frontmatter.home">
      <Home />
    </template>
    <template v-else>
      <Header />
      <MobileHeader
        :is-open="isMobileHeaderOpen"
        @toggle-sidebar="isMobileHeaderOpen = !isMobileHeaderOpen"
      />
      <div class="content-wrapper" @click="isMobileHeaderOpen = false">
        <DefaultGlobalLayout />
      </div>
      <Footer />
    </template>
  </div>
</template>

<script>
import GlobalLayout from "@app/components/GlobalLayout.vue";
import Header from "@parent-theme/components/Header.vue";
import MobileHeader from "@parent-theme/components/MobileHeader.vue";
import Footer from "@parent-theme/components/Footer.vue";
import Home from "@theme/components/page/Home.vue";

export default {
  components: {
    DefaultGlobalLayout: GlobalLayout,
    Header,
    MobileHeader,
    Footer,
    Home,
  },

  data() {
    return {
      isMobileHeaderOpen: false,
    };
  },

  mounted() {
    this.$router.afterEach(() => {
      this.isMobileHeaderOpen = false;
    });
    console.log(this.$frontmatter);
  },
};
</script>

<style lang="stylus">
#vuepress-theme-blog__global-layout {
  word-wrap: break-word;
}

.content-wrapper {
  padding: 160px 15px 80px 15px;
  min-height: calc(100vh - 80px - 60px - 160px);
  max-width: $contentWidth;
  margin: 0 auto;

  @media (max-width: $MQMobile) {
    & {
      padding: 100px 15px 20px 15px;
      min-height: calc(100vh - 20px - 60px - 100px);
    }
  }
}
</style>
