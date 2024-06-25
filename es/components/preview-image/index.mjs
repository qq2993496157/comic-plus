import { createVNode, render } from "vue";
import _sfc_main from "./src/main.vue.mjs";
function preview(list, current) {
  return new Promise((resolve) => {
    const container = document.createElement("div");
    const props = {
      list,
      current,
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
  preview
};
