<template>
  <li class="cu-dropdown-item" :class="{ divider, disabled }" @click="itemHandleClick">
    <div>
      <component v-if="isVueComponent(icon)" class="prefix-icon" :is="icon" />
      <slot></slot>
    </div>
  </li>
</template>

<script setup lang="ts">
import { inject, warn } from 'vue';
import { dropdownItemProps } from './menu-item.props';
import { DROPDOWN_PROVIDE } from './type';
import { isVueComponent } from '../../../utils';
defineOptions({
  name: 'CuDropdownItem'
});

const props = defineProps(dropdownItemProps);

const { choose } = inject(DROPDOWN_PROVIDE);

function itemHandleClick() {
  if (props.disabled) return;
  if (!props.sign) {
    warn('The current menu item does not have a sign attribute');
  }
  choose(props.sign);
}
</script>
