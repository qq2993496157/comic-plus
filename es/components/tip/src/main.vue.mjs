import { defineComponent, ref, watch, computed, onMounted, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, createCommentVNode, createElementVNode, renderSlot } from "vue";
import { useElementSize } from "@vueuse/core";
import "../style/tip.css";
import { colorBlend, colorToRgba } from "../../../utils/color.mjs";
import { useConfig } from "../../../utils/config.mjs";
import { tipProps, tipEmits } from "./main.props.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuTip"
  },
  __name: "main",
  props: tipProps,
  emits: tipEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const tipRef = ref(null);
    const tipContentRef = ref(null);
    const tipPositionRef = ref(null);
    const thresholdX = ref(0);
    const duration = ref("25s");
    const isRolling = ref(false);
    const cloendEle = ref();
    const { SIZE } = useConfig();
    const { width } = useElementSize(tipRef);
    watch(width, () => {
      determineScroll();
    });
    const isHoverPause = computed(() => props.rolling && isRolling.value && props.hoverPause);
    const tipStyle = computed(() => {
      if (!props.color)
        return void 0;
      return {
        backgroundColor: props.plain ? colorBlend(colorToRgba(props.color), 20) : props.color,
        color: props.plain ? props.color : "#fff"
      };
    });
    function determineScroll() {
      if (!tipContentRef.value)
        return;
      let rect = tipContentRef.value.getBoundingClientRect();
      let pRect = tipPositionRef.value.getBoundingClientRect();
      if (pRect.width > rect.width) {
        if (!cloendEle.value) {
          cloendEle.value = tipPositionRef.value.cloneNode(true);
          tipPositionRef.value.parentNode.appendChild(cloendEle.value);
        }
        cloendEle.value.style.setProperty("margin-left", rect.width / 4 + "px");
        duration.value = Math.floor(pRect.width / 25) + "s";
        thresholdX.value = pRect.width + rect.width / 4;
        isRolling.value = true;
      } else {
        cloendEle.value && tipPositionRef.value.parentNode.removeChild(cloendEle.value);
        cloendEle.value = null;
        isRolling.value = false;
      }
    }
    onMounted(() => {
      if (props.rolling) {
        determineScroll();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(["cu-tip", [
          { "is-plain": _ctx.plain },
          _ctx.type ? "cu-tip--" + _ctx.type : void 0,
          _ctx.size ?? unref(SIZE),
          { "hover-pause": isHoverPause.value },
          { "rolling-mode": _ctx.rolling },
          { "is-rolling": _ctx.rolling && isRolling.value }
        ]]),
        style: normalizeStyle(tipStyle.value),
        ref_key: "tipRef",
        ref: tipRef
      }, [
        _ctx.icon ? (openBlock(), createElementBlock("i", {
          key: 0,
          class: normalizeClass(["cu-tip__icon", _ctx.icon])
        }, null, 2)) : createCommentVNode("", true),
        createElementVNode("span", {
          class: "cu-tip__content",
          ref_key: "tipContentRef",
          ref: tipContentRef
        }, [
          createElementVNode("span", {
            class: "cu-tip__position",
            style: normalizeStyle({ "--threshold-x": 0 - thresholdX.value + "px", animationDuration: duration.value })
          }, [
            createElementVNode("span", {
              class: "cu-tip-message-box",
              ref_key: "tipPositionRef",
              ref: tipPositionRef
            }, [
              renderSlot(_ctx.$slots, "default")
            ], 512)
          ], 4)
        ], 512),
        _ctx.closable ? (openBlock(), createElementBlock("i", {
          key: 1,
          class: "cu-tip__close cu-icon-close-one",
          onClick: _cache[0] || (_cache[0] = ($event) => emit("close"))
        })) : createCommentVNode("", true)
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
