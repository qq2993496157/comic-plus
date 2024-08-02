<template>
  <div
    class="cu-carousel"
    :class="[direction ? 'is-' + direction : undefined]"
    @mouseenter="mouseenter"
    @mouseleave="mouseleave">
    <div class="cu-carousel__container" :style="{ height }">
      <transition-group :name="transitionName">
        <slot></slot>
      </transition-group>
    </div>
    <div class="cu-carousel__tools">
      <div class="cu-carousel__buttons" :class="arrow" v-if="arrow != 'never'">
        <i class="cu-icon-left left" v-if="direction === 'horizontal'" @click="changeActive(-1)"></i>
        <i class="cu-icon-right right" v-if="direction === 'horizontal'" @click="changeActive(1)"></i>
        <i class="cu-icon-up top" v-if="direction === 'vertical'" @click="changeActive(-1)"></i>
        <i class="cu-icon-down bottom" v-if="direction === 'vertical'" @click="changeActive(1)"></i>
      </div>
      <div class="cu-carousel__indicator" :class="arrow" v-if="showIndicator">
        <span v-for="dot in itemKeyList" :key="dot" @click="dotClick(dot)" :class="{ active: current === dot }"></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, ref, onMounted, onBeforeUnmount } from 'vue';
import '../style/carousel.css';
import { CAROUSEL_PROVIDE } from './type';
import { isNumber } from '../../../utils';
import { carouselProps, carouselEmits } from './main.props';

defineOptions({
  name: 'CuCarousel'
});
const props = defineProps(carouselProps);

const emit = defineEmits(carouselEmits);

const active = ref<number>(0);
const flag = ref(true);
const interval = ref(0);
const itemKeyList = ref<number[]>([]);

const transitionName = computed(() => {
  if (props.mode === 'transform') {
    return 'transform_' + props.direction + '_' + (flag.value ? 'nex' : 'pre');
  }
  return props.mode;
});

function start() {
  stop();
  interval.value = setInterval(() => {
    changeActive(1);
  }, props.delay);
}
function stop() {
  clearInterval(interval.value);
  interval.value = 0;
}

function mouseenter() {
  if (!props.autoPlay) return false;
  props.pauseOnHover && stop();
}

function mouseleave() {
  if (!props.autoPlay) return false;
  start();
}

function changeActive(val: number) {
  flag.value = val >= 0;
  active.value += val;
  active.value =
    active.value >= itemKeyList.value.length ? 0 : active.value < 0 ? itemKeyList.value.length - 1 : active.value;
  emit('change', active.value);
}
function next(): void {
  changeActive(1);
}

function prev(): void {
  changeActive(-1);
}

function setActiveIndex(num: number): void {
  num = num >= itemKeyList.value.length ? itemKeyList.value.length : num < 0 ? 0 : num;
  if (num == active.value) return;
  flag.value = num > active.value;
  active.value = num;
  emit('change', active.value);
}

function dotClick(dot: number) {
  if (props.arrow === 'never') return;
  let index = itemKeyList.value.findIndex((v) => v === dot);
  flag.value = index >= active.value;
  active.value = index;
  emit('change', active.value);
}

function addItem(uid: number) {
  itemKeyList.value.push(uid);
}
function removeItem(uid: number) {
  itemKeyList.value.splice(
    itemKeyList.value.findIndex((id) => id === uid),
    1
  );
}

const current = computed(() => {
  return itemKeyList.value[active.value];
});

provide(CAROUSEL_PROVIDE, {
  addItem,
  removeItem,
  current
});

defineExpose({
  next,
  prev,
  setActiveIndex
});

onMounted(() => {
  if (isNumber(props.defaultIndex) && props.defaultIndex! >= 0 && props.defaultIndex! < itemKeyList.value.length) {
    active.value = props.defaultIndex || 0;
    emit('change', active.value);
  }
  props.autoPlay && start();
});
onBeforeUnmount(() => {
  stop();
});
</script>
