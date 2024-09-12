<template>
  <mode
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
          <Close class="close" @click="close" v-if="showClose" />
        </div>
        <div class="cu-drawer__content">
          <slot></slot>
        </div>
        <div class="cu-drawer__footer" v-if="$slots.footer">
          <slot name="footer"> </slot>
        </div>
      </div>
    </transition>
  </mode>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import '../style/drawer.css';
import { CuMode as Mode } from '../../mode';
import { usePopup } from '../../../hooks';
import { drawerProps, drawerEmits } from './main.props';
import { Close } from '../../../icons';

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
