import { computed, defineComponent, h, provide, ref, watch } from 'vue';
import '../style/schedule.css';
import Calendar from './calendar.vue';
import Content from './content.vue';
import { SCHEDULE_PROVIDE } from './type';
import { scheduleEmits, scheduleProps } from './main.props';
import { isNumber } from '../../../utils';

export default defineComponent({
  name: 'CuSchedule',
  props: scheduleProps,
  emits: scheduleEmits,
  setup(props, { emit, expose, slots }) {
    const date = ref(new Date());
    const calendarRef = ref();

    const spacing = computed(() => {
      return isNumber(props.gap) ? Math.max(props.gap, 50) : 100;
    });

    watch(date, (val) => {
      emit('changeDate', val);
    });

    provide(SCHEDULE_PROVIDE, {
      date,
      props,
      spacing
    });

    function selectDate(value) {
      calendarRef.value?.selectDate(value);
    }

    expose({
      selectDate
    });

    return () => {
      return h('div', { class: 'cu-schedule' }, [
        h(Calendar, { ref: calendarRef }, slots.calendar?.()),
        h(Content, null, {
          header: (params: any) => slots.header && h(slots.header, params),
          card: (params: any) => slots.card && h(slots.card, params),
          empty: (params: any) => slots.empty && h(slots.empty, params)
        })
      ]);
    };
  }
});
