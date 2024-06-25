"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const core = require("@vueuse/core");
require("../style/affix.css");
const main_props = require("./main.props.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuAffix"
  },
  __name: "main",
  props: main_props.affixProps,
  emits: main_props.affixEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const affixRef = vue.ref();
    const containerEl = vue.ref();
    const transform = vue.ref(0);
    const { top: refT, bottom: refB, width: refW, height: refH } = core.useElementBounding(affixRef);
    const targetRect = core.useElementBounding(containerEl);
    const { height: windowHeight } = core.useWindowSize();
    const isFixed = vue.computed(() => {
      if (!containerEl.value) {
        return props.position === "top" ? refT.value < props.offset : refB.value + props.offset >= windowHeight.value;
      } else {
        if (props.position === "top") {
          const difference = targetRect.bottom.value - props.offset - refH.value;
          transform.value = difference < 0 ? difference : 0;
          return refT.value < props.offset && targetRect.bottom.value > 0;
        } else {
          const difference = windowHeight.value - targetRect.top.value - props.offset - refH.value;
          transform.value = difference < 0 ? -difference : 0;
          return windowHeight.value - props.offset < refB.value && windowHeight.value > targetRect.top.value;
        }
      }
    });
    const affixStyle = vue.computed(() => {
      if (!isFixed.value)
        return void 0;
      return {
        width: refW.value + "px",
        height: refH.value + "px"
      };
    });
    const affixContainerStyle = vue.computed(() => {
      if (!isFixed.value)
        return void 0;
      return {
        [props.position]: props.offset + "px",
        zIndex: props.zIndex,
        transform: `translateY(${transform.value}px)`
      };
    });
    vue.watch(isFixed, (val) => {
      emit("change", val);
    });
    vue.onMounted(() => {
      if (props.target) {
        containerEl.value = document.querySelector(props.target);
      } else {
        containerEl.value = document.documentElement;
      }
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: "cu-affix",
        ref_key: "affixRef",
        ref: affixRef,
        style: vue.normalizeStyle(affixStyle.value)
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["cu-affix__container", { "is-fixed": isFixed.value }]),
          ref: "containerRef",
          style: vue.normalizeStyle(affixContainerStyle.value)
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 6)
      ], 4);
    };
  }
});
exports.default = _sfc_main;
