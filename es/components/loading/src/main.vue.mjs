import { defineComponent, ref, computed, watch, onMounted, nextTick, openBlock, createBlock, Transition, withCtx, withDirectives, createElementVNode, normalizeClass, normalizeStyle, createElementBlock, toDisplayString, createCommentVNode, vShow } from "vue";
import "../style/loading.css";
import { getNextZIndex, getMaxZIndex } from "../../../utils/config.mjs";
import { useLookScroll } from "../../../utils/look-scroll.mjs";
import { loadingProps } from "./main.props.mjs";
const _hoisted_1 = {
  key: 0,
  class: "cu-loading__text"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuLoading"
  },
  __name: "main",
  props: loadingProps,
  setup(__props, { expose: __expose }) {
    const props = __props;
    const zIndex = ref(0);
    const visible = ref(false);
    const lookScroll = ref(false);
    if (props.glabal) {
      useLookScroll(lookScroll);
    }
    const style = computed(() => {
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
    watch(visible, (val) => {
      if (val) {
        zIndex.value = props.glabal ? getNextZIndex() : getMaxZIndex(props.target);
      }
    });
    onMounted(() => {
      const position = window.getComputedStyle(props.target).position;
      if (position === "static") {
        props.target.style.setProperty("position", "relative");
      }
      nextTick(() => {
        visible.value = props.defaultVisible;
      });
    });
    __expose({
      visible,
      updateVisible
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: "cu-fade",
        onBeforeEnter: _cache[0] || (_cache[0] = ($event) => lookScroll.value = true),
        onAfterLeave: _cache[1] || (_cache[1] = ($event) => lookScroll.value = false)
      }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            class: normalizeClass(["cu-loading", { blur: _ctx.blur, glabal: _ctx.glabal }]),
            style: normalizeStyle(style.value)
          }, [
            createElementVNode("i", {
              class: normalizeClass([_ctx.icon, "is-loading"])
            }, null, 2),
            _ctx.text ? (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(_ctx.text), 1)) : createCommentVNode("", true)
          ], 6), [
            [vShow, visible.value]
          ])
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
