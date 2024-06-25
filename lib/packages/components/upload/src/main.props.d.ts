import { UploadFile, UploadInstance, UploadError } from './type';
import { PropType, ExtractPropTypes } from 'vue';

export declare const uploadProps: {
    readonly fileList: PropType<UploadFile[]>;
    readonly type: {
        readonly type: PropType<"picture" | "list">;
        readonly default: "list";
    };
    readonly http: {
        readonly type: PropType<string | ((instance: UploadInstance) => void)>;
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
    readonly onExceed: PropType<(files: File[], uploadFiles: UploadFile[]) => void>;
    readonly onLarge: PropType<(files: File[], largeFiles: File[], uploadFiles: UploadFile[]) => void>;
    readonly onSuccess: PropType<(file: UploadFile, uploadFiles: UploadFile[]) => void>;
    readonly onError: PropType<(err: UploadError, uploadFiles: UploadFile[]) => void>;
    readonly onChange: PropType<(uploadFiles: UploadFile[], rawFiles: UploadFile[]) => void>;
    readonly beforeUpload: PropType<(files: UploadInstance[]) => false | void>;
};
export type UploadProps = ExtractPropTypes<typeof uploadProps>;
export declare const uploadEmits: {
    "update:fileList": (files: UploadFile[]) => boolean;
};
export type UploadEmits = typeof uploadEmits;
