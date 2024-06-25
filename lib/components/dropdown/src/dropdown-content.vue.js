"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/dropdown.css");
const index$1 = require("../../popper/index.js");
const index = require("../../button/index.js");
const core = require("@vueuse/core");
require("../../../utils/config.js");
const clickOutside = require("../../../utils/click-outside.js");
const main_props = require("./main.props.js");
const _hoisted_1 = { class: "cu-dropdown__trigger" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuDropdownContent"
  },
  __name: "dropdown-content",
  props: main_props.dropdownProps,
  setup(__props) {
    var _a;
    const props = __props;
    var timer, clearTriggerEvent, clearTriggerLeave, clearPopperEvent, clearPopperLeave;
    const vClickOutside = clickOutside.useClickOutside();
    const show = vue.ref(false);
    const popperRef = vue.ref(null);
    const dropdownTriggerRef = vue.ref(null);
    const EVENT_TYPE = {
      click: () => {
        clearTriggerEvent = core.useEventListener(dropdownTriggerRef, "click", trigger);
      },
      "right-click": () => {
        clearTriggerEvent = core.useEventListener(dropdownTriggerRef, "contextmenu", trigger);
      },
      hover: () => {
        clearTriggerEvent = core.useEventListener(dropdownTriggerRef, "mouseenter", enter);
        clearTriggerLeave = core.useEventListener(dropdownTriggerRef, "mouseleave", startTime);
        clearPopperEvent = core.useEventListener(popperRef, "mouseenter", enter);
        clearPopperLeave = core.useEventListener(popperRef, "mouseleave", startTime);
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
    vue.watch(
      () => props.trigger,
      (val) => {
        var _a2;
        clearEvent();
        (_a2 = EVENT_TYPE[val]) == null ? void 0 : _a2.call(EVENT_TYPE);
      }
    );
    return (_ctx, _cache) => {
      return vue.withDirectives((vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.button ? vue.unref(index.CuButton) : "div"), {
        size: _ctx.size,
        type: _ctx.buttonType,
        class: "cu-dropdown-content",
        ref_key: "dropdownTriggerRef",
        ref: dropdownTriggerRef
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("div", _hoisted_1, [
            _ctx.button ? (vue.openBlock(), vue.createElementBlock("i", {
              key: 0,
              class: vue.normalizeClass(_ctx.buttonIcon)
            }, null, 2)) : vue.renderSlot(_ctx.$slots, "default", { key: 1 })
          ]),
          vue.createVNode(vue.unref(index$1.CuPopper), { show: show.value }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("div", {
                ref_key: "popperRef",
                ref: popperRef,
                class: "cu-dropdown__popper",
                onClick: chooseAfterHideClick
              }, [
                vue.renderSlot(_ctx.$slots, "dropdown")
              ], 512)
            ]),
            _: 3
          }, 8, ["show"])
        ]),
        _: 3
      }, 8, ["size", "type"])), [
        [vue.unref(vClickOutside), hidePopper, popperRef.value]
      ]);
    };
  }
});
exports.default = _sfc_main;
