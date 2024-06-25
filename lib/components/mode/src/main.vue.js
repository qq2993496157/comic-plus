"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/mode.css");
const config = require("../../../utils/config.js");
const lookScroll = require("../../../utils/look-scroll.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuMode"
  },
  __name: "main",
  props: {
    appendToBody: {
      type: Boolean,
      default: true
    },
    appendTo: {
      type: String,
      default: "body"
    },
    show: Boolean,
    customClass: [String, Array],
    lockScroll: {
      type: Boolean,
      default: true
    }
  },
  emits: ["open", "close", "mode-click"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const zIndex = vue.ref(0);
    const isLockScroll = vue.computed(() => props.show);
    if (props.lockScroll) {
      lookScroll.useLookScroll(isLockScroll);
    }
    vue.watch(
      () => props.show,
      (val) => {
        if (val) {
          zIndex.value = config.getNextZIndex();
        }
      }
    );
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.Teleport, {
        to: __props.appendTo,
        disabled: !__props.appendToBody
      }, [
        vue.createVNode(vue.Transition, {
          name: "cu-fade",
          onAfterEnter: _cache[1] || (_cache[1] = ($event) => emit("open")),
          onAfterLeave: _cache[2] || (_cache[2] = ($event) => emit("close"))
        }, {
          default: vue.withCtx(() => [
            __props.show ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: vue.normalizeClass(["cu-mode", [...[].concat(__props.customClass), { "append-to-body": __props.appendToBody }]]),
              onClick: _cache[0] || (_cache[0] = vue.withModifiers(($event) => emit("mode-click"), ["self"])),
              style: vue.normalizeStyle({ zIndex: zIndex.value })
            }, [
              vue.renderSlot(_ctx.$slots, "default")
            ], 6)) : vue.createCommentVNode("", true)
          ]),
          _: 3
        })
      ], 8, ["to", "disabled"]);
    };
  }
});
exports.default = _sfc_main;
