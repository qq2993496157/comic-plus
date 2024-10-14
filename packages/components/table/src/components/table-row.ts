import { PropType, computed, inject, ref, defineComponent, h } from 'vue';
import { TABLE_PROVIDE, RenderData } from '../type';
import { isFunction } from '../../../../utils';
import expandRow from './expand-row';
import tableCell from './table-cell';

export default defineComponent({
  name: 'TableRow',
  props: {
    data: Object as PropType<RenderData>,
    rowIndex: Number
  },
  setup(props) {
    const { props: injectProps, columns, rowSelection, clickRow } = inject(TABLE_PROVIDE);

    const showExpand = ref(false);
    const row = computed(() => props.data.row!);

    function getStripeClass(n: number) {
      if (!injectProps.stripe) return;
      return 'cu-table__row--stripe-' + ((n + 1) % 2 === 0 ? 'even' : 'odd');
    }

    return () => {
      let renderRow = [
        h(
          'tr',
          {
            class: [
              'cu-table__row',
              isFunction(injectProps.rowClass)
                ? injectProps.rowClass({ row: row.value, rowIndex: props.rowIndex })
                : injectProps.rowClass,
              { 'current-row': rowSelection.newIdx === props.rowIndex },
              getStripeClass(props.rowIndex),
              props.data.treeExpand || props.data._parentKey ? 'cu-table__row--level-' + props.data._level : undefined
            ],
            style: [
              {
                display: props.data.display ? undefined : 'none'
              },
              isFunction(injectProps.rowStyle)
                ? injectProps.rowStyle({ row: row.value, rowIndex: props.rowIndex })
                : injectProps.rowStyle
            ],
            onclick: () => clickRow(row.value, props.rowIndex)
          },
          columns.value.map((col, colIndex) =>
            h(tableCell, {
              key: col.uid,
              data: props.data,
              row: row.value,
              rowIndex: props.rowIndex,
              col,
              colIndex,
              showExpand: showExpand.value,
              onChangeExpand: () => (showExpand.value = !showExpand.value)
            })
          )
        )
      ];
      if (props.data.expand()) {
        renderRow.push(
          h(expandRow, {
            data: props.data,
            style: { display: showExpand.value ? undefined : 'none' }
          })
        );
      }
      return renderRow;
    };
  }
});
