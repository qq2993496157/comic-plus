"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/textarea.css");
require("../../form-common.css");
const validate = require("../../../utils/hook/validate.js");
require("../../../utils/config.js");
const main_props = require("./main.props.js");
const _hoisted_1 = ["placeholder", "maxlength", "value", "disabled"];
const _hoisted_2 = {
  key: 0,
  class: "cu-textarea__maxlength"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuTextarea"
  },
  __name: "main",
  props: main_props.textareaProps,
  emits: main_props.textareaEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { itemValidate } = validate.useItemValidate();
    const lock = vue.ref(false);
    const textareaText = vue.ref();
    const textareaRef = vue.ref(null);
    const height = vue.ref();
    vue.onMounted(() => {
      props.autoHeight && (height.value = textareaText.value.scrollHeight + "px");
      props.autoFocus && textareaRef.value.focus();
    });
    function input(e) {
      if (lock.value)
        return;
      emit("update:modelValue", e.target.value);
      change(e);
      if (!props.autoHeight)
        return;
      vue.nextTick(() => {
        height.value = textareaText.value.scrollHeight + "px";
      });
    }
    function compositionstart() {
      lock.value = true;
    }
    function compositionend(e) {
      lock.value = false;
      input(e);
    }
    function change(e) {
      emit("change", e.target.value);
      itemValidate("change");
    }
    function blur(e) {
      emit("blur", e);
      itemValidate("blur");
    }
    return (_ctx, _cache) => {
      var _a;
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(["cu-textarea", { "is-disabled": _ctx.disabled }])
      }, [
        vue.createElementVNode("textarea", {
          class: "cu-textarea__inner",
          placeholder: _ctx.placeholder,
          maxlength: _ctx.maxlength,
          value: _ctx.modelValue,
          onInput: input,
          onFocus: _cache[0] || (_cache[0] = ($event) => emit("focus", $event)),
          onBlur: blur,
          onChange: change,
          onCompositionstart: compositionstart,
          onCompositionend: compositionend,
          ref_key: "textareaRef",
          ref: textareaRef,
          disabled: _ctx.disabled,
          style: vue.normalizeStyle({ height: _ctx.autoHeight ? height.value || void 0 : void 0 })
        }, null, 44, _hoisted_1),
        _ctx.maxlength ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2, vue.toDisplayString((((_a = _ctx.modelValue) == null ? void 0 : _a.length) || 0) + "/" + _ctx.maxlength), 1)) : vue.createCommentVNode("", true),
        vue.createElementVNode("div", {
          class: "cu-textarea__text",
          ref_key: "textareaText",
          ref: textareaText
        }, vue.toDisplayString(_ctx.modelValue), 513)
      ], 2);
    };
  }
});
exports.default = _sfc_main;
