import { defineComponent, inject, computed, ref, openBlock, createElementBlock, normalizeClass, createElementVNode } from "vue";
import "../style/input-number.css";
import "../../form-common.css";
import { FORM_PROVIDE } from "../../form/src/type.mjs";
import { useItemValidate } from "../../../utils/hook/validate.mjs";
import { isNumber } from "../../../utils/typescript.mjs";
import { useConfig } from "../../../utils/config.mjs";
import { inputNumberProps, inputNumberEmits } from "./main.props.mjs";
const _hoisted_1 = /* @__PURE__ */ createElementVNode("i", { class: "cu-icon-minus" }, null, -1);
const _hoisted_2 = [
  _hoisted_1
];
const _hoisted_3 = { class: "cu-input-number__content" };
const _hoisted_4 = ["min", "max", "disabled", "value"];
const _hoisted_5 = /* @__PURE__ */ createElementVNode("i", { class: "cu-icon-plus" }, null, -1);
const _hoisted_6 = [
  _hoisted_5
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuInputNumber"
  },
  __name: "main",
  props: inputNumberProps,
  emits: inputNumberEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { itemValidate } = useItemValidate();
    const { SIZE } = useConfig();
    const form = inject(FORM_PROVIDE, void 0);
    const currentSize = computed(() => {
      return props.size ?? (form == null ? void 0 : form.props.size) ?? (SIZE == null ? void 0 : SIZE.value);
    });
    const useValue = ref(props.modelValue);
    function change(e) {
      useValue.value = Number(e.target.value);
      validateValue();
      emit("update:modelValue", useValue.value);
      emit("change", useValue.value);
      itemValidate("change");
    }
    function validateValue() {
      if (isNumber(props.min) && useValue.value < props.min) {
        useValue.value = props.min;
      }
      if (isNumber(props.max) && useValue.value > props.max) {
        useValue.value = props.max;
      }
    }
    function valuePlus() {
      if (props.disabled)
        return;
      if (isNumber(props.max) && useValue.value > props.max)
        return;
      useValue.value += props.step;
      validateValue();
      emit("update:modelValue", useValue.value);
      emit("change", useValue.value);
      itemValidate("change");
    }
    function valueMinus() {
      if (props.disabled)
        return;
      if (isNumber(props.min) && useValue.value < props.min)
        return;
      useValue.value -= props.step;
      validateValue();
      emit("update:modelValue", useValue.value);
      emit("change", useValue.value);
      itemValidate("change");
    }
    function blur(e) {
      emit("blur", e);
      itemValidate("blur");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(["cu-input-number", [{ "is-disabled": _ctx.disabled }, currentSize.value]])
      }, [
        createElementVNode("span", {
          class: normalizeClass(["cu-input-number__minus", { disabled: useValue.value <= _ctx.min }]),
          onClick: valueMinus
        }, _hoisted_2, 2),
        createElementVNode("span", _hoisted_3, [
          createElementVNode("input", {
            type: "number",
            class: "cu-input__inner",
            min: _ctx.min,
            max: _ctx.max,
            disabled: _ctx.disabled,
            value: _ctx.modelValue,
            onChange: change,
            onFocus: _cache[0] || (_cache[0] = ($event) => emit("focus", $event)),
            onBlur: blur
          }, null, 40, _hoisted_4)
        ]),
        createElementVNode("span", {
          class: normalizeClass(["cu-input-number__plus", { disabled: useValue.value >= _ctx.max }]),
          onClick: valuePlus
        }, _hoisted_6, 2)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
