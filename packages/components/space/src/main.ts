import { computed, defineComponent, h } from 'vue';
import '../style/space.css';
import { isNumber, filterEmpty } from '../../../utils';
import { spaceProps } from './main.props';

export default defineComponent({
  name: 'CuSpace',
  props: spaceProps,
  setup(props, { slots }) {
    const sizeStringEnum = {
      small: '8px',
      default: '12px',
      large: '16px'
    };

    const spaceStyle = computed(() => {
      return {
        'align-items': props.align,
        'flex-wrap': props.wrap ? 'wrap' : 'nowrap',
        gap: isNumber(props.size) ? props.size + 'px' : sizeStringEnum[props.size],
        width: props.fill ? '100%' : undefined
      };
    });
    const itemStyle = computed(() => {
      if (!props.fill) return undefined;
      return {
        'flex-grow': 1,
        'min-width': props.fillRatio + '%'
      };
    });

    return () => {
      const items = filterEmpty(slots.default?.() ?? []);
      const len = items.length;
      if (len === 0) return null;

      return h(
        'div',
        { class: ['cu-space', 'cu-space--' + props.direction], style: spaceStyle.value },
        items.map((child, index) => {
          const item = h('div', { class: 'cu-space-item', style: itemStyle.value }, [child]);
          if (props.split && index + 1 < len) {
            return [item, h('div', { class: 'cu-space-split' }, [props.split])];
          }
          return item;
        })
      );
    };
  }
});
