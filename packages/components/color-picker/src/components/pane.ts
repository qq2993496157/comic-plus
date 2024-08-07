import { ref, computed, inject, watch, getCurrentInstance, onMounted, defineComponent, h } from 'vue';
import { useEventListener } from '@vueuse/core';
import { COLORPICKER_PROVIDE } from '../type';

export default defineComponent({
  name: 'CuColorPane',
  setup() {
    const { color } = inject(COLORPICKER_PROVIDE);
    const instance = getCurrentInstance();
    const x = ref(0);
    const y = ref(0);
    var clearMove: (() => void) | null, clearUp: (() => void) | null;

    const background = computed(() => {
      return `hsl(${color.get('hue')}deg 100% 50%)`;
    });

    const colorValue = computed(() => {
      return color.get('value');
    });

    function update(value: any) {
      const saturation = color.get('saturation');
      const ele = instance?.vnode.el;
      let { clientWidth, clientHeight }: any = ele;
      clientWidth = Math.max(clientWidth, 288);
      clientHeight = Math.max(clientHeight, 160);
      x.value = (saturation * clientWidth) / 100;
      y.value = ((100 - value) * clientHeight) / 100;
    }

    const spotStyle = computed(() => {
      return {
        left: x.value + 'px',
        top: y.value + 'px'
      };
    });

    function mousedown(e) {
      setLeftAndTop(e);
      updateColor();
      clearMove = useEventListener(document, 'mousemove', move);
      clearUp = useEventListener(document, 'mouseup', up);
    }

    function move(e: MouseEvent) {
      setLeftAndTop(e);
      updateColor();
    }

    function setLeftAndTop(e) {
      const ele = instance?.vnode.el;
      const rect = ele?.getBoundingClientRect();
      let left = e.clientX - rect.left;
      let top = e.clientY - rect.top;
      left = Math.max(0, left);
      left = Math.min(left, rect.width);

      top = Math.max(0, top);
      top = Math.min(top, rect.height);

      x.value = left;
      y.value = top;
    }

    function up() {
      clearMove?.();
      clearUp?.();
    }

    function updateColor() {
      if (color) {
        const ele = instance?.vnode.el;
        const { clientWidth, clientHeight }: any = ele;
        color.set({
          saturation: (x.value / clientWidth) * 100,
          value: 100 - (y.value / clientHeight) * 100
        });
      }
    }

    watch(
      () => colorValue.value,
      (val) => {
        update(val);
      }
    );

    onMounted(() => {
      update(colorValue.value);
    });

    return () => {
      return h(
        'div',
        { class: 'cu-color-picker__pane', style: { background: background.value }, onmousedown: mousedown },
        [
          h('div', { class: 'mixin_white' }),
          h('div', { class: 'mixin_black' }),
          h('div', { class: 'spot', style: spotStyle.value })
        ]
      );
    };
  }
});
