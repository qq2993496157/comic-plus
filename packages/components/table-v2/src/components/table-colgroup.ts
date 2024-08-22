import { defineComponent, h } from 'vue';
import { inject } from 'vue';
import { TABLE_V2_PROVIDE } from '../type';
export default defineComponent({
  name: 'TableColgroup',
  setup() {
    const { columns, setColumnWidth } = inject(TABLE_V2_PROVIDE);

    return () => {
      return h('colgroup', [columns.value.map((v) => h('col', { width: setColumnWidth(v) }))]);
    };
  }
});
