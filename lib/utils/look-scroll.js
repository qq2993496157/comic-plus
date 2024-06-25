"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
function useLookScroll(trigger) {
  let recordParentWidth = null;
  let recordOverflow = null;
  function getScrollbarWidth() {
    var scrollDiv = document.createElement("div");
    scrollDiv.style.width = "100px";
    scrollDiv.style.height = "100px";
    scrollDiv.style.overflow = "scroll";
    scrollDiv.style.position = "absolute";
    scrollDiv.style.top = "-9999px";
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  }
  function disableScroll() {
    recordParentWidth = document.body.style.getPropertyValue("width");
    recordOverflow = document.body.style.getPropertyValue("overflow");
    var scrollWidth = getScrollbarWidth();
    document.body.style.setProperty("overflow", "hidden");
    document.body.style.setProperty("width", `calc(100% - ${scrollWidth}px)`);
  }
  function enableScroll() {
    document.body.style.setProperty("overflow", recordOverflow);
    if (recordParentWidth) {
      document.body.style.setProperty("width", recordParentWidth);
    } else {
      document.body.style.removeProperty("width");
    }
  }
  vue.watch(trigger, (val) => {
    val && disableScroll();
    !val && enableScroll();
  });
}
exports.useLookScroll = useLookScroll;
