import { defineComponent, ref, watch, openBlock, createElementBlock, mergeProps, Fragment, renderList, renderSlot, createElementVNode, createBlock, unref, normalizeProps } from "vue";
import "../style/skeleton.css";
import "../../../utils/config.mjs";
import { throttle } from "../../../utils/tools.mjs";
import { CuSkeletonItem } from "../../skeleton-item/index.mjs";
import { skeletonProps } from "./main.props.mjs";
const _hoisted_1 = { class: "template-default" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuSkeleton"
  },
  __name: "main",
  props: skeletonProps,
  setup(__props) {
    const props = __props;
    const isReady = ref(true);
    const throttleReady = throttle(() => {
      isReady.value = true;
    }, props.throttle);
    watch(
      () => props.loading,
      (val) => {
        if (!val) {
          isReady.value = false;
          throttleReady();
        }
      }
    );
    return (_ctx, _cache) => {
      return !isReady.value || _ctx.loading ? (openBlock(), createElementBlock("div", mergeProps({
        key: 0,
        class: ["cu-skeleton", { animated: _ctx.animated }]
      }, _ctx.$attrs), [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.count, (_) => {
          return renderSlot(_ctx.$slots, "template", {}, () => [
            createElementVNode("div", _hoisted_1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.rows, (_2) => {
                return openBlock(), createBlock(unref(CuSkeletonItem));
              }), 256))
            ])
          ]);
        }), 256))
      ], 16)) : renderSlot(_ctx.$slots, "default", normalizeProps(mergeProps({ key: 1 }, _ctx.$attrs)));
    };
  }
});
export {
  _sfc_main as default
};
