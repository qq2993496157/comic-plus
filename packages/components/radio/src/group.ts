import { provide, defineComponent, h } from 'vue';
import '../style/radio.css';
import { useItemValidate } from '../../../hooks';
import { radioGroupProps, radioGroupEmits } from './group.props';
import { RADIOGROUP_PROVIDE } from './type';

export default defineComponent({
  name: 'CuRadioGroup',
  props: radioGroupProps,
  emits: radioGroupEmits,
  setup(props, { slots, emit }) {
    const { itemValidate } = useItemValidate();

    function changeItemCheck(value: string | number) {
      emit('update:modelValue', value);
      emit('change', value);

      itemValidate('change');
    }

    provide(RADIOGROUP_PROVIDE, {
      changeItemCheck,
      props
    });

    return () => h('span', { class: 'cu-radio-group' }, slots);
  }
});
