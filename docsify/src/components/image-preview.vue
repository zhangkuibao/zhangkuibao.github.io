<template>
  <div class="image_view" v-if="showViewKey">
    <div class="image_view-close_btn" @click.stop="close"></div>
    <div class="image_view-image_container" :style="imageContainerStyle">
      <img
        :src="imageSrc"
        :style="imageStyle"
        ref="image"
        @mousedown="handleMouseDown"
      />
    </div>
    <div class="image_view-operate">
      <div class="image_view-operate-item iconfont icon-zoom-in" @click="imageScale(-1 * scaleMagnificationClick)"></div>
      <div class="image_view-operate-item iconfont icon-zoom-out" @click="imageScale(scaleMagnificationClick)"></div>
      <div class="image_view-operate-item iconfont icon-reset" @click="reset()"></div>
      <div class="image_view-operate-item iconfont icon-turn-left" @click="roteteImage(-1)"></div>
      <div class="image_view-operate-item iconfont icon-turn-right" @click="roteteImage(1)"></div>
    </div>
  </div>
</template>

<script>
// 功能点：
// 1. 关闭按钮
// 2. 放大缩小按钮
// 3. 滚动缩放
// 4. 旋转
// 5. 恢复初始状态
// 6. 移动

// 缩放倍率问题
export default {
  name: "image-preview",
  data() {
    return {
      showViewKey: false,
      imageSrc: "",
      scaleMagnificationWhell: 0.05, // 滚轮缩放倍率
      scaleMagnificationClick: 0.5, // 按钮缩放倍率
      minScale: 0.3,  // 最小缩小比例
      stepDeg: 90, // 一次旋转的角度
      dragKey: false,
      transform: {
        offsetX: 0,
        offsetY: 0,
        scale: 1,
        rotate: 0,
      }
    };
  },
  computed: {
    imageContainerStyle() {
      return {
        transform: `translate3d(${this.transform.offsetX}px,${this.transform.offsetY}px, 0)`,
      }
    },
    imageStyle() {
      return {
        transform: `rotate(${this.transform.rotate}deg) scale(${this.transform.scale})`,
        cursor: this.dragKey ? 'grabbing' : 'grab'
      };
    },
  },
  watch: {
    showViewKey(now) {
      if (now) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    },
  },
  methods: {
    handleMouseDown(e) {
      let _t = this;
      let startX = e.clientX;
      let startY = e.clientY;
      let startOffsetLeft = _t.transform.offsetX;
      let startOffsetTop = _t.transform.offsetY;
      this.dragKey = true;

      function handleMousemove(e) {
        _t.transform.offsetX = startOffsetLeft + (e.clientX - startX); // e.clientX - startX 为移动距离
        _t.transform.offsetY = startOffsetTop + (e.clientY - startY);
      }

      function handleMouseup() {
        document.removeEventListener("mouseup", handleMouseup);
        document.removeEventListener("mousemove", handleMousemove);
        _t.dragKey = false;
      }

      document.addEventListener("mousemove", handleMousemove);
      document.addEventListener("mouseup", handleMouseup);
      e.preventDefault();
    },

    imageScale(magnification = 1) {
      if(this.transform.scale <= 0.5 && magnification < 0) {
        this.transform.scale = this.minScale;
        return;
      }
      
      // 控制缩放
      this.transform.scale *= (magnification + 1);
    },

    handleMousewheel(e) {
      const delta = e.wheelDelta ? e.wheelDelta : -e.detail;
      if (delta > 0) {
        // 放大
        this.imageScale(this.scaleMagnificationWhell);
      } else {
        // 缩小
        this.imageScale(-1 * this.scaleMagnificationWhell);
      }
    },
    reset() {
      this.transform.rotate = 0;
      this.transform.offsetX = 0;
      this.transform.offsetY = 0;
      this.transform.scale = 1;
    },
    roteteImage(direction = 1) {
      // direction 方向，正数为顺时针旋转
      this.transform.rotate += direction * this.stepDeg;
    },
    show(src) {
      this.imageSrc = src;
      this.showViewKey = true;
      document.addEventListener("mousewheel", this.handleMousewheel);
    },
    close() {
      this.showViewKey = false;
      document.removeEventListener("mousewheel", this.handleMousewheel);
    },
    showStatus() {
      return this.showViewKey;
    },
  },
};
</script>

<style scoped lang="scss">
.image_view {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;

  .image_view-close_btn {
    z-index: 1;
    top: 40px;
    right: 40px;
    width: 40px;
    height: 40px;
    font-size: 24px;
    color: #fff;
    background-color: #606266;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    opacity: 0.8;
    cursor: pointer;
    box-sizing: border-box;
    user-select: none;
    &::before,
    &::after {
      content: "";
      display: block;
      height: 60%;
      width: 2px;
      background: #fff;
      position: absolute;
    }

    &::before {
      transform: rotate(-45deg);
    }
    &::after {
      transform: rotate(45deg);
    }
  }

  .image_view-image_container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-height: 100%;
      transition: transform .3s cubic-bezier(.215,.61,.355,1) 0s;
    }
  }

  .image_view-operate {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: #fff;
    background-color: #606266;
    opacity: 0.8;
    height: 44px;
    width: 282px;
    border-radius: 44px;
    box-sizing: border-box;

    .image_view-operate-item {
      cursor: pointer;
      font-size: 20px;
    }
  }
}
</style>
