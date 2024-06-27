import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'CuSliderSteps',
  props: {
    steps: Number
  },
  setup(props) {
    return () => {
      return h(
        'ul',
        { class: 'cu-slider__steps' },
        Array.from({ length: props.steps }, (_, index) => index + 1).map((idx) => {
          return h('li', { class: 'cu-slider__step', style: { left: idx * (100 / (props.steps + 1)) + '%' } });
        })
      );
    };
  }
});
