import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'CuListItem',
  setup(_, { slots }) {
    return () => {
      return h('li', { class: 'cu-list-item' }, [
        h('div', { class: 'cu-list-item__container' }, slots.default()),
        slots.extra && h('div', { class: 'extra' }, slots.extra())
      ]);
    };
  }
});
