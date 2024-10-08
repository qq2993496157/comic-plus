import { defineComponent, h, provide, ref, computed } from 'vue';
import { CHECKBOXGROUP_PROVIDE } from './type';
import { ArrayMix } from '../../../utils';
import { useItemValidate } from '../../../hooks';
import { checkboxGroupProps, checkboxGroupEmits } from './group.props';

export default defineComponent({
  name: 'CuCheckboxGroup',
  props: checkboxGroupProps,
  emits: checkboxGroupEmits,
  setup(props, { slots, emit }) {
    const { itemValidate } = useItemValidate();

    const activeValue = ref<ArrayMix<string | number>>(props.modelValue);

    function changeItemCheck(val: boolean, value: string | number) {
      if (val) {
        activeValue.value.push(value);
      } else {
        activeValue.value.splice(
          activeValue.value.findIndex((v: string | number) => v === value),
          1
        );
      }
      emit('update:modelValue', activeValue.value);
      emit('change', activeValue.value);
      itemValidate('change');
    }
    const groupSize = computed(() => props.size);

    provide(CHECKBOXGROUP_PROVIDE, {
      groupSize,
      activeValue,
      changeItemCheck
    });

    return () => {
      return h('span', { class: 'cu-checkbox-group' }, slots);
    };
  }
});
