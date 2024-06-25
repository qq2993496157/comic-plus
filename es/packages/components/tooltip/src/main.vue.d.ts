import { Position } from './main.props';

declare function update(content: string, position?: Position): void;
declare const _default: import('vue').DefineComponent<{
    readonly content: StringConstructor;
    readonly position: {
        readonly type: import("vue").PropType<Position>;
        readonly default: "top-center";
    };
    readonly triggerRef: {
        new (): HTMLElement;
        prototype: HTMLElement;
    };
}, {
    update: typeof update;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly content: StringConstructor;
    readonly position: {
        readonly type: import("vue").PropType<Position>;
        readonly default: "top-center";
    };
    readonly triggerRef: {
        new (): HTMLElement;
        prototype: HTMLElement;
    };
}>>, {
    readonly position: Position;
}, {}>;
export default _default;
