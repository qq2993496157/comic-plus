import { computed, inject } from 'vue';
import { FORMITEM_PROVIDE } from '../components/form/src/type';

function flattenArray(a) {
  let n = [];
  a.forEach((o) => {
    if (Array.isArray(o)) {
      n = n.concat(flattenArray(o));
    } else {
      n.push(o);
    }
  });
  return Array.from(new Set(n));
}

export function useItemValidate() {
  const validate = inject(FORMITEM_PROVIDE, undefined);

  const validateTriggers = computed(() => {
    return flattenArray(validate?.trigger ?? []);
  });

  const itemValidate = function (trigger: string) {
    if (validate && validateTriggers.value.includes(trigger)) {
      validate.fn();
    }
  };

  return {
    itemValidate
  };
}
