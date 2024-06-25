import { PropType, defineComponent, h, inject, reactive } from 'vue';
import { COLORPICKER_PROVIDE } from '../type';
import Color from '../../utils/color';

export default defineComponent({
  name: 'CuColorPreset',
  props: {
    predefine: Array as PropType<string[]>
  },
  setup(props) {
    const { props: injectProps, color } = inject(COLORPICKER_PROVIDE);

    const rgbaColors = reactive(parseColors(props?.predefine)) as Color[];

    function parseColors(colors: string[]) {
      return colors.map((value) => {
        const c = new Color();
        c.enableAlpha = true;
        c.format = injectProps.format || 'rgba';
        c.fromString(value);
        return c;
      });
    }

    function selectColor(index: number) {
      color.fromString(props?.predefine[index]);
    }

    return () => {
      return h('ul', { class: 'cu-color-picker__preset' }, [
        rgbaColors.map((item, idx) => {
          return h('li', { onclick: () => selectColor(idx) }, [h('span', { style: { background: item.value } })]);
        })
      ]);
    };
  }
});
