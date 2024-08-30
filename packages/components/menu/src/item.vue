<template>
  <li
    class="cu-menu-item"
    @click="itemClick"
    :class="{ 'is-active': active }"
    :tooltip-disabled="tooltipDisabled"
    v-menu-tooltip:right-center="props.label">
    <span v-if="icon" :class="icon" class="icon"></span>
    <span v-show="!injectProps.collapse || submenu">
      <slot>{{ label }}</slot>
    </span>
  </li>
</template>

<script setup lang="ts">
import { inject, computed, onBeforeUnmount, getCurrentInstance, onMounted } from 'vue';
import { useTooltip } from '../../tooltip';
import { useMenu } from '../utils/menu';
import { menuItemProps } from './item.props';
import { MENU_PROVIDE, SubmenuProvide } from './type';
defineOptions({
  name: 'CuMenuItem'
});
const props = defineProps(menuItemProps);

const vMenuTooltip = useTooltip();
const instance = getCurrentInstance()!;

const { props: injectProps, menuClick } = inject(MENU_PROVIDE);

const { parentMenu } = useMenu(instance);
const parentProvideKey = 'submenu:provide' + parentMenu.value?.exposed?.submenuKey;
const submenu = inject<SubmenuProvide>(parentProvideKey, undefined);

const tooltipDisabled = computed(() => {
  return !((injectProps.collapse && !submenu) || props.showEllipsis);
});

const active = computed(() => {
  if (injectProps.modelValue) {
    return injectProps.modelValue === props.index;
  }
  return false;
});

const menuItemKey = props.index ?? instance.uid.toString();

function itemClick() {
  menuClick(props.index);

  if (injectProps.mode === 'horizontal' || injectProps.collapse) {
    submenu?.closeMenu(true);
  }
}
onMounted(() => {
  submenu?.setMenu({
    idx: menuItemKey,
    active
  });
});

onBeforeUnmount(() => {
  submenu?.removeMenu(menuItemKey);
});
</script>
