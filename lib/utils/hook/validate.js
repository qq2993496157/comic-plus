"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const type = require("../../components/form/src/type.js");
function useItemValidate() {
  const validate = vue.inject(type.FORMITEM_PROVIDE, void 0);
  const itemValidate = function(trigger) {
    if (validate && validate.trigger.includes(trigger)) {
      validate.fn();
    }
  };
  return {
    itemValidate
  };
}
exports.useItemValidate = useItemValidate;
