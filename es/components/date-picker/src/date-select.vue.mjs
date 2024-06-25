import { defineComponent, inject, ref, openBlock, createElementBlock, Fragment, createElementVNode, unref, renderList, toDisplayString, createCommentVNode, createVNode, createBlock, withCtx, createTextVNode } from "vue";
import _sfc_main$1 from "./date-table.vue.mjs";
import { CuButton } from "../../button/index.mjs";
import { isFunction } from "../../../utils/typescript.mjs";
import "../../../utils/config.mjs";
import { DATEPICKER_PROVIDE } from "./type.mjs";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuDateSelect"
  },
  __name: "date-select",
  setup(__props) {
    const { props, confirm } = inject(DATEPICKER_PROVIDE);
    const dateTableRef = ref(null);
    const dateTableRef1 = ref(null);
    const dateTableRef2 = ref(null);
    function _confirm() {
      if (props.range) {
        let datas = [dateTableRef1.value.dateNumber, dateTableRef2.value.dateNumber];
        confirm(datas);
      } else {
        confirm(dateTableRef.value.dateNumber);
      }
    }
    function pickShortcut(val) {
      if (isFunction(val)) {
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
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("div", _hoisted_1, [
          unref(props).shortcuts ? (openBlock(), createElementBlock("div", _hoisted_2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(props).shortcuts, (el) => {
              return openBlock(), createElementBlock("span", {
                onClick: ($event) => pickShortcut(el.value)
              }, toDisplayString(el.label), 9, _hoisted_3);
            }), 256))
          ])) : createCommentVNode("", true),
          unref(props).range ? (openBlock(), createElementBlock("div", _hoisted_4, [
            createVNode(_sfc_main$1, {
              date: unref(props).modelValue[0],
              ref_key: "dateTableRef1",
              ref: dateTableRef1
            }, null, 8, ["date"]),
            createVNode(_sfc_main$1, {
              date: unref(props).modelValue[1],
              ref_key: "dateTableRef2",
              ref: dateTableRef2
            }, null, 8, ["date"])
          ])) : (openBlock(), createBlock(_sfc_main$1, {
            key: 2,
            date: unref(props).modelValue,
            ref_key: "dateTableRef",
            ref: dateTableRef
          }, null, 8, ["date"]))
        ]),
        createElementVNode("div", _hoisted_5, [
          createVNode(unref(CuButton), {
            size: "small",
            type: "primary",
            onClick: _confirm
          }, {
            default: withCtx(() => [
              createTextVNode("确认")
            ]),
            _: 1
          })
        ])
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
