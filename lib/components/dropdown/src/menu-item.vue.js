"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const menuItem_props = require("./menu-item.props.js");
const type = require("./type.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuDropdownItem"
  },
  __name: "menu-item",
  props: menuItem_props.dropdownItemProps,
  setup(__props) {
    const props = __props;
    const { choose } = vue.inject(type.DROPDOWN_PROVIDE);
    function itemHandleClick() {
      if (props.disabled)
        return;
      if (!props.sign) {
        vue.warn("The current menu item does not have a sign attribute");
      }
      choose(props.sign);
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("li", {
        class: vue.normalizeClass(["cu-dropdown-item", { divider: _ctx.divider, disabled: _ctx.disabled }]),
        onClick: itemHandleClick
      }, [
        vue.createElementVNode("div", null, [
          _ctx.icon ? (vue.openBlock(), vue.createElementBlock("i", {
            key: 0,
            class: vue.normalizeClass(["prefix-icon", _ctx.icon])
          }, null, 2)) : vue.createCommentVNode("", true),
          vue.renderSlot(_ctx.$slots, "default")
        ])
      ], 2);
    };
  }
});
exports.default = _sfc_main;
