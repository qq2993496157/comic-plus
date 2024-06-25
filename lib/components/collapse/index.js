"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
require("../../utils/config.js");
const use = require("../../utils/use.js");
const main = require("./src/main.js");
const CuCollapse = use.withInstall(main.default);
exports.CuCollapse = CuCollapse;
