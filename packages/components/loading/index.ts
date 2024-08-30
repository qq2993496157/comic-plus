import type { ObjectDirective, App } from 'vue';
import { createLoading, LoadingService, getDataAttribute } from './src/loading';

const SCOPE = '__LOADING__';

const useLoading = function (): ObjectDirective {
  return {
    mounted(el, binding) {
      el[SCOPE] = createLoading({
        defaultVisible: binding.value,
        target: el,
        ...getDataAttribute(el)
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
  install: function (app: App) {
    app.directive('loading', useLoading());
  }
};

const CuLoading = {
  service: LoadingService
};

export { vLoading, CuLoading, useLoading };
