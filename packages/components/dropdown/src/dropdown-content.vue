<template>
  <component
    :is="button ? CButton : 'div'"
    v-bind="attrs"
    class="cu-dropdown-content"
    :class="{ 'is-disabled': disabled }"
    v-click-outside:[popperRef]="hidePopper"
    ref="dropdownTriggerRef">
    <div class="cu-dropdown__trigger">
      <component v-if="button" :is="isVueComponent(buttonIcon) ? buttonIcon : Down" />
      <slot v-else></slot>
    </div>
  </component>
  <popper :show="show" :custom-class="popperClass" :trigger="dropdownTriggerRef">
    <div ref="popperRef" class="cu-dropdown__popper" @click="chooseAfterHideClick">
      <slot name="dropdown"></slot>
    </div>
  </popper>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import '../style/dropdown.css';
import { CuPopper as Popper } from '../../popper';
import { CuButton as CButton } from '../../button';
import { useEventListener } from '@vueuse/core';
import { isVueComponent, useClickOutside } from '../../../utils';
import { dropdownProps } from './main.props';
import { Down } from '../../../icons';

defineOptions({
  name: 'CuDropdownContent'
});

const props = defineProps(dropdownProps);
var timer: number | null,
  clearTriggerEvent: (() => void) | null,
  clearTriggerLeave: (() => void) | null,
  clearPopperEvent: (() => void) | null,
  clearPopperLeave: (() => void) | null;

const vClickOutside = useClickOutside();

const show = ref(false);
const popperRef = ref(null);
const dropdownTriggerRef = ref(null);

const attrs = computed(() => {
  if (!props.button) return null;
  return {
    size: props.size,
    type: props.buttonType,
    disabled: props.disabled
  };
});

const EVENT_TYPE = {
  click: () => {
    clearTriggerEvent = useEventListener(dropdownTriggerRef, 'click', trigger);
  },
  'right-click': () => {
    clearTriggerEvent = useEventListener(dropdownTriggerRef, 'contextmenu', trigger);
  },
  hover: () => {
    clearTriggerEvent = useEventListener(dropdownTriggerRef, 'mouseenter', enter);
    clearTriggerLeave = useEventListener(dropdownTriggerRef, 'mouseleave', startTime);
    clearPopperEvent = useEventListener(popperRef, 'mouseenter', enter);
    clearPopperLeave = useEventListener(popperRef, 'mouseleave', startTime);
  }
};

function enter(e: Event) {
  trigger(e);
  turnTime();
}

function startTime() {
  timer = setTimeout(() => {
    hidePopper();
  }, 300);
}

function turnTime() {
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
}

function trigger(e: Event) {
  e.preventDefault();
  show.value = true;
}

function hidePopper() {
  show.value && (show.value = false);
}

function chooseAfterHideClick() {
  if (props.chooseAfterHide) {
    hidePopper();
  }
}

function clearEvent() {
  clearTriggerEvent?.();
  clearTriggerLeave?.();
  clearPopperEvent?.();
  clearPopperLeave?.();
}

watch(
  [() => props.trigger, () => props.disabled],
  (val) => {
    clearEvent();
    if (val[1]) return;
    EVENT_TYPE[val[0]]?.();
  },
  { immediate: true }
);
</script>
