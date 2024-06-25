export declare const loadingProps: {
    readonly icon: {
        readonly tyoe: StringConstructor;
        readonly default: "cu-icon-loading";
    };
    readonly defaultVisible: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly text: StringConstructor;
    readonly blur: BooleanConstructor;
    readonly background: StringConstructor;
    readonly color: StringConstructor;
    readonly target: {
        new (): HTMLElement;
        prototype: HTMLElement;
    };
    readonly glabal: BooleanConstructor;
};
export type LoadingProps = {
    readonly icon?: string;
    readonly defaultVisible?: boolean;
    readonly text?: string;
    readonly blur?: boolean;
    readonly background?: string;
    readonly color?: string;
    readonly target?: HTMLElement;
    readonly glabal?: boolean;
};
