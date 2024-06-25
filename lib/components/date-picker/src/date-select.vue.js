"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const dateTable_vue_vue_type_script_setup_true_lang = require("./date-table.vue.js");
const index = require("../../button/index.js");
const typescript = require("../../../utils/typescript.js");
require("../../../utils/config.js");
const type = require("./type.js");
const _hoisted_1 = { class: "cu-date-table__box" };
const _hoisted_2 = {
  key: 0,
  class: "shortcuts"
};
const _hoisted_3 = ["onClick"];
const _hoisted_4 = {
  key: 1,
  class: "cu-date-table__box"
};
const _hoisted_5 = { class: "cu-date-picker__footer" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuDateSelect"
  },
  __name: "date-select",
  setup(__props) {
    const { props, confirm } = vue.inject(type.DATEPICKER_PROVIDE);
    const dateTableRef = vue.ref(null);
    const dateTableRef1 = vue.ref(null);
    const dateTableRef2 = vue.ref(null);
    function _confirm() {
      if (props.range) {
        let datas = [dateTableRef1.value.dateNumber, dateTableRef2.value.dateNumber];
        confirm(datas);
      } else {
        confirm(dateTableRef.value.dateNumber);
      }
    }
    function pickShortcut(val) {
      if (typescript.isFunction(val)) {
        val = val();
      }
      if (props.range) {
        let datas = [
          val[0] ? new Date(val[0]).getTime() : (/* @__PURE__ */ new Date()).getTime(),
          val[1] ? new Date(val[1]).getTime() : (/* @__PURE__ */ new Date()).getTime()
        ];
        confirm(datas);
      } else {
        confirm(new Date(val).getTime());
      }
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
        vue.createElementVNode("div", _hoisted_1, [
          vue.unref(props).shortcuts ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(props).shortcuts, (el) => {
              return vue.openBlock(), vue.createElementBlock("span", {
                onClick: ($event) => pickShortcut(el.value)
              }, vue.toDisplayString(el.label), 9, _hoisted_3);
            }), 256))
          ])) : vue.createCommentVNode("", true),
          vue.unref(props).range ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4, [
            vue.createVNode(dateTable_vue_vue_type_script_setup_true_lang.default, {
              date: vue.unref(props).modelValue[0],
              ref_key: "dateTableRef1",
              ref: dateTableRef1
            }, null, 8, ["date"]),
            vue.createVNode(dateTable_vue_vue_type_script_setup_true_lang.default, {
              date: vue.unref(props).modelValue[1],
              ref_key: "dateTableRef2",
              ref: dateTableRef2
            }, null, 8, ["date"])
          ])) : (vue.openBlock(), vue.createBlock(dateTable_vue_vue_type_script_setup_true_lang.default, {
            key: 2,
            date: vue.unref(props).modelValue,
            ref_key: "dateTableRef",
            ref: dateTableRef
          }, null, 8, ["date"]))
        ]),
        vue.createElementVNode("div", _hoisted_5, [
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
