"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/dropdown.css");
const index$1 = require("../../button/index.js");
const index = require("../../button-group/index.js");
const dropdownContent_vue_vue_type_script_setup_true_lang = require("./dropdown-content.vue.js");
const main_props = require("./main.props.js");
const type = require("./type.js");
const _hoisted_1 = {
  key: 1,
  class: "cu-dropdown"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuDropdown"
  },
  __name: "main",
  props: main_props.dropdownProps,
  emits: main_props.dropdownEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    function choose(sign) {
      emit("menu-click", sign);
    }
    vue.provide(type.DROPDOWN_PROVIDE, {
      choose
    });
    return (_ctx, _cache) => {
      return _ctx.button ? (vue.openBlock(), vue.createBlock(vue.unref(index.CuButtonGroup), { key: 0 }, {
        default: vue.withCtx(() => [
          vue.createVNode(vue.unref(index$1.CuButton), {
            size: _ctx.size,
            type: _ctx.buttonType,
            onClick: _cache[0] || (_cache[0] = ($event) => emit("button-click", $event))
          }, {
            default: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }, 8, ["size", "type"]),
          vue.createVNode(dropdownContent_vue_vue_type_script_setup_true_lang.default, vue.normalizeProps(vue.guardReactiveProps(props)), {
            dropdown: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "dropdown")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      })) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.createVNode(dropdownContent_vue_vue_type_script_setup_true_lang.default, vue.normalizeProps(vue.guardReactiveProps(props)), {
          dropdown: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "dropdown")
          ]),
          default: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]));
    };
  }
});
exports.default = _sfc_main;
