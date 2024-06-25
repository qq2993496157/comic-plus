import { defineComponent, inject, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, toDisplayString, createCommentVNode, warn } from "vue";
import "../style/switch.css";
import { useItemValidate } from "../../../utils/hook/validate.mjs";
import { isBoolean, isPromise } from "../../../utils/typescript.mjs";
import { colorToRgba, colorBlend } from "../../../utils/color.mjs";
import { useConfig } from "../../../utils/config.mjs";
import { switchProps, switchEmits } from "./main.props.mjs";
import { FORM_PROVIDE } from "../../form/src/type.mjs";
const _hoisted_1 = ["checked", "disabled"];
const _hoisted_2 = {
  key: 0,
  class: "cu-switch__label cu-switch__label--off"
};
const _hoisted_3 = { class: "cu-switch__inner" };
const _hoisted_4 = {
  key: 0,
  class: "cu-switch__text"
};
const _hoisted_5 = { class: "cu-switch__span" };
const _hoisted_6 = {
  key: 0,
  class: "cu-icon-loading"
};
const _hoisted_7 = {
  key: 1,
  class: "cu-switch__label cu-switch__label--on"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuSwitch"
  },
  __name: "main",
  props: switchProps,
  emits: switchEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const form = inject(FORM_PROVIDE, void 0);
    const { itemValidate } = useItemValidate();
    const { SIZE } = useConfig();
    const currentSize = computed(() => {
      return props.size ?? (form == null ? void 0 : form.props.size) ?? (SIZE == null ? void 0 : SIZE.value);
    });
    const isOn = computed(() => {
      return isBoolean(props.modelValue) ? props.modelValue : props.modelValue === props.onValue;
    });
    const status = computed(() => {
      return isOn.value ? "is-on" : "is-off";
    });
    const style = computed(() => {
      const onc = props.onColor ? colorToRgba(props.onColor) : void 0;
      const offc = props.offColor ? colorToRgba(props.offColor) : void 0;
      return {
        "--cu-switch-on-color": props.onColor,
        "--cu-switch-off-color": props.offColor,
        "--cu-switch-on-disabled": onc ? colorBlend(onc, 50) : void 0,
        "--cu-switch-off-disabled": offc ? colorBlend(offc, 50) : void 0
      };
    });
    function getChecked() {
      return isBoolean(props.modelValue) ? props.modelValue : props.modelValue === props.onValue;
    }
    function changeValue() {
      var _a;
      let checked = !getChecked();
      if (props.changeBefore) {
        let before = (_a = props.changeBefore) == null ? void 0 : _a.call(props);
        const included = [isBoolean(before), isPromise(before)].includes(true);
        if (!included) {
          throw "ChangeBefore must be a function that provides a return Boolean value or Promise";
        }
        if (isPromise(before)) {
          before.then((result) => {
            if (result) {
              updateValue(checked);
            }
          }).catch((err) => {
            err && warn(err);
          });
        } else if (isBoolean(before)) {
          before && updateValue(checked);
        }
      } else {
        updateValue(checked);
      }
    }
    function updateValue(checked) {
      let val = isBoolean(props.modelValue) ? checked : checked ? props.onValue : props.offValue;
      emit("update:modelValue", val);
      emit("change", val);
      itemValidate("change");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("label", {
        class: normalizeClass(["cu-switch", [{ "is-disabled": _ctx.disabled || _ctx.loading, "is-square": _ctx.square }, status.value, currentSize.value]]),
        style: normalizeStyle(style.value)
      }, [
        createElementVNode("input", {
          type: "checkbox",
          checked: isOn.value,
          disabled: _ctx.disabled,
          onChange: changeValue
        }, null, 40, _hoisted_1),
        !_ctx.inlineText && (_ctx.offIcon || _ctx.offText) ? (openBlock(), createElementBlock("span", _hoisted_2, [
          createElementVNode("span", {
            class: normalizeClass(_ctx.offIcon)
          }, toDisplayString(_ctx.offIcon ? void 0 : _ctx.offText), 3)
        ])) : createCommentVNode("", true),
        createElementVNode("div", _hoisted_3, [
          _ctx.inlineText ? (openBlock(), createElementBlock("span", _hoisted_4, [
            createElementVNode("span", {
              class: normalizeClass(isOn.value ? _ctx.onIcon : _ctx.offIcon)
            }, toDisplayString(isOn.value ? _ctx.onIcon ? void 0 : _ctx.onText : _ctx.offIcon ? void 0 : _ctx.offText), 3)
          ])) : createCommentVNode("", true),
          createElementVNode("span", _hoisted_5, [
            _ctx.loading ? (openBlock(), createElementBlock("i", _hoisted_6)) : createCommentVNode("", true)
          ])
        ]),
        !_ctx.inlineText && (_ctx.onIcon || _ctx.onText) ? (openBlock(), createElementBlock("span", _hoisted_7, [
          createElementVNode("span", {
            class: normalizeClass(_ctx.onIcon)
          }, toDisplayString(_ctx.onIcon ? void 0 : _ctx.onText), 3)
        ])) : createCommentVNode("", true)
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
