<template>
  <teleport to="body" :disabled="!fixed">
    <transition name="cu-menu-popper">
      <div
        class="cu-menu-popper"
        ref="popperRef"
        :class="fixed ? className : undefined"
        v-show="show"
        :style="computedStyle"
        @mouseenter="mouseEnter"
        @mouseleave="mouseLeave">
        <slot></slot>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { ref, inject, reactive, onMounted, getCurrentInstance, watch, nextTick } from 'vue';
import type { CSSProperties } from 'vue';
import { getNextZIndex, useScrollSever } from '../../../utils';
import { MENU_PROVIDE } from './type';
defineOptions({
  name: 'CuMenuPopper'
});

const props = defineProps({
  disabled: Boolean,
  fixed: Boolean,
  show: Boolean
});

const emit = defineEmits(['mouse-in', 'mouse-out']);

const popperRef = ref(null);
const className = ref('top');
const { props: injectProps } = inject(MENU_PROVIDE);

const instance = getCurrentInstance()!;
const parent = ref<HTMLElement>(null);

const OFFSET = 10;
let collapseOffsetX = 0;
let collapseOffsetY = 0;

const computedStyle = reactive({
  '--cu-menu-base-height': injectProps.size + 'px'
}) as CSSProperties;

function getStyle() {
  if (!props.show) return;
  const { x, y, width, height } = parent.value.getBoundingClientRect();
  const { width: popperWidth, height: popperHeight } = popperRef.value.getBoundingClientRect();

  if (props.fixed) {
    computedStyle.left = x + collapseOffsetX + 'px';
    let t = y + height + OFFSET;
    if (popperHeight + t > window.innerHeight) {
      computedStyle.top = y - popperHeight - OFFSET - collapseOffsetY + 'px';
      className.value = 'bottom';
    } else {
      computedStyle.top = t + collapseOffsetY + 'px';
      className.value = 'top';
    }
  } else {
    let l = x + width + OFFSET;
    if (popperWidth + l > window.innerWidth) {
      computedStyle.left = 0 - popperWidth - OFFSET + 'px';
    } else {
      computedStyle.left = width + OFFSET + 'px';
    }
  }
}

function mouseEnter() {
  emit('mouse-in');
}

function mouseLeave() {
  emit('mouse-out');
}

watch(
  () => props.show,
  (val) => {
    if (val) {
      computedStyle.zIndex = getNextZIndex();
      nextTick(() => {
        getStyle();
      });
    }
  }
);
watch(
  () => injectProps.collapse,
  (val) => {
    if (val) {
      setTimeout(() => {
        const { width, height } = parent.value.getBoundingClientRect();
        collapseOffsetX = 0 + (width ?? 0) + OFFSET;
        collapseOffsetY = 0 - (height ?? 0) - OFFSET;
      }, 500);
    } else {
      collapseOffsetX = 0;
      collapseOffsetY = 0;
    }
  },
  { immediate: true }
);

onMounted(() => {
  parent.value = instance.parent?.vnode.el as HTMLElement;
  useScrollSever(parent.value, getStyle);
});
</script>
