"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/drawer.css");
const index = require("../../mode/index.js");
const popup = require("../../../utils/hook/popup.js");
require("../../../utils/config.js");
const main_props = require("./main.props.js");
const _hoisted_1 = { class: "cu-drawer__header" };
const _hoisted_2 = { class: "cu-drawer__content" };
const _hoisted_3 = {
  key: 0,
  class: "cu-drawer__footer"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuDrawer"
  },
  __name: "main",
  props: main_props.drawerProps,
  emits: main_props.drawerEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { visible, showMode, onAfterEnter, modeHandleClick, close, onAfterLeave } = popup.usePopup(props, emit);
    const drawerStyle = vue.computed(() => {
      const key = ["left", "right"].includes(props.direction) ? "width" : "height";
      return {
        [key]: props.dimension,
        backgroundColor: props.color
      };
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(index.CuMode), {
        show: vue.unref(showMode),
        "lock-scroll": !_ctx.appendToBody || !_ctx.lockScroll ? false : _ctx.lockScroll,
        "append-to-body": _ctx.appendToBody,
        "append-to": _ctx.appendTo,
        "custom-class": ["cu-mode__drawer", _ctx.modeClass],
        onClose: _cache[3] || (_cache[3] = ($event) => emit("close")),
        onOpen: vue.unref(onAfterEnter),
        onModeClick: vue.unref(modeHandleClick)
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(vue.Transition, {
            name: "cu-drawer-" + _ctx.direction,
            onAfterLeave: _cache[1] || (_cache[1] = ($event) => vue.unref(onAfterLeave)()),
            onAfterEnter: _cache[2] || (_cache[2] = ($event) => emit("open"))
          }, {
            default: vue.withCtx(() => [
              vue.unref(visible) ? (vue.openBlock(), vue.createElementBlock("div", {
                key: 0,
                class: vue.normalizeClass(["cu-drawer", ["cu-drawer--" + _ctx.direction, _ctx.customClass]]),
                style: vue.normalizeStyle(drawerStyle.value)
              }, [
                vue.createElementVNode("div", _hoisted_1, [
                  vue.createElementVNode("div", null, [
                    vue.renderSlot(_ctx.$slots, "header", {}, () => [
                      vue.createTextVNode(vue.toDisplayString(_ctx.header), 1)
                    ])
                  ]),
                  _ctx.showClose ? (vue.openBlock(), vue.createElementBlock("i", {
                    key: 0,
                    class: "cu-icon-close close",
                    onClick: _cache[0] || (_cache[0] = //@ts-ignore
                    (...args) => vue.unref(close) && vue.unref(close)(...args))
                  })) : vue.createCommentVNode("", true)
                ]),
                vue.createElementVNode("div", _hoisted_2, [
                  vue.renderSlot(_ctx.$slots, "default")
                ]),
                _ctx.$slots.footer ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3, [
                  vue.renderSlot(_ctx.$slots, "footer")
                ])) : vue.createCommentVNode("", true)
              ], 6)) : vue.createCommentVNode("", true)
            ]),
            _: 3
          }, 8, ["name"])
        ]),
        _: 3
      }, 8, ["show", "lock-scroll", "append-to-body", "append-to", "custom-class", "onOpen", "onModeClick"]);
    };
  }
});
exports.default = _sfc_main;
