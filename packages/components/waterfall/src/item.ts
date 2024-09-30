import { defineComponent, h, ref, inject } from 'vue';
import { WATERFALL_PROVIDE } from './type';
import { useResize } from '../../../hooks';
export default defineComponent({
  name: 'CuWaterfallItem',
  setup(_, { slots }) {
    const waterfallItemRef = ref(null);

    const { updateStyle } = inject(WATERFALL_PROVIDE);

    useResize(waterfallItemRef, updateStyle);

    return () => h('div', { class: 'cu-waterfall-item', ref: waterfallItemRef }, slots);
  }
});
