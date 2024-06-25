"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
require("../../utils/config.js");
const use = require("../../utils/use.js");
const item = require("../elevator/src/item.js");
const CuElevatorItem = use.withInstall(item.default);
exports.CuElevatorItem = CuElevatorItem;
