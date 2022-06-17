<template>
  <div id="mobile-header">
    <div class="mobile-header-bar">
      <div class="mobile-header-title">
        <NavLink link="/" class="mobile-home-link">{{ $site.title }} </NavLink>
        <component
          :is="isOpen ? 'XIcon' : 'MenuIcon'"
          @click="$emit('toggle-sidebar')"
        />
      </div>
      <div class="mobile-menu-wrapper" :class="{ open: isOpen }">
        <hr class="menu-divider" />
        <ul v-if="$themeConfig.nav" class="mobile-nav">
          <li
            v-for="item in $themeConfig.nav"
            :key="item.text"
            class="mobile-nav-item"
          >
            <NavLink v-if="item.link" :link="item.link">{{
              item.text
            }}</NavLink>
            <ul v-else-if="item.children" class="mobile-nav-ul">
              <el-divider>{{ item.text }}</el-divider>
              <li
                v-for="subItem in item.children"
                :key="subItem.text"
                class="mobile-nav-li"
              >
                <NavLink v-if="subItem.link" :link="subItem.link">{{
                  subItem.text
                }}</NavLink>
              </li>
            </ul>
          </li>
          <li class="mobile-nav-item">
            <Feed />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { MenuIcon, XIcon } from "vue-feather-icons";
import Feed from "@parent-theme/components/Feed";
export default {
  components: {
    MenuIcon,
    XIcon,
    Feed,
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="stylus">

.mobile-nav {
  padding: 0 1.2rem;
}

.mobile-nav-ul {
  margin: 0;
  padding: 0;

  .mobile-nav-li {
    list-style: none;
  }
}

.mobile-header-bar {
  font-family: PT Serif, Serif;
  z-index: 12;
  position: fixed;
  top: 0;
  width: 100vw;
  box-sizing: border-box;
  background-color: $headerBgColor;
  margin: auto;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.03), 0 6px 6px rgba(0, 0, 0, 0.05);
  transition: all 1s cubic-bezier(0.25, 0.8, 0.25, 1);
}

#mobile-header {
  .mobile-header-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.2em;

    .mobile-home-link {
      text-decoration: none;
      text-transform: uppercase;
      font-family: PT Serif, Serif;
      color: #222;
      font-weight: bold;
    }
  }
}

.mobile-nav-item {
  list-style: none;

  a {
    text-decoration: none;
  }
}

.menu-divider {
  margin: 0;
}

.mobile-menu-wrapper {
  max-height: 0;
  overflow: hidden;
  transition: 0.3s ease;
  background-color: $headerBgColor;
}

.mobile-menu-wrapper.open {
  max-height: 450px;
  transition: 0.3s ease;
}

@media (min-width: $MQMobile) {
  #mobile-header {
    display: none;
  }
}
</style>
