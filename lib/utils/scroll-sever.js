"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
function useScrollSever(ele, callback) {
  const scrollList = vue.ref([]);
  let parent = ele;
  while (parent != null) {
    if (parent.scrollHeight > parent.clientHeight || parent.scrollWidth > parent.clientWidth) {
      scrollList.value.push(parent);
    }
    parent = parent.parentNode;
  }
  scrollList.value.forEach((el) => {
    el.addEventListener("scroll", callback);
  });
  window.addEventListener("scroll", callback);
  vue.onBeforeUnmount(() => {
    scrollList.value.forEach((el) => {
      el.removeEventListener("scroll", callback);
    });
    scrollList.value = [];
    window.removeEventListener("scroll", callback);
  });
}
exports.useScrollSever = useScrollSever;
