<template>
  <span
    v-if="!transition"
    class="cu-tag-complex"
    :class="type ? 'cu-tag--' + type : undefined"
    :style="{ height: size + 'px', borderColor: props.color }">
    <span class="cu-tag-content">
      <slot></slot>
    </span>
    <span class="complex-content" :style="{ background: props.color }">
      <span>{{ title }}</span>
      <CloseOne class="closeicon" v-if="closable" @click="$emit('close')" />
    </span>
  </span>
  <transition v-else name="cu-zoom-x" appear>
    <span
      class="cu-tag-complex"
      :class="type ? 'cu-tag--' + type : undefined"
      :style="{ height: size + 'px', borderColor: props.color }">
      <span class="cu-tag-content">
        <slot></slot>
      </span>
      <span class="complex-content" :style="{ background: props.color }">
        <span>{{ title }}</span>
        <CloseOne class="closeicon" v-if="closable" @click="handleClose" />
      </span>
    </span>
  </transition>
</template>

<script setup lang="ts">
import { CloseOne } from '../../../icons';
import '../style/tag.css';
import { tagComplexProps, tagComplexEmits } from './complex.props';
defineOptions({
  name: 'CuTagComplex'
});

const props = defineProps(tagComplexProps);
const emit = defineEmits(tagComplexEmits);

function handleClose() {
  emit('close');
}
</script>
