"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const index = require("../../transition-collapse/index.js");
const item_props = require("./item.props.js");
const type = require("./type.js");
const _hoisted_1 = /* @__PURE__ */ vue.createElementVNode("span", { class: "cu-collapse-item__line" }, null, -1);
const _hoisted_2 = { class: "cu-collapse-item__content" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuCollapseItem"
  },
  __name: "item",
  props: item_props.collapseItemProps,
  setup(__props) {
    const props = __props;
    const { props: injectProps, activeValue, collapseChange } = vue.inject(type.COLLAPSE_PROVIDE);
    const showItem = vue.computed(() => {
      return injectProps.accordion ? activeValue.value === props.name : activeValue.value.includes(props.name) || false;
    });
    const style = vue.computed(() => {
      return {
        background: injectProps.fill ? props.background ?? injectProps.background : void 0,
        color: props.color ?? injectProps.color
      };
    });
    const changeShow = function() {
      collapseChange(!showItem.value, props.name);
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: "cu-collapse-item",
        style: vue.normalizeStyle(style.value)
      }, [
        vue.createElementVNode("div", {
          class: "cu-collapse-item__head",
          onClick: changeShow
        }, [
          vue.renderSlot(_ctx.$slots, "head", {}, () => [
            vue.createElementVNode("span", null, [
              vue.renderSlot(_ctx.$slots, "label", {}, () => [
                vue.createTextVNode(vue.toDisplayString(_ctx.label), 1)
              ])
            ]),
            _hoisted_1,
            vue.createElementVNode("span", {
              class: vue.normalizeClass(["cu-icon-right", { active: showItem.value }])
            }, null, 2)
          ])
        ]),
        vue.createVNode(vue.unref(index.CuTransitionCollapse), null, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createElementVNode("div", null, [
              vue.createElementVNode("div", _hoisted_2, [
                vue.renderSlot(_ctx.$slots, "default")
              ])
            ], 512), [
              [vue.vShow, showItem.value]
            ])
          ]),
          _: 3
        })
      ], 4);
    };
  }
});
exports.default = _sfc_main;
