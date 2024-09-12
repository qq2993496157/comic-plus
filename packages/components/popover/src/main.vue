<template>
  <only-child ref="triggerRef">
    <slot />
  </only-child>
  <popper
    :show="show"
    :effect="effect"
    :offset="offset"
    :custom-class="popperClass"
    :trigger="triggerRef"
    :placement="placement"
    transition-name="cu-fade">
    <div class="cu-popover__container" :style="containerStyle" ref="popperRef">
      <slot name="content">
        <div class="cu-popover__title" v-if="title">{{ title }}</div>
        <div class="cu-popover__content" v-if="content">{{ content }}</div>
      </slot>
    </div>
  </popper>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import '../style/popover.css';
import { useElementHover, useEventListener, onClickOutside } from '@vueuse/core';
import OnlyChild from '../../only-child';
import { CuPopper as Popper } from '../../popper';
import { isBoolean } from '../../../utils';
import { popoverProps } from './main.props';

defineOptions({
  name: 'CuPopover'
});

const props = defineProps(popoverProps);

const popperRef = ref();
const triggerRef = ref();

const containerStyle = computed(() => {
  return {
    width: props.width + 'px'
  };
});

const hoverProper = useElementHover(popperRef, {
  delayLeave: 300
});

const triggerFn = {
  hover: () => {
    return useElementHover(triggerRef, {
      delayLeave: 300
    });
  },
  click: () => {
    const clicks = ref(false);
    useEventListener(triggerRef, 'click', () => {
      clicks.value = !isShow.value;
    });
    return clicks;
  },
  contextmenu: () => {
    const clicks = ref(false);
    useEventListener(triggerRef, 'contextmenu', (e) => {
      e.preventDefault();
      clicks.value = !isShow.value;
    });
    return clicks;
  }
};

const isShow = isBoolean(props.visible) ? undefined : triggerFn[props.trigger]?.();

if (props.trigger === 'click' || props.trigger === 'contextmenu') {
  onClickOutside(
    popperRef,
    () => {
      isShow.value && (isShow.value = false);
    },
    {
      ignore: [triggerRef]
    }
  );
}

const show = computed(() => {
  if (isBoolean(props.visible)) return props.visible;
  if (props.trigger === 'hover') {
    return isShow.value || hoverProper.value;
  }
  return isShow.value;
});
</script>
