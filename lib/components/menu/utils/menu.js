"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
function useMenu(instance, currentIndex) {
  const parentMenu = vue.computed(() => {
    let parent = instance.parent;
    while (parent && !["CuMenu", "CuSubMenu"].includes(parent.type.name)) {
      parent = parent.parent;
    }
    return parent;
  });
  return {
    parentMenu
    // indexPath
  };
}
exports.useMenu = useMenu;
