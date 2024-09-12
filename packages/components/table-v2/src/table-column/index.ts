import { computed, defineComponent, getCurrentInstance, h, inject, onUnmounted, reactive } from 'vue';
import { tableColumnProps } from './column.props';
import { Column, TABLE_V2_PROVIDE } from '../type';
import { isBoolean } from '../../../../utils';

export default defineComponent({
  name: 'CuTableColumn',
  props: tableColumnProps,
  setup(props, { slots }) {
    const instance = getCurrentInstance()!;
    const { addColumn, removeColumn } = inject(TABLE_V2_PROVIDE);

    const colName = 'cu-table-column__key_' + instance.uid;

    const getFixedString = computed(() => {
      if (props.fixed) {
        if (isBoolean(props.fixed)) {
          return props.fixed ? 'left' : null;
        }
        return props.fixed;
      }
      return null;
    });

    const columnInstance = reactive({
      uid: instance.uid,
      props: props,
      type: props?.type,
      fixed: getFixedString.value,
      showExpand: false,
      default: slots.default,
      header: slots.header,
      style: {}
    }) as Column;

    addColumn(columnInstance);

    onUnmounted(() => {
      removeColumn(instance.uid);
    });

    return () => {
      return h('div', { 'col-name': colName });
    };
  }
});
