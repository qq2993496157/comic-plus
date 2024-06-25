import { defineComponent, ref, inject, computed, provide, withDirectives, openBlock, createElementBlock, normalizeClass, createElementVNode, toDisplayString, createCommentVNode, withModifiers, vShow, createVNode, unref, withCtx } from "vue";
import "../style/time-picker.css";
import "../../form-common.css";
import { FORM_PROVIDE } from "../../form/src/type.mjs";
import { CuPopper } from "../../popper/index.mjs";
import _sfc_main$1 from "./time-select.vue.mjs";
import { useItemValidate } from "../../../utils/hook/validate.mjs";
import { isArray } from "../../../utils/typescript.mjs";
import { useConfig } from "../../../utils/config.mjs";
import { useClickOutside } from "../../../utils/click-outside.mjs";
import { timePickerProps, timePickerEmits } from "./main.props.mjs";
import { TIMEPICKER_PROVIDE } from "./type.mjs";
const _hoisted_1 = { class: "prefix-icon" };
const _hoisted_2 = ["value", "placeholder", "disabled"];
const _hoisted_3 = { key: 0 };
const _hoisted_4 = ["value", "placeholder", "disabled"];
const _hoisted_5 = {
  key: 2,
  class: "clearable"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuTimePicker"
  },
  __name: "main",
  props: timePickerProps,
  emits: timePickerEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const popperRef = ref(null);
    const { itemValidate } = useItemValidate();
    const { SIZE } = useConfig();
    const form = inject(FORM_PROVIDE, void 0);
    const currentSize = computed(() => {
      return props.size ?? (form == null ? void 0 : form.props.size) ?? (SIZE == null ? void 0 : SIZE.value);
    });
    const hasValue = computed(() => {
      if (props.range && isArray(props.modelValue)) {
        return props.modelValue.length > 0 && props.modelValue.every((val) => !!val);
      } else {
        return !!props.modelValue;
      }
    });
    const show = ref(false);
    const vClickOutside = useClickOutside();
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
    provide(TIMEPICKER_PROVIDE, {
      props,
      show,
      confirm: confirmTime
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        class: normalizeClass(["cu-time-picker", [{ expand: show.value }, { "is-disabled": _ctx.disabled }, { "is-range": _ctx.range }, currentSize.value]])
      }, [
        createElementVNode("div", {
          class: "cu-time-picker__content",
          onClick: handleClick
        }, [
          createElementVNode("span", _hoisted_1, [
            createElementVNode("i", {
              class: normalizeClass(_ctx.icon)
            }, null, 2)
          ]),
          createElementVNode("input", {
            class: "cu-input__inner",
            type: "text",
            readonly: "",
            value: _ctx.range ? _ctx.modelValue[0] : _ctx.modelValue,
            placeholder: _ctx.range ? _ctx.startPlaceholder : _ctx.placeholder,
            disabled: _ctx.disabled
          }, null, 8, _hoisted_2),
          _ctx.range ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(_ctx.rangeSeparator), 1)) : createCommentVNode("", true),
          _ctx.range ? (openBlock(), createElementBlock("input", {
            key: 1,
            class: "cu-input__inner",
            type: "text",
            readonly: "",
            value: _ctx.modelValue[1],
            placeholder: _ctx.endPlaceholder,
            disabled: _ctx.disabled
          }, null, 8, _hoisted_4)) : createCommentVNode("", true),
          _ctx.clearable ? (openBlock(), createElementBlock("span", _hoisted_5, [
            withDirectives(createElementVNode("i", {
              class: "cu-icon-close-one",
              onClick: withModifiers(clear, ["stop"])
            }, null, 512), [
              [vShow, hasValue.value]
            ])
          ])) : createCommentVNode("", true)
        ]),
        createVNode(unref(CuPopper), { show: show.value }, {
          default: withCtx(() => [
            createElementVNode("div", {
              class: normalizeClass(["cu-time-picker__popper", { range: _ctx.range }]),
              ref_key: "popperRef",
              ref: popperRef
            }, [
              createVNode(_sfc_main$1)
            ], 2)
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
