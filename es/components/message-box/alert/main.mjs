import { render, createVNode } from "vue";
import _sfc_main from "./src/main.vue.mjs";
function _alert(options) {
  return new Promise((resolve) => {
    const container = document.createElement("div");
    const props = {
      ...options,
      destroy: () => {
        render(null, container);
        resolve();
      }
    };
    const vnode = createVNode(_sfc_main, props);
    render(vnode, container);
  });
}
export {
  _alert as default
};
