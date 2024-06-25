import { defineComponent, h, inject, nextTick, onBeforeUnmount, onMounted, watch } from 'vue';
import { tabPaneProps } from './pane.props';
import { TABS_PROVIDE } from './type';

export default defineComponent({
  name: 'CuTabPane',
  props: tabPaneProps,
  setup(props, { slots }) {
    const { props: injectProps, addTab, removeTab } = inject(TABS_PROVIDE);

    watch(
      () => props.name,
      (_, old) => {
        removeTab(old);
        nextTick(() => {
          addTab({
            ...props,
            slots: slots['label']?.()
          });
        });
      }
    );

    onMounted(() => {
      addTab({
        ...props,
        slots: slots['label']?.()
      });
    });
    onBeforeUnmount(() => {
      removeTab(props.name);
    });

    return () => {
      return injectProps.onlyTab
        ? null
        : h(
            'span',
            {
              class: 'cu-tabs-pane',
              'tab-index': props.name,
              style: {
                display: injectProps.modelValue === props.name ? undefined : 'none'
              }
            },
            slots.default?.()
          );
    };
  }
});
