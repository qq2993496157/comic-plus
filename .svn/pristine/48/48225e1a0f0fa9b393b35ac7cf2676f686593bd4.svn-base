import { defineComponent, h, provide } from 'vue';
import '../style/button.css';
import { buttonGroupProps } from './main.props';
import { BUTTONGROUP_PROVIDE } from './type';

export default defineComponent({
  name: 'CuButtonGroup',
  props: buttonGroupProps,
  setup(props, { slots }) {
    provide(BUTTONGROUP_PROVIDE, {
      props
    });

    return () => h('span', { class: ['cu-button-group', { 'is-round': props.round }] }, slots);
  }
});
