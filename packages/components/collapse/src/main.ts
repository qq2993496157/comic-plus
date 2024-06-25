import { ref, provide, defineComponent, h } from 'vue';
import '../style/collapse.css';
import { COLLAPSE_PROVIDE } from './type';
import { collapseProps, collapseEmits } from './main.props';

export default defineComponent({
  name: 'CuCollapse',
  props: collapseProps,
  emits: collapseEmits,
  setup(props, { slots, emit }) {
    const activeValue = ref<string | string[]>(props.modelValue);

    function collapseChange(show: boolean, name: string) {
      if (props.accordion) {
        activeValue.value = show ? name : '';
      } else {
        let activeValueArray = activeValue.value as string[];
        if (show) {
          activeValueArray.push(name);
        } else {
          activeValueArray.splice(
            activeValueArray.findIndex((v: string) => v === name),
            1
          );
        }
      }
      updateValue();
    }
    function updateValue() {
      emit('update:modelValue', activeValue.value);
      emit('change', activeValue.value);
    }

    provide(COLLAPSE_PROVIDE, {
      activeValue,
      props,
      collapseChange
    });

    return () => {
      return h(
        'div',
        {
          class: ['cu-collapse', { fill: props.fill }],
          style: props.fill && props.gap ? `--cu-collapse-gap:${props.gap}px` : undefined
        },
        slots
      );
    };
  }
});
