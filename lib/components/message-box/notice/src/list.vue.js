"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const typescript = require("../../../../utils/typescript.js");
const config = require("../../../../utils/config.js");
const _hoisted_1 = ["onClick"];
const _hoisted_2 = { class: "title" };
const _hoisted_3 = ["onClick"];
const _hoisted_4 = { class: "cu-notice__main" };
const _hoisted_5 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuNoticeList"
  },
  __name: "list",
  props: {
    position: String,
    list: Array
  },
  emits: ["empty"],
  setup(__props, { emit: __emit }) {
    const typeList = {
      primary: "cu-icon-volume-notice",
      info: "cu-icon-info",
      success: "cu-icon-success",
      warning: "cu-icon-warning",
      error: "cu-icon-close-one"
    };
    const props = __props;
    const emit = __emit;
    const zIndex = config.getNextZIndex();
    function handleClick(item) {
      var _a, _b;
      (_b = (_a = item.props).click) == null ? void 0 : _b.call(_a, item.close);
    }
    function afterLeave() {
      var _a;
      if (((_a = props.list) == null ? void 0 : _a.length) === 0) {
        emit("empty");
      }
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(["cu-notice-popup", "cu-notice-popup--" + __props.position]),
        style: vue.normalizeStyle({ zIndex: vue.unref(zIndex) })
      }, [
        vue.createVNode(vue.TransitionGroup, {
          name: "cu-notice-" + __props.position,
          onAfterLeave: afterLeave
        }, {
          default: vue.withCtx(() => [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.list, (item) => {
              return vue.openBlock(), vue.createElementBlock("div", {
                class: vue.normalizeClass(["cu-notice", [item.props.type ? "cu-notice--" + item.props.type : void 0, { "is-click": item.props.click }]]),
                style: vue.normalizeStyle({ "--cu-notice-hovercolor": item.props.color }),
                key: item.id,
                onClick: ($event) => handleClick(item)
              }, [
                vue.createElementVNode("div", {
                  class: "cu-notice__header",
                  style: vue.normalizeStyle({ color: item.props.color })
                }, [
                  vue.createElementVNode("span", _hoisted_2, [
                    item.props.icon || typeList[item.props.type] ? (vue.openBlock(), vue.createElementBlock("i", {
                      key: 0,
                      class: vue.normalizeClass(item.props.icon ?? typeList[item.props.type])
                    }, null, 2)) : vue.createCommentVNode("", true),
                    vue.createTextVNode(" " + vue.toDisplayString(item.props.title), 1)
                  ]),
                  item.props.showClose ? (vue.openBlock(), vue.createElementBlock("i", {
                    key: 0,
                    class: "cu-icon-close",
                    onClick: vue.withModifiers(($event) => item.close(item), ["stop"])
                  }, null, 8, _hoisted_3)) : vue.createCommentVNode("", true)
                ], 4),
                vue.createElementVNode("div", _hoisted_4, [
                  item.props.isVNode ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                    vue.unref(typescript.isString)(item.props.content) ? (vue.openBlock(), vue.createElementBlock("div", {
                      key: 0,
                      innerHTML: item.props.content
                    }, null, 8, _hoisted_5)) : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(item.props.content), { key: 1 }))
                  ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                    vue.createTextVNode(vue.toDisplayString(item.props.content), 1)
                  ], 64))
                ])
              ], 14, _hoisted_1);
            }), 128))
          ]),
          _: 1
        }, 8, ["name"])
      ], 6);
    };
  }
});
exports.default = _sfc_main;
