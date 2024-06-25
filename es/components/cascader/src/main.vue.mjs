import { defineComponent, ref, inject, computed, watch, withDirectives, openBlock, createElementBlock, normalizeClass, createElementVNode, withModifiers, createCommentVNode, createVNode, unref, withCtx, Fragment, renderList, toDisplayString } from "vue";
import "../style/cascader.css";
import "../../form-common.css";
import { FORM_PROVIDE } from "../../form/src/type.mjs";
import { CuPopper } from "../../popper/index.mjs";
import { CuScrollbar } from "../../scrollbar/index.mjs";
import { useItemValidate } from "../../../utils/hook/validate.mjs";
import { useConfig } from "../../../utils/config.mjs";
import { useClickOutside } from "../../../utils/click-outside.mjs";
import { deleteAfterIndex } from "../../../utils/tools.mjs";
import { cascaderProps, cascaderEmits } from "./main.props.mjs";
const _hoisted_1 = ["value", "placeholder", "disabled"];
const _hoisted_2 = /* @__PURE__ */ createElementVNode("i", { class: "cu-icon-down cu-cascader__down" }, null, -1);
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuCascader"
  },
  __name: "main",
  props: cascaderProps,
  emits: cascaderEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { itemValidate } = useItemValidate();
    const popperRef = ref(null);
    const { SIZE } = useConfig();
    const form = inject(FORM_PROVIDE, void 0);
    const currentSize = computed(() => {
      return props.size ?? (form == null ? void 0 : form.props.size) ?? (SIZE == null ? void 0 : SIZE.value);
    });
    const show = ref(false);
    const recodeValues = ref([]);
    const inputValue = ref([]);
    const vClickOutside = useClickOutside();
    const useInputValue = computed(() => {
      return inputValue.value.map((v) => v[optionProps.value.label]).join(optionProps.value.separator);
    });
    const optionProps = computed(() => {
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
        let index = recodeValues.value.findIndex((v) => v[optionProps.value.value] === parentVal);
        if (index >= 0) {
          deleteAfterIndex(recodeValues.value, index);
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
    watch(
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
    watch(show, (val) => {
      if (val) {
        recodeValues.value = [];
        recodeValues.value = [...inputValue.value];
      }
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        class: normalizeClass(["cu-cascader", [{ expand: show.value }, { "is-disabled": _ctx.disabled }, currentSize.value]])
      }, [
        createElementVNode("div", {
          class: "cu-cascader__content",
          onClick: handleClick
        }, [
          createElementVNode("input", {
            type: "text",
            class: "cu-input__inner",
            readonly: "",
            value: useInputValue.value,
            placeholder: _ctx.placeholder,
            disabled: _ctx.disabled
          }, null, 8, _hoisted_1),
          createElementVNode("span", {
            class: normalizeClass(["suffix-icon", { "has-value": useInputValue.value && _ctx.clearable }])
          }, [
            _hoisted_2,
            _ctx.clearable ? (openBlock(), createElementBlock("i", {
              key: 0,
              class: "cu-icon-close-one clearable",
              onClick: withModifiers(clear, ["stop"])
            })) : createCommentVNode("", true)
          ], 2)
        ]),
        createVNode(unref(CuPopper), {
          show: show.value,
          center: false
        }, {
          default: withCtx(() => [
            createElementVNode("div", {
              class: normalizeClass(["cu-cascader__popper", currentSize.value]),
              ref_key: "popperRef",
              ref: popperRef
            }, [
              createElementVNode("div", _hoisted_3, [
                createVNode(unref(CuScrollbar), null, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.options, (item) => {
                      return openBlock(), createElementBlock("div", {
                        class: normalizeClass(["cu-cascader-pane__item", [
                          { active: recodeValues.value.map((v) => v[optionProps.value.value]).includes(item[optionProps.value.value]) },
                          { disabled: item.disabled }
                        ]]),
                        key: item[optionProps.value.value],
                        onClick: ($event) => itemHandleClick(null, item)
                      }, [
                        createElementVNode("span", null, toDisplayString(item[optionProps.value.label]), 1),
                        item[optionProps.value.children] ? (openBlock(), createElementBlock("i", _hoisted_5)) : createCommentVNode("", true)
                      ], 10, _hoisted_4);
                    }), 128))
                  ]),
                  _: 1
                })
              ]),
              (openBlock(true), createElementBlock(Fragment, null, renderList(recodeValues.value, (item) => {
                return openBlock(), createElementBlock(Fragment, null, [
                  item[optionProps.value.children] ? (openBlock(), createElementBlock("div", {
                    class: "cu-cascader-pane",
                    key: item[optionProps.value.value]
                  }, [
                    createVNode(unref(CuScrollbar), null, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(item[optionProps.value.children], (child, index) => {
                          return openBlock(), createElementBlock("div", {
                            class: normalizeClass(["cu-cascader-pane__item", [
                              { active: recodeValues.value.map((v) => v[optionProps.value.value]).includes(child[optionProps.value.value]) },
                              { disabled: child.disabled }
                            ]]),
                            key: index,
                            onClick: ($event) => itemHandleClick(item[optionProps.value.value], child)
                          }, [
                            createElementVNode("span", null, toDisplayString(child[optionProps.value.label]), 1),
                            child[optionProps.value.children] ? (openBlock(), createElementBlock("i", _hoisted_7)) : createCommentVNode("", true)
                          ], 10, _hoisted_6);
                        }), 128))
                      ]),
                      _: 2
                    }, 1024)
                  ])) : createCommentVNode("", true)
                ], 64);
              }), 256))
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
