<template>
  <mode
    :show="showMode"
    :lock-scroll="lockScroll"
    :append-to-body="appendToBody"
    :append-to="appendTo"
    :customClass="modeClass"
    @close="emit('close')"
    @open="onAfterEnter"
    @mode-click="modeHandleClick">
    <transition :name="transitionClass" @after-leave="onAfterLeave()" @after-enter="emit('open')">
      <div class="cu-dialog" :class="customClass" v-if="visible" :style="dialogStyle">
        <div class="cu-dialog__header">
          <div>
            <slot name="header"> {{ header }} </slot>
          </div>
          <Close class="close" @click="close" v-if="showClose" />
        </div>
        <div class="cu-dialog__content">
          <slot></slot>
        </div>
        <div class="cu-dialog__footer" v-if="$slots.footer">
          <slot name="footer"> </slot>
        </div>
      </div>
    </transition>
  </mode>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import '../style/dialog.css';
import { CuMode as Mode } from '../../mode';
import { usePopup } from '../../../hooks';
import { dialogProps, dialogEmits } from './main.props';
import { Close } from '../../../icons';

defineOptions({
  name: 'CuDialog'
});
const props = defineProps(dialogProps);
const emit = defineEmits(dialogEmits);

const { visible, showMode, onAfterEnter, modeHandleClick, close, onAfterLeave } = usePopup(props, emit);

const dialogStyle = computed(() => {
  return {
    width: props.width,
    marginTop: props.top,
    backgroundColor: props.color
  };
});
</script>
