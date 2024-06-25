const paginationProps = {
  total: {
    type: Number,
    default: 0
  },
  pageSize: {
    type: Number,
    default: 10
  },
  currentPage: {
    type: Number,
    default: 1
  },
  pageSizes: Array,
  pagerCount: {
    type: Number,
    default: 7
  },
  layout: {
    type: Array,
    default: ["pages"]
  },
  size: String,
  background: Boolean
};
const isValidValue = (value) => typeof value === "number";
const paginationEmits = {
  ["update:currentPage"]: isValidValue,
  ["update:pageSize"]: isValidValue,
  ["current-change"]: isValidValue,
  ["size-change"]: isValidValue
};
export {
  paginationEmits,
  paginationProps
};
