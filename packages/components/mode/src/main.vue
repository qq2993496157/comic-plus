<template>
  <teleport :to="appendTo" :disabled="!appendToBody">
    <transition name="cu-fade" @after-enter="emit('open')" @after-leave="emit('close')">
      <div
        class="cu-mode"
        :class="[...[].concat(customClass), { 'append-to-body': appendToBody }]"
        v-if="show"
        @click.self="emit('mode-click')"
        :style="{ zIndex }">
        <slot></slot>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { computed, watch, ref, PropType } from 'vue';
import '../style/mode.css';
import { getNextZIndex, useLookScroll } from '../../../utils';

defineOptions({
  name: 'CuMode'
});

const props = defineProps({
  appendToBody: {
    type: Boolean,
    default: true
  },
  appendTo: {
    type: String,
    default: 'body'
  },
  show: Boolean,
  customClass: [String, Array] as PropType<string | string[]>,
  lockScroll: {
    type: Boolean,
    default: true
  }
});
const emit = defineEmits(['open', 'close', 'mode-click']);

const zIndex = ref(0);

const isLockScroll = computed(() => props.show);

if (props.lockScroll) {
  useLookScroll(isLockScroll);
}

watch(
  () => props.show,
  (val) => {
    if (val) {
      zIndex.value = getNextZIndex();
    }
  }
);
</script>
