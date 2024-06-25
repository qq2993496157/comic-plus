import { LoadingInstance, LoadingOptions } from './type';

declare const attributes: {
    readonly blur: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly icon: {
        readonly type: StringConstructor;
        readonly default: "cu-icon-loading";
    };
    readonly text: {
        readonly type: StringConstructor;
        readonly default: any;
    };
    readonly background: {
        readonly type: StringConstructor;
        readonly default: any;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: any;
    };
};
type Attributes = typeof attributes;
type loadingAttributes = {
    [K in keyof Attributes]: Attributes[K]['default'];
};
declare function createLoading(props: {
    glabal?: boolean;
    defaultVisible: boolean;
} & LoadingOptions): {
    vnode: import('vue').VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    updateVisible: (val: boolean) => void;
    destroy: () => void;
};
declare function getDataAttribute(el: HTMLElement): loadingAttributes;
declare function LoadingService(option?: LoadingOptions): LoadingInstance;
export { createLoading, getDataAttribute, LoadingService };
