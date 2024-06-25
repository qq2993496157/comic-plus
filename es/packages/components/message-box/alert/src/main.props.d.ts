import { ComicType2 } from '../../../../utils';
import { PropType, VNode } from 'vue';

export declare const alertProps: {
    readonly destroy: FunctionConstructor;
    readonly title: {
        readonly type: StringConstructor;
        readonly default: "提示";
    };
    readonly type: PropType<ComicType2>;
    readonly content: PropType<string | VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }>>;
    readonly closeButtonText: {
        readonly type: StringConstructor;
        readonly default: "关闭";
    };
    readonly icon: StringConstructor;
    readonly color: StringConstructor;
    readonly center: BooleanConstructor;
    readonly modeClose: BooleanConstructor;
    readonly escClose: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly showButton: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly showClose: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly showIcon: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly lockScroll: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly isVNode: BooleanConstructor;
    readonly customClass: StringConstructor;
    readonly modeClass: StringConstructor;
};
export type AlertOptions = {
    readonly title?: string;
    readonly type?: 'primary' | 'success' | 'warning' | 'info' | 'error';
    readonly content?: string | VNode;
    readonly closeButtonText?: string;
    readonly icon?: string;
    readonly color?: string;
    readonly center?: boolean;
    readonly modeClose?: boolean;
    readonly escClose?: boolean;
    readonly showButton?: boolean;
    readonly showClose?: boolean;
    readonly showIcon?: boolean;
    readonly lockScroll?: boolean;
    readonly customClass?: String;
    readonly modeClass?: String;
    readonly isVNode?: boolean;
};
