import { ref, onMounted, onUpdated, watch, defineComponent, h, provide } from 'vue';
import { useElementSize } from '@vueuse/core';
import '../style/waterfall.css';
import { findIndexOfMinOrMax, debounce } from '../../../utils';
import { waterfallProps, waterfallEmits } from './main.props';
import { WATERFALL_PROVIDE } from './type';

export default defineComponent({
  name: 'CuWaterfall',
  props: waterfallProps,
  emits: waterfallEmits,
  setup(props, { slots, emit }) {
    const waterfallRef = ref(null);
    const debounceSetStyle = debounce(setWaterfallStyle);

    const { width } = useElementSize(waterfallRef);

    watch(width, () => {
      debounceSetStyle();
    });

    function setWaterfallStyle() {
      if (!waterfallRef.value || !width.value) return;

      let childrenList = new Array();
      let colNum: number;
      if (props.itemWidth) {
        colNum = Math.floor((width.value + props.gutter) / (props.itemWidth + props.gutter));
        colNum = Math.min(colNum, waterfallRef.value.children.length);
      } else {
        colNum = props.col;
      }
      for (let i = 0; i < colNum; i++) {
        childrenList.push(0);
      }
      let gutterSize = props.gutter;
      if (props.itemWidth) {
        gutterSize = (width.value - colNum * props.itemWidth) / (colNum - 1);
      }
      let list = Array.from(waterfallRef.value.children);
      for (let i = 0; i < list.length; i++) {
        let item: any = list[i];
        let itemRect = item.getBoundingClientRect();
        let maxIdx = findIndexOfMinOrMax(childrenList);
        let w = props.itemWidth ? props.itemWidth : (width.value - props.gutter * (props.col - 1)) / props.col;
        let x = maxIdx * w + maxIdx * (gutterSize <= 0 ? props.gutter : gutterSize);
        let y = childrenList[maxIdx];
        item.style.setProperty('width', w + 'px');
        item.style.setProperty('left', `${x}px`);
        item.style.setProperty('opacity', 1);
        item.style.setProperty('top', y - 30 + 'px');
        item.style.setProperty('transform', `translateY(30px)`);
        childrenList[maxIdx] += itemRect.height + props.gutter;
      }
      waterfallRef.value.style.setProperty('height', Math.max(...childrenList) - props.gutter + 'px');
      emit('update');
    }

    onMounted(() => {
      setWaterfallStyle();
    });
    onUpdated(() => {
      setWaterfallStyle();
    });

    provide(WATERFALL_PROVIDE, {
      updateStyle: debounceSetStyle
    });

    return () => {
      return h('div', { class: 'cu-waterfall', ref: waterfallRef }, slots);
    };
  }
});
