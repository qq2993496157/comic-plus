import { DefineComponent, PropType } from 'vue';

declare const _default: DefineComponent<{
    svg: StringConstructor;
    size: {
        type: PropType<string | number>;
        default: number;
    };
}, () => import('vue').VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    svg: StringConstructor;
    size: {
        type: PropType<string | number>;
        default: number;
    };
}>>, {
    size: string | number;
}, {}>;
export default _default;
