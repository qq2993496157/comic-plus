<template>
  <div
    class="cu-avatar-group"
    :class="[{ shadow }, shape ? 'is-' + shape : undefined, layout ? 'mode-' + layout : undefined]"
    :style="style">
    <div class="cu-avatar-group__container">
      <slot></slot>
      <span
        class="cu-avatar-group__surplus"
        :class="{ 'can-click': clickShowAll }"
        v-if="surplus > 0"
        @click.stop="changeShowAll">
        <DoubleLeft v-if="showAll" size="1.5em" />
        <template v-else>
          {{ '+' + surplus }}
        </template>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, provide, watch } from 'vue';
import '../style/avatar.css';
import { avatarGroupProps, avatarGroupEmits } from './group.props';
import { AVATARGROUP_PROVIDE } from './type';
import { DoubleLeft } from '../../../icons';

defineOptions({
  name: 'CuAvatarGroup'
});

const props = defineProps(avatarGroupProps);
const emit = defineEmits(avatarGroupEmits);

const showAll = ref<boolean>(false);
const avatars = ref<number[]>([]);

const style = computed(() => {
  return {
    '--cu-avatar-size': props.size + 'px',
    '--cu-avatar-gap': getGap() + 'px',
    fontSize: props.size / 3 + 'px'
  };
});

function getGap() {
  const offset = props.offset ?? 0;
  return props.layout === 'stack' ? 0 - props.size / 2 + offset : 4 + offset;
}

const surplus = computed(() => {
  return avatars.value.length - props.count ?? avatars.value.length;
});

function changeShowAll() {
  if (!props.clickShowAll) return;
  showAll.value = !showAll.value;
  emit('change-show', showAll.value);
}

function addAvatar(uid: number) {
  if (!avatars.value.includes(uid)) {
    avatars.value.push(uid);
  }
}
function removeAvatar(uid: number) {
  let idx = avatars.value.indexOf(uid);
  if (idx > 0) {
    avatars.value.splice(idx, 1);
  }
}

watch(
  () => props.clickShowAll,
  (val) => {
    if (!val) {
      showAll.value = false;
    }
  }
);

provide(AVATARGROUP_PROVIDE, {
  props,
  addAvatar,
  removeAvatar,
  avatars,
  showAll
});
</script>
