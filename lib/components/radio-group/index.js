"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
require("../../utils/config.js");
const use = require("../../utils/use.js");
const group = require("../radio/src/group.js");
const CuRadioGroup = use.withInstall(group.default);
exports.CuRadioGroup = CuRadioGroup;
