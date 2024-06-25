const SCOPE = "__CLICK_OUTSIDE__";
const eventHandler = (evt, el) => {
  var _a, _b, _c;
  let eles = ((_a = el[SCOPE]) == null ? void 0 : _a.eles) ?? [];
  const elements = [el, ...eles];
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (element.contains(evt.target))
      return;
  }
  (_c = (_b = el[SCOPE]) == null ? void 0 : _b.callback) == null ? void 0 : _c.call(_b);
};
const useClickOutside = () => {
  return {
    mounted(el, binding) {
      let scope = el[SCOPE] = {};
      scope.fn = eventHandler;
      scope.eles = [].concat(binding.arg);
      scope.callback = binding.value;
      document.addEventListener("click", (e) => eventHandler(e, el));
    },
    updated(el, binding) {
      el[SCOPE].eles = [].concat(binding.arg);
      el[SCOPE].callback = binding.value;
    },
    beforeUnmount(el) {
      document.removeEventListener("click", el[SCOPE]);
      delete el[SCOPE];
    }
  };
};
export {
  useClickOutside
};
