import { ComicType2 } from '../../../../utils';
import { PropType, VNode } from 'vue';

export declare const messageProps: {
    id: StringConstructor;
    close: FunctionConstructor;
    destroy: FunctionConstructor;
    type: PropType<ComicType2>;
    content: PropType<string | VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }>>;
    icon: StringConstructor;
    color: StringConstructor;
    showClose: BooleanConstructor;
    duration: {
        readonly type: NumberConstructor;
        readonly default: 3000;
    };
    showIcon: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    isVNode: BooleanConstructor;
};
export type MessageOptions = {
    readonly type?: 'primary' | 'success' | 'warning' | 'info' | 'error';
    readonly content?: string | VNode;
    readonly icon?: string;
    readonly color?: string;
    readonly showClose?: boolean;
    readonly duration?: number;
    readonly showIcon?: boolean;
    readonly isVNode?: boolean;
};
