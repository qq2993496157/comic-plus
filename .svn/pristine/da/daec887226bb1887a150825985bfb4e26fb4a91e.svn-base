<template>
  <teleport to="body">
    <transition name="popper" @after-leave="() => (style['zIndex'] = undefined)">
      <div
        :style="style"
        class="cu-popper"
        ref="popperInner"
        :class="[innerClass, { 'is-hide-arrow': hideArrow }]"
        v-show="show">
        <span class="cu-poper__arrow" v-if="!hideArrow"></span>
        <slot></slot>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { watch, ref, nextTick, onMounted, getCurrentInstance, reactive } from 'vue';
import type { CSSProperties } from 'vue';
import '../style/popper.css';
import { getNextZIndex, useScrollSever } from '../../../utils';
import { popperProps } from './main.props';

defineOptions({
  name: 'CuPopper'
});

const props = defineProps(popperProps);
const instance = getCurrentInstance()!;

const zIndex = ref(0);
const style = reactive({}) as CSSProperties;
const innerClass = ref('top');
const popperInner = ref(null);

const parent = ref<HTMLElement>();

watch(
  () => props.show,
  (val: boolean, old: boolean) => {
    if (!val || val === old) return;
    zIndex.value = getNextZIndex();
    nextTick(() => {
      setPopperStyle();
    });
  }
);

function setPopperStyle() {
  if (!parent.value) return;
  let parentRect = parent.value.getBoundingClientRect();
  let diffw = parentRect?.left + popperInner.value.offsetWidth - document.documentElement.clientWidth;

  if (diffw > 0) {
    style.left = parentRect.left - diffw - 10;
  } else {
    // let pmp = Math.max((popperInner.value.offsetWidth - parentRect.width) / 2, 0);
    style.left = parentRect.left;
    if (props.center) {
      style.left = parentRect.left + parentRect.width / 2 - popperInner.value.offsetWidth / 2;
    }
  }

  if (parentRect.top + parentRect.height + popperInner.value.offsetHeight > document.documentElement.clientHeight) {
    style.bottom = document.documentElement.clientHeight + parentRect.height - parentRect.bottom + 'px';
    style.top = 'auto';
    innerClass.value = 'bottom';
  } else {
    style.top = parentRect.top + parentRect.height + 'px';
    style.bottom = 'auto';
    innerClass.value = 'top';
  }
  style.zIndex = zIndex.value;
  if (!props.hideArrow) {
    if (props.center) {
      let l = parentRect.left + parentRect.width / 2 - style.left;
      if (popperInner.value.offsetWidth < parentRect.width) {
        l = Math.min(l, popperInner.value.offsetWidth / 2);
      }
      style['--cu-popper-arrow-left'] = l + 'px';
    } else {
      style['--cu-popper-arrow-left'] = '25px';
    }
  }
  style.left = Math.max(style.left, 10) + 'px';
}

function setPostion() {
  if (!parent.value || !props.show) return;
  let parentRect = parent.value.getBoundingClientRect();
  if (parentRect.top + parentRect.height + popperInner.value.offsetHeight > document.documentElement.clientHeight) {
    style.top = 'auto';
    style.bottom = document.documentElement.clientHeight + parentRect.height - parentRect.bottom + 'px';
    innerClass.value = 'bottom';
  } else {
    style.top = parentRect.top + parentRect.height + 'px';
    style.bottom = 'auto';
    innerClass.value = 'top';
  }
}

onMounted(() => {
  parent.value = instance.parent?.vnode.el as HTMLElement;
  if (parent.value) {
    useScrollSever(parent.value, () => {
      setPostion();
    });
  }
});
defineExpose({ popperInner });
</script>
