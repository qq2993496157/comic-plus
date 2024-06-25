"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/switch.css");
const validate = require("../../../utils/hook/validate.js");
const typescript = require("../../../utils/typescript.js");
const color = require("../../../utils/color.js");
const config = require("../../../utils/config.js");
const main_props = require("./main.props.js");
const type = require("../../form/src/type.js");
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
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuSwitch"
  },
  __name: "main",
  props: main_props.switchProps,
  emits: main_props.switchEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const form = vue.inject(type.FORM_PROVIDE, void 0);
    const { itemValidate } = validate.useItemValidate();
    const { SIZE } = config.useConfig();
    const currentSize = vue.computed(() => {
      return props.size ?? (form == null ? void 0 : form.props.size) ?? (SIZE == null ? void 0 : SIZE.value);
    });
    const isOn = vue.computed(() => {
      return typescript.isBoolean(props.modelValue) ? props.modelValue : props.modelValue === props.onValue;
    });
    const status = vue.computed(() => {
      return isOn.value ? "is-on" : "is-off";
    });
    const style = vue.computed(() => {
      const onc = props.onColor ? color.colorToRgba(props.onColor) : void 0;
      const offc = props.offColor ? color.colorToRgba(props.offColor) : void 0;
      return {
        "--cu-switch-on-color": props.onColor,
        "--cu-switch-off-color": props.offColor,
        "--cu-switch-on-disabled": onc ? color.colorBlend(onc, 50) : void 0,
        "--cu-switch-off-disabled": offc ? color.colorBlend(offc, 50) : void 0
      };
    });
    function getChecked() {
      return typescript.isBoolean(props.modelValue) ? props.modelValue : props.modelValue === props.onValue;
    }
    function changeValue() {
      var _a;
      let checked = !getChecked();
      if (props.changeBefore) {
        let before = (_a = props.changeBefore) == null ? void 0 : _a.call(props);
        const included = [typescript.isBoolean(before), typescript.isPromise(before)].includes(true);
        if (!included) {
          throw "ChangeBefore must be a function that provides a return Boolean value or Promise";
        }
        if (typescript.isPromise(before)) {
          before.then((result) => {
            if (result) {
              updateValue(checked);
            }
          }).catch((err) => {
            err && vue.warn(err);
          });
        } else if (typescript.isBoolean(before)) {
          before && updateValue(checked);
        }
      } else {
        updateValue(checked);
      }
    }
    function updateValue(checked) {
      let val = typescript.isBoolean(props.modelValue) ? checked : checked ? props.onValue : props.offValue;
      emit("update:modelValue", val);
      emit("change", val);
      itemValidate("change");
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("label", {
        class: vue.normalizeClass(["cu-switch", [{ "is-disabled": _ctx.disabled || _ctx.loading, "is-square": _ctx.square }, status.value, currentSize.value]]),
        style: vue.normalizeStyle(style.value)
      }, [
        vue.createElementVNode("input", {
          type: "checkbox",
          checked: isOn.value,
          disabled: _ctx.disabled,
          onChange: changeValue
        }, null, 40, _hoisted_1),
        !_ctx.inlineText && (_ctx.offIcon || _ctx.offText) ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2, [
          vue.createElementVNode("span", {
            class: vue.normalizeClass(_ctx.offIcon)
          }, vue.toDisplayString(_ctx.offIcon ? void 0 : _ctx.offText), 3)
        ])) : vue.createCommentVNode("", true),
        vue.createElementVNode("div", _hoisted_3, [
          _ctx.inlineText ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_4, [
            vue.createElementVNode("span", {
              class: vue.normalizeClass(isOn.value ? _ctx.onIcon : _ctx.offIcon)
            }, vue.toDisplayString(isOn.value ? _ctx.onIcon ? void 0 : _ctx.onText : _ctx.offIcon ? void 0 : _ctx.offText), 3)
          ])) : vue.createCommentVNode("", true),
          vue.createElementVNode("span", _hoisted_5, [
            _ctx.loading ? (vue.openBlock(), vue.createElementBlock("i", _hoisted_6)) : vue.createCommentVNode("", true)
          ])
        ]),
        !_ctx.inlineText && (_ctx.onIcon || _ctx.onText) ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_7, [
          vue.createElementVNode("span", {
            class: vue.normalizeClass(_ctx.onIcon)
          }, vue.toDisplayString(_ctx.onIcon ? void 0 : _ctx.onText), 3)
        ])) : vue.createCommentVNode("", true)
      ], 6);
    };
  }
});
exports.default = _sfc_main;
