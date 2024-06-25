import { defineComponent, ref, inject, computed, provide, withDirectives, openBlock, createElementBlock, normalizeClass, createElementVNode, unref, toDisplayString, createCommentVNode, withModifiers, vShow, createVNode, withCtx } from "vue";
import "../style/date-picker.css";
import "../../form-common.css";
import { FORM_PROVIDE } from "../../form/src/type.mjs";
import { CuPopper } from "../../popper/index.mjs";
import _sfc_main$1 from "./date-select.vue.mjs";
import { isArray } from "../../../utils/typescript.mjs";
import { useConfig } from "../../../utils/config.mjs";
import { useClickOutside } from "../../../utils/click-outside.mjs";
import { formatDate } from "../../../utils/tools.mjs";
import { datePickerProps, datePickerEmits } from "./main.props.mjs";
import { DATEPICKER_PROVIDE } from "./type.mjs";
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
    name: "CuDatePicker"
  },
  __name: "main",
  props: datePickerProps,
  emits: datePickerEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const popperRef = ref(null);
    const { SIZE } = useConfig();
    const form = inject(FORM_PROVIDE, void 0);
    const currentSize = computed(() => {
      return props.size ?? (form == null ? void 0 : form.props.size) ?? (SIZE == null ? void 0 : SIZE.value);
    });
    const vClickOutside = useClickOutside();
    const show = ref(false);
    const hasValue = computed(() => {
      if (props.range && isArray(props.modelValue)) {
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
      if (isArray(value)) {
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
            val = [formatDate(value[0], props.format), formatDate(value[1], props.format)];
          } else {
            val = formatDate(value, props.format);
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
    provide(DATEPICKER_PROVIDE, {
      props,
      show,
      confirm: updateValue
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        class: normalizeClass(["cu-date-picker", [{ expand: show.value }, { "is-disabled": _ctx.disabled }, { "is-range": _ctx.range }, currentSize.value]])
      }, [
        createElementVNode("div", {
          class: "cu-date-picker__content",
          onClick: handleClick
        }, [
          createElementVNode("span", _hoisted_1, [
            createElementVNode("i", {
              class: normalizeClass(_ctx.icon)
            }, null, 2)
          ]),
          createElementVNode("input", {
            type: "text",
            class: "cu-input__inner",
            readonly: "",
            value: _ctx.range ? unref(formatDate)(new Date(_ctx.modelValue[0]), _ctx.format) : unref(formatDate)(new Date(_ctx.modelValue), _ctx.format),
            placeholder: _ctx.range ? _ctx.startPlaceholder : _ctx.placeholder,
            disabled: _ctx.disabled
          }, null, 8, _hoisted_2),
          _ctx.range ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(_ctx.rangeSeparator), 1)) : createCommentVNode("", true),
          _ctx.range ? (openBlock(), createElementBlock("input", {
            key: 1,
            type: "text",
            class: "cu-input__inner",
            readonly: "",
            value: unref(formatDate)(new Date(_ctx.modelValue[1]), _ctx.format),
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
              class: normalizeClass(["cu-date-picker__popper", [{ "is-range": _ctx.range }, currentSize.value]]),
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
