"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("vue");
require("../../utils/config.js");
const use = require("../../utils/use.js");
const item = require("../waterfall/src/item.js");
const CuWaterfallItem = use.withInstall(item.default);
exports.CuWaterfallItem = CuWaterfallItem;
