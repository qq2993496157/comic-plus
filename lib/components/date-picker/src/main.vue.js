"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/date-picker.css");
require("../../form-common.css");
const type = require("../../form/src/type.js");
const index = require("../../popper/index.js");
const dateSelect_vue_vue_type_script_setup_true_lang = require("./date-select.vue.js");
const typescript = require("../../../utils/typescript.js");
const config = require("../../../utils/config.js");
const clickOutside = require("../../../utils/click-outside.js");
const tools = require("../../../utils/tools.js");
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
    name: "CuDatePicker"
  },
  __name: "main",
  props: main_props.datePickerProps,
  emits: main_props.datePickerEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const popperRef = vue.ref(null);
    const { SIZE } = config.useConfig();
    const form = vue.inject(type.FORM_PROVIDE, void 0);
    const currentSize = vue.computed(() => {
      return props.size ?? (form == null ? void 0 : form.props.size) ?? (SIZE == null ? void 0 : SIZE.value);
    });
    const vClickOutside = clickOutside.useClickOutside();
    const show = vue.ref(false);
    const hasValue = vue.computed(() => {
      if (props.range && typescript.isArray(props.modelValue)) {
        return props.modelValue.length > 0 && props.modelValue.every((val) => !!val);
      } else {
        return !!props.modelValue;
      }
    });
    function clear() {
      emit("update:modelValue", props.range ? [] : "");
      emit("clear");
      show.value = false;
    }
    function onClickOutside() {
      show.value && (show.value = false);
    }
    function handleClick() {
      if (props.disabled)
        return;
      show.value = !show.value;
    }
    function updateValue(value) {
      let val;
      if (typescript.isArray(value)) {
        if (value[0] > value[1]) {
          value.reverse();
        }
      }
      switch (props.valueFormat) {
        case "date":
          if (props.range) {
            val = [new Date(value[0]), new Date(value[1])];
          } else {
            val = new Date(value);
          }
          break;
        case "string":
          if (props.range) {
            val = [tools.formatDate(value[0], props.format), tools.formatDate(value[1], props.format)];
          } else {
            val = tools.formatDate(value, props.format);
          }
          break;
        case "number":
          val = value;
          break;
        default:
          val = value;
          break;
      }
      emit("update:modelValue", val);
      show.value = false;
    }
    vue.provide(type$1.DATEPICKER_PROVIDE, {
      props,
      show,
      confirm: updateValue
    });
    return (_ctx, _cache) => {
      return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(["cu-date-picker", [{ expand: show.value }, { "is-disabled": _ctx.disabled }, { "is-range": _ctx.range }, currentSize.value]])
      }, [
        vue.createElementVNode("div", {
          class: "cu-date-picker__content",
          onClick: handleClick
        }, [
          vue.createElementVNode("span", _hoisted_1, [
            vue.createElementVNode("i", {
              class: vue.normalizeClass(_ctx.icon)
            }, null, 2)
          ]),
          vue.createElementVNode("input", {
            type: "text",
            class: "cu-input__inner",
            readonly: "",
            value: _ctx.range ? vue.unref(tools.formatDate)(new Date(_ctx.modelValue[0]), _ctx.format) : vue.unref(tools.formatDate)(new Date(_ctx.modelValue), _ctx.format),
            placeholder: _ctx.range ? _ctx.startPlaceholder : _ctx.placeholder,
            disabled: _ctx.disabled
          }, null, 8, _hoisted_2),
          _ctx.range ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3, vue.toDisplayString(_ctx.rangeSeparator), 1)) : vue.createCommentVNode("", true),
          _ctx.range ? (vue.openBlock(), vue.createElementBlock("input", {
            key: 1,
            type: "text",
            class: "cu-input__inner",
            readonly: "",
            value: vue.unref(tools.formatDate)(new Date(_ctx.modelValue[1]), _ctx.format),
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
              class: vue.normalizeClass(["cu-date-picker__popper", [{ "is-range": _ctx.range }, currentSize.value]]),
              ref_key: "popperRef",
              ref: popperRef
            }, [
              vue.createVNode(dateSelect_vue_vue_type_script_setup_true_lang.default)
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
