<template>
  <cu-mode
    :show="showMode"
    :lock-scroll="!appendToBody || !lockScroll ? false : lockScroll"
    :append-to-body="appendToBody"
    :append-to="appendTo"
    :custom-class="['cu-mode__drawer', modeClass]"
    @close="emit('close')"
    @open="onAfterEnter"
    @mode-click="modeHandleClick">
    <transition :name="'cu-drawer-' + direction" @after-leave="onAfterLeave()" @after-enter="emit('open')">
      <div class="cu-drawer" :class="['cu-drawer--' + direction, customClass]" v-if="visible" :style="drawerStyle">
        <div class="cu-drawer__header">
          <div>
            <slot name="header"> {{ header }} </slot>
          </div>
          <i class="cu-icon-close close" @click="close" v-if="showClose"></i>
        </div>
        <div class="cu-drawer__content">
          <slot></slot>
        </div>
        <div class="cu-drawer__footer" v-if="$slots.footer">
          <slot name="footer"> </slot>
        </div>
      </div>
    </transition>
  </cu-mode>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import '../style/drawer.css';
import { CuMode } from '../../mode';
import { usePopup } from '../../../utils';
import { drawerProps, drawerEmits } from './main.props';
defineOptions({
  name: 'CuDrawer'
});

const props = defineProps(drawerProps);
const emit = defineEmits(drawerEmits);

const { visible, showMode, onAfterEnter, modeHandleClick, close, onAfterLeave } = usePopup(props, emit);

const drawerStyle = computed(() => {
  const key = ['left', 'right'].includes(props.direction) ? 'width' : 'height';
  return {
    [key]: props.dimension,
    backgroundColor: props.color
  };
});
</script>
