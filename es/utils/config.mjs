import { computed } from "vue";
const useConfig = () => {
  const COMIC = window["$COMIC"];
  const SIZE = computed(() => {
    return COMIC == null ? void 0 : COMIC.size;
  });
  const IS_COMIC = computed(() => {
    return COMIC == null ? void 0 : COMIC.isComic;
  });
  return {
    SIZE,
    IS_COMIC
  };
};
const getMaxZIndex = (dom = document) => {
  const allElement = Array.from(dom.querySelectorAll("*"));
  const zIndexArray = [];
  allElement.forEach((item) => {
    const itemZIndex = Number(window.getComputedStyle(item, null).getPropertyValue("z-index"));
    if (itemZIndex) {
      zIndexArray.push(itemZIndex);
    }
  });
  let maxZIndex = 0;
  if (zIndexArray.length) {
    maxZIndex = Math.max(...zIndexArray);
  }
  return maxZIndex + 1;
};
const defaultZindex = computed(() => {
  var _a;
  return ((_a = window["$COMIC"]) == null ? void 0 : _a.zIndex) ?? 2e3;
});
let zIndex = 0;
const getNextZIndex = () => defaultZindex.value + ++zIndex;
export {
  getMaxZIndex,
  getNextZIndex,
  useConfig
};
