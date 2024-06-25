"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
require("../../utils/config.js");
const use = require("../../utils/use.js");
const menu = require("../dropdown/src/menu.js");
const CuDropdownMenu = use.withInstall(menu.default);
exports.CuDropdownMenu = CuDropdownMenu;
