"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
require("../../utils/config.js");
const use = require("../../utils/use.js");
const group = require("../button/src/group.js");
const CuButtonGroup = use.withInstall(group.default);
exports.CuButtonGroup = CuButtonGroup;
