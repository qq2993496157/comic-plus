"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const main = require("../../tooltip/main.js");
const menu = require("../utils/menu.js");
const core = require("@vueuse/core");
const index = require("../../transition-collapse/index.js");
const menuPopper_vue_vue_type_script_setup_true_lang = require("./menu-popper.vue.js");
const submenu_props = require("./submenu.props.js");
const type = require("./type.js");
const _hoisted_1 = ["tooltip-disabled"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuSubMenu"
  },
  __name: "submenu",
  props: submenu_props.submenuProps,
  setup(__props) {
    const vMenuTooltip = main.useTooltip();
    const props = __props;
    const instance = vue.getCurrentInstance();
    const idx = props.index ?? instance.uid.toString();
    const submenuRef = vue.ref(null);
    var timer = null, clearEnter = null, clearLeave = null, clearClick = null;
    const { parentMenu } = menu.useMenu(instance);
    const unfold = vue.ref(false);
    const menus = vue.reactive({});
    const { props: injectProps, style } = vue.inject(type.MENU_PROVIDE);
    const submenu = vue.inject("submenu:provide" + parentMenu.value.uid, void 0);
    const deptOffset = vue.computed(() => {
      return submenu ? submenu.offset : 2;
    });
    const teleportDisabled = vue.computed(() => {
      return !!submenu;
    });
    const active = vue.computed(() => {
      return Object.values(menus).some((v) => v.active);
    });
    const tooltipDisabled = vue.computed(() => {
      return !(!injectProps.collapse && props.showEllipsis);
    });
    const float = vue.computed(() => {
      return injectProps.mode === "horizontal" || injectProps.collapse;
    });
    function initListener() {
      if (float.value) {
        clearEnter = core.useEventListener(submenuRef, "mouseenter", onmouseenter);
        clearLeave = core.useEventListener(submenuRef, "mouseleave", createTimes);
      } else {
        clearClick = core.useEventListener(submenuRef, "click", headHandleClick);
      }
    }
    initListener();
    vue.watch(float, () => {
      clearEnter == null ? void 0 : clearEnter();
      clearLeave == null ? void 0 : clearLeave();
      clearClick == null ? void 0 : clearClick();
      unfold.value = false;
      initListener();
    });
    function headHandleClick() {
      unfold.value = !unfold.value;
    }
    function onmouseenter() {
      clearTimes();
      unfold.value = true;
    }
    function clearTimes() {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    }
    function createTimes() {
      if (!timer) {
        timer = setTimeout(() => {
          closeMenu();
        }, 300);
      }
    }
    function closeMenu(deep) {
      unfold.value = false;
      clearTimes();
      if (deep) {
        submenu == null ? void 0 : submenu.closeMenu(deep);
      }
    }
    function setMenu(item) {
      menus[item.idx] = item;
    }
    function removeMenu(idx2) {
      delete menus[idx2];
    }
    vue.provide("submenu:provide" + idx, {
      closeMenu,
      setMenu,
      removeMenu,
      offset: deptOffset.value + 1
    });
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
      return vue.openBlock(), vue.createElementBlock("li", {
        class: vue.normalizeClass(["cu-sub-menu", { "is-active": active.value }])
      }, [
        vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
          class: "cu-sub-menu__head",
          ref_key: "submenuRef",
          ref: submenuRef,
          "tooltip-disabled": tooltipDisabled.value
        }, [
          _ctx.icon ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 0,
            class: vue.normalizeClass([_ctx.icon, "icon"])
          }, null, 2)) : vue.createCommentVNode("", true),
          vue.withDirectives(vue.createElementVNode("span", null, [
            vue.renderSlot(_ctx.$slots, "label", {}, () => [
              vue.createTextVNode(vue.toDisplayString(_ctx.label), 1)
            ])
          ], 512), [
            [vue.vShow, !vue.unref(injectProps).collapse || vue.unref(submenu)]
          ]),
          vue.withDirectives(vue.createElementVNode("span", {
            class: vue.normalizeClass(["suffix-icon", [{ unfold: unfold.value }, vue.unref(injectProps).mode === "horizontal" ? "cu-icon-down" : "cu-icon-right"]])
          }, null, 2), [
            [vue.vShow, !vue.unref(injectProps).collapse || vue.unref(submenu)]
          ])
        ], 8, _hoisted_1)), [
          [vue.unref(vMenuTooltip), props.label, "right-center"]
        ]),
        (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(float.value ? menuPopper_vue_vue_type_script_setup_true_lang.default : vue.unref(index.CuTransitionCollapse)), {
          show: unfold.value,
          fixed: !teleportDisabled.value,
          onMouseIn: clearTimes,
          onMouseOut: createTimes
        }, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createElementVNode("ul", {
              class: "cu-sub-menu__content",
              style: vue.normalizeStyle(float.value ? vue.unref(style) : { "--cu-menu-padding": deptOffset.value * 20 + "px" })
            }, [
              vue.renderSlot(_ctx.$slots, "default")
            ], 4), [
              [vue.vShow, float.value ? true : unfold.value]
            ])
          ]),
          _: 3
        }, 40, ["show", "fixed"]))
      ], 2);
    };
  }
});
exports.default = _sfc_main;
