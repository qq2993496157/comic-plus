import { createVNode, render } from 'vue';
import ConfirmConstructor from './src/main.vue';

import type { ConfirmOptions } from './src/main.props';

/**
 * @description: _confirm
 * @param {*} options
 * @return {*}
 */
function _confirm(options: ConfirmOptions): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const container = document.createElement('div');
    const props = {
      ...options,
      destroy: (result: string) => {
        render(null, container);
        if (result === 'confirm') {
          resolve();
        } else {
          reject(result);
        }
      }
    };
    const vnode = createVNode(ConfirmConstructor, props);
    render(vnode, container);
  });
}

export default _confirm;
