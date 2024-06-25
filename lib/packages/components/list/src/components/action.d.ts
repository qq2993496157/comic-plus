import { CSSProperties, PropType } from 'vue';

type ActionItem = {
    label?: string;
    value: string;
    style?: CSSProperties;
};
declare const _default: import('vue').DefineComponent<{
    actions: PropType<string[] | ActionItem[]>;
    align: {
        type: PropType<"center" | "end" | "start">;
        default: string;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (action: string) => boolean;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    actions: PropType<string[] | ActionItem[]>;
    align: {
        type: PropType<"center" | "end" | "start">;
        default: string;
    };
}>> & {
    onClick?: (action: string) => any;
}, {
    align: "center" | "end" | "start";
}, {}>;
export default _default;
