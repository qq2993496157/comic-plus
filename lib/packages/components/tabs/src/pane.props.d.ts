import { PropType, ExtractPropTypes } from 'vue';

export declare const tabPaneProps: {
    readonly name: PropType<string | number>;
    readonly label: StringConstructor;
    readonly icon: StringConstructor;
};
export type TabPaneProps = ExtractPropTypes<typeof tabPaneProps>;
