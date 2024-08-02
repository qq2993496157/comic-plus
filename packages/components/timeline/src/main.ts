import { defineComponent, h, provide } from 'vue';
import '../style/timeline.css';
import { timelineProps } from './main.props';
import { TIMELINE_PROVIDE } from './type';

export default defineComponent({
  name: 'CuTimeline',
  props: timelineProps,
  setup(props, { slots }) {
    provide(TIMELINE_PROVIDE, {
      props
    });
    return () => h('ul', { class: ['cu-timeline', { 'is-cross': props.cross }] }, slots);
  }
});
