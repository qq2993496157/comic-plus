import { defineComponent, ref, inject, computed, reactive, provide, withDirectives, openBlock, createElementBlock, normalizeClass, createElementVNode, toDisplayString, createCommentVNode, Fragment, renderList, createTextVNode, withModifiers, createVNode, unref, withCtx, normalizeStyle, renderSlot } from "vue";
import "../style/select.css";
import "../../form-common.css";
import { FORM_PROVIDE } from "../../form/src/type.mjs";
import { CuPopper } from "../../popper/index.mjs";
import { CuScrollbar } from "../../scrollbar/index.mjs";
import { useItemValidate } from "../../../utils/hook/validate.mjs";
import { useConfig } from "../../../utils/config.mjs";
import { useClickOutside } from "../../../utils/click-outside.mjs";
import { selectProps, selectEmits } from "./main.props.mjs";
import { SELECT_PROVIDE } from "./type.mjs";
const _hoisted_1 = {
  key: 0,
  class: "cu-input__inner"
};
const _hoisted_2 = {
  key: 0,
  class: "placeholder"
};
const _hoisted_3 = ["onClick"];
const _hoisted_4 = ["value", "placeholder", "disabled"];
const _hoisted_5 = /* @__PURE__ */ createElementVNode("i", { class: "cu-icon-down cu-select__down" }, null, -1);
const _hoisted_6 = { class: "cu-select__dropdown" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuSelect"
  },
  __name: "main",
  props: selectProps,
  emits: selectEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const popperRef = ref(null);
    const selectRef = ref(null);
    const { itemValidate } = useItemValidate();
    const { SIZE } = useConfig();
    const form = inject(FORM_PROVIDE, void 0);
    const currentSize = computed(() => {
      return props.size ?? (form == null ? void 0 : form.props.size) ?? (SIZE == null ? void 0 : SIZE.value);
    });
    const show = ref(false);
    const options = reactive({});
    const vClickOutside = useClickOutside();
    const inputValue = computed(() => {
      var _a;
      if (props.multiple) {
        return props.modelValue;
      } else {
        return (_a = options[props.modelValue]) == null ? void 0 : _a.props.label;
      }
    });
    function onClickOutside() {
      show.value && (show.value = false);
    }
    function optionClick(value) {
      let val;
      if (props.multiple) {
        let arr = [...props.modelValue];
        let index = arr.findIndex((v) => v === value);
        index >= 0 ? arr.splice(index, 1) : arr.push(value);
        val = arr;
      } else {
        val = value;
        show.value = false;
      }
      emit("update:modelValue", val);
      change(val);
    }
    function clear() {
      show.value = false;
      emit("update:modelValue", props.multiple ? [] : "");
      change(props.multiple ? [] : "");
      emit("clear");
    }
    function removeSelectItem(val) {
      let arr = [...props.modelValue];
      arr.splice(
        arr.findIndex((v) => v === val),
        1
      );
      emit("update:modelValue", arr);
      change(arr);
    }
    function handleClick() {
      if (props.disabled)
        return;
      show.value = !show.value;
    }
    function change(val) {
      emit("change", val);
      itemValidate("change");
    }
    function addOption(item) {
      options[item.key] = item;
    }
    function deleteOption(key) {
      delete options[key];
    }
    provide(SELECT_PROVIDE, {
      optionClick,
      addOption,
      deleteOption,
      props
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        class: normalizeClass(["cu-select", [{ expand: show.value, "is-disabled": _ctx.disabled, "is-multiple": _ctx.multiple }, currentSize.value]]),
        ref_key: "selectRef",
        ref: selectRef
      }, [
        createElementVNode("div", {
          class: "cu-select__content",
          onClick: handleClick
        }, [
          _ctx.multiple ? (openBlock(), createElementBlock("span", _hoisted_1, [
            inputValue.value.length === 0 ? (openBlock(), createElementBlock("i", _hoisted_2, toDisplayString(_ctx.placeholder), 1)) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(inputValue.value, (val) => {
              return openBlock(), createElementBlock("em", {
                class: "cu-select--em",
                key: val
              }, [
                createTextVNode(toDisplayString(options[val].props.label) + " ", 1),
                createElementVNode("i", {
                  class: "cu-icon-close-one em-clearable",
                  onClick: withModifiers(($event) => removeSelectItem(val), ["stop"])
                }, null, 8, _hoisted_3)
              ]);
            }), 128))
          ])) : (openBlock(), createElementBlock("input", {
            key: 1,
            type: "text",
            class: "cu-input__inner",
            readonly: "",
            value: inputValue.value,
            placeholder: _ctx.placeholder,
            disabled: _ctx.disabled
          }, null, 8, _hoisted_4)),
          createElementVNode("span", {
            class: normalizeClass(["suffix-icon", { "has-value": _ctx.modelValue && _ctx.clearable }])
          }, [
            _hoisted_5,
            _ctx.clearable ? (openBlock(), createElementBlock("i", {
              key: 0,
              class: "cu-icon-close-one clearable",
              onClick: withModifiers(clear, ["stop"])
            })) : createCommentVNode("", true)
          ], 2)
        ]),
        createVNode(unref(CuPopper), { show: show.value }, {
          default: withCtx(() => {
            var _a;
            return [
              createElementVNode("div", {
                class: normalizeClass(["cu-select__popper", currentSize.value]),
                ref_key: "popperRef",
                ref: popperRef,
                style: normalizeStyle({ width: ((_a = selectRef.value) == null ? void 0 : _a.offsetWidth) + "px" })
              }, [
                createVNode(unref(CuScrollbar), { "max-height": "280px" }, {
                  default: withCtx(() => [
                    createElementVNode("ul", _hoisted_6, [
                      renderSlot(_ctx.$slots, "default")
                    ])
                  ]),
                  _: 3
                })
              ], 6)
            ];
          }),
          _: 3
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
