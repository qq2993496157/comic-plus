import { defineComponent, provide, h } from "vue";
import { breadcrumbProps } from "./main.props.mjs";
import { BREADCRUMB_PROVIDE } from "./type.mjs";
import "../style/breadcrumb.css";
const Breadcrumb = defineComponent({
  name: "CuBreadcrumb",
  props: breadcrumbProps,
  setup(props, { slots }) {
    provide(BREADCRUMB_PROVIDE, { props });
    return () => {
      return h(
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
export {
  Breadcrumb as default
};
