<template>
  <only-child ref="triggerRef">
    <slot />
  </only-child>
  <teleport to="body">
    <transition name="cu-fade">
      <div
        class="cu-contextmenus"
        ref="popperRef"
        v-show="showMenus"
        :style="{ ...floatingStyles, zIndex }"
        @contextmenu.stop.prevent>
        <slot name="menus">
          <ul class="cu-contextmenu-list">
            <li class="cu-contextmenu-list__item" v-for="menu in menuList" @click="menuClick(menu)">
              <span class="cu-contextmenu-list__icon" v-if="hasIcon">
                <component v-if="isVueComponent(menu.icon)" :is="menu.icon" />
              </span>
              <span>{{ menu.label ?? menu.value }}</span>
            </li>
          </ul>
        </slot>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from 'vue';
import '../style/contextmenu.css';
import OnlyChild from '../../only-child';
import { getNextZIndex, isFunction, isObject, isVueComponent } from '../../../utils';
import { useEventListener } from '@vueuse/core';
import { contextmenuEmits, contextmenuProps } from './main.props';
import { useFloating, shift, flip } from '@floating-ui/vue';

defineOptions({
  name: 'CuContextmenu'
});

const props = defineProps(contextmenuProps);
const emit = defineEmits(contextmenuEmits);

const zIndex = ref(0);
const triggerRef = ref();
const virtualEl = ref();
const popperRef = ref();
const showMenus = ref(false);

const { floatingStyles } = useFloating(virtualEl, popperRef, {
  placement: 'bottom-start',
  middleware: [flip(), shift({ padding: 10 })]
});

const menuList = computed(() => {
  return props.menus?.map((v: any) => {
    return isObject(v) ? v : { label: v, value: v };
  });
});
const hasIcon = computed(() => {
  return menuList.value.some((v) => v.icon && isVueComponent(v.icon));
});

function createVirtualEl({ clientX, clientY }) {
  virtualEl.value = {
    getBoundingClientRect() {
      return {
        width: 0,
        height: 0,
        x: clientX,
        y: clientY,
        top: clientY,
        left: clientX,
        right: clientX,
        bottom: clientY
      };
    }
  };
}

function contextmenu(e) {
  e.stopPropagation();
  e.preventDefault();
  virtualEl.value = null;
  nextTick(() => {
    createVirtualEl(e);
  });
  zIndex.value = getNextZIndex();
  showMenus.value = true;
}
function closeMenus() {
  showMenus.value = false;
}

function menuClick(menu) {
  if (isFunction(menu.callback)) {
    menu.callback();
    return;
  }
  emit('menu-click', menu.value);
}

useEventListener(triggerRef, 'contextmenu', contextmenu);
useEventListener(window, 'click', closeMenus, true);
useEventListener(window, 'contextmenu', closeMenus, true);
</script>
