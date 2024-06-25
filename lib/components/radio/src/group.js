"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/radio.css");
const validate = require("../../../utils/hook/validate.js");
require("../../../utils/config.js");
const group_props = require("./group.props.js");
const type = require("./type.js");
const RadioGroup = vue.defineComponent({
  name: "CuRadioGroup",
  props: group_props.radioGroupProps,
  emits: group_props.radioGroupEmits,
  setup(props, { slots, emit }) {
    const { itemValidate } = validate.useItemValidate();
    function changeItemCheck(value) {
      emit("update:modelValue", value);
      emit("change", value);
      itemValidate("change");
    }
    vue.provide(type.RADIOGROUP_PROVIDE, {
      changeItemCheck,
      props
    });
    return () => {
      return vue.h("span", { class: "cu-radio-group" }, slots);
    };
  }
});
exports.default = RadioGroup;
