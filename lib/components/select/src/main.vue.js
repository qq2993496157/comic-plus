"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/select.css");
require("../../form-common.css");
const type = require("../../form/src/type.js");
const index = require("../../popper/index.js");
const index$1 = require("../../scrollbar/index.js");
const validate = require("../../../utils/hook/validate.js");
const config = require("../../../utils/config.js");
const clickOutside = require("../../../utils/click-outside.js");
const main_props = require("./main.props.js");
const type$1 = require("./type.js");
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
const _hoisted_5 = /* @__PURE__ */ vue.createElementVNode("i", { class: "cu-icon-down cu-select__down" }, null, -1);
const _hoisted_6 = { class: "cu-select__dropdown" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuSelect"
  },
  __name: "main",
  props: main_props.selectProps,
  emits: main_props.selectEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const popperRef = vue.ref(null);
    const selectRef = vue.ref(null);
    const { itemValidate } = validate.useItemValidate();
    const { SIZE } = config.useConfig();
    const form = vue.inject(type.FORM_PROVIDE, void 0);
    const currentSize = vue.computed(() => {
      return props.size ?? (form == null ? void 0 : form.props.size) ?? (SIZE == null ? void 0 : SIZE.value);
    });
    const show = vue.ref(false);
    const options = vue.reactive({});
    const vClickOutside = clickOutside.useClickOutside();
    const inputValue = vue.computed(() => {
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
        let index2 = arr.findIndex((v) => v === value);
        index2 >= 0 ? arr.splice(index2, 1) : arr.push(value);
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
    vue.provide(type$1.SELECT_PROVIDE, {
      optionClick,
      addOption,
      deleteOption,
      props
    });
    return (_ctx, _cache) => {
      return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(["cu-select", [{ expand: show.value, "is-disabled": _ctx.disabled, "is-multiple": _ctx.multiple }, currentSize.value]]),
        ref_key: "selectRef",
        ref: selectRef
      }, [
        vue.createElementVNode("div", {
          class: "cu-select__content",
          onClick: handleClick
        }, [
          _ctx.multiple ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_1, [
            inputValue.value.length === 0 ? (vue.openBlock(), vue.createElementBlock("i", _hoisted_2, vue.toDisplayString(_ctx.placeholder), 1)) : vue.createCommentVNode("", true),
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(inputValue.value, (val) => {
              return vue.openBlock(), vue.createElementBlock("em", {
                class: "cu-select--em",
                key: val
              }, [
                vue.createTextVNode(vue.toDisplayString(options[val].props.label) + " ", 1),
                vue.createElementVNode("i", {
                  class: "cu-icon-close-one em-clearable",
                  onClick: vue.withModifiers(($event) => removeSelectItem(val), ["stop"])
                }, null, 8, _hoisted_3)
              ]);
            }), 128))
          ])) : (vue.openBlock(), vue.createElementBlock("input", {
            key: 1,
            type: "text",
            class: "cu-input__inner",
            readonly: "",
            value: inputValue.value,
            placeholder: _ctx.placeholder,
            disabled: _ctx.disabled
          }, null, 8, _hoisted_4)),
          vue.createElementVNode("span", {
            class: vue.normalizeClass(["suffix-icon", { "has-value": _ctx.modelValue && _ctx.clearable }])
          }, [
            _hoisted_5,
            _ctx.clearable ? (vue.openBlock(), vue.createElementBlock("i", {
              key: 0,
              class: "cu-icon-close-one clearable",
              onClick: vue.withModifiers(clear, ["stop"])
            })) : vue.createCommentVNode("", true)
          ], 2)
        ]),
        vue.createVNode(vue.unref(index.CuPopper), { show: show.value }, {
          default: vue.withCtx(() => {
            var _a;
            return [
              vue.createElementVNode("div", {
                class: vue.normalizeClass(["cu-select__popper", currentSize.value]),
                ref_key: "popperRef",
                ref: popperRef,
                style: vue.normalizeStyle({ width: ((_a = selectRef.value) == null ? void 0 : _a.offsetWidth) + "px" })
              }, [
                vue.createVNode(vue.unref(index$1.CuScrollbar), { "max-height": "280px" }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("ul", _hoisted_6, [
                      vue.renderSlot(_ctx.$slots, "default")
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
        [vue.unref(vClickOutside), onClickOutside, popperRef.value]
      ]);
    };
  }
});
exports.default = _sfc_main;
