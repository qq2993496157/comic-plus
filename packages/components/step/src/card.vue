<template>
  <div class="cu-step-card" :class="{ 'is-finish': isFinish, 'is-active': isCurrent && !error, error }">
    <div class="cu-step-card__header">
      <component :is="currentIcon" v-if="currentIcon" class="cu-step-item__icon" />
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <component :is="injectProps.direction === 'vertical' ? DoubleDown : DoubleRight" class="card-bridge" />
  </div>
</template>

<script setup lang="ts">
import { DoubleDown, DoubleRight } from '../../../icons';
import { stepItemProps } from './item.props';
import { useStepItem } from './use-item';
defineOptions({
  name: 'CuStepCard'
});
const props = defineProps(stepItemProps);

const { isFinish, isCurrent, currentIcon, injectProps } = useStepItem(props);
</script>
