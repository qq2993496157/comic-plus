import { TreeProps, TableData } from './type';

declare function selectRow(row: TableData | TableData[]): void;
declare function clearSelection(): void;
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly height: StringConstructor;
    readonly size: import("vue").PropType<import("../../../utils").ComicSize>;
    readonly data: import("vue").PropType<TableData[]>;
    readonly options: import("vue").PropType<import("./type").TableOption>;
    readonly treeProps: import("vue").PropType<TreeProps>;
    readonly lazyLoad: BooleanConstructor;
    readonly load: import("vue").PropType<import("./type").Load>;
    readonly expand: BooleanConstructor;
    readonly headerClassName: StringConstructor;
    readonly bodyClassName: StringConstructor;
}, {
    selectRow: typeof selectRow;
    clearSelection: typeof clearSelection;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "select-change": (val: any) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly height: StringConstructor;
    readonly size: import("vue").PropType<import("../../../utils").ComicSize>;
    readonly data: import("vue").PropType<TableData[]>;
    readonly options: import("vue").PropType<import("./type").TableOption>;
    readonly treeProps: import("vue").PropType<TreeProps>;
    readonly lazyLoad: BooleanConstructor;
    readonly load: import("vue").PropType<import("./type").Load>;
    readonly expand: BooleanConstructor;
    readonly headerClassName: StringConstructor;
    readonly bodyClassName: StringConstructor;
}>> & {
    "onSelect-change"?: (val: any) => any;
}, {
    readonly expand: boolean;
    readonly lazyLoad: boolean;
}, {}>, Partial<Record<string, (_: {}) => any>> & Partial<Record<string, (_: {
    row: any;
    index: number;
}) => any>> & {
    empty?(_: {}): any;
    expand?(_: {
        row: any;
        index: number;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
