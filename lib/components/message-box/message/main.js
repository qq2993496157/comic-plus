"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const main_vue_vue_type_script_setup_true_lang = require("./src/main.vue.js");
const instance = require("./src/instance.js");
function createInstane(options) {
  const container = document.createElement("div");
  const id = instance.getMessageInstanceId();
  const props = {
    ...options,
    id,
    close: (id2) => {
      instance.instancesRemove(id2);
    },
    destroy: () => {
      vue.render(null, container);
    }
  };
  const vnode = vue.createVNode(main_vue_vue_type_script_setup_true_lang.default, props);
  vue.render(vnode, container);
  const vm = vnode.component;
  const messageInstance = {
    id,
    vnode,
    vm
  };
  instance.instancesAppend(messageInstance);
  document.body.appendChild(container.firstElementChild);
}
const messageType = ["success", "warning", "info", "error", "primary"];
const useMessage = (options) => createInstane(options);
const _message = useMessage;
messageType.forEach((type) => {
  _message[type] = (content) => useMessage({ type, content });
});
exports.default = _message;
