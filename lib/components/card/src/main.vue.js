"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/card.css");
const main_props = require("./main.props.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuCard"
  },
  __name: "main",
  props: main_props.cardProps,
  setup(__props) {
    const cardRef = vue.ref(null);
    const showTurn = vue.ref(false);
    const style = vue.computed(() => {
      if (!cardRef.value)
        return void 0;
      let style2 = cardRef.value.getBoundingClientRect();
      let l = 0 - (style2.width - style2.width * 0.3) + "px";
      return { "--cu-card-margin-left": l };
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(["cu-card", [_ctx.shadow, { "turn-card": _ctx.turnCard }]]),
        onClick: _cache[0] || (_cache[0] = ($event) => showTurn.value = !showTurn.value),
        ref_key: "cardRef",
        ref: cardRef,
        style: vue.normalizeStyle(style.value)
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["cu-card__container", [{ turn: !showTurn.value && _ctx.turnType === "click" }, _ctx.turnType]])
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2),
        _ctx.turnCard ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: vue.normalizeClass(["cu-card__opposite", [{ turn: showTurn.value && _ctx.turnType === "click" }, _ctx.turnType]])
        }, [
          vue.renderSlot(_ctx.$slots, "opposite")
        ], 2)) : vue.createCommentVNode("", true)
      ], 6);
    };
  }
});
exports.default = _sfc_main;
