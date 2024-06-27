import { PropType, defineComponent, h } from 'vue';
import { Marks } from '../type';
import { isArray, isObject } from '../../../../utils';

export default defineComponent({
  name: 'CuSliderSteps',
  props: {
    marks: Object as PropType<Marks>
  },
  setup(props) {
    return () => {
      let marks = Object.keys(props.marks);

      return h(
        'ul',
        { class: 'cu-slider__marks' },
        isArray(marks)
          ? marks.map((key) => {
              let value = props.marks[key];
              return h('li', { class: 'cu-slider__mark', style: { left: key + '%' } }, [
                h('span', { class: ['cu-slider__mark-label', isObject(value) ? value.position : undefined] }, [
                  h('span', { style: isObject(value) && value.style }, isObject(value) ? value.label : value)
                ])
              ]);
            })
          : null
      );
    };
  }
});
