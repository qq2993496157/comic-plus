import { Loading } from '../icons';
import type { ComicSize, Config } from './typescript';
import { computed, ComputedRef } from 'vue';

interface UseGlobal {
  globalSize?: ComputedRef<ComicSize | undefined>;
  globalLoadingRender?: any;
}

const useGlobal = (): UseGlobal => {
  const COMIC = window['$COMIC'] as Config;

  const globalSize = computed(() => {
    return COMIC?.size;
  });

  const globalLoadingRender = computed(() => {
    return COMIC?.loadingRender || Loading;
  });

  return {
    globalSize,
    globalLoadingRender
  };
};

/**
 * @description: 获取指定dom中所有元素中最大的ZIndex 并且+1返回
 * @param {*} dom
 */
const getMaxZIndex = (dom: HTMLElement | Document = document): number => {
  const allElement = Array.from(dom.querySelectorAll('*'));
  const zIndexArray: number[] = [];
  allElement.forEach((item) => {
    const itemZIndex: number = Number(window.getComputedStyle(item, null).getPropertyValue('z-index'));
    if (itemZIndex) {
      zIndexArray.push(itemZIndex);
    }
  });
  let maxZIndex = 0;
  if (zIndexArray.length) {
    maxZIndex = Math.max(...zIndexArray);
  }
  return maxZIndex + 1;
};

const defaultZindex = computed(() => {
  return window['$COMIC']?.zIndex ?? 2000;
});

let zIndex: number = 0;

const getNextZIndex = (): number => defaultZindex.value + ++zIndex;

export { getNextZIndex, getMaxZIndex, useGlobal };
