import { defineComponent, getCurrentInstance, ref, reactive, inject, computed, watch, provide, onMounted, onBeforeUnmount, openBlock, createElementBlock, normalizeClass, withDirectives, createCommentVNode, createElementVNode, renderSlot, createTextVNode, toDisplayString, vShow, unref, createBlock, resolveDynamicComponent, withCtx, normalizeStyle } from "vue";
import { useTooltip } from "../../tooltip/main.mjs";
import { useMenu } from "../utils/menu.mjs";
import { useEventListener } from "@vueuse/core";
import { CuTransitionCollapse } from "../../transition-collapse/index.mjs";
import _sfc_main$1 from "./menu-popper.vue.mjs";
import { submenuProps } from "./submenu.props.mjs";
import { MENU_PROVIDE } from "./type.mjs";
const _hoisted_1 = ["tooltip-disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuSubMenu"
  },
  __name: "submenu",
  props: submenuProps,
  setup(__props) {
    const vMenuTooltip = useTooltip();
    const props = __props;
    const instance = getCurrentInstance();
    const idx = props.index ?? instance.uid.toString();
    const submenuRef = ref(null);
    var timer = null, clearEnter = null, clearLeave = null, clearClick = null;
    const { parentMenu } = useMenu(instance);
    const unfold = ref(false);
    const menus = reactive({});
    const { props: injectProps, style } = inject(MENU_PROVIDE);
    const submenu = inject("submenu:provide" + parentMenu.value.uid, void 0);
    const deptOffset = computed(() => {
      return submenu ? submenu.offset : 2;
    });
    const teleportDisabled = computed(() => {
      return !!submenu;
    });
    const active = computed(() => {
      return Object.values(menus).some((v) => v.active);
    });
    const tooltipDisabled = computed(() => {
      return !(!injectProps.collapse && props.showEllipsis);
    });
    const float = computed(() => {
      return injectProps.mode === "horizontal" || injectProps.collapse;
    });
    function initListener() {
      if (float.value) {
        clearEnter = useEventListener(submenuRef, "mouseenter", onmouseenter);
        clearLeave = useEventListener(submenuRef, "mouseleave", createTimes);
      } else {
        clearClick = useEventListener(submenuRef, "click", headHandleClick);
      }
    }
    initListener();
    watch(float, () => {
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
    provide("submenu:provide" + idx, {
      closeMenu,
      setMenu,
      removeMenu,
      offset: deptOffset.value + 1
    });
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
      return openBlock(), createElementBlock("li", {
        class: normalizeClass(["cu-sub-menu", { "is-active": active.value }])
      }, [
        withDirectives((openBlock(), createElementBlock("div", {
          class: "cu-sub-menu__head",
          ref_key: "submenuRef",
          ref: submenuRef,
          "tooltip-disabled": tooltipDisabled.value
        }, [
          _ctx.icon ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass([_ctx.icon, "icon"])
          }, null, 2)) : createCommentVNode("", true),
          withDirectives(createElementVNode("span", null, [
            renderSlot(_ctx.$slots, "label", {}, () => [
              createTextVNode(toDisplayString(_ctx.label), 1)
            ])
          ], 512), [
            [vShow, !unref(injectProps).collapse || unref(submenu)]
          ]),
          withDirectives(createElementVNode("span", {
            class: normalizeClass(["suffix-icon", [{ unfold: unfold.value }, unref(injectProps).mode === "horizontal" ? "cu-icon-down" : "cu-icon-right"]])
          }, null, 2), [
            [vShow, !unref(injectProps).collapse || unref(submenu)]
          ])
        ], 8, _hoisted_1)), [
          [unref(vMenuTooltip), props.label, "right-center"]
        ]),
        (openBlock(), createBlock(resolveDynamicComponent(float.value ? _sfc_main$1 : unref(CuTransitionCollapse)), {
          show: unfold.value,
          fixed: !teleportDisabled.value,
          onMouseIn: clearTimes,
          onMouseOut: createTimes
        }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("ul", {
              class: "cu-sub-menu__content",
              style: normalizeStyle(float.value ? unref(style) : { "--cu-menu-padding": deptOffset.value * 20 + "px" })
            }, [
              renderSlot(_ctx.$slots, "default")
            ], 4), [
              [vShow, float.value ? true : unfold.value]
            ])
          ]),
          _: 3
        }, 40, ["show", "fixed"]))
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
