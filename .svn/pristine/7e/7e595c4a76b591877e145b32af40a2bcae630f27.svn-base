import { ref, computed, inject, watch, getCurrentInstance, onMounted, defineComponent, h } from 'vue';
import { useEventListener } from '@vueuse/core';
import { COLORPICKER_PROVIDE } from '../type';

export default defineComponent({
  name: 'CuHslSlider',
  setup() {
    const { color } = inject(COLORPICKER_PROVIDE);
    const instance = getCurrentInstance();
    const x = ref(0);
    var clearMove: (() => void) | null, clearUp: (() => void) | null;

    const barStyle = computed(() => {
      return {
        left: x.value + 'px'
      };
    });

    const hueValue = computed(() => {
      return color.get('hue');
    });

    watch(
      () => hueValue.value,
      (val) => {
        update(val);
      }
    );
    onMounted(() => {
      update(color.get('hue'));
    });

    function update(c: any) {
      var { clientWidth }: any = instance?.vnode.el;
      clientWidth = Math.max(clientWidth, 250);
      x.value = (c / 360) * clientWidth;
    }

    function mousedown(e: MouseEvent) {
      const ele = instance?.vnode.el;
      let left = e.offsetX;
      left = Math.max(0, left);
      left = Math.min(left, ele?.clientWidth);
      x.value = left;
      updateColor();
      clearMove = useEventListener(document, 'mousemove', move);
      clearUp = useEventListener(document, 'mouseup', up);
    }

    function move(e: MouseEvent) {
      const ele = instance?.vnode.el;
      let left = e.offsetX;
      left = Math.max(0, left);
      left = Math.min(left, ele?.clientWidth);
      x.value = left;
      updateColor();
    }

    function up() {
      clearMove?.();
      clearUp?.();
    }

    function updateColor() {
      const ele = instance?.vnode.el;
      color.set('hue', Math.round(360 * (x.value / ele?.clientWidth)));
    }

    return () => {
      return h('div', { class: 'cu-color-picker__hsl', onmousedown: mousedown }, [
        h('div', { class: 'bar', style: barStyle.value })
      ]);
    };
  }
});
