import "vue";
import { isString } from "../../../utils/typescript.mjs";
import "../../../utils/config.mjs";
const listProps = {
  time: String
};
const listEmits = {
  change: (value) => isString(value)
};
export {
  listEmits,
  listProps
};
