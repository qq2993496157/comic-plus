import { computed, inject } from 'vue';
import { useConfig } from '../../../utils';
import { useItemValidate } from '../../../hooks';
import type { RadioProps, RadioEmits } from './main.props';
import type { SetupContext } from 'vue';
import { FORM_PROVIDE } from '../../form/src/type';
import { RADIOGROUP_PROVIDE } from './type';

export const useRadio = (props: RadioProps, emit: SetupContext<RadioEmits>['emit']) => {
  const { itemValidate } = useItemValidate();
  const { SIZE } = useConfig();

  const radioGroup = inject(RADIOGROUP_PROVIDE, undefined);
  const form = inject(FORM_PROVIDE, undefined);

  const currentSize = computed(() => {
    return props.size ?? radioGroup?.props.size ?? form?.props.size ?? SIZE?.value;
  });

  const isCheck = computed(() => {
    return radioGroup ? radioGroup.props.modelValue === props.value : props.modelValue === props.value;
  });

  function changeValue() {
    if (radioGroup) {
      radioGroup.changeItemCheck(props.value);
      return;
    }
    emit('update:modelValue', props.value);
    emit('change', isCheck.value);
    itemValidate('change');
  }

  return {
    currentSize,
    isCheck,
    changeValue
  };
};
