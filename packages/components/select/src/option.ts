import { defineComponent, h, inject, computed, onMounted, onUnmounted, watch } from 'vue';
import { optionProps } from './option.props';
import { SELECT_PROVIDE } from './type';

export default defineComponent({
  name: 'CuOption',
  props: optionProps,
  setup(props, { slots }) {
    const { addOption, deleteOption, props: injectProps, optionClick } = inject(SELECT_PROVIDE);

    const active = computed(() => {
      if (injectProps.multiple) {
        return (injectProps.modelValue as (string | number)[]).includes(props.value);
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
      return h(
        'li',
        {
          class: ['cu-option', { 'is-active': active.value }, { 'is-disabled': props.disabled }],
          onclick: () => optionClick(props.value)
        },
        slots.default?.() ?? props.label
      );
    };
  }
});
