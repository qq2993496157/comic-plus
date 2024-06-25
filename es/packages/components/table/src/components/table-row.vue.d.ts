import { TableData } from '../type';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly row: import("vue").PropType<TableData>;
    readonly index: NumberConstructor;
    readonly calcPaddingLeft: {
        readonly type: NumberConstructor;
        readonly default: 20;
    };
    readonly show: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly row: import("vue").PropType<TableData>;
    readonly index: NumberConstructor;
    readonly calcPaddingLeft: {
        readonly type: NumberConstructor;
        readonly default: 20;
    };
    readonly show: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>>, {
    readonly show: boolean;
    readonly calcPaddingLeft: number;
}, {}>, Partial<Record<string, (_: {
    row: unknown;
}) => any>> & Partial<Record<string, (_: {
    row: any;
}) => any>> & {
    expand?(_: {
        row: any;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
