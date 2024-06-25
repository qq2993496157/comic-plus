"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
require("../../utils/config.js");
const use = require("../../utils/use.js");
const pane = require("../tabs/src/pane.js");
const CuTabPane = use.withInstall(pane.default);
exports.CuTabPane = CuTabPane;
