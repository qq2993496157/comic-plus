<template>
  <li
    class="cu-bullet"
    :style="[
      bulletInstance.style,
      pistolStyle,
      { '--cu-pistol-delay': (injectProps.iteration ? getInstanceIdx * (50 + (injectProps.dept ?? 0)) : 0) + 'ms' },
      { '--pistol-custom-color': color ?? injectProps.color }
    ]"
    :class="{ 'is-disabled': disabled }"
    @click="bulletClick">
    <div class="cu-bullet-content">
      <slot>
        <component v-if="isVueComponent(icon)" class="cu-bullet__icon" :is="icon" />
      </slot>
    </div>
  </li>
</template>

<script setup lang="ts">
import { inject, getCurrentInstance, reactive, computed, onUnmounted } from 'vue';
import { bulletProps } from './bullet.props';
import { PISTOL_PROVIDE } from './type';
import { isVueComponent } from '../../../utils';

defineOptions({
  name: 'CuBullet'
});

const props = defineProps(bulletProps);

const instance = getCurrentInstance()!;

const { addBullet, removeBullet, itemHandleClick, bullets, pistolStyle, props: injectProps } = inject(PISTOL_PROVIDE);

const getInstanceIdx = computed(() => {
  return Object.keys(bullets).indexOf(instance.uid.toString());
});

const bulletInstance = reactive({
  sign: props.sign,
  uid: instance.uid,
  style: {}
});

addBullet(bulletInstance);

function bulletClick() {
  if (props.disabled) return;
  itemHandleClick(props.sign);
}

onUnmounted(() => {
  removeBullet(instance.uid);
});
</script>
