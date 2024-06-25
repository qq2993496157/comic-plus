"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const tooltip = require("./src/tooltip.js");
const SCOPE = "__TOOLTIP__";
const useTooltip = function() {
  return {
    mounted(el, binding) {
      el[SCOPE] = tooltip.createTooltip(el, binding.value, binding.arg);
    },
    updated(el, binding) {
      el[SCOPE].update(binding.value, binding.arg);
    },
    unmounted(el) {
      if (el[SCOPE]) {
        el[SCOPE].destroy();
        delete el[SCOPE];
      }
    }
  };
};
const vTooltip = {
  install: function(app) {
    app.directive("tooltip", useTooltip());
  }
};
exports.useTooltip = useTooltip;
exports.vTooltip = vTooltip;
