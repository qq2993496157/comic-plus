import { getCurrentInstance, computed, inject, onMounted, onBeforeUnmount } from 'vue';
import type { StepItemProps } from './item.props';
import { STEP_PROVIDE } from './type';

export const useStepItem = (props: StepItemProps) => {
  const instance = getCurrentInstance()!;
  const { props: injectProps, addItem, removeItem, itemList, maxWidth } = inject(STEP_PROVIDE);

  const isFinish = computed(() => {
    if (!injectProps.active) return false;
    return itemList.value.findIndex((id) => id === instance.uid) < injectProps.active;
  });

  const isCurrent = computed(() => {
    if (injectProps.active === null || injectProps.active === undefined) return false;
    return currentIndex.value === injectProps.active;
  });

  const currentIndex = computed(() => {
    return itemList.value.findIndex((id: number) => id === instance.uid);
  });

  const currentIcon = computed(() => {
    if (props.icon) return props.icon;
    if (isCurrent.value) {
      return props.error ? 'cu-icon-close-filled' : false;
    }
    return isFinish.value ? 'cu-icon-check-one' : false;
  });

  onMounted(() => {
    addItem(instance.uid);
  });
  onBeforeUnmount(() => {
    removeItem(instance.uid);
  });

  return {
    instance,
    injectProps,
    addItem,
    removeItem,
    itemList,
    isFinish,
    isCurrent,
    currentIndex,
    currentIcon,
    maxWidth
  };
};
