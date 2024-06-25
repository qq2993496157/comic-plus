import { NoticeInstance } from './instance';
import { PropType } from 'vue';

declare const _default: import('vue').DefineComponent<{
    position: StringConstructor;
    list: PropType<NoticeInstance[]>;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    empty: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    position: StringConstructor;
    list: PropType<NoticeInstance[]>;
}>> & {
    onEmpty?: (...args: any[]) => any;
}, {}, {}>;
export default _default;
