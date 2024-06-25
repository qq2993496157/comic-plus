"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../../style/message-box.css");
const list_vue_vue_type_script_setup_true_lang = require("./list.vue.js");
const instance = require("./instance.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuNotice"
  },
  __name: "main",
  props: {
    destroy: Function
  },
  setup(__props) {
    const props = __props;
    const notices = vue.computed(() => {
      return instance.noticeInstances;
    });
    const isLengthZero = vue.computed(() => {
      return notices.value.lt.length === 0 && notices.value.lb.length === 0 && notices.value.rt.length === 0 && notices.value.rb.length === 0;
    });
    function changeLength() {
      var _a;
      if (isLengthZero.value) {
        (_a = props.destroy) == null ? void 0 : _a.call(props);
      }
    }
    return (_ctx, _cache) => {
      return vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(notices.value, (value, key) => {
        return vue.openBlock(), vue.createBlock(list_vue_vue_type_script_setup_true_lang.default, {
          list: value,
          position: key,
          onEmpty: changeLength
        }, null, 8, ["list", "position"]);
      }), 256);
    };
  }
});
exports.default = _sfc_main;
