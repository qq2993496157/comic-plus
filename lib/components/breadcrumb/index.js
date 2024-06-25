"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
require("../../utils/config.js");
const use = require("../../utils/use.js");
const main = require("./src/main.js");
const CuBreadcrumb = use.withInstall(main.default);
exports.CuBreadcrumb = CuBreadcrumb;
