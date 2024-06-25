import { inject, onMounted, onBeforeUnmount, getCurrentInstance, defineComponent, h } from 'vue';
import { ELEVATOR_PROVIDE } from './type';

export default defineComponent({
  name: 'CuElevatorItem',
  props: {
    name: String,
    label: String
  },
  setup(props, { slots }) {
    const instance = getCurrentInstance()!;

    const { setItem, removeItem } = inject(ELEVATOR_PROVIDE);

    onMounted(() => {
      setItem({ name: props.name, label: props.label, uid: instance.uid });
    });
    onBeforeUnmount(() => {
      removeItem(instance.uid);
    });

    return () => {
      return h('div', { class: 'cu-elevator-item', 'elevator-name': props.name }, slots);
    };
  }
});
