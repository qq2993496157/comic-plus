"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const main_vue_vue_type_script_setup_true_lang = require("./src/main.vue.js");
function _confirm(options) {
  return new Promise((resolve, reject) => {
    const container = document.createElement("div");
    const props = {
      ...options,
      destroy: (result) => {
        vue.render(null, container);
        if (result === "confirm") {
          resolve();
        } else {
          reject(result);
        }
      }
    };
    const vnode = vue.createVNode(main_vue_vue_type_script_setup_true_lang.default, props);
    vue.render(vnode, container);
  });
}
exports.default = _confirm;
