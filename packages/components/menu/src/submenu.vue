<template>
  <li class="cu-sub-menu" :class="{ 'is-active': active }">
    <div
      class="cu-sub-menu__head"
      ref="submenuRef"
      :tooltip-disabled="tooltipDisabled"
      v-menu-tooltip:right-center="props.label">
      <span v-if="icon" :class="icon" class="icon"></span>
      <span v-show="!injectProps.collapse || submenu">
        <slot name="label"> {{ label }} </slot>
      </span>
      <span
        v-show="!injectProps.collapse || submenu"
        class="suffix-icon"
        :class="[{ unfold }, injectProps.mode === 'horizontal' ? 'cu-icon-down' : 'cu-icon-right']"></span>
    </div>
    <component
      :is="float ? CuMenuPopper : CuTransitionCollapse"
      :show="unfold"
      :fixed="!teleportDisabled"
      @mouse-in="clearTimes"
      @mouse-out="createTimes">
      <ul
        class="cu-sub-menu__content"
        v-show="float ? true : unfold"
        :style="float ? style : { '--cu-menu-padding': deptOffset * 20 + 'px' }">
        <slot></slot>
      </ul>
    </component>
  </li>
</template>

<script setup lang="ts">
import { ref, inject, reactive, computed, provide, onBeforeUnmount, getCurrentInstance, onMounted, watch } from 'vue';
import { useTooltip } from '../../tooltip/main';
import { useMenu } from '../utils/menu';
import { useEventListener } from '@vueuse/core';
import { CuTransitionCollapse } from '../../transition-collapse';
import CuMenuPopper from './menu-popper.vue';
import { submenuProps } from './submenu.props';
import { MENU_PROVIDE, SubmenuProvide, MenuItem } from './type';

defineOptions({
  name: 'CuSubMenu'
});

const vMenuTooltip = useTooltip();

const props = defineProps(submenuProps);
const instance = getCurrentInstance()!;
const idx = props.index ?? instance.uid.toString();
const submenuRef = ref(null);
var timer: number | null = null,
  clearEnter: (() => void) | null = null,
  clearLeave: (() => void) | null = null,
  clearClick: (() => void) | null = null;

const { parentMenu } = useMenu(instance);

const unfold = ref(false);
const menus = reactive({}) as { [key: string]: MenuItem };

const { props: injectProps, style } = inject(MENU_PROVIDE);
const submenu = inject<SubmenuProvide>('submenu:provide' + parentMenu.value!.uid, undefined);

const deptOffset = computed(() => {
  return submenu ? submenu.offset : 2;
});

const teleportDisabled = computed(() => {
  return !!submenu;
});

const active = computed(() => {
  return Object.values(menus).some((v) => v.active);
});

const tooltipDisabled = computed(() => {
  return !(!injectProps.collapse && props.showEllipsis);
});

const float = computed(() => {
  return injectProps.mode === 'horizontal' || injectProps.collapse;
});

function initListener() {
  if (float.value) {
    clearEnter = useEventListener(submenuRef, 'mouseenter', onmouseenter);
    clearLeave = useEventListener(submenuRef, 'mouseleave', createTimes);
  } else {
    clearClick = useEventListener(submenuRef, 'click', headHandleClick);
  }
}
initListener();

watch(float, () => {
  clearEnter?.();
  clearLeave?.();
  clearClick?.();
  unfold.value = false;
  initListener();
});

function headHandleClick() {
  unfold.value = !unfold.value;
}

function onmouseenter() {
  clearTimes();
  unfold.value = true;
}

function clearTimes() {
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
}
function createTimes() {
  if (!timer) {
    timer = setTimeout(() => {
      closeMenu();
    }, 300);
  }
}

function closeMenu(deep?: boolean) {
  unfold.value = false;
  clearTimes();
  if (deep) {
    submenu?.closeMenu(deep);
  }
}

function setMenu(item: MenuItem) {
  menus[item.idx] = item;
}

function removeMenu(idx: string) {
  delete menus[idx];
}

provide('submenu:provide' + idx, {
  closeMenu,
  setMenu,
  removeMenu,
  offset: deptOffset.value + 1
});

onMounted(() => {
  submenu?.setMenu({
    idx,
    active
  });
});

onBeforeUnmount(() => {
  submenu?.removeMenu(idx);
});
</script>
