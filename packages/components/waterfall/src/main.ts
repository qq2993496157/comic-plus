import { ref, onUpdated, defineComponent, h, provide, onMounted } from 'vue';
import '../style/waterfall.css';
import { addClass, debounce, removeClass } from '../../../utils';
import { waterfallProps, waterfallEmits } from './main.props';
import { WATERFALL_PROVIDE } from './type';
import { useResize } from '../../../hooks';

/**
 * @description: 找出数组最大值或最小值的下标
 * @param {number[]} arr 数组
 * @param {boolean} flag  true为最大值 false为最小值  默认false
 * @return {number}
 */
const findIndexOfMinOrMax = (arr: number[], flag?: boolean): number => {
  if (arr.length === 0) {
    return -1;
  }
  let flagValue: number;
  if (flag) {
    flagValue = Math.max(...arr);
  } else {
    flagValue = Math.min(...arr);
  }
  const index = arr.indexOf(flagValue);
  return index;
};

export default defineComponent({
  name: 'CuWaterfall',
  props: waterfallProps,
  emits: waterfallEmits,
  setup(props, { slots, emit }) {
    const waterfallRef = ref(null);
    const containerWidth = ref(0);

    //虽然useResize监听自带防抖，但是不适用这里的情况，因为item组件也需要执行resize效果
    //所以这里单独写一个dFc 将所有resize触发执行的callback都指向这个dFc以减少开销
    const dFc = debounce(setWaterfallStyle, 300);

    function setWaterfallStyle() {
      if (!waterfallRef.value || !containerWidth.value) return;

      let colNum: number;
      if (props.colWidth) {
        colNum = Math.floor((containerWidth.value + props.gutter) / (props.colWidth + props.gutter));
        colNum = Math.min(colNum, waterfallRef.value.children.length);
      } else {
        colNum = props.col;
      }

      let childrenList = new Array(colNum).fill(0); //定义一个子集用于累加每列的高度

      let list = Array.from(waterfallRef.value.children).filter(
        //防犊子  防止某些傻逼不使用item组件
        (el: HTMLElement) => el.classList.value.indexOf('cu-waterfall-item') >= 0
      );

      list.forEach((item: HTMLElement) => {
        let itemRect = item.getBoundingClientRect();
        let maxIdx = findIndexOfMinOrMax(childrenList);
        let w = (containerWidth.value - props.gutter * (colNum - 1)) / colNum;
        let x = maxIdx * w + maxIdx * props.gutter;
        let y = childrenList[maxIdx];

        item.style.setProperty('width', w + 'px');
        item.style.setProperty('transform', `translate3d(${x}px,${y}px,0px)`);
        item.style.setProperty('visibility', 'visible');

        item.setAttribute('data-show', 'show');

        addAnimation(item);
        childrenList[maxIdx] += itemRect.height + props.gutter;
      });

      waterfallRef.value.style.setProperty('height', Math.max(...childrenList) - props.gutter + 'px');
      emit('update');
    }

    /**
     * @description: 执行添加动画class 利用loaded来判断是否是初次加载，如果是就不在执行fadeIn效果
     * @param {HTMLElement} el
     * @return {*}
     */
    function addAnimation(el: HTMLElement): void {
      if (el.classList.value.indexOf('loaded') >= 0) return;
      addClass(el, 'loaded');
      if (props.fadeIn) addClass(el, 'fadeIn');
      setTimeout(() => {
        removeClass(el, 'fadeIn');
        el.style.setProperty('transition', 'transform 300ms');
      }, 500);
    }

    useResize(waterfallRef, (rect) => {
      containerWidth.value = rect.width;
      dFc();
    });

    provide(WATERFALL_PROVIDE, {
      updateStyle: dFc
    });

    onMounted(() => {
      containerWidth.value = waterfallRef.value.getBoundingClientRect().width;
      setWaterfallStyle();
    });

    onUpdated(dFc);

    return () => {
      return h('div', { class: 'cu-waterfall', ref: waterfallRef }, slots);
    };
  }
});
