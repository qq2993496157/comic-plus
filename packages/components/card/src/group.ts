import { defineComponent, h } from 'vue';
import { cardGroupProps } from './group.props';
import '../style/card.css';

export default defineComponent({
  name: 'CuCardGroup',
  setup(props, { slots }) {
    return () => h('span', { class: ['cu-card-group', props.cardHoverEffect] }, slots);
  },
  props: cardGroupProps
});
