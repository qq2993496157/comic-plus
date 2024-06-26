import { ref, computed, watch, defineComponent, h } from 'vue';
import { useIntervalFn } from '@vueuse/core';
import '../style/countdown.css';
import { isString } from '../../../utils';
import { formatTime } from './utils';
import { countdownProps, countdownEmits } from './main.props';

export default defineComponent({
  name: 'CuCountdown',
  props: countdownProps,
  emits: countdownEmits,
  setup(props, { slots, emit }) {
    const temptime = ref(getTime(props.value) - Date.now());

    const displayValue = computed(() => formatTime(temptime.value, props.format));

    const { pause, resume } = useIntervalFn(() => {
      const timestamp = getTime(props.value);
      let diff = timestamp - Date.now();
      if (diff <= 0) {
        emit('finish');
        pause();
      }
      temptime.value = diff <= 0 ? 0 : diff;
    }, 30);

    function getTime(time: number | string) {
      if (isString(time)) {
        if (isNaN(new Date(time).getTime())) {
          throw 'times is not legitimate';
        }
      }
      return new Date(time).getTime();
    }

    watch(
      () => props.value,
      () => {
        resume();
      },
      {
        immediate: true
      }
    );

    return () => {
      return h('span', { class: 'cu-countdown' }, [
        slots.prefix?.() ?? props.prefix,
        h('span', { class: 'cu-countdown_time' }, displayValue.value),
        slots.suffix?.() ?? props.suffix
      ]);
    };
  }
});
