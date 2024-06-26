<template>
  <transition name="fade-message" @after-leave="destroy?.()" @after-enter="getHeight">
    <span class="cu-message" :uid="id" :class="type ? 'cu-message--' + type : undefined" v-show="show" :style="style">
      <i :class="icon ?? typeList[type!]" class="prefix-icon" v-if="showIcon"></i>
      <span>
        <template v-if="isVNode">
          <div v-if="isString(content)" v-html="content"></div>
          <component v-else :is="content"></component>
        </template>
        <template v-else>
          {{ content }}
        </template>
      </span>
      <i class="cu-icon-close-one close" v-if="showClose" @click="closeMessage"></i>
    </span>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, getCurrentInstance } from 'vue';
import '../../style/message-box.css';
import { getOffset } from './instance';
import { colorBlend, colorToRgba, getNextZIndex, isString } from '../../../../utils';
import { messageProps } from './main.props';

defineOptions({
  name: 'CuMessage'
});

const typeList = {
  primary: 'cu-icon-tips',
  info: 'cu-icon-info',
  success: 'cu-icon-success',
  warning: 'cu-icon-warning',
  error: 'cu-icon-close-one'
};

const props = defineProps(messageProps);
const instance = getCurrentInstance()!;
const height = ref(0);
const show = ref(false);
const timer: any = ref(null);
const zIndex = getNextZIndex();

function closeMessage() {
  show.value = false;
  if (timer.value) {
    clearTimeout(timer.value);
    timer.value = null;
  }
  props.close?.(props.id);
}

const style = computed(() => {
  return {
    color: props.color,
    backgroundColor: colorBlend(colorToRgba(props.color), 10),
    top: top.value ? top.value + 'px' : undefined,
    'z-index': zIndex
  };
});

const top = computed<number>(() => {
  return getOffset(props.id!);
});

const offset = computed(() => height.value + top.value + 10);

function getHeight() {
  let el = instance?.vnode.el;
  height.value = el?.getBoundingClientRect().height;
}

onMounted(() => {
  show.value = true;
  if (props.duration === -1) return;
  timer.value = setTimeout(() => {
    closeMessage();
  }, props.duration);
});

defineExpose({
  offset: offset
});
</script>
