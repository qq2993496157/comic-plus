"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const type = require("./type.js");
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
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuRateItem"
  },
  __name: "item",
  props: {
    current: Number
  },
  setup(__props) {
    const props = __props;
    const { props: injectProps, activeIdx, activeColor } = vue.inject(type.RATE_PROVIDE);
    const rateIcons = vue.ref(getIcons());
    const active = vue.computed(() => {
      return activeIdx.value >= props.current;
    });
    const getDecimal = vue.computed(() => {
      return (injectProps.modelValue - Math.floor(injectProps.modelValue)) * 100 + "%";
    });
    const hasMask = vue.computed(() => {
      return injectProps.allowHalf || injectProps.disabled && Math.ceil(injectProps.modelValue) === props.current;
    });
    const showMask = vue.computed(() => {
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
      return vue.openBlock(), vue.createElementBlock("span", {
        class: "cu-rate-item",
        style: vue.normalizeStyle({ color: vue.unref(injectProps).unColor })
      }, [
        vue.unref(injectProps).variableIcon ? (vue.openBlock(), vue.createElementBlock("i", {
          key: 0,
          class: vue.normalizeClass([vue.unref(injectProps).variableIcon(vue.unref(activeIdx)), "icon"]),
          style: vue.normalizeStyle({ color: active.value ? vue.unref(activeColor) : void 0 })
        }, null, 6)) : rateIcons.value.length > 0 ? (vue.openBlock(), vue.createElementBlock("i", {
          key: 1,
          class: vue.normalizeClass([rateIcons.value[active.value ? 1 : 0], "icon"]),
          style: vue.normalizeStyle({ color: active.value ? vue.unref(activeColor) : void 0 })
        }, null, 6)) : (vue.openBlock(), vue.createElementBlock("svg", _hoisted_1, [
          vue.createElementVNode("path", {
            d: "M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z",
            fill: active.value ? vue.unref(activeColor) : vue.unref(injectProps).disabled ? "#f0f2f5" : "none",
            stroke: active.value ? vue.unref(activeColor) : vue.unref(injectProps).disabled ? "#f0f2f5" : vue.unref(injectProps).unColor,
            "stroke-width": active.value ? 0 : 2,
            "stroke-linejoin": "round"
          }, null, 8, _hoisted_2)
        ])),
        hasMask.value ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("span", {
          key: 3,
          class: "mask-rate",
          style: vue.normalizeStyle({ width: vue.unref(injectProps).disabled ? getDecimal.value : void 0 })
        }, [
          vue.unref(injectProps).variableIcon ? (vue.openBlock(), vue.createElementBlock("i", {
            key: 0,
            class: vue.normalizeClass([vue.unref(injectProps).variableIcon(vue.unref(activeIdx)), "icon"]),
            style: vue.normalizeStyle({ color: vue.unref(activeColor) })
          }, null, 6)) : rateIcons.value.length > 0 ? (vue.openBlock(), vue.createElementBlock("i", {
            key: 1,
            class: vue.normalizeClass([rateIcons.value[1], "icon"]),
            style: vue.normalizeStyle({ color: vue.unref(activeColor) })
          }, null, 6)) : (vue.openBlock(), vue.createElementBlock("svg", _hoisted_3, [
            vue.createElementVNode("path", {
              d: "M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z",
              fill: vue.unref(activeColor),
              stroke: vue.unref(injectProps).disabled ? vue.unref(activeColor) : vue.unref(injectProps).unColor,
              "stroke-width": "2",
              "stroke-linejoin": "round"
            }, null, 8, _hoisted_4)
          ]))
        ], 4)), [
          [vue.vShow, showMask.value]
        ]) : vue.createCommentVNode("", true)
      ], 4);
    };
  }
});
exports.default = _sfc_main;
