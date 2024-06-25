"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../style/empty.css");
const main_props = require("./main.props.js");
const _hoisted_1 = { class: "cu-empty" };
const _hoisted_2 = ["src"];
const _hoisted_3 = {
  key: 1,
  t: "1715046276129",
  class: "icon",
  viewBox: "0 0 1129 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "34705",
  width: "128",
  height: "128"
};
const _hoisted_4 = /* @__PURE__ */ vue.createElementVNode("path", {
  d: "M522.182579 548.978841l500.247926-173.534505v447.564561c0 12.919626-8.18243 24.403738-20.384299 28.64329l-479.863627 166.462206V548.978841z",
  fill: "#ECEDF1",
  "p-id": "34706"
}, null, -1);
const _hoisted_5 = /* @__PURE__ */ vue.createElementVNode("path", {
  d: "M704.090916 790.202617l212.226392-74.474467v47.037009l-212.226392 74.484037z",
  fill: "#B6BECD",
  opacity: ".5",
  "p-id": "34707"
}, null, -1);
const _hoisted_6 = /* @__PURE__ */ vue.createElementVNode("path", {
  d: "M97.729794 382.229533l424.452785 167.543626v469.135551L116.917832 858.935028a30.318056 30.318056 0 0 1-19.188038-28.203065V382.229533z",
  fill: "#D9DEE5",
  "p-id": "34708"
}, null, -1);
const _hoisted_7 = /* @__PURE__ */ vue.createElementVNode("path", {
  d: "M97.576673 382.229533l473.815327-165.064972a75.79514 75.79514 0 0 1 52.769495 1.07185l398.26901 157.207925L522.182579 554.96972 97.576673 382.229533z",
  fill: "#C5CBD7",
  "p-id": "34709"
}, null, -1);
const _hoisted_8 = /* @__PURE__ */ vue.createElementVNode("path", {
  d: "M97.385271 382.229533l424.797308 172.740187-72.014953 148.403439a45.477084 45.477084 0 0 1-58.042617 22.279177L36.768299 581.153495a30.318056 30.318056 0 0 1-15.857645-41.314093l76.465047-157.609869zM1022.775028 374.650019L522.182579 554.96015l86.867739 153.360747a45.477084 45.477084 0 0 0 54.980187 20.384299l430.692486-155.131215a30.318056 30.318056 0 0 0 16.106467-43.476934l-88.04486-155.447028z",
  fill: "#F5F6F8",
  "p-id": "34710"
}, null, -1);
const _hoisted_9 = /* @__PURE__ */ vue.createElementVNode("path", {
  d: "M742.897645 53.28628l6.737346 3.464374C679.514916 193.076636 602.025869 274.891364 516.976449 301.936449l-3.818468 1.186691-2.162841-7.273271c82.95357-24.719551 159.275065-103.47185 228.744374-236.477009l3.158131-6.08658zM808.96 8.775776c15.293009 70.885682 4.07686 131.569645-33.686729 181.745645l-2.507364 3.253831-5.971739-4.660635c37.495626-47.888748 49.410393-105.845234 35.715589-174.175701l-0.957009-4.574505 7.416822-1.588635z",
  fill: "#B6BECD",
  "p-id": "34711"
}, null, -1);
const _hoisted_10 = [
  _hoisted_4,
  _hoisted_5,
  _hoisted_6,
  _hoisted_7,
  _hoisted_8,
  _hoisted_9
];
const _hoisted_11 = { class: "cu-empty__description" };
const _hoisted_12 = { class: "cu-empty__tools" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuEmpty"
  },
  __name: "main",
  props: main_props.emptyProps,
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.createElementVNode("div", {
          class: "cu-empty__image",
          style: vue.normalizeStyle({ "--cu-empty-imagesize": _ctx.imageSize ? _ctx.imageSize + "px" : void 0 })
        }, [
          vue.renderSlot(_ctx.$slots, "img", {}, () => [
            _ctx.image ? (vue.openBlock(), vue.createElementBlock("img", {
              key: 0,
              src: _ctx.image
            }, null, 8, _hoisted_2)) : (vue.openBlock(), vue.createElementBlock("svg", _hoisted_3, _hoisted_10))
          ])
        ], 4),
        vue.createElementVNode("div", _hoisted_11, vue.toDisplayString(_ctx.description), 1),
        vue.createElementVNode("div", _hoisted_12, [
          vue.renderSlot(_ctx.$slots, "default")
        ])
      ]);
    };
  }
});
exports.default = _sfc_main;
