<template>
  <span
    class="cu-tip"
    :class="[
      { 'is-plain': plain },
      type ? 'cu-tip--' + type : undefined,
      size ?? globalSize,
      { 'hover-pause': isHoverPause },
      { 'rolling-mode': rolling },
      { 'is-rolling': rolling && isRolling }
    ]"
    :style="tipStyle"
    ref="tipRef">
    <component class="cu-tip__icon" v-if="isVueComponent(icon)" :is="icon" />
    <span class="cu-tip__content" ref="tipContentRef">
      <span class="cu-tip__position" :style="{ '--threshold-x': 0 - thresholdX + 'px', animationDuration: duration }">
        <span class="cu-tip-message-box" ref="tipPositionRef">
          <slot></slot>
        </span>
      </span>
    </span>
    <CloseOne class="cu-tip__close" v-if="closable" @click="emit('close')" />
  </span>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import '../style/tip.css';
import { useGlobal, isVueComponent } from '../../../utils';
import { tipProps, tipEmits } from './main.props';
import { CloseOne } from '../../../icons';
import { useResize } from '../../../hooks';

defineOptions({
  name: 'CuTip'
});

const props = defineProps(tipProps);
const emit = defineEmits(tipEmits);

const tipRef = ref(null);
const tipContentRef = ref(null);
const tipPositionRef = ref(null);

const thresholdX = ref(0);
const duration = ref('25s');
const isRolling = ref(false);
const cloendEle = ref<HTMLElement>();

const { globalSize } = useGlobal();

const isHoverPause = computed(() => props.rolling && isRolling.value && props.hoverPause);

const tipStyle = computed(() => {
  if (!props.color) return undefined;
  return {
    backgroundColor: props.plain ? `color-mix(in srgb, ${props.color}, white 90%)` : props.color,
    color: props.plain ? props.color : '#fff'
  };
});

function determineScroll() {
  if (!tipContentRef.value) return;
  let rect = tipContentRef.value.getBoundingClientRect();
  let pRect = tipPositionRef.value.getBoundingClientRect();
  if (pRect.width > rect.width) {
    if (!cloendEle.value) {
      cloendEle.value = tipPositionRef.value.cloneNode(true);
      tipPositionRef.value.parentNode.appendChild(cloendEle.value);
    }
    cloendEle.value.style.setProperty('margin-left', rect.width / 4 + 'px');
    duration.value = Math.floor(pRect.width / 25) + 's';
    thresholdX.value = pRect.width + rect.width / 4;
    isRolling.value = true;
  } else {
    cloendEle.value && tipPositionRef.value.parentNode.removeChild(cloendEle.value);
    cloendEle.value = null;
    isRolling.value = false;
  }
}

useResize(
  tipRef,
  () => {
    if (props.rolling) {
      determineScroll();
    }
  },
  { immediate: true }
);
</script>
