import { defineComponent, h, ref, watch, inject } from 'vue';
import { useElementSize } from '@vueuse/core';
import { WATERFALL_PROVIDE } from './type';
export default defineComponent({
  name: 'CuWaterfallItem',
  setup(_, { slots }) {
    const waterfallItem = ref(null);
    const { width, height } = useElementSize(waterfallItem);

    const { updateStyle } = inject(WATERFALL_PROVIDE);

    watch([width, height], () => {
      updateStyle();
    });

    return () => h('div', { class: 'cu-waterfall-item', ref: waterfallItem }, slots);
  }
});
