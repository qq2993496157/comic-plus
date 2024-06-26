<template>
  <component
    :is="button ? CuButton : 'div'"
    :size="size"
    :type="buttonType"
    :disabled="disabled"
    class="cu-dropdown-content"
    :class="{ 'is-disabled': disabled }"
    v-click-outside:[popperRef]="hidePopper"
    ref="dropdownTriggerRef">
    <div class="cu-dropdown__trigger">
      <template v-if="button">
        <i :class="buttonIcon"></i>
      </template>
      <slot v-else></slot>
    </div>
    <cu-popper :show="show">
      <div ref="popperRef" class="cu-dropdown__popper" @click="chooseAfterHideClick">
        <slot name="dropdown"></slot>
      </div>
    </cu-popper>
  </component>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import '../style/dropdown.css';
import { CuPopper } from '../../popper';
import { CuButton } from '../../button';
import { useEventListener } from '@vueuse/core';
import { useClickOutside } from '../../../utils';
import { dropdownProps } from './main.props';

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
