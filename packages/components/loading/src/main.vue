<template>
  <transition name="cu-fade" @before-enter="lookScroll = true" @after-leave="lookScroll = false">
    <div class="cu-loading" :class="{ blur, glabal }" v-show="visible" :style="style">
      <i :class="icon" class="is-loading"></i>
      <span v-if="text" class="cu-loading__text">{{ text }}</span>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick, watch } from 'vue';
import '../style/loading.css';
import { getMaxZIndex, getNextZIndex, useLookScroll } from '../../../utils';
import { loadingProps } from './main.props';
defineOptions({
  name: 'CuLoading'
});

const props = defineProps(loadingProps);

const zIndex = ref(0);

const visible = ref(false);
const lookScroll = ref(false);
if (props.glabal) {
  useLookScroll(lookScroll);
}

const style = computed(() => {
  return {
    'z-index': zIndex.value,
    background: props.background,
    color: props.color
  };
});

function updateVisible(val: boolean) {
  visible.value = val;
}

watch(visible, (val) => {
  if (val) {
    zIndex.value = props.glabal ? getNextZIndex() : getMaxZIndex(props.target);
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
