import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, renderSlot, createCommentVNode, createBlock, Transition, withCtx } from "vue";
import "../style/tag.css";
import { colorBlend, colorToRgba } from "../../../utils/color.mjs";
import { useConfig } from "../../../utils/config.mjs";
import { tagProps, tagEmits } from "./main.props.mjs";
const _hoisted_1 = { class: "cu-tag-content" };
const _hoisted_2 = { class: "cu-tag-content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuTag"
  },
  __name: "main",
  props: tagProps,
  emits: tagEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { IS_COMIC } = useConfig();
    function handleClose() {
      emit("close");
    }
    const customStyle = computed(() => {
      if (!props.color)
        return void 0;
      let calcColor = props.mode === "light" ? colorBlend(colorToRgba(props.color), 20) : props.mode === "plain" ? "#fff" : props.color;
      return {
        borderColor: (IS_COMIC == null ? void 0 : IS_COMIC.value) ? void 0 : props.color,
        backgroundColor: calcColor,
        color: props.mode ? props.color : "#fff",
        "--cu-tag-closecolor": calcColor
      };
    });
    return (_ctx, _cache) => {
      return !_ctx.transition ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(["cu-tag", [_ctx.type ? "cu-tag--" + _ctx.type : void 0, _ctx.mode ? "mode-" + _ctx.mode : void 0, { "is-border": _ctx.border }]]),
        style: normalizeStyle([{ height: _ctx.size + "px" }, customStyle.value])
      }, [
        createElementVNode("span", _hoisted_1, [
          renderSlot(_ctx.$slots, "default")
        ]),
        _ctx.closable ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: "closeicon cu-icon-close-small",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
        })) : createCommentVNode("", true)
      ], 6)) : (openBlock(), createBlock(Transition, {
        key: 1,
        name: "cu-zoom-x",
        appear: ""
      }, {
        default: withCtx(() => [
          createElementVNode("span", {
            class: normalizeClass(["cu-tag", [_ctx.type ? "cu-tag--" + _ctx.type : void 0, _ctx.mode ? "mode-" + _ctx.mode : void 0, { "is-border": _ctx.border }]]),
            style: normalizeStyle([{ height: _ctx.size + "px" }, customStyle.value])
          }, [
            createElementVNode("span", _hoisted_2, [
              renderSlot(_ctx.$slots, "default")
            ]),
            _ctx.closable ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "closeicon cu-icon-close-small",
              onClick: handleClose
            })) : createCommentVNode("", true)
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
