import { CSSProperties, PropType, defineComponent, h } from 'vue';
import { isString } from '../../../../utils';

type ActionItem = {
  label?: string;
  value: string;
  style?: CSSProperties;
};

export default defineComponent({
  name: 'CuListAction',
  props: {
    actions: Array as PropType<string[] | ActionItem[]>,
    align: {
      type: String as PropType<'start' | 'center' | 'end'>,
      default: 'end'
    }
  },
  emits: {
    click: (action: string) => isString(action)
  },
  setup(props, { emit }) {
    const alignStyle = {
      left: 'flex-start',
      center: 'center',
      end: 'flex-end'
    };

    const itemClick = (item: string | ActionItem) => {
      if (isString(item)) {
        emit('click', item);
      } else {
        emit('click', item.value);
      }
    };

    return () => {
      return h('div', { class: 'cu-list-action', style: { 'justify-content': alignStyle[props.align] } }, [
        props.actions.map((item) => {
          return h(
            'span',
            { style: item.style, onclick: () => itemClick(item) },
            isString(item) ? item : item.label ?? item.value
          );
        })
      ]);
    };
  }
});
