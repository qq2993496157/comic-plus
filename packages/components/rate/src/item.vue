<template>
  <span class="cu-rate-item" :style="{ color: injectProps.unColor }">
    <template v-if="injectProps.variableIcon">
      <i
        :class="injectProps.variableIcon(activeIdx)"
        class="icon"
        :style="{ color: active ? activeColor : undefined }"></i>
    </template>
    <template v-else-if="rateIcons.length > 0">
      <i :class="rateIcons[active ? 1 : 0]" class="icon" :style="{ color: active ? activeColor : undefined }"></i>
    </template>
    <template v-else>
      <svg width="1em" height="1em" viewBox="0 0 48 48">
        <path
          d="M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z"
          :fill="active ? activeColor : injectProps.disabled ? 'var(--cu-background-color)' : 'none'"
          :stroke="active ? activeColor : injectProps.disabled ? 'var(--cu-background-color)' : injectProps.unColor"
          :stroke-width="active ? 0 : 2"
          stroke-linejoin="round"></path>
      </svg>
    </template>
    <span
      class="mask-rate"
      v-if="hasMask"
      :style="{ width: injectProps.disabled ? getDecimal : undefined }"
      v-show="showMask">
      <template v-if="injectProps.variableIcon">
        <i :class="injectProps.variableIcon(activeIdx)" class="icon" :style="{ color: activeColor }"></i>
      </template>
      <template v-else-if="rateIcons.length > 0">
        <i :class="rateIcons[1]" class="icon" :style="{ color: activeColor }"></i>
      </template>
      <template v-else>
        <svg width="1em" height="1em" viewBox="0 0 48 48">
          <path
            d="M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z"
            :fill="activeColor"
            :stroke="injectProps.disabled ? activeColor : injectProps.unColor"
            stroke-width="2"
            stroke-linejoin="round"></path>
        </svg>
      </template>
    </span>
  </span>
</template>

<script setup lang="ts">
import { computed, ref, inject } from 'vue';
import { RATE_PROVIDE } from './type';

defineOptions({
  name: 'CuRateItem'
});

const props = defineProps({
  current: Number
});

const { props: injectProps, activeIdx, activeColor } = inject(RATE_PROVIDE);
const rateIcons = ref(getIcons());

const active = computed(() => {
  return activeIdx.value >= props.current;
});

const getDecimal = computed(() => {
  return (injectProps.modelValue - Math.floor(injectProps.modelValue)) * 100 + '%';
});

const hasMask = computed(() => {
  return injectProps.allowHalf || (injectProps.disabled && Math.ceil(injectProps.modelValue) === props.current);
});
const showMask = computed(() => {
  return activeIdx.value === props.current - 0.5 || injectProps.disabled;
});

function getIcons() {
  if (!injectProps.icons) return [];

  let result = [].concat(injectProps.icons);

  if (result.length === 1) {
    result.push(result[0]);
  }
  return result;
}
</script>
