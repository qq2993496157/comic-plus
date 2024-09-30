import { debounce } from '../utils';
import { ComputedRef, Ref, onMounted, onUnmounted, ref, watch } from 'vue';

type MaybeElement = Ref<HTMLElement | null> | ComputedRef<HTMLElement | null>;
type ResizeOptions = {
  debounce?: number;
  immediate?: boolean;
};

/**
 * @description: 监听元素宽高变化的钩子函数，元素销毁会自定义移除监听
 * @param {MaybeElement} target 要监听的元素
 * @param {function} callback 触发回调
 * @param {ResizeOptions} options
 * @return {*} 返回一个函数，调用该函数可以手动销毁监听
 */
export const useResize = (
  target: MaybeElement,
  callback: (...args: any) => void,
  options?: ResizeOptions
): (() => void) => {
  const ob = ref<ResizeObserver>(null);

  const cFn = options?.debounce ? debounce(callback, options?.debounce) : callback;

  function createObserver() {
    disconnect();
    const isSupported = typeof ResizeObserver !== 'undefined';
    if (!isSupported) return false;
    ob.value = new ResizeObserver((entries) => {
      cFn(entries[0].contentRect);
    });
    ob.value.observe(target.value);
  }

  function disconnect() {
    if (ob.value) {
      ob.value.disconnect();
      ob.value = null;
    }
  }

  watch(target, (val) => {
    if (val) {
      createObserver();
    }

    if (!val) {
      disconnect();
    }
  });

  onMounted(() => {
    createObserver();
    if (options?.immediate) {
      callback(target.value.getBoundingClientRect());
    }
  });

  onUnmounted(() => {
    disconnect();
  });

  return disconnect;
};
