"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const core = require("@vueuse/core");
require("../style/backtop.css");
const typescript = require("../../../utils/typescript.js");
const config = require("../../../utils/config.js");
const main_props = require("./main.props.js");
const _hoisted_1 = /* @__PURE__ */ vue.createElementVNode("div", { class: "cu-backtop__container" }, [
  /* @__PURE__ */ vue.createElementVNode("i", { class: "cu-icon-up-filled" })
], -1);
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuBacktop"
  },
  __name: "main",
  props: main_props.backtopProps,
  setup(__props) {
    const props = __props;
    const targetDom = vue.ref(null);
    const show = vue.ref(false);
    const zIndex = config.getNextZIndex();
    const style = vue.computed(() => {
      return {
        "--cu-backtop-size": typescript.isNumber(props.size) ? props.size + "px" : props.size,
        zIndex,
        right: typescript.isNumber(props.right) ? props.right + "px" : props.right,
        bottom: typescript.isNumber(props.bottom) ? props.bottom + "px" : props.bottom
      };
    });
    function backTop() {
      let el = targetDom.value === document ? document.documentElement : targetDom.value;
      el.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
    function onScroll(e) {
      var _a, _b;
      let top = e.target.scrollTop || ((_b = (_a = e.target) == null ? void 0 : _a.scrollingElement) == null ? void 0 : _b.scrollTop);
      show.value = top >= props.visibleHeight;
    }
    core.useEventListener(targetDom, "scroll", onScroll);
    vue.onMounted(() => {
      targetDom.value = document;
      if (props.target) {
        targetDom.value = document.querySelector(props.target);
        if (!targetDom.value) {
          vue.warn(`Unable to find element bound to ${props.target}`);
        }
      }
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.Teleport, { to: "body" }, [
        vue.createVNode(vue.Transition, { name: "cu-fade" }, {
          default: vue.withCtx(() => [
            show.value ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: "cu-backtop",
              style: vue.normalizeStyle(style.value),
              onClick: backTop
            }, [
              vue.renderSlot(_ctx.$slots, "default", {}, () => [
                _hoisted_1
              ])
            ], 4)) : vue.createCommentVNode("", true)
          ]),
          _: 3
        })
      ]);
    };
  }
});
exports.default = _sfc_main;
