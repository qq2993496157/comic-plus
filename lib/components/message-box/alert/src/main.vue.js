"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const core = require("@vueuse/core");
require("../../style/message-box.css");
const index = require("../../../mode/index.js");
const popup = require("../../../../utils/hook/popup.js");
require("../../../../utils/config.js");
const typescript = require("../../../../utils/typescript.js");
const index$1 = require("../../../button/index.js");
const main_props = require("./main.props.js");
const _hoisted_1 = { class: "title" };
const _hoisted_2 = { class: "cu-popup__content" };
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = {
  key: 0,
  class: "cu-popup__footer"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuAlert"
  },
  __name: "main",
  props: main_props.alertProps,
  setup(__props) {
    const typeList = {
      primary: "cu-icon-tips",
      info: "cu-icon-info",
      success: "cu-icon-success",
      warning: "cu-icon-caution",
      error: "cu-icon-warning-filled"
    };
    const props = __props;
    const { visible, showMode, onAfterEnter, modeHandleClick, close, onAfterLeave } = popup.usePopup(props);
    const headIcon = vue.computed(() => {
      if (!props.showIcon)
        return false;
      if (props.icon)
        return props.icon;
      return props.type ? typeList[props.type] : "";
    });
    vue.onMounted(() => {
      showMode.value = true;
      if (props.escClose) {
        core.onKeyStroke("Escape", (e) => {
          e.preventDefault();
          close();
        });
      }
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(index.CuMode), {
        show: vue.unref(showMode),
        "lock-scroll": _ctx.lockScroll,
        "custom-class": ["cu-mode__flex", _ctx.modeClass],
        onClose: _cache[2] || (_cache[2] = ($event) => _ctx.destroy()),
        onOpen: vue.unref(onAfterEnter),
        onModeClick: vue.unref(modeHandleClick)
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(vue.Transition, {
            name: "cu-fade-top",
            onAfterLeave: _cache[1] || (_cache[1] = ($event) => vue.unref(onAfterLeave)())
          }, {
            default: vue.withCtx(() => [
              vue.unref(visible) ? (vue.openBlock(), vue.createElementBlock("div", {
                key: 0,
                class: vue.normalizeClass(["cu-popup", [_ctx.type ? "cu-popup--" + _ctx.type : void 0, { "is-center": _ctx.center }, _ctx.customClass]])
              }, [
                vue.createElementVNode("div", {
                  class: "cu-popup__head",
                  style: vue.normalizeStyle({ color: _ctx.color })
                }, [
                  vue.createElementVNode("div", _hoisted_1, [
                    headIcon.value ? (vue.openBlock(), vue.createElementBlock("i", {
                      key: 0,
                      class: vue.normalizeClass(headIcon.value)
                    }, null, 2)) : vue.createCommentVNode("", true),
                    vue.createElementVNode("span", null, vue.toDisplayString(_ctx.title), 1)
                  ]),
                  _ctx.showClose ? (vue.openBlock(), vue.createElementBlock("i", {
                    key: 0,
                    class: "cu-icon-close",
                    onClick: _cache[0] || (_cache[0] = //@ts-ignore
                    (...args) => vue.unref(close) && vue.unref(close)(...args))
                  })) : vue.createCommentVNode("", true)
                ], 4),
                vue.createElementVNode("div", _hoisted_2, [
                  _ctx.isVNode ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                    vue.unref(typescript.isString)(_ctx.content) ? (vue.openBlock(), vue.createElementBlock("div", {
                      key: 0,
                      innerHTML: _ctx.content
                    }, null, 8, _hoisted_3)) : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.content), { key: 1 }))
                  ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                    vue.createTextVNode(vue.toDisplayString(_ctx.content), 1)
                  ], 64))
                ]),
                _ctx.showButton ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4, [
                  vue.createVNode(vue.unref(index$1.CuButton), {
                    size: "small",
                    type: _ctx.color ? void 0 : _ctx.type === "error" ? "danger" : _ctx.type,
                    color: _ctx.color,
                    onClick: vue.unref(close)
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(vue.toDisplayString(_ctx.closeButtonText), 1)
                    ]),
                    _: 1
                  }, 8, ["type", "color", "onClick"])
                ])) : vue.createCommentVNode("", true)
              ], 2)) : vue.createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show", "lock-scroll", "custom-class", "onOpen", "onModeClick"]);
    };
  }
});
exports.default = _sfc_main;
