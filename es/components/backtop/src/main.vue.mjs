import { defineComponent, ref, computed, onMounted, warn, openBlock, createBlock, Teleport, createVNode, Transition, withCtx, createElementBlock, normalizeStyle, renderSlot, createCommentVNode, createElementVNode } from "vue";
import { useEventListener } from "@vueuse/core";
import "../style/backtop.css";
import { isNumber } from "../../../utils/typescript.mjs";
import { getNextZIndex } from "../../../utils/config.mjs";
import { backtopProps } from "./main.props.mjs";
const _hoisted_1 = /* @__PURE__ */ createElementVNode("div", { class: "cu-backtop__container" }, [
  /* @__PURE__ */ createElementVNode("i", { class: "cu-icon-up-filled" })
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuBacktop"
  },
  __name: "main",
  props: backtopProps,
  setup(__props) {
    const props = __props;
    const targetDom = ref(null);
    const show = ref(false);
    const zIndex = getNextZIndex();
    const style = computed(() => {
      return {
        "--cu-backtop-size": isNumber(props.size) ? props.size + "px" : props.size,
        zIndex,
        right: isNumber(props.right) ? props.right + "px" : props.right,
        bottom: isNumber(props.bottom) ? props.bottom + "px" : props.bottom
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
    useEventListener(targetDom, "scroll", onScroll);
    onMounted(() => {
      targetDom.value = document;
      if (props.target) {
        targetDom.value = document.querySelector(props.target);
        if (!targetDom.value) {
          warn(`Unable to find element bound to ${props.target}`);
        }
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        createVNode(Transition, { name: "cu-fade" }, {
          default: withCtx(() => [
            show.value ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "cu-backtop",
              style: normalizeStyle(style.value),
              onClick: backTop
            }, [
              renderSlot(_ctx.$slots, "default", {}, () => [
                _hoisted_1
              ])
            ], 4)) : createCommentVNode("", true)
          ]),
          _: 3
        })
      ]);
    };
  }
});
export {
  _sfc_main as default
};
