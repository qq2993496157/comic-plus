import { createVNode, render } from 'vue';
import type { ComponentInternalInstance } from 'vue';
import TooltipConstructor from './main.vue';

/**
 * @description: createTooltip
 * @param {Props}
 * @return {*}
 */
function createTooltip(
  triggerRef: HTMLElement,
  content: string,
  placement: string
): { vm: ComponentInternalInstance; destroy: () => void; update: (content: string) => void } {
  let container = document.createElement('span');

  const props = {
    content,
    placement,
    triggerRef
  };
  const destroy = function () {
    render(null, container);
  };

  const vnode = createVNode(TooltipConstructor, props);
  render(vnode, container);

  const vm = vnode.component!;

  return {
    vm,
    destroy,
    update(content) {
      vm?.exposed.update(content);
    }
  };
}

export { createTooltip };
