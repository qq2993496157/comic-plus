import { defineComponent, inject, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, renderSlot, createTextVNode, toDisplayString, createCommentVNode } from "vue";
import "../style/checkbox.css";
import { useItemValidate } from "../../../utils/hook/validate.mjs";
import { isBoolean } from "../../../utils/typescript.mjs";
import { useConfig } from "../../../utils/config.mjs";
import { checkboxProps, checkboxEmits } from "./main.props.mjs";
import { CHECKBOXGROUP_PROVIDE } from "./type.mjs";
import { FORM_PROVIDE } from "../../form/src/type.mjs";
const _hoisted_1 = ["checked", "disabled"];
const _hoisted_2 = {
  key: 0,
  class: "cu-checkbox__label"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuCheckbox"
  },
  __name: "main",
  props: checkboxProps,
  emits: checkboxEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const checkboxGroup = inject(CHECKBOXGROUP_PROVIDE, void 0);
    const form = inject(FORM_PROVIDE, void 0);
    const { itemValidate } = useItemValidate();
    const { SIZE } = useConfig();
    const currentSize = computed(() => {
      return props.size ?? (checkboxGroup == null ? void 0 : checkboxGroup.groupSize.value) ?? (form == null ? void 0 : form.props.size) ?? (SIZE == null ? void 0 : SIZE.value);
    });
    const isCheck = computed(() => {
      if (checkboxGroup) {
        return checkboxGroup == null ? void 0 : checkboxGroup.activeValue.value.includes(props.value);
      } else {
        return isBoolean(props.modelValue) ? props.modelValue : props.modelValue === props.value;
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
      return openBlock(), createElementBlock("label", {
        class: normalizeClass(["cu-checkbox", [{ "is-disabled": _ctx.disabled, "is-check": isCheck.value }, currentSize.value]]),
        style: normalizeStyle({
          "--cu-checkbox-color": _ctx.color
        })
      }, [
        createElementVNode("input", {
          type: "checkbox",
          class: "cu-checkbox__input",
          checked: isCheck.value,
          disabled: _ctx.disabled,
          onChange: changeValue
        }, null, 40, _hoisted_1),
        createElementVNode("span", {
          class: normalizeClass(["cu-checkbox__inner", { indeterminate: _ctx.indeterminate }])
        }, null, 2),
        _ctx.label || _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_2, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ])) : createCommentVNode("", true)
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
