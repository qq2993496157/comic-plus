"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/zone.css");
const core = require("@vueuse/core");
const typescript = require("../../../utils/typescript.js");
require("../../../utils/config.js");
const main_props = require("./main.props.js");
const _hoisted_1 = /* @__PURE__ */ vue.createStaticVNode('<div class="cu-zone__defaultline"><span class="default-span"></span><span class="default-span"></span><span class="default-span"></span><span class="default-span"></span></div>', 1);
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuZone"
  },
  __name: "main",
  props: main_props.zoneProps,
  emits: main_props.zoneEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const lineRef = vue.ref(null);
    const zoneRef = vue.ref(null);
    const splitValue = vue.ref(props.modelValue);
    let clearMove = null, clearUp = null, clearSelect = null;
    vue.watch(
      () => props.modelValue,
      (val) => {
        splitValue.value = val;
      }
    );
    const left = vue.computed(() => {
      return typescript.isNumber(splitValue.value) ? splitValue.value * 100 + "%" : splitValue.value;
    });
    const right = vue.computed(() => {
      return typescript.isNumber(splitValue.value) ? (1 - splitValue.value) * 100 + "%" : `calc(100% - ${splitValue.value})`;
    });
    const start = vue.computed(() => props.mode === "horizontal" ? "left" : "top");
    const end = vue.computed(() => props.mode === "horizontal" ? "right" : "bottom");
    function pxToPercent(val) {
      var _a;
      return val / ((_a = zoneRef.value) == null ? void 0 : _a.getBoundingClientRect()[props.mode === "horizontal" ? "width" : "height"]);
    }
    function percentToPx(val) {
      var _a;
      return val * ((_a = zoneRef.value) == null ? void 0 : _a.getBoundingClientRect()[props.mode === "horizontal" ? "width" : "height"]);
    }
    const getMax = vue.computed(() => {
      if (typescript.isNumber(splitValue.value)) {
        return typescript.isNumber(props.max) ? 1 - props.max : 1 - pxToPercent(Number(props.max.replace("px", "")));
      } else {
        return typescript.isNumber(props.max) ? percentToPx(props.max) : Number(props.max.replace("px", ""));
      }
    });
    const getMin = vue.computed(() => {
      if (typescript.isNumber(splitValue.value)) {
        return typescript.isNumber(props.min) ? props.min : pxToPercent(Number(props.min.replace("px", "")));
      } else {
        return typescript.isNumber(props.min) ? percentToPx(props.min) : Number(props.min.replace("px", ""));
      }
    });
    core.useEventListener(lineRef, "mousedown", onmousedown);
    function onmousedown() {
      emit("drag-start");
      clearMove = core.useEventListener(document, "mousemove", onmousemove);
      clearUp = core.useEventListener(document, "mouseup", onmouseup);
      clearSelect = core.useEventListener(document, "selectstart", (event) => {
        event.preventDefault();
      });
    }
    function onmouseup() {
      clearMove == null ? void 0 : clearMove();
      clearUp == null ? void 0 : clearUp();
      clearSelect == null ? void 0 : clearSelect();
      emit("drag-end");
    }
    function onmousemove(e) {
      e.preventDefault();
      let val;
      let zoneRect = zoneRef.value.getBoundingClientRect();
      let offset = 0;
      if (props.mode === "horizontal") {
        offset = e.clientX - zoneRect.left;
        if (typescript.isNumber(splitValue.value)) {
          val = offset / zoneRect.width;
          val = Math.min(val, getMax.value);
          val = Math.max(val, getMin.value);
        } else {
          offset = Math.min(offset, zoneRect.width - getMax.value);
          offset = Math.max(offset, getMin.value);
          val = offset + "px";
        }
      } else {
        let offset2 = e.clientY - zoneRect.top;
        if (typescript.isNumber(splitValue.value)) {
          val = offset2 / zoneRect.height;
          val = Math.min(val, getMax.value);
          val = Math.max(val, getMin.value);
        } else {
          offset2 = Math.min(offset2, zoneRect.height - getMax.value);
          offset2 = Math.max(offset2, getMin.value);
          val = offset2 + "px";
        }
      }
      splitValue.value = val;
      emit("update:modelValue", val);
      emit("drag", e);
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(["cu-zone", _ctx.mode ? "is-" + _ctx.mode : void 0]),
        ref_key: "zoneRef",
        ref: zoneRef,
        style: vue.normalizeStyle({ "--cu-zone-line-weight": _ctx.lineWeight + "px" })
      }, [
        vue.createElementVNode("div", {
          class: "cu-zone__container cu-zone--start",
          style: vue.normalizeStyle({ [end.value]: right.value })
        }, [
          vue.renderSlot(_ctx.$slots, "start")
        ], 4),
        vue.createElementVNode("div", {
          class: "cu-zone__container cu-zone--end",
          style: vue.normalizeStyle({ [start.value]: left.value })
        }, [
          vue.renderSlot(_ctx.$slots, "end")
        ], 4),
        vue.createElementVNode("div", {
          class: "cu-zone__line",
          style: vue.normalizeStyle({ [start.value]: left.value }),
          ref_key: "lineRef",
          ref: lineRef
        }, [
          vue.renderSlot(_ctx.$slots, "line", {}, () => [
            _hoisted_1
          ])
        ], 4)
      ], 6);
    };
  }
});
exports.default = _sfc_main;
