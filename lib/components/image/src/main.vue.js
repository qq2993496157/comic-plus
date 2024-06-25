"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/image.css");
const index = require("../../preview-image/index.js");
const main_props = require("./main.props.js");
const _hoisted_1 = ["src", "alt", "loading"];
const _hoisted_2 = {
  key: 0,
  class: "cu-image__loading"
};
const _hoisted_3 = /* @__PURE__ */ vue.createElementVNode("i", { class: "cu-icon-picture empty" }, null, -1);
const _hoisted_4 = {
  key: 1,
  class: "cu-image__error"
};
const _hoisted_5 = /* @__PURE__ */ vue.createElementVNode("i", { class: "cu-icon-error-picture empty" }, null, -1);
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuImage"
  },
  __name: "main",
  props: main_props.imageProps,
  emits: main_props.imageEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const loadType = vue.ref("load");
    function loaded() {
      loadType.value = "loaded";
      emit("load");
    }
    function error() {
      loadType.value = "error";
      emit("error");
    }
    function handleClick() {
      if (props.previewList) {
        index.preview(props.previewList, props.current);
      }
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("span", {
        class: "cu-image",
        style: vue.normalizeStyle({ cursor: _ctx.previewList ? "pointer" : "default" }),
        onClick: handleClick
      }, [
        vue.createElementVNode("img", {
          src: _ctx.src,
          alt: _ctx.alt,
          width: "100%",
          height: "100%",
          onLoad: loaded,
          onError: error,
          loading: _ctx.loading,
          style: vue.normalizeStyle({
            "object-fit": props.fit
          })
        }, null, 44, _hoisted_1),
        loadType.value === "load" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
          vue.renderSlot(_ctx.$slots, "load", {}, () => [
            _hoisted_3
          ])
        ])) : vue.createCommentVNode("", true),
        loadType.value === "error" ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4, [
          vue.renderSlot(_ctx.$slots, "error", {}, () => [
            _hoisted_5
          ])
        ])) : vue.createCommentVNode("", true)
      ], 4);
    };
  }
});
exports.default = _sfc_main;
