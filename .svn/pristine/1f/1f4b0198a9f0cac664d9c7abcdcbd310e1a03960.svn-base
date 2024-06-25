<template>
  <span class="cu-image" :style="{ cursor: previewList ? 'pointer' : 'default' }" @click="handleClick">
    <img
      :src="src"
      :alt="alt"
      width="100%"
      height="100%"
      @load="loaded"
      @error="error"
      :loading="loading"
      :style="{
        'object-fit': props.fit
      }" />
    <div v-if="loadType === 'load'" class="cu-image__loading">
      <slot name="load"><i class="cu-icon-picture empty"></i></slot>
    </div>
    <div v-if="loadType === 'error'" class="cu-image__error">
      <slot name="error"> <i class="cu-icon-error-picture empty"></i></slot>
    </div>
  </span>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import '../style/image.css';
import { preview } from '../../preview-image/index';
import { imageProps, imageEmits } from './main.props';
defineOptions({
  name: 'CuImage'
});
const props = defineProps(imageProps);
const emit = defineEmits(imageEmits);

const loadType = ref('load');

function loaded() {
  loadType.value = 'loaded';
  emit('load');
}

function error() {
  loadType.value = 'error';
  emit('error');
}
function handleClick() {
  if (props.previewList) {
    preview(props.previewList, props.current);
  }
}
</script>
