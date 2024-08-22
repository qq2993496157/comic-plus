import { createVNode, render, ComponentInternalInstance } from 'vue';
import CuLoadingbarComponent from './src/main.vue';

var vm: ComponentInternalInstance | null, //loadingbar实例
  timer: number | null, //计时器
  hideTimer: number | null,
  progress: number = 0; //进度

function createLoadingbarInstance() {
  const VNode = createVNode(CuLoadingbarComponent);
  render(VNode, document.body);
  vm = VNode.component!;
}

function updateInstanceRefs(keysObj) {
  Object.keys(keysObj).forEach((key) => {
    vm.exposed[key].value = keysObj[key];
  });
}

function hide() {
  if (hideTimer) {
    clearTimeout(hideTimer);
    hideTimer = null;
  }
  hideTimer = setTimeout(() => {
    updateInstanceRefs({
      show: false
    });
  }, 800);
}

function start() {
  if (!vm) createLoadingbarInstance();
  progress = 0;
  updateInstanceRefs({
    status: 'loading',
    show: true,
    progress
  });
  createTimer();
}

function finish() {
  clearTimer();
  if (!vm) createLoadingbarInstance();
  progress = 100;
  updateInstanceRefs({
    status: 'finish',
    show: true,
    progress
  });
  hide();
}

function error() {
  clearTimer();
  if (!vm) createLoadingbarInstance();
  progress = 100;
  updateInstanceRefs({
    status: 'error',
    show: true,
    progress
  });
  hide();
}

function update(value) {
  clearTimer();
  if (!vm) createLoadingbarInstance();
  progress = value;
  updateInstanceRefs({
    status: 'loading',
    show: true,
    progress
  });
}

function createTimer() {
  clearTimer();
  timer = setInterval(() => {
    progress += Math.floor(Math.random() * 3 + 1);
    if (progress > 98) {
      clearTimer();
      return;
    }
    vm.exposed.progress.value = progress;
  }, 200);
}

function clearTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

const CuLoadingbar = {
  start,
  finish,
  error,
  update
};

export { CuLoadingbar };
