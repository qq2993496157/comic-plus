import { shallowReactive } from 'vue';
import type { VNode, ComponentInternalInstance } from 'vue';

var tempId = 1;
const OFFSET = 15;

export type MessageInstance = {
  id: string;
  vnode: VNode;
  vm: ComponentInternalInstance;
};

export const messageInstances: MessageInstance[] = shallowReactive([]);

export function instancesAppend(instance: MessageInstance) {
  messageInstances.push(instance);
}

export function instancesRemove(id: string) {
  let { idx } = getInstance(id);
  messageInstances.splice(idx, 1);
}

export function getMessageInstanceId() {
  return 'message_' + tempId++;
}

function getInstance(id: string) {
  let idx = messageInstances.findIndex((instance) => instance.id === id);
  let prev = messageInstances[idx - 1];
  return { idx, prev };
}

export function getOffset(id: string): number {
  let { prev } = getInstance(id);
  return prev ? prev?.vm.exposed?.offset.value ?? 0 + OFFSET : OFFSET;
}
