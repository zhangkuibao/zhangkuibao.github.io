<template>
  <app-example title="圆角选项卡">
    <div class="page">
      <div class="main">
        <div class="main-tab">
          <div
            class="main-tab__item"
            :class="{ 'main-tab__item__selected': currentCharge === null }"
            @click="onChargeTagTap(null)"
          >
            <div class="main-tab__item-bg1"></div>
            <div class="main-tab__item-bg2"></div>
            <div class="main-tab__item-text">全部</div>
          </div>
          <div
            class="main-tab__item"
            v-for="chargeInfo in chargeList"
            :key="chargeInfo.name"
            @click="onChargeTagTap(chargeInfo)"
            :class="{
              'main-tab__item__selected':
                currentCharge && currentCharge.name === chargeInfo.name,
            }"
          >
            <div class="main-tab__item-bg1"></div>
            <div class="main-tab__item-bg2"></div>
            <div class="main-tab__item-text">{{ chargeInfo.name }}</div>
          </div>
        </div>
        <div class="main-content"></div>
      </div>
    </div>
  </app-example>
</template>

<script>
export default {
  name: "css-exhibit-circle_angle_tab",
  "css-exhibit-component": true,
  data() {
    return {
      currentCharge: null,
      chargeList: [
        {
          name: "联通大王卡",
        },
        {
          name: "移动花卡",
        },
        {
          name: "电信星卡",
        },
      ],
    };
  },
  methods: {
    onChargeTagTap(chargeInfo) {
      this.currentCharge = chargeInfo;
    },
  },
};
</script>

<style scoped>
.page {
  padding: 50px 0;
  overflow: hidden;
}
.main-tab {
  display: flex;
  align-items: flex-end;
}
.main-tab__item {
  height: 2.5rem;
  line-height: 2.5rem;
  color: #e6b4b4;
  text-align: center;
  background: #b10501;
  border-radius: 0.625rem 0.625rem 0 0;
  flex: 1 0 0;
  padding: 0 1rem;
  width: 7rem;
}

.main-tab__item .main-tab__item-text {
  white-space: nowrap;
}
.main-tab__item__selected {
  position: relative;
  top: -0.625rem;
  color: #fff;
  background-color: transparent;
}
.main-tab__item__selected .main-tab__item-bg1 {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 2.5rem;
  background: #f7b885;
  border-radius: 0.8125rem 0.8125rem 0 0;
  transform: perspective(1rem) rotateX(5deg);
}
.main-tab__item__selected .main-tab__item-bg2 {
  position: absolute;
  top: 0.125rem;
  left: -1%;
  z-index: 1;
  width: 102%;
  height: 3rem;
  background: #c91a15;
  border-radius: 0.8125rem 0.8125rem 0 0;
  transform: perspective(1rem) rotateX(7deg);
}
.main-tab__item__selected .main-tab__item-text {
  position: absolute;
  top: calc(50% - 0.9375rem);
  left: 50%;
  z-index: 1;
  white-space: nowrap;
  transform: translateX(-50%);
}
.main-tab__item__selected .main-tab__item-text:after {
  position: absolute;
  bottom: 0.15625rem;
  left: calc(50% - 0.625rem);
  display: block;
  width: 1.25rem;
  height: 0.25rem;
  background: #fff;
  border-radius: 0.25rem;
  content: "";
}
.main-tab__item__selected:before,
.main-tab__item__selected:after {
  position: absolute;
  bottom: -0.625rem;
  z-index: 2;
  width: 1.875rem;
  height: 2.1875rem;
  border-radius: 100%;
  content: "";
  box-shadow: 0 0 0 2.5rem #c91a15;
  transition: 0.2s;
}
.main-tab__item__selected:before {
  left: -2.0625rem;
  clip-path: inset(50% -0.625rem 0 50%);
}
.main-tab__item__selected:after {
  right: -2.0625rem;
  clip-path: inset(50% 50% 0 -0.625rem);
}
.main-tab__item:nth-of-type(1):before {
  display: none;
}
.main-tab__item:nth-last-of-type(1):after {
  display: none;
}

.main-content {
  height: 200px;
  background: #c91a15;
}
</style>
