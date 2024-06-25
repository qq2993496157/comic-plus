import { defineComponent, ref, computed, onMounted, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, toDisplayString, unref, createCommentVNode } from "vue";
import "../style/progress.css";
import { isString, isFunction } from "../../../utils/typescript.mjs";
import "../../../utils/config.mjs";
import { progressProps, STATUS } from "./main.props.mjs";
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
const _hoisted_6 = /* @__PURE__ */ createElementVNode("circle", {
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuProgress"
  },
  __name: "main",
  props: progressProps,
  setup(__props) {
    const props = __props;
    const circleRef = ref();
    const circleLength = ref(0);
    const style = computed(() => {
      return {
        "--cu-progress-color": computedColor.value ?? `var(--cu-color-${props.type || "primary"})`
      };
    });
    const computedColor = computed(() => {
      if (!props.colors)
        return void 0;
      if (isString(props.colors))
        return props.colors;
      if (isFunction(props.colors))
        return props.colors(schedule.value);
      for (const key in props.colors) {
        if (schedule.value <= Number(key)) {
          return props.colors[key];
        }
      }
      return void 0;
    });
    const schedule = computed(() => {
      return props.progress <= 0 ? 0 : props.progress >= 100 ? 100 : props.progress;
    });
    const barsStyle = computed(() => {
      return {
        width: schedule.value + "%",
        height: props.barWidth ? props.barWidth + "px" : void 0,
        animationDuration: Math.floor(schedule.value / 3) + "s"
      };
    });
    onMounted(() => {
      if (props.barType === "circle") {
        circleLength.value = circleRef.value.getTotalLength() + 1;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["cu-progress", _ctx.barType ? "is-" + _ctx.barType : void 0]),
        style: normalizeStyle(style.value)
      }, [
        _ctx.barType === "line" || _ctx.barType === "line-trends" ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createElementVNode("div", {
            class: "cu-progress__bar",
            style: normalizeStyle(barsStyle.value)
          }, [
            _ctx.insetFormat && _ctx.showText ? (openBlock(), createElementBlock("div", _hoisted_2, [
              _ctx.format ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(_ctx.format), 1)) : unref(STATUS)[_ctx.status] ? (openBlock(), createElementBlock("span", {
                key: 1,
                class: normalizeClass([unref(STATUS)[_ctx.status], _ctx.status])
              }, null, 2)) : (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(schedule.value + "%"), 1))
            ])) : createCommentVNode("", true)
          ], 4)
        ])) : _ctx.barType === "circle" ? (openBlock(), createElementBlock("svg", {
          key: 1,
          width: _ctx.size,
          height: _ctx.size,
          style: normalizeStyle({
            "--cu-progress-strokewidth": _ctx.barWidth,
            "--cu-progress-dasharray": circleLength.value,
            "--cu-progress-dashoffset": circleLength.value - schedule.value / 100 * circleLength.value + 1
          })
        }, [
          _hoisted_6,
          createElementVNode("circle", {
            ref_key: "circleRef",
            ref: circleRef,
            class: "cu-progress__circle",
            cx: "50%",
            cy: "50%",
            r: "47%",
            style: { "z-index": "2" }
          }, null, 512)
        ], 12, _hoisted_5)) : _ctx.barType === "trends" ? (openBlock(), createElementBlock("div", _hoisted_7, [
          createElementVNode("div", {
            class: "cu-progress__bar",
            style: normalizeStyle({
              width: _ctx.size + "px",
              height: _ctx.size + "px",
              "--cu-progress-dashoffset": (schedule.value === 0 ? -10 : schedule.value === 100 ? 110 : schedule.value) + "%"
            })
          }, null, 4)
        ])) : createCommentVNode("", true),
        !_ctx.insetFormat && _ctx.showText ? (openBlock(), createElementBlock("div", {
          key: 3,
          class: "cu-progress__describe",
          style: normalizeStyle({
            color: _ctx.barType === "trends" && schedule.value > 50 ? "#fff" : void 0
          })
        }, [
          _ctx.format ? (openBlock(), createElementBlock("span", _hoisted_8, toDisplayString(_ctx.format), 1)) : unref(STATUS)[_ctx.status] ? (openBlock(), createElementBlock("span", {
            key: 1,
            class: normalizeClass([unref(STATUS)[_ctx.status], _ctx.status])
          }, null, 2)) : (openBlock(), createElementBlock("span", _hoisted_9, toDisplayString(schedule.value + "%"), 1))
        ], 4)) : createCommentVNode("", true)
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
