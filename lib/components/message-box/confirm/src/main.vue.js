"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const core = require("@vueuse/core");
require("../../style/message-box.css");
const index = require("../../../mode/index.js");
const popup = require("../../../../utils/hook/popup.js");
require("../../../../utils/config.js");
const typescript = require("../../../../utils/typescript.js");
const main_vue_vue_type_script_setup_true_lang = require("../../../button/src/main.vue.js");
const main_props = require("./main.props.js");
const _hoisted_1 = { class: "cu-popup__head" };
const _hoisted_2 = { class: "title" };
const _hoisted_3 = { class: "cu-popup__content" };
const _hoisted_4 = ["innerHTML"];
const _hoisted_5 = { class: "cu-popup__footer" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuConfirm"
  },
  __name: "main",
  props: main_props.confirmProps,
  setup(__props) {
    const typeList = {
      primary: "cu-icon-tips",
      info: "cu-icon-info",
      success: "cu-icon-success",
      warning: "cu-icon-caution",
      error: "cu-icon-warning-filled"
    };
    const props = __props;
    const { visible, showMode, onAfterEnter, close, onAfterLeave } = popup.usePopup(props);
    const TYPE = vue.ref("cancel");
    const headIcon = vue.computed(() => {
      if (!props.showIcon)
        return false;
      if (props.icon)
        return props.icon;
      return props.type ? typeList[props.type] : "";
    });
    function handleModeClose() {
      cancel("cancel");
    }
    function cancel(val) {
      TYPE.value = val;
      close();
    }
    function confirm() {
      close();
      TYPE.value = "confirm";
    }
    vue.onMounted(() => {
      showMode.value = true;
      if (props.escClose) {
        core.onKeyStroke("Escape", (e) => {
          e.preventDefault();
          cancel(props.distinguishCloseAndCancel ? "esc" : "cancel");
        });
      }
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(index.CuMode), {
        show: vue.unref(showMode),
        "custom-class": ["cu-mode__flex", _ctx.modeClass],
        "lock-scroll": _ctx.lockScroll,
        onClose: _cache[2] || (_cache[2] = ($event) => _ctx.destroy(TYPE.value)),
        onOpen: vue.unref(onAfterEnter),
        onModeClick: _cache[3] || (_cache[3] = ($event) => handleModeClose())
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(vue.Transition, {
            name: "cu-fade-top",
            onAfterLeave: vue.unref(onAfterLeave)
          }, {
            default: vue.withCtx(() => [
              vue.unref(visible) ? (vue.openBlock(), vue.createElementBlock("div", {
                key: 0,
                class: vue.normalizeClass(["cu-popup", [_ctx.type ? "cu-popup--" + _ctx.type : void 0, { "is-center": _ctx.center }, _ctx.customClass]])
              }, [
                vue.createElementVNode("div", _hoisted_1, [
                  vue.createElementVNode("div", _hoisted_2, [
                    headIcon.value ? (vue.openBlock(), vue.createElementBlock("i", {
                      key: 0,
                      class: vue.normalizeClass(headIcon.value),
                      style: vue.normalizeStyle({ color: _ctx.color })
                    }, null, 6)) : vue.createCommentVNode("", true),
                    vue.createElementVNode("span", null, vue.toDisplayString(_ctx.title), 1)
                  ]),
                  _ctx.showClose ? (vue.openBlock(), vue.createElementBlock("i", {
                    key: 0,
                    class: "cu-icon-close",
                    onClick: _cache[0] || (_cache[0] = ($event) => cancel(_ctx.distinguishCloseAndCancel ? "close" : "cancel"))
                  })) : vue.createCommentVNode("", true)
                ]),
                vue.createElementVNode("div", _hoisted_3, [
                  _ctx.isVNode ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                    vue.unref(typescript.isString)(_ctx.content) ? (vue.openBlock(), vue.createElementBlock("div", {
                      key: 0,
                      innerHTML: _ctx.content
                    }, null, 8, _hoisted_4)) : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.content), { key: 1 }))
                  ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                    vue.createTextVNode(vue.toDisplayString(_ctx.content), 1)
                  ], 64))
                ]),
                vue.createElementVNode("div", _hoisted_5, [
                  _ctx.showCancelButton ? (vue.openBlock(), vue.createBlock(main_vue_vue_type_script_setup_true_lang.default, {
                    key: 0,
                    size: "small",
                    plain: "",
                    color: _ctx.color,
                    type: _ctx.color ? void 0 : _ctx.type === "error" ? "danger" : _ctx.type || void 0,
                    onClick: _cache[1] || (_cache[1] = ($event) => cancel("cancel"))
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(vue.toDisplayString(_ctx.cancelButtonText), 1)
                    ]),
                    _: 1
                  }, 8, ["color", "type"])) : vue.createCommentVNode("", true),
                  _ctx.showConfirmButton ? (vue.openBlock(), vue.createBlock(main_vue_vue_type_script_setup_true_lang.default, {
                    key: 1,
                    size: "small",
                    type: _ctx.color ? void 0 : _ctx.type === "error" ? "danger" : _ctx.type || "primary",
                    color: _ctx.color,
                    onClick: confirm
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(vue.toDisplayString(_ctx.confirmButtonText), 1)
                    ]),
                    _: 1
                  }, 8, ["type", "color"])) : vue.createCommentVNode("", true)
                ])
              ], 2)) : vue.createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["onAfterLeave"])
        ]),
        _: 1
      }, 8, ["show", "custom-class", "lock-scroll", "onOpen"]);
    };
  }
});
exports.default = _sfc_main;
