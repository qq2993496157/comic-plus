import { inject, defineComponent, h } from 'vue';
import { TABLE_V2_PROVIDE } from '../type';
import TableColgroup from '../components/table-colgroup';
import TableRow from '../components/table-row';

export default defineComponent({
  name: 'TableBody',
  setup(_, { slots }) {
    const { renderData } = inject(TABLE_V2_PROVIDE);

    return () => {
      return h(
        'div',
        {
          class: 'cu-table-v2__body'
        },
        [
          renderData.value.length === 0
            ? h(
                'div',
                {
                  class: 'cu-table-v2__empty'
                },
                [slots['empty']?.() || h('div', { class: 'cu-table-v2__empty_default' }, '暂无数据')]
              )
            : null,
          h(
            'table',
            {
              cellspacing: 0,
              cellpadding: 0
            },
            [
              h(TableColgroup),
              h(
                'tbody',
                renderData.value.map((data, rowIndex) => {
                  return h(TableRow, { data, rowIndex, key: data._key });
                })
              )
            ]
          )
        ]
      );
    };
  }
});
