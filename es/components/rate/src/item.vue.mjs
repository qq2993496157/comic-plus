import { defineComponent, inject, ref, computed, openBlock, createElementBlock, normalizeStyle, unref, normalizeClass, createElementVNode, withDirectives, vShow, createCommentVNode } from "vue";
import { RATE_PROVIDE } from "./type.mjs";
const _hoisted_1 = {
  key: 2,
  width: "1em",
  height: "1em",
  viewBox: "0 0 48 48"
};
const _hoisted_2 = ["fill", "stroke", "stroke-width"];
const _hoisted_3 = {
  key: 2,
  width: "1em",
  height: "1em",
  viewBox: "0 0 48 48"
};
const _hoisted_4 = ["fill", "stroke"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuRateItem"
  },
  __name: "item",
  props: {
    current: Number
  },
  setup(__props) {
    const props = __props;
    const { props: injectProps, activeIdx, activeColor } = inject(RATE_PROVIDE);
    const rateIcons = ref(getIcons());
    const active = computed(() => {
      return activeIdx.value >= props.current;
    });
    const getDecimal = computed(() => {
      return (injectProps.modelValue - Math.floor(injectProps.modelValue)) * 100 + "%";
    });
    const hasMask = computed(() => {
      return injectProps.allowHalf || injectProps.disabled && Math.ceil(injectProps.modelValue) === props.current;
    });
    const showMask = computed(() => {
      return activeIdx.value === props.current - 0.5 || injectProps.disabled;
    });
    function getIcons() {
      if (!injectProps.icons)
        return [];
      let result = [].concat(injectProps.icons);
      if (result.length === 1) {
        result.push(result[0]);
      }
      return result;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: "cu-rate-item",
        style: normalizeStyle({ color: unref(injectProps).unColor })
      }, [
        unref(injectProps).variableIcon ? (openBlock(), createElementBlock("i", {
          key: 0,
          class: normalizeClass([unref(injectProps).variableIcon(unref(activeIdx)), "icon"]),
          style: normalizeStyle({ color: active.value ? unref(activeColor) : void 0 })
        }, null, 6)) : rateIcons.value.length > 0 ? (openBlock(), createElementBlock("i", {
          key: 1,
          class: normalizeClass([rateIcons.value[active.value ? 1 : 0], "icon"]),
          style: normalizeStyle({ color: active.value ? unref(activeColor) : void 0 })
        }, null, 6)) : (openBlock(), createElementBlock("svg", _hoisted_1, [
          createElementVNode("path", {
            d: "M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z",
            fill: active.value ? unref(activeColor) : unref(injectProps).disabled ? "#f0f2f5" : "none",
            stroke: active.value ? unref(activeColor) : unref(injectProps).disabled ? "#f0f2f5" : unref(injectProps).unColor,
            "stroke-width": active.value ? 0 : 2,
            "stroke-linejoin": "round"
          }, null, 8, _hoisted_2)
        ])),
        hasMask.value ? withDirectives((openBlock(), createElementBlock("span", {
          key: 3,
          class: "mask-rate",
          style: normalizeStyle({ width: unref(injectProps).disabled ? getDecimal.value : void 0 })
        }, [
          unref(injectProps).variableIcon ? (openBlock(), createElementBlock("i", {
            key: 0,
            class: normalizeClass([unref(injectProps).variableIcon(unref(activeIdx)), "icon"]),
            style: normalizeStyle({ color: unref(activeColor) })
          }, null, 6)) : rateIcons.value.length > 0 ? (openBlock(), createElementBlock("i", {
            key: 1,
            class: normalizeClass([rateIcons.value[1], "icon"]),
            style: normalizeStyle({ color: unref(activeColor) })
          }, null, 6)) : (openBlock(), createElementBlock("svg", _hoisted_3, [
            createElementVNode("path", {
              d: "M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z",
              fill: unref(activeColor),
              stroke: unref(injectProps).disabled ? unref(activeColor) : unref(injectProps).unColor,
              "stroke-width": "2",
              "stroke-linejoin": "round"
            }, null, 8, _hoisted_4)
          ]))
        ], 4)), [
          [vShow, showMask.value]
        ]) : createCommentVNode("", true)
      ], 4);
    };
  }
});
export {
  _sfc_main as default
};
