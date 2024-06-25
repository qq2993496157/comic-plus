"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const item_props = require("./item.props.js");
const useItem = require("./use-item.js");
const _hoisted_1 = { class: "cu-step-card__header" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuStepCard"
  },
  __name: "card",
  props: item_props.stepItemProps,
  setup(__props) {
    const props = __props;
    const { isFinish, isCurrent, currentIcon, injectProps } = useItem.useStepItem(props);
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(["cu-step-card", { "is-finish": vue.unref(isFinish), "is-active": vue.unref(isCurrent) && !_ctx.error, error: _ctx.error }])
      }, [
        vue.createElementVNode("div", _hoisted_1, [
          vue.unref(currentIcon) ? (vue.openBlock(), vue.createElementBlock("i", {
            key: 0,
            class: vue.normalizeClass([vue.unref(currentIcon), "cu-step-item__icon"])
          }, null, 2)) : vue.createCommentVNode("", true),
          vue.renderSlot(_ctx.$slots, "title", {}, () => [
            vue.createTextVNode(vue.toDisplayString(_ctx.title), 1)
          ])
        ]),
        vue.createElementVNode("i", {
          class: vue.normalizeClass([vue.unref(injectProps).direction === "vertical" ? "cu-icon-double-down" : "cu-icon-double-right", "card-bridge"])
        }, null, 2)
      ], 2);
    };
  }
});
exports.default = _sfc_main;
