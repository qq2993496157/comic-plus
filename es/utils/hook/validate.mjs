import { inject } from "vue";
import { FORMITEM_PROVIDE } from "../../components/form/src/type.mjs";
function useItemValidate() {
  const validate = inject(FORMITEM_PROVIDE, void 0);
  const itemValidate = function(trigger) {
    if (validate && validate.trigger.includes(trigger)) {
      validate.fn();
    }
  };
  return {
    itemValidate
  };
}
export {
  useItemValidate
};
