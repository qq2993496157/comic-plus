"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const validate = require("../../../utils/hook/validate.js");
const config = require("../../../utils/config.js");
const type$1 = require("../../form/src/type.js");
const type = require("./type.js");
const useRadio = (props, emit) => {
  const { itemValidate } = validate.useItemValidate();
  const { SIZE } = config.useConfig();
  const radioGroup = vue.inject(type.RADIOGROUP_PROVIDE, void 0);
  const form = vue.inject(type$1.FORM_PROVIDE, void 0);
  const currentSize = vue.computed(() => {
    return props.size ?? (radioGroup == null ? void 0 : radioGroup.props.size) ?? (form == null ? void 0 : form.props.size) ?? (SIZE == null ? void 0 : SIZE.value);
  });
  const isCheck = vue.computed(() => {
    return radioGroup ? radioGroup.props.modelValue === props.value : props.modelValue === props.value;
  });
  function changeValue() {
    if (radioGroup) {
      radioGroup.changeItemCheck(props.value);
      return;
    }
    emit("update:modelValue", props.value);
    emit("change", isCheck.value);
    itemValidate("change");
  }
  return {
    currentSize,
    isCheck,
    changeValue
  };
};
exports.useRadio = useRadio;
