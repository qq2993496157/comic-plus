"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const type = require("./type.js");
const validate = require("../../../utils/hook/validate.js");
require("../../../utils/config.js");
const group_props = require("./group.props.js");
const CheckboxGroup = vue.defineComponent({
  name: "CuCheckboxGroup",
  props: group_props.checkboxGroupProps,
  emits: group_props.checkboxGroupEmits,
  setup(props, { slots, emit }) {
    const { itemValidate } = validate.useItemValidate();
    const activeValue = vue.ref(props.modelValue);
    function changeItemCheck(val, value) {
      if (val) {
        activeValue.value.push(value);
      } else {
        activeValue.value.splice(
          activeValue.value.findIndex((v) => v === value),
          1
        );
      }
      emit("update:modelValue", activeValue.value);
      emit("change", activeValue.value);
      itemValidate("change");
    }
    const groupSize = vue.computed(() => props.size);
    vue.provide(type.CHECKBOXGROUP_PROVIDE, {
      groupSize,
      activeValue,
      changeItemCheck
    });
    return () => {
      return vue.h("span", { class: "cu-checkbox-group" }, slots);
    };
  }
});
exports.default = CheckboxGroup;
