import { ComicType2 } from '../../../../utils';
import { PropType, VNode } from 'vue';

export declare const confirmProps: {
    destroy: FunctionConstructor;
    title: {
        readonly type: StringConstructor;
        readonly default: "提示";
    };
    type: PropType<ComicType2>;
    content: PropType<string | VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }>>;
    center: BooleanConstructor;
    cancelButtonText: {
        readonly type: StringConstructor;
        readonly default: "取消";
    };
    confirmButtonText: {
        readonly type: StringConstructor;
        readonly default: "确认";
    };
    icon: StringConstructor;
    color: StringConstructor;
    modeClose: BooleanConstructor;
    escClose: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    distinguishCloseAndCancel: BooleanConstructor;
    showConfirmButton: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    showCancelButton: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    showClose: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    showIcon: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    lockScroll: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    isVNode: BooleanConstructor;
    customClass: StringConstructor;
    modeClass: StringConstructor;
};
export type ConfirmOptions = {
    readonly title?: string;
    readonly type?: 'primary' | 'success' | 'warning' | 'info' | 'error';
    readonly content?: string | VNode;
    readonly center?: boolean;
    readonly cancelButtonText?: string;
    readonly confirmButtonText?: string;
    readonly icon?: string;
    readonly color?: string;
    readonly modeClose?: boolean;
    readonly escClose?: boolean;
    readonly distinguishCloseAndCancel?: boolean;
    readonly showConfirmButton?: boolean;
    readonly showCancelButton?: boolean;
    readonly showClose?: boolean;
    readonly showIcon?: boolean;
    readonly lockScroll?: boolean;
    readonly isVNode?: boolean;
    readonly customClass?: String;
    readonly modeClass?: String;
};
