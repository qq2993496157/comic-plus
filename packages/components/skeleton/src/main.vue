<template>
  <template v-if="!isReady || loading">
    <div class="cu-skeleton" :class="{ animated }" v-bind="$attrs">
      <slot name="template" v-for="_ in count">
        <div class="template-default">
          <skeleton-item v-for="_ in rows" />
        </div>
      </slot>
    </div>
  </template>
  <template v-else>
    <slot v-bind="$attrs"></slot>
  </template>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import '../style/skeleton.css';
import { throttle } from '../../../utils';
import { CuSkeletonItem as SkeletonItem } from '../../skeleton-item';
import { skeletonProps } from './main.props';

defineOptions({
  name: 'CuSkeleton'
});

const props = defineProps(skeletonProps);

const isReady = ref(true);

const throttleReady = throttle(() => {
  isReady.value = true;
}, props.throttle);

watch(
  () => props.loading,
  (val) => {
    if (!val) {
      isReady.value = false;
      throttleReady();
    }
  }
);
</script>
