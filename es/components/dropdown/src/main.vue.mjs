import { defineComponent, provide, openBlock, createBlock, unref, withCtx, createVNode, renderSlot, normalizeProps, guardReactiveProps, createElementBlock } from "vue";
import "../style/dropdown.css";
import { CuButton } from "../../button/index.mjs";
import { CuButtonGroup } from "../../button-group/index.mjs";
import _sfc_main$1 from "./dropdown-content.vue.mjs";
import { dropdownProps, dropdownEmits } from "./main.props.mjs";
import { DROPDOWN_PROVIDE } from "./type.mjs";
const _hoisted_1 = {
  key: 1,
  class: "cu-dropdown"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuDropdown"
  },
  __name: "main",
  props: dropdownProps,
  emits: dropdownEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    function choose(sign) {
      emit("menu-click", sign);
    }
    provide(DROPDOWN_PROVIDE, {
      choose
    });
    return (_ctx, _cache) => {
      return _ctx.button ? (openBlock(), createBlock(unref(CuButtonGroup), { key: 0 }, {
        default: withCtx(() => [
          createVNode(unref(CuButton), {
            size: _ctx.size,
            type: _ctx.buttonType,
            onClick: _cache[0] || (_cache[0] = ($event) => emit("button-click", $event))
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }, 8, ["size", "type"]),
          createVNode(_sfc_main$1, normalizeProps(guardReactiveProps(props)), {
            dropdown: withCtx(() => [
              renderSlot(_ctx.$slots, "dropdown")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      })) : (openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$1, normalizeProps(guardReactiveProps(props)), {
          dropdown: withCtx(() => [
            renderSlot(_ctx.$slots, "dropdown")
          ]),
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]));
    };
  }
});
export {
  _sfc_main as default
};
