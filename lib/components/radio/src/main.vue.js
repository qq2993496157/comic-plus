"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/radio.css");
const main_props = require("./main.props.js");
const useRadio = require("./use-radio.js");
const _hoisted_1 = ["disabled", "checked"];
const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode("span", { class: "cu-radio__inner" }, null, -1);
const _hoisted_3 = { class: "cu-radio__label" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuRadio"
  },
  __name: "main",
  props: main_props.radioProps,
  emits: main_props.radioEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { isCheck, changeValue, currentSize } = useRadio.useRadio(props, emit);
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("label", {
        class: vue.normalizeClass(["cu-radio", [{ "is-disabled": props.disabled }, vue.unref(currentSize)]]),
        style: vue.normalizeStyle({ "--cu-radio-active-color": _ctx.activeColor })
      }, [
        vue.withDirectives(vue.createElementVNode("input", {
          type: "radio",
          disabled: props.disabled,
          checked: vue.unref(isCheck),
          onChange: _cache[0] || (_cache[0] = //@ts-ignore
          (...args) => vue.unref(changeValue) && vue.unref(changeValue)(...args))
        }, null, 40, _hoisted_1), [
          [vue.vShow, false]
        ]),
        _hoisted_2,
        vue.createElementVNode("span", _hoisted_3, [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createTextVNode(vue.toDisplayString(_ctx.label), 1)
          ])
        ])
      ], 6);
    };
  }
});
exports.default = _sfc_main;
