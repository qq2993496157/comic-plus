"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const option_props = require("./option.props.js");
const type = require("./type.js");
const Option = vue.defineComponent({
  name: "CuOption",
  props: option_props.optionProps,
  setup(props, { slots }) {
    const { addOption, deleteOption, props: injectProps, optionClick } = vue.inject(type.SELECT_PROVIDE);
    const active = vue.computed(() => {
      if (injectProps.multiple) {
        return injectProps.modelValue.includes(props.value);
      } else {
        return injectProps.modelValue === props.value;
      }
    });
    vue.watch(
      () => props.value,
      (val, old) => {
        deleteOption(old);
        addOption({
          key: val,
          props
        });
      }
    );
    vue.onMounted(() => {
      addOption({
        key: props.value,
        props
      });
    });
    vue.onUnmounted(() => deleteOption(props.value));
    return () => {
      var _a;
      return vue.h(
        "li",
        {
          class: ["cu-option", { "is-active": active.value }, { "is-disabled": props.disabled }],
          onclick: () => optionClick(props.value)
        },
        ((_a = slots.default) == null ? void 0 : _a.call(slots)) ?? props.label
      );
    };
  }
});
exports.default = Option;
