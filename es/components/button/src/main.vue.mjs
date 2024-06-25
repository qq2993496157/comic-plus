import { defineComponent, inject, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, createCommentVNode, createElementVNode, renderSlot } from "vue";
import "../style/button.css";
import { FORM_PROVIDE } from "../../form/src/type.mjs";
import { buttonProps, buttonEmits } from "./main.props.mjs";
import { colorToRgba, colorBlend } from "../../../utils/color.mjs";
import { useConfig } from "../../../utils/config.mjs";
import { BUTTONGROUP_PROVIDE } from "./type.mjs";
const _hoisted_1 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuButton"
  },
  __name: "main",
  props: buttonProps,
  emits: buttonEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { SIZE, IS_COMIC } = useConfig();
    const form = inject(FORM_PROVIDE, void 0);
    const group = inject(BUTTONGROUP_PROVIDE, void 0);
    const currentSize = computed(() => {
      return props.size ?? (group == null ? void 0 : group.props.size) ?? (form == null ? void 0 : form.props.size) ?? (SIZE == null ? void 0 : SIZE.value);
    });
    const buttonStyle = computed(() => {
      if (props.color) {
        const rgba = colorToRgba(props.color);
        if (props.plain) {
          return {
            "--cu-button-border-hover": (IS_COMIC == null ? void 0 : IS_COMIC.value) ? void 0 : props.color,
            "--cu-button-border": (IS_COMIC == null ? void 0 : IS_COMIC.value) ? void 0 : props.color,
            "--cu-button-background-hover": colorBlend(rgba, 10),
            "--cu-button-color": props.color,
            "--cu-button-color-hover": props.color,
            "--cu-button-border-disabled": (IS_COMIC == null ? void 0 : IS_COMIC.value) ? void 0 : colorBlend(rgba, 50),
            "--cu-button-color-disabled": colorBlend(rgba, 50),
            "--cu-button-background-disabled": "#ffffff"
          };
        } else {
          return {
            "--cu-button-background": props.color,
            "--cu-button-border-hover": (IS_COMIC == null ? void 0 : IS_COMIC.value) ? void 0 : colorBlend(rgba, 70),
            "--cu-button-border": (IS_COMIC == null ? void 0 : IS_COMIC.value) ? void 0 : props.color,
            "--cu-button-background-hover": colorBlend(rgba, 70),
            "--cu-button-color": "#ffffff",
            "--cu-button-border-disabled": (IS_COMIC == null ? void 0 : IS_COMIC.value) ? void 0 : colorBlend(rgba, 50),
            "--cu-button-color-disabled": "#ffffff",
            "--cu-button-background-disabled": colorBlend(rgba, 50)
          };
        }
      }
      return void 0;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["cu-button", [
          _ctx.type ? "cu-button--" + _ctx.type : void 0,
          currentSize.value,
          { "is-circle": _ctx.circle, "is-round": _ctx.round, "is-plain": _ctx.plain, "is-disabled": _ctx.disabled, loading: _ctx.loading }
        ]]),
        disabled: _ctx.disabled || _ctx.loading,
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event)),
        style: normalizeStyle(buttonStyle.value)
      }, [
        _ctx.loading ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(["is-loading", _ctx.loadingIcon ?? "cu-icon-loading"]),
          style: normalizeStyle({ marginRight: _ctx.$slots.default ? "4px" : "0" })
        }, null, 6)) : _ctx.icon ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(_ctx.icon),
          style: normalizeStyle({ marginRight: _ctx.$slots.default ? "4px" : "0" })
        }, null, 6)) : createCommentVNode("", true),
        createElementVNode("span", null, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 14, _hoisted_1);
    };
  }
});
export {
  _sfc_main as default
};
