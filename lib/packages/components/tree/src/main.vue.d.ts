import { TreeKeyProps } from './type';

declare function getCheckedNodes(): any[];
declare function getCheckedKeys(): any[];
declare function setCheckedNodes(nodes: object[]): void;
declare function setCheckedKeys(keys: number[]): void;
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly data: import("vue").PropType<import("./main.props").TreeData[]>;
    readonly icon: StringConstructor;
    readonly selection: BooleanConstructor;
    readonly lazy: BooleanConstructor;
    readonly load: import("vue").PropType<(node: import("./main.props").TreeData, _then: (tree: import("./main.props").TreeData[]) => void, _catch: () => void) => void>;
    readonly treeProps: import("vue").PropType<TreeKeyProps>;
    readonly accordion: BooleanConstructor;
    readonly defaultExpandKeys: import("vue").PropType<number[]>;
    readonly defaultCheckedKeys: import("vue").PropType<number[]>;
    readonly distinguishClickAndExpand: BooleanConstructor;
    readonly defaultExpandAll: BooleanConstructor;
}, {
    getCheckedNodes: typeof getCheckedNodes;
    getCheckedKeys: typeof getCheckedKeys;
    setCheckedNodes: typeof setCheckedNodes;
    setCheckedKeys: typeof setCheckedKeys;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "node-click": (node: import("./main.props").TreeData, depths: number[]) => void;
    "node-expand": (node: import("./main.props").TreeData, expand: boolean, depths: number[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly data: import("vue").PropType<import("./main.props").TreeData[]>;
    readonly icon: StringConstructor;
    readonly selection: BooleanConstructor;
    readonly lazy: BooleanConstructor;
    readonly load: import("vue").PropType<(node: import("./main.props").TreeData, _then: (tree: import("./main.props").TreeData[]) => void, _catch: () => void) => void>;
    readonly treeProps: import("vue").PropType<TreeKeyProps>;
    readonly accordion: BooleanConstructor;
    readonly defaultExpandKeys: import("vue").PropType<number[]>;
    readonly defaultCheckedKeys: import("vue").PropType<number[]>;
    readonly distinguishClickAndExpand: BooleanConstructor;
    readonly defaultExpandAll: BooleanConstructor;
}>> & {
    "onNode-click"?: (node: import("./main.props").TreeData, depths: number[]) => any;
    "onNode-expand"?: (node: import("./main.props").TreeData, expand: boolean, depths: number[]) => any;
}, {
    readonly accordion: boolean;
    readonly lazy: boolean;
    readonly selection: boolean;
    readonly distinguishClickAndExpand: boolean;
    readonly defaultExpandAll: boolean;
}, {}>, {
    empty?(_: {}): any;
    default?(_: {
        node: any;
        parentNode: any;
        childNodes: any;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
