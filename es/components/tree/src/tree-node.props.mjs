const treeNodeProps = {
  data: Object,
  node: Array,
  parentNode: Object
};
const treeNodeEmits = {
  ["push-nodes"]: (child) => true,
  ["change-check"]: () => true,
  ["change-show"]: (uid) => true
};
export {
  treeNodeEmits,
  treeNodeProps
};
