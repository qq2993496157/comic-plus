import { createVNode, render } from 'vue';
import type { NoticeOptions } from './src/main.props';
import { instancesAppend, getNoticeInstanceId, instancesRemove } from './src/instance';

import NoticeConstructor from './src/main.vue';

var noticeBox: HTMLElement | null;

function _notice(props: NoticeOptions): void {
  props = Object.assign(
    {
      position: 'rt',
      duration: 3000,
      showClose: true
    },
    props
  );
  const instance = {
    id: getNoticeInstanceId(),
    props,
    close: () => {
      instancesRemove(instance);
    }
  };
  if (!noticeBox) {
    noticeBox = document.createElement('div');
    const vnode = createVNode(NoticeConstructor, {
      destroy: () => {
        if (noticeBox) {
          render(null, noticeBox);
          document.body.removeChild(noticeBox);
          noticeBox = null;
        }
      }
    });
    render(vnode, noticeBox);
    instancesAppend(instance);
    document.body.appendChild(noticeBox);
  } else {
    instancesAppend(instance);
  }
}

export default _notice;
