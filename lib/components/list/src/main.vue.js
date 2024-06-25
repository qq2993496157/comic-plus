"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/list.css");
const main_props = require("./main.props.js");
const _hoisted_1 = {
  key: 0,
  class: "cu-list__head"
};
const _hoisted_2 = {
  key: 2,
  class: "cu-list__container"
};
const _hoisted_3 = {
  key: 3,
  class: "cu-list__footer"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuList"
  },
  __name: "main",
  props: main_props.listProps,
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(["cu-list", { "is-border": _ctx.border }])
      }, [
        _ctx.$slots["header"] || _ctx.header ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          vue.renderSlot(_ctx.$slots, "header", {}, () => [
            vue.createTextVNode(vue.toDisplayString(_ctx.header), 1)
          ])
        ])) : vue.createCommentVNode("", true),
        _ctx.animated ? (vue.openBlock(), vue.createBlock(vue.TransitionGroup, {
          key: 1,
          tag: "ul",
          name: _ctx.animation ?? "list-animation",
          class: "cu-list__container"
        }, {
          default: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, ["name"])) : (vue.openBlock(), vue.createElementBlock("ul", _hoisted_2, [
          vue.renderSlot(_ctx.$slots, "default")
        ])),
        _ctx.$slots["footer"] || _ctx.footer ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3, [
          vue.renderSlot(_ctx.$slots, "footer", {}, () => [
            vue.createTextVNode(vue.toDisplayString(_ctx.footer), 1)
          ])
        ])) : vue.createCommentVNode("", true)
      ], 2);
    };
  }
});
exports.default = _sfc_main;
