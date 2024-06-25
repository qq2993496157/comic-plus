import { defineComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, unref, createVNode, TransitionGroup, withCtx, Fragment, renderList, createElementVNode, createCommentVNode, createTextVNode, toDisplayString, withModifiers, createBlock, resolveDynamicComponent } from "vue";
import { isString } from "../../../../utils/typescript.mjs";
import { getNextZIndex } from "../../../../utils/config.mjs";
const _hoisted_1 = ["onClick"];
const _hoisted_2 = { class: "title" };
const _hoisted_3 = ["onClick"];
const _hoisted_4 = { class: "cu-notice__main" };
const _hoisted_5 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    const zIndex = getNextZIndex();
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
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["cu-notice-popup", "cu-notice-popup--" + __props.position]),
        style: normalizeStyle({ zIndex: unref(zIndex) })
      }, [
        createVNode(TransitionGroup, {
          name: "cu-notice-" + __props.position,
          onAfterLeave: afterLeave
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.list, (item) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(["cu-notice", [item.props.type ? "cu-notice--" + item.props.type : void 0, { "is-click": item.props.click }]]),
                style: normalizeStyle({ "--cu-notice-hovercolor": item.props.color }),
                key: item.id,
                onClick: ($event) => handleClick(item)
              }, [
                createElementVNode("div", {
                  class: "cu-notice__header",
                  style: normalizeStyle({ color: item.props.color })
                }, [
                  createElementVNode("span", _hoisted_2, [
                    item.props.icon || typeList[item.props.type] ? (openBlock(), createElementBlock("i", {
                      key: 0,
                      class: normalizeClass(item.props.icon ?? typeList[item.props.type])
                    }, null, 2)) : createCommentVNode("", true),
                    createTextVNode(" " + toDisplayString(item.props.title), 1)
                  ]),
                  item.props.showClose ? (openBlock(), createElementBlock("i", {
                    key: 0,
                    class: "cu-icon-close",
                    onClick: withModifiers(($event) => item.close(item), ["stop"])
                  }, null, 8, _hoisted_3)) : createCommentVNode("", true)
                ], 4),
                createElementVNode("div", _hoisted_4, [
                  item.props.isVNode ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    unref(isString)(item.props.content) ? (openBlock(), createElementBlock("div", {
                      key: 0,
                      innerHTML: item.props.content
                    }, null, 8, _hoisted_5)) : (openBlock(), createBlock(resolveDynamicComponent(item.props.content), { key: 1 }))
                  ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createTextVNode(toDisplayString(item.props.content), 1)
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
export {
  _sfc_main as default
};
