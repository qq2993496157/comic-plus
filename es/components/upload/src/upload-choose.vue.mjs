import { defineComponent, openBlock, createElementBlock, Fragment, createElementVNode, renderSlot, createBlock, unref, withCtx, createTextVNode, createCommentVNode } from "vue";
import { CuButton } from "../../button/index.mjs";
const _hoisted_1 = {
  key: 1,
  class: "cu-upload__trigger"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("i", { class: "cu-icon-plus" }, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
const _hoisted_4 = {
  key: 0,
  class: "cu-upload__chooseItem"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuUploadChoose"
  },
  __name: "upload-choose",
  props: {
    type: {
      type: String,
      required: true
    },
    disabled: Boolean
  },
  emits: ["choose"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("span", {
          class: "cu-upload__chooseItem",
          onClick: _cache[0] || (_cache[0] = ($event) => emit("choose"))
        }, [
          renderSlot(_ctx.$slots, "trigger", {}, () => [
            __props.type === "list" ? (openBlock(), createBlock(unref(CuButton), {
              key: 0,
              disabled: __props.disabled,
              size: "small",
              type: "primary"
            }, {
              default: withCtx(() => [
                createTextVNode("选择文件")
              ]),
              _: 1
            }, 8, ["disabled"])) : (openBlock(), createElementBlock("div", _hoisted_1, _hoisted_3))
          ])
        ]),
        _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_4, [
          renderSlot(_ctx.$slots, "default")
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
