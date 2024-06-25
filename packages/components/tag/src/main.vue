<template>
  <span
    v-if="!transition"
    class="cu-tag"
    :class="[type ? 'cu-tag--' + type : undefined, mode ? 'mode-' + mode : undefined, { 'is-border': border }]"
    :style="[{ height: size + 'px' }, customStyle]">
    <span class="cu-tag-content">
      <slot></slot>
    </span>
    <span class="closeicon cu-icon-close-small" v-if="closable" @click="$emit('close')"> </span>
  </span>
  <transition v-else name="cu-zoom-x" appear>
    <span
      class="cu-tag"
      :class="[type ? 'cu-tag--' + type : undefined, mode ? 'mode-' + mode : undefined, { 'is-border': border }]"
      :style="[{ height: size + 'px' }, customStyle]">
      <span class="cu-tag-content">
        <slot></slot>
      </span>
      <span class="closeicon cu-icon-close-small" v-if="closable" @click="handleClose"></span>
    </span>
  </transition>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import '../style/tag.css';
import { colorBlend, colorToRgba, useConfig } from '../../../utils';
import { tagProps, tagEmits } from './main.props';
defineOptions({
  name: 'CuTag'
});

const props = defineProps(tagProps);
const emit = defineEmits(tagEmits);
const { IS_COMIC } = useConfig();

function handleClose() {
  emit('close');
}

const customStyle = computed(() => {
  if (!props.color) return undefined;
  let calcColor =
    props.mode === 'light' ? colorBlend(colorToRgba(props.color), 20) : props.mode === 'plain' ? '#fff' : props.color;
  return {
    borderColor: IS_COMIC?.value ? undefined : props.color,
    backgroundColor: calcColor,
    color: props.mode ? props.color : '#fff',
    '--cu-tag-closecolor': calcColor
  };
});
</script>
