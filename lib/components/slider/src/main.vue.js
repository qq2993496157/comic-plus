"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/slider.css");
require("../../form-common.css");
const validate = require("../../../utils/hook/validate.js");
require("../../../utils/config.js");
const main_props = require("./main.props.js");
const _hoisted_1 = {
  key: 0,
  class: "cu-slider__breaks"
};
const _hoisted_2 = ["disabled", "step", "max", "min", "value"];
const _hoisted_3 = ["disabled", "step", "max", "min", "value"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuSlider"
  },
  __name: "main",
  props: main_props.sliderProps,
  emits: main_props.sliderEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { itemValidate } = validate.useItemValidate();
    const inputMax = vue.computed(() => {
      return props.max === 1 ? 100 : props.max;
    });
    const inputStep = vue.computed(() => {
      return props.max === 1 ? props.step * 100 : props.step;
    });
    const sliderStyle = vue.computed(() => {
      return {
        "--cu-slider-width": innerWidth.value.s + "%",
        "--cu-slider-width2": innerWidth.value.l ? innerWidth.value.l + "%" : void 0,
        "--cu-slider-color": props.color
      };
    });
    const inputValue = vue.computed(() => {
      let val = props.modelValue;
      if (Array.isArray(val)) {
        !val[0] && (val[0] = 0);
        !val[1] && (val[1] = 0);
      }
      let value = [].concat(val);
      if (value[1] !== void 0) {
        return [props.max === 1 ? value[0] * 100 : value[0], props.max === 1 ? value[1] * 100 : value[1]];
      }
      return [props.max === 1 ? value[0] * 100 : value[0]];
    });
    const innerWidth = vue.computed(() => {
      let s = (inputValue.value[0] - props.min) / (props.max - props.min);
      s = props.max === 1 ? s : s * 100;
      let l;
      if (inputValue.value[1] !== void 0) {
        l = (inputValue.value[1] - props.min) / (props.max - props.min);
        l = props.max === 1 ? l : l * 100;
      }
      if (s > l) {
        return {
          s: l,
          l: s
        };
      }
      return {
        s,
        l
      };
    });
    function handleInput(index, e) {
      const val = e.target.value;
      const computedVal = Number(props.max === 1 ? Number(val) / 100 : val);
      if (props.range) {
        let arr = inputValue.value;
        arr[index] = computedVal;
        emit("update:modelValue", arr);
        emit("input", arr);
        return;
      }
      emit("update:modelValue", computedVal);
      emit("input", computedVal);
    }
    function handleChange(index, e) {
      const val = e.target.value;
      const computedVal = Number(props.max === 1 ? Number(val) / 100 : val);
      if (props.range) {
        let arr = inputValue.value;
        arr[index] = computedVal;
        emit("change", arr);
        if (arr[0] > arr[1]) {
          arr.reverse();
          emit("update:modelValue", arr);
        }
        return;
      }
      emit("change", computedVal);
      itemValidate("change");
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(["cu-slider", [{ "is-disabled": _ctx.disabled }, _ctx.type ? "cu-slider--" + _ctx.type : void 0]])
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["cu-slider__inner", { range: _ctx.range }]),
          style: vue.normalizeStyle(sliderStyle.value)
        }, [
          inputStep.value > 0 && _ctx.showStep ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(inputMax.value / inputStep.value - 1, (b) => {
              return vue.openBlock(), vue.createElementBlock("span", { key: b });
            }), 128))
          ])) : vue.createCommentVNode("", true),
          vue.createElementVNode("input", {
            disabled: _ctx.disabled,
            step: inputStep.value,
            max: inputMax.value,
            min: _ctx.min,
            type: "range",
            value: inputValue.value[0],
            onChange: _cache[0] || (_cache[0] = ($event) => handleChange(0, $event)),
            onInput: _cache[1] || (_cache[1] = ($event) => handleInput(0, $event))
          }, null, 40, _hoisted_2),
          _ctx.range ? (vue.openBlock(), vue.createElementBlock("input", {
            key: 1,
            disabled: _ctx.disabled,
            step: inputStep.value,
            max: inputMax.value,
            min: _ctx.min,
            type: "range",
            value: inputValue.value[1],
            onChange: _cache[2] || (_cache[2] = ($event) => handleChange(1, $event)),
            onInput: _cache[3] || (_cache[3] = ($event) => handleInput(1, $event))
          }, null, 40, _hoisted_3)) : vue.createCommentVNode("", true)
        ], 6)
      ], 2);
    };
  }
});
exports.default = _sfc_main;
