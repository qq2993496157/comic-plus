<template>
  <li class="cu-anchor-link" :class="{ underline }">
    <a
      :href="href"
      :data-href="href"
      :class="{ active: anchor?.currentHref.value === href }"
      ref="linkRef"
      @click="linkHandleClick">
      <slot>{{ title }}</slot>
    </a>
    <ul v-if="$slots['sub-link'] && anchor?.props.direction === 'vertical'" class="cu-anchor-sub-link">
      <slot name="sub-link"></slot>
    </ul>
  </li>
</template>

<script setup lang="ts">
import { inject, onUnmounted, ref, watch } from 'vue';
import '../style/anchor.css';
import { animateScrollTo } from '../utils/scroll';
import { ANCHOR_PROVIDE } from './type';
import { anchorLinkProps } from './link.props';

defineOptions({
  name: 'CuAnchorLink'
});

const props = defineProps(anchorLinkProps);
const anchor = inject(ANCHOR_PROVIDE, undefined);

const linkRef = ref(null);

anchor?.addLinkItem({
  href: props.href,
  ele: linkRef
});

function linkHandleClick() {
  if (anchor) {
    anchor?.handleClick(props.href);
  } else {
    let el = document.querySelector(props.href);
    if (el) {
      let to = el.getBoundingClientRect().top + window.scrollY - props.offset;
      animateScrollTo(window, window.scrollY, to, 300);
    }
  }
  return false;
}

watch(
  () => props.href,
  (val, old) => {
    anchor?.removeLinkItem(old);
    if (val) {
      anchor?.addLinkItem({
        href: val,
        ele: linkRef
      });
    }
  }
);

onUnmounted(() => {
  anchor?.removeLinkItem(props.href);
});
</script>
