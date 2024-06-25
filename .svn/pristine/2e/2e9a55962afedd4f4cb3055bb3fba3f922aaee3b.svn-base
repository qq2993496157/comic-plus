<template>
  <button
    class="cu-button"
    :class="[
      type ? 'cu-button--' + type : undefined,
      currentSize,
      { 'is-circle': circle, 'is-round': round, 'is-plain': plain, 'is-disabled': disabled, loading }
    ]"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
    :style="buttonStyle">
    <span
      v-if="loading"
      class="is-loading"
      :class="loadingIcon ?? 'cu-icon-loading'"
      :style="{ marginRight: $slots.default ? '4px' : '0' }"></span>
    <span v-else-if="icon" :class="icon" :style="{ marginRight: $slots.default ? '4px' : '0' }"></span>
    <span>
      <slot></slot>
    </span>
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

const { SIZE, IS_COMIC } = useConfig();
const form = inject(FORM_PROVIDE, undefined);
const group = inject(BUTTONGROUP_PROVIDE, undefined);

const currentSize = computed(() => {
  return props.size ?? group?.props.size ?? form?.props.size ?? SIZE?.value;
});

const buttonStyle = computed(() => {
  if (props.color) {
    const rgba = colorToRgba(props.color);
    if (props.plain) {
      return {
        '--cu-button-border-hover': IS_COMIC?.value ? undefined : props.color,
        '--cu-button-border': IS_COMIC?.value ? undefined : props.color,
        '--cu-button-background-hover': colorBlend(rgba, 10),
        '--cu-button-color': props.color,
        '--cu-button-color-hover': props.color,
        '--cu-button-border-disabled': IS_COMIC?.value ? undefined : colorBlend(rgba, 50),
        '--cu-button-color-disabled': colorBlend(rgba, 50),
        '--cu-button-background-disabled': '#ffffff'
      };
    } else {
      return {
        '--cu-button-background': props.color,
        '--cu-button-border-hover': IS_COMIC?.value ? undefined : colorBlend(rgba, 70),
        '--cu-button-border': IS_COMIC?.value ? undefined : props.color,
        '--cu-button-background-hover': colorBlend(rgba, 70),
        '--cu-button-color': '#ffffff',
        '--cu-button-border-disabled': IS_COMIC?.value ? undefined : colorBlend(rgba, 50),
        '--cu-button-color-disabled': '#ffffff',
        '--cu-button-background-disabled': colorBlend(rgba, 50)
      };
    }
  }
  return undefined;
});
</script>
