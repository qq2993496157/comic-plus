import { ComicType2 } from '../../../../utils';
import { PropType, VNode } from 'vue';

export declare const noticeProps: {
    readonly position: {
        readonly type: PropType<"rt" | "rb" | "lt" | "lb">;
        readonly default: "rt";
    };
    readonly type: PropType<ComicType2>;
    readonly title: StringConstructor;
    readonly content: PropType<string | VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }>>;
    readonly icon: StringConstructor;
    readonly color: StringConstructor;
    readonly showClose: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly duration: {
        readonly type: NumberConstructor;
        readonly default: 3000;
    };
    readonly isVNode: BooleanConstructor;
    readonly click: FunctionConstructor;
};
export type NoticeOptions = {
    readonly position?: 'lt' | 'lb' | 'rt' | 'rb';
    readonly type?: ComicType2;
    readonly title?: string;
    readonly content?: string | VNode;
    readonly icon?: string;
    readonly color?: string;
    readonly showClose?: boolean;
    readonly duration?: number;
    readonly isVNode?: boolean;
    readonly click?: (close: () => void) => void;
};
