"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/button.css");
const type = require("../../form/src/type.js");
const main_props = require("./main.props.js");
const color = require("../../../utils/color.js");
const config = require("../../../utils/config.js");
const type$1 = require("./type.js");
const _hoisted_1 = ["disabled"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuButton"
  },
  __name: "main",
  props: main_props.buttonProps,
  emits: main_props.buttonEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { SIZE, IS_COMIC } = config.useConfig();
    const form = vue.inject(type.FORM_PROVIDE, void 0);
    const group = vue.inject(type$1.BUTTONGROUP_PROVIDE, void 0);
    const currentSize = vue.computed(() => {
      return props.size ?? (group == null ? void 0 : group.props.size) ?? (form == null ? void 0 : form.props.size) ?? (SIZE == null ? void 0 : SIZE.value);
    });
    const buttonStyle = vue.computed(() => {
      if (props.color) {
        const rgba = color.colorToRgba(props.color);
        if (props.plain) {
          return {
            "--cu-button-border-hover": (IS_COMIC == null ? void 0 : IS_COMIC.value) ? void 0 : props.color,
            "--cu-button-border": (IS_COMIC == null ? void 0 : IS_COMIC.value) ? void 0 : props.color,
            "--cu-button-background-hover": color.colorBlend(rgba, 10),
            "--cu-button-color": props.color,
            "--cu-button-color-hover": props.color,
            "--cu-button-border-disabled": (IS_COMIC == null ? void 0 : IS_COMIC.value) ? void 0 : color.colorBlend(rgba, 50),
            "--cu-button-color-disabled": color.colorBlend(rgba, 50),
            "--cu-button-background-disabled": "#ffffff"
          };
        } else {
          return {
            "--cu-button-background": props.color,
            "--cu-button-border-hover": (IS_COMIC == null ? void 0 : IS_COMIC.value) ? void 0 : color.colorBlend(rgba, 70),
            "--cu-button-border": (IS_COMIC == null ? void 0 : IS_COMIC.value) ? void 0 : props.color,
            "--cu-button-background-hover": color.colorBlend(rgba, 70),
            "--cu-button-color": "#ffffff",
            "--cu-button-border-disabled": (IS_COMIC == null ? void 0 : IS_COMIC.value) ? void 0 : color.colorBlend(rgba, 50),
            "--cu-button-color-disabled": "#ffffff",
            "--cu-button-background-disabled": color.colorBlend(rgba, 50)
          };
        }
      }
      return void 0;
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", {
        class: vue.normalizeClass(["cu-button", [
          _ctx.type ? "cu-button--" + _ctx.type : void 0,
          currentSize.value,
          { "is-circle": _ctx.circle, "is-round": _ctx.round, "is-plain": _ctx.plain, "is-disabled": _ctx.disabled, loading: _ctx.loading }
        ]]),
        disabled: _ctx.disabled || _ctx.loading,
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event)),
        style: vue.normalizeStyle(buttonStyle.value)
      }, [
        _ctx.loading ? (vue.openBlock(), vue.createElementBlock("span", {
          key: 0,
          class: vue.normalizeClass(["is-loading", _ctx.loadingIcon ?? "cu-icon-loading"]),
          style: vue.normalizeStyle({ marginRight: _ctx.$slots.default ? "4px" : "0" })
        }, null, 6)) : _ctx.icon ? (vue.openBlock(), vue.createElementBlock("span", {
          key: 1,
          class: vue.normalizeClass(_ctx.icon),
          style: vue.normalizeStyle({ marginRight: _ctx.$slots.default ? "4px" : "0" })
        }, null, 6)) : vue.createCommentVNode("", true),
        vue.createElementVNode("span", null, [
          vue.renderSlot(_ctx.$slots, "default")
        ])
      ], 14, _hoisted_1);
    };
  }
});
exports.default = _sfc_main;
