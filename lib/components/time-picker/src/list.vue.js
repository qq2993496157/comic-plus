"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const index = require("../../scrollbar/index.js");
require("../../../utils/config.js");
const tools = require("../../../utils/tools.js");
const list_props = require("./list.props.js");
const type = require("./type.js");
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
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "list",
  props: list_props.listProps,
  emits: list_props.listEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const { show } = vue.inject(type.TIMEPICKER_PROVIDE);
    const timeValue = vue.ref(props.time);
    const hourRef = vue.ref(null);
    const minuteRef = vue.ref(null);
    const secondRef = vue.ref(null);
    const refEnum = vue.reactive({
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
    const scrollTop = vue.ref(0);
    const actives = vue.computed(() => {
      var _a;
      return ((_a = timeValue.value) == null ? void 0 : _a.split(":")) ?? [];
    });
    const onScroll = (e, span) => {
      setScroll(e, span);
      scrollTop.value = e.target.scrollTop;
    };
    const setScroll = tools.debounce((e, span) => {
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
      arr[span] = tools.repairZero(idx);
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
    vue.watch(
      () => show.value,
      (val) => {
        if (val) {
          timeValue.value = props.time ? props.time : "00:00:00";
          vue.nextTick(() => {
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
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.createVNode(vue.unref(index.CuScrollbar), {
          onScroll: _cache[0] || (_cache[0] = ($event) => onScroll($event, 0)),
          ref_key: "hourRef",
          ref: hourRef
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("div", _hoisted_2, [
              (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(24, (item, idx) => {
                return vue.createElementVNode("span", {
                  class: vue.normalizeClass({ active: Number(actives.value[0]) === idx }),
                  onClick: ($event) => itemHandClick(idx, 0)
                }, vue.toDisplayString(vue.unref(tools.repairZero)(item - 1)), 11, _hoisted_3);
              }), 64))
            ])
          ]),
          _: 1
        }, 512),
        vue.createVNode(vue.unref(index.CuScrollbar), {
          onScroll: _cache[1] || (_cache[1] = ($event) => onScroll($event, 1)),
          ref_key: "minuteRef",
          ref: minuteRef,
          style: { "height": "210px" }
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("div", _hoisted_4, [
              (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(60, (item, idx) => {
                return vue.createElementVNode("span", {
                  class: vue.normalizeClass({ active: Number(actives.value[1]) === idx }),
                  onClick: ($event) => itemHandClick(idx, 1)
                }, vue.toDisplayString(vue.unref(tools.repairZero)(item - 1)), 11, _hoisted_5);
              }), 64))
            ])
          ]),
          _: 1
        }, 512),
        vue.createVNode(vue.unref(index.CuScrollbar), {
          onScroll: _cache[2] || (_cache[2] = ($event) => onScroll($event, 2)),
          ref_key: "secondRef",
          ref: secondRef,
          style: { "height": "210px" }
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("div", _hoisted_6, [
              (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(60, (item, idx) => {
                return vue.createElementVNode("span", {
                  class: vue.normalizeClass({ active: Number(actives.value[2]) === idx }),
                  onClick: ($event) => itemHandClick(idx, 2)
                }, vue.toDisplayString(vue.unref(tools.repairZero)(item - 1)), 11, _hoisted_7);
              }), 64))
            ])
          ]),
          _: 1
        }, 512)
      ]);
    };
  }
});
exports.default = _sfc_main;
