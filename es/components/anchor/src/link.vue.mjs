import { defineComponent, inject, ref, watch, onUnmounted, openBlock, createElementBlock, normalizeClass, createElementVNode, unref, renderSlot, createTextVNode, toDisplayString, createCommentVNode } from "vue";
import "../style/anchor.css";
import { animateScrollTo } from "../utils/scroll.mjs";
import { ANCHOR_PROVIDE } from "./type.mjs";
import { anchorLinkProps } from "./link.props.mjs";
const _hoisted_1 = ["href", "data-href"];
const _hoisted_2 = {
  key: 0,
  class: "cu-anchor-sub-link"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "CuAnchorLink"
  },
  __name: "link",
  props: anchorLinkProps,
  setup(__props) {
    const props = __props;
    const anchor = inject(ANCHOR_PROVIDE, void 0);
    const linkRef = ref(null);
    watch(
      () => props.href,
      (val, old) => {
        anchor == null ? void 0 : anchor.removeLinkItem(old);
        if (val) {
          anchor == null ? void 0 : anchor.addLinkItem({
            href: val,
            ele: linkRef
          });
        }
      }
    );
    anchor == null ? void 0 : anchor.addLinkItem({
      href: props.href,
      ele: linkRef
    });
    function linkHandleClick() {
      if (anchor) {
        anchor == null ? void 0 : anchor.handleClick(props.href);
      } else {
        let el = document.querySelector(props.href);
        let to = el.getBoundingClientRect().top + window.scrollY - props.offset;
        animateScrollTo(window, window.scrollY, to, 300);
      }
      return false;
    }
    onUnmounted(() => {
      anchor == null ? void 0 : anchor.removeLinkItem(props.href);
    });
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createElementBlock("li", {
        class: normalizeClass(["cu-anchor-link", { underline: _ctx.underline }])
      }, [
        createElementVNode("a", {
          href: _ctx.href,
          "data-href": _ctx.href,
          class: normalizeClass({ active: ((_a = unref(anchor)) == null ? void 0 : _a.currentHref.value) === _ctx.href }),
          ref_key: "linkRef",
          ref: linkRef,
          onClick: linkHandleClick
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.title), 1)
          ])
        ], 10, _hoisted_1),
        _ctx.$slots["sub-link"] && ((_b = unref(anchor)) == null ? void 0 : _b.props.direction) === "vertical" ? (openBlock(), createElementBlock("ul", _hoisted_2, [
          renderSlot(_ctx.$slots, "sub-link")
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
