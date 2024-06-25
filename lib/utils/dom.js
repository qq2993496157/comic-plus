"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const filterEmpty = (children) => {
  const res = [];
  children.forEach((child) => {
    if (Array.isArray(child)) {
      res.push(...child);
    } else if (child.type === vue.Fragment) {
      res.push(...child.children);
    } else {
      res.push(child);
    }
  });
  return res.filter((c) => !isEmptyElement(c));
};
const isEmptyElement = (c) => {
  return c && (c.type === Comment || c.type === vue.Fragment && c.children.length === 0 || c.type === Text && c.children.trim() === "");
};
exports.filterEmpty = filterEmpty;
