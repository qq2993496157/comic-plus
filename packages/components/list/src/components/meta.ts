import { defineComponent, h } from 'vue';
import { CuAvatar } from '../../../avatar';

export default defineComponent({
  name: 'CuListMeta',
  components: { CuAvatar },
  props: {
    avatar: String,
    avatarSize: Number,
    title: String,
    description: String
  },
  setup(props) {
    return () => {
      return h('div', { class: 'cu-list-meta' }, [
        h(CuAvatar, { src: props.avatar, size: props.avatarSize }),
        h('div', { class: 'cu-list-meta__content' }, [
          h('div', { class: 'cu-list-meta__title' }, props.title),
          h('div', { class: 'cu-list-meta__description' }, props.description)
        ])
      ]);
    };
  }
});
