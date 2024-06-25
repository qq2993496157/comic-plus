"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const core = require("@vueuse/core");
require("../style/tip.css");
const color = require("../../../utils/color.js");
const config = require("../../../utils/config.js");
const main_props = require("./main.props.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuTip"
  },
  __name: "main",
  props: main_props.tipProps,
  emits: main_props.tipEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const tipRef = vue.ref(null);
    const tipContentRef = vue.ref(null);
    const tipPositionRef = vue.ref(null);
    const thresholdX = vue.ref(0);
    const duration = vue.ref("25s");
    const isRolling = vue.ref(false);
    const cloendEle = vue.ref();
    const { SIZE } = config.useConfig();
    const { width } = core.useElementSize(tipRef);
    vue.watch(width, () => {
      determineScroll();
    });
    const isHoverPause = vue.computed(() => props.rolling && isRolling.value && props.hoverPause);
    const tipStyle = vue.computed(() => {
      if (!props.color)
        return void 0;
      return {
        backgroundColor: props.plain ? color.colorBlend(color.colorToRgba(props.color), 20) : props.color,
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
    vue.onMounted(() => {
      if (props.rolling) {
        determineScroll();
      }
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("span", {
        class: vue.normalizeClass(["cu-tip", [
          { "is-plain": _ctx.plain },
          _ctx.type ? "cu-tip--" + _ctx.type : void 0,
          _ctx.size ?? vue.unref(SIZE),
          { "hover-pause": isHoverPause.value },
          { "rolling-mode": _ctx.rolling },
          { "is-rolling": _ctx.rolling && isRolling.value }
        ]]),
        style: vue.normalizeStyle(tipStyle.value),
        ref_key: "tipRef",
        ref: tipRef
      }, [
        _ctx.icon ? (vue.openBlock(), vue.createElementBlock("i", {
          key: 0,
          class: vue.normalizeClass(["cu-tip__icon", _ctx.icon])
        }, null, 2)) : vue.createCommentVNode("", true),
        vue.createElementVNode("span", {
          class: "cu-tip__content",
          ref_key: "tipContentRef",
          ref: tipContentRef
        }, [
          vue.createElementVNode("span", {
            class: "cu-tip__position",
            style: vue.normalizeStyle({ "--threshold-x": 0 - thresholdX.value + "px", animationDuration: duration.value })
          }, [
            vue.createElementVNode("span", {
              class: "cu-tip-message-box",
              ref_key: "tipPositionRef",
              ref: tipPositionRef
            }, [
              vue.renderSlot(_ctx.$slots, "default")
            ], 512)
          ], 4)
        ], 512),
        _ctx.closable ? (vue.openBlock(), vue.createElementBlock("i", {
          key: 1,
          class: "cu-tip__close cu-icon-close-one",
          onClick: _cache[0] || (_cache[0] = ($event) => emit("close"))
        })) : vue.createCommentVNode("", true)
      ], 6);
    };
  }
});
exports.default = _sfc_main;
