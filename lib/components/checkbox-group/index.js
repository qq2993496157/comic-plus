"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
require("../../utils/config.js");
const use = require("../../utils/use.js");
const group = require("../checkbox/src/group.js");
const CuCheckboxGroup = use.withInstall(group.default);
exports.CuCheckboxGroup = CuCheckboxGroup;
