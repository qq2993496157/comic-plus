import { defineComponent, inject, ref, reactive, computed, watch, nextTick, openBlock, createElementBlock, createVNode, unref, withCtx, createElementVNode, Fragment, renderList, normalizeClass, toDisplayString } from "vue";
import { CuScrollbar } from "../../scrollbar/index.mjs";
import "../../../utils/config.mjs";
import { debounce, repairZero } from "../../../utils/tools.mjs";
import { listProps, listEmits } from "./list.props.mjs";
import { TIMEPICKER_PROVIDE } from "./type.mjs";
const _hoisted_1 = {
  class: "cu-time-picker__listbox",
  style: { "height": "210px" }
};
const _hoisted_2 = { class: "cu-time-picker__list" };
const _hoisted_3 = ["onClick"];
const _hoisted_4 = { class: "cu-time-picker__list" };
const _hoisted_5 = ["onClick"];
const _hoisted_6 = { class: "cu-time-picker__list" };
const _hoisted_7 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "list",
  props: listProps,
  emits: listEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const { show } = inject(TIMEPICKER_PROVIDE);
    const timeValue = ref(props.time);
    const hourRef = ref(null);
    const minuteRef = ref(null);
    const secondRef = ref(null);
    const refEnum = reactive({
      0: {
        refs: hourRef,
        stopScrollTop: 0
      },
      1: {
        refs: minuteRef,
        stopScrollTop: 0
      },
      2: {
        refs: secondRef,
        stopScrollTop: 0
      }
    });
    const scrollTop = ref(0);
    const actives = computed(() => {
      var _a;
      return ((_a = timeValue.value) == null ? void 0 : _a.split(":")) ?? [];
    });
    const onScroll = (e, span) => {
      setScroll(e, span);
      scrollTop.value = e.target.scrollTop;
    };
    const setScroll = debounce((e, span) => {
      let top = e.target.scrollTop;
      refEnum[span].stopScrollTop = top;
      if (scrollTop.value === refEnum[span].stopScrollTop) {
        let scrollTop2 = Math.floor(top / 30) * 30;
        let idx = Math.floor(scrollTop2 / 30);
        itemHandClick(idx, span);
      }
    }, 20);
    function itemHandClick(idx, span) {
      var _a;
      let arr = timeValue.value.split(":");
      arr[span] = repairZero(idx);
      timeValue.value = arr.join(":");
      (_a = refEnum[span]) == null ? void 0 : _a.refs.setBarTop(idx * 30);
    }
    function getTimeValueArray() {
      let arr = timeValue.value.split(":");
      while (arr.length < 3) {
        arr.push("00");
      }
      return arr;
    }
    watch(
      () => show.value,
      (val) => {
        if (val) {
          timeValue.value = props.time ? props.time : "00:00:00";
          nextTick(() => {
            const times = getTimeValueArray();
            times.forEach((time, idx) => {
              var _a;
              let top = Number(time) * 30;
              (_a = refEnum[idx]) == null ? void 0 : _a.refs.setBarTop(top, "auto");
            });
          });
        }
      }
    );
    __expose({ timeValue });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(CuScrollbar), {
          onScroll: _cache[0] || (_cache[0] = ($event) => onScroll($event, 0)),
          ref_key: "hourRef",
          ref: hourRef
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_2, [
              (openBlock(), createElementBlock(Fragment, null, renderList(24, (item, idx) => {
                return createElementVNode("span", {
                  class: normalizeClass({ active: Number(actives.value[0]) === idx }),
                  onClick: ($event) => itemHandClick(idx, 0)
                }, toDisplayString(unref(repairZero)(item - 1)), 11, _hoisted_3);
              }), 64))
            ])
          ]),
          _: 1
        }, 512),
        createVNode(unref(CuScrollbar), {
          onScroll: _cache[1] || (_cache[1] = ($event) => onScroll($event, 1)),
          ref_key: "minuteRef",
          ref: minuteRef,
          style: { "height": "210px" }
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_4, [
              (openBlock(), createElementBlock(Fragment, null, renderList(60, (item, idx) => {
                return createElementVNode("span", {
                  class: normalizeClass({ active: Number(actives.value[1]) === idx }),
                  onClick: ($event) => itemHandClick(idx, 1)
                }, toDisplayString(unref(repairZero)(item - 1)), 11, _hoisted_5);
              }), 64))
            ])
          ]),
          _: 1
        }, 512),
        createVNode(unref(CuScrollbar), {
          onScroll: _cache[2] || (_cache[2] = ($event) => onScroll($event, 2)),
          ref_key: "secondRef",
          ref: secondRef,
          style: { "height": "210px" }
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_6, [
              (openBlock(), createElementBlock(Fragment, null, renderList(60, (item, idx) => {
                return createElementVNode("span", {
                  class: normalizeClass({ active: Number(actives.value[2]) === idx }),
                  onClick: ($event) => itemHandClick(idx, 2)
                }, toDisplayString(unref(repairZero)(item - 1)), 11, _hoisted_7);
              }), 64))
            ])
          ]),
          _: 1
        }, 512)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
