import type { ObjectDirective, App } from 'vue';
import { createTooltip } from './src/tooltip';

const SCOPE = '__TOOLTIP__';

const useTooltip = function (): ObjectDirective {
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
  install: function (app: App) {
    app.directive('tooltip', useTooltip());
  }
};

export { useTooltip, vTooltip };
