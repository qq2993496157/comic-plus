<template>
  <teleport to="body">
    <div class="cu-popper-warpper" ref="popperRef" :style="{ ...floatingStyles, zIndex }">
      <transition name="popper" @after-leave="() => (zIndex = 0)">
        <div class="cu-popper" :data-placement="placement" v-show="show">
          <span
            class="cu-popper__arrow"
            ref="arrowRef"
            v-if="!hideArrow"
            :style="{
              position: 'absolute',
              left: arrowLeft ? '20px' : middlewareData.arrow?.x != null ? `${middlewareData.arrow.x}px` : '20px'
            }"></span>
          <slot></slot>
        </div>
      </transition>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { watch, ref, onMounted, getCurrentInstance, computed } from 'vue';
import '../style/popper.css';
import { getNextZIndex } from '../../../utils';
import { popperProps } from './main.props';
import { useFloating, offset, arrow, flip, autoUpdate, shift } from '@floating-ui/vue';

defineOptions({
  name: 'CuPopper'
});

const props = defineProps(popperProps);
const instance = getCurrentInstance()!;

const zIndex = ref(0);

const arrowRef = ref(null);
const popperRef = ref(null);
const triggerRef = ref(null);
var cleanup: (() => void) | null;

const middleware = computed(() => {
  return [offset(props.offset), flip(), shift({ padding: 10 }), arrow({ element: arrowRef })];
});

const { floatingStyles, middlewareData, placement, update } = useFloating(triggerRef, popperRef, {
  placement: props.placement,
  middleware
});

watch(
  () => props.show,
  (val: boolean, old: boolean) => {
    if (val && val !== old) {
      zIndex.value = getNextZIndex();
    }

    if (val) {
      if (triggerRef.value && popperRef.value) {
        cleanup = autoUpdate(triggerRef.value, popperRef.value, update);
      }
    } else {
      cleanup();
    }
  }
);

onMounted(() => {
  triggerRef.value = instance.parent?.vnode.el as HTMLElement;
});
</script>
