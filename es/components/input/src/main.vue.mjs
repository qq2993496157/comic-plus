import { defineComponent, inject, computed, openBlock, createElementBlock, normalizeClass, renderSlot, createCommentVNode, createElementVNode, withDirectives, vShow } from "vue";
import "../style/input.css";
import "../../form-common.css";
import { FORM_PROVIDE } from "../../form/src/type.mjs";
import { useItemValidate } from "../../../utils/hook/validate.mjs";
import { useConfig } from "../../../utils/config.mjs";
import { inputProps, inputEmits } from "./main.props.mjs";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuInput"
  },
  __name: "main",
  props: inputProps,
  emits: inputEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { itemValidate } = useItemValidate();
    const { SIZE } = useConfig();
    const form = inject(FORM_PROVIDE, void 0);
    const currentSize = computed(() => {
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
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(["cu-input", [currentSize.value, { "is-disabled": _ctx.disabled }]])
      }, [
        _ctx.$slots.prefix ? (openBlock(), createElementBlock("span", _hoisted_1, [
          renderSlot(_ctx.$slots, "prefix")
        ])) : createCommentVNode("", true),
        createElementVNode("span", _hoisted_2, [
          _ctx.prefixIcon || _ctx.$slots["prefix-icon"] ? (openBlock(), createElementBlock("span", _hoisted_3, [
            renderSlot(_ctx.$slots, "prefix-icon", {}, () => [
              _ctx.prefixIcon ? (openBlock(), createElementBlock("i", {
                key: 0,
                class: normalizeClass(_ctx.prefixIcon)
              }, null, 2)) : createCommentVNode("", true)
            ])
          ])) : createCommentVNode("", true),
          createElementVNode("input", {
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
          _ctx.clearable ? (openBlock(), createElementBlock("span", _hoisted_5, [
            withDirectives(createElementVNode("i", {
              class: "cu-icon-close-one",
              onClick: clear
            }, null, 512), [
              [vShow, _ctx.modelValue]
            ])
          ])) : createCommentVNode("", true),
          _ctx.suffixIcon || _ctx.$slots["suffix-icon"] ? (openBlock(), createElementBlock("span", _hoisted_6, [
            renderSlot(_ctx.$slots, "suffix-icon", {}, () => [
              _ctx.suffixIcon ? (openBlock(), createElementBlock("i", {
                key: 0,
                class: normalizeClass(_ctx.suffixIcon)
              }, null, 2)) : createCommentVNode("", true)
            ])
          ])) : createCommentVNode("", true)
        ]),
        _ctx.$slots.suffix ? (openBlock(), createElementBlock("span", _hoisted_7, [
          renderSlot(_ctx.$slots, "suffix")
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
