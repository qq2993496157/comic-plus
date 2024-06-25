"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/badge.css");
const typescript = require("../../../utils/typescript.js");
require("../../../utils/config.js");
const main_props = require("./main.props.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuBadge"
  },
  __name: "main",
  props: main_props.badgeProps,
  setup(__props) {
    const props = __props;
    const currentValue = vue.computed(() => {
      return typescript.isNumber(props.value) ? props.value > props.max ? props.max + "+" : props.value : props.value;
    });
    const showBadge = vue.computed(() => {
      return typescript.isNumber(props.value) ? props.value <= 0 ? props.zeroShow : true : true;
    });
    const badgeStyle = vue.computed(() => {
      let offset = [].concat(props.offset);
      return {
        "--cu-badge-offsetx": offset[0] ? offset[0] + "px" : void 0,
        "--cu-badge-offsety": offset[1] ? offset[1] + "px" : void 0,
        maxWidth: props.ellipsis ? "100%" : void 0
      };
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("span", {
        class: vue.normalizeClass(["cu-badge", _ctx.type ? "cu-badge--" + _ctx.type : void 0]),
        style: vue.normalizeStyle({ "--cu-badge-color": _ctx.color })
      }, [
        _ctx.$slots["default"] ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }) : vue.createCommentVNode("", true),
        vue.withDirectives(vue.createElementVNode("sup", {
          class: vue.normalizeClass(["cu-badge__inner", [{ position: _ctx.$slots["default"] }, { dot: _ctx.dot && !_ctx.$slots["corner"] }]]),
          style: vue.normalizeStyle(badgeStyle.value)
        }, [
          vue.renderSlot(_ctx.$slots, "corner", {}, () => [
            vue.createTextVNode(vue.toDisplayString(_ctx.dot ? null : currentValue.value), 1)
          ])
        ], 6), [
          [vue.vShow, showBadge.value]
        ])
      ], 6);
    };
  }
});
exports.default = _sfc_main;
