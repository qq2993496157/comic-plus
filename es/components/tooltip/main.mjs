import { createTooltip } from "./src/tooltip.mjs";
const SCOPE = "__TOOLTIP__";
const useTooltip = function() {
  return {
    mounted(el, binding) {
      el[SCOPE] = createTooltip(el, binding.value, binding.arg);
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
export {
  useTooltip,
  vTooltip
};
