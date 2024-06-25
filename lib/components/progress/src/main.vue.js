"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/progress.css");
const typescript = require("../../../utils/typescript.js");
require("../../../utils/config.js");
const main_props = require("./main.props.js");
const _hoisted_1 = {
  key: 0,
  class: "cu-progress__inner"
};
const _hoisted_2 = {
  key: 0,
  class: "cu-progress__describe"
};
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { key: 2 };
const _hoisted_5 = ["width", "height"];
const _hoisted_6 = /* @__PURE__ */ vue.createElementVNode("circle", {
  class: "cu-progress__circle_bg",
  cx: "50%",
  cy: "50%",
  r: "47%",
  style: { "z-index": "1" }
}, null, -1);
const _hoisted_7 = {
  key: 2,
  class: "cu-progress__inner"
};
const _hoisted_8 = { key: 0 };
const _hoisted_9 = { key: 2 };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuProgress"
  },
  __name: "main",
  props: main_props.progressProps,
  setup(__props) {
    const props = __props;
    const circleRef = vue.ref();
    const circleLength = vue.ref(0);
    const style = vue.computed(() => {
      return {
        "--cu-progress-color": computedColor.value ?? `var(--cu-color-${props.type || "primary"})`
      };
    });
    const computedColor = vue.computed(() => {
      if (!props.colors)
        return void 0;
      if (typescript.isString(props.colors))
        return props.colors;
      if (typescript.isFunction(props.colors))
        return props.colors(schedule.value);
      for (const key in props.colors) {
        if (schedule.value <= Number(key)) {
          return props.colors[key];
        }
      }
      return void 0;
    });
    const schedule = vue.computed(() => {
      return props.progress <= 0 ? 0 : props.progress >= 100 ? 100 : props.progress;
    });
    const barsStyle = vue.computed(() => {
      return {
        width: schedule.value + "%",
        height: props.barWidth ? props.barWidth + "px" : void 0,
        animationDuration: Math.floor(schedule.value / 3) + "s"
      };
    });
    vue.onMounted(() => {
      if (props.barType === "circle") {
        circleLength.value = circleRef.value.getTotalLength() + 1;
      }
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(["cu-progress", _ctx.barType ? "is-" + _ctx.barType : void 0]),
        style: vue.normalizeStyle(style.value)
      }, [
        _ctx.barType === "line" || _ctx.barType === "line-trends" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          vue.createElementVNode("div", {
            class: "cu-progress__bar",
            style: vue.normalizeStyle(barsStyle.value)
          }, [
            _ctx.insetFormat && _ctx.showText ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
              _ctx.format ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3, vue.toDisplayString(_ctx.format), 1)) : vue.unref(main_props.STATUS)[_ctx.status] ? (vue.openBlock(), vue.createElementBlock("span", {
                key: 1,
                class: vue.normalizeClass([vue.unref(main_props.STATUS)[_ctx.status], _ctx.status])
              }, null, 2)) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_4, vue.toDisplayString(schedule.value + "%"), 1))
            ])) : vue.createCommentVNode("", true)
          ], 4)
        ])) : _ctx.barType === "circle" ? (vue.openBlock(), vue.createElementBlock("svg", {
          key: 1,
          width: _ctx.size,
          height: _ctx.size,
          style: vue.normalizeStyle({
            "--cu-progress-strokewidth": _ctx.barWidth,
            "--cu-progress-dasharray": circleLength.value,
            "--cu-progress-dashoffset": circleLength.value - schedule.value / 100 * circleLength.value + 1
          })
        }, [
          _hoisted_6,
          vue.createElementVNode("circle", {
            ref_key: "circleRef",
            ref: circleRef,
            class: "cu-progress__circle",
            cx: "50%",
            cy: "50%",
            r: "47%",
            style: { "z-index": "2" }
          }, null, 512)
        ], 12, _hoisted_5)) : _ctx.barType === "trends" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_7, [
          vue.createElementVNode("div", {
            class: "cu-progress__bar",
            style: vue.normalizeStyle({
              width: _ctx.size + "px",
              height: _ctx.size + "px",
              "--cu-progress-dashoffset": (schedule.value === 0 ? -10 : schedule.value === 100 ? 110 : schedule.value) + "%"
            })
          }, null, 4)
        ])) : vue.createCommentVNode("", true),
        !_ctx.insetFormat && _ctx.showText ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 3,
          class: "cu-progress__describe",
          style: vue.normalizeStyle({
            color: _ctx.barType === "trends" && schedule.value > 50 ? "#fff" : void 0
          })
        }, [
          _ctx.format ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_8, vue.toDisplayString(_ctx.format), 1)) : vue.unref(main_props.STATUS)[_ctx.status] ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 1,
            class: vue.normalizeClass([vue.unref(main_props.STATUS)[_ctx.status], _ctx.status])
          }, null, 2)) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_9, vue.toDisplayString(schedule.value + "%"), 1))
        ], 4)) : vue.createCommentVNode("", true)
      ], 6);
    };
  }
});
exports.default = _sfc_main;
