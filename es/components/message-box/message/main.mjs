import { render, createVNode } from "vue";
import _sfc_main from "./src/main.vue.mjs";
import { instancesRemove, instancesAppend, getMessageInstanceId } from "./src/instance.mjs";
function createInstane(options) {
  const container = document.createElement("div");
  const id = getMessageInstanceId();
  const props = {
    ...options,
    id,
    close: (id2) => {
      instancesRemove(id2);
    },
    destroy: () => {
      render(null, container);
    }
  };
  const vnode = createVNode(_sfc_main, props);
  render(vnode, container);
  const vm = vnode.component;
  const messageInstance = {
    id,
    vnode,
    vm
  };
  instancesAppend(messageInstance);
  document.body.appendChild(container.firstElementChild);
}
const messageType = ["success", "warning", "info", "error", "primary"];
const useMessage = (options) => createInstane(options);
const _message = useMessage;
messageType.forEach((type) => {
  _message[type] = (content) => useMessage({ type, content });
});
export {
  _message as default
};
