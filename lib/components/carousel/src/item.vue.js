"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const type = require("./type.js");
const _hoisted_1 = { class: "cu-carousel-item" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuCarouselItem"
  },
  __name: "item",
  setup(__props) {
    const instance = vue.getCurrentInstance();
    const { addItem, removeItem, current } = vue.inject(type.CAROUSEL_PROVIDE);
    const show = vue.computed(() => {
      return current.value == instance.uid;
    });
    vue.onMounted(() => {
      addItem == null ? void 0 : addItem(instance.uid);
    });
    vue.onBeforeUnmount(() => {
      removeItem == null ? void 0 : removeItem(instance.uid);
    });
    return (_ctx, _cache) => {
      return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 512)), [
        [vue.vShow, show.value]
      ]);
    };
  }
});
exports.default = _sfc_main;
