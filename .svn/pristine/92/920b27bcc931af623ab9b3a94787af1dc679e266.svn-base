<template>
  <transition name="avatar">
    <span class="cu-avatar" :class="avatarShape ? 'is-' + avatarShape : undefined" :style="avatarStyle" v-show="show">
      <template v-if="src">
        <i :class="loadType === 'error' ? 'cu-icon-error-picture' : 'cu-icon-picture'" v-if="loadType !== 'loaded'"></i>
        <img
          v-show="loadType === 'loaded'"
          :src="src"
          @load="loadType = 'loaded'"
          @error="loadType = 'error'"
          :style="{ 'object-fit': fit ?? group?.props.fit ?? 'cover' }" />
      </template>
      <template v-else-if="$slots.default">
        <slot></slot>
      </template>
      <i class="cu-icon-avatar-filled avatar-icon" v-else></i>
    </span>
  </transition>
</template>

<script setup lang="ts">
import { ref, computed, inject, getCurrentInstance, onBeforeUnmount, onMounted } from 'vue';
import '../style/avatar.css';
import { randomColor } from '../../../tools';
import { avatarProps } from './main.props';
import { AVATARGROUP_PROVIDE } from './type';

defineOptions({
  name: 'CuAvatar'
});

const props = defineProps(avatarProps);

const group = inject(AVATARGROUP_PROVIDE, undefined);
const instance = getCurrentInstance()!;
const loadType = ref('load');

const avatarShape = computed(() => props.shape ?? group?.props.shape ?? 'circle');
const show = computed(() => {
  if (group) {
    return group.showAll.value
      ? true
      : group.avatars.value.indexOf(instance.uid) < (group.props.count ?? group?.avatars.value.length);
  } else {
    return true;
  }
});

const avatarStyle = computed(() => {
  const max = Math.max(props.size ?? 0, group?.props.size ?? 0);
  const size = max === 0 ? 40 : max;
  return {
    width: size + 'px',
    height: size + 'px',
    fontSize: size / 3 + 'px',
    backgroundColor: backgroundColor.value
  };
});

const backgroundColor = computed(() => {
  if (!props.color) return undefined;
  if (props.color === 'random') return randomColor();
  return props.color;
});

onMounted(() => {
  group?.addAvatar(instance.uid);
});

onBeforeUnmount(() => {
  group?.removeAvatar(instance.uid);
});
</script>
