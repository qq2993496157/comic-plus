<template>
  <label
    class="cu-radio"
    :style="{ '--cu-radio-active-color': activeColor }"
    :class="[{ 'is-disabled': props.disabled }, currentSize]">
    <input type="radio" v-show="false" :disabled="props.disabled" :checked="isCheck" @change="changeValue" />
    <span class="cu-radio__inner"></span>
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
  name: 'CuRadio'
});

const props = defineProps(radioProps);
const emit = defineEmits(radioEmits);

const { isCheck, changeValue, currentSize } = useRadio(props, emit);
</script>
