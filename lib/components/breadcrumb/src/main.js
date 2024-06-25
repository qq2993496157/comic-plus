"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const main_props = require("./main.props.js");
const type = require("./type.js");
require("../style/breadcrumb.css");
const Breadcrumb = vue.defineComponent({
  name: "CuBreadcrumb",
  props: main_props.breadcrumbProps,
  setup(props, { slots }) {
    vue.provide(type.BREADCRUMB_PROVIDE, { props });
    return () => {
      return vue.h(
        "div",
        {
          class: ["cu-breadcrumb", { fill: props.fill, closeboth: props.closeboth }],
          style: { "--cu-breadcrumb-color": props.color || void 0 }
        },
        slots
      );
    };
  }
});
exports.default = Breadcrumb;
