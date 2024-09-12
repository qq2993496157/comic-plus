import { createVNode, render } from 'vue';
import AlertConstructor from './src/main.vue';

import type { AlertOptions } from './src/main.props';

function _alert(options: AlertOptions): Promise<void> {
  return new Promise<void>((resolve) => {
    const container = document.createElement('div');
    const props = {
      ...options,
      destroy: () => {
        render(null, container);
        resolve();
      }
    };

    const vnode = createVNode(AlertConstructor, props);
    render(vnode, container);
  });
}

export default _alert;
