"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const main_vue_vue_type_script_setup_true_lang = require("./src/main.vue.js");
function preview(list, current) {
  return new Promise((resolve) => {
    const container = document.createElement("div");
    const props = {
      list,
      current,
      destroy: () => {
        vue.render(null, container);
        resolve();
      }
    };
    const vnode = vue.createVNode(main_vue_vue_type_script_setup_true_lang.default, props);
    vue.render(vnode, container);
  });
}
exports.preview = preview;
