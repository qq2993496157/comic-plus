<template>
  <label
    class="cu-radio-button"
    :style="{
      '--cu-radio-active-color': activeColor
    }"
    :class="[{ 'is-disabled': disabled, 'is-checked': isCheck }, currentSize]">
    <input type="radio" v-show="false" :disabled="disabled" :checked="isCheck" :value="value" @change="changeValue" />
    <span class="cu-radio__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import '../style/radio.css';
import { radioProps, radioEmits } from './main.props';
import { useRadio } from './use-radio';
defineOptions({
  name: 'CuRadioButton'
});
const props = defineProps(radioProps);
const emit = defineEmits(radioEmits);

const { isCheck, changeValue, currentSize } = useRadio(props, emit);
</script>
