<template>
  <div
    class="cu-pistol"
    ref="pistolRef"
    :class="[{ expand: show }, type ? 'cu-pistol--' + type : undefined, mode ? 'mode-' + mode : undefined]"
    :style="{ '--cu-pistol-size': props.size + 'px' }">
    <div class="cu-pistol__container" :style="pistolStyle" @click="containerHandleClick">
      <slot>
        <i class="default-icon" :class="icon ?? 'cu-icon-hamburger-button'"></i>
      </slot>
    </div>
    <ul class="cu-pistol__magazine" :class="props.direction">
      <slot name="magazine"></slot>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, reactive, onMounted, watch, provide, warn } from 'vue';
import { onClickOutside, useEventListener } from '@vueuse/core';
import '../style/pistol.css';
import { pistolProps, pistolEmits } from './main.props';
import { BulletInstance, Bullets, PISTOL_PROVIDE } from './type';

defineOptions({
  name: 'CuPistol'
});

const props = defineProps(pistolProps);
const emit = defineEmits(pistolEmits);

const bullets = reactive({}) as Bullets;
const pistolRef = ref(null);
const show = ref(false);
let timer: number | null;

const bulletsLength = computed(() => {
  return Object.keys(bullets).length;
});

const elNums = computed(() => {
  return props.equal ? bulletsLength.value : 8;
});

const pistolStyle = computed(() => {
  return {
    width: props.size + 'px',
    height: props.size + 'px',
    '--pistol-custom-color': props.color
  };
});

function containerHandleClick(e: MouseEvent) {
  emit('trigger-click', e);
  if (props.trigger !== 'click') return;
  show.value = !show.value;
}

function getEx(n: number, s: number) {
  if (!props.equal) {
    n = Math.max(8, n);
  }
  var t = s / (2 * Math.tan(Math.PI / n));
  var c = t - s / 2;
  c = Math.max(15, c);
  return c + 10;
}

function setItemStyle() {
  let len = bulletsLength.value;

  if (!props.equal) {
    len = Math.max(8, len);
  }

  for (let i = 0; i < len; i++) {
    const { x, y } = getPostion(i, len);
    let key = Object.keys(bullets)[i];

    if (bullets[key]) {
      bullets[key].style = {
        '--x': x + 'px',
        '--y': y + 'px'
      };
    }
  }
}

function getPostion(i: number, len: number) {
  var x = 0,
    y = 0;

  if (props.mode === 'wheel') {
    let d = props.size / 2;
    let ex = getEx(bulletsLength.value, props.size);
    var angle = getAngle(i, len);

    x = (d + ex) * Math.cos(angle);
    y = (d + ex) * Math.sin(angle);
  } else {
    if (['left', 'right'].includes(props.direction)) {
      x = (i + 1) * props.size + 4 * (i + 1);
      if (props.direction === 'left') {
        x = 0 - x;
      }
    } else {
      y = (i + 1) * props.size + 4 * (i + 1);
      if (props.direction === 'top') {
        y = 0 - y;
      }
    }
  }

  return { x, y };
}

function getAngle(i: number, len: number) {
  let angleStep = (2 * Math.PI) / elNums.value;
  return {
    top: i * angleStep + (3 * Math.PI) / 2,
    left: (i - 0.5 * len) * angleStep,
    bottom: Math.PI / 2 + i * angleStep,
    right: 0 + i * angleStep
  }[props.direction ?? 'top'];
}

if (props.trigger === 'hover') {
  useEventListener(pistolRef, 'mouseenter', handleMouseEnter);
  useEventListener(pistolRef, 'mouseleave', handleMouseLeave);
}

if (props.trigger === 'click') {
  onClickOutside(pistolRef, () => (show.value = false));
}

function handleMouseEnter() {
  show.value = true;
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
}

function handleMouseLeave() {
  timer = setTimeout(() => {
    show.value = false;
  }, 300);
}

watch(show, (val) => {
  if (val) {
    emit('open');
  } else {
    emit('close');
  }
});

watch([bulletsLength, () => props.size, () => props.direction, () => props.equal], () => {
  setItemStyle();
});

function addBullet(item: BulletInstance) {
  bullets[item.uid] = item;
}

function removeBullet(uid: number) {
  if (bullets[uid]) {
    delete bullets[uid];
  }
}

function itemHandleClick(sign?: string) {
  if (!sign) {
    warn('The current menu item does not have a sign attribute');
  }
  emit('shoot', sign);
  if (props.chooseAfterHide) {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    show.value = false;
  }
}

function open() {
  show.value = true;
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
}

function close() {
  show.value = false;
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
}

provide(PISTOL_PROVIDE, {
  props,
  pistolStyle,
  bullets,
  addBullet,
  removeBullet,
  itemHandleClick
});

defineExpose({
  open,
  close
});

onMounted(() => {
  setItemStyle();
});
</script>
