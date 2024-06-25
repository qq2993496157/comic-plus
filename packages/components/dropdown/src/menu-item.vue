<template>
  <li class="cu-dropdown-item" :class="{ divider, disabled }" @click="itemHandleClick">
    <div>
      <i class="prefix-icon" :class="icon" v-if="icon"></i>
      <slot></slot>
    </div>
  </li>
</template>

<script setup lang="ts">
import { inject, warn } from 'vue';
import { dropdownItemProps } from './menu-item.props';
import { DROPDOWN_PROVIDE } from './type';
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
