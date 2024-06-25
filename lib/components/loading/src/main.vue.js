"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/loading.css");
const config = require("../../../utils/config.js");
const lookScroll = require("../../../utils/look-scroll.js");
const main_props = require("./main.props.js");
const _hoisted_1 = {
  key: 0,
  class: "cu-loading__text"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuLoading"
  },
  __name: "main",
  props: main_props.loadingProps,
  setup(__props, { expose: __expose }) {
    const props = __props;
    const zIndex = vue.ref(0);
    const visible = vue.ref(false);
    const lookScroll$1 = vue.ref(false);
    if (props.glabal) {
      lookScroll.useLookScroll(lookScroll$1);
    }
    const style = vue.computed(() => {
      return {
        "z-index": zIndex.value,
        background: props.background,
        color: props.color
      };
    });
    function updateVisible(val) {
      console.log("updateVisible");
      visible.value = val;
    }
    vue.watch(visible, (val) => {
      if (val) {
        zIndex.value = props.glabal ? config.getNextZIndex() : config.getMaxZIndex(props.target);
      }
    });
    vue.onMounted(() => {
      const position = window.getComputedStyle(props.target).position;
      if (position === "static") {
        props.target.style.setProperty("position", "relative");
      }
      vue.nextTick(() => {
        visible.value = props.defaultVisible;
      });
    });
    __expose({
      visible,
      updateVisible
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.Transition, {
        name: "cu-fade",
        onBeforeEnter: _cache[0] || (_cache[0] = ($event) => lookScroll$1.value = true),
        onAfterLeave: _cache[1] || (_cache[1] = ($event) => lookScroll$1.value = false)
      }, {
        default: vue.withCtx(() => [
          vue.withDirectives(vue.createElementVNode("div", {
            class: vue.normalizeClass(["cu-loading", { blur: _ctx.blur, glabal: _ctx.glabal }]),
            style: vue.normalizeStyle(style.value)
          }, [
            vue.createElementVNode("i", {
              class: vue.normalizeClass([_ctx.icon, "is-loading"])
            }, null, 2),
            _ctx.text ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_1, vue.toDisplayString(_ctx.text), 1)) : vue.createCommentVNode("", true)
          ], 6), [
            [vue.vShow, visible.value]
          ])
        ]),
        _: 1
      });
    };
  }
});
exports.default = _sfc_main;
