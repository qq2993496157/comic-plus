"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/input-number.css");
require("../../form-common.css");
const type = require("../../form/src/type.js");
const validate = require("../../../utils/hook/validate.js");
const typescript = require("../../../utils/typescript.js");
const config = require("../../../utils/config.js");
const main_props = require("./main.props.js");
const _hoisted_1 = /* @__PURE__ */ vue.createElementVNode("i", { class: "cu-icon-minus" }, null, -1);
const _hoisted_2 = [
  _hoisted_1
];
const _hoisted_3 = { class: "cu-input-number__content" };
const _hoisted_4 = ["min", "max", "disabled", "value"];
const _hoisted_5 = /* @__PURE__ */ vue.createElementVNode("i", { class: "cu-icon-plus" }, null, -1);
const _hoisted_6 = [
  _hoisted_5
];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuInputNumber"
  },
  __name: "main",
  props: main_props.inputNumberProps,
  emits: main_props.inputNumberEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { itemValidate } = validate.useItemValidate();
    const { SIZE } = config.useConfig();
    const form = vue.inject(type.FORM_PROVIDE, void 0);
    const currentSize = vue.computed(() => {
      return props.size ?? (form == null ? void 0 : form.props.size) ?? (SIZE == null ? void 0 : SIZE.value);
    });
    const useValue = vue.ref(props.modelValue);
    function change(e) {
      useValue.value = Number(e.target.value);
      validateValue();
      emit("update:modelValue", useValue.value);
      emit("change", useValue.value);
      itemValidate("change");
    }
    function validateValue() {
      if (typescript.isNumber(props.min) && useValue.value < props.min) {
        useValue.value = props.min;
      }
      if (typescript.isNumber(props.max) && useValue.value > props.max) {
        useValue.value = props.max;
      }
    }
    function valuePlus() {
      if (props.disabled)
        return;
      if (typescript.isNumber(props.max) && useValue.value > props.max)
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
      if (typescript.isNumber(props.min) && useValue.value < props.min)
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
      return vue.openBlock(), vue.createElementBlock("span", {
        class: vue.normalizeClass(["cu-input-number", [{ "is-disabled": _ctx.disabled }, currentSize.value]])
      }, [
        vue.createElementVNode("span", {
          class: vue.normalizeClass(["cu-input-number__minus", { disabled: useValue.value <= _ctx.min }]),
          onClick: valueMinus
        }, _hoisted_2, 2),
        vue.createElementVNode("span", _hoisted_3, [
          vue.createElementVNode("input", {
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
        vue.createElementVNode("span", {
          class: vue.normalizeClass(["cu-input-number__plus", { disabled: useValue.value >= _ctx.max }]),
          onClick: valuePlus
        }, _hoisted_6, 2)
      ], 2);
    };
  }
});
exports.default = _sfc_main;
