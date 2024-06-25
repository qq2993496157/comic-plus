"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const index = require("../../button/index.js");
const _hoisted_1 = {
  key: 1,
  class: "cu-upload__trigger"
};
const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode("i", { class: "cu-icon-plus" }, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
const _hoisted_4 = {
  key: 0,
  class: "cu-upload__chooseItem"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
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
      return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
        vue.createElementVNode("span", {
          class: "cu-upload__chooseItem",
          onClick: _cache[0] || (_cache[0] = ($event) => emit("choose"))
        }, [
          vue.renderSlot(_ctx.$slots, "trigger", {}, () => [
            __props.type === "list" ? (vue.openBlock(), vue.createBlock(vue.unref(index.CuButton), {
              key: 0,
              disabled: __props.disabled,
              size: "small",
              type: "primary"
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("选择文件")
              ]),
              _: 1
            }, 8, ["disabled"])) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, _hoisted_3))
          ])
        ]),
        _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_4, [
          vue.renderSlot(_ctx.$slots, "default")
        ])) : vue.createCommentVNode("", true)
      ], 64);
    };
  }
});
exports.default = _sfc_main;
