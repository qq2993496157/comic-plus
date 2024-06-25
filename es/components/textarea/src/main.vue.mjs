import { defineComponent, ref, onMounted, openBlock, createElementBlock, normalizeClass, createElementVNode, normalizeStyle, toDisplayString, createCommentVNode, nextTick } from "vue";
import "../style/textarea.css";
import "../../form-common.css";
import { useItemValidate } from "../../../utils/hook/validate.mjs";
import "../../../utils/config.mjs";
import { textareaProps, textareaEmits } from "./main.props.mjs";
const _hoisted_1 = ["placeholder", "maxlength", "value", "disabled"];
const _hoisted_2 = {
  key: 0,
  class: "cu-textarea__maxlength"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuTextarea"
  },
  __name: "main",
  props: textareaProps,
  emits: textareaEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { itemValidate } = useItemValidate();
    const lock = ref(false);
    const textareaText = ref();
    const textareaRef = ref(null);
    const height = ref();
    onMounted(() => {
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
      nextTick(() => {
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
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["cu-textarea", { "is-disabled": _ctx.disabled }])
      }, [
        createElementVNode("textarea", {
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
          style: normalizeStyle({ height: _ctx.autoHeight ? height.value || void 0 : void 0 })
        }, null, 44, _hoisted_1),
        _ctx.maxlength ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString((((_a = _ctx.modelValue) == null ? void 0 : _a.length) || 0) + "/" + _ctx.maxlength), 1)) : createCommentVNode("", true),
        createElementVNode("div", {
          class: "cu-textarea__text",
          ref_key: "textareaText",
          ref: textareaText
        }, toDisplayString(_ctx.modelValue), 513)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
