import { defineComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, unref, createElementVNode, renderSlot, toDisplayString, createCommentVNode, createBlock, Transition, withCtx } from "vue";
import "../style/tag.css";
import { useConfig } from "../../../utils/config.mjs";
import { tagComplexProps, tagComplexEmits } from "./complex.props.mjs";
const _hoisted_1 = { class: "cu-tag-content" };
const _hoisted_2 = { class: "cu-tag-content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuTagComplex"
  },
  __name: "complex",
  props: tagComplexProps,
  emits: tagComplexEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { IS_COMIC } = useConfig();
    function handleClose() {
      emit("close");
    }
    return (_ctx, _cache) => {
      return !_ctx.transition ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(["cu-tag-complex", _ctx.type ? "cu-tag--" + _ctx.type : void 0]),
        style: normalizeStyle({ height: _ctx.size + "px", borderColor: unref(IS_COMIC) ? void 0 : props.color })
      }, [
        createElementVNode("span", _hoisted_1, [
          renderSlot(_ctx.$slots, "default")
        ]),
        createElementVNode("span", {
          class: "complex-content",
          style: normalizeStyle({ background: props.color })
        }, [
          createElementVNode("span", null, toDisplayString(_ctx.title), 1),
          _ctx.closable ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: "closeicon cu-icon-close-small",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
          })) : createCommentVNode("", true)
        ], 4)
      ], 6)) : (openBlock(), createBlock(Transition, {
        key: 1,
        name: "cu-zoom-x",
        appear: ""
      }, {
        default: withCtx(() => [
          createElementVNode("span", {
            class: normalizeClass(["cu-tag-complex", _ctx.type ? "cu-tag--" + _ctx.type : void 0]),
            style: normalizeStyle({ height: _ctx.size + "px", borderColor: unref(IS_COMIC) ? void 0 : props.color })
          }, [
            createElementVNode("span", _hoisted_2, [
              renderSlot(_ctx.$slots, "default")
            ]),
            createElementVNode("span", {
              class: "complex-content",
              style: normalizeStyle({ background: props.color })
            }, [
              createElementVNode("span", null, toDisplayString(_ctx.title), 1),
              _ctx.closable ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: "closeicon cu-icon-close-small",
                onClick: handleClose
              })) : createCommentVNode("", true)
            ], 4)
          ], 6)
        ]),
        _: 3
      }));
    };
  }
});
export {
  _sfc_main as default
};
