import { render, createVNode } from "vue";
import _sfc_main from "./src/main.vue.mjs";
function _confirm(options) {
  return new Promise((resolve, reject) => {
    const container = document.createElement("div");
    const props = {
      ...options,
      destroy: (result) => {
        render(null, container);
        if (result === "confirm") {
          resolve();
        } else {
          reject(result);
        }
      }
    };
    const vnode = createVNode(_sfc_main, props);
    render(vnode, container);
  });
}
export {
  _confirm as default
};
