"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/time-picker.css");
require("../../form-common.css");
const type = require("../../form/src/type.js");
const index = require("../../popper/index.js");
const timeSelect_vue_vue_type_script_setup_true_lang = require("./time-select.vue.js");
const validate = require("../../../utils/hook/validate.js");
const typescript = require("../../../utils/typescript.js");
const config = require("../../../utils/config.js");
const clickOutside = require("../../../utils/click-outside.js");
const main_props = require("./main.props.js");
const type$1 = require("./type.js");
const _hoisted_1 = { class: "prefix-icon" };
const _hoisted_2 = ["value", "placeholder", "disabled"];
const _hoisted_3 = { key: 0 };
const _hoisted_4 = ["value", "placeholder", "disabled"];
const _hoisted_5 = {
  key: 2,
  class: "clearable"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuTimePicker"
  },
  __name: "main",
  props: main_props.timePickerProps,
  emits: main_props.timePickerEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const popperRef = vue.ref(null);
    const { itemValidate } = validate.useItemValidate();
    const { SIZE } = config.useConfig();
    const form = vue.inject(type.FORM_PROVIDE, void 0);
    const currentSize = vue.computed(() => {
      return props.size ?? (form == null ? void 0 : form.props.size) ?? (SIZE == null ? void 0 : SIZE.value);
    });
    const hasValue = vue.computed(() => {
      if (props.range && typescript.isArray(props.modelValue)) {
        return props.modelValue.length > 0 && props.modelValue.every((val) => !!val);
      } else {
        return !!props.modelValue;
      }
    });
    const show = vue.ref(false);
    const vClickOutside = clickOutside.useClickOutside();
    function onClickOutside() {
      show.value && (show.value = false);
    }
    function handleClick() {
      show.value = !show.value;
    }
    function clear() {
      emit("update:modelValue", props.range ? [] : "");
      change(props.range ? [] : "");
      emit("clear");
    }
    function confirmTime(value) {
      emit("update:modelValue", value);
      change(value);
      show.value = false;
    }
    function change(val) {
      emit("change", val);
      itemValidate("change");
    }
    vue.provide(type$1.TIMEPICKER_PROVIDE, {
      props,
      show,
      confirm: confirmTime
    });
    return (_ctx, _cache) => {
      return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(["cu-time-picker", [{ expand: show.value }, { "is-disabled": _ctx.disabled }, { "is-range": _ctx.range }, currentSize.value]])
      }, [
        vue.createElementVNode("div", {
          class: "cu-time-picker__content",
          onClick: handleClick
        }, [
          vue.createElementVNode("span", _hoisted_1, [
            vue.createElementVNode("i", {
              class: vue.normalizeClass(_ctx.icon)
            }, null, 2)
          ]),
          vue.createElementVNode("input", {
            class: "cu-input__inner",
            type: "text",
            readonly: "",
            value: _ctx.range ? _ctx.modelValue[0] : _ctx.modelValue,
            placeholder: _ctx.range ? _ctx.startPlaceholder : _ctx.placeholder,
            disabled: _ctx.disabled
          }, null, 8, _hoisted_2),
          _ctx.range ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3, vue.toDisplayString(_ctx.rangeSeparator), 1)) : vue.createCommentVNode("", true),
          _ctx.range ? (vue.openBlock(), vue.createElementBlock("input", {
            key: 1,
            class: "cu-input__inner",
            type: "text",
            readonly: "",
            value: _ctx.modelValue[1],
            placeholder: _ctx.endPlaceholder,
            disabled: _ctx.disabled
          }, null, 8, _hoisted_4)) : vue.createCommentVNode("", true),
          _ctx.clearable ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_5, [
            vue.withDirectives(vue.createElementVNode("i", {
              class: "cu-icon-close-one",
              onClick: vue.withModifiers(clear, ["stop"])
            }, null, 512), [
              [vue.vShow, hasValue.value]
            ])
          ])) : vue.createCommentVNode("", true)
        ]),
        vue.createVNode(vue.unref(index.CuPopper), { show: show.value }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("div", {
              class: vue.normalizeClass(["cu-time-picker__popper", { range: _ctx.range }]),
              ref_key: "popperRef",
              ref: popperRef
            }, [
              vue.createVNode(timeSelect_vue_vue_type_script_setup_true_lang.default)
            ], 2)
          ]),
          _: 1
        }, 8, ["show"])
      ], 2)), [
        [vue.unref(vClickOutside), onClickOutside, popperRef.value]
      ]);
    };
  }
});
exports.default = _sfc_main;
