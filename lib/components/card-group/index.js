"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
require("../../utils/config.js");
const use = require("../../utils/use.js");
const group = require("../card/src/group.js");
const CuCardGroup = use.withInstall(group.default);
exports.CuCardGroup = CuCardGroup;
