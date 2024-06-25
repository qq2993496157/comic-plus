"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const loading = require("./src/loading.js");
const SCOPE = "__LOADING__";
const useLoading = function() {
  return {
    mounted(el, binding) {
      el[SCOPE] = loading.createLoading({
        defaultVisible: binding.value,
        target: el,
        ...loading.getDataAttribute(el)
      });
    },
    updated(el, binding) {
      el[SCOPE] && el[SCOPE].updateVisible(binding.value);
    },
    unmounted(el) {
      if (el[SCOPE]) {
        el[SCOPE].destroy();
        delete el[SCOPE];
      }
    }
  };
};
const vLoading = {
  install: function(app) {
    app.directive("loading", useLoading());
  }
};
const CuLoading = {
  service: loading.LoadingService
};
exports.CuLoading = CuLoading;
exports.useLoading = useLoading;
exports.vLoading = vLoading;
