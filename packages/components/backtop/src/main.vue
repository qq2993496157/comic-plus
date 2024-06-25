<template>
  <teleport to="body">
    <transition name="cu-fade">
      <div v-if="show" class="cu-backtop" :style="style" @click="backTop">
        <slot>
          <div class="cu-backtop__container">
            <i class="cu-icon-up-filled"></i>
          </div>
        </slot>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, warn } from 'vue';
import { useEventListener } from '@vueuse/core';
import '../style/backtop.css';
import { getNextZIndex, isNumber } from '../../../utils';
import { backtopProps } from './main.props';

defineOptions({
  name: 'CuBacktop'
});

const props = defineProps(backtopProps);

const targetDom = ref(null);
const show = ref<boolean>(false);
const zIndex = getNextZIndex();

const style = computed(() => {
  return {
    '--cu-backtop-size': isNumber(props.size) ? props.size + 'px' : props.size,
    zIndex,
    right: isNumber(props.right) ? props.right + 'px' : props.right,
    bottom: isNumber(props.bottom) ? props.bottom + 'px' : props.bottom
  };
});

function backTop() {
  let el = targetDom.value === document ? document.documentElement : (targetDom.value as HTMLElement);
  el.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function onScroll(e) {
  let top = e.target.scrollTop || e.target?.scrollingElement?.scrollTop;
  show.value = top >= props.visibleHeight;
}

useEventListener(targetDom, 'scroll', onScroll);

onMounted(() => {
  targetDom.value = document;
  if (props.target) {
    targetDom.value = document.querySelector(props.target) as HTMLElement;

    if (!targetDom.value) {
      warn(`Unable to find element bound to ${props.target}`);
    }
  }
});
</script>
