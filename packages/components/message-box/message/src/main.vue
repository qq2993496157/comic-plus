<template>
  <transition name="fade-message" @after-leave="destroy?.()" @after-enter="getHeight">
    <span class="cu-message" :uid="id" :class="type ? 'cu-message--' + type : undefined" v-show="show" :style="style">
      <component :is="isVueComponent(icon) ? icon : typeList[type!]" class="prefix-icon message-icon" v-if="showIcon" />
      <span>
        <template v-if="isVNode">
          <div v-if="isString(content)" v-html="content"></div>
          <component v-else :is="content" />
        </template>
        <template v-else>
          {{ content }}
        </template>
      </span>
      <CloseOne class="close-icon message-icon" v-if="showClose" @click="closeMessage" />
    </span>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, getCurrentInstance } from 'vue';
import '../../style/message-box.css';
import { getOffset } from './instance';
import { getNextZIndex, isString, isVueComponent } from '../../../../utils';
import { messageProps } from './main.props';
import { CloseOne, Info, Success, Tips, Warning } from '../../../../icons';

defineOptions({
  name: 'CuMessage'
});

const typeList = {
  primary: Tips,
  info: Info,
  success: Success,
  warning: Warning,
  error: CloseOne
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
    backgroundColor: `color-mix(in srgb, ${props.color}, white 90%)`,
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
