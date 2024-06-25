import { defineComponent, ref, inject, computed, reactive, watch, provide, withDirectives, openBlock, createElementBlock, normalizeClass, createElementVNode, normalizeStyle, createVNode, unref, withCtx, createBlock, createCommentVNode, withKeys, createTextVNode } from "vue";
import "../style/color-picker.css";
import "../../form-common.css";
import { FORM_PROVIDE } from "../../form/src/type.mjs";
import { CuPopper } from "../../popper/index.mjs";
import { CuButton } from "../../button/index.mjs";
import { CuInput } from "../../input/index.mjs";
import pane from "./components/pane.mjs";
import hslSlider from "./components/hsl-slider.mjs";
import alphaSlider from "./components/alpha-slider.mjs";
import colorPreview from "./components/color-preview.mjs";
import presetList from "./components/preset.mjs";
import { useItemValidate } from "../../../utils/hook/validate.mjs";
import { useConfig } from "../../../utils/config.mjs";
import { useClickOutside } from "../../../utils/click-outside.mjs";
import { colorPickerProps, colorPickerEmits } from "./main.props.mjs";
import Color from "../utils/color.mjs";
import { COLORPICKER_PROVIDE } from "./type.mjs";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuColorPicker"
  },
  __name: "main",
  props: colorPickerProps,
  emits: colorPickerEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const popperRef = ref(null);
    const { itemValidate } = useItemValidate();
    const { SIZE } = useConfig();
    const form = inject(FORM_PROVIDE, void 0);
    const show = ref(false);
    const currentSize = computed(() => {
      return props.size ?? (form == null ? void 0 : form.props.size) ?? (SIZE == null ? void 0 : SIZE.value);
    });
    const formatValue = computed(() => {
      return props.format ? props.format : props.alpha ? "rgb" : "hex";
    });
    const color = reactive(
      new Color({
        enableAlpha: props.alpha,
        format: formatValue.value,
        value: props.modelValue
      })
    );
    const colorValue = ref(color.value);
    watch(
      () => color.value,
      (val) => {
        colorValue.value = val;
      }
    );
    const vClickOutside = useClickOutside();
    function onClickOutside() {
      show.value && (show.value = false);
    }
    function convertColors() {
      color.fromString(colorValue.value);
    }
    function handleClick() {
      if (props.disabled)
        return;
      show.value = !show.value;
      if (show.value) {
        color.fromString(props.modelValue);
      }
    }
    function confirm() {
      emit("update:modelValue", colorValue.value);
      change(colorValue.value);
      show.value = false;
    }
    function clear() {
      color.fromString("");
      colorValue.value = "";
      color.value = "";
      emit("update:modelValue", "");
      change("");
      show.value = false;
    }
    function change(val) {
      emit("change", val);
      itemValidate("change");
    }
    provide(COLORPICKER_PROVIDE, {
      props,
      show,
      color
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        class: normalizeClass(["cu-color-picker", [currentSize.value, { "is-disabled": _ctx.disabled }, { expand: show.value }]]),
        onClick: handleClick
      }, [
        createElementVNode("div", {
          class: normalizeClass(["cu-color-picker__container", { alpha: _ctx.alpha }])
        }, [
          createElementVNode("div", {
            class: "preview__box",
            style: normalizeStyle({ background: _ctx.modelValue })
          }, null, 4),
          !_ctx.modelValue ? (openBlock(), createElementBlock("i", _hoisted_1)) : (openBlock(), createElementBlock("i", _hoisted_2))
        ], 2),
        createVNode(unref(CuPopper), {
          show: show.value,
          "hide-arrow": ""
        }, {
          default: withCtx(() => [
            createElementVNode("div", {
              class: "cu-color-picker__popper",
              ref_key: "popperRef",
              ref: popperRef
            }, [
              createVNode(unref(pane)),
              createElementVNode("div", _hoisted_3, [
                createElementVNode("div", _hoisted_4, [
                  createVNode(unref(hslSlider)),
                  _ctx.alpha ? (openBlock(), createBlock(unref(alphaSlider), { key: 0 })) : createCommentVNode("", true)
                ]),
                createVNode(unref(colorPreview))
              ]),
              _ctx.predefine ? (openBlock(), createBlock(unref(presetList), {
                key: 0,
                predefine: _ctx.predefine
              }, null, 8, ["predefine"])) : createCommentVNode("", true),
              createElementVNode("div", _hoisted_5, [
                createVNode(unref(CuInput), {
                  modelValue: colorValue.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => colorValue.value = $event),
                  onKeyup: withKeys(convertColors, ["enter"]),
                  onBlur: convertColors,
                  size: "small",
                  style: { "width": "140px" }
                }, null, 8, ["modelValue"]),
                createElementVNode("div", _hoisted_6, [
                  createVNode(unref(CuButton), {
                    plain: "",
                    size: "small",
                    onClick: clear
                  }, {
                    default: withCtx(() => [
                      createTextVNode("清空")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(CuButton), {
                    type: "primary",
                    size: "small",
                    onClick: confirm
                  }, {
                    default: withCtx(() => [
                      createTextVNode("确认")
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
        [unref(vClickOutside), onClickOutside, popperRef.value]
      ]);
    };
  }
});
export {
  _sfc_main as default
};
