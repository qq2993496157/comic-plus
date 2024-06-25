"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/skeleton.css");
require("../../../utils/config.js");
const tools = require("../../../utils/tools.js");
const index = require("../../skeleton-item/index.js");
const main_props = require("./main.props.js");
const _hoisted_1 = { class: "template-default" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuSkeleton"
  },
  __name: "main",
  props: main_props.skeletonProps,
  setup(__props) {
    const props = __props;
    const isReady = vue.ref(true);
    const throttleReady = tools.throttle(() => {
      isReady.value = true;
    }, props.throttle);
    vue.watch(
      () => props.loading,
      (val) => {
        if (!val) {
          isReady.value = false;
          throttleReady();
        }
      }
    );
    return (_ctx, _cache) => {
      return !isReady.value || _ctx.loading ? (vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
        key: 0,
        class: ["cu-skeleton", { animated: _ctx.animated }]
      }, _ctx.$attrs), [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.count, (_) => {
          return vue.renderSlot(_ctx.$slots, "template", {}, () => [
            vue.createElementVNode("div", _hoisted_1, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.rows, (_2) => {
                return vue.openBlock(), vue.createBlock(vue.unref(index.CuSkeletonItem));
              }), 256))
            ])
          ]);
        }), 256))
      ], 16)) : vue.renderSlot(_ctx.$slots, "default", vue.normalizeProps(vue.mergeProps({ key: 1 }, _ctx.$attrs)));
    };
  }
});
exports.default = _sfc_main;
