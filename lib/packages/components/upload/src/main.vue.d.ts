import { UploadFile, UploadError } from './type';
import { default as UploadInstance } from '../utils/upload';

declare function submit(): Promise<void>;
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    readonly fileList: import("vue").PropType<UploadFile[]>;
    readonly type: {
        readonly type: import("vue").PropType<"picture" | "list">;
        readonly default: "list";
    };
    readonly http: {
        readonly type: import("vue").PropType<string | ((instance: UploadInstance) => void)>;
        readonly required: true;
    };
    readonly headers: ObjectConstructor;
    readonly data: ObjectConstructor;
    readonly autoUpload: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly multiple: BooleanConstructor;
    readonly limit: NumberConstructor;
    readonly disabled: BooleanConstructor;
    readonly maxFileSize: StringConstructor;
    readonly withCredentials: BooleanConstructor;
    readonly accept: StringConstructor;
    readonly onExceed: import("vue").PropType<(files: File[], uploadFiles: UploadFile[]) => void>;
    readonly onLarge: import("vue").PropType<(files: File[], largeFiles: File[], uploadFiles: UploadFile[]) => void>;
    readonly onSuccess: import("vue").PropType<(file: UploadFile, uploadFiles: UploadFile[]) => void>;
    readonly onError: import("vue").PropType<(err: UploadError, uploadFiles: UploadFile[]) => void>;
    readonly onChange: import("vue").PropType<(uploadFiles: UploadFile[], rawFiles: UploadFile[]) => void>;
    readonly beforeUpload: import("vue").PropType<(files: UploadInstance[]) => false | void>;
}, {
    submit: typeof submit;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:fileList": (files: UploadFile[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly fileList: import("vue").PropType<UploadFile[]>;
    readonly type: {
        readonly type: import("vue").PropType<"picture" | "list">;
        readonly default: "list";
    };
    readonly http: {
        readonly type: import("vue").PropType<string | ((instance: UploadInstance) => void)>;
        readonly required: true;
    };
    readonly headers: ObjectConstructor;
    readonly data: ObjectConstructor;
    readonly autoUpload: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly multiple: BooleanConstructor;
    readonly limit: NumberConstructor;
    readonly disabled: BooleanConstructor;
    readonly maxFileSize: StringConstructor;
    readonly withCredentials: BooleanConstructor;
    readonly accept: StringConstructor;
    readonly onExceed: import("vue").PropType<(files: File[], uploadFiles: UploadFile[]) => void>;
    readonly onLarge: import("vue").PropType<(files: File[], largeFiles: File[], uploadFiles: UploadFile[]) => void>;
    readonly onSuccess: import("vue").PropType<(file: UploadFile, uploadFiles: UploadFile[]) => void>;
    readonly onError: import("vue").PropType<(err: UploadError, uploadFiles: UploadFile[]) => void>;
    readonly onChange: import("vue").PropType<(uploadFiles: UploadFile[], rawFiles: UploadFile[]) => void>;
    readonly beforeUpload: import("vue").PropType<(files: UploadInstance[]) => false | void>;
}>> & {
    "onUpdate:fileList"?: (files: UploadFile[]) => any;
}, {
    readonly disabled: boolean;
    readonly type: "picture" | "list";
    readonly withCredentials: boolean;
    readonly multiple: boolean;
    readonly autoUpload: boolean;
}, {}>, {
    default?(_: {}): any;
    trigger?(_: {}): any;
    tip?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
