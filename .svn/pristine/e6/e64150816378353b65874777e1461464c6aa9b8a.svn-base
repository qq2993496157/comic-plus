<template>
  <ul
    class="cu-anchor"
    ref="anchorRef"
    :class="[{ 'show-line': showLine }, size ?? SIZE, 'cu-anchor--' + direction]"
    :style="anchorStyle">
    <span class="cu-anchor__line" :style="lineStyle"></span>
    <slot></slot>
  </ul>
</template>

<script setup lang="ts">
import { computed, onMounted, provide, ref, watch } from 'vue';
import { useEventListener } from '@vueuse/core';
import '../style/anchor.css';
import { debounce, useConfig, isString } from '../../../utils';
import { animateScrollTo } from '../utils/scroll';
import { anchorProps, anchorEmits } from './main.props';
import { AnchorLinkInstance, ANCHOR_PROVIDE } from './type';

defineOptions({
  name: 'CuAnchor'
});

const props = defineProps(anchorProps);
const emit = defineEmits(anchorEmits);

const { SIZE } = useConfig();
const currentHref = ref('');

const links: Record<string, AnchorLinkInstance> = {};
const currentLinkEl = ref(null);
const containerEl = ref(null);
const anchorRef = ref(null);

var hashChangeFlag = false;
var rolling = false;

const debonceScroll = debounce(onScroll);

const anchorStyle = computed(() => {
  return {
    '--cu-anchor-line-weight': props.lineWeight ? props.lineWeight + 'px' : undefined,
    '--cu-anchor-color': props.color
  };
});

const top = computed(() => currentLinkEl.value?.offsetTop ?? 0);
const left = computed(() => currentLinkEl.value?.offsetLeft ?? 0);

const lineStyle = computed(() => {
  if (props.direction === 'vertical') {
    return {
      top: top.value + 'px',
      opacity: currentHref.value ? 1 : 0
    };
  } else if (props.direction === 'horizontal') {
    return {
      left: left.value + 4 + 'px',
      width: currentLinkEl.value?.offsetWidth - 8 + 'px',
      opacity: currentHref.value ? 1 : 0
    };
  } else {
    return undefined;
  }
});

function handleClick(href: string) {
  if (!href) return;
  hashChangeFlag = true;
  setCurrentAnchor(href);
  scrollTo(href);
}

function setCurrentAnchor(href: string) {
  if (currentHref.value === href) return;
  currentHref.value = href;
  currentLinkEl.value = anchorRef.value.querySelector(`a[data-href="${href}"]`);
  emit('change', href);
}

function onScroll() {
  if (!rolling) {
    let current = getCurrentAnchor();
    currentHref.value = current;
    currentLinkEl.value = anchorRef.value.querySelector(`a[data-href="${current}"]`);
  }
  rolling = false;
  hashChangeFlag = false;
}

function getCurrentAnchor() {
  if (!containerEl.value) return;
  let eleTopList = Object.keys(links)
    .map((v) => {
      let ele = getElement(v);
      if (ele) {
        return {
          href: v,
          top: ele.getBoundingClientRect().top - getContainerOffsetTop()
        };
      }
    })
    .filter(Boolean);
  eleTopList.sort((prev, next) => prev.top - next.top);
  for (let i = eleTopList.length - 1; i >= 0; i--) {
    let item = eleTopList[i];
    if (item.top - props.offset <= 0) {
      return item.href;
    }
  }
  return undefined;
}

let clearAnimate: (() => void) | null = null;

function scrollTo(id: string) {
  let el = document.querySelector(id);
  if (el) {
    if (clearAnimate) clearAnimate();
    rolling = true;
    let from = getContainerScrollTop();
    let to = el.getBoundingClientRect().top - getContainerOffsetTop() + from - props.offset;

    clearAnimate = animateScrollTo(containerEl.value, from, to, props.duration);
  }
}

function getContainerScrollTop() {
  if (containerEl.value === window) {
    return window.scrollY;
  }
  return containerEl.value.scrollTop;
}

function getElement(target: any) {
  if (isString(target)) {
    try {
      return document.querySelector(target);
    } catch {
      return null;
    }
  }
  return target;
}

function getContainer() {
  const el = getElement(props.container);
  if (!el || el === window) {
    containerEl.value = window;
  } else {
    containerEl.value = el;
  }
}

function getContainerOffsetTop() {
  let pTop = 0;
  try {
    pTop = containerEl.value.getBoundingClientRect().top;
  } catch {}
  return pTop;
}

function addLinkItem(item: AnchorLinkInstance) {
  if (!item.href) return;
  links[item.href] = item;
}

function removeLinkItem(href: string) {
  delete links[href];
  if (currentHref.value === href) {
    currentHref.value = '';
  }
}

function hashChange() {
  if (!hashChangeFlag) {
    const hash = decodeURIComponent(window.location.hash);
    handleClick(hash);
  }
}

useEventListener(containerEl, 'scroll', debonceScroll);
useEventListener(window, 'hashchange', hashChange);

watch(
  () => props.container,
  () => {
    getContainer();
  }
);

onMounted(() => {
  getContainer();
  const hash = decodeURIComponent(window.location.hash);
  let target = getElement(hash);
  if (target) {
    handleClick(hash);
  } else {
    onScroll();
  }
});

provide(ANCHOR_PROVIDE, {
  props,
  currentHref,
  addLinkItem,
  removeLinkItem,
  handleClick
});

defineExpose({
  changeAnchor: handleClick
});
</script>
