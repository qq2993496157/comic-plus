"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/tooltip.css");
const core = require("@vueuse/core");
const config = require("../../../utils/config.js");
const scrollSever = require("../../../utils/scroll-sever.js");
const main_props = require("./main.props.js");
const _hoisted_1 = /* @__PURE__ */ vue.createElementVNode("span", { class: "cu-tooltip__arrow" }, null, -1);
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuTooltip"
  },
  __name: "main",
  props: main_props.tooltipProps,
  setup(__props, { expose: __expose }) {
    const props = __props;
    const visible = vue.ref(false);
    const className = vue.ref(props.position);
    let timer = null;
    const style = vue.reactive({
      left: "0px",
      top: "0px",
      zIndex: 2e3
    });
    const tooltipOptions = vue.reactive({
      disabled: false,
      class: void 0
    });
    const text = vue.ref(props.content);
    const tooltipRef = vue.ref();
    function getPosition() {
      var _a, _b, _c;
      if (!visible.value)
        return;
      const parent = (_a = props.triggerRef) == null ? void 0 : _a.getBoundingClientRect();
      const target = tooltipRef.value.getBoundingClientRect();
      const { x, y } = (_c = (_b = main_props.calcPosition)[className.value]) == null ? void 0 : _c.call(_b, target, parent);
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
    core.useEventListener(tooltipRef.value, "mouseenter", onmouseenter);
    core.useEventListener(tooltipRef.value, "mouseleave", onmouseleave);
    core.useEventListener(props.triggerRef, "mouseenter", onmouseenter);
    core.useEventListener(props.triggerRef, "mouseleave", onmouseleave);
    vue.watch(
      () => visible.value,
      (val) => {
        if (val) {
          vue.nextTick(() => {
            getPosition();
            style.zIndex = config.getNextZIndex();
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
    vue.onMounted(() => {
      scrollSever.useScrollSever(props.triggerRef, getPosition);
    });
    __expose({ update });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.Teleport, { to: "body" }, [
        vue.createVNode(vue.Transition, { name: "cu-fade" }, {
          default: vue.withCtx(() => [
            visible.value ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: vue.normalizeClass(["cu-tooltip", [className.value, tooltipOptions.class]]),
              style: vue.normalizeStyle(style),
              ref_key: "tooltipRef",
              ref: tooltipRef
            }, [
              _hoisted_1,
              vue.createElementVNode("span", null, vue.toDisplayString(text.value), 1)
            ], 6)) : vue.createCommentVNode("", true)
          ]),
          _: 1
        })
      ]);
    };
  }
});
exports.default = _sfc_main;
