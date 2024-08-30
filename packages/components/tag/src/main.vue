<template>
  <span
    v-if="!transition"
    class="cu-tag"
    :class="[type ? 'cu-tag--' + type : undefined, tagMode ? 'is-' + tagMode : undefined, { 'is-border': border }]"
    :style="[{ height: size + 'px' }, customStyle]">
    <span class="cu-tag-content">
      <slot></slot>
    </span>
    <span class="closeicon cu-icon-close-small" v-if="closable" @click="$emit('close')"> </span>
  </span>
  <transition v-else name="cu-zoom-x" appear>
    <span
      class="cu-tag"
      :class="[type ? 'cu-tag--' + type : undefined, tagMode ? 'is-' + tagMode : undefined, { 'is-border': border }]"
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
import { colorBlend, colorToRgba } from '../../../utils';
import { tagProps, tagEmits } from './main.props';
defineOptions({
  name: 'CuTag'
});

const props = defineProps(tagProps);
const emit = defineEmits(tagEmits);

function handleClose() {
  emit('close');
}

const tagMode = computed(() => {
  return props.plain ? 'plain' : props.light ? 'light' : undefined;
});

const customStyle = computed(() => {
  if (!props.color) return undefined;
  let calcColor =
    tagMode.value === 'plain'
      ? colorBlend(colorToRgba(props.color), 20)
      : tagMode.value === 'light'
      ? '#fff'
      : props.color;
  return {
    borderColor: props.color,
    backgroundColor: calcColor,
    color: tagMode.value ? props.color : '#fff',
    '--cu-tag-closecolor': calcColor
  };
});
</script>
