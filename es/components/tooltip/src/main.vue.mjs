import { defineComponent, ref, reactive, watch, nextTick, onMounted, openBlock, createBlock, Teleport, createVNode, Transition, withCtx, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, toDisplayString, createCommentVNode } from "vue";
import "../style/tooltip.css";
import { useEventListener } from "@vueuse/core";
import { getNextZIndex } from "../../../utils/config.mjs";
import { useScrollSever } from "../../../utils/scroll-sever.mjs";
import { tooltipProps, calcPosition } from "./main.props.mjs";
const _hoisted_1 = /* @__PURE__ */ createElementVNode("span", { class: "cu-tooltip__arrow" }, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuTooltip"
  },
  __name: "main",
  props: tooltipProps,
  setup(__props, { expose: __expose }) {
    const props = __props;
    const visible = ref(false);
    const className = ref(props.position);
    let timer = null;
    const style = reactive({
      left: "0px",
      top: "0px",
      zIndex: 2e3
    });
    const tooltipOptions = reactive({
      disabled: false,
      class: void 0
    });
    const text = ref(props.content);
    const tooltipRef = ref();
    function getPosition() {
      var _a, _b, _c;
      if (!visible.value)
        return;
      const parent = (_a = props.triggerRef) == null ? void 0 : _a.getBoundingClientRect();
      const target = tooltipRef.value.getBoundingClientRect();
      const { x, y } = (_c = (_b = calcPosition)[className.value]) == null ? void 0 : _c.call(_b, target, parent);
      style.left = x + "px";
      style.top = y + "px";
    }
    function getTooltipStyle() {
      let el = props.triggerRef;
      let disabled = el.getAttribute("tooltip-disabled");
      let className2 = el.getAttribute("tooltip-class");
      tooltipOptions.disabled = disabled === "false" ? false : !!disabled;
      tooltipOptions.class = className2;
    }
    function onmouseleave() {
      timer = setTimeout(() => {
        visible.value = false;
        clearTime();
      }, 300);
    }
    function onmouseenter() {
      getTooltipStyle();
      const { disabled } = tooltipOptions;
      if (disabled)
        return;
      clearTime();
      visible.value = true;
    }
    function clearTime() {
      clearTimeout(timer);
      timer = null;
    }
    useEventListener(tooltipRef.value, "mouseenter", onmouseenter);
    useEventListener(tooltipRef.value, "mouseleave", onmouseleave);
    useEventListener(props.triggerRef, "mouseenter", onmouseenter);
    useEventListener(props.triggerRef, "mouseleave", onmouseleave);
    watch(
      () => visible.value,
      (val) => {
        if (val) {
          nextTick(() => {
            getPosition();
            style.zIndex = getNextZIndex();
          });
        }
      }
    );
    function update(content, position) {
      text.value = content;
      if (position) {
        className.value = position;
      }
    }
    onMounted(() => {
      useScrollSever(props.triggerRef, getPosition);
    });
    __expose({ update });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        createVNode(Transition, { name: "cu-fade" }, {
          default: withCtx(() => [
            visible.value ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(["cu-tooltip", [className.value, tooltipOptions.class]]),
              style: normalizeStyle(style),
              ref_key: "tooltipRef",
              ref: tooltipRef
            }, [
              _hoisted_1,
              createElementVNode("span", null, toDisplayString(text.value), 1)
            ], 6)) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]);
    };
  }
});
export {
  _sfc_main as default
};
