import { ref, watch, computed, reactive } from 'vue';
import { TableData, RenderData, UseTableOptions } from '../type';

export const useTable = (tableData: any, { props, columns, emit }: UseTableOptions) => {
  const renderData = ref<RenderData[]>([]);

  const hasExpandColumn = computed(() => !!columns.value?.find((v) => v.type === 'expand'));
  const treeChildrenKeyName = computed(() => props.treeProps?.['children'] ?? 'children');
  const treeHasChildrenKeyName = computed(() => props.treeProps?.['hasChildren'] ?? 'hasChildren');
  const firstDefaultColumnIndex = computed(() => columns.value.findIndex((v) => v.type === 'default'));

  const isTreeNode = computed(() => {
    return (
      props.data?.some((row) => row[treeChildrenKeyName.value] || row[treeHasChildrenKeyName.value]) && !!props.rowKey
    );
  });

  const getDeptParentShows = (data: RenderData) => {
    let result = [];
    let current = renderData.value.find((v) => v._key === data._parentKey);

    if (current) {
      result.push(current.show);
      current._parentKey && result.push(...getDeptParentShows(current));
    }
    return result;
  };

  const updateRowShow = (key: any) => {
    let current = renderData.value.find((v) => v._key === key);
    if (current) {
      current.show = !current.show;
    }

    for (let i = 0; i < renderData.value.length; i++) {
      let data = renderData.value[i];
      if (data._parentKey) {
        let shows = getDeptParentShows(data);
        data.display = shows.every((v) => v);
      }
    }
  };

  const changeShowMore = (data: RenderData) => {
    if (props.lazy && !data.hasChildren()) {
      data.loading = true;
      props.load(data.row, resolve);
    } else {
      updateRowShow(data._key);
    }

    function resolve(arr: TableData[]) {
      let renderArr = arr.map((item) => createRowData({ data: item, level: data._level + 1, parentKey: data._key }));
      let insetIdx = renderData.value.findIndex((v) => v._key === data._key);
      renderData.value.splice(insetIdx + 1, 0, ...renderArr);
      data.loading = false;
      updateRowShow(data._key);
    }
  };

  const createRowData = ({ data, level, parentKey }) => {
    let result = {
      row: data,
      selection: false,
      expand: () => hasExpandColumn.value,
      display: !parentKey
    } as RenderData;

    if (props.rowKey) {
      result = {
        ...result,
        _key: data[props.rowKey] ?? JSON.stringify(data),
        _parentKey: parentKey,
        _level: level,
        display: !parentKey,
        show: false,
        treeExpand: !!data[treeChildrenKeyName.value] || data[treeHasChildrenKeyName.value],
        hasChildren: () => renderData.value.some((v) => v._parentKey === data[props.rowKey]),
        loading: false
      };
    }
    return result;
  };

  function setTableDatas(data: TableData, level: number, parentKey?: any) {
    let { rowKey } = props;

    let $obj = createRowData({ data, level, parentKey });

    let result = [$obj];
    if (isTreeNode.value && rowKey) {
      const childrens = data[treeChildrenKeyName.value] ?? [];
      if (childrens.length > 0) {
        for (let i = 0; i < childrens.length; i++) {
          const item = childrens[i];
          let $child = createRowData({ data: item, level: level + 1, parentKey: data[rowKey] });

          if (item[treeChildrenKeyName.value]) {
            result.push(...setTableDatas(item, level + 1, data[rowKey]));
          } else {
            result.push($child);
          }
        }
      }
    }

    return result;
  }

  const updateTableData = () => {
    let level = 0;

    renderData.value = props.data?.reduce<RenderData[]>((result: RenderData[], data) => {
      return [...result, ...setTableDatas(data, level)];
    }, []);
  };

  const isAllSelected = computed(() => {
    return renderData.value.length > 0 && renderData.value.every((v) => v.selection);
  });

  const indeterminate = computed(() => {
    return renderData.value.length > 0 && renderData.value.some((v) => v.selection);
  });

  const emitSelectRow = () => {
    let selectRows = renderData.value.filter((v) => v.selection).map((v) => v.row);
    emit('select-row', selectRows);
  };

  const selectAll = (value: boolean) => {
    renderData.value.forEach((row) => {
      row.selection = value;
    });
    emitSelectRow();
  };

  const rowSelection = reactive({
    newRow: null,
    oldRow: null,
    newIdx: -1,
    oldIdx: -1
  });

  const clickRow = (value: TableData, idx: number) => {
    if (!props.highlightCurrentRow) return;
    rowSelection.oldRow = rowSelection.newRow;
    rowSelection.oldIdx = rowSelection.newIdx;
    rowSelection.newRow = value;
    rowSelection.newIdx = idx;
    emit('current-change', rowSelection.newRow, rowSelection.oldRow);
  };

  watch(
    () => tableData,
    () => {
      updateTableData();
    },
    { deep: true }
  );

  updateTableData();

  return {
    renderData,
    rowSelection,
    isAllSelected,
    indeterminate,
    treeChildrenKeyName,
    treeHasChildrenKeyName,
    firstDefaultColumnIndex,
    isTreeNode,

    selectAll,
    clickRow,
    updateRowShow,
    changeShowMore
  };
};

export type UseTableReturn = ReturnType<typeof useTable>;
