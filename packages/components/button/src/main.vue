<template>
  <button
    class="cu-button"
    :class="buttonClassList"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
    :style="buttonStyle">
    <span
      v-if="loading"
      class="is-loading"
      :class="loadingIcon ?? 'cu-icon-loading'"
      :style="{ marginRight: $slots.default ? '4px' : '0' }"></span>
    <span v-else-if="icon" :class="icon" :style="{ marginRight: $slots.default ? '4px' : '0' }"></span>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue';
import '../style/button.css';
import { FORM_PROVIDE } from '../../form/src/type';
import { buttonProps, buttonEmits } from './main.props';
import { useConfig, colorToRgba, colorBlend } from '../../../utils';
import { BUTTONGROUP_PROVIDE } from './type';

defineOptions({
  name: 'CuButton'
});

const props = defineProps(buttonProps);
const emit = defineEmits(buttonEmits);

const { SIZE } = useConfig();
const form = inject(FORM_PROVIDE, undefined);
const group = inject(BUTTONGROUP_PROVIDE, undefined);

const currentSize = computed(() => {
  return props.size ?? group?.props.size ?? form?.props.size ?? SIZE?.value;
});

const buttonExtraClass = computed(() => {
  return props.plain ? 'plain' : props.light ? 'light' : props.dashed ? 'dashed' : props.text ? 'text' : undefined;
});

const buttonClassList = computed(() => {
  return [
    props.type && 'cu-button--' + props.type,
    currentSize.value,
    { 'is-raised': props.raised },
    { 'is-circle': props.circle },
    { 'is-round': props.round },
    buttonExtraClass.value && 'is-' + buttonExtraClass.value
  ];
});

const buttonStyle = computed(() => {
  if (props.color) {
    const rgba = colorToRgba(props.color);
    if (props.plain) {
      return {
        '--cu-button-color': props.color,
        '--cu-button-color-hover': '#ffffff',
        '--cu-button-color-disabled': colorBlend(rgba, 60),
        '--cu-button-border': props.color,
        '--cu-button-border-hover': props.color,
        '--cu-button-border-disabled': colorBlend(rgba, 60),
        '--cu-button-background': colorBlend(rgba, 10),
        '--cu-button-background-hover': props.color,
        '--cu-button-background-disabled': colorBlend(rgba, 10)
      };
    } else if (props.light) {
      return {
        '--cu-button-color': props.color,
        '--cu-button-color-hover': props.color,
        '--cu-button-color-disabled': colorBlend(rgba, 60),
        '--cu-button-border': props.color,
        '--cu-button-border-hover': props.color,
        '--cu-button-border-disabled': colorBlend(rgba, 60),
        '--cu-button-background-hover': colorBlend(rgba, 10)
      };
    } else if (props.text) {
      return {
        '--cu-button-color': props.color,
        '--cu-button-color-hover': props.color,
        '--cu-button-color-disabled': colorBlend(rgba, 60),
        '--cu-button-background-hover': colorBlend(rgba, 10),
        '--cu-button-background-active': colorBlend(rgba, 20)
      };
    } else if (props.dashed) {
      return {
        '--cu-button-color-hover': props.color,
        '--cu-button-border-hover': props.color,
        '--cu-button-border-active': colorBlend(rgba, 20)
      };
    } else {
      return {
        '--cu-button-background': props.color,
        '--cu-button-border-hover': colorBlend(rgba, 70),
        '--cu-button-border': props.color,
        '--cu-button-background-hover': colorBlend(rgba, 70),
        '--cu-button-color': '#ffffff',
        '--cu-button-border-disabled': colorBlend(rgba, 50),
        '--cu-button-color-disabled': '#ffffff',
        '--cu-button-background-disabled': colorBlend(rgba, 50)
      };
    }
  }
  return undefined;
});
</script>
