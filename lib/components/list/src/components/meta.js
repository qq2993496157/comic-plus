"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const index = require("../../../avatar/index.js");
const ListMeta = vue.defineComponent({
  name: "CuListMeta",
  components: { CuAvatar: index.CuAvatar },
  props: {
    avatar: String,
    avatarSize: Number,
    title: String,
    description: String
  },
  setup(props) {
    return () => {
      return vue.h("div", { class: "cu-list-meta" }, [
        vue.h(index.CuAvatar, { src: props.avatar, size: props.avatarSize }),
        vue.h("div", { class: "cu-list-meta__content" }, [
          vue.h("div", { class: "title" }, props.title),
          vue.h("div", { class: "description" }, props.description)
        ])
      ]);
    };
  }
});
exports.default = ListMeta;
