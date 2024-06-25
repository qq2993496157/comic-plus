"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const list_vue_vue_type_script_setup_true_lang = require("./list.vue.js");
const index = require("../../button/index.js");
const type = require("./type.js");
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "rangetime-box" };
const _hoisted_3 = /* @__PURE__ */ vue.createElementVNode("div", { class: "time-title" }, "开始时间", -1);
const _hoisted_4 = { class: "rangetime-box" };
const _hoisted_5 = /* @__PURE__ */ vue.createElementVNode("div", { class: "time-title" }, "结束时间", -1);
const _hoisted_6 = { class: "cu-time-picker__footer" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "time-select",
  setup(__props) {
    const { props, confirm } = vue.inject(type.TIMEPICKER_PROVIDE);
    const listRef = vue.ref(null);
    const listRef1 = vue.ref(null);
    const listRef2 = vue.ref(null);
    function _confirm() {
      if (props.range) {
        let arr = [listRef1.value.timeValue, listRef2.value.timeValue];
        confirm(arr);
      } else {
        confirm(listRef.value.timeValue);
      }
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
        vue.unref(props).range ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          vue.createElementVNode("div", _hoisted_2, [
            _hoisted_3,
            vue.createVNode(list_vue_vue_type_script_setup_true_lang.default, {
              time: vue.unref(props).modelValue[0],
              ref_key: "listRef1",
              ref: listRef1
            }, null, 8, ["time"])
          ]),
          vue.createElementVNode("div", _hoisted_4, [
            _hoisted_5,
            vue.createVNode(list_vue_vue_type_script_setup_true_lang.default, {
              time: vue.unref(props).modelValue[1],
              ref_key: "listRef2",
              ref: listRef2
            }, null, 8, ["time"])
          ])
        ])) : (vue.openBlock(), vue.createBlock(list_vue_vue_type_script_setup_true_lang.default, {
          key: 1,
          time: vue.unref(props).modelValue,
          ref_key: "listRef",
          ref: listRef
        }, null, 8, ["time"])),
        vue.createElementVNode("div", _hoisted_6, [
          vue.createVNode(vue.unref(index.CuButton), {
            size: "small",
            type: "primary",
            onClick: _confirm
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("确认")
            ]),
            _: 1
          })
        ])
      ], 64);
    };
  }
});
exports.default = _sfc_main;
