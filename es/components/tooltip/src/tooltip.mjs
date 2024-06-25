import { createVNode, render } from "vue";
import _sfc_main from "./main.vue.mjs";
function createTooltip(triggerRef, content, position) {
  let container = document.createElement("span");
  const props = {
    content,
    position,
    triggerRef
  };
  const destroy = function() {
    render(null, container);
  };
  const vnode = createVNode(_sfc_main, props);
  render(vnode, container);
  const vm = vnode.component;
  return {
    vm,
    destroy,
    update(content2, position2) {
      vm == null ? void 0 : vm.exposed.update(content2, position2);
    }
  };
}
export {
  createTooltip
};
