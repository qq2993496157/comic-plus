"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const main = require("./alert/main.js");
const main$1 = require("./confirm/main.js");
const main$2 = require("./message/main.js");
const main$3 = require("./notice/main.js");
const CuMessageBox = {
  alert: main.default,
  confirm: main$1.default,
  message: main$2.default,
  notice: main$3.default
};
exports.default = CuMessageBox;
