import { defineComponent, getCurrentInstance, inject, computed, onMounted, onBeforeUnmount, withDirectives, openBlock, createElementBlock, normalizeClass, createCommentVNode, createElementVNode, renderSlot, createTextVNode, toDisplayString, vShow, unref } from "vue";
import { useTooltip } from "../../tooltip/main.mjs";
import { useMenu } from "../utils/menu.mjs";
import { menuItemProps } from "./item.props.mjs";
import { MENU_PROVIDE } from "./type.mjs";
const _hoisted_1 = ["tooltip-disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuMenuItem"
  },
  __name: "item",
  props: menuItemProps,
  setup(__props) {
    const props = __props;
    const vMenuTooltip = useTooltip();
    const instance = getCurrentInstance();
    const { parentMenu } = useMenu(instance);
    const { props: injectProps, menuClick } = inject(MENU_PROVIDE);
    const submenu = inject("submenu:provide" + parentMenu.value.uid, void 0);
    const tooltipDisabled = computed(() => {
      return !(injectProps.collapse && !submenu || props.showEllipsis);
    });
    const active = computed(() => {
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
    onMounted(() => {
      submenu == null ? void 0 : submenu.setMenu({
        idx,
        active
      });
    });
    onBeforeUnmount(() => {
      submenu == null ? void 0 : submenu.removeMenu(idx);
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("li", {
        class: normalizeClass(["cu-menu-item", { "is-active": active.value }]),
        onClick: itemClick,
        "tooltip-disabled": tooltipDisabled.value
      }, [
        _ctx.icon ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass([_ctx.icon, "icon"])
        }, null, 2)) : createCommentVNode("", true),
        withDirectives(createElementVNode("span", null, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ], 512), [
          [vShow, !unref(injectProps).collapse || unref(submenu)]
        ])
      ], 10, _hoisted_1)), [
        [unref(vMenuTooltip), props.label, "right-center"]
      ]);
    };
  }
});
export {
  _sfc_main as default
};
