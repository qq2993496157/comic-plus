import { defineComponent, h, inject } from 'vue';
import { COLORPICKER_PROVIDE } from '../type';

export default defineComponent({
  name: 'CuColorPreview',
  setup() {
    const { props, color } = inject(COLORPICKER_PROVIDE);

    return () => {
      return h('div', { class: ['cu-color-picker__preview', { alpha: props.alpha }] }, [
        h('div', { class: 'preview__box', style: { background: color.value } })
      ]);
    };
  }
});
