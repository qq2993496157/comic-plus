import { createLoading, getDataAttribute, LoadingService } from "./src/loading.mjs";
const SCOPE = "__LOADING__";
const useLoading = function() {
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
  install: function(app) {
    app.directive("loading", useLoading());
  }
};
const CuLoading = {
  service: LoadingService
};
export {
  CuLoading,
  useLoading,
  vLoading
};
