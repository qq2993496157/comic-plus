import { defineComponent, ref, openBlock, createElementBlock, normalizeStyle, createElementVNode, renderSlot, createCommentVNode } from "vue";
import "../style/image.css";
import { preview } from "../../preview-image/index.mjs";
import { imageProps, imageEmits } from "./main.props.mjs";
const _hoisted_1 = ["src", "alt", "loading"];
const _hoisted_2 = {
  key: 0,
  class: "cu-image__loading"
};
const _hoisted_3 = /* @__PURE__ */ createElementVNode("i", { class: "cu-icon-picture empty" }, null, -1);
const _hoisted_4 = {
  key: 1,
  class: "cu-image__error"
};
const _hoisted_5 = /* @__PURE__ */ createElementVNode("i", { class: "cu-icon-error-picture empty" }, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuImage"
  },
  __name: "main",
  props: imageProps,
  emits: imageEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const loadType = ref("load");
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
        preview(props.previewList, props.current);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: "cu-image",
        style: normalizeStyle({ cursor: _ctx.previewList ? "pointer" : "default" }),
        onClick: handleClick
      }, [
        createElementVNode("img", {
          src: _ctx.src,
          alt: _ctx.alt,
          width: "100%",
          height: "100%",
          onLoad: loaded,
          onError: error,
          loading: _ctx.loading,
          style: normalizeStyle({
            "object-fit": props.fit
          })
        }, null, 44, _hoisted_1),
        loadType.value === "load" ? (openBlock(), createElementBlock("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "load", {}, () => [
            _hoisted_3
          ])
        ])) : createCommentVNode("", true),
        loadType.value === "error" ? (openBlock(), createElementBlock("div", _hoisted_4, [
          renderSlot(_ctx.$slots, "error", {}, () => [
            _hoisted_5
          ])
        ])) : createCommentVNode("", true)
      ], 4);
    };
  }
});
export {
  _sfc_main as default
};
