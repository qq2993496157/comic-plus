"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
require("../style/container.css");
const container_props = require("./container.props.js");
const Container = vue.defineComponent({
  name: "CuContainer",
  setup(props, { slots }) {
    const isVertical = vue.computed(() => {
      var _a;
      const vNodes = ((_a = slots.default) == null ? void 0 : _a.call(slots)) ?? [];
      return vNodes.some((vNode) => {
        const tag = vNode.type.name;
        return tag === "CuHeader" || tag === "CuFooter";
      });
    });
    const customStyle = vue.computed(() => {
      return {
        height: props.height
      };
    });
    return () => {
      return vue.h(
        "section",
        { class: ["cu-container", isVertical.value ? "is-vertical" : void 0], style: customStyle.value },
        slots
      );
    };
  },
  props: container_props.containerCommonProps
});
const Aside = vue.defineComponent({
  name: "CuAside",
  setup(props, { slots }) {
    const customStyle = vue.computed(() => {
      return {
        width: props.width,
        height: props.height
      };
    });
    return () => {
      return vue.h("aside", { class: "cu-aside", style: customStyle.value }, slots);
    };
  },
  props: container_props.asideProps
});
const Header = vue.defineComponent({
  name: "CuHeader",
  setup(props, { slots }) {
    const customStyle = vue.computed(() => {
      return {
        height: props.height
      };
    });
    return () => {
      return vue.h("header", { class: "cu-header", style: customStyle.value }, slots);
    };
  },
  props: container_props.containerCommonProps
});
const Main = vue.defineComponent({
  name: "CuMain",
  setup(props, { slots }) {
    const customStyle = vue.computed(() => {
      return {
        height: props.height
      };
    });
    return () => {
      return vue.h("main", { class: "cu-main", style: customStyle.value }, slots);
    };
  },
  props: container_props.containerCommonProps
});
const Footer = vue.defineComponent({
  name: "CuFooter",
  setup(props, { slots }) {
    const customStyle = vue.computed(() => {
      return {
        height: props.height
      };
    });
    return () => {
      return vue.h("footer", { class: "cu-footer", style: customStyle.value }, slots);
    };
  },
  props: container_props.containerCommonProps
});
exports.Aside = Aside;
exports.Container = Container;
exports.Footer = Footer;
exports.Header = Header;
exports.Main = Main;
