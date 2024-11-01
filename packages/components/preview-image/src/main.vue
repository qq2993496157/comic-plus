<template>
  <mode
    :show="showMode"
    @open="onAfterEnter"
    @close="onModeAfterLeave"
    :lock-scroll="true"
    @mode-click="showPreview = false">
    <transition name="cu-fade-top" @after-leave="onAfterLeave">
      <div class="cu-preview-image" v-show="showPreview">
        <div class="cu-preview__buttons">
          <i @click="showPreview = false" class="close">
            <Close />
          </i>
          <i class="left" @click="minus">
            <Left />
          </i>
          <i class="right" @click="plus">
            <Right />
          </i>
        </div>
        <div class="cu-preview__tools">
          <ZoomIn @click="scale += 0.2" />
          <ZoomOut @click="scale -= 0.2" />
          <Undo @click="rotate -= 90" />
          <Redo @click="rotate += 90" />
        </div>
        <div class="cu-preview__list">
          <div ref="imageBoxRef" :style="customStyle">
            <img :src="list[currentIndex]" :style="imgStyle" :key="list[currentIndex]" />
          </div>
        </div>
      </div>
    </transition>
  </mode>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue';
import { useDraggable, useEventListener } from '@vueuse/core';
import '../style/preview-image.css';
import { CuMode as Mode } from '../../mode';
import { previewImageProps } from './main.props';
import { Close, Left, Redo, Right, Undo, ZoomIn, ZoomOut } from '../../../icons';
defineOptions({
  name: 'CuPreviewImage'
});
const props = defineProps(previewImageProps);

const showMode = ref(false);
const showPreview = ref(false);
const currentIndex = ref(0);
const scale = ref(1);
const rotate = ref(0);
const imageBoxRef = ref(null);
const initialValue = ref<any>({});

const imgStyle = computed(() => {
  return {
    transform: `scale(${scale.value}) rotate(${rotate.value}deg)`
  };
});

const { style } = useDraggable(imageBoxRef, {
  initialValue: initialValue.value
});

const customStyle = computed(() => {
  return style.value;
});

function onAfterEnter() {
  showPreview.value = true;
}

function onModeAfterLeave() {
  props.destroy?.();
}
function onAfterLeave() {
  showMode.value = false;
}

function minus() {
  currentIndex.value--;
  if (currentIndex.value < 0) {
    currentIndex.value = props.list.length - 1;
  }
}

function plus() {
  currentIndex.value++;
  if (currentIndex.value >= props.list.length) {
    currentIndex.value = 0;
  }
}

function getInitialPosition() {
  return {
    x: (window.innerWidth - imageBoxRef.value.getBoundingClientRect().width) / 2,
    y: (window.innerHeight - imageBoxRef.value.getBoundingClientRect().height) / 2
  };
}

useEventListener(window, 'keydown', (e) => {
  e.preventDefault()

  if(e.keyCode === 27){
    showPreview.value = false
  }
});

onMounted(() => {
  showMode.value = true;
  currentIndex.value = props.current || 0;
  nextTick(() => {
    initialValue.value = getInitialPosition();
  });
});
</script>
