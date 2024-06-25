import { shallowReactive } from "vue";
var tempId = 1;
const OFFSET = 15;
const messageInstances = shallowReactive([]);
function instancesAppend(instance) {
  messageInstances.push(instance);
}
function instancesRemove(id) {
  let { idx } = getInstance(id);
  messageInstances.splice(idx, 1);
}
function getMessageInstanceId() {
  return "message_" + tempId++;
}
function getInstance(id) {
  let idx = messageInstances.findIndex((instance) => instance.id === id);
  let prev = messageInstances[idx - 1];
  return { idx, prev };
}
function getOffset(id) {
  var _a;
  let { prev } = getInstance(id);
  return prev ? ((_a = prev == null ? void 0 : prev.vm.exposed) == null ? void 0 : _a.offset.value) ?? 0 + OFFSET : OFFSET;
}
export {
  getMessageInstanceId,
  getOffset,
  instancesAppend,
  instancesRemove,
  messageInstances
};
