import { Component, PropType, defineComponent, h } from 'vue';
import { isVueComponent } from '../../../utils';

export default defineComponent({
  name: 'CuOptionGroup',
  props: { label: String, icon: Object as PropType<Component> },
  setup(props, { slots }) {
    return () => {
      return h('ul', { class: 'cu-option-group' }, [
        h(
          'li',
          { class: 'cu-option-group__label' },
          slots.label
            ? slots.label()
            : [isVueComponent(props.icon) && h(props.icon, { class: 'cu-option-group__icon' }), props.label]
        ),
        slots.default()
      ]);
    };
  }
});
