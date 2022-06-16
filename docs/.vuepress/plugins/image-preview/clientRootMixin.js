import ImageComp from "./image-preview.vue";
import Vue from "vue";
class ImagePreviewPlugin {
  static ImageCompConstruct = Vue.extend(ImageComp);
  static instance = new ImagePreviewPlugin.ImageCompConstruct();

  static init() {
    ImagePreviewPlugin.instance.$mount();
  }

  static bindEvent() {
    document.addEventListener("click", (e) => {
      console.log(e.target.tagName, ImagePreviewPlugin.isShow());
      if (e.target.tagName === "IMG" && !ImagePreviewPlugin.isShow()) {
        let src = e.target.src;
        ImagePreviewPlugin.showImagePreview(src);
      }
    });
  }

  static isShow() {
    return (
      ImagePreviewPlugin.instance && ImagePreviewPlugin.instance.showStatus()
    );
  }

  static showImagePreview(src) {
    document.body.appendChild(ImagePreviewPlugin.instance.$el);
    ImagePreviewPlugin.instance.show(src);
  }
}

export default {
  mounted() {
    setTimeout(() => {
      // console.log(888777)
      ImagePreviewPlugin.init();
      ImagePreviewPlugin.bindEvent();
    }, 100);
  },
};
