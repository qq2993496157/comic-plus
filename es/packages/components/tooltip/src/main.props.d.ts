import { ExtractDefaultPropTypes, PropType } from 'vue';

export type Position = 'top-start' | 'top-center' | 'top-end' | 'bottom-start' | 'bottom-center' | 'bottom-end' | 'left-start' | 'left-center' | 'left-end' | 'right-start' | 'right-center' | 'right-end';
export declare const calcPosition: {
    'top-start': (target: any, parent: any) => {
        x: any;
        y: number;
    };
    'top-center': (target: any, parent: any) => {
        x: number;
        y: number;
    };
    'top-end': (target: any, parent: any) => {
        x: number;
        y: number;
    };
    'right-start': (target: any, parent: any) => {
        x: any;
        y: any;
    };
    'right-center': (target: any, parent: any) => {
        x: any;
        y: number;
    };
    'right-end': (target: any, parent: any) => {
        x: any;
        y: number;
    };
    'bottom-start': (target: any, parent: any) => {
        x: any;
        y: any;
    };
    'bottom-center': (target: any, parent: any) => {
        x: number;
        y: any;
    };
    'bottom-end': (target: any, parent: any) => {
        x: number;
        y: any;
    };
    'left-start': (target: any, parent: any) => {
        x: number;
        y: any;
    };
    'left-center': (target: any, parent: any) => {
        x: number;
        y: number;
    };
    'left-end': (target: any, parent: any) => {
        x: number;
        y: number;
    };
};
export declare const tooltipProps: {
    readonly content: StringConstructor;
    readonly position: {
        readonly type: PropType<Position>;
        readonly default: "top-center";
    };
    readonly triggerRef: {
        new (): HTMLElement;
        prototype: HTMLElement;
    };
};
export type TooltipProps = ExtractDefaultPropTypes<typeof tooltipProps>;
