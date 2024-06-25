"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const instance = require("./src/instance.js");
const main_vue_vue_type_script_setup_true_lang = require("./src/main.vue.js");
var noticeBox;
function _notice(props) {
  props = Object.assign(
    {
      position: "rt",
      duration: 3e3,
      showClose: true
    },
    props
  );
  const instance$1 = {
    id: instance.getNoticeInstanceId(),
    props,
    close: () => {
      instance.instancesRemove(instance$1);
    }
  };
  if (!noticeBox) {
    noticeBox = document.createElement("div");
    const vnode = vue.createVNode(main_vue_vue_type_script_setup_true_lang.default, {
      destroy: () => {
        if (noticeBox) {
          vue.render(null, noticeBox);
          document.body.removeChild(noticeBox);
          noticeBox = null;
        }
      }
    });
    vue.render(vnode, noticeBox);
    instance.instancesAppend(instance$1);
    document.body.appendChild(noticeBox);
  } else {
    instance.instancesAppend(instance$1);
  }
}
exports.default = _notice;
