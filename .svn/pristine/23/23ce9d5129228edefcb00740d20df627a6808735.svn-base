<template>
  <div class="cu-step-card" :class="{ 'is-finish': isFinish, 'is-active': isCurrent && !error, error }">
    <div class="cu-step-card__header">
      <i :class="currentIcon" v-if="currentIcon" class="cu-step-item__icon"></i>
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <i
      :class="injectProps.direction === 'vertical' ? 'cu-icon-double-down' : 'cu-icon-double-right'"
      class="card-bridge"></i>
  </div>
</template>

<script setup lang="ts">
import { stepItemProps } from './item.props';
import { useStepItem } from './use-item';
defineOptions({
  name: 'CuStepCard'
});
const props = defineProps(stepItemProps);

const { isFinish, isCurrent, currentIcon, injectProps } = useStepItem(props);
</script>
