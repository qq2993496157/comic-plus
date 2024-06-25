"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
require("../../utils/config.js");
const use = require("../../utils/use.js");
const optionGroup = require("../select/src/option-group.js");
const CuOptionGroup = use.withInstall(optionGroup.default);
exports.CuOptionGroup = CuOptionGroup;
