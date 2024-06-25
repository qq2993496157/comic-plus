"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/cascader.css");
require("../../form-common.css");
const type = require("../../form/src/type.js");
const index = require("../../popper/index.js");
const index$1 = require("../../scrollbar/index.js");
const validate = require("../../../utils/hook/validate.js");
const config = require("../../../utils/config.js");
const clickOutside = require("../../../utils/click-outside.js");
const tools = require("../../../utils/tools.js");
const main_props = require("./main.props.js");
const _hoisted_1 = ["value", "placeholder", "disabled"];
const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode("i", { class: "cu-icon-down cu-cascader__down" }, null, -1);
const _hoisted_3 = { class: "cu-cascader-pane" };
const _hoisted_4 = ["onClick"];
const _hoisted_5 = {
  key: 0,
  class: "cu-icon-right"
};
const _hoisted_6 = ["onClick"];
const _hoisted_7 = {
  key: 0,
  class: "cu-icon-right"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuCascader"
  },
  __name: "main",
  props: main_props.cascaderProps,
  emits: main_props.cascaderEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { itemValidate } = validate.useItemValidate();
    const popperRef = vue.ref(null);
    const { SIZE } = config.useConfig();
    const form = vue.inject(type.FORM_PROVIDE, void 0);
    const currentSize = vue.computed(() => {
      return props.size ?? (form == null ? void 0 : form.props.size) ?? (SIZE == null ? void 0 : SIZE.value);
    });
    const show = vue.ref(false);
    const recodeValues = vue.ref([]);
    const inputValue = vue.ref([]);
    const vClickOutside = clickOutside.useClickOutside();
    const useInputValue = vue.computed(() => {
      return inputValue.value.map((v) => v[optionProps.value.label]).join(optionProps.value.separator);
    });
    const optionProps = vue.computed(() => {
      return Object.assign(
        {},
        {
          children: "children",
          label: "label",
          value: "value"
        },
        props.prop
      );
    });
    function onClickOutside() {
      show.value && (show.value = false);
    }
    function handleClick() {
      show.value = !show.value;
    }
    function itemHandleClick(parentVal, val) {
      if (val.disabled)
        return;
      if (parentVal != null) {
        let index2 = recodeValues.value.findIndex((v) => v[optionProps.value.value] === parentVal);
        if (index2 >= 0) {
          tools.deleteAfterIndex(recodeValues.value, index2);
        }
      } else {
        recodeValues.value = [];
      }
      recodeValues.value.push(val);
      if (!val[optionProps.value.children] || props.arbitrarily) {
        let value = recodeValues.value.map((v) => v == null ? void 0 : v[optionProps.value.value]);
        emit("update:modelValue", value);
        change(value);
        !props.arbitrarily && (show.value = false);
      }
    }
    function change(val) {
      emit("change", val);
      itemValidate("change");
    }
    function clear() {
      show.value = false;
      emit("update:modelValue", []);
      change([]);
      emit("clear");
    }
    vue.watch(
      () => props.modelValue,
      (val) => {
        const vals = [].concat(val);
        inputValue.value = [];
        let arr = props.options;
        vals.forEach((item) => {
          let current = arr.find((v) => v[optionProps.value.value] === item) || null;
          if (current) {
            inputValue.value.push(current);
            arr = current[optionProps.value.children] || [];
          }
        });
      },
      { immediate: true }
    );
    vue.watch(show, (val) => {
      if (val) {
        recodeValues.value = [];
        recodeValues.value = [...inputValue.value];
      }
    });
    return (_ctx, _cache) => {
      return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(["cu-cascader", [{ expand: show.value }, { "is-disabled": _ctx.disabled }, currentSize.value]])
      }, [
        vue.createElementVNode("div", {
          class: "cu-cascader__content",
          onClick: handleClick
        }, [
          vue.createElementVNode("input", {
            type: "text",
            class: "cu-input__inner",
            readonly: "",
            value: useInputValue.value,
            placeholder: _ctx.placeholder,
            disabled: _ctx.disabled
          }, null, 8, _hoisted_1),
          vue.createElementVNode("span", {
            class: vue.normalizeClass(["suffix-icon", { "has-value": useInputValue.value && _ctx.clearable }])
          }, [
            _hoisted_2,
            _ctx.clearable ? (vue.openBlock(), vue.createElementBlock("i", {
              key: 0,
              class: "cu-icon-close-one clearable",
              onClick: vue.withModifiers(clear, ["stop"])
            })) : vue.createCommentVNode("", true)
          ], 2)
        ]),
        vue.createVNode(vue.unref(index.CuPopper), {
          show: show.value,
          center: false
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("div", {
              class: vue.normalizeClass(["cu-cascader__popper", currentSize.value]),
              ref_key: "popperRef",
              ref: popperRef
            }, [
              vue.createElementVNode("div", _hoisted_3, [
                vue.createVNode(vue.unref(index$1.CuScrollbar), null, {
                  default: vue.withCtx(() => [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.options, (item) => {
                      return vue.openBlock(), vue.createElementBlock("div", {
                        class: vue.normalizeClass(["cu-cascader-pane__item", [
                          { active: recodeValues.value.map((v) => v[optionProps.value.value]).includes(item[optionProps.value.value]) },
                          { disabled: item.disabled }
                        ]]),
                        key: item[optionProps.value.value],
                        onClick: ($event) => itemHandleClick(null, item)
                      }, [
                        vue.createElementVNode("span", null, vue.toDisplayString(item[optionProps.value.label]), 1),
                        item[optionProps.value.children] ? (vue.openBlock(), vue.createElementBlock("i", _hoisted_5)) : vue.createCommentVNode("", true)
                      ], 10, _hoisted_4);
                    }), 128))
                  ]),
                  _: 1
                })
              ]),
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(recodeValues.value, (item) => {
                return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
                  item[optionProps.value.children] ? (vue.openBlock(), vue.createElementBlock("div", {
                    class: "cu-cascader-pane",
                    key: item[optionProps.value.value]
                  }, [
                    vue.createVNode(vue.unref(index$1.CuScrollbar), null, {
                      default: vue.withCtx(() => [
                        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item[optionProps.value.children], (child, index2) => {
                          return vue.openBlock(), vue.createElementBlock("div", {
                            class: vue.normalizeClass(["cu-cascader-pane__item", [
                              { active: recodeValues.value.map((v) => v[optionProps.value.value]).includes(child[optionProps.value.value]) },
                              { disabled: child.disabled }
                            ]]),
                            key: index2,
                            onClick: ($event) => itemHandleClick(item[optionProps.value.value], child)
                          }, [
                            vue.createElementVNode("span", null, vue.toDisplayString(child[optionProps.value.label]), 1),
                            child[optionProps.value.children] ? (vue.openBlock(), vue.createElementBlock("i", _hoisted_7)) : vue.createCommentVNode("", true)
                          ], 10, _hoisted_6);
                        }), 128))
                      ]),
                      _: 2
                    }, 1024)
                  ])) : vue.createCommentVNode("", true)
                ], 64);
              }), 256))
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
