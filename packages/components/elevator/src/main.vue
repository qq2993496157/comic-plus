<template>
  <div class="cu-elevator" ref="elevatorRef" :style="{ height }">
    <div
      class="cu-elevator__menu"
      v-if="hasMenu"
      :class="[{ 'is-float': postion !== 'none' }, menuContext.class]"
      :style="menuStyle">
      <slot name="menu">
        <transition :name="menuContext.transitionName">
          <ul class="cu-elevator__menu-list" v-show="showMenu || postion === 'none'">
            <li
              v-for="item in itemList"
              :class="{ 'is-active': currentName === item.name }"
              @click="menuClick(item.name)">
              {{ item.label }}
            </li>
          </ul>
        </transition>
        <div class="fold" v-if="fold && postion !== 'none'" @click="foldClick()">
          <component :is="menuContext.icon" />
        </div>
      </slot>
    </div>
    <scrollbar @scroll="onScroll" ref="scrollBarRef" :display="scrollbarDisplay">
      <div class="cu-elevator__container" ref="container">
        <slot></slot>
      </div>
    </scrollbar>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, computed, onMounted, watch } from 'vue';
import '../style/elevator.css';
import { CuScrollbar as Scrollbar } from '../../scrollbar';
import { debounce } from '../../../utils';
import { elevatorProps, elevatorEmits } from './main.props';
import { ELEVATOR_PROVIDE, ElevatorItemInstance } from './type';
import { DownFilled, UpFilled } from '../../../icons';

defineOptions({
  name: 'CuElevator'
});
const props = defineProps(elevatorProps);
const emit = defineEmits(elevatorEmits);

const itemList = ref<ElevatorItemInstance[]>([]);
const container = ref(null);
const scrollBarRef = ref(null);
const elevatorRef = ref(null);
const currentName = ref<string>('');
const showMenu = ref(true);

const onScroll = debounce(setActive);

watch(currentName, (val) => {
  emit('change', val);
});

const menuContext = computed(() => {
  if (props.postion.indexOf('top') >= 0) {
    return {
      class: 'reversal',
      transitionName: 'cu-zoom-top',
      icon: DownFilled
    };
  } else if (props.postion.indexOf('bottom') >= 0) {
    return {
      class: '',
      transitionName: 'cu-zoom-bottom',
      icon: UpFilled
    };
  } else {
    return {
      class: '',
      transitionName: 'cu-zoom-bottom',
      icon: UpFilled
    };
  }
});

const menuStyle = computed(() => {
  if (props.postion === 'none') return undefined;
  let obj = {};
  if (props.postion) {
    props.postion.split('-').forEach((item) => {
      obj[item] = '20px';
    });
  }
  obj['--cu-elevator-menu-size'] = props.menuSize;
  return obj;
});

function menuClick(name: string) {
  let item: any = Array.from(container.value.children).find((v: HTMLElement): HTMLElement => {
    let vName = v.getAttribute('elevator-name');
    if (vName === name) {
      return v;
    }
  });
  currentName.value = name;
  const Reat = container.value.getBoundingClientRect();
  let itemTop = item.getBoundingClientRect().top;
  scrollBarRef.value.setBarTop(itemTop - Reat.top);
}

function setActive() {
  const Reat = elevatorRef.value?.getBoundingClientRect();
  let arr: HTMLElement[] = Array.from(container.value.children);
  for (let i = arr.length - 1; i >= 0; i--) {
    let item: HTMLElement = arr[i];
    if (item.getBoundingClientRect().top - Reat.top - props.offset <= 0) {
      currentName.value = item.getAttribute('elevator-name');
      break;
    }
    //如果循环到第一个元素依然没有break则直接使用第一个元素作为选中项
    if (i === 0) {
      currentName.value = item.getAttribute('elevator-name');
    }
  }
}

function foldClick() {
  showMenu.value = !showMenu.value;
}

function setItem(instance: ElevatorItemInstance) {
  itemList.value.push(instance);
}

function removeItem(uid: number) {
  itemList.value.splice(
    itemList.value.findIndex((v: ElevatorItemInstance) => v.uid === uid),
    1
  );
}

provide(ELEVATOR_PROVIDE, {
  setItem,
  removeItem
});

defineExpose({ changeItemActive: menuClick });

onMounted(() => {
  setActive();
});
</script>
