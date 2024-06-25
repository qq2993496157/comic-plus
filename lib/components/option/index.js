"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
require("../../utils/config.js");
const use = require("../../utils/use.js");
const option = require("../select/src/option.js");
const CuOption = use.withInstall(option.default);
exports.CuOption = CuOption;
