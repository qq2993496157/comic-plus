"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/tag.css");
const config = require("../../../utils/config.js");
const complex_props = require("./complex.props.js");
const _hoisted_1 = { class: "cu-tag-content" };
const _hoisted_2 = { class: "cu-tag-content" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuTagComplex"
  },
  __name: "complex",
  props: complex_props.tagComplexProps,
  emits: complex_props.tagComplexEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { IS_COMIC } = config.useConfig();
    function handleClose() {
      emit("close");
    }
    return (_ctx, _cache) => {
      return !_ctx.transition ? (vue.openBlock(), vue.createElementBlock("span", {
        key: 0,
        class: vue.normalizeClass(["cu-tag-complex", _ctx.type ? "cu-tag--" + _ctx.type : void 0]),
        style: vue.normalizeStyle({ height: _ctx.size + "px", borderColor: vue.unref(IS_COMIC) ? void 0 : props.color })
      }, [
        vue.createElementVNode("span", _hoisted_1, [
          vue.renderSlot(_ctx.$slots, "default")
        ]),
        vue.createElementVNode("span", {
          class: "complex-content",
          style: vue.normalizeStyle({ background: props.color })
        }, [
          vue.createElementVNode("span", null, vue.toDisplayString(_ctx.title), 1),
          _ctx.closable ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 0,
            class: "closeicon cu-icon-close-small",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
          })) : vue.createCommentVNode("", true)
        ], 4)
      ], 6)) : (vue.openBlock(), vue.createBlock(vue.Transition, {
        key: 1,
        name: "cu-zoom-x",
        appear: ""
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("span", {
            class: vue.normalizeClass(["cu-tag-complex", _ctx.type ? "cu-tag--" + _ctx.type : void 0]),
            style: vue.normalizeStyle({ height: _ctx.size + "px", borderColor: vue.unref(IS_COMIC) ? void 0 : props.color })
          }, [
            vue.createElementVNode("span", _hoisted_2, [
              vue.renderSlot(_ctx.$slots, "default")
            ]),
            vue.createElementVNode("span", {
              class: "complex-content",
              style: vue.normalizeStyle({ background: props.color })
            }, [
              vue.createElementVNode("span", null, vue.toDisplayString(_ctx.title), 1),
              _ctx.closable ? (vue.openBlock(), vue.createElementBlock("span", {
                key: 0,
                class: "closeicon cu-icon-close-small",
                onClick: handleClose
              })) : vue.createCommentVNode("", true)
            ], 4)
          ], 6)
        ]),
        _: 3
      }));
    };
  }
});
exports.default = _sfc_main;
