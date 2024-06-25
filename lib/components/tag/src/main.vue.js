"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/tag.css");
const color = require("../../../utils/color.js");
const config = require("../../../utils/config.js");
const main_props = require("./main.props.js");
const _hoisted_1 = { class: "cu-tag-content" };
const _hoisted_2 = { class: "cu-tag-content" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuTag"
  },
  __name: "main",
  props: main_props.tagProps,
  emits: main_props.tagEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { IS_COMIC } = config.useConfig();
    function handleClose() {
      emit("close");
    }
    const customStyle = vue.computed(() => {
      if (!props.color)
        return void 0;
      let calcColor = props.mode === "light" ? color.colorBlend(color.colorToRgba(props.color), 20) : props.mode === "plain" ? "#fff" : props.color;
      return {
        borderColor: (IS_COMIC == null ? void 0 : IS_COMIC.value) ? void 0 : props.color,
        backgroundColor: calcColor,
        color: props.mode ? props.color : "#fff",
        "--cu-tag-closecolor": calcColor
      };
    });
    return (_ctx, _cache) => {
      return !_ctx.transition ? (vue.openBlock(), vue.createElementBlock("span", {
        key: 0,
        class: vue.normalizeClass(["cu-tag", [_ctx.type ? "cu-tag--" + _ctx.type : void 0, _ctx.mode ? "mode-" + _ctx.mode : void 0, { "is-border": _ctx.border }]]),
        style: vue.normalizeStyle([{ height: _ctx.size + "px" }, customStyle.value])
      }, [
        vue.createElementVNode("span", _hoisted_1, [
          vue.renderSlot(_ctx.$slots, "default")
        ]),
        _ctx.closable ? (vue.openBlock(), vue.createElementBlock("span", {
          key: 0,
          class: "closeicon cu-icon-close-small",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
        })) : vue.createCommentVNode("", true)
      ], 6)) : (vue.openBlock(), vue.createBlock(vue.Transition, {
        key: 1,
        name: "cu-zoom-x",
        appear: ""
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("span", {
            class: vue.normalizeClass(["cu-tag", [_ctx.type ? "cu-tag--" + _ctx.type : void 0, _ctx.mode ? "mode-" + _ctx.mode : void 0, { "is-border": _ctx.border }]]),
            style: vue.normalizeStyle([{ height: _ctx.size + "px" }, customStyle.value])
          }, [
            vue.createElementVNode("span", _hoisted_2, [
              vue.renderSlot(_ctx.$slots, "default")
            ]),
            _ctx.closable ? (vue.openBlock(), vue.createElementBlock("span", {
              key: 0,
              class: "closeicon cu-icon-close-small",
              onClick: handleClose
            })) : vue.createCommentVNode("", true)
          ], 6)
        ]),
        _: 3
      }));
    };
  }
});
exports.default = _sfc_main;
