"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/input.css");
require("../../form-common.css");
const type = require("../../form/src/type.js");
const validate = require("../../../utils/hook/validate.js");
const config = require("../../../utils/config.js");
const main_props = require("./main.props.js");
const _hoisted_1 = {
  key: 0,
  class: "prefix-slot"
};
const _hoisted_2 = { class: "cu-input__content" };
const _hoisted_3 = {
  key: 0,
  class: "prefix-icon"
};
const _hoisted_4 = ["value", "placeholder", "type", "disabled"];
const _hoisted_5 = {
  key: 1,
  class: "clearable"
};
const _hoisted_6 = {
  key: 2,
  class: "suffix-icon"
};
const _hoisted_7 = {
  key: 1,
  class: "suffix-slot"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuInput"
  },
  __name: "main",
  props: main_props.inputProps,
  emits: main_props.inputEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { itemValidate } = validate.useItemValidate();
    const { SIZE } = config.useConfig();
    const form = vue.inject(type.FORM_PROVIDE, void 0);
    const currentSize = vue.computed(() => {
      return props.size ?? (form == null ? void 0 : form.props.size) ?? (SIZE == null ? void 0 : SIZE.value);
    });
    function input(e) {
      let val = e.target.value;
      if (props.type === "number") {
        val = Number(val);
      }
      emit("update:modelValue", val);
      change(val);
      emit("input", val);
    }
    function clear() {
      emit("update:modelValue", "");
      change("");
      emit("clear");
    }
    function blur(e) {
      emit("blur", e);
      itemValidate("blur");
    }
    function change(val) {
      emit("change", val);
      itemValidate("change");
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("span", {
        class: vue.normalizeClass(["cu-input", [currentSize.value, { "is-disabled": _ctx.disabled }]])
      }, [
        _ctx.$slots.prefix ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_1, [
          vue.renderSlot(_ctx.$slots, "prefix")
        ])) : vue.createCommentVNode("", true),
        vue.createElementVNode("span", _hoisted_2, [
          _ctx.prefixIcon || _ctx.$slots["prefix-icon"] ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3, [
            vue.renderSlot(_ctx.$slots, "prefix-icon", {}, () => [
              _ctx.prefixIcon ? (vue.openBlock(), vue.createElementBlock("i", {
                key: 0,
                class: vue.normalizeClass(_ctx.prefixIcon)
              }, null, 2)) : vue.createCommentVNode("", true)
            ])
          ])) : vue.createCommentVNode("", true),
          vue.createElementVNode("input", {
            class: "cu-input__inner",
            value: _ctx.modelValue,
            onInput: input,
            onFocus: _cache[0] || (_cache[0] = ($event) => emit("focus", $event)),
            onBlur: blur,
            onChange: _cache[1] || (_cache[1] = ($event) => change($event.target.value)),
            placeholder: _ctx.placeholder,
            type: _ctx.type,
            disabled: _ctx.disabled
          }, null, 40, _hoisted_4),
          _ctx.clearable ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_5, [
            vue.withDirectives(vue.createElementVNode("i", {
              class: "cu-icon-close-one",
              onClick: clear
            }, null, 512), [
              [vue.vShow, _ctx.modelValue]
            ])
          ])) : vue.createCommentVNode("", true),
          _ctx.suffixIcon || _ctx.$slots["suffix-icon"] ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_6, [
            vue.renderSlot(_ctx.$slots, "suffix-icon", {}, () => [
              _ctx.suffixIcon ? (vue.openBlock(), vue.createElementBlock("i", {
                key: 0,
                class: vue.normalizeClass(_ctx.suffixIcon)
              }, null, 2)) : vue.createCommentVNode("", true)
            ])
          ])) : vue.createCommentVNode("", true)
        ]),
        _ctx.$slots.suffix ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_7, [
          vue.renderSlot(_ctx.$slots, "suffix")
        ])) : vue.createCommentVNode("", true)
      ], 2);
    };
  }
});
exports.default = _sfc_main;
