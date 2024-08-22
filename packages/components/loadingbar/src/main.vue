<template>
  <transition name="loadingbar">
    <div class="cu-loadingbar" v-show="show">
      <div class="cu-loadingbar__schedule" :class="status" :style="scheduleStyle"></div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import '../style/loadingbar.css';
defineOptions({
  name: 'CuLoadingbar'
});

defineProps({
  distroy: Function
});

const progress = ref(0);
const status = ref('loading');
const show = ref(false);

const scheduleStyle = computed(() => {
  return {
    width: progress.value + '%'
  };
});

defineExpose({
  progress,
  status,
  show
});
</script>
