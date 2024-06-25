import { defineComponent, inject, computed, openBlock, createElementBlock, normalizeStyle, createElementVNode, renderSlot, createTextVNode, toDisplayString, normalizeClass, createVNode, unref, withCtx, withDirectives, vShow } from "vue";
import { CuTransitionCollapse } from "../../transition-collapse/index.mjs";
import { collapseItemProps } from "./item.props.mjs";
import { COLLAPSE_PROVIDE } from "./type.mjs";
const _hoisted_1 = /* @__PURE__ */ createElementVNode("span", { class: "cu-collapse-item__line" }, null, -1);
const _hoisted_2 = { class: "cu-collapse-item__content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuCollapseItem"
  },
  __name: "item",
  props: collapseItemProps,
  setup(__props) {
    const props = __props;
    const { props: injectProps, activeValue, collapseChange } = inject(COLLAPSE_PROVIDE);
    const showItem = computed(() => {
      return injectProps.accordion ? activeValue.value === props.name : activeValue.value.includes(props.name) || false;
    });
    const style = computed(() => {
      return {
        background: injectProps.fill ? props.background ?? injectProps.background : void 0,
        color: props.color ?? injectProps.color
      };
    });
    const changeShow = function() {
      collapseChange(!showItem.value, props.name);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "cu-collapse-item",
        style: normalizeStyle(style.value)
      }, [
        createElementVNode("div", {
          class: "cu-collapse-item__head",
          onClick: changeShow
        }, [
          renderSlot(_ctx.$slots, "head", {}, () => [
            createElementVNode("span", null, [
              renderSlot(_ctx.$slots, "label", {}, () => [
                createTextVNode(toDisplayString(_ctx.label), 1)
              ])
            ]),
            _hoisted_1,
            createElementVNode("span", {
              class: normalizeClass(["cu-icon-right", { active: showItem.value }])
            }, null, 2)
          ])
        ]),
        createVNode(unref(CuTransitionCollapse), null, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", null, [
              createElementVNode("div", _hoisted_2, [
                renderSlot(_ctx.$slots, "default")
              ])
            ], 512), [
              [vShow, showItem.value]
            ])
          ]),
          _: 3
        })
      ], 4);
    };
  }
});
export {
  _sfc_main as default
};
