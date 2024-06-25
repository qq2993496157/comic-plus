import { ComponentInternalInstance } from 'vue';

/**
 * @description: createTooltip
 * @param {Props}
 * @return {*}
 */
declare function createTooltip(triggerRef: HTMLElement, content: string, position: string): {
    vm: ComponentInternalInstance;
    destroy: () => void;
    update: (content: string, position: string) => void;
};
export { createTooltip };
