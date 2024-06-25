const tableProps = {
  height: String,
  size: String,
  data: Array,
  options: Object,
  treeProps: Object,
  lazyLoad: Boolean,
  load: Function,
  expand: Boolean,
  headerClassName: String,
  bodyClassName: String
};
const tableEmits = {
  ["select-change"]: (val) => true
};
export {
  tableEmits,
  tableProps
};
