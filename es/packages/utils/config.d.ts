import { ComputedRef } from 'vue';

interface UseConfig {
    SIZE?: ComputedRef<string | undefined>;
    IS_COMIC?: ComputedRef<boolean>;
}
declare const useConfig: () => UseConfig;
/**
 * @description: 获取指定dom中所有元素中最大的ZIndex 并且+1返回
 * @param {*} dom
 */
declare const getMaxZIndex: (dom?: HTMLElement | Document) => number;
declare const getNextZIndex: () => number;
export { getNextZIndex, getMaxZIndex, useConfig };
