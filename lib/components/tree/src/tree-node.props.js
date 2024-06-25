"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
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
exports.treeNodeEmits = treeNodeEmits;
exports.treeNodeProps = treeNodeProps;
