const treeProps = {
  data: Array,
  icon: String,
  selection: Boolean,
  lazy: Boolean,
  load: Function,
  treeProps: Object,
  accordion: Boolean,
  defaultExpandKeys: Array,
  defaultCheckedKeys: Array,
  distinguishClickAndExpand: Boolean,
  defaultExpandAll: Boolean
};
const treeEmits = {
  ["node-click"]: (node, depths) => true,
  ["node-expand"]: (node, expand, depths) => true
};
export {
  treeEmits,
  treeProps
};
