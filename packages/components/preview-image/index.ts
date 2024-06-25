import { createVNode, render } from 'vue';
import PreviewImage from './src/main.vue';

/**
 * @description: usePreview
 * @param {number} current
 * @param {string} list
 * @return {*}
 */
function preview(list: string[], current?: number): Promise<void> {
  return new Promise<void>((resolve) => {
    const container = document.createElement('div');
    const props = {
      list,
      current,
      destroy: () => {
        render(null, container);
        resolve();
      }
    };

    const vnode = createVNode(PreviewImage, props);
    render(vnode, container);
  });
}

export { preview };
