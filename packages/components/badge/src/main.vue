<template>
  <span class="cu-badge" :class="type ? 'cu-badge--' + type : undefined" :style="{ '--cu-badge-color': color }">
    <slot v-if="$slots['default']"></slot>
    <sup
      class="cu-badge__inner"
      v-show="showBadge"
      :style="badgeStyle"
      :class="[{ position: $slots['default'] }, { dot: dot && !$slots['corner'] }]">
      <slot name="corner">{{ dot ? null : currentValue }}</slot>
    </sup>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import '../style/badge.css';
import { isNumber } from '../../../utils';
import { badgeProps } from './main.props';

defineOptions({
  name: 'CuBadge'
});

const props = defineProps(badgeProps);

const currentValue = computed(() => {
  return isNumber(props.value) ? (props.value! > props.max ? props.max + '+' : props.value) : props.value;
});

const showBadge = computed(() => {
  return isNumber(props.value) ? (props.value! <= 0 ? props.zeroShow : true) : true;
});

const badgeStyle = computed(() => {
  let offset = [].concat(props.offset);
  return {
    '--cu-badge-offsetx': offset[0] ? offset[0] + 'px' : undefined,
    '--cu-badge-offsety': offset[1] ? offset[1] + 'px' : undefined,
    maxWidth: props.ellipsis ? '100%' : undefined
  };
});
</script>
