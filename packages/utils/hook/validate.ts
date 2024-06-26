import { inject } from 'vue';
import { FORMITEM_PROVIDE } from '../../components/form/src/type';

export function useItemValidate() {
  const validate = inject(FORMITEM_PROVIDE, undefined);

  const itemValidate = function (trigger: string) {
    if (validate && validate.trigger.includes(trigger)) {
      validate.fn();
    }
  };

  return {
    itemValidate
  };
}
