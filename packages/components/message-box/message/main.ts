import { createVNode, render } from 'vue';
import MessageConstructor from './src/main.vue';
import type { MessageOptions } from './src/main.props';
import type { ComicType2 } from '../../../utils';
import { instancesAppend, instancesRemove, getMessageInstanceId } from './src/instance';
import type { MessageInstance } from './src/instance';

function createInstane(options: MessageOptions): void {
  const container = document.createElement('div');
  const id = getMessageInstanceId();
  const props = {
    ...options,
    id,
    close: (id: string) => {
      instancesRemove(id);
    },
    destroy: () => {
      render(null, container);
    }
  };

  const vnode = createVNode(MessageConstructor, props);
  render(vnode, container);
  const vm = vnode.component!;

  const messageInstance: MessageInstance = {
    id,
    vnode,
    vm
  };

  instancesAppend(messageInstance);

  document.body.appendChild(container.firstElementChild!);
}

const messageType = ['success', 'warning', 'info', 'error', 'primary'];

const useMessage = (options: MessageOptions) => createInstane(options);

type MessageFn = (options: MessageOptions) => void;

type MessageTypedFn = (message: string) => void;

export interface Message extends MessageFn {
  primary: MessageTypedFn;
  success: MessageTypedFn;
  warning: MessageTypedFn;
  info: MessageTypedFn;
  error: MessageTypedFn;
}

const _message: MessageFn & Partial<Message> = useMessage;

messageType.forEach((type: ComicType2) => {
  _message[type] = (content: string) => useMessage({ type, content });
});

export default _message;
