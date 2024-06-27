import { inject, ref, computed } from 'vue';
import { SLIDER_PROVIDE } from '../type';
import { useEventListener } from '@vueuse/core';

export const useSliderButton = (props, emit) => {
  const { props: injectProps, containerRef, updateValue } = inject(SLIDER_PROVIDE);

  const isMouseEnter = ref(false);
  const isMouseDown = ref(false);
  const recordValue = ref(0);

  function onmousedown(e: MouseEvent) {
    if (injectProps.disabled) return;
    e.preventDefault();
    isMouseDown.value = true;
    setRecordValue(e.clientX - containerRef.value.getBoundingClientRect().left);

    let clearMoveFn = useEventListener(document, 'mousemove', onmousemove);
    let clearUp = useEventListener(document, 'mouseup', () => {
      clearMoveFn();
      clearUp();
      isMouseDown.value = false;
      updateValue();
    });
  }

  function onmousemove(e: MouseEvent) {
    setRecordValue(e.clientX - containerRef.value.getBoundingClientRect().left);
  }

  function setRecordValue(value: number) {
    let rect = containerRef.value.getBoundingClientRect();
    value = Math.max(0, value);
    value = Math.min(rect.width, value);

    emit('update:modelValue', value);
  }

  return {
    injectProps,
    isMouseEnter,
    isMouseDown,
    recordValue,
    onmousedown,
    onmousemove
  };
};
