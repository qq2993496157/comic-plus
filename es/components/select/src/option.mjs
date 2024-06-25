import { defineComponent, inject, computed, watch, onMounted, onUnmounted, h } from "vue";
import { optionProps } from "./option.props.mjs";
import { SELECT_PROVIDE } from "./type.mjs";
const Option = defineComponent({
  name: "CuOption",
  props: optionProps,
  setup(props, { slots }) {
    const { addOption, deleteOption, props: injectProps, optionClick } = inject(SELECT_PROVIDE);
    const active = computed(() => {
      if (injectProps.multiple) {
        return injectProps.modelValue.includes(props.value);
      } else {
        return injectProps.modelValue === props.value;
      }
    });
    watch(
      () => props.value,
      (val, old) => {
        deleteOption(old);
        addOption({
          key: val,
          props
        });
      }
    );
    onMounted(() => {
      addOption({
        key: props.value,
        props
      });
    });
    onUnmounted(() => deleteOption(props.value));
    return () => {
      var _a;
      return h(
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
export {
  Option as default
};
