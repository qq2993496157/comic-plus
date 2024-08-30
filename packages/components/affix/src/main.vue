<template>
  <div class="cu-affix" ref="affixRef" :style="affixStyle">
    <div class="cu-affix__container" ref="containerRef" :class="{ 'is-fixed': isFixed }" :style="affixContainerStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { useElementBounding, useWindowSize } from '@vueuse/core';
import '../style/affix.css';
import { affixProps, affixEmits } from './main.props';

defineOptions({
  name: 'CuAffix'
});

const props = defineProps(affixProps);
const emit = defineEmits(affixEmits);

const affixRef = ref();
const containerEl = ref();
const transform = ref<number>(0);

const { top: refT, bottom: refB, width: refW, height: refH } = useElementBounding(affixRef);
const targetRect = useElementBounding(containerEl);
const { height: windowHeight } = useWindowSize();

const isFixed = computed<boolean>(() => {
  if (!containerEl.value) {
    return props.position === 'top' ? refT.value < props.offset : refB.value + props.offset >= windowHeight.value;
  } else {
    if (props.position === 'top') {
      const difference = targetRect.bottom.value - props.offset - refH.value;
      transform.value = difference < 0 ? difference : 0;
      return refT.value < props.offset && targetRect.bottom.value > 0;
    } else {
      const difference = windowHeight.value - targetRect.top.value - props.offset - refH.value;
      transform.value = difference < 0 ? -difference : 0;
      return windowHeight.value - props.offset < refB.value && windowHeight.value > targetRect.top.value;
    }
  }
});

const affixStyle = computed(() => {
  if (!isFixed.value) return undefined;
  return {
    width: refW.value + 'px',
    height: refH.value + 'px'
  };
});

const affixContainerStyle = computed(() => {
  if (!isFixed.value) return undefined;
  return {
    [props.position]: props.offset + 'px',
    zIndex: props.zIndex,
    transform: `translateY(${transform.value}px)`
  };
});

watch(isFixed, (val) => {
  emit('change', val);
});

onMounted(() => {
  if (props.target) {
    containerEl.value = document.querySelector(props.target);
  } else {
    containerEl.value = document.documentElement;
  }
});
</script>
