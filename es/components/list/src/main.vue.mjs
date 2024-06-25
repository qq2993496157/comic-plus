import { defineComponent, openBlock, createElementBlock, normalizeClass, renderSlot, createTextVNode, toDisplayString, createCommentVNode, createBlock, TransitionGroup, withCtx } from "vue";
import "../style/list.css";
import { listProps } from "./main.props.mjs";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuList"
  },
  __name: "main",
  props: listProps,
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["cu-list", { "is-border": _ctx.border }])
      }, [
        _ctx.$slots["header"] || _ctx.header ? (openBlock(), createElementBlock("div", _hoisted_1, [
          renderSlot(_ctx.$slots, "header", {}, () => [
            createTextVNode(toDisplayString(_ctx.header), 1)
          ])
        ])) : createCommentVNode("", true),
        _ctx.animated ? (openBlock(), createBlock(TransitionGroup, {
          key: 1,
          tag: "ul",
          name: _ctx.animation ?? "list-animation",
          class: "cu-list__container"
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, ["name"])) : (openBlock(), createElementBlock("ul", _hoisted_2, [
          renderSlot(_ctx.$slots, "default")
        ])),
        _ctx.$slots["footer"] || _ctx.footer ? (openBlock(), createElementBlock("div", _hoisted_3, [
          renderSlot(_ctx.$slots, "footer", {}, () => [
            createTextVNode(toDisplayString(_ctx.footer), 1)
          ])
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
