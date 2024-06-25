import { computed } from "vue";
function useMenu(instance, currentIndex) {
  const parentMenu = computed(() => {
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
export {
  useMenu
};
