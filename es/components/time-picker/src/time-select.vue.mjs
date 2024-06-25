import { defineComponent, inject, ref, openBlock, createElementBlock, Fragment, unref, createElementVNode, createVNode, createBlock, withCtx, createTextVNode } from "vue";
import _sfc_main$1 from "./list.vue.mjs";
import { CuButton } from "../../button/index.mjs";
import { TIMEPICKER_PROVIDE } from "./type.mjs";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "rangetime-box" };
const _hoisted_3 = /* @__PURE__ */ createElementVNode("div", { class: "time-title" }, "开始时间", -1);
const _hoisted_4 = { class: "rangetime-box" };
const _hoisted_5 = /* @__PURE__ */ createElementVNode("div", { class: "time-title" }, "结束时间", -1);
const _hoisted_6 = { class: "cu-time-picker__footer" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "time-select",
  setup(__props) {
    const { props, confirm } = inject(TIMEPICKER_PROVIDE);
    const listRef = ref(null);
    const listRef1 = ref(null);
    const listRef2 = ref(null);
    function _confirm() {
      if (props.range) {
        let arr = [listRef1.value.timeValue, listRef2.value.timeValue];
        confirm(arr);
      } else {
        confirm(listRef.value.timeValue);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        unref(props).range ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createElementVNode("div", _hoisted_2, [
            _hoisted_3,
            createVNode(_sfc_main$1, {
              time: unref(props).modelValue[0],
              ref_key: "listRef1",
              ref: listRef1
            }, null, 8, ["time"])
          ]),
          createElementVNode("div", _hoisted_4, [
            _hoisted_5,
            createVNode(_sfc_main$1, {
              time: unref(props).modelValue[1],
              ref_key: "listRef2",
              ref: listRef2
            }, null, 8, ["time"])
          ])
        ])) : (openBlock(), createBlock(_sfc_main$1, {
          key: 1,
          time: unref(props).modelValue,
          ref_key: "listRef",
          ref: listRef
        }, null, 8, ["time"])),
        createElementVNode("div", _hoisted_6, [
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
