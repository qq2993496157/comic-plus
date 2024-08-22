import { inject, defineComponent, h, PropType } from 'vue';
import { RenderData, TABLE_V2_PROVIDE } from '../type';

export default defineComponent({
  name: 'ExpandRow',
  props: {
    data: Object as PropType<RenderData>
  },
  setup(props) {
    const { columns, expandColumn } = inject(TABLE_V2_PROVIDE);

    return () => {
      return h(
        'tr',
        h(
          'td',
          {
            rowspan: '1',
            colspan: columns.value.length
          },
          expandColumn.value?.default?.({ row: props.data.row })
        )
      );
    };
  }
});
