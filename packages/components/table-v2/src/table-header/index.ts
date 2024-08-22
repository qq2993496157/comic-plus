import { defineComponent, h, inject } from 'vue';
import { TABLE_V2_PROVIDE } from '../type';
import { CuCheckbox as Checkbox } from '../../../checkbox';
import TableColgroup from '../components/table-colgroup';
import { isFunction } from '../../../../utils';

export default defineComponent({
  name: 'TableHeader',
  setup() {
    const { props, columns, isAllSelected, indeterminate, getFixedIndex, selectAll, getCellClass } =
      inject(TABLE_V2_PROVIDE);

    const helpRender = (col) => {
      const type = col.props.type;
      if (type === 'selection') {
        return h(Checkbox, {
          modelValue: isAllSelected.value,
          indeterminate: indeterminate.value,
          onChange: selectAll
        });
      } else if (type === 'index') {
        return col.props.label;
      } else if (type === 'default') {
        return col.header ? col.header({ column: '内容待定' }) : col.props.label;
      }
    };

    return () => {
      return h(
        'div',
        {
          class: 'cu-table-v2__header'
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
              'thead',
              h(
                'tr',
                {
                  class: ['cu-table__row', props.headerRowClass],
                  style: props.headerRowStyle
                },
                [
                  columns.value.map((col, colIdx) => {
                    return h(
                      'th',
                      {
                        key: col.uid,
                        class: [
                          'cu-table__th',
                          col.fixed ? 'fixed-' + col.fixed : undefined,
                          { 'fixed-shadow-left': getFixedIndex.value.left == colIdx },
                          { 'fixed-shadow-right': getFixedIndex.value.right == colIdx },
                          isFunction(props.headerCellClass)
                            ? props.headerCellClass({ col, colIndex: colIdx })
                            : props.headerCellClass
                        ],
                        style: col.style,
                        rowspan: 1,
                        colspan: 1
                      },
                      h('div', { class: ['cu-table__cell', ...getCellClass(col)] }, helpRender(col))
                    );
                  })
                ]
              )
            )
          ]
        )
      );
    };
  }
});
