import "vue";
import { isNumber } from "../../../utils/typescript.mjs";
import "../../../utils/config.mjs";
const dateTableProps = {
  date: [Date, String, Number],
  flagTime: Number
};
const dateTableEmits = {
  change: (value) => isNumber(value)
};
export {
  dateTableEmits,
  dateTableProps
};
