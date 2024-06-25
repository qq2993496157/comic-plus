import { defineComponent, inject, openBlock, createElementBlock, normalizeClass, createElementVNode, createCommentVNode, renderSlot, warn } from "vue";
import { dropdownItemProps } from "./menu-item.props.mjs";
import { DROPDOWN_PROVIDE } from "./type.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuDropdownItem"
  },
  __name: "menu-item",
  props: dropdownItemProps,
  setup(__props) {
    const props = __props;
    const { choose } = inject(DROPDOWN_PROVIDE);
    function itemHandleClick() {
      if (props.disabled)
        return;
      if (!props.sign) {
        warn("The current menu item does not have a sign attribute");
      }
      choose(props.sign);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", {
        class: normalizeClass(["cu-dropdown-item", { divider: _ctx.divider, disabled: _ctx.disabled }]),
        onClick: itemHandleClick
      }, [
        createElementVNode("div", null, [
          _ctx.icon ? (openBlock(), createElementBlock("i", {
            key: 0,
            class: normalizeClass(["prefix-icon", _ctx.icon])
          }, null, 2)) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "default")
        ])
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
