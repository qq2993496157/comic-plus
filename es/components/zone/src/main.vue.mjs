import { defineComponent, ref, watch, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, renderSlot, createStaticVNode } from "vue";
import "../style/zone.css";
import { useEventListener } from "@vueuse/core";
import { isNumber } from "../../../utils/typescript.mjs";
import "../../../utils/config.mjs";
import { zoneProps, zoneEmits } from "./main.props.mjs";
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<div class="cu-zone__defaultline"><span class="default-span"></span><span class="default-span"></span><span class="default-span"></span><span class="default-span"></span></div>', 1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuZone"
  },
  __name: "main",
  props: zoneProps,
  emits: zoneEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const lineRef = ref(null);
    const zoneRef = ref(null);
    const splitValue = ref(props.modelValue);
    let clearMove = null, clearUp = null, clearSelect = null;
    watch(
      () => props.modelValue,
      (val) => {
        splitValue.value = val;
      }
    );
    const left = computed(() => {
      return isNumber(splitValue.value) ? splitValue.value * 100 + "%" : splitValue.value;
    });
    const right = computed(() => {
      return isNumber(splitValue.value) ? (1 - splitValue.value) * 100 + "%" : `calc(100% - ${splitValue.value})`;
    });
    const start = computed(() => props.mode === "horizontal" ? "left" : "top");
    const end = computed(() => props.mode === "horizontal" ? "right" : "bottom");
    function pxToPercent(val) {
      var _a;
      return val / ((_a = zoneRef.value) == null ? void 0 : _a.getBoundingClientRect()[props.mode === "horizontal" ? "width" : "height"]);
    }
    function percentToPx(val) {
      var _a;
      return val * ((_a = zoneRef.value) == null ? void 0 : _a.getBoundingClientRect()[props.mode === "horizontal" ? "width" : "height"]);
    }
    const getMax = computed(() => {
      if (isNumber(splitValue.value)) {
        return isNumber(props.max) ? 1 - props.max : 1 - pxToPercent(Number(props.max.replace("px", "")));
      } else {
        return isNumber(props.max) ? percentToPx(props.max) : Number(props.max.replace("px", ""));
      }
    });
    const getMin = computed(() => {
      if (isNumber(splitValue.value)) {
        return isNumber(props.min) ? props.min : pxToPercent(Number(props.min.replace("px", "")));
      } else {
        return isNumber(props.min) ? percentToPx(props.min) : Number(props.min.replace("px", ""));
      }
    });
    useEventListener(lineRef, "mousedown", onmousedown);
    function onmousedown() {
      emit("drag-start");
      clearMove = useEventListener(document, "mousemove", onmousemove);
      clearUp = useEventListener(document, "mouseup", onmouseup);
      clearSelect = useEventListener(document, "selectstart", (event) => {
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
        if (isNumber(splitValue.value)) {
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
        if (isNumber(splitValue.value)) {
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
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["cu-zone", _ctx.mode ? "is-" + _ctx.mode : void 0]),
        ref_key: "zoneRef",
        ref: zoneRef,
        style: normalizeStyle({ "--cu-zone-line-weight": _ctx.lineWeight + "px" })
      }, [
        createElementVNode("div", {
          class: "cu-zone__container cu-zone--start",
          style: normalizeStyle({ [end.value]: right.value })
        }, [
          renderSlot(_ctx.$slots, "start")
        ], 4),
        createElementVNode("div", {
          class: "cu-zone__container cu-zone--end",
          style: normalizeStyle({ [start.value]: left.value })
        }, [
          renderSlot(_ctx.$slots, "end")
        ], 4),
        createElementVNode("div", {
          class: "cu-zone__line",
          style: normalizeStyle({ [start.value]: left.value }),
          ref_key: "lineRef",
          ref: lineRef
        }, [
          renderSlot(_ctx.$slots, "line", {}, () => [
            _hoisted_1
          ])
        ], 4)
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
