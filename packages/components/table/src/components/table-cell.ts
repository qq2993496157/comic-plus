import { defineComponent, h, PropType, inject } from 'vue';
import { TABLE_PROVIDE, RenderData, Span, TableData, Column } from '../type';
import { CuCheckbox as Checkbox } from '../../../checkbox';
import { isArray, isFunction, isObject } from '../../../../utils';
import { Loading, Right } from '../../../../icons';

export default defineComponent({
  name: 'TableCell',
  props: {
    data: Object as PropType<RenderData>,
    row: Object as PropType<TableData>,
    rowIndex: Number,
    col: Object as PropType<Column>,
    colIndex: Number,
    showExpand: Boolean
  },
  emit: ['change-expand'],
  setup(props, { emit }) {
    const {
      props: injectProps,
      getFixedIndex,
      expandColumn,
      firstDefaultColumnIndex,
      isTreeNode,
      selectRow,
      getCellClass,
      changeShowMore
    } = inject(TABLE_PROVIDE);

    function setSpanAttrbuilt() {
      let span = {
        rowspan: 1,
        colspan: 1
      };
      if (injectProps.spanMethod) {
        let params = {
          row: props.row,
          rowIndex: props.rowIndex,
          col: props.col.props,
          colIndex: props.colIndex
        };
        let result: Span = injectProps.spanMethod(params);
        if (isArray(result)) {
          span.rowspan = result[0];
          span.colspan = result[1];
        } else if (isObject(result)) {
          span.rowspan = result.rowspan;
          span.colspan = result.colspan;
        }
      }
      return span;
    }

    const showWithSpan = (span) => {
      return !(('rowspan' in span && span.rowspan === 0) || ('colspan' in span && span.colspan === 0));
    };

    const helpRender = () => {
      const type = props.col.type;
      if (type === 'index') {
        if (props.col.props.index) {
          return isFunction(props.col.props.index) ? props.col.props.index(props.rowIndex) : props.col.props.index;
        } else {
          return props.rowIndex + 1;
        }
      } else if (type === 'selection') {
        return h(Checkbox, {
          modelValue: props.data.selection,
          'onUpdate:modelValue': ($event) => selectRow(props.data, $event)
        });
      } else if (type === 'expand') {
        return h(
          'span',
          {
            class: [
              'expand-icon',
              {
                'is-expand': props.showExpand
              }
            ],
            onClick: () => emit('change-expand')
          },
          h(Right)
        );
      } else if (type === 'default') {
        let result = [];

        if (props.colIndex === firstDefaultColumnIndex.value && !expandColumn.value) {
          result = [
            props.data._level > 0
              ? h('span', {
                  class: 'cu-table__indent',
                  style: { width: props.data._level * injectProps.indent + 'px' }
                })
              : null,
            isTreeNode.value && !props.data.treeExpand ? h('span', { class: 'cu-tabel__placeholder' }) : null,
            props.data.treeExpand
              ? h(props.data.loading ? Loading : Right, {
                  class: ['expand-icon', { 'is-expand': props.data.show }, { 'is-loading': props.data.loading }],
                  onClick: () => changeShowMore(props.data)
                })
              : null
          ];
        }

        if (props.col.default) {
          result.push(...props.col.default({ row: props.row }));
        } else {
          result.push(props.row[props.col.props.prop] ?? injectProps.nullSymbol);
        }
        return result;
      } else {
        return null;
      }
    };

    return () => {
      const spanAttrs = setSpanAttrbuilt();
      const renderCell = helpRender();
      return showWithSpan(spanAttrs)
        ? h(
            'td',
            {
              class: [
                'cu-table__td',
                props.col.fixed ? 'fixed-' + props.col.fixed : undefined,
                { 'fixed-shadow-left': getFixedIndex.value.left == props.colIndex },
                { 'fixed-shadow-right': getFixedIndex.value.right == props.colIndex },
                isFunction(injectProps.cellClass)
                  ? injectProps.cellClass({
                      row: props.row,
                      rowIndex: props.rowIndex,
                      col: props.col,
                      colIndex: props.colIndex
                    })
                  : injectProps.cellClass
              ],
              style: props.col.style,
              rowspan: spanAttrs.rowspan,
              colspan: spanAttrs.colspan
            },
            h(
              'div',
              {
                class: ['cu-table__cell', ...getCellClass(props.col)]
              },
              renderCell
            )
          )
        : null;
    };
  }
});
