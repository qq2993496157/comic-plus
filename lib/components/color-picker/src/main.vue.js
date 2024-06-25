"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/color-picker.css");
require("../../form-common.css");
const type = require("../../form/src/type.js");
const index = require("../../popper/index.js");
const index$2 = require("../../button/index.js");
const index$1 = require("../../input/index.js");
const pane = require("./components/pane.js");
const hslSlider = require("./components/hsl-slider.js");
const alphaSlider = require("./components/alpha-slider.js");
const colorPreview = require("./components/color-preview.js");
const preset = require("./components/preset.js");
const validate = require("../../../utils/hook/validate.js");
const config = require("../../../utils/config.js");
const clickOutside = require("../../../utils/click-outside.js");
const main_props = require("./main.props.js");
const color = require("../utils/color.js");
const type$1 = require("./type.js");
const _hoisted_1 = {
  key: 0,
  class: "cu-icon-minus"
};
const _hoisted_2 = {
  key: 1,
  class: "cu-icon-down-filled"
};
const _hoisted_3 = { class: "cu-color-picker__huering" };
const _hoisted_4 = { class: "flex1" };
const _hoisted_5 = { class: "cu-color-picker__buttons" };
const _hoisted_6 = { class: "cu-color-picker__buttonbox" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuColorPicker"
  },
  __name: "main",
  props: main_props.colorPickerProps,
  emits: main_props.colorPickerEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const popperRef = vue.ref(null);
    const { itemValidate } = validate.useItemValidate();
    const { SIZE } = config.useConfig();
    const form = vue.inject(type.FORM_PROVIDE, void 0);
    const show = vue.ref(false);
    const currentSize = vue.computed(() => {
      return props.size ?? (form == null ? void 0 : form.props.size) ?? (SIZE == null ? void 0 : SIZE.value);
    });
    const formatValue = vue.computed(() => {
      return props.format ? props.format : props.alpha ? "rgb" : "hex";
    });
    const color$1 = vue.reactive(
      new color.default({
        enableAlpha: props.alpha,
        format: formatValue.value,
        value: props.modelValue
      })
    );
    const colorValue = vue.ref(color$1.value);
    vue.watch(
      () => color$1.value,
      (val) => {
        colorValue.value = val;
      }
    );
    const vClickOutside = clickOutside.useClickOutside();
    function onClickOutside() {
      show.value && (show.value = false);
    }
    function convertColors() {
      color$1.fromString(colorValue.value);
    }
    function handleClick() {
      if (props.disabled)
        return;
      show.value = !show.value;
      if (show.value) {
        color$1.fromString(props.modelValue);
      }
    }
    function confirm() {
      emit("update:modelValue", colorValue.value);
      change(colorValue.value);
      show.value = false;
    }
    function clear() {
      color$1.fromString("");
      colorValue.value = "";
      color$1.value = "";
      emit("update:modelValue", "");
      change("");
      show.value = false;
    }
    function change(val) {
      emit("change", val);
      itemValidate("change");
    }
    vue.provide(type$1.COLORPICKER_PROVIDE, {
      props,
      show,
      color: color$1
    });
    return (_ctx, _cache) => {
      return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(["cu-color-picker", [currentSize.value, { "is-disabled": _ctx.disabled }, { expand: show.value }]]),
        onClick: handleClick
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["cu-color-picker__container", { alpha: _ctx.alpha }])
        }, [
          vue.createElementVNode("div", {
            class: "preview__box",
            style: vue.normalizeStyle({ background: _ctx.modelValue })
          }, null, 4),
          !_ctx.modelValue ? (vue.openBlock(), vue.createElementBlock("i", _hoisted_1)) : (vue.openBlock(), vue.createElementBlock("i", _hoisted_2))
        ], 2),
        vue.createVNode(vue.unref(index.CuPopper), {
          show: show.value,
          "hide-arrow": ""
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("div", {
              class: "cu-color-picker__popper",
              ref_key: "popperRef",
              ref: popperRef
            }, [
              vue.createVNode(vue.unref(pane.default)),
              vue.createElementVNode("div", _hoisted_3, [
                vue.createElementVNode("div", _hoisted_4, [
                  vue.createVNode(vue.unref(hslSlider.default)),
                  _ctx.alpha ? (vue.openBlock(), vue.createBlock(vue.unref(alphaSlider.default), { key: 0 })) : vue.createCommentVNode("", true)
                ]),
                vue.createVNode(vue.unref(colorPreview.default))
              ]),
              _ctx.predefine ? (vue.openBlock(), vue.createBlock(vue.unref(preset.default), {
                key: 0,
                predefine: _ctx.predefine
              }, null, 8, ["predefine"])) : vue.createCommentVNode("", true),
              vue.createElementVNode("div", _hoisted_5, [
                vue.createVNode(vue.unref(index$1.CuInput), {
                  modelValue: colorValue.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => colorValue.value = $event),
                  onKeyup: vue.withKeys(convertColors, ["enter"]),
                  onBlur: convertColors,
                  size: "small",
                  style: { "width": "140px" }
                }, null, 8, ["modelValue"]),
                vue.createElementVNode("div", _hoisted_6, [
                  vue.createVNode(vue.unref(index$2.CuButton), {
                    plain: "",
                    size: "small",
                    onClick: clear
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("清空")
                    ]),
                    _: 1
                  }),
                  vue.createVNode(vue.unref(index$2.CuButton), {
                    type: "primary",
                    size: "small",
                    onClick: confirm
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("确认")
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 512)
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
