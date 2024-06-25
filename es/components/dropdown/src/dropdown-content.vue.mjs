import { defineComponent, ref, watch, withDirectives, openBlock, createBlock, resolveDynamicComponent, unref, withCtx, createElementVNode, createElementBlock, normalizeClass, renderSlot, createVNode } from "vue";
import "../style/dropdown.css";
import { CuPopper } from "../../popper/index.mjs";
import { CuButton } from "../../button/index.mjs";
import { useEventListener } from "@vueuse/core";
import "../../../utils/config.mjs";
import { useClickOutside } from "../../../utils/click-outside.mjs";
import { dropdownProps } from "./main.props.mjs";
const _hoisted_1 = { class: "cu-dropdown__trigger" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuDropdownContent"
  },
  __name: "dropdown-content",
  props: dropdownProps,
  setup(__props) {
    var _a;
    const props = __props;
    var timer, clearTriggerEvent, clearTriggerLeave, clearPopperEvent, clearPopperLeave;
    const vClickOutside = useClickOutside();
    const show = ref(false);
    const popperRef = ref(null);
    const dropdownTriggerRef = ref(null);
    const EVENT_TYPE = {
      click: () => {
        clearTriggerEvent = useEventListener(dropdownTriggerRef, "click", trigger);
      },
      "right-click": () => {
        clearTriggerEvent = useEventListener(dropdownTriggerRef, "contextmenu", trigger);
      },
      hover: () => {
        clearTriggerEvent = useEventListener(dropdownTriggerRef, "mouseenter", enter);
        clearTriggerLeave = useEventListener(dropdownTriggerRef, "mouseleave", startTime);
        clearPopperEvent = useEventListener(popperRef, "mouseenter", enter);
        clearPopperLeave = useEventListener(popperRef, "mouseleave", startTime);
      }
    };
    (_a = EVENT_TYPE[props.trigger]) == null ? void 0 : _a.call(EVENT_TYPE);
    function enter(e) {
      trigger(e);
      turnTime();
    }
    function startTime() {
      timer = setTimeout(() => {
        hidePopper();
      }, 300);
    }
    function turnTime() {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    }
    function trigger(e) {
      e.preventDefault();
      show.value = true;
    }
    function hidePopper() {
      show.value && (show.value = false);
    }
    function chooseAfterHideClick() {
      if (props.chooseAfterHide) {
        hidePopper();
      }
    }
    function clearEvent() {
      clearTriggerEvent == null ? void 0 : clearTriggerEvent();
      clearTriggerLeave == null ? void 0 : clearTriggerLeave();
      clearPopperEvent == null ? void 0 : clearPopperEvent();
      clearPopperLeave == null ? void 0 : clearPopperLeave();
    }
    watch(
      () => props.trigger,
      (val) => {
        var _a2;
        clearEvent();
        (_a2 = EVENT_TYPE[val]) == null ? void 0 : _a2.call(EVENT_TYPE);
      }
    );
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createBlock(resolveDynamicComponent(_ctx.button ? unref(CuButton) : "div"), {
        size: _ctx.size,
        type: _ctx.buttonType,
        class: "cu-dropdown-content",
        ref_key: "dropdownTriggerRef",
        ref: dropdownTriggerRef
      }, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            _ctx.button ? (openBlock(), createElementBlock("i", {
              key: 0,
              class: normalizeClass(_ctx.buttonIcon)
            }, null, 2)) : renderSlot(_ctx.$slots, "default", { key: 1 })
          ]),
          createVNode(unref(CuPopper), { show: show.value }, {
            default: withCtx(() => [
              createElementVNode("div", {
                ref_key: "popperRef",
                ref: popperRef,
                class: "cu-dropdown__popper",
                onClick: chooseAfterHideClick
              }, [
                renderSlot(_ctx.$slots, "dropdown")
              ], 512)
            ]),
            _: 3
          }, 8, ["show"])
        ]),
        _: 3
      }, 8, ["size", "type"])), [
        [unref(vClickOutside), hidePopper, popperRef.value]
      ]);
    };
  }
});
export {
  _sfc_main as default
};
