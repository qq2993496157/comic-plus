import { ref, computed, inject, watch, getCurrentInstance, onMounted, defineComponent, h } from 'vue';
import { useEventListener } from '@vueuse/core';
import { COLORPICKER_PROVIDE } from '../type';

export default defineComponent({
  name: 'CuAlphaSlider',
  setup() {
    const { color } = inject(COLORPICKER_PROVIDE);
    const instance = getCurrentInstance();

    var clearMove: (() => void) | null, clearUp: (() => void) | null;

    const x = ref(0);

    const barStyle = computed(() => {
      return {
        left: x.value + 'px'
      };
    });


    function update(c: any) {
      var { clientWidth }: any = instance?.vnode.el;
      clientWidth = Math.max(clientWidth, 250);

      x.value = (clientWidth * c) / 100;
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
      if (color) {
        const ele = instance?.vnode.el;
        let val = (x.value / ele?.clientWidth) * 100;
        color.set('alpha', val);
      }
    }

    
    watch(
      () => color.get('alpha'),
      (val) => {
        update(val);
      }
    );
    onMounted(() => {
      update(color.get('alpha'));
    });

    return () => {
      return h('div', { class: 'cu-color-picker__alpha', onmousedown: mousedown }, [
        h('div', { class: 'mixin_black' }),
        h('div', { class: 'bar', style: barStyle.value })
      ]);
    };
  }
});
