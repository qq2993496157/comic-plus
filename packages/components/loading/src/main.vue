<template>
  <transition name="cu-fade" @before-enter="lookScroll = true" @after-leave="lookScroll = false">
    <div class="cu-loading" :class="{ blur, global }" v-show="visible" :style="style">
      <component :is="iconRender" class="is-loading cu-loading__icon" />
      <span v-if="text" style="margin-top: 4px">{{ text }}</span>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick, watch, isVNode } from 'vue';
import '../style/loading.css';
import { getMaxZIndex, getNextZIndex, isVueComponent, useGlobal, useLookScroll } from '../../../utils';
import { loadingProps } from './main.props';
defineOptions({
  name: 'CuLoading'
});

const props = defineProps(loadingProps);

const zIndex = ref(0);
const visible = ref(false);
const lookScroll = ref(false);
const { globalLoadingRender } = useGlobal();

if (props.global) {
  useLookScroll(lookScroll);
}

const style = computed(() => {
  return {
    'z-index': zIndex.value,
    background: props.background,
    color: props.color
  };
});

const isCanRender = (value: any) => {
  return isVueComponent(value) || isVNode(value);
};

const iconRender = computed(() => {
  return isCanRender(props.icon)
    ? props.icon
    : isCanRender(globalLoadingRender.value)
    ? globalLoadingRender.value
    : null;
});

function updateVisible(val: boolean) {
  visible.value = val;
}

watch(visible, (val) => {
  if (val) {
    zIndex.value = props.global ? getNextZIndex() : getMaxZIndex(props.target);
  }
});

onMounted(() => {
  const position = window.getComputedStyle(props.target).position;
  if (position === 'static') {
    props.target.style.setProperty('position', 'relative');
  }
  nextTick(() => {
    visible.value = props.defaultVisible;
  });
});

defineExpose({
  visible,
  updateVisible
});
</script>
