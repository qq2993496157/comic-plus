import { defineComponent, ref, watch, watchEffect, computed, provide, openBlock, createElementBlock, normalizeClass, createElementVNode, normalizeStyle, Fragment, renderList, createBlock, renderSlot, createTextVNode, toDisplayString, createCommentVNode } from "vue";
import "../style/rate.css";
import { useMouseInElement } from "@vueuse/core";
import _sfc_main$1 from "./item.vue.mjs";
import { rateProps, rateEmits } from "./main.props.mjs";
import { RATE_PROVIDE } from "./type.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuRate"
  },
  __name: "main",
  props: rateProps,
  emits: rateEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const rateContainerRef = ref(null);
    const activeIdx = ref(props.modelValue);
    var unwatch;
    const { elementX, isOutside } = useMouseInElement(rateContainerRef);
    watch(
      () => props.disabled,
      (val) => {
        if (val) {
          unwatch == null ? void 0 : unwatch();
        } else {
          unwatch = watchEffect(changeIdx);
        }
      },
      { immediate: true }
    );
    const calcRateSize = computed(() => {
      return Math.max(props.size, 12);
    });
    const textContent = computed(() => {
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
    const activeColor = computed(() => {
      var _a;
      return ((_a = props.variableColor) == null ? void 0 : _a.call(props, activeIdx.value)) ?? props.color;
    });
    provide(RATE_PROVIDE, {
      props,
      activeIdx,
      activeColor
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["cu-rate", { "read-only": _ctx.disabled }])
      }, [
        createElementVNode("div", {
          class: "cu-rate__container",
          ref_key: "rateContainerRef",
          ref: rateContainerRef,
          style: normalizeStyle({ fontSize: calcRateSize.value + "px" })
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.count, (idx) => {
            return openBlock(), createBlock(_sfc_main$1, {
              current: idx,
              onClick: itemHandleClick
            }, null, 8, ["current"]);
          }), 256))
        ], 4),
        _ctx.showText ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: "cu-rate__text",
          style: normalizeStyle({ color: _ctx.disabled ? activeColor.value : void 0 })
        }, [
          renderSlot(_ctx.$slots, "text", { value: activeIdx.value }, () => [
            createTextVNode(toDisplayString(textContent.value), 1)
          ])
        ], 4)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
