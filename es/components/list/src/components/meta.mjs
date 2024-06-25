import { defineComponent, h } from "vue";
import { CuAvatar } from "../../../avatar/index.mjs";
const ListMeta = defineComponent({
  name: "CuListMeta",
  components: { CuAvatar },
  props: {
    avatar: String,
    avatarSize: Number,
    title: String,
    description: String
  },
  setup(props) {
    return () => {
      return h("div", { class: "cu-list-meta" }, [
        h(CuAvatar, { src: props.avatar, size: props.avatarSize }),
        h("div", { class: "cu-list-meta__content" }, [
          h("div", { class: "title" }, props.title),
          h("div", { class: "description" }, props.description)
        ])
      ]);
    };
  }
});
export {
  ListMeta as default
};
