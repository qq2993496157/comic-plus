import { computed, defineComponent, h, inject, isVNode, ref } from 'vue';
import { TABLE_V2_PROVIDE } from '../type';
import TableColgroup from '../components/table-colgroup';

export default defineComponent({
  name: 'TableFooter',
  setup() {
    const { props, columns, getFixedIndex, getCellClass } = inject(TABLE_V2_PROVIDE);

    const defaultSummaryMethod = ({ columns, datas }) => {
      const sum = columns.map((col, idx) => {
        if (idx === 0) return props.sumText;
        return datas.reduce((result, row) => {
          if (isNaN(result + Number(row[col.prop]))) {
            return '';
          } else {
            return result + Number(row[col.prop]);
          }
        }, 0);
      });
      return sum;
    };

    const params = ref({
      columns: columns.value.map((v) => v.props),
      datas: props.data
    });

    const footerCols = props.summaryMethod?.(params.value) || defaultSummaryMethod(params.value);

    return () => {
      return h(
        'div',
        {
          class: 'cu-table-v2__footer'
        },
        h(
          'table',
          {
            cellspacing: 0,
            cellpadding: 0
          },
          [
            h(TableColgroup),
            h(
              'tfoot',
              h('tr', { class: 'cu-table__row' }, [
                columns.value.map((col, colIdx) => {
                  return h(
                    'th',
                    {
                      key: col.uid,
                      class: [
                        'cu-table__th',
                        col.fixed ? 'fixed-' + col.fixed : undefined,
                        { 'fixed-shadow-left': getFixedIndex.value.left == colIdx },
                        { 'fixed-shadow-right': getFixedIndex.value.right == colIdx }
                      ],
                      style: col.style,
                      rowspan: 1,
                      colspan: 1
                    },
                    h('div', { class: ['cu-table__cell', ...getCellClass(col)] }, footerCols[colIdx])
                  );
                })
              ])
            )
          ]
        )
      );
    };
  }
});
