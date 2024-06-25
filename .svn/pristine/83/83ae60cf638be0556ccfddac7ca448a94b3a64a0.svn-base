import type { ObjectDirective } from 'vue';

const SCOPE = '__CLICK_OUTSIDE__';

type Scope = {
  fn: (e: Event, el: HTMLElement) => void;
  eles: HTMLElement[];
  callback: (...arg: any) => void;
};

const eventHandler = (evt: Event, el: HTMLElement): void => {
  let eles = el[SCOPE]?.eles ?? [];
  const elements = [el, ...eles];
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (element.contains(<HTMLElement>evt.target)) return;
  }
  el[SCOPE]?.callback?.();
};

const useClickOutside = (): ObjectDirective => {
  return {
    mounted(el, binding) {
      let scope = (el[SCOPE] = {} as Scope);
      scope.fn = eventHandler;
      scope.eles = [].concat(binding.arg);
      scope.callback = binding.value;

      document.addEventListener('click', (e) => eventHandler(e, el));
    },
    updated(el, binding) {
      el[SCOPE].eles = [].concat(binding.arg);
      el[SCOPE].callback = binding.value;
    },
    beforeUnmount(el) {
      document.removeEventListener('click', el[SCOPE]);
      delete el[SCOPE];
    }
  };
};

export { useClickOutside };
