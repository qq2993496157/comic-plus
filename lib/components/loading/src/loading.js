"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const main_vue_vue_type_script_setup_true_lang = require("./main.vue.js");
const attributes = {
  blur: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: "cu-icon-loading"
  },
  text: {
    type: String,
    default: void 0
  },
  background: {
    type: String,
    default: void 0
  },
  color: {
    type: String,
    default: void 0
  }
};
function createLoading(props) {
  var _a;
  const container = document.createElement("div");
  const vnode = vue.createVNode(main_vue_vue_type_script_setup_true_lang.default, props);
  vue.render(vnode, container);
  (_a = props.target) == null ? void 0 : _a.appendChild(container.firstElementChild);
  return {
    vnode,
    updateVisible: (val) => {
      var _a2;
      const vm = vnode.component;
      (_a2 = vm.exposed) == null ? void 0 : _a2.updateVisible(val);
    },
    destroy: () => {
      vue.render(null, container);
    }
  };
}
function getDataAttribute(el) {
  return Object.entries(attributes).reduce((attrobj, [name, option]) => {
    const attrVal = el.getAttribute(`comic-loading-${name}`);
    const { type, default: defaultValue } = option;
    let value = attrVal ?? defaultValue;
    value = value === "false" ? false : value;
    value = value ? type(value) : void 0;
    attrobj[name] = value;
    return attrobj;
  }, {});
}
var loadingInstance;
function LoadingService(option) {
  if (loadingInstance) {
    loadingInstance.updateVisible(true);
    return loadingInstance;
  }
  const el = (option == null ? void 0 : option.target) ?? document.body;
  let instance = createLoading({
    glabal: true,
    defaultVisible: true,
    target: el,
    ...option
  });
  loadingInstance = {
    ...instance,
    close: () => {
      instance.updateVisible(false);
      setTimeout(() => {
        instance.destroy();
        loadingInstance = void 0;
      }, 300);
    }
  };
  return loadingInstance;
}
exports.LoadingService = LoadingService;
exports.createLoading = createLoading;
exports.getDataAttribute = getDataAttribute;
