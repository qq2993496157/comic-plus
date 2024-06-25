"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const main = require("../../tooltip/main.js");
const menu = require("../utils/menu.js");
const item_props = require("./item.props.js");
const type = require("./type.js");
const _hoisted_1 = ["tooltip-disabled"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuMenuItem"
  },
  __name: "item",
  props: item_props.menuItemProps,
  setup(__props) {
    const props = __props;
    const vMenuTooltip = main.useTooltip();
    const instance = vue.getCurrentInstance();
    const { parentMenu } = menu.useMenu(instance);
    const { props: injectProps, menuClick } = vue.inject(type.MENU_PROVIDE);
    const submenu = vue.inject("submenu:provide" + parentMenu.value.uid, void 0);
    const tooltipDisabled = vue.computed(() => {
      return !(injectProps.collapse && !submenu || props.showEllipsis);
    });
    const active = vue.computed(() => {
      if (injectProps.modelValue) {
        return injectProps.modelValue === props.index;
      }
      return false;
    });
    const idx = props.index ?? instance.uid.toString();
    function itemClick() {
      menuClick(props.index);
      if (injectProps.mode === "horizontal" || injectProps.collapse) {
        submenu == null ? void 0 : submenu.closeMenu(true);
      }
    }
    vue.onMounted(() => {
      submenu == null ? void 0 : submenu.setMenu({
        idx,
        active
      });
    });
    vue.onBeforeUnmount(() => {
      submenu == null ? void 0 : submenu.removeMenu(idx);
    });
    return (_ctx, _cache) => {
      return vue.withDirectives((vue.openBlock(), vue.createElementBlock("li", {
        class: vue.normalizeClass(["cu-menu-item", { "is-active": active.value }]),
        onClick: itemClick,
        "tooltip-disabled": tooltipDisabled.value
      }, [
        _ctx.icon ? (vue.openBlock(), vue.createElementBlock("span", {
          key: 0,
          class: vue.normalizeClass([_ctx.icon, "icon"])
        }, null, 2)) : vue.createCommentVNode("", true),
        vue.withDirectives(vue.createElementVNode("span", null, [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createTextVNode(vue.toDisplayString(_ctx.label), 1)
          ])
        ], 512), [
          [vue.vShow, !vue.unref(injectProps).collapse || vue.unref(submenu)]
        ])
      ], 10, _hoisted_1)), [
        [vue.unref(vMenuTooltip), props.label, "right-center"]
      ]);
    };
  }
});
exports.default = _sfc_main;
