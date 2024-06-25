"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function withInstall(component) {
  component.install = function(app) {
    app.component(component.name, component);
  };
  return component;
}
exports.withInstall = withInstall;
