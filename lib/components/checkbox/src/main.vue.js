"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/checkbox.css");
const validate = require("../../../utils/hook/validate.js");
const typescript = require("../../../utils/typescript.js");
const config = require("../../../utils/config.js");
const main_props = require("./main.props.js");
const type = require("./type.js");
const type$1 = require("../../form/src/type.js");
const _hoisted_1 = ["checked", "disabled"];
const _hoisted_2 = {
  key: 0,
  class: "cu-checkbox__label"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuCheckbox"
  },
  __name: "main",
  props: main_props.checkboxProps,
  emits: main_props.checkboxEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const checkboxGroup = vue.inject(type.CHECKBOXGROUP_PROVIDE, void 0);
    const form = vue.inject(type$1.FORM_PROVIDE, void 0);
    const { itemValidate } = validate.useItemValidate();
    const { SIZE } = config.useConfig();
    const currentSize = vue.computed(() => {
      return props.size ?? (checkboxGroup == null ? void 0 : checkboxGroup.groupSize.value) ?? (form == null ? void 0 : form.props.size) ?? (SIZE == null ? void 0 : SIZE.value);
    });
    const isCheck = vue.computed(() => {
      if (checkboxGroup) {
        return checkboxGroup == null ? void 0 : checkboxGroup.activeValue.value.includes(props.value);
      } else {
        return typescript.isBoolean(props.modelValue) ? props.modelValue : props.modelValue === props.value;
      }
    });
    function changeValue(e) {
      const eTarget = e.target;
      if (checkboxGroup) {
        checkboxGroup.changeItemCheck(eTarget.checked, props.value);
        itemValidate("change");
        return;
      } else {
        let checkValue = eTarget.checked ? props.value ?? eTarget.checked : props.falseValue ?? eTarget.checked;
        emit("update:modelValue", checkValue);
        emit("change", checkValue);
        itemValidate("change");
      }
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("label", {
        class: vue.normalizeClass(["cu-checkbox", [{ "is-disabled": _ctx.disabled, "is-check": isCheck.value }, currentSize.value]]),
        style: vue.normalizeStyle({
          "--cu-checkbox-color": _ctx.color
        })
      }, [
        vue.createElementVNode("input", {
          type: "checkbox",
          class: "cu-checkbox__input",
          checked: isCheck.value,
          disabled: _ctx.disabled,
          onChange: changeValue
        }, null, 40, _hoisted_1),
        vue.createElementVNode("span", {
          class: vue.normalizeClass(["cu-checkbox__inner", { indeterminate: _ctx.indeterminate }])
        }, null, 2),
        _ctx.label || _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2, [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createTextVNode(vue.toDisplayString(_ctx.label), 1)
          ])
        ])) : vue.createCommentVNode("", true)
      ], 6);
    };
  }
});
exports.default = _sfc_main;
