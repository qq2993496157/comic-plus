<template>
  <div
    class="cu-step-item"
    :style="style"
    :class="{ 'is-finish': isFinish, 'is-active': isCurrent && !error, error, 'is-center': injectProps.center }">
    <div class="cu-step-item__header">
      <span class="cu-step-item__icon" v-if="currentIcon">
        <component :is="currentIcon" />
      </span>
      <span v-else class="cu-step-item__text">{{ currentIndex! + 1 }}</span>
      <span class="cu-step-item__line"></span>
    </div>
    <div class="cu-step-item__main">
      <div class="cu-step-item__title">
        <slot name="title">
          {{ title }}
        </slot>
      </div>
      <div class="cu-step-item__content">
        <slot>
          {{ content }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { stepItemProps } from './item.props';
import { useStepItem } from './use-item';
defineOptions({
  name: 'CuStepItem'
});
const props = defineProps(stepItemProps);

const { instance, itemList, currentIndex, isFinish, isCurrent, currentIcon, maxWidth, injectProps } =
  useStepItem(props);

const style = computed(() => {
  if (injectProps.direction === 'vertical') {
    if (instance.uid === itemList.value[itemList.value.length - 1]) return undefined;
    return {
      flexBasis: 100 / (itemList.value.length - 1) + '%'
    };
  } else if (injectProps.center) {
    return {
      flexBasis: 100 / itemList.value.length + '%'
    };
  } else if (instance.uid === itemList.value[itemList.value.length - 1]) {
    return {
      maxWidth: maxWidth.value + '%'
    };
  } else {
    return {
      flexBasis: 100 / (itemList.value.length! - 1) + '%'
    };
  }
});
</script>
