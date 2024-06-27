<template>
  <template v-if="button">
    <cu-button-group>
      <cu-button :size="size" :type="buttonType" @click="emit('button-click', $event)" :disabled="disabled">
        <slot></slot>
      </cu-button>
      <dropdown-content v-bind="props">
        <template #dropdown>
          <slot name="dropdown"></slot>
        </template>
      </dropdown-content>
    </cu-button-group>
  </template>
  <div class="cu-dropdown" v-else>
    <dropdown-content v-bind="props">
      <slot></slot>
      <template #dropdown>
        <slot name="dropdown"></slot>
      </template>
    </dropdown-content>
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue';
import '../style/dropdown.css';
import { CuButton } from '../../button';
import { CuButtonGroup } from '../../button-group';
import DropdownContent from './dropdown-content.vue';
import { dropdownProps, dropdownEmits } from './main.props';
import { DROPDOWN_PROVIDE } from './type';
defineOptions({
  name: 'CuDropdown'
});

const props = defineProps(dropdownProps);
const emit = defineEmits(dropdownEmits);

function choose(sign?: string) {
  emit('menu-click', sign);
}

provide(DROPDOWN_PROVIDE, {
  choose
});
</script>
