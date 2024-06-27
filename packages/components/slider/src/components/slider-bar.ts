import { defineComponent, computed, inject, h } from 'vue';
import { SLIDER_PROVIDE } from '../type';

export default defineComponent({
  name: 'CuSliderBar',
  setup() {
    const { sliderValue, sliderValue2, props } = inject(SLIDER_PROVIDE);

    const barStyle = computed(() => {
      if (props.range) {
        let values = [sliderValue.value, sliderValue2.value].sort((a, b) => a - b);
        return {
          left: values[0] + '%',
          width: values[1] - values[0] + '%'
        };
      } else {
        return { width: sliderValue.value + '%' };
      }
    });

    return () => {
      return h('div', { class: 'cu-slider__bar', style: barStyle.value });
    };
  }
});
