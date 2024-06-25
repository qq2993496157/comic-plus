"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
require("../../utils/config.js");
const use = require("../../utils/use.js");
const main = require("./src/main.js");
const CuTransitionCollapse = use.withInstall(main.default);
exports.CuTransitionCollapse = CuTransitionCollapse;
