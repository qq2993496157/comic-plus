"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/anchor.css");
const scroll = require("../utils/scroll.js");
const type = require("./type.js");
const link_props = require("./link.props.js");
const _hoisted_1 = ["href", "data-href"];
const _hoisted_2 = {
  key: 0,
  class: "cu-anchor-sub-link"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuAnchorLink"
  },
  __name: "link",
  props: link_props.anchorLinkProps,
  setup(__props) {
    const props = __props;
    const anchor = vue.inject(type.ANCHOR_PROVIDE, void 0);
    const linkRef = vue.ref(null);
    vue.watch(
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
        scroll.animateScrollTo(window, window.scrollY, to, 300);
      }
      return false;
    }
    vue.onUnmounted(() => {
      anchor == null ? void 0 : anchor.removeLinkItem(props.href);
    });
    return (_ctx, _cache) => {
      var _a, _b;
      return vue.openBlock(), vue.createElementBlock("li", {
        class: vue.normalizeClass(["cu-anchor-link", { underline: _ctx.underline }])
      }, [
        vue.createElementVNode("a", {
          href: _ctx.href,
          "data-href": _ctx.href,
          class: vue.normalizeClass({ active: ((_a = vue.unref(anchor)) == null ? void 0 : _a.currentHref.value) === _ctx.href }),
          ref_key: "linkRef",
          ref: linkRef,
          onClick: linkHandleClick
        }, [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createTextVNode(vue.toDisplayString(_ctx.title), 1)
          ])
        ], 10, _hoisted_1),
        _ctx.$slots["sub-link"] && ((_b = vue.unref(anchor)) == null ? void 0 : _b.props.direction) === "vertical" ? (vue.openBlock(), vue.createElementBlock("ul", _hoisted_2, [
          vue.renderSlot(_ctx.$slots, "sub-link")
        ])) : vue.createCommentVNode("", true)
      ], 2);
    };
  }
});
exports.default = _sfc_main;
