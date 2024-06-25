"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const main_vue_vue_type_script_setup_true_lang = require("./main.vue.js");
function createTooltip(triggerRef, content, position) {
  let container = document.createElement("span");
  const props = {
    content,
    position,
    triggerRef
  };
  const destroy = function() {
    vue.render(null, container);
  };
  const vnode = vue.createVNode(main_vue_vue_type_script_setup_true_lang.default, props);
  vue.render(vnode, container);
  const vm = vnode.component;
  return {
    vm,
    destroy,
    update(content2, position2) {
      vm == null ? void 0 : vm.exposed.update(content2, position2);
    }
  };
}
exports.createTooltip = createTooltip;
