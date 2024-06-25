import { defineComponent, ref, computed, watch, onMounted, openBlock, createElementBlock, normalizeStyle, createElementVNode, normalizeClass, renderSlot } from "vue";
import { useElementBounding, useWindowSize } from "@vueuse/core";
import "../style/affix.css";
import { affixProps, affixEmits } from "./main.props.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuAffix"
  },
  __name: "main",
  props: affixProps,
  emits: affixEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const affixRef = ref();
    const containerEl = ref();
    const transform = ref(0);
    const { top: refT, bottom: refB, width: refW, height: refH } = useElementBounding(affixRef);
    const targetRect = useElementBounding(containerEl);
    const { height: windowHeight } = useWindowSize();
    const isFixed = computed(() => {
      if (!containerEl.value) {
        return props.position === "top" ? refT.value < props.offset : refB.value + props.offset >= windowHeight.value;
      } else {
        if (props.position === "top") {
          const difference = targetRect.bottom.value - props.offset - refH.value;
          transform.value = difference < 0 ? difference : 0;
          return refT.value < props.offset && targetRect.bottom.value > 0;
        } else {
          const difference = windowHeight.value - targetRect.top.value - props.offset - refH.value;
          transform.value = difference < 0 ? -difference : 0;
          return windowHeight.value - props.offset < refB.value && windowHeight.value > targetRect.top.value;
        }
      }
    });
    const affixStyle = computed(() => {
      if (!isFixed.value)
        return void 0;
      return {
        width: refW.value + "px",
        height: refH.value + "px"
      };
    });
    const affixContainerStyle = computed(() => {
      if (!isFixed.value)
        return void 0;
      return {
        [props.position]: props.offset + "px",
        zIndex: props.zIndex,
        transform: `translateY(${transform.value}px)`
      };
    });
    watch(isFixed, (val) => {
      emit("change", val);
    });
    onMounted(() => {
      if (props.target) {
        containerEl.value = document.querySelector(props.target);
      } else {
        containerEl.value = document.documentElement;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "cu-affix",
        ref_key: "affixRef",
        ref: affixRef,
        style: normalizeStyle(affixStyle.value)
      }, [
        createElementVNode("div", {
          class: normalizeClass(["cu-affix__container", { "is-fixed": isFixed.value }]),
          ref: "containerRef",
          style: normalizeStyle(affixContainerStyle.value)
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 6)
      ], 4);
    };
  }
});
export {
  _sfc_main as default
};
