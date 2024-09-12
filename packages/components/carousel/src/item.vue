<template>
  <div class="cu-carousel-item" v-show="show">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, inject, onMounted, onBeforeUnmount, computed,} from 'vue';
import { CAROUSEL_PROVIDE } from './type';

defineOptions({
  name: 'CuCarouselItem'
});
const instance = getCurrentInstance()!;

const { addItem, removeItem, current } = inject(CAROUSEL_PROVIDE);

const show = computed(() => {
  return current.value == instance.uid;
});

onMounted(() => {
  addItem?.(instance.uid);
});
onBeforeUnmount(() => {
  removeItem?.(instance.uid);
});
</script>
