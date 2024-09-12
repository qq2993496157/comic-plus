import { ref, watch } from 'vue';
import { isFunction } from '../utils/typescript';

export function usePopup(props: any, emit?: any) {
  const visible = ref(props.modelValue);
  const showMode = ref(props.modelValue);

  const onAfterEnter = () => {
    visible.value = true;
  };

  const modeHandleClick = () => {
    if (!props.modeClose) return;
    if (visible.value) {
      close();
    }
  };

  const close = () => {
    if (isFunction(props.beforeClose)) {
      props.beforeClose(done);
    } else {
      done();
    }
  };
  const done = () => {
    visible.value = false;
  };

  const onAfterLeave = () => {
    showMode.value = false;
    emit?.('update:modelValue', false);
  };

  watch(
    () => props.modelValue,
    (val) => {
      if (val) {
        showMode.value = true;
      } else {
        visible.value = false;
      }
    }
  );

  return {
    visible,
    showMode,
    onAfterEnter,
    modeHandleClick,
    onAfterLeave,
    close
  };
}
