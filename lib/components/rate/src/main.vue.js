"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/rate.css");
const core = require("@vueuse/core");
const item_vue_vue_type_script_setup_true_lang = require("./item.vue.js");
const main_props = require("./main.props.js");
const type = require("./type.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuRate"
  },
  __name: "main",
  props: main_props.rateProps,
  emits: main_props.rateEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const rateContainerRef = vue.ref(null);
    const activeIdx = vue.ref(props.modelValue);
    var unwatch;
    const { elementX, isOutside } = core.useMouseInElement(rateContainerRef);
    vue.watch(
      () => props.disabled,
      (val) => {
        if (val) {
          unwatch == null ? void 0 : unwatch();
        } else {
          unwatch = vue.watchEffect(changeIdx);
        }
      },
      { immediate: true }
    );
    const calcRateSize = vue.computed(() => {
      return Math.max(props.size, 12);
    });
    const textContent = vue.computed(() => {
      return props.texts ? props.texts[activeIdx.value - 1] : activeIdx.value === 0 && isOutside.value ? void 0 : activeIdx.value + "星";
    });
    function changeIdx() {
      activeIdx.value = isOutside.value ? props.modelValue : getCurrentValue();
    }
    function getCurrentValue() {
      if (props.allowHalf) {
        return Math.min(props.count, (Math.floor(elementX.value / ((calcRateSize.value + 4) / 2)) + 1) * 0.5);
      } else {
        return Math.min(props.count, Math.floor(elementX.value / (calcRateSize.value + 4)) + 1);
      }
    }
    function itemHandleClick() {
      let val = getCurrentValue();
      val = props.clearable ? val === props.modelValue ? 0 : val : val;
      emit("update:modelValue", val);
    }
    const activeColor = vue.computed(() => {
      var _a;
      return ((_a = props.variableColor) == null ? void 0 : _a.call(props, activeIdx.value)) ?? props.color;
    });
    vue.provide(type.RATE_PROVIDE, {
      props,
      activeIdx,
      activeColor
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(["cu-rate", { "read-only": _ctx.disabled }])
      }, [
        vue.createElementVNode("div", {
          class: "cu-rate__container",
          ref_key: "rateContainerRef",
          ref: rateContainerRef,
          style: vue.normalizeStyle({ fontSize: calcRateSize.value + "px" })
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.count, (idx) => {
            return vue.openBlock(), vue.createBlock(item_vue_vue_type_script_setup_true_lang.default, {
              current: idx,
              onClick: itemHandleClick
            }, null, 8, ["current"]);
          }), 256))
        ], 4),
        _ctx.showText ? (vue.openBlock(), vue.createElementBlock("span", {
          key: 0,
          class: "cu-rate__text",
          style: vue.normalizeStyle({ color: _ctx.disabled ? activeColor.value : void 0 })
        }, [
          vue.renderSlot(_ctx.$slots, "text", { value: activeIdx.value }, () => [
            vue.createTextVNode(vue.toDisplayString(textContent.value), 1)
          ])
        ], 4)) : vue.createCommentVNode("", true)
      ], 2);
    };
  }
});
exports.default = _sfc_main;
